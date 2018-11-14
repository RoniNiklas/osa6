import React from 'react'
import { createNew } from "../reducers/anecdoteReducer"
import { notify } from "../reducers/notificationReducer"

class AnecdoteForm extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.store.dispatch(createNew(content))
    this.props.store.dispatch(notify("You have added \"" + content + "\""))
    setTimeout(() => {
      this.props.store.dispatch(notify(""))
    },
      5000
    )
    e.target.anecdote.value = ''
  }
  render() {


    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote' /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default AnecdoteForm
