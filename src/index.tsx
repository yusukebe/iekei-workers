import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static'
import { verify } from './utils'

import { getIes, getIeByName, purgeKV } from './model'

import React from 'react'
import { render } from './renderer'
import Index from './pages/index'
import Page from './pages/page'

declare const X_MICROCMS_WEBHOOK_SECRET: string

const app = new Hono()

app.use('/static/*', serveStatic({ root: 'public' }))
app.use('/favicon.ico', serveStatic({ root: 'public' }))

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

app.post('/webhook', async (c) => {
  const signature = c.req.header('x-microcms-signature')
  const text = await c.req.text()
  const verified = await verify(X_MICROCMS_WEBHOOK_SECRET, text, signature)
  if (verified) {
    await purgeKV()
    return c.text('OK')
  }
  return c.text('Verification failed', 401)
})

app.fire()
