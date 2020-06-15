const initialState = {
  currencies: [
    {
      amount: 6,
      boughtPrice: 66,
      name: "Eos",
      symbol: "EOS"
    }
  ],
  fetching: null,

}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_FETCHING':
      return { ...state, fetching: action.payload }
    case 'ADD_CRYPTO':
      return { ...state, currencies: [action.payload, ...state.currencies] }
    case 'UPDATE_CRYPTO':
      const i =  state.currencies.findIndex(x => x.symbol === action.payload.symbol);
      const copy = [...state.currencies]
      copy[i] = action.payload
      return { ...state, currencies: copy }
    case 'REMOVE_CRYPTO' :
      return {...state, currencies : state.currencies.filter(x=> x.symbol !== action.payload)}
  }
}