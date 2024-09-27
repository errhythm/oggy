import React from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImageGenerator from './components/ImageGenerator';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  const [imageUrl, setImageUrl] = React.useState('');
  const [fields, setFields] = React.useState({
    title: '',
    subtitle: '',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    logoUrl: '',
    template: 'simple',
    gradientStart: '#ff0000',
    gradientEnd: '#0000ff',
  });

  React.useEffect(() => {
    const generateImage = async () => {
      const params = new URLSearchParams(fields);
      const url = `/api/generate?${params.toString()}`;
      setImageUrl(url);
    };

    const timeoutId = setTimeout(generateImage, 1000);
    return () => clearTimeout(timeoutId);
  }, [fields]);

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Oggy Image - AI OG Image Generator</title>
        <meta name="description" content="Create stunning OG images for your website with our AI OG Image Generator." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HeroSection />

      <section className="py-12 bg-background" id="generate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-8">Generate Your Image</h2>
          <ImageGenerator
            fields={fields}
            setFields={setFields}
            imageUrl={imageUrl}
          />
        </div>
      </section>

      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
