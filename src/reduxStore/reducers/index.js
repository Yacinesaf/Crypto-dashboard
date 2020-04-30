import { combineReducers } from 'redux'
import cryptoesPrice from './cryptoesPrice'
import user from './user'
import wallet from './wallet'
export default combineReducers({
  cryptoesPrice,
  user,
  wallet
})