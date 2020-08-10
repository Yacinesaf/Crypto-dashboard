const initialState = {
  currencies: [
  ],
  fetching: null,
  currentSymbol: null

}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_FETCHING':
      return { ...state, fetching: action.payload }
    case 'ADD_CRYPTO':
      localStorage.setItem('currencies', JSON.stringify([action.payload, ...state.currencies]))
      return { ...state, currencies: [action.payload, ...state.currencies] }
    case 'UPDATE_CRYPTO':
      const i = state.currencies.findIndex(x => x.symbol === action.payload.symbol);
      const copy = [...state.currencies]
      copy[i] = action.payload
      localStorage.setItem('currencies', JSON.stringify(copy))
      return { ...state, currencies: copy }
    case 'REMOVE_CRYPTO':
      localStorage.setItem('currencies', JSON.stringify(state.currencies.filter(x => x.symbol !== action.payload)))
      return { ...state, currencies: state.currencies.filter(x => x.symbol !== action.payload) }
    case 'SET_CURRENCIES':
      return { ...state, currencies: action.payload }
  }
}