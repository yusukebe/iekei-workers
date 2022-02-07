import Nano from 'nano-jsx'
import { Helmet } from 'nano-jsx'

type Props = {
  title: string
  description: string
  image: string
}

const Head = (props: Props) => {
  return (
    <div>
      <Helmet>
        <title>家系ラーメン食べたい！</title>
        <meta name='description' content={props.description} />
        <head prefix='og: http://ogp.me/ns#' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={props.title} />
        <meta property='og:site_name' content='家系ラーメン食べたい！' />
        <meta property='og:image' content={props.image} />
      </Helmet>
    </div>
  )
}

export default Head
