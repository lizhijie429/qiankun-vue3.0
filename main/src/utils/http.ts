import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'http://localhost:3000/'
})

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export function httpGet(url: string, config?: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, config)
      .then((response: AxiosResponse) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default instance
