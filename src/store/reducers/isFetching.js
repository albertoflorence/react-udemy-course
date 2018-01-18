import { FETCH_START, FETCH_END, FETCH_ERROR } from '../constants'

import { createReducer } from '../../util/redux'

const startFetching = (state, { label }) => ({
  ...state,
  [label]: true
})

const endFetching = (state, { label }) => ({
  ...state,
  [label]: false
})

export default createReducer(
  {},
  {
    [FETCH_START]: startFetching,
    [FETCH_END]: endFetching,
    [FETCH_ERROR]: endFetching
  }
)

export const getIsFetching = state => state