import React, { Component } from 'react';
import MyWallet from './MyWallet';
import { Grid } from '@material-ui/core';
import AnalyzingField from './AnalyzingField';
import Navbar from './Navbar';
import HighestCrypto from './HighestCrypto';
import { getCryptoesPrices } from '../reduxStore/actions';
import { connect } from 'react-redux'
import ChartVariations from './ChartVariations'

class Desktop extends Component {

  componentDidMount() {
    this.props.getCryptoesPrices()
  }

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





  render() {
    return (
      <Grid container justify='center' style={{ minHeight: '100vh' }}>
        <Navbar />
        <Grid item xs={8} style={{ paddingTop: 50 }}>
          <Grid container style={{ paddingBottom: 40 }}>
            <Grid item md={5} style={{ height: 'calc(100vh - 180px)' }}>
              <MyWallet />
            </Grid>
            <Grid item lg={7}>
              <Grid container alignContent='space-around' style={{paddingLeft : 30}}>
                <Grid item lg={12}>
                  <AnalyzingField />
                </Grid>
                <Grid item lg={12}>
                  <ChartVariations />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = state => ({
  cryptoes: state.cryptoesPrice.cryptoes,
})

export default connect(mapStateToProps, { getCryptoesPrices })(Desktop);
