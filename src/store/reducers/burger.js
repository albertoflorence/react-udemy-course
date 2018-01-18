import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  SET_BUILDING
} from '../constants'
import { createReducer } from '../../util/redux'
import { some } from '../../util'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

const makeToFixed = decimalPlaces => number =>
  Math.round(Number(number * 10 ** decimalPlaces)) / 10 ** decimalPlaces
const toFixed2 = makeToFixed(2)

const addIngredient = (state, { ingredient }) => ({
  ...state,
  ingredients: {
    ...state.ingredients,
    [ingredient]: state.ingredients[ingredient] + 1
  },
  totalPrice: toFixed2(state.totalPrice + INGREDIENT_PRICES[ingredient])
})
const removeIngredient = (state, { ingredient }) => ({
  ...state,
  ingredients: {
    ...state.ingredients,
    [ingredient]: state.ingredients[ingredient] - 1
  },
  totalPrice: toFixed2(state.totalPrice - INGREDIENT_PRICES[ingredient])
})
const setIngredient = (state, { ingredients }) => ({
  ...state,
  ingredients,
  totalPrice: 4
})
const setIsBuilding = (state, { isBuilding }) => ({
  ...state,
  isBuilding
})

export default createReducer(
  {
    ingredients: null,
    totalPrice: 4
  },
  {
    [ADD_INGREDIENT]: addIngredient,
    [REMOVE_INGREDIENT]: removeIngredient,
    [SET_INGREDIENTS]: setIngredient,
    [SET_BUILDING]: setIsBuilding
  }
)

export const getIsBuilding = ({ burger }) => burger.isBuilding

export const getHasIngredients = ({ burger }) =>
  burger.ingredients && some(burger.ingredients, value => value > 0)
