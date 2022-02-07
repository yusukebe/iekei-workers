import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static'

import React from 'react'

import { render } from './renderer'
import { ies } from './model'
import Index from './pages/index'
import Page from './pages/page'

const app = new Hono()

app.use('/static/*', serveStatic({ root: 'public' }))

app.get('/', (c) => {
  const page = render(<Index ies={ies} />)
  return c.html(page)
})

app.get('/ie/:name', (c) => {
  const name = c.req.param('name')
  const ie = ies.find((i) => i.name === name)
  if (!ie) {
    return c.text('家系 is Not Found', 404)
  }
  const page = render(<Page ie={ie} />)
  return c.html(page)
})

app.fire()
