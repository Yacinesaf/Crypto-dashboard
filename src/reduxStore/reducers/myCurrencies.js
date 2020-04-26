const initialState = {
  currencies: [],
  fetching: true,

}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_FETCHING':
      return { ...state, fetching: action.payload }
    case 'SET_CURRENCIES':
      return { ...state, currencies: [...state.currencies, action.payload] }

  }
}