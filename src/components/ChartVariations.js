import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'
import store from '../reduxStore/store'
import { connect } from 'react-redux'
import {getCryptoesDailyPrices} from '../reduxStore/actions'
import { Button, Menu, MenuItem } from '@material-ui/core';


class ChartVariations extends Component {

  constructor() {
    super()
    this.state = {
      period: 'Yearly',
      anchorEl: null
    }
  }

  componentDidMount() {
    this.props.getCryptoesDailyPrices()
  }

  lineGraph = () => {
    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: this.props.label,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'white',
          borderCapStyle: 'round',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'round',
          pointBorderColor: 'white',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [4552, 5584, 12535, 412, 6566, 3212]
        }
      ]
    };
    return <Line data={data} width={800} height={300} options={{ maintainAspectRatio: false }} />
  }

  closeMenu = () => {
    this.setState({ anchorEl: null })
  }
  openMenu = (e) => {
    this.setState({ anchorEl: e.currentTarget })
  }

  render() {
    return (
      <div>
        <Button onClick={this.openMenu} style={{color : 'white', float : 'right'}}>{this.state.period}</Button>
        <Menu
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.closeMenu}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          elevation={4}>
          <MenuItem onClick={()=> {this.setState({period : 'Yearly'});this.closeMenu();}}>Yearly</MenuItem>
          <MenuItem onClick={()=> {this.setState({period : 'Monthly'});this.closeMenu();}}>Monthly</MenuItem>
          <MenuItem onClick={()=> {this.setState({period : 'Daily'});this.closeMenu();}}>Daily</MenuItem>
        </Menu>
        <div style={{ paddingTop: 20 }}>
          {this.lineGraph()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  label: state.chart.label,
  daily : state.chart.dailyPrices
})

export default connect(mapStateToProps, {getCryptoesDailyPrices})(ChartVariations)




