import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
        >
          Create Stunning OG Images for Your Website
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl mb-8 text-foreground"
        >
          Powerful tools to create beautiful OG images in seconds.
        </motion.p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center">
          <div className="rounded-md shadow mb-3 sm:mb-0 sm:mr-3">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10">
              Get started
            </a>
          </div>
          <div>
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-secondary/80 md:py-4 md:text-lg md:px-10">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
