import React from "react"
import { vote } from "../reducers/anecdoteReducer"
import { notify } from "../reducers/notificationReducer"

class AnecdoteList extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
  }


  render() {

    const store = this.props.store

    const aanesta = (stringi) => {
      const aanesta2 = () => {
        store.dispatch(vote(stringi))
        store.dispatch(notify("You have voted for \"" + stringi + "\""))
        setTimeout(() => {
          store.dispatch(notify(""))
        },
        5000
        )
      }
      return aanesta2
    }
    const tulostaAnekdootit = () => {
      return (
        Object.entries(store.getState().anecdotes.anecdotes)
          .filter(entry => entry[0].toLowerCase().includes(store.getState().filter.filter.toLowerCase()))
          .sort() //ensin aakkosjärjestykseen huvin vuoksi
          .sort((a, b) => {
            return b[1] - a[1]
          })
          .map(([key, value]) => {
            return (
              <div key={key}>
                <li>
              "{key}" has {value} votes
                  <button onClick={aanesta(key)}>vote</button>
                </li>
              </div>
            )
          })
      )
    }
    return(
      <div>
        <h2>Anecdotes</h2>
        { tulostaAnekdootit() }
      </div >
    )
  }
}

export default AnecdoteList
