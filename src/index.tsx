import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static'
import Nano from 'nano-jsx'
import { render } from './renderer'
import { getIes, getIeByName } from './model'
import Top from './pages/top'
import Page from './pages/page'

const app = new Hono()

app.use('/static/*', serveStatic({ root: 'public' }))

app.get('/', async (c) => {
  const data = await getIes()
  return c.html(render(<Top data={data} />))
})

app.get('/ie/:name', async (c) => {
  const name = c.req.param('name')
  const data = await getIeByName(name)
  if (data.totalCount === 0) {
    return c.text('家系 is Not Found', 404)
  }
  return c.html(render(<Page data={data} />))
})

app.fire()
