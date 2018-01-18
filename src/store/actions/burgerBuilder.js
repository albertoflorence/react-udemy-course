import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
  SET_BUILDING,
  API
} from '../constants'

import { burgerAPI } from '../../services/burger'

export const addIngredient = ingredient => ({
  type: ADD_INGREDIENT,
  ingredient
})

export const removeIngredient = ingredient => ({
  type: REMOVE_INGREDIENT,
  ingredient
})

const setIngredients = ingredients => ({
  type: SET_INGREDIENTS,
  ingredients
})

export const setIsBuilding = isBuilding => ({
  type: SET_BUILDING,
  isBuilding
})

export const initIngredients = (label = 'burgerBuilder') => ({
  type: API,
  payload: {
    api: burgerAPI.getIngredients(),
    success: setIngredients,
    label
  }
})
