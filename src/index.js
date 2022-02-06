import { Hono } from 'hono'
import { mustache } from 'hono/mustache'
import { serveStatic } from 'hono/serve-static'
import { ies } from './ies'

const app = new Hono()

app.use('*', mustache({ root: 'view' }))
app.use('/static/*', async (c, next) => {
  await next()
  if (c.res.headers.get('Content-Type').match(/image/)) {
    c.header('Cache-Control', 'public, max-age=86400')
  }
})

app.use('/static/*', serveStatic({ root: 'public' }))

const partials = { header: 'header', footer: 'footer' }

app.get('/', (c) => {
  return c.render('index', { ies: ies }, partials)
})

app.get('/ie/:name', (c) => {
  const name = c.req.param('name')
  const ie = ies.find((i) => i.name === name)
  if (!ie) {
    return c.text('家系 is Not Found', 404)
  }
  return c.render('ie', ie, partials)
})

app.fire()
