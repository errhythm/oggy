import React from 'react';

const ImageSettings = ({
  title,
  setTitle,
  subtitle,
  setSubtitle,
  backgroundColor,
  setBackgroundColor,
  textColor,
  setTextColor,
  fontSize,
  setFontSize,
  fontWeight,
  setFontWeight,
  logoUrl,
  setLogoUrl,
  template,
  setTemplate,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Image Settings</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="template" className="block text-sm font-medium text-gray-700">Template</label>
          <select
            id="template"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="simple">Simple</option>
          </select>
        </div>
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
      </div>
    </div>
  );
};

export default ImageSettings;
