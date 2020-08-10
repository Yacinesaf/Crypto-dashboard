import React, { Component } from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import emptystate from '../assets/undraw_crypto_portfolio_2jy5.svg'
import { connect } from 'react-redux'
import '../style.css'

class AnalyzingField extends Component {

  grossPrice = (symbol) => {
    let filtered = this.props.myCryptoes.filter(x => x.symbol === symbol)
    return (filtered[0].amount * this.props.prices[symbol].CAD).toFixed(2)
  }

  feeCalculation = (gross) => {
    if (gross) {
      return (gross * (0.26 / 100)).toFixed(2)
    }
  }

  netPrice = (gross, fees) => {
    if (gross && fees) {
      return (gross - fees).toFixed(2)
    }
  }

  profit = (netPrice, symbol) => {
    let filtered = this.props.myCryptoes.filter(x => x.symbol === symbol);
    let buyingPrice = filtered[0].boughtPrice;
    return (netPrice - buyingPrice).toFixed(2)
  }

  profitPercentage = (netPrice, symbol) => {
    let filtered = this.props.myCryptoes.filter(x => x.symbol === symbol);
    let buyingPrice = filtered[0].boughtPrice;
    let diff = netPrice - buyingPrice
    return ((diff * 100) / buyingPrice).toFixed(2)
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <Paper
          style={{
            display: 'flex',
            backgroundColor: '#24204b',
            borderRadius: 20,
            padding: this.props.smDown ? 30 : 60,
            alignItems: 'center',
          }}>
          {this.props.myCryptoes.length ?
            <Grid container justify={this.props.smDown ? 'center' : 'space-between'} alignItems='center'>
              <Grid item xs={11} md={"auto"} >
                <Typography variant={this.props.smDown ? 'h6' : 'h4'} style={{ color: 'white', fontWeight: 600 }}>{this.props.cryptoName} : </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0px' }} >
                  <Typography variant={this.props.smDown ? 'body1' : 'h5'} style={{ color: 'white', paddingRight: 10, fontWeight: 600 }}>Gross :</Typography>
                  <Typography variant={this.props.smDown ? 'body1' : 'h5'} style={{ color: 'white' }}>$ {this.props.fetchingPrices ? null
                    : this.grossPrice(this.props.currentCryptoSymbol)
                  }</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0px' }} >
                  <Typography variant={this.props.smDown ? 'body1' : 'h5'} style={{ color: 'white', paddingRight: 10, fontWeight: 600 }}>Fees :</Typography>
                  <Typography variant={this.props.smDown ? 'body1' : 'h5'} style={{ color: 'white' }}>
                    $ {this.props.fetchingPrices ? null : this.feeCalculation(this.grossPrice(this.props.currentCryptoSymbol))}
                  </Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0px' }} >
                  <Typography variant={this.props.smDown ? 'body1' : 'h5'} style={{ color: 'white', paddingRight: 10, fontWeight: 600 }}>Net :</Typography>
                  <Typography variant={this.props.smDown ? 'body1' : 'h5'} style={{ color: 'white' }}>
                    $ {this.props.fetchingPrices ? null :
                      this.netPrice(this.grossPrice(this.props.currentCryptoSymbol), this.feeCalculation(this.grossPrice(this.props.currentCryptoSymbol)))}
                  </Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0px' }} >
                  <Typography variant={this.props.smDown ? 'body1' : 'h5'} style={{ color: 'white', paddingRight: 10, fontWeight: 600 }}>Profit :</Typography>
                  <Typography variant={this.props.smDown ? 'body1' : 'h5'} style={{ color: 'white' }}>
                    $ {this.props.fetchingPrices ? null :
                      this.profit(this.netPrice(this.grossPrice(this.props.currentCryptoSymbol), this.feeCalculation(this.grossPrice(this.props.currentCryptoSymbol))), this.props.currentCryptoSymbol)}
                  </Typography>
                </div>
              </Grid>
              <Grid item>
                {
                  this.props.fetchingPrices ? null :
                    <div
                      className={this.profit(this.netPrice(this.grossPrice(this.props.currentCryptoSymbol), this.feeCalculation(this.grossPrice(this.props.currentCryptoSymbol))), this.props.currentCryptoSymbol) > 0 ? 'circleAnimation profit'
                        : 'circleAnimation deficit'}>
                      <Typography
                        className='circleText'
                        variant='h3'
                        style={{
                          color: this.profit(this.netPrice(this.grossPrice(this.props.currentCryptoSymbol), this.feeCalculation(this.grossPrice(this.props.currentCryptoSymbol))), this.props.currentCryptoSymbol) > 0 ? '#00c853' : '#EA2027',
                          fontWeight: 600
                        }}>
                        {this.profitPercentage(this.netPrice(this.grossPrice(this.props.currentCryptoSymbol), this.feeCalculation(this.grossPrice(this.props.currentCryptoSymbol))), this.props.currentCryptoSymbol)}%
                      </Typography>
                    </div>
                }
              </Grid>
            </Grid>
            :
            <Grid container justify='center'>
              <Typography variant='h6' style={{ color: 'white' }}>Add a new crypto to analyse it</Typography>
              <Grid item xs={9} md={8}>
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
  fetchingPrices: state.cryptoesPrice.fetchingPrices,
  cryptoName: state.chart.label
})

export default connect(mapStateToProps)(AnalyzingField)