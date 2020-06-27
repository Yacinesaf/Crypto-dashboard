import { getCryptoes, getMonthlyPrices } from "../services/apiEndpoints"
import store from "./store"

export const addCrypto = (newCurrency) => dispatch => {
  dispatch({ type: 'ADD_CRYPTO', payload: newCurrency })
}

export const removeCrypto = (symbol) => dispatch => {
  dispatch({ type: 'REMOVE_CRYPTO', payload: symbol })

}

export const editCrypto = (newCrypto) => dispatch => {
  dispatch({ type: 'UPDATE_CRYPTO', payload: newCrypto })
}

export const getCryptoesPrices = () => dispatch => {
  dispatch({ type: 'SET_FETCHING_PRICES', payload: true })
  return getCryptoes().then(res => {
    dispatch({ type: 'SET_CRYPTOES', payload: res })
    dispatch({ type: 'SET_FETCHING_PRICES', payload: false })

  })
}

export const getCryptoesMonthlyPrices = () => dispatch => {
  dispatch({ type: 'SET_FETCHING_MONTHLY', payload: true })
  return getMonthlyPrices().then(res => {
    dispatch({ type: 'SET_MONTHLY', payload: res })
    dispatch({ type: 'SET_FETCHING_MONTHLY', payload: false })
  })
}

export const showSnackbar = (message, color) => dispatch => {
  dispatch({ type: 'SHOW_SNACKBAR', payload: { show: true, message, color } });
}

export const hideSnackbar = () => dispatch => {
  dispatch({ type: 'HIDE_SNACKBAR' })
}

export const setLabel = (label) => dispatch => {
  dispatch({ type: 'SET_LABEL', payload: label })
}
export const setSymbol = (symbol) => dispatch => {
  dispatch({ type: 'SET_SYMBOL', payload: symbol })
}

export const getLocalStore = () => dispatch => {
  const storage = JSON.parse(localStorage.getItem('currencies'))
  if (storage && storage.length) {
    if (!storage.find(x => x.symbol === store.getState().chart.symbol)) {
      dispatch({ type: 'SET_SYMBOL', payload: storage[0].symbol })
      dispatch({ type: 'SET_LABEL', payload: storage[0].name })
    }
    dispatch({ type: 'SET_CURRENCIES', payload: storage })
  }
}
