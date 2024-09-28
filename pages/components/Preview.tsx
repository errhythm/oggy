import React from 'react';
import Image from 'next/image';

const Preview = ({ imageUrl }) => {
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Preview</h2>
      {imageUrl ? (
        <Image src={imageUrl} alt="Generated OpenGraph Image" width={1200} height={630} className="w-full rounded-md" />
      ) : (
        <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
          Image preview will appear here
        </div>
      )}
      {imageUrl && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">API Link:</h3>
          <code className="block bg-gray-100 p-2 rounded-md text-sm break-all">
            {`${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL || 'http://localhost:3000'}${imageUrl}`}
          </code>
        </div>
      )}
    </div>
  );
};

export default Preview;
