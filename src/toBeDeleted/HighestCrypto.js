import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import store from '../reduxStore/store'
import { nameFormat } from '../services/helperFunctions'

function HighestCrypto({ cryptoesPrices, cryptoName }) {

  const useStyles = makeStyles({
    card: {
      background: 'linear-gradient(to right, #654bc4, #4620d7)',
      borderRadius: 20,
      padding: 30,
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: 220,
      width: 60
    },
    typo: {
      color: 'white',
      textAlign: 'center',
    },
    iconBg: {
      backgroundColor: '#6f4bf8',
    }
  });
  const classes = useStyles();

  return (
    <div style={{ padding: '0px 20px', height: 'fit-content' }}>
      <Card className={classes.card}>
        <img src={`/white/${cryptoName.toLowerCase()}.svg`} alt="ss" style={{ paddingBottom: 30, width : 50, height : 50 }} />
        <Typography className={classes.typo}>{`${cryptoesPrices[cryptoName]} $`}</Typography>
        <Typography className={classes.typo}>{nameFormat(cryptoName)}</Typography>
      </Card>
    </div>
  );
}

export default HighestCrypto;

cryptoPricesObject = (obj) => {
  let arr = Object.keys(obj);
  let object = {};
  for (let i = 0; i < arr.length; i++) {
    object[arr[i]] = obj[arr[i]].CAD
  }
  return object

}

threeHighestCryptoes = (obj) => {
  let keysSorted = Object.keys(obj).sort(function (a, b) { return obj[b] - obj[a] });
  let resultObj = {};
  keysSorted.slice(0, 3).map(x => {
    return resultObj[x] = obj[x]
  })
  return resultObj
}