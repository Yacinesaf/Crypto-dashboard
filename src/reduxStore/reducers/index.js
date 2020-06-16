import { combineReducers } from 'redux'
import cryptoesPrice from './cryptoesPrice'
import wallet from './wallet'
import chart from './chart'
export default combineReducers({
  cryptoesPrice,
  wallet,
  chart
})