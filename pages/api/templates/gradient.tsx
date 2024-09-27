import { ImageResponse } from '@vercel/og'

export default function gradientTemplate(data) {
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
          background: `linear-gradient(45deg, ${data.gradientStart}, ${data.gradientEnd})`,
        }}
      >
        <div tw="flex w-full h-full items-center justify-center">
          <div tw="flex flex-col items-center justify-center max-w-4xl text-center px-8">
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: data.textColor,
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
                color: data.textColor,
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
