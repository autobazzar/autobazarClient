import { POST } from './config'

const authToken = localStorage.getItem('jwt')

export async function registerUser (payload) {
  const result = await POST('sign-up', payload)
}

export async function loginUser (payload, googleFlag) {
  const url = googleFlag ? '/users/login-google' : '/users/login'
  try {
    const result = await (await POST(url, payload)).json()
  } catch (e) {
    console.error(e)
  }
}
