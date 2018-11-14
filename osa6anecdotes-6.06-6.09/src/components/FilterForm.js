import React from 'react'
import {connect} from "react-redux"
import { filter } from "../reducers/filterReducer"

class FilterForm extends React.Component {

    constructor(props) {
        super(props)
        this.props = props
    }

    handleChange = (event) => {
        this.props.filter(event.target.value)
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
const mapStateToProps = (state) => {
    return {
    }
  }
  
const ConnectedFilterForm = connect(
    mapStateToProps,
    {filter}
  )(FilterForm)
  
  export default ConnectedFilterForm
  
