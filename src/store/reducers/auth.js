import { AUTH_SUCCESS, AUTH_LOGOUT } from '../constants'
import { createReducer } from '../../util/redux'

const authSuccess = (state, { token, user }) => ({
  ...state,
  token,
  user
})

const authLogout = state => ({
  ...state,
  token: null,
  user: null
})

export default createReducer(
  {
    user: null,
    token: null
  },
  {
    [AUTH_SUCCESS]: authSuccess,
    [AUTH_LOGOUT]: authLogout
  }
)

export const getIsAuthenticated = ({ auth }) => {
  return !!auth.token
}
