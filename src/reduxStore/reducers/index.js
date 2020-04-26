import { combineReducers } from 'redux'
import cryptoes from './cryptoes'
import user from './user'
import myCurrencies from './myCurrencies'
export default combineReducers({
  cryptoes,
  user,
  myCurrencies
})