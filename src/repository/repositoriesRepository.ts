import { axiosFetcher } from '@/core/fetcher'
import { AxiosResponse } from 'axios'

export function getRepositories (search: string): Promise<AxiosResponse> {
  return axiosFetcher.get('/repositories?q=' + search + ':javascript&page=1&per_page=10&sort=stars&order=desc')
}
