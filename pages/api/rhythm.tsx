import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

const font = fetch(new URL('../../assets/Calistoga-Regular.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer()
)

const font2 = fetch(new URL('../../assets/OpenSauceOne-Bold.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer()
)

const key = crypto.subtle.importKey(
  'raw',
  new TextEncoder().encode('rhythm'),
  { name: 'HMAC', hash: { name: 'SHA-256' } },
  false,
  ['sign']
)

function toHex(arrayBuffer) {
  return Array.prototype.map
    .call(new Uint8Array(arrayBuffer), (n) => n.toString(16).padStart(2, '0'))
    .join('')
}

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl

  const title = searchParams.get('title')
  const tag = searchParams.get('tag')
  const date = searchParams.get('date')
  const token = searchParams.get('token')

  const verifyToken = toHex(
    await crypto.subtle.sign(
      'HMAC',
      await key,
      new TextEncoder().encode(JSON.stringify({ title, tag, date }))
    )
  )

  if (token !== verifyToken) {
    return new Response('Stop being naughty.', { status: 401 })
  }

  const randomImages = () => {
    const images = [
      { url: `https://oggy.rhystart.com/backgrounds/1.jpg`, color: '#231942' },
      { url: `https://oggy.rhystart.com/backgrounds/2.jpg`, color: '#AE86F7' },
      { url: `https://oggy.rhystart.com/backgrounds/3.jpg`, color: '#2773A5' },
      { url: `https://oggy.rhystart.com/backgrounds/4.jpg`, color: '#59BA8A' },
      { url: `https://oggy.rhystart.com/backgrounds/5.jpg`, color: '#DA4167' },
    ]
    const selectedImage = images[Math.floor(Math.random() * images.length)]
    return { url: selectedImage.url, tagColor: selectedImage.color }
  }

  const { url, tagColor } = randomImages();

  return new ImageResponse(
    (
      <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '40px 0',
      }}
      >
        <p tw="uppercase"
          style={{
            fontFamily: 'OpenSauceOne',
            fontWeight: 'bold',
            fontSize: '14px',
            color: '#015b69'
            }}>
          ERRhythm.me
          </p>
        <div tw="flex w-full items-center justify-center flex-grow">
          <div tw="flex flex-col items-center justify-center max-w-xl text-center px-8">
            <div tw="flex flex-wrap justify-center gap-3 mt-4">
              <div tw="flex px-4 py-1 bg-opacity-80 text-white text-xs font-medium rounded" style={{ backgroundColor: tagColor }}>#{tag}</div>
            </div>
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#015b69',
                lineHeight: '1.2',
                marginBottom: '0.5em',
                fontFamily: 'Calistoga',
              }}
            >
              {title}
            </h1>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            fontSize: '18.4px',
            fontWeight: 'normal',
            color: '#015b69',
            opacity: 0.8,
            fontFamily: 'OpenSauceOne',
            padding: '0 40px',
          }}
        >
          <p>Ehsanur Rahman</p>
          <p>{new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Calistoga',
          data: await font,
          style: 'normal',
        },
        {
          name: 'OpenSauceOne',
          data: await font2,
          style: 'normal',
        },
      ],
    }
  )
}
