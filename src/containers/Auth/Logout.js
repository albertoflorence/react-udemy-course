import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { logout } from '../../store/actions/auth'

class Logout extends Component {
  componentWillMount = () => {
    this.props.logout()
  }
  render() {
    return <Redirect to={'/'} />
  }
}

export default connect(null, { logout })(Logout)
