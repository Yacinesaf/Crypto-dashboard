import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import store from '../reduxStore/store'
import { nameFormat } from '../services/helperFunctions'

function HighestCrypto({cryptoName, cryptoesPrices}) {

  const useStyles = makeStyles({
    card: {
      background: 'linear-gradient(to right, #654bc4, #4620d7)',
      borderRadius: 20,
      padding: 20,
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      display: 'flex',
      alignItems: 'center',
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
    <div style={{ padding: '0px 15px' }}>
      <Card className={classes.card}  >
        <img src={`/white/${cryptoName.toLowerCase()}.svg`} alt="ss" />
        <Typography>{cryptoesPrices[cryptoName].CAD}</Typography>
        <Typography>{nameFormat(cryptoName)}</Typography>
      </Card>
    </div>
  );
}

export default HighestCrypto;