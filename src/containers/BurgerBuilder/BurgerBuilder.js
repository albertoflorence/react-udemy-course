import React, { Component, Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import { connect } from 'react-redux'
import { mapObject, some } from '../../util'
import { getIsAuthenticated } from '../../store/reducers/auth'
import * as actions from '../../store/actions'

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    isLoading: true
  }

  get isPurchasable() {
    return some(this.props.ingredients, qty => qty > 0)
  }

  get disabledInfo() {
    return mapObject(this.props.ingredients, qty => qty <= 0)
  }

  get buttonText() {
    return this.props.isAuthenticated ? 'ORDER NOW' : 'SIGN IN TO ORDER'
  }

  componentWillMount = async () => {
    await this.props.initIngredients()
    this.setState({ isLoading: false })
  }

  purchaseHandler = () => {
    if (!this.props.isAuthenticated) {
      this.props.setIsBuilding(true)
      return this.props.history.push('/login')
    }
    this.setState({ purchasing: true })
  }

  purchaseCancelHandler = () => this.setState({ purchasing: false })

  purchaseContinueHandler = () => {
    this.props.purchaseInit()
    this.props.history.push({ pathname: '/checkout' })
  }

  render() {
    if (this.state.isLoading) return <Spinner isLoading={true} />
    if (!this.props.ingredients)
      return (
        <div style={{ textAlign: 'center' }}>
          Something went bad, please try reload the page
        </div>
      )
    const {
      totalPrice,
      ingredients,
      addIngredient,
      removeIngredient
    } = this.props
    return (
      <Fragment>
        <Modal show={this.state.purchasing} close={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={ingredients}
            totalPrice={totalPrice}
            purchaseCancel={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
          price={totalPrice}
          disabled={this.disabledInfo}
          purchasable={this.isPurchasable}
          ordered={this.purchaseHandler}
          buttonText={this.buttonText}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ burger, ...state }) => ({
  ingredients: burger.ingredients,
  totalPrice: burger.totalPrice,
  isAuthenticated: getIsAuthenticated(state)
})

export default connect(mapStateToProps, actions)(BurgerBuilder)
