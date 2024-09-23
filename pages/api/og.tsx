import { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'
import simpleTemplate from './templates/simple'

export const config = {
  runtime: 'edge',
}

const templates = {
  simple: simpleTemplate,
}

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const template = searchParams.get('template') || 'emoji'

    if (!templates[template]) {
      return new Response(`Template ${template} not found`, { status: 404 })
    }

    return templates[template](req)
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
