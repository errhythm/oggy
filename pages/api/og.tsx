import { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

const imageSizes = {
  default: { width: 1200, height: 630 },
}

// Simple in-memory cache
const cache = new Map()

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)


    const title = searchParams.get('title') || 'Default Title'
    const subtitle = searchParams.get('subtitle') || ''
    const backgroundColor = searchParams.get('backgroundColor') || '#ffffff'
    const textColor = searchParams.get('textColor') || '#000000'
    const fontSize = parseInt(searchParams.get('fontSize') || '60')
    const fontWeight = parseInt(searchParams.get('fontWeight') || '700')
    const logoUrl = searchParams.get('logoUrl') || ''
    const imageSize = 'default'

    const { width, height } = imageSizes[imageSize as keyof typeof imageSizes]

    // Create a unique cache key based on the request parameters
    const cacheKey = `${title}-${subtitle}-${backgroundColor}-${textColor}-${fontSize}-${fontWeight}-${logoUrl}-${imageSize}`

    // Check if the response is already in the cache
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)
    }

    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            backgroundColor,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          {logoUrl && (
            <img
              src={logoUrl}
              alt="Logo"
              style={{
                width: '20%',
                marginBottom: '2rem',
              }}
            />
          )}
          <div
            style={{
              fontSize,
              fontWeight,
              color: textColor,
              textAlign: 'center',
              padding: '0 2rem',
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: fontSize * 0.6,
                fontWeight: fontWeight > 400 ? fontWeight - 300 : fontWeight,
                color: textColor,
                textAlign: 'center',
                padding: '1rem 2rem 0',
              }}
            >
              {subtitle}
            </div>
          )}
        </div>
      ),
      {
        width,
        height,
      }
    )

    // Store the response in the cache
    cache.set(cacheKey, imageResponse)

    return imageResponse
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
