import React from 'react';
import { Card, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core';
import OneCrypto from './OneCrypto';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import store from '../reduxStore/store'
import { addNewCurrency } from '../reduxStore/actions';

function MyCryptoes(props) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [price, setPrice] = React.useState(null);
  const [currency, setCurrency] = React.useState(null);
  const [amountBought, setAmountBought] = React.useState(null);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const generateNewCurrnecy = () => {
    let date = new Date()
    return {
      userId: store.getState().user.id,
      name: currency,
      boughtPrice: price,
      amount: amountBought,
      time: date.getTime(),
    }
  }

  const useStyles = makeStyles({
    card: {
      backgroundColor: '#402a93',
      borderRadius: 25,
      padding: '10px 20px',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      display: 'flex',
      alignItems: 'center'
    },
    dialog: {
      backgroundColor: '#24204b',
    }
  })

  const classes = useStyles()
  return (
    <div>
      <Card style={{ backgroundColor: '#24204b', borderRadius: 20, height: '100%' }}>
        <Grid container justify='center'>
          <Grid item xs={11}>
            <Typography variant='h6' style={{ color: 'white', padding: '20px 20px 0 20px' }} >My Wallet</Typography>
            <Grid container justify='center' style={{ padding: 10 }}>
              <div style={{ padding: '10px 5px', width: '80%' }}>
                <Card onClick={openDialog} className={classes.card} style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                  <Typography style={{ color: 'white', flexGrow: 1 }}>Add a new currency</Typography>
                  <AddCircleIcon style={{ color: 'white' }} />
                </Card>
              </div>
              {[1, 2, 3, 4, 5].map(x => (
                <Grid key={x} item xs={12} style={{ padding: '10px 5px' }}>
                  <OneCrypto currencyAmount={amountBought} currency={currency} price={price} />
                </Grid>
              ))}

            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Dialog
        onEscapeKeyDown={closeDialog}
        open={isDialogOpen}
        onClose={closeDialog} >
        <DialogTitle id="form-dialog-title">Add currency</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here you can add the crypto currency you want, just fill the fields below.
        </DialogContentText>
          <TextField
            onChange={(e) => setCurrency(e.target.value)}
            autoFocus
            margin="dense"
            id="currency"
            label="Currency"
            type="text"
            fullWidth
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            margin="dense"
            id="price"
            label="Buying price in dollars for one unit"
            type="number"
            fullWidth
          />
          <TextField
            onChange={(e) => setAmountBought(e.target.value)}
            margin="dense"
            id="number"
            label="Amount"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
        </Button>
          <Button onClick={() => {
            addNewCurrency(generateNewCurrnecy()).then(() => {
              // closeDialog()
            })
          }}
            color="primary">
            Add
        </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}

export default MyCryptoes;
