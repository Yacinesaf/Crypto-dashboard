const initialState = {
  cryptoes: {},
  fetchingPrices: true,
  pricesVarations: []

}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_CRYPTOES':
      return { ...state, cryptoes: action.payload }
    case 'SET_FETCHING_PRICES':
      return { ...state, fetchingPrices: action.payload }
  }
}