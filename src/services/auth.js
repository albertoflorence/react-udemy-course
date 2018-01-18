import { firebaseAuth } from './api'

export const authAPI = {
  signIn: userInfo => firebaseAuth.post('verifyPassword', userInfo),
  signUp: userInfo => firebaseAuth.post('signupNewUser', userInfo),
  signInWithToken: idToken => firebaseAuth.post('getAccountInfo', { idToken })
}
