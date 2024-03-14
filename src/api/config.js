export const BASE_URL = 'http://localhost:3000'
import axios from 'axios'
import { toast } from 'react-toastify'
import { prettyString } from '../utils/prettyString'

export function GET (url) {
  return axios.get(`${BASE_URL}${url}`)
}
export async function POST (url, payload) {
  const body = payload
  try {
    return await axios.post(`${BASE_URL}${url}`, body)
  } catch (err) {
    const { message } = err.response.data
    toast.error(prettyString(message))
  }
}

export function PATCH (url, payload) {
  return axios.patch(`${BASE_URL}${url}`, {
    ...payload
  })
}

export function DELETE (url, payload) {
  return axios.delete(`${BASE_URL}${url}`, {
    ...payload
  })
}
