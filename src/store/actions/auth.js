import { AUTH_SUCCESS, AUTH_LOGOUT, API } from '../constants'
import { authAPI } from '../../services/auth'

const setTokenToLocalStorage = userInfo => {
  return userInfo
}

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token')
}

export const logout = () => {
  setTokenToLocalStorage({ token: null })
  return {
    type: AUTH_LOGOUT
  }
}

export const signUp = (userInfo, label = 'signUp') =>
  auth(authAPI.signUp, { ...userInfo, returnSecureToken: true }, label)

export const signIn = (userInfo, label = 'signIn') =>
  auth(authAPI.signIn, userInfo, label)

export const signInWithToken = (idToken, label = 'app') =>
  auth(authAPI.signInWithToken, idToken, label, ({ users }) => ({
    localId: users[0].localId,
    email: users[0].email,
    idToken
  }))

const auth = (method, data, label, cb) => ({
  type: API,
  payload: {
    api: method(data),
    success: response => authSuccess(cb ? cb(response) : response),
    label,
  }
})

const authSuccess = ({ idToken, localId, email }) => ({
  type: AUTH_SUCCESS,
  token: idToken,
  user: {
    id: localId,
    email
  }
})