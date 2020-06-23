const initialState = {
  cryptoes: {},
  fetchingPrices: true,
  fetchingMonthlyPrices: true,
  monthlyPrices: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_CRYPTOES':
      return { ...state, cryptoes: action.payload }
    case 'SET_FETCHING_PRICES':
      return { ...state, fetchingPrices: action.payload }
    case 'SET_FETCHING_MONTHLY':
      return { ...state, fetchingMonthlyPrices: action.payload }
    case 'SET_MONTHLY':
      return { ...state, monthlyPrices: action.payload }
  }
}