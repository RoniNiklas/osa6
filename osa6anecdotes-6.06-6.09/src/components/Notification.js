import React from "react"
import {connect} from "react-redux"

class NotificationForm extends React.Component {

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
    if (this.props.notifications.notification !== "") {
      return (
        <div style={style}>
          {this.props.notifications.notification}
        </div>
      )
    }

    return null
  }
}
const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

const mapDispatchtoProps = {
}

const ConnectedNotificationForm = connect(
  mapStateToProps,
  mapDispatchtoProps
)(NotificationForm)
export default ConnectedNotificationForm
