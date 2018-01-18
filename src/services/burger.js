import api from './api'

export const burgerAPI = {
  getIngredients: () => api.get('ingredients.json')
}

