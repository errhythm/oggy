import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 mt-4 bg-white shadow-lg rounded-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" aria-label="home" className="flex items-center">
          <Image src="https://cdn.prod.website-files.com/634e968b219cc43522715fb8/634ea6de39f5e6dc2e59ad9d_Brand%20Logo.svg" alt="Brand Logo" width={32} height={32} className="h-8" />
        </Link>
        <nav className="flex space-x-4">
          <a href="#Product" className="text-gray-700 hover:text-purple-600">Product</a>
          <a href="#Solution" className="text-gray-700 hover:text-purple-600">Why Us</a>
          <a href="#About-us" className="text-gray-700 hover:text-purple-600">Features</a>
          <a href="#Download" className="text-gray-700 hover:text-purple-600">Download</a>
        </nav>
        <div className="flex space-x-2">
          <a href="#Pricing" className="bg-transparent border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">LOG IN</a>
          <a href="https://webflow.com/templates/html/berlin-saas-website-template" target="_blank" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Buy for $24</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
