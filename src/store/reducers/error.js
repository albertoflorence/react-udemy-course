import { FETCH_END, FETCH_ERROR } from '../constants'
import { createReducer } from '../../util/redux'

const fetchingError = (state, { label, error }) => ({
  ...state,
  [label]: error.message || (error.error && error.error.message) || error.error || error
})

const fetchingEnd = (state, { label, error }) => ({
  ...state,
  [label]: null
})
export default createReducer(
  {},
  {
    [FETCH_ERROR]: fetchingError,
    [FETCH_END]: fetchingEnd
  }
)

export const getErrorMessage = state => state
