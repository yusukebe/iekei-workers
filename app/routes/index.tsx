import { json } from '@remix-run/cloudflare'
import type { LoaderFunction, MetaFunction } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import type { Data } from '~/models/iekei.server'
import { getIes } from '~/models/iekei.server'

type LoaderData = {
  data: Data
}

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({
    data: await getIes(),
  })
}

export const meta: MetaFunction = ({ data }) => {
  return {
    'og:image': `/static/yoshimura.jpg`,
  }
}

export default function Index() {
  const { data } = useLoaderData() as LoaderData
  const ies = data.contents
  return (
    <>
      <h2>家系リスト</h2>
      <ul>
        {ies.map((ie) => {
          return (
            <li key={ie.name}>
              <a href={`/ie/${ie.name}`}>{ie.title}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
