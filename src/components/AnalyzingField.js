import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import emptystate from '../assets/undraw_crypto_portfolio_2jy5.svg'
import { makeStyles } from '@material-ui/core/styles';
import store from '../reduxStore/store'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function AnalyzingField(props) {
  const theme = useTheme();
  const xsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  const useStyles = makeStyles({
    typo: {
      color: 'white',
      paddingRight: 20
    },
    div: {
      display: 'flex',
    }

  })

  const classes = useStyles();
  return (
    <div style={{ width: '100%', height: xsOnly ? 'calc(100vh - 88px)' : 'unset' }}>
      <Paper
        className={classes.div}
        style={{
          backgroundColor: '#24204b',
          borderRadius: 20,
          padding: xsOnly ? 30 : 60,
          alignItems: 'center',
          height: xsOnly ? 'calc(100% - 60px)' : 'unset',
        }}>
        {store.getState().wallet.currencies.length > 0 ?
          <Grid container justify={xsOnly ? 'center' : 'space-between'}>
            <Grid item>
              <div className={classes.div} >
                <Typography className={classes.typo} style={{ color: 'white' }}>Gross</Typography>
                <Typography style={{ color: 'white' }}>1440$</Typography>
              </div>
              <div className={classes.div} >
                <Typography className={classes.typo} style={{ color: 'white' }}>Buying fees</Typography>
                <Typography style={{ color: 'white' }}>14220$</Typography>
              </div>
              <div className={classes.div} >
                <Typography className={classes.typo} style={{ color: 'white' }}>Selling fees</Typography>
                <Typography style={{ color: 'white' }}>14430$</Typography>
              </div>
            </Grid>
            <Grid item>
              <div style={{ height: 150, width: 150, border: '5px solid #f44336', borderRadius: 150, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='h4' style={{ color: '#f44336', }}>24 %</Typography>
              </div>
            </Grid>
          </Grid>
          :
          <Grid container justify='center'>
            <Grid item xs={8}>
              <img src={emptystate} alt='empty' height='200px' width={'100%'} />
            </Grid>
          </Grid>
        }
      </Paper>
    </div>
  );
}

export default AnalyzingField;