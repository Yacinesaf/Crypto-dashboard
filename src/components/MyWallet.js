import React, { Component } from 'react';
import { Card, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Menu, MenuItem, Input, InputAdornment, IconButton, CircularProgress, Tabs, Tab, Box } from '@material-ui/core';
import OneCrypto from './OneCrypto';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { addCrypto, removeCrypto, showSnackbar, editCrypto, getLocalStore, setSymbol, setLabel } from '../reduxStore/actions';
import { connect } from 'react-redux'
import { nameFormat } from '../services/helperFunctions'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import emptystate from '../assets/emptystate.svg'
import { withStyles } from "@material-ui/core/styles";
import '../style.css'

const styles = {
  root: {
    background: "black"
  },
  input: {
    color: "white"
  }
};

class MyWallet extends Component {
  constructor() {
    super()
    this.state = {
      isDialogOpen: false,
      price: null,
      name: null,
      amountBought: null,
      anchorEl: null,
      symbol: null,
      cryptoFieldValue: 'Crypto',
      isCryptoChanging: false
    }
  }

  componentDidMount() {
    this.props.getLocalStore()
  }
  generateNewCurrnecy() {
    let date = new Date()
    return {
      name: this.state.name,
      boughtPrice: this.state.price,
      amount: this.state.amountBought,
      symbol: this.state.symbol,
      time: date.getTime(),
    }
  }
  openDialog = () => {
    this.setState({ isDialogOpen: true })
  }
  closeDialog = () => {
    this.setState({ isDialogOpen: false, symbol: null, amountBought : null, price : null })
  }
  openMenu = (e) => {
    this.setState({ anchorEl: e.currentTarget })
  }
  closeMenu = () => {
    this.setState({ anchorEl: null })
  }
  notEditingCrypto = () => {
    this.setState({ isCryptoChanging: false })
  }
  clearDialogFields = () => {
    this.setState({ amountBought: null, price: null })
  }

  openEditDialog = (currentCrypto) => {
    this.setState({
      symbol: currentCrypto.symbol,
      price: currentCrypto.boughtPrice,
      amountBought: currentCrypto.amount,
      isCryptoChanging: true,
      name: currentCrypto.name,
      value: 0
    })
    this.openDialog();
  }

  addFromVerification = () => {
    return this.state.symbol && this.state.amountBought > 0 && this.state.price > 0
  }

  menuCryptoesKeys = () => {
    let keys = Object.keys(this.props.cryptoes);
    let myKeys = this.props.myCurrencies.map(x => {
      return x.symbol
    })
    return keys.filter(x => !myKeys.includes(x))
  }


  render() {
    return (
      <div style={{ height: '100%' }}>
        <Card className='style-1' style={{ backgroundColor: '#24204b', borderRadius: 20, height: '100%', overflowY: this.props.smDown ? 'hidden' : 'scroll' }}>
          <Grid container justify='center'>
            <Grid item xs={11}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' style={{ color: 'white', padding: '20px 20px 0 20px', flexGrow: 1 }} >My Wallet</Typography>
                <IconButton onClick={this.openDialog} style={{ cursor: 'pointer', paddingTop: 20 }}>
                  <AddCircleIcon style={{ color: 'white', fontSize: 40 }} />
                </IconButton>
              </div>
              <Grid container justify='center' alignItems={!this.props.myCurrencies.length > 0 ? 'center' : 'unset'} style={{ padding: 10, height: !this.props.myCurrencies.length > 0 ? 'calc(100vh - 238px)' : 'unset' }}>
                {!this.props.myCurrencies.length > 0 ?
                  <div>
                    <Typography variant='h6' style={{ color: 'white', textAlign: 'center' }}>Add a new crypto</Typography>
                    <img src={emptystate} alt='empty' style={{ height: 300, width: 300, paddingTop: 70 }} />
                  </div>
                  :
                  this.props.myCurrencies.map((x, i) => (
                    <Grid key={i} item xs={12} style={{ padding: '20px 5px', display: 'flex', alignItems: 'center' }}>
                      <OneCrypto
                        showSnackbar={this.props.showSnackbar}
                        removeCrypto={this.props.removeCrypto}
                        openEditDialog={this.openEditDialog}
                        myCrypto={x} />
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
          </Grid>
        </Card>
        <Dialog
          onExited={() => this.setState({ isCryptoChanging: false })}
          onEscapeKeyDown={this.closeDialog}
          onBackdropClick={() => this.setState({ price: null, amountBought: null })}
          open={this.state.isDialogOpen}
          onClose={this.closeDialog} >
          <DialogTitle id="form-dialog-title">{this.state.isCryptoChanging ? 'Update currency' : 'Add currency'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Here you can add the crypto currency you want, just fill the fields below.
            </DialogContentText>
            <form onClick={(e) => {
              if (!this.state.isCryptoChanging) {
                this.openMenu(e);
              }
            }}
              style={{ width: 'fit-content', padding: '10px 0px' }}>
              <Input
                disabled
                endAdornment={<InputAdornment position="end"><ArrowDropDownIcon /></InputAdornment>}
                value={this.state.isCryptoChanging ? this.state.symbol : (this.state.symbol ? this.state.symbol : 'Crypto')}
                inputProps={{ 'aria-label': 'description', readOnly: true }} />
            </form>
            <TextField
              style={{ padding: '10px 0px' }}
              required
              onChange={(e) => this.setState({ price: e.target.value })}
              margin="dense"
              id="price"
              label="Buying price in dollars for one unit"
              type="number"
              fullWidth
              value={this.state.price ? this.state.price : ''}
            />
            <TextField
              style={{ padding: '10px 0px' }}
              required
              onChange={(e) => this.setState({ amountBought: e.target.value })}
              margin="dense"
              id="number"
              label="Amount"
              type="number"
              fullWidth
              value={this.state.amountBought ? this.state.amountBought : ''}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeDialog} color="primary">
              Cancel
             </Button>
            <Button disabled={!this.addFromVerification()} onClick={() => {
              if (this.state.isCryptoChanging) {
                this.props.editCrypto(this.generateNewCurrnecy());
                showSnackbar('Crypto updated successfully', 'success');
                this.notEditingCrypto();
                this.closeDialog();
                this.clearDialogFields();
              } else {
                this.props.setSymbol(this.state.symbol)
                this.props.setLabel(this.state.name)
                this.props.addCrypto(this.generateNewCurrnecy());
                this.closeDialog()
                this.clearDialogFields();
              }
            }}
              color="primary">
              {this.state.isCryptoChanging ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </Dialog>
        <Menu
          style={{ zIndex: 2000 }}
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.closeMenu}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          elevation={4}
        >
          {this.menuCryptoesKeys().map((x, i) => (
            <MenuItem key={i}
              style={{ width: 214 }}
              onClick={(e) => {
                this.setState({ symbol: e.currentTarget.innerText, name: nameFormat(e.currentTarget.innerText) });
                this.closeMenu()
              }}
            >
              <Typography>{x}</Typography>
            </MenuItem>
          ))
          }
        </Menu>
      </div >
    );
  }
}
const mapStateToProps = state => ({
  myCurrencies: state.wallet.currencies,
  cryptoes: state.cryptoesPrice.cryptoes,
})

export default connect(mapStateToProps, { addCrypto, removeCrypto, showSnackbar, editCrypto, getLocalStore, setSymbol, setLabel })(withStyles(styles)(MyWallet))
