import React from 'react'
import {connect} from "react-redux"
import { createNew } from "../reducers/anecdoteReducer"
import { notify } from "../reducers/notificationReducer"

class AnecdoteForm extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  handleSubmit =  async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.createNew(content)
    this.props.notify("You have added \"" + content + "\"", 5000)
    e.target.anecdote.value = ''
  }
  render() {

    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name="anecdote" /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchtoProps = {
    createNew,
    notify
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchtoProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
