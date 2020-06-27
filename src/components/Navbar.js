import React, { Component } from 'react';
import { AppBar, Typography, Grid, Button, Menu, MenuItem } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { nameFormat } from '../services/helperFunctions'
import store from '../reduxStore/store'
import { setLabel, setSymbol } from '../reduxStore/actions'
import { connect } from 'react-redux'


class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      label: 'Bitcoin',
      anchorEl: null
    }
  }
  render() {
    return (
      <AppBar position='static' elevation={0} color='transparent'>
        <Grid container justify='center'>
          <Grid item xs={10} style={{ paddingTop: 40, display: 'flex', alignItems: 'center' }}>
            <Typography variant={this.props.smDown ? 'h6' : 'h4'} style={{ color: 'white', flexGrow: 1 }}>Dashboard</Typography>
            <Button color='inherit' style={{ color: 'white', border : this.props.smDown ? '1px solid white' : '3px solid white'}} onClick={(e) => this.setState({ anchorEl: e.currentTarget })}>
              {this.props.symbol}
              <ArrowDropDownIcon style={{ color: 'white' }} />
            </Button>
            <Menu
              style={{ zIndex: 2000 }}
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={() => { this.setState({ anchorEl: null }) }}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              elevation={4}
            >
              {Object.keys(store.getState().cryptoesPrice.cryptoes).map((x, i) => (
                <MenuItem key={i}
                  onClick={(e) => {
                    this.setState({
                      symbol: e.currentTarget.innerText,
                      anchorEl: null,
                      label: nameFormat(e.currentTarget.innerText),
                    })
                    this.props.setLabel(nameFormat(e.currentTarget.innerText))
                    this.props.setSymbol(e.currentTarget.innerText)
                  }}
                >
                  <Typography>{x}</Typography>
                </MenuItem>
              ))
              }
            </Menu>
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}
const mapStateToProps = (state) => ({
  symbol : state.chart.symbol
})

export default connect(mapStateToProps, { setLabel, setSymbol })(Navbar)
