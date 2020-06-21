const initialState = {
  label : 'Bitcoin',
  symbol : 'BTC'

}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SET_LABEL':
      return { ...state, label: action.payload }
    case 'SET_SYMBOL':
      return { ...state, symbol: action.payload }
  }
}