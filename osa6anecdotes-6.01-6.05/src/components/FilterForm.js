import React from 'react'
import { filter } from "../reducers/filterReducer"

class AnecdoteForm extends React.Component {

    constructor(props) {
        super(props)
        this.props = props
    }

    handleChange = (event) => {
        this.props.store.dispatch(filter(event.target.value))
    }
    render() {
        const style = {
            marginBottom: 10
        }

        return (
            <div style={style}>
                filter <input onChange={this.handleChange} />
            </div>
        )
    }
}

export default AnecdoteForm
