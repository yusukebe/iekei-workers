const enc = new TextEncoder()

const importKey = async (secret: string) => {
  return crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    {
      name: 'HMAC',
      hash: { name: 'SHA-256' },
    },
    false,
    ['sign', 'verify']
  )
}

function UInt8ArrayToHex(signature: ArrayBuffer) {
  return Array.prototype.map.call(new Uint8Array(signature), (x: any) => x.toString(16).padStart(2, '0')).join('')
}

const sign = async (secret: string, data: string) => {
  const signature = await crypto.subtle.sign('HMAC', await importKey(secret), enc.encode(data))
  return UInt8ArrayToHex(signature)
}

export const verify = async (secret: string, data: string, signature: string) => {
  return signature === (await sign(secret, data))
}
