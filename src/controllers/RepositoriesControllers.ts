import { IRepositoryResult } from '@/interfaces/IRepositoryResult'
import { getRepositories } from '@/repository/repositoriesRepository'

export async function getRepositoriesController (search: string): Promise<IRepositoryResult[]> {
  return (await getRepositories(search)).data.items.map((items: any) => {
    return {
      name: items.name,
      url: items.html_url
    }
  })
}
