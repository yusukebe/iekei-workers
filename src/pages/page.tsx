import React, { FC } from 'react'
import type { IE } from '../model'
import Layout from '../components/layout'

type Props = {
  ie: IE
}

const Page: FC<Props> = (props) => {
  const { title, image, name } = props.ie
  return (
    <Layout title={title} image={`/static/${image}`}>
      <h2>{title}</h2>
      <p>
        <img
          alt={title}
          src={`/static/${image}`}
          width='600'
          height='450'
          style={{ width: '100%', height: 'auto', maxWidth: '600px' }}
        />
      </p>
    </Layout>
  )
}

export default Page
