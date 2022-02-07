import Nano, { FC } from 'nano-jsx'
import { Helmet } from 'nano-jsx'
import type { Data } from '../model'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from '../components/head'

type Props = {
  data: Data
}

const Page: FC<Props> = (props) => {
  const data = props.data
  const ie = data.contents[0]
  return (
    <div>
      <Head title={ie.title} description={ie.description} image={`${ie.image.url}?w=600`} />
      <Header />
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
      <Footer />
    </div>
  )
}

export default Page
