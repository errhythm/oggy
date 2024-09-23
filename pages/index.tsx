import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Header from './components/header';
import Footer from './components/footer';
import ImageSettings from './components/imageSettings';
import Preview from './components/preview';

export default function Home() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(60);
  const [fontWeight, setFontWeight] = useState(700);
  const [imageUrl, setImageUrl] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [template, setTemplate] = useState('simple');

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const generateImage = async () => {
    const params = new URLSearchParams({
      title,
      subtitle,
      backgroundColor,
      textColor,
      fontSize: fontSize.toString(),
      fontWeight: fontWeight.toString(),
      logoUrl,
      template,
    });
    const url = `/api/og?${params.toString()}`;
    setImageUrl(url);
  };

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      generateImage();
    }, 1000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [title, subtitle, backgroundColor, textColor, fontSize, fontWeight, logoUrl, template]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>OGImage - OpenGraph Image Generator</title>
        <meta name="description" content="Generate custom OpenGraph images for your website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Create stunning OpenGraph images</h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">Generate custom OpenGraph images for your website in seconds. Boost your social media presence with eye-catching previews.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageSettings
            title={title}
            setTitle={setTitle}
            subtitle={subtitle}
            setSubtitle={setSubtitle}
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
            textColor={textColor}
            setTextColor={setTextColor}
            fontSize={fontSize}
            setFontSize={setFontSize}
            fontWeight={fontWeight}
            setFontWeight={setFontWeight}
            logoUrl={logoUrl}
            setLogoUrl={setLogoUrl}
            template={template}
            setTemplate={setTemplate}
          />
          <Preview imageUrl={imageUrl} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
