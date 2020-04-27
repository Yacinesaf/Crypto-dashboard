import { combineReducers } from 'redux'
import cryptoes from './cryptoes'
import user from './user'
import myWallet from './myWallet'
export default combineReducers({
  cryptoes,
  user,
  myWallet
})