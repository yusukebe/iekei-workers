import type { ReactElement } from 'react'
import ReactDOMServer from 'react-dom/server'

type Props = (props: { content: string }) => string

const renderTemplate: Props = (props) => {
  return `<!doctype html>
  <html>
    ${props.content}
  </html>
  `
}

export const render = (component: ReactElement) => {
  const content = ReactDOMServer.renderToString(component)
  return renderTemplate({
    content: content
  })
}
