import { combineReducers } from 'redux'
import cryptoesPrice from './cryptoesPrice'
import wallet from './wallet'
export default combineReducers({
  cryptoesPrice,
  wallet
})