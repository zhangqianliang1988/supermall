import axios from 'axios'

export function request (option) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  instance.interceptors.request.use(option => {
    return option
  }, error => {
    console.error(error)
    return error
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error)
    return error
  })

  return instance(option)
}
