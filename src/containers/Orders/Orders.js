import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'
import { fetchOrders } from '../../store/actions'
import { connect } from 'react-redux'
import { map } from '../../util'

class Orders extends Component {
  state = {
    loading: true
  }
  componentDidMount = async () => {
    await this.props.fetchOrders(this.props.userId)
    this.setState({ loading: false })
  }

  render() {
    return (
      <div>
        <Spinner isLoading={this.state.loading}>
          {map(this.props.orders || {}, (order, id) => (
            <Order
              key={id}
              ingredients={order.ingredients}
              price={order.price}
            />
          ))}
        </Spinner>
      </div>
    )
  }
}

const mapStateToProps = ({ order, auth }) => ({
  orders: order.orders,
  userId: auth.user && auth.user.id
})

export default connect(mapStateToProps, { fetchOrders })(Orders)
