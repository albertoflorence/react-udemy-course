import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import { map, every } from '../../../util'
import { connect } from 'react-redux'
import { purchaseBurger } from '../../../store/actions/order'

const require = value => value && value.trim() !== ''

class ContactData extends Component {
  state = {
    formData: {
      name: '',
      email: '',
      street: '',
      zipCode: ''
    },
    selected: '',
    loading: false,
    isFormValid: false
  }

  deliveryTypes = ['fastest', 'cheapest']

  rules = {
    name: [require],
    email: [require],
    street: [require],
    zipCode: [require]
  }

  get isFormValid() {
    const { formData } = this.state
    return every(formData, (value, key) =>
      this.checkRules(this.rules[key], value)
    )
  }

  checkRules = (rules, value) => {
    if (!Array.isArray(rules)) return true
    return rules.every(rule => rule(value))
  }

  orderHandler = async event => {
    event.preventDefault()
    if (!this.isFormValid) return

    this.setState({ isLoading: true })
    await this.props.purchaseBurger({
      ...this.state.formData,
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      deliveryMethod: this.state.selected,
      userId: this.props.userId
    })
    this.setState({ isLoading: false })
  }

  inputHandler = field => e => {
    const { value } = e.target
    this.setState(({ formData }) => ({
      formData: {
        ...formData,
        [field]: value
      }
    }))
  }

  handleSelected = e => {
    this.setState({ selected: e.target.value })
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <Spinner isLoading={this.state.isLoading}>
          <form onSubmit={this.orderHandler}>
            {map(this.state.formData, (input, name) => (
              <Input
                key={name}
                placeholder={name}
                capitalize
                pretty
                required
                error={
                  !this.checkRules(this.rules[name], this.state.formData[name])
                }
                onChange={this.inputHandler(name)}
              />
            ))}
            <Input
              placeholder="Delivery Type"
              select
              options={this.deliveryTypes}
              onChange={this.handleSelected}
            />
            <Button flat color="Success" disabled={!this.isFormValid}>
              ORDER
            </Button>
          </form>
        </Spinner>
      </div>
    )
  }
}

const mapStateToProps = ({ burger, auth }) => ({
  ingredients: burger.ingredients,
  totalPrice: burger.totalPrice,
  userId: auth.user.id
})

export default connect(mapStateToProps, { purchaseBurger })(ContactData)
