import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  const [textColor, setTextColor] = useState('#000000')
  const [fontSize, setFontSize] = useState(60)
  const [fontWeight, setFontWeight] = useState(700)
  const [imageUrl, setImageUrl] = useState('')
  const [logoUrl, setLogoUrl] = useState('')

  const generateImage = async () => {
    const params = new URLSearchParams({
      title,
      subtitle,
      backgroundColor,
      textColor,
      fontSize: fontSize.toString(),
      fontWeight: fontWeight.toString(),
      logoUrl,
    })
    const url = `/api/og?${params.toString()}`
    setImageUrl(url)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>OGImage - OpenGraph Image Generator</title>
        <meta name="description" content="Generate custom OpenGraph images for your website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="ml-2 text-xl font-bold text-gray-900">Oggy</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Docs</a></li>
              <li><a href="#" className="text-indigo-600 hover:text-indigo-800">Sign In</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Create stunning OpenGraph images</h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">Generate custom OpenGraph images for your website in seconds. Boost your social media presence with eye-catching previews.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Image Settings</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter title"
              />
            </div>
            <div>
              <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">Subtitle</label>
              <input
                type="text"
                id="subtitle"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter subtitle"
              />
            </div>
            <div>
              <label htmlFor="backgroundColor" className="block text-sm font-medium text-gray-700">Background Color</label>
              <input
                type="color"
                id="backgroundColor"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm p-1"
              />
            </div>
            <div>
              <label htmlFor="textColor" className="block text-sm font-medium text-gray-700">Text Color</label>
              <input
                type="color"
                id="textColor"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm p-1"
              />
            </div>
            <div>
              <label htmlFor="fontSize" className="block text-sm font-medium text-gray-700">Font Size</label>
              <input
                type="number"
                id="fontSize"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                min="10"
                max="100"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="fontWeight" className="block text-sm font-medium text-gray-700">Font Weight</label>
              <select
                id="fontWeight"
                value={fontWeight}
                onChange={(e) => setFontWeight(parseInt(e.target.value))}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="400">Normal</option>
                <option value="700">Bold</option>
                <option value="900">Extra Bold</option>
              </select>
            </div>
            <div>
              <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700">Logo URL</label>
              <input
                type="text"
                id="logoUrl"
                value={logoUrl}
                onChange={(e) => setLogoUrl(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter logo URL"
              />
            </div>
            <button
              onClick={generateImage}
              className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Generate Image
            </button>
          </div>
        </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Preview</h2>
            {imageUrl ? (
              <img src={imageUrl} alt="Generated OpenGraph Image" className="w-full rounded-md" />
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                Image preview will appear here
              </div>
            )}
            {imageUrl && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">API Link:</h3>
                <code className="block bg-gray-100 p-2 rounded-md text-sm break-all">
                  {`${process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'}${imageUrl}`}
                </code>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">1. Customize Your Image</h3>
              <p className="mt-2 text-base text-gray-500">Choose your title, colors, and font size to create the perfect OpenGraph image for your needs.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">2. Generate Image</h3>
              <p className="mt-2 text-base text-gray-500">Click the generate button to create your custom OpenGraph image instantly.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">3. Use the API Link</h3>
              <p className="mt-2 text-base text-gray-500">Copy the generated API link and use it in your website's metadata for stunning social media previews.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">&copy; 2023 OGImage, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
