import React, { Component } from 'react';
import MyWallet from './MyWallet';
import { Grid } from '@material-ui/core';
import AnalyzingField from './AnalyzingField';
import Navbar from './Navbar';
import { getCryptoesPrices } from '../reduxStore/actions';
import { connect } from 'react-redux'
import ChartVariations from './ChartVariations'

class Desktop extends Component {

  componentDidMount() {
    this.props.getCryptoesPrices()
  }

  render() {
    return (
      <Grid container justify='center' style={{ minHeight: '100vh' }}>
        <Navbar />
        <Grid item xs={10} style={{ paddingTop: 50 }}>
          <Grid container style={{ paddingBottom: 40 }}>
            <Grid item md={5} style={{ height: 'calc(100vh - 180px)' }}>
              <MyWallet />
            </Grid>
            <Grid item lg={7} style={{alignItems : ''}}>
              <Grid container alignContent='space-between' style={{paddingLeft : 30, height : '100%'}}>
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
