import React from 'react'
import Footer from './footer'
import Header from './header'

import { FC } from 'react'

type Props = {
  title: string
  image: string
}

const Layout: FC<Props> = ({ title, image, children }) => {
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css' />
        <head prefix='og: http://ogp.me/ns#' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={title} />
        <meta property='og:site_name' content='家系ラーメン食べたい！' />
        <meta property='og:image' content={`${image}`} />
        <meta name='twitter:card' content='summary_large_image' />
      </head>
      <body>
        <div id='root' style={{ margin: '1em 2em' }}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </>
  )
}

export default Layout
