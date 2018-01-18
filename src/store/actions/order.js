import {
  PURCHASE_BURGER_SUCCESS,
  FETCH_ORDERS_SUCCESS,
  PURCHASE_INIT,
  API
} from '../constants'
import { orderAPI } from '../../services/order'

export const purchaseInit = () => ({
  type: PURCHASE_INIT
})

const purchaseBurgerSuccess = payload => ({
  type: PURCHASE_BURGER_SUCCESS,
  ...payload
})

export const purchaseBurger = orderData => ({
  type: API,
  payload: {
    api: orderAPI.create(orderData),
    auth: true,
    success: purchaseBurgerSuccess
  }
})

const fetchOrdersSuccess = payload => ({
  type: FETCH_ORDERS_SUCCESS,
  payload
})

export const fetchOrders = (userId) => ({
  type: API,
  payload: {
    api: orderAPI.get(userId),
    auth: true,
    success: fetchOrdersSuccess,
  }
})
