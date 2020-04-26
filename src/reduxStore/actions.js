import { createNewCurrency } from "../services/apiEndpoints"

export const addNewCurrency = (newCurrency) => dispatch => {
  dispatch({ type: 'SET_FETCHING', payload: true })
  return createNewCurrency(newCurrency).then(res => {
    dispatch({ type: 'SET_CURRENCIES', payload: res })
    dispatch({ type: 'SET_FETCHING', payload: false })
  })
}