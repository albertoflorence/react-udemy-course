import React, { Fragment, Component } from 'react'
import { Content } from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import { connect } from 'react-redux'
import { getIsAuthenticated } from '../../store/reducers/auth'

class Layout extends Component {
  state = {
    showSideDraw: false
  }
  get dinamycItems() {
    return this.props.isAuthenticated
      ? [
          { name: 'Orders', link: '/orders' },
          { name: 'Logout', link: '/logout' }
        ]
      : [{ name: 'Login', link: '/login' }]
  }
  get items() {
    return [{ name: 'Burger Builder', link: '/' }, ...this.dinamycItems]
  }
  sideDrawerHandler = () => {
    this.setState(prevState => ({ showSideDraw: !prevState.showSideDraw }))
  }

  render() {
    return (
      <Fragment>
        <Toolbar sideDrawerClick={this.sideDrawerHandler} items={this.items} />
        <SideDrawer
          closed={this.sideDrawerHandler}
          open={this.state.showSideDraw}
          items={this.items}
        />
        <main className={Content}>{this.props.children}</main>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state)
})

export default connect(mapStateToProps)(Layout)
