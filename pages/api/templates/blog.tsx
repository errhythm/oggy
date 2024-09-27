import { ImageResponse } from '@vercel/og'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react'

export default function blogTemplate(data: { backgroundColor: any; logoUrl: string; title: any; subtitle: any; brandName: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode>; brandLogo: string }) {
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
          backgroundColor: data.backgroundColor || '#FF7B92',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          height: '90%',
          padding: '40px',
        }}>
          {data.logoUrl && (
            <img
              src={data.logoUrl}
              alt="Logo"
              style={{
                width: '60px',
                height: '60px',
                marginBottom: '20px',
              }}
            />
          )}
          <div style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px',
            maxWidth: '80%',
          }}>
            {data.title || 'Programmatic SEO for SaaS'}
          </div>
          <div style={{
            fontSize: '24px',
            color: 'white',
            textAlign: 'center',
            maxWidth: '70%',
          }}>
            {data.subtitle || 'Learn how to get indexed on Google with easy coding hacks.'}
          </div>
          {data.brandName && (
            <div style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '10px 20px',
              borderRadius: '9999px',
            }}>
              {data.brandLogo && (
                <img
                  src={data.brandLogo}
                  alt="Brand Logo"
                  style={{
                    width: '24px',
                    height: '24px',
                    marginRight: '10px',
                  }}
                />
              )}
              <span style={{
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
              }}>
                {data.brandName}
              </span>
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
