import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static'
import React from 'react'
import { render } from './renderer'

import Index from './pages/index'
import Page from './pages/page'

import { getIes, getIeByName } from './model'

const app = new Hono()

app.use('/static/*', serveStatic({ root: 'public' }))

app.get('/', async (c) => {
  const data = await getIes()
  const page = render(<Index data={data} />)
  return c.html(page)
})

app.get('/ie/:name', async (c) => {
  const name = c.req.param('name')
  const data = await getIeByName(name)
  if (data.totalCount === 0) {
    return c.text('家系 is Not Found', 404)
  }
  const page = render(<Page data={data} />)
  return c.html(page)
})

app.fire()
