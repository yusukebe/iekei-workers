import { html } from 'hono/html'
import { jsx } from 'hono/jsx'
import Footer from './footer'
import Header from './header'

const Layout = (props: { title: string; image: string; children?: any }) => {
  return html`<!DOCTYPE html>
    <html>
      <head>
        <title>${props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css"
        />
        <head prefix="og: http://ogp.me/ns#" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="${props.title}" />
        <meta property="og:site_name" content="家系ラーメン食べたい！" />
        <meta property="og:image" content="{${props.image}}" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <div id="root" style="margin: 1em 2em">
          ${(<Header />)}
          <main>${props.children}</main>
          ${(<Footer />)}
        </div>
      </body>
    </html>`
}

export default Layout
