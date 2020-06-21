import { act } from "react-dom/test-utils"

const initialState = {
  cryptoes: {},
  fetchingPrices: true,
  monthlyPrices: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_CRYPTOES':
      return { ...state, cryptoes: action.payload }
    case 'SET_FETCHING_PRICES':
      return { ...state, fetchingPrices: action.payload }
    case 'SET_MONTHLY':
      return { ...state, dailyPrices: action.payload }
  }
}