import { FETCH_START, FETCH_END, FETCH_ERROR } from '../constants'

export const fetchStart = label => ({
  type: FETCH_START,
  label
})
export const fetchEnd = label => ({
  type: FETCH_END,
  label
})
export const fetchError = (error, label) => ({
  type: FETCH_ERROR,
  label,
  error
})
