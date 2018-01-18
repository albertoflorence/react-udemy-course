import { API, AUTH_SUCCESS, AUTH_LOGOUT } from "./constants/index";
import { fetchError, fetchStart, fetchEnd } from "./actions/fetch";

export const async = ({ dispatch, getState }) => next => action => {
  if (action.type !== API) return next(action)

  const { api, auth, success, label = 'global' } = action.payload
  const token = getState().auth.token || ''
  const _fetch = auth && typeof api === 'function' ? api(token) : api

  dispatch(fetchStart(label))
  return _fetch
    .then(r => r.data || (r.json && r.json()) || r)
    .then(data => {
      dispatch(success(data))
      dispatch(fetchEnd(label))
    })
    .catch(error => dispatch(fetchError((error.response && error.response.data) || error, label)))
}

export const localStorageMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === AUTH_SUCCESS) {
    localStorage.setItem('token', action.token)
  } else if (action.type === AUTH_LOGOUT) {
    localStorage.setItem('token', null)
  }
  next(action)
}