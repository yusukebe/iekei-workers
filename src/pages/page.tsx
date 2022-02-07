import React, { FC } from 'react'
import type { Data } from '../model'
import Layout from '../components/layout'

type Props = {
  data: Data
}

const Page: FC<Props> = (props) => {
  const ie = props.data.contents[0]
  return (
    <Layout title={ie.title} image={`${ie.image.url}?w=600`}>
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
    </Layout>
  )
}

export default Page
