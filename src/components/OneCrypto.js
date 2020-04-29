import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


function OneCrypto({ myWallet, icon }) {

  const useStyles = makeStyles({
    card: {
      backgroundColor: '#5130cf',
      borderRadius: 25,
      padding: '30px 50px',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      display: 'flex',
      alignItems: 'center'
    },
    typo: {
      color: 'white',
    },
    iconBg: {
      backgroundColor: '#6f4bf8',
    }
  });
  const classes = useStyles();
  return (

    <div>
      <Card className={classes.card}>
        <img alt='icon' src={icon} />
        <Typography className={classes.typo} style={{ paddingRight: 20 }} >{myWallet.amount}</Typography>
        <Typography variant='caption' className={classes.typo} style={{ flexGrow: 1 }} >{myWallet.name}</Typography>
        <Typography variant='caption' className={classes.typo} >{myWallet.boughtPrice} $</Typography>
      </Card>
    </div >
  );
}

export default OneCrypto;