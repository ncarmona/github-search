import { mount, VueWrapper } from '@vue/test-utils'
import TableRepositoryHeader from '@/components/TableRepositoryHeaderComponent.vue'

describe('Input search repository header', () => {
  const wrapper: VueWrapper<any> = mount(TableRepositoryHeader)

  it('Headers values rendered', () => {
    const expectedCellValues: string[] = ['Nombre del repositorio', 'URL']
    const result: string[] = wrapper.findAll('th').map((e: any) => e.text())

    expect(result).toStrictEqual(expectedCellValues)
  })
})
