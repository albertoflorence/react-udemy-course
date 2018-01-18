import api from './api'

export const orderAPI = {
  create: order => token => api.post(`orders.json?auth=${token}`, order),
  get: userId => token => api.get(`orders.json?orderBy="userId"&equalTo="${userId}"&auth=${token}`)
}
