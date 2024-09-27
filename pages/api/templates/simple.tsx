import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default function simpleTemplate(data) {
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
          backgroundColor: data.backgroundColor || 'white',
        }}
      >
        <div tw="flex w-full h-full items-center justify-center">
          <div tw="flex flex-col items-center justify-center max-w-4xl text-center px-8">
            {data.logoUrl && (
              <img
                src={data.logoUrl}
                alt="Logo"
                tw="w-24 h-24 mb-8"
                style={{ objectFit: 'contain' }}
              />
            )}
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: data.textColor || '#000000',
                lineHeight: '1.2',
                marginBottom: '0.5em',
              }}
            >
              {data.title || 'Welcome'}
            </h1>
            <p
              style={{
                fontSize: '24px',
                fontWeight: 'normal',
                color: data.textColor || '#000000',
                opacity: 0.8,
              }}
            >
              {data.subtitle || 'Oggy welcomes you.'}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
