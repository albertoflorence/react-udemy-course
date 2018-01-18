import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux'
import { getHasIngredients } from '../../store/reducers/burger'

class Checkout extends Component {
  checkoutContinueHandler = () => {
    this.props.history.push(this.props.match.path + '/contact-data')
  }
  checkoutCancelHandler = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        {this.props.purchased && <Redirect to="/orders" />}
        {!this.props.hasIngredients && <Redirect to="/" />}
        <CheckoutSummary
          ingredients={this.props.ingredients}
          checkoutContinue={this.checkoutContinueHandler}
          checkoutCancel={this.checkoutCancelHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          component={ContactData}
          exact
        />
      </div>
    )
  }
}

const mapStateToProps = ({ burger, order }) => ({
  ingredients: burger.ingredients,
  purchased: order.purchased,
  hasIngredients: getHasIngredients({ burger })
})

export default connect(mapStateToProps)(Checkout)
