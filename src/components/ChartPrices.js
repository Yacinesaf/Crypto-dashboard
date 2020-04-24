import React, { Component } from 'react'
import { getPrices } from '../services/apiEndpoints'

export default class ChartPrices extends Component {
  componentDidMount() {
    getPrices()
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
