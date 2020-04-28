import { combineReducers } from 'redux'
import cryptoes from './cryptoes'
import user from './user'
import wallet from './wallet'
export default combineReducers({
  cryptoes,
  user,
  wallet
})