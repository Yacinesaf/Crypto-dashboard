import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


function OneCrypto({currencyAmount, currency, price}) {

  const useStyles = makeStyles({
    card: {
      backgroundColor: '#5b39db',
      borderRadius: 25,
      padding: '10px 20px',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      display : 'flex',
      alignItems : 'center'
    },
    typo: {
      color: 'white',
      paddingRight: 20
    }
  });
  const classes = useStyles();
  return (

    <div>
      <Card className={classes.card}>
        <Typography className={classes.typo} >{currencyAmount}</Typography>
        <Typography variant='caption' className={classes.typo} style={{flexGrow : 1}} >{currency}</Typography>
        <Typography variant='caption' className={classes.typo} >{price}</Typography>
      </Card>
    </div >
  );
}

export default OneCrypto;