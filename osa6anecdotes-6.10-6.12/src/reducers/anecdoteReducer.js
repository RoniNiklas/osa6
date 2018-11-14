/*
const anecdotes = [
  {dote: "If it hurts, do it more often", votes: 0},
  {dote: "Adding manpower to a late software project makes it later!", votes: 0},
  {dote: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.", votes: 0},
  {dote:  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", votes: 0},
  {dote:   "Premature optimization is the root of all evil.", votes: 0},
  {dote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", votes: 0} 
]
*/
import anecdoteService from "../services/anecdotes"

const anecdoteReducer = (state = [], action) => {
  console.log("Action: ", action)
  switch (action.type) {
  case "vote":
    const doteToChange = state.find(item => item.dote === action.stringi)
    doteToChange.votes = doteToChange.votes +1
    anecdoteService.update(doteToChange.id, doteToChange)
    return state.map(dote => dote.dote !== action.stringi ? dote : doteToChange)
  case "lisaa":
    const newAnecdote = {dote: action.stringi, votes: 0}
    anecdoteService.createNew(newAnecdote)
    return [...state, newAnecdote]
  case "initialize":
    console.log("action data", action.data)
    return action.data
  default:
    return state
  }
}

export const createNew = (stringi) => {
  return { type: "lisaa", stringi: stringi }
}

export const vote = (stringi) => {
  return { type: "vote", stringi: stringi }
}

export const initializeData = (data) => {
  return { type: "initialize", data: data }
}

export default anecdoteReducer
