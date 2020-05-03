const initialState = {
  show: false,
  message: null,
  color: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state

    case 'SHOW_SNACKBAR':
      return action.payload
    case 'HIDE_SNACKBAR':
      return {...state, show : false}
  }
}