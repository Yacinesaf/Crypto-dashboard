import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


function OneCrypto({ myWallet }) {

  const useStyles = makeStyles({
    card: {
      backgroundColor: '#402a93',
      borderRadius: 25,
      padding: '10px 20px',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      display: 'flex',
      alignItems: 'center'
    },
    typo: {
      color: 'white',
    }
  });
  const classes = useStyles();
  return (

    <div>
      <Card className={classes.card}>
        {/*<Typography className={classes.typo} style={{ paddingRight: 20 }} >{myWallet.amount}</Typography>
          <Typography variant='caption' className={classes.typo} style={{ flexGrow: 1 }} >{myWallet.name}</Typography>
  <Typography variant='caption' className={classes.typo} >{myWallet.boughtPrice} $</Typography>*/}
      </Card>
    </div >
  );
}

export default OneCrypto;