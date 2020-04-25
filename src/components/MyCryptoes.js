import React from 'react';
import { Card, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core';
import OneCrypto from './OneCrypto';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import emptystate from '../assets/emptystate.svg'

function MyCryptoes(props) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

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
  const amount = 5
  const currency = 'Bitcoin'
  const price = 14005
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
                  <AddCircleIcon fontSize='small' style={{ color: 'white' }} />
                </Card>
              </div>
              {[1, 2, 3, 4, 5].map(x => (
                <Grid key={x} item xs={12} style={{ padding: '10px 5px' }}>
                  <OneCrypto currencyAmount={amount} currency={currency} price={price} />
                </Grid>
              ))}
              {/*<img src={emptystate} alt='empty' height='200px' width='200px' />*/}
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Dialog
        PaperProps={{
          classes: {
            root: classes.dialog
          }
        }}
        onEscapeKeyDown={closeDialog}
        open={isDialogOpen}
        onClose={closeDialog} >
        <DialogTitle id="form-dialog-title">Add currency</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here you can add the crypto currency you want, just fill the fields below.
        </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="currency"
            label="Currency"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="price"
            type="number"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="number"
            label="Amount bought"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
        </Button>
          <Button onClick={closeDialog} color="primary">
            Add
        </Button>
        </DialogActions>
      </Dialog>
    </div >
  );
}

export default MyCryptoes;
