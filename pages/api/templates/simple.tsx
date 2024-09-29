/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const config = {
  runtime: 'edge',
}

export default function simpleTemplate(data: { backgroundColor: any; logoUrl: string | StaticImport; textColor: any; title: any; subtitle: any; }) {
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
              {data.logoUrl ? (
                <img
                  src={data.logoUrl.toString()}
                  alt="Logo"
                  width={96}
                  height={96}
                  tw="mb-8"
                  style={{ objectFit: 'contain' }}
                />
              ) : (
                <img
                  src={`${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL || 'http://localhost:3000'}/logo.svg`}
                  alt="Logo"
                  width={200}
                  height={200}
                  tw="mb-8"
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
