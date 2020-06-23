import React, { Component } from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import emptystate from '../assets/undraw_crypto_portfolio_2jy5.svg'
import store from '../reduxStore/store'
import { connect } from 'react-redux'


class AnalyzingField extends Component {

  grossPrice = (symbol) => {
    console.log(symbol)
    let filtered = this.props.myCryptoes.filter(x => x.symbol === symbol)
    return (filtered[0].amount * this.props.prices[symbol].CAD).toFixed(2)
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <Paper
          style={{
            display: 'flex',
            backgroundColor: '#24204b',
            borderRadius: 20,
            padding: 60,
            alignItems: 'center',
          }}>
          {store.getState().wallet.currencies.length > 0 ?
            <Grid container justify='space-between'>
              <Grid item>
                <div style={{ display: 'flex' }} >
                  <Typography style={{ color: 'white', paddingRight: 20 }}>Gross:</Typography>
                  <Typography style={{ color: 'white' }}>${this.props.fetchingPrices ? null
                    : this.grossPrice(this.props.currentCryptoSymbol)
                  }</Typography>
                </div>
                <div style={{ display: 'flex' }} >
                  <Typography style={{ color: 'white', paddingRight: 20 }}>Buying fees</Typography>
                  <Typography style={{ color: 'white' }}>14220$</Typography>
                </div>
                <div style={{ display: 'flex' }} >
                  <Typography style={{ color: 'white', paddingRight: 20 }}>Selling fees</Typography>
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
}

const mapStateToProps = (state) => ({
  prices: state.cryptoesPrice.cryptoes,
  myCryptoes: state.wallet.currencies,
  currentCryptoSymbol: state.chart.symbol,
  fetchingPrices: state.cryptoesPrice.fetchingPrices
})

export default connect(mapStateToProps)(AnalyzingField)