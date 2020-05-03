import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


function OneCrypto({ myCrypto }) {

  const useStyles = makeStyles({
    card: {
      backgroundColor: '#5130cf',
      borderRadius: 20,
      padding: '20px 30px',
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

    <div style={{ flexGrow: 1 }}>
      <Card className={classes.card}>
        <img src={`/white/${myCrypto.symbol.toLowerCase()}.svg`} alt="ss" />
        <Typography variant='h6' className={classes.typo} style={{ padding: '0px 20px' }} >{myCrypto.amount}</Typography>
        <Typography variant='h6' className={classes.typo} style={{ flexGrow: 1 }} >{myCrypto.name}</Typography>
        <Typography variant='h6' className={classes.typo} >{`${myCrypto.boughtPrice} $`}</Typography>
      </Card>
    </div >
  );
}

export default OneCrypto;