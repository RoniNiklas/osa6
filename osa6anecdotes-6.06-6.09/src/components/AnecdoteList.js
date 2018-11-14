
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
          .sort() //ensin aakkosjärjestykseen huvin vuoksi
          .sort((a, b) => {
            return b[1] - a[1]
          })
          .map(([key, value]) => {
            return (
              <div key={key}>
                <li>
                  "{key}" has {value} votes
                  <button onClick={() => {
                    this.props.vote(key)
                    this.props.notify("You have voted for \"" + key + "\"")
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
  const anecdotesToShow = Object.entries(anecdotes)
    .filter(entry => entry[0].toLowerCase().includes(filter.toLowerCase()))
  return anecdotesToShow
}
const mapStateToProps = (state) => {
  return {
    anecdotes: anecdotesToShow(state.anecdotes.anecdotes, state.filter.filter)
  }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  {vote, notify}
)(AnecdoteList)

export default ConnectedAnecdoteList
