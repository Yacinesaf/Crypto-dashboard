const initialState = {
  currencyFlow : null,
  label : 'Bitcoin',

}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_LABEL':
      return { ...state, label: action.payload }
  }
}