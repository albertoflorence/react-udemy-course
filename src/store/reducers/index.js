import burger from './burger'
import order from './order'
import auth from './auth'
import isFetching, * as fromIsFetching from './isFetching'
import error, * as fromError from './error'

export default {
  burger,
  order,
  auth,
  isFetching,
  error
}

export const getErrorMessage = (state, label) =>
  fromError.getErrorMessage(state.error[label])

export const getIsFetching = (state, label) =>
  fromIsFetching.getIsFetching(state.isFetching[label])
