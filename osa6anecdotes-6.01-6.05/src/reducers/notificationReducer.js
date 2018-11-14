
const initialState = { notification: "" }

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
  case "notify":
    return Object.assign({}, state, {notification: action.stringi})
  default:
    return state
  }
}

export const notify = (stringi) => {
  return {type: "notify", stringi}
}

export default notificationReducer
