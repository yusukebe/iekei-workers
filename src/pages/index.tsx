import React, { FC } from 'react'
import type { IE } from '../model'
import Layout from '../components/layout'
// import Head from '../components/head'

type Props = {
  ies: IE[]
}

const Index: FC<Props> = (props) => {
  const { ies } = props
  return (
    <Layout title="家系ラーメン食べたい！" image="/static/yoshimura.jpg">
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
