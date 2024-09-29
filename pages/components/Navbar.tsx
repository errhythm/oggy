import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false); // Close the menu
    router.push(path); // Navigate to the selected path
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Generate', path: '#generate' },
    { name: 'Pricing', path: '#pricing' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-4 right-4 z-50 bg-background/80 backdrop-blur-md rounded-full shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
            <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Oggy Image" width={100} height={100} />
            </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-foreground hover:text-primary">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:bg-background/80 md:backdrop-blur-md bg-background"
          >
            <div className="flex flex-col items-center justify-center h-full">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  className="text-foreground hover:text-primary py-4 text-2xl font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
