import { REDIRECT } from '../constants'

export const redirect = to => ({
  type: REDIRECT,
  to
})
