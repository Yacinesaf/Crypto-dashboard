import { createNewCurrency, getMyWallet } from "../services/apiEndpoints"

export const addNewCurrency = (newCurrency) => dispatch => {
  return createNewCurrency(newCurrency).then(res => {
    dispatch({ type: 'ADD_CURRENCY', payload: res })
  })
}

export const fetchMyWallet = () => dispatch => {
  dispatch({ type: 'SET_FETCHING', payload: true })
  return getMyWallet().then(res => {
    dispatch({ type: 'SET_CURRENCIES', payload: res })
    dispatch({ type: 'SET_FETCHING', payload: false })
  })
}
