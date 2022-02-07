declare const X_MICROCMS_API_KEY: string
const END_POINT = 'https://iekei.microcms.io/api/v1/ies'

declare let IEKEI: KVNamespace
const KV_PREFIX: string = 'v1:api_cache:'

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
  const key = KV_PREFIX + url.toString()
  let json = await IEKEI.get(key)

  if (!json) {
    const request = new Request(url.toString(), {
      headers: {
        'X-MICROCMS-API-KEY': X_MICROCMS_API_KEY,
      },
    })
    const response = await fetch(request)
    json = await response.text()
    await IEKEI.put(key, json)
  }

  const data: Data = JSON.parse(json)
  return data
}

export const purgeKV = async () => {
  const list = await IEKEI.list({ prefix: KV_PREFIX })
  for (const key of list.keys) {
    await IEKEI.delete(key.name)
  }
}
