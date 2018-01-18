import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Card from '../../components/UI/Card/Card'
import { signIn, signUp } from '../../store/actions'
import { connect } from 'react-redux'
import { getErrorMessage } from '../../store/reducers'
import { Redirect } from 'react-router-dom'
import { getIsAuthenticated } from '../../store/reducers/auth'
import { getIsBuilding } from '../../store/reducers/burger'

class Auth extends Component {
  state = {
    email: '',
    password: '',
    isSignUp: false
  }

  inputHandler = name => event => {
    this.setState({ [name]: event.target.value })
  }

  authHandler = e => {
    e.preventDefault()
    const method = this.state.isSignUp ? 'signUp' : 'signIn'
    this.props[method](
      {
        email: this.state.email,
        password: this.state.password
      },
      'auth'
    )
  }

  toggleAuthHandler = () => {
    this.setState(prevState => ({
      isSignUp: !prevState.isSignUp
    }))
  }

  render() {
    let test = (
      <Card>
        {this.props.isAuthenticated &&
          (this.props.isBuilding ? (
            <Redirect to={'/checkout'} />
          ) : (
              <Redirect to={'/'} />
            ))}
        <Button onClick={this.toggleAuthHandler} color="Danger">
          {this.state.isSignUp ? (
            <p>
              Already have an account? <br />Click to Login !
            </p>
          ) : (
              <p>
                Still doens't have an account? <br />Click to Register !
            </p>
            )}
        </Button>
        <div>{this.props.errorMessage}</div>
        <form onSubmit={this.authHandler}>
          <Input
            require
            placeholder={'email'}
            onChange={this.inputHandler('email')}
          />
          <Input
            require
            placeholder={'password'}
            onChange={this.inputHandler('password')}
            type="password"
          />
          <Button flat type="submit" color="Success">
            {this.state.isSignUp ? 'Register' : 'Login'}
          </Button>
        </form>
      </Card>
    )
    return test
  }
}

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  isBuilding: getIsBuilding(state),
  errorMessage: getErrorMessage(state, 'auth')
})
export default connect(mapStateToProps, { signIn, signUp })(Auth)
