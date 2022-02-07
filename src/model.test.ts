import { getIeByName, getIes } from './model'

describe('mode.ts', () => {
  it('getIes', async () => {
    const data = await getIes()
    expect(data).not.toBeNull()
    expect(data.totalCount).not.toBe(0)
    expect(data.contents.length).not.toBe(0)
  })

  it('getIeByName', async () => {
    const data = await getIeByName('yoshimura')
    expect(data).not.toBeNull()
    expect(data.totalCount).toBe(1)
    expect(data.contents[0].name).toBe('yoshimura')
  })

  it('getIeByName - not found', async () => {
    const data = await getIeByName('xxx')
    expect(data).not.toBeNull()
    expect(data.totalCount).toBe(0)
  })
})
