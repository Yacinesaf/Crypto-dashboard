import React, { Component } from 'react';
import MobileTabs from './MobileTabs';
import { Typography } from '@material-ui/core';
import MyWallet from './MyWallet';
import AnalyzingField from './AnalyzingField';
import ChartVariations from './ChartVariations';
import { connect } from 'react-redux'
import { getCryptoesPrices } from '../reduxStore/actions'

class Mobile extends Component {
  constructor() {
    super()
    this.state = {
      tabValue: 0
    }
  }

  componentDidMount() {
    this.props.getCryptoesPrices()
  }

  tabSwitch = (event, newValue) => {
    this.setState({ tabValue: newValue });
  };
  tabToShow = () => {
    if (this.state.tabValue === 0) {
      return (
        <MyWallet />
      )
    }
    if (this.state.tabValue === 1) {
      return (
        <AnalyzingField />
      )
    }
    if (this.state.tabValue === 2) {
      return (
        <ChartVariations />
      )
    }
  }
  render() {
    return (
      <div style={{ paddingBottom: 48 }}>
        <div style={{ padding: 20 }}>
          {this.tabToShow()}
        </div>
        <MobileTabs tabValue={this.state.tabValue} tabSwitch={this.tabSwitch} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cryptoes: state.cryptoesPrice.cryptoes,
})

export default connect(mapStateToProps, { getCryptoesPrices })(Mobile);