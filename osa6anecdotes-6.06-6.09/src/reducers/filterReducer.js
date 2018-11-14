const initialState = {
  filter: ""
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
  case "filter":
    return Object.assign({}, state, { filter: action.stringi })
  default:
    return state
  }
}

export const filter = (stringi) => {
  return { type: "filter", stringi }
}
export default filterReducer
