import React from "react"
import Notification from "./components/Notification"
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import FilterForm from "./components/FilterForm"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <FilterForm store={this.props.store} />
        <Notification store={this.props.store} />
        <AnecdoteList store={this.props.store} />
        <AnecdoteForm store={this.props.store} />
      </div>
    )
  }
}

export default App
