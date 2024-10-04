// This SSG page generates the token to prevent generating OG images with random
// parameters (`id`).
// Check pages/api/encrypted.tsx for more info.

import { createHmac } from 'node:crypto'

export async function getStaticProps({ params }) {
  const hmac = createHmac('sha256', 'rhythm')
  hmac.update(JSON.stringify({ title: params.title, tag: params.tag, date: params.date }))
  const token = hmac.digest('hex')

  return {
    props: {
      id: params.id,
      title: params.title,
      tag: params.tag,
      date: params.date,
      token,
    },
  }
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'a', title: 'rhythm', tag: 'rhy', date:'2024-10-03' } },
      { params: { id: 'b' } },
      { params: { id: 'c' } },
    ],
    fallback: false,
  }
}

export default function Page({ id, title, tag, date, token }) {
  return (
    <div>
      <h1>Encrypted Open Graph Image.</h1>
      <p>Only /a, /b, /c with correct tokens are accessible:</p>
      <a href={`/api/rhythm?id=${id}&title=${title}&tag=${tag}&date=${date}&token=${token}`} target="_blank" rel="noreferrer">
        <code>
          /api/rhythm?id={id}&title={title}&tag={tag}&date={date}&token={token}
        </code>
      </a>
    </div>
  )
}
