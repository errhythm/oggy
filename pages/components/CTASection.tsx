import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary"></div>
      {/* <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10"></div> */}
      <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-primary-foreground"
        >
          Ready to Revolutionize Your Image Creation?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 text-primary-foreground/90"
        >
          Join thousands of creators and start generating stunning visuals today.
        </motion.p>
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-background text-primary font-bold text-lg px-10 py-4 rounded-full hover:bg-background/90 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Get Started for Free
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
