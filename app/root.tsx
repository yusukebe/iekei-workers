import type { MetaFunction } from '@remix-run/cloudflare'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import Header from '~/components/header'
import Footer from '~/components/footer'
import type { LinksFunction } from '@remix-run/cloudflare'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'stylesheet',
      href: '//cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css',
    },
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: '家系ラーメン食べたい！',
  viewport: 'width=device-width,initial-scale=1',
  'og:type': 'article',
  'og:title': '家系ラーメン食べたい！',
  'og:site_name': '家系ラーメン食べたい！',
  'twitter:card': 'summary_large_image',
})

export default function App() {
  return (
    <html lang='ja'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div id='root' style={{ margin: '1em 2em' }}>
          <Header />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Footer />
        </div>
      </body>
    </html>
  )
}
