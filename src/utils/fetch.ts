import axios from 'axios'

axios.defaults.baseURL = 'https://api.censpan.com'

export function Get(url: string, params?: Record<string, any>, options: any = {}) {
  return axios.get(url, {
    params: params,
    ...options
  }).then(({ data }) => data)
}

export function Post(url: string, data?: Record<string, any>, options: any = {}) {
  return axios.post(url, data, options).then(({ data }) => data)
}
