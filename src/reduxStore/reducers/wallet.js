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
      return { ...state, currencies: action.payload }

  }
}