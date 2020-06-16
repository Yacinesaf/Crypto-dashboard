import React, { Component } from 'react';
import { Card, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Menu, MenuItem, Input, InputAdornment, IconButton, CircularProgress } from '@material-ui/core';
import OneCrypto from './OneCrypto';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { addCrypto, fetchMyWallet, removeCrypto, showSnackbar, editCrypto } from '../reduxStore/actions';
import { connect } from 'react-redux'
import { nameFormat } from '../services/helperFunctions'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import emptystate from '../assets/emptystate.svg'
import { withStyles } from "@material-ui/core/styles";
import { getDailyPrices } from '../services/apiEndpoints'

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
    getDailyPrices()
    this.props.fetchMyWallet()
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
    this.setState({ isDialogOpen: false, symbol: null })
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
      name: currentCrypto.name
    })
    this.openDialog();
  }


  render() {
    const { classes } = this.props
    return (
      <div style={{ height: '100%' }}>
        <Card style={{ backgroundColor: '#24204b', borderRadius: 20, height: '100%' }}>
          <Grid container justify='center'>
            <Grid item xs={11}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6' style={{ color: 'white', padding: '20px 20px 0 20px', flexGrow: 1 }} >My Wallet</Typography>
                <IconButton onClick={this.openDialog} style={{ cursor: 'pointer', paddingTop: 20 }}>
                  <AddCircleIcon style={{ color: 'white', fontSize: 40 }} />
                </IconButton>
              </div>
              <Grid container justify='center' style={{ padding: 10, }}>
                {!this.props.myCurrencies.length > 0 ? <img src={emptystate} alt='empty' style={{ height: 300, width: 300, paddingTop: 100 }} /> :
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
          open={this.state.isDialogOpen}
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          onClose={this.closeDialog} >
          <div style={{ backgroundColor: '#24204b' }}>
            <DialogTitle style={{ color: 'white' }} id="form-dialog-title">{this.state.isCryptoChanging ? 'Update currency' : 'Add currency'}</DialogTitle>
            <DialogContent>
              <DialogContentText style={{ color: 'white' }}>
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
                  style={{ color: 'white' }}
                  endAdornment={<InputAdornment position="end"><ArrowDropDownIcon style={{ color: 'white' }} /></InputAdornment>}
                  value={this.state.isCryptoChanging ? this.state.symbol : (this.state.symbol ? this.state.symbol : 'Crypto')}
                  inputProps={{ 'aria-label': 'description', readOnly: true }} />
              </form>
              <TextField
                style={{ padding: '10px 0px' }}
                InputProps={{
                  className: classes.input
                }}
                InputLabelProps={{
                  className: classes.input
                }}
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
                InputProps={{
                  className: classes.input
                }}
                InputLabelProps={{
                  className: classes.input
                }}
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
              <Button style={{ color: 'white' }} onClick={this.closeDialog} color="primary">
                Cancel
             </Button>
              <Button style={{ color: 'white' }} onClick={() => {
                if (this.state.isCryptoChanging) {
                  this.props.editCrypto(this.generateNewCurrnecy());
                  showSnackbar('Crypto updated successfully', 'success');
                  this.notEditingCrypto();
                  this.props.fetchMyWallet();
                  this.closeDialog();
                  this.clearDialogFields();
                } else {
                  this.props.addCrypto(this.generateNewCurrnecy());
                  this.closeDialog()
                  this.clearDialogFields();
                }
              }}
                color="primary">
                {this.state.isCryptoChanging ? 'Update' : 'Add'}

              </Button>
            </DialogActions>
          </div>
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
          {Object.keys(this.props.cryptoes).map((x, i) => (
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

export default connect(mapStateToProps, { addCrypto, fetchMyWallet, removeCrypto, showSnackbar, editCrypto })(withStyles(styles)(MyWallet))
