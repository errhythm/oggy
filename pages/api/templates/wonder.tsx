/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'
import Image from 'next/image';
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default function Wonder(data) {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#0D0F14',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          fontSize: '2rem',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
                tw="absolute bottom-0 left-0 right-0 top-0 w-full flex"
                style={{ backgroundImage: `linear-gradient(to top left, #0D0F14 20%, transparent 50%, rgba(50, 69, 255, 0.3) 80%, rgba(184, 69, 237, 0.3) 100%)` }}
            >
            </div>


        {data.logoUrl ? (
          <img
            src={data.logoUrl}
            alt="Logo"
            width={96}
            height={96}
            tw="absolute top-[10px] left-1/2 transform -translate-x-1/2"
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <img
            src={`${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL || 'http://localhost:3000'}/logo-white.svg`}
            alt="Logo"
            width={200}
            height={200}
            tw="absolute top-[10px] transform -translate-x-1/2"
            style={{ objectFit: 'contain' }}
          />
        )}

          <div style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            textAlign: 'center',
            whiteSpace: 'pre-wrap',
            lineHeight: '1.2',
          }}>
            {data.title ? data.title : 'Create stunning OG images'}
          </div>
          <div style={{
            marginTop: '24px',
            fontSize: '2rem',
            color: '#D1D5DB',
            textAlign: 'center',
            whiteSpace: 'pre-wrap',
          }}>
            {data.subtitle ? data.subtitle : 'Powered by AI, designed for you'}
          </div>

        <p style={{
          position: 'absolute',
          bottom: '0',
          fontSize: '26px',
        }}>
          {data.footer || 'oggy.rhystart.com'}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
