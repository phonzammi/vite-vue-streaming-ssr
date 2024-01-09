import { SSRContext, renderToNodeStream } from 'vue/server-renderer'
import { createApp } from './main'

export function render() {
  const { app } = createApp()

  const ctx: SSRContext = {}

  const stream = renderToNodeStream(app, ctx)

  return { stream }
}
