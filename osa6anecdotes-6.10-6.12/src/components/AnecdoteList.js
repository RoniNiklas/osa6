
import React from "react"
import { vote } from "../reducers/anecdoteReducer"
import { notify } from "../reducers/notificationReducer"
import { connect } from "react-redux"

class AnecdoteList extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const tulostaAnekdootit = () => {
      return (
        this.props.anecdotes
          .sort((a, b) => {
            return b.votes - a.votes
          })
          .map((entry) => {
            return (
              <div key={entry.dote}>
                <li>
                  "{entry.dote}" has {entry.votes} votes
                  <button onClick={() => 
                  {
                    this.props.vote(entry.dote)
                    this.props.notify("You have voted for \"" + entry.dote + "\"")
                    setTimeout(() => {
                      this.props.notify("")
                    }, 5000)
                  }
                  }>vote</button>
                </li>
              </div>
            )
          })
      )
    }

    return (
      <div>
        <h2>Anecdotes</h2>
        {tulostaAnekdootit()}
      </div >
    )
  }
}

const anecdotesToShow =(anecdotes, filter) => {
  const anecdotesToShow = anecdotes
    .filter(function(entry) {
      return entry.dote.toLowerCase().includes(filter.toLowerCase())
    })
  return anecdotesToShow
}
const mapStateToProps = (state) => {
  return {
    anecdotes: anecdotesToShow(state.anecdotes, state.filter.filter)
  }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  {vote, notify}
)(AnecdoteList)

export default ConnectedAnecdoteList
