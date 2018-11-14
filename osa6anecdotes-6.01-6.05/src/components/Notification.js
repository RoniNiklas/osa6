import React from "react"

class Notification extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const style = {
      border: "solid",
      padding: 10,
      borderWidth: 1
    }
   /* if (this.props.store.getState().notifications.notification !== "") {
      return (
        <div style={style}>
          {this.props.store.getState().notifications.notification}
        </div>
      )
    }
    */
    return null
  }
}

export default Notification
