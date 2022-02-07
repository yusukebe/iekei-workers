import React, { FC } from 'react'
import type { Data } from '../model'
import Layout from '../components/layout'

type Props = {
  data: Data
}

const Index: FC<Props> = (props) => {
  const ies = props.data.contents
  return (
    <Layout title='家系ラーメン食べたい！' image='/static/yoshimura.jpg'>
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
    </Layout>
  )
}

export default Index
