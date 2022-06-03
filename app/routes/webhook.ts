import type { ActionFunction } from '@remix-run/cloudflare' // or "@remix-run/cloudflare"
import { json } from '@remix-run/cloudflare' // or "@remix-run/cloudflare"
import crypto from 'crypto'
import { purgeKV } from '~/models/iekei.server'

declare const X_MICROCMS_WEBHOOK_SECRET: string

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== 'POST') {
    return json({ message: 'Method not allowed' }, 405)
  }
  const payload = await request.json()

  /* Validate the webhook */
  const signature = request.headers.get('X-Hub-Signature-256')
  const generatedSignature = `sha256=${crypto
    .createHmac('sha256', X_MICROCMS_WEBHOOK_SECRET)
    .update(JSON.stringify(payload))
    .digest('hex')}`
  if (signature !== generatedSignature) {
    return json({ message: 'Signature mismatch' }, 401)
  }

  purgeKV()

  return json({ success: true }, 200)
}
