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
  const [title, setTitle] = React.useState('');
  const [subtitle, setSubtitle] = React.useState('');
  const [backgroundColor, setBackgroundColor] = React.useState('#ffffff');
  const [textColor, setTextColor] = React.useState('#000000');
  const [logoUrl, setLogoUrl] = React.useState('');
  const [template, setTemplate] = React.useState('simple');

  React.useEffect(() => {
    const generateImage = async () => {
      const params = new URLSearchParams();
      if (title) params.append('title', title);
      if (subtitle) params.append('subtitle', subtitle);
      if (backgroundColor) params.append('backgroundColor', backgroundColor);
      if (textColor) params.append('textColor', textColor);
      if (logoUrl) params.append('logoUrl', logoUrl);
      if (template) params.append('template', template);

      const url = `/api/generate?${params.toString()}`;
      setImageUrl(url);
    };

    const timeoutId = setTimeout(generateImage, 1000);
    return () => clearTimeout(timeoutId);
  }, [title, subtitle, backgroundColor, textColor, logoUrl, template]);

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
            title={title}
            setTitle={setTitle}
            subtitle={subtitle}
            setSubtitle={setSubtitle}
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
            textColor={textColor}
            setTextColor={setTextColor}
            logoUrl={logoUrl}
            setLogoUrl={setLogoUrl}
            template={template}
            setTemplate={setTemplate}
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
