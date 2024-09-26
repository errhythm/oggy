import React, { useState, useRef, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';

const ImageGenerator = ({
  title,
  setTitle,
  subtitle,
  setSubtitle,
  backgroundColor,
  setBackgroundColor,
  textColor,
  setTextColor,
  logoUrl,
  setLogoUrl,
  template,
  setTemplate,
  imageUrl,
}) => {
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] = useState(false);
  const [showTextColorPicker, setShowTextColorPicker] = useState(false);
  const backgroundColorPickerRef = useRef(null);
  const textColorPickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (backgroundColorPickerRef.current && !backgroundColorPickerRef.current.contains(event.target)) {
        setShowBackgroundColorPicker(false);
      }
      if (textColorPickerRef.current && !textColorPickerRef.current.contains(event.target)) {
        setShowTextColorPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const resetForm = () => {
    setTitle('');
    setSubtitle('');
    setBackgroundColor('#ffffff');
    setTextColor('#000000');
    setLogoUrl('');
    setTemplate('simple');
  };

  const downloadImage = async () => {
    if (imageUrl) {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `oggy-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2">
        <div className="bg-secondary p-6 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-foreground">Image Settings</h2>
            <button
              onClick={resetForm}
              className="p-1.5 bg-muted text-muted-foreground rounded-full hover:bg-muted/80 transition-colors duration-200"
              aria-label="Reset form"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
            </button>
          </div>
          <div className="space-y-6">
            <div>
              <label htmlFor="template" className="block text-sm font-medium text-foreground mb-2">Template</label>
              <select
                id="template"
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
              >
                <option value="simple">Simple</option>
              </select>
            </div>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
                placeholder="Enter title"
              />
            </div>
            <div>
              <label htmlFor="subtitle" className="block text-sm font-medium text-foreground mb-2">Subtitle</label>
              <input
                type="text"
                id="subtitle"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
                placeholder="Enter subtitle"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label htmlFor="backgroundColor" className="block text-sm font-medium text-foreground mb-2">Background Color</label>
                <div className="relative" ref={backgroundColorPickerRef}>
                  <button
                    onClick={() => setShowBackgroundColorPicker(!showBackgroundColorPicker)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 flex items-center"
                  >
                    <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor }}></div>
                    {backgroundColor}
                  </button>
                  {showBackgroundColorPicker && (
                    <div className="absolute z-10 mt-2">
                      <HexColorPicker color={backgroundColor} onChange={setBackgroundColor} />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <label htmlFor="textColor" className="block text-sm font-medium text-foreground mb-2">Text Color</label>
                <div className="relative" ref={textColorPickerRef}>
                  <button
                    onClick={() => setShowTextColorPicker(!showTextColorPicker)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 flex items-center"
                  >
                    <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: textColor }}></div>
                    {textColor}
                  </button>
                  {showTextColorPicker && (
                    <div className="absolute z-10 mt-2">
                      <HexColorPicker color={textColor} onChange={setTextColor} />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="logoUrl" className="block text-sm font-medium text-foreground mb-2">Logo URL</label>
              <input
                type="text"
                id="logoUrl"
                value={logoUrl}
                onChange={(e) => setLogoUrl(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
                placeholder="Enter logo URL"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="bg-secondary p-6 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-foreground">Preview</h2>
            {imageUrl && (
              <button
                onClick={downloadImage}
                className="p-1.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-200"
                aria-label="Download image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            )}
          </div>
          {imageUrl ? (
            <img src={imageUrl} alt="Generated OpenGraph Image" className="w-full rounded-lg shadow-md" />
          ) : (
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
              Image preview will appear here
            </div>
          )}
          {imageUrl && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">API Link:</h3>
              <div className="relative">
              <div
  onClick={() => copyToClipboard(`${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL || 'http://localhost:3000'}/api/generate?${imageUrl.split('?')[1]}`)}
                  className="bg-muted p-4 rounded-lg overflow-x-auto cursor-pointer hover:bg-muted/80 transition-colors duration-200 group"
                >
                  <code className="text-sm text-muted-foreground break-all">
                    {`${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL || 'http://localhost:3000'}/api/generate?${imageUrl.split('?')[1]}`}
                  </code>
                  <span className="absolute invisible group-hover:visible bg-foreground text-background text-xs py-1 px-2 rounded shadow-lg -top-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-200">
                    Click to copy
                  </span>
                </div>
                {copied && (
                  <span className="absolute bg-green-500 text-white text-xs py-1 px-2 rounded shadow-lg -top-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-200">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
