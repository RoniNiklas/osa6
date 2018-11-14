
const initialState = { notification: "" }

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
  case "notify":
    return Object.assign({}, state, {notification: action.stringi})
  default:
    return state
  }
}

export const notify = (stringi, aika) => {
  return async (dispatch) => {
    dispatch({type: "notify", stringi: stringi})
    setTimeout(() => {
      dispatch({type: "notify", stringi: ""})
    },
    aika
    )
  }
}

export default notificationReducer
