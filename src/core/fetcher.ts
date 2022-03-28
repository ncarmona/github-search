import axios, { AxiosInstance } from 'axios'

export const axiosFetcher: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/search'
})
