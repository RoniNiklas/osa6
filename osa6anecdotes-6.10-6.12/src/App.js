import React from "react"
import {connect} from "react-redux"
import Notification from "./components/Notification"
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import FilterForm from "./components/FilterForm"
import anecdoteService from "./services/anecdotes"
import {initializeData} from "./reducers/anecdoteReducer"

class App extends React.Component {

  
  componentDidMount = async () => {
    const anecdotes = await anecdoteService.getAll()
    this.props.initializeData(anecdotes)
  }
  
  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <FilterForm  />
        <Notification  />
        <AnecdoteList  />
        <AnecdoteForm  />
      </div>
    )
  }
}

export default connect(
  null,
  { initializeData }
)(App)
