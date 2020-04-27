import React, { Component } from 'react';
import { Card, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core';
import OneCrypto from './OneCrypto';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import store from '../reduxStore/store'
import { addNewCurrency, fetchMyWallet } from '../reduxStore/actions';
import { connect } from 'react-redux'


class MyWallet extends Component {
  constructor() {
    super()
    this.state = {
      isDialogOpen: false,
      price: null,
      currency: null,
      amountBought: null,
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
      time: date.getTime(),
    }
  }
  openDialog = () => {
    this.setState({ isDialogOpen: true })
  }
  closeDialog = () => {
    this.setState({ isDialogOpen: false })
  }
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Card style={{ backgroundColor: '#24204b', borderRadius: 20, height: '100%' }}>
          <Grid container justify='center'>
            <Grid item xs={11}>
              <Typography variant='h6' style={{ color: 'white', padding: '20px 20px 0 20px' }} >My Wallet</Typography>
              <Grid container justify='center' style={{ padding: 10 }}>
                <div style={{ padding: '10px 5px', width: '80%' }}>
                  <Card onClick={this.openDialog} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backgroundColor: '#402a93',
                    borderRadius: 25,
                    padding: '10px 20px',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                    alignItems: 'center'
                  }}>
                    <Typography style={{ color: 'white', flexGrow: 1 }}>Add a new currency</Typography>
                    <AddCircleIcon style={{ color: 'white' }} />
                  </Card>
                </div>
                {this.props.myCurrencies.map((x, i) => (
                  <Grid key={i} item xs={12} style={{ padding: '10px 5px' }}>
                    <OneCrypto myWallet={x} />
                  </Grid>
                ))}

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
            <TextField
              onChange={(e) => this.setState({ currency: e.target.value })}
              autoFocus
              margin="dense"
              id="currency"
              label="Currency"
              type="text"
              fullWidth
            />
            <TextField
              onChange={(e) => this.setState({ price: e.target.value })}
              margin="dense"
              id="price"
              label="Buying price in dollars for one unit"
              type="number"
              fullWidth
            />
            <TextField
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
      </div>
    );
  }
}
const mapStateToProps = state => ({
  myCurrencies: state.myWallet.currencies
})

export default connect(mapStateToProps, { addNewCurrency, fetchMyWallet })(MyWallet)
