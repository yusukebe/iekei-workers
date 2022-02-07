declare const X_MICROCMS_API_KEY: string
const END_POINT = 'https://iekei.microcms.io/api/v1/ies'

export type Image = {
  url: string
  height: number
  with: number
}

export type Content = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  title: string
  image: Image
  description: string
}

export type Data = {
  contents: Content[]
  totalCount: number
  offset: number
  limit: number
}

export const getIes = async (): Promise<Data> => {
  const url = new URL(END_POINT)
  return await getData(url)
}

export const getIeByName = async (name: string): Promise<Data> => {
  const url = new URL(END_POINT)
  url.searchParams.append('filters', `name[equals]${name}`)
  return await getData(url)
}

const getData = async (url: URL): Promise<Data> => {
  const request = new Request(url.toString(), {
    headers: {
      'X-MICROCMS-API-KEY': X_MICROCMS_API_KEY,
    },
  })
  const response = await fetch(request)
  const data: Data = await response.json()
  return data
}
