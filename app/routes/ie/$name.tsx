import { json } from '@remix-run/cloudflare'
import type { LoaderFunction, MetaFunction } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import type { Content } from '~/models/iekei.server'
import { getIeByName } from '~/models/iekei.server'

type LoaderData = {
  contents: Content[]
}

export const loader: LoaderFunction = async ({ params }) => {
  const { name } = params
  return await getIeByName(name || '')
}

export const meta: MetaFunction = ({ data }) => {
  const ie = data.contents[0]
  return {
    title: `${ie.title}`,
    'og:title': `${ie.title}`,
    'og:image': `${ie.image.url}?w=600`,
  }
}

export default function Page() {
  const { contents } = useLoaderData() as LoaderData
  const ie = contents[0]
  return (
    <>
      <h2>{ie.title}</h2>
      <p>
        <img
          alt={ie.title}
          src={`${ie.image.url}?w=600`}
          width='600'
          height='450'
          style={{ width: '100%', height: 'auto', maxWidth: '600px' }}
        />
      </p>
      <blockquote>{ie.description}</blockquote>
    </>
  )
}
