import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default function Wonder({ title, author, backgroundImage }: { title: string, author: string, backgroundImage: string }) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {
        backgroundColor: 'rgb(200, 200, 200)', // Solid gray
      };

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          ...backgroundStyle,
        }}
      >
        {/* Semi-transparent overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}
        />
        {/* Gradient border */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            right: '20px',
            bottom: '20px',
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
            borderRadius: '20px',
          }}
        />
        {/* Content container */}
        <div
          style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
            right: '30px',
            bottom: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: '10px',
          }}
        >
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              color: '#333',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            {title}
          </h1>
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '40px',
              fontSize: '24px',
              color: '#333',
            }}
          >
            {author}
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
