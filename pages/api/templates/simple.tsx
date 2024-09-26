import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  // Get the query parameters
  const title = searchParams.get('title') || 'Welcome'
  const subtitle = searchParams.get('subtitle') || 'Oggy welcomes you.'
  const backgroundColor = searchParams.get('backgroundColor') || 'white'
  const textColor = searchParams.get('textColor') || '#000000'
  const logoUrl = searchParams.get('logoUrl') || ''

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor,
        }}
      >
        <div tw="flex w-full h-full items-center justify-center">
          <div tw="flex flex-col items-center justify-center max-w-4xl text-center px-8">
            {logoUrl && (
              <img
                src={logoUrl}
                alt="Logo"
                tw="w-24 h-24 mb-8"
                style={{ objectFit: 'contain' }}
              />
            )}
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: textColor,
                lineHeight: '1.2',
                marginBottom: '0.5em',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: '24px',
                fontWeight: 'normal',
                color: textColor,
                opacity: 0.8,
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
