import Nano, { FC } from 'nano-jsx'
import { Helmet } from 'nano-jsx'
import type { Data } from '../model'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from '../components/head'

type Props = {
  data: Data
}

const Top: FC<Props> = (props) => {
  const { data } = props
  const contents = data.contents
  const title = '家系ラーメン食べたい！'
  const description = 'どうしても、家系ラーメンが食べたいのです。'
  return (
    <div>
      <Head title={title} description={description} image='/static/yoshimura.jpg' />
      <Header />
      <h2>家系リスト</h2>
      <ul>
        {contents.map((ie) => {
          return (
            <li key={ie.name}>
              <a href={`/ie/${ie.name}`}>{ie.title}</a>
            </li>
          )
        })}
      </ul>
      <Footer />
    </div>
  )
}

export default Top
