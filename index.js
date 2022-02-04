import { Hono } from 'hono'
import { mustache } from 'hono/mustache'
import { serveStatic } from 'hono/serve-static'

const app = new Hono()

app.use('*', mustache({ root: 'view' }))
app.use('/static/*', serveStatic({ root: 'public' }))

const db = [
  {
    name: 'yoshimura',
    image: 'yoshimura.jpg',
    title: '吉村家',
  },
  {
    name: 'sugita',
    image: 'sugita.jpg',
    title: '杉田家',
  },
]

const partials = { header: 'header', footer: 'footer' }

app.get('/', (c) => {
  return c.render('index', { ies: db }, partials)
})

app.get('/ie/:name', (c) => {
  const name = c.req.param('name')
  const ie = db.find((i) => i.name === name)
  if (!ie) {
    return c.text('家系 is Not Found', 404)
  }
  return c.render('ie', ie, partials)
})

app.fire()
