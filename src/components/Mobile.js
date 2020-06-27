import React, { Component } from 'react';
import MobileTabs from './MobileTabs';
import { Typography } from '@material-ui/core';
import MyWallet from './MyWallet';
import AnalyzingField from './AnalyzingField';
import ChartVariations from './ChartVariations';
import { connect } from 'react-redux'
import { getCryptoesPrices } from '../reduxStore/actions'
import Navbar from './Navbar';

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
        <MyWallet smDown={this.props.smDown} />
      )
    }
    if (this.state.tabValue === 1) {
      return (
        <AnalyzingField smDown={this.props.smDown} />
      )
    }
    if (this.state.tabValue === 2) {
      return (
        <ChartVariations smDown={this.props.smDown} />
      )
    }
  }
  render() {
    return (
      <div style={{ paddingBottom: 48 }}>
        <Navbar smDown={this.props.smDown} />
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