import React from 'react';
import { Card, Typography, Grid } from '@material-ui/core';
import OneCrypto from './OneCrypto';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

function MyCryptoes(props) {

  const useStyles = makeStyles({
    card: {
      backgroundColor: '#5b39db',
      borderRadius: 25,
      padding: '10px 20px',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      display: 'flex',
      alignItems: 'center'
    },
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
            <Card className={classes.card}>
              <Typography>Add a new currency</Typography>
              <AddIcon />
            </Card>
            <Grid container justify='center' style={{ padding: 10 }}>
              {[1, 2, 3, 4, 5].map(x => (
                <Grid key={x} item xs={12} style={{ padding: '10px 5px' }}>
                  <OneCrypto currencyAmount={amount} currency={currency} price={price} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div >
  );
}

export default MyCryptoes;