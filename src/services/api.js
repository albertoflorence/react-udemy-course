import axios from 'axios'

const api = axios.create({
  baseURL: 'https://my-burger-5ae9c.firebaseio.com/'
})

export default api

const firebaseAuth = axios.create({
  baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'
})

firebaseAuth.interceptors.request.use(req => {
  req.url += '?key=AIzaSyAmS2Z21Olb4MwhglugaIsqoYKwzhH_iC0'
  return req
})

export { firebaseAuth }

