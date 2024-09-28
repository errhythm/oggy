import React, { useState, useRef, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import templates from '../../config/templates';

const ImageGenerator = ({ fields = {}, setFields, imageUrl }) => {
  const [activeColorPicker, setActiveColorPicker] = useState(null);
  const colorPickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
        setActiveColorPicker(null);
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

  const defaultTemplate = Object.keys(templates)[0] || '';
  const defaultFields = templates[defaultTemplate]?.fields.reduce((acc, field) => {
    acc[field.name] = field.default || '';
    return acc;
  }, {}) || {};

  const resetForm = () => {
    setFields({ ...defaultFields, template: defaultTemplate });
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

  const handleFieldChange = (name: string, value: string) => {
    if (name === 'template') {
      const newTemplate = templates[value];
      const newFields = newTemplate.fields.reduce((acc, field) => {
        acc[field.name] = field.default || '';
        return acc;
      }, {});
      setFields({ ...newFields, template: value });
    } else {
      setFields(prevFields => ({ ...prevFields, [name]: value }));
    }
  };

  const toggleColorPicker = (fieldName) => {
    setActiveColorPicker(activeColorPicker === fieldName ? null : fieldName);
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
            {Object.keys(templates).length > 0 && (
              <div>
                <label htmlFor="template" className="block text-sm font-medium text-foreground mb-2">Template</label>
                <select
                  id="template"
                  value={(fields as { template?: string }).template || defaultTemplate}
                  onChange={(e) => handleFieldChange('template', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
                >
                  {Object.entries(templates).map(([key, value]) => (
                    <option key={key} value={key}>{value.name}</option>
                  ))}
                </select>
              </div>
            )}
            {templates[(fields as { template?: string }).template || defaultTemplate]?.fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block text-sm font-medium text-foreground mb-2">{field.label}</label>
                {field.type === 'color' ? (
                  <div className="relative" ref={colorPickerRef}>
                    <button
                      onClick={() => toggleColorPicker(field.name)}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 flex items-center"
                    >
                      <div
                        className="w-6 h-6 rounded-full mr-2 border border-gray-300"
                        style={{
                          backgroundColor: (fields[field.name] || field.default) as string,
                          boxShadow: `0 0 0 1px ${fields[field.name] || field.default}`
                        }}
                      ></div>
                      {fields[field.name] || field.default}
                    </button>
                    {activeColorPicker === field.name && (
                      <div className="absolute z-10 mt-2">
                        <HexColorPicker
                          color={fields[field.name] || field.default}
                          onChange={(color) => handleFieldChange(field.name, color)}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    value={fields[field.name]}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                  />
                )}
              </div>
            ))}
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
                  {!copied && (
                    <span className="absolute invisible group-hover:visible bg-foreground text-background text-xs py-1 px-2 rounded shadow-lg -top-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-200">
                      Click to copy
                    </span>
                  )}
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
