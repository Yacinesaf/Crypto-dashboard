import React, { Component } from 'react';
import MyWallet from './MyWallet';
import { Grid } from '@material-ui/core';
import AnalyzingField from './AnalyzingField';
import Navbar from './Navbar';
import HighestCrypto from './HighestCrypto';
import { getCryptoesPrices } from '../reduxStore/actions';
import { connect } from 'react-redux'

class Desktop extends Component {

  componentDidMount() {
    this.props.getCryptoesPrices()
  }

  formatingArr = (obj) => {
    let arr = Object.keys(obj);
    let maped = arr.map(x => {
      return this.props.cryptoes[x].CAD
    })
    maped.sort((a, b) => b - a)
    return maped.slice(0, 3)
  }



  render() {
    console.log(this.props.cryptoes)
    return (
      <Grid container justify='center' style={{ minHeight: '100vh' }}>
        <Navbar />
        <Grid item xs={11} style={{ paddingTop: 140 }}>
          <Grid container style={{ paddingBottom: 40 }}>
            <Grid item md={4} style={{ height: 'calc(100vh - 180px)' }}>
              <MyWallet />
            </Grid>
            <Grid item md={3} lg={3}>
              {this.formatingArr(Object.keys(this.props.cryptoes)).map((x, i) => (
                <HighestCrypto cryptoesPrices={this.props.cryptoes} key={i} cryptoName={x} />
              ))}
            </Grid>
            <Grid item lg={5}>
              <Grid container justify='flex-end'>
                <Grid item xs={11}>
                  <AnalyzingField />
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
