import React, { Component } from 'react'

import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch, withRouter } from 'react-router-dom'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout'
import { signInWithToken, getTokenFromLocalStorage } from './store/actions'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount = () => {
    const token = getTokenFromLocalStorage()
    if (token && token !== 'null') this.props.signInWithToken(token)
  }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/logout" exact component={Logout} />
            <Route path="/login" exact component={Auth} />
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default withRouter(connect(null, { signInWithToken })(App))
