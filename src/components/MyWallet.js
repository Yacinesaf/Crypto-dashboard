import React, { Component } from 'react';
import { Card, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Menu, MenuItem, Input, InputAdornment, IconButton, CircularProgress } from '@material-ui/core';
import OneCrypto from './OneCrypto';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import store from '../reduxStore/store'
import { addNewCurrency, fetchMyWallet, deletingCrypto, showSnackbar } from '../reduxStore/actions';
import { connect } from 'react-redux'
import { nameFormat } from '../services/helperFunctions'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import emptystate from '../assets/emptystate.svg'


class MyWallet extends Component {
  constructor() {
    super()
    this.state = {
      isDialogOpen: false,
      price: null,
      currency: null,
      amountBought: null,
      anchorEl: null,
      symbol: null,
      cryptoFieldValue : 'Crypto'
    }
  }

  componentDidMount() {
    this.props.fetchMyWallet()
  }
  generateNewCurrnecy() {
    let date = new Date()
    return {
      userId: store.getState().user.id,
      name: this.state.currency,
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
    this.setState({ isDialogOpen: false })
  }
  openMenu = (e) => {
    this.setState({ anchorEl: e.currentTarget })
  }
  closeMenu = () => {
    this.setState({ anchorEl: null })
  }
  render() {
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
              <Grid container justify='center' style={{ padding: 10 }}>
                {!this.props.myCurrencies.length > 0 ? <img src={emptystate} alt='empty' style={{ height: 300, width: 300, paddingTop: 100 }} /> :
                  this.props.myCurrencies.map((x, i) => (
                    <Grid key={i} item xs={12} style={{ padding: '20px 5px', display: 'flex', alignItems: 'center' }}>
                      <OneCrypto
                        showSnackbar={this.props.showSnackbar}
                        deletingCrypto={this.props.deletingCrypto}
                        myCrypto={x} />
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
          </Grid>
        </Card>
        <Dialog
          onEscapeKeyDown={this.closeDialog}
          open={this.state.isDialogOpen}
          onClose={this.closeDialog} >
          <DialogTitle id="form-dialog-title">Add currency</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Here you can add the crypto currency you want, just fill the fields below.
            </DialogContentText>
            <form onClick={this.openMenu} style={{ width: 'fit-content' }}>
              <Input endAdornment={<InputAdornment position="end"><ArrowDropDownIcon /></InputAdornment>} value={this.state.symbol ? this.state.symbol : 'Crypto'} inputProps={{ 'aria-label': 'description', readOnly: true }} />
            </form>
            <TextField
              required
              onChange={(e) => this.setState({ price: e.target.value })}
              margin="dense"
              id="price"
              label="Buying price in dollars for one unit"
              type="number"
              fullWidth
            />
            <TextField
              required
              onChange={(e) => this.setState({ amountBought: e.target.value })}
              margin="dense"
              id="number"
              label="Amount"
              type="number"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeDialog} color="primary">
              Cancel
             </Button>
            <Button onClick={() => {
              this.props.addNewCurrency(this.generateNewCurrnecy()).then(() => {
                this.closeDialog()
              })
            }}
              color="primary">
              Add
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
          {Object.keys(this.props.cryptoes).map((x, i) => (
            <MenuItem key={i}
              style={{ width: 214 }}
              onClick={(e) => {
                this.setState({ symbol: e.currentTarget.innerText, currency: nameFormat(e.currentTarget.innerText) });
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

export default connect(mapStateToProps, { addNewCurrency, fetchMyWallet, deletingCrypto, showSnackbar })(MyWallet)
