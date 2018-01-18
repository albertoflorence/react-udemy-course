import {
  PURCHASE_BURGER_SUCCESS,
  FETCH_ORDERS_SUCCESS,
  PURCHASE_INIT
} from '../constants'
import { createReducer } from '../../util/redux'

const purchaseBurgerSuccess = (state, { payload }) => ({
  ...state,
  orders: payload,
  purchased: true
})

const fetchOrdersSuccess = (state, { payload }) => ({
  ...state,
  orders: payload
})

const purchaseInit = (state, action) => ({
  ...state,
  purchased: false
})

export default createReducer(
  {
    orders: {},
    purchased: false
  },
  {
    [PURCHASE_BURGER_SUCCESS]: purchaseBurgerSuccess,
    [FETCH_ORDERS_SUCCESS]: fetchOrdersSuccess,
    [PURCHASE_INIT]: purchaseInit
  }
)
