const initialState = {
  currencies: [],
  fetching: null,

}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_FETCHING':
      return { ...state, fetching: action.payload }
    case 'ADD_CURRENCY':
      return { ...state, currencies: [...state.currencies, action.payload] }
    case 'SET_CURRENCIES':
      return { ...state, currencies: action.payload }

  }
}