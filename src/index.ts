import { Hono } from 'hono'
import { mustache } from 'hono/mustache'
import { serveStatic } from 'hono/serve-static'
import { getIes, getIeByName } from './model'

const app = new Hono()

app.use('*', mustache({ root: 'view' }))
app.use('/static/*', serveStatic({ root: 'public' }))

const partials = { header: 'header', footer: 'footer' }

app.get('/', async (c) => {
  const data = await getIes()
  return c.render('index', { ies: data.contents }, partials)
})

app.get('/ie/:name', async (c) => {
  const name = c.req.param('name')
  const data = await getIeByName(name)
  if (data.totalCount === 0) {
    return c.text('家系 is Not Found', 404)
  }
  return c.render('ie', data.contents[0], partials)
})

app.fire()
