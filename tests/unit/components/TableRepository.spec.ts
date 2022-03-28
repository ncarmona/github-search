import { mount, VueWrapper } from '@vue/test-utils'
import TableSearchRespositoryRow from '@/components/TableRepositoryRowComponent.vue'
import { IRepositoryResult } from '@/interfaces/IRepositoryResult'

describe('Table Search Repository', () => {
  const repositoryData:IRepositoryResult = {
    name: 'repository url',
    url: 'http://www.github.com'
  }
  const wrapper: VueWrapper<any> = mount(TableSearchRespositoryRow, {
    props: {
      repository: repositoryData
    }
  })

  it('Repository data rendered', () => {
    const expectedResult: string[] = Object.values(repositoryData)
    const result: string[] = wrapper.findAll('td').map((e: any) => e.text())

    expect(result).toStrictEqual(expectedResult)
  })
})
