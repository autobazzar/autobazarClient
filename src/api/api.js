import { POST } from './config'

const authToken = localStorage.getItem('jwt')

export async function registerUser (payload, googleFlag) {
  const url = googleFlag ? '/users/sign-up-google' : '/users/sign-up'
  console.error(googleFlag);
  return POST(url, { ...payload, isFromGoogle: Boolean(googleFlag) })
}

export async function loginUser (payload, googleFlag) {
  const url = googleFlag ? '/users/login-google' : '/users/login'
  return POST(url, payload)
}
