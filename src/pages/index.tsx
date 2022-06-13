import { jsx } from 'hono/jsx'
import type { Data } from '../model'
import Layout from '../components/layout'

const Index = (props: { data: Data }) => {
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
