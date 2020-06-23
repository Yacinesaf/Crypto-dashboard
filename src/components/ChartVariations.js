import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { getCryptoesMonthlyPrices } from '../reduxStore/actions'
import '../style.css'

class ChartVariations extends Component {

  constructor() {
    super()
    this.state = {
      period: 'Yearly',
      anchorEl: null
    }
  }

  componentDidMount() {
    this.props.getCryptoesMonthlyPrices()
  }

  monthLoop = (arr) => {
    console.log(arr)
    let monthsArr = arr.map(x => {
      let splited = x.day.split('-')
      splited.pop()
      return splited.join('-')
    })
    return monthsArr.reverse()
  }
  monthLoopData = (arr) => {
    let monthsArr = arr.map(x => {

      return x.price
    })
    return monthsArr
  }

  lineGraph = () => {
    const data = {
      labels: this.monthLoop(this.props.monthly[this.props.symbol]),
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
          data: this.monthLoopData(this.props.monthly[this.props.symbol])
        }
      ]
    };
    return <Line responsive data={data} width={800} options={{ maintainAspectRatio: false }} />
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
        {this.props.isFetching ?
          <button className='loadingChart'></button>
          :
          <div style={{ paddingTop: 20, position : 'relative', minHeight : 300, height : '100%' }}>
            {this.lineGraph()}
          </div>
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  label: state.chart.label,
  symbol: state.chart.symbol,
  monthly: state.cryptoesPrice.monthlyPrices,
  isFetching: state.cryptoesPrice.fetchingMonthlyPrices
})

export default connect(mapStateToProps, { getCryptoesMonthlyPrices })(ChartVariations)




