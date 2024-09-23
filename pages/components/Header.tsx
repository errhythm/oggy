import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="ml-2 text-xl font-bold text-gray-900">OGImage</span>
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
  );
};

export default Header;
