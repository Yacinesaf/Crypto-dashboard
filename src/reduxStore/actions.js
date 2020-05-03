import { createNewCurrency, getMyWallet, getCryptoes, deleteCrypto } from "../services/apiEndpoints"

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

export const getCryptoesPrices = () => dispatch => {
  dispatch({ type: 'SET_FETCHING_PRICES', payload: true })
  return getCryptoes().then(res => {
    dispatch({ type: 'SET_CRYPTOES', payload: res.data })
    dispatch({ type: 'SET_FETCHING_PRICES', payload: false })
  })
}

export const deletingCrypto = (id) => dispatch => {
  dispatch({ type: 'SET_FETCHING', payload: true })
  return deleteCrypto(id).then(() => {
    return getMyWallet().then(res => {
      dispatch({ type: 'SET_CURRENCIES', payload: res })
      dispatch({ type: 'SET_FETCHING', payload: false })
    })
  })
}

export const showSnackbar = (message, color) => dispatch => {
  dispatch({ type: 'SHOW_SNACKBAR', payload: { show: true, message, color } });
}

export const hideSnackbar = () => dispatch => {
  dispatch({ type: 'HIDE_SNACKBAR' })
}

