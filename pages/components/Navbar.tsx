import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[75px] h-[35px] sm:w-[100px] sm:h-[47px]" viewBox="0 0 224.87999 104.999996" preserveAspectRatio="xMidYMid meet" version="1.0">
                <g fill="#000000" fill-opacity="1">
                  <g transform="translate(38.775655, 64.57606)"><g><path d="M 6.359375 -3.578125 C 3.015625 -6.554688 1.34375 -10.375 1.34375 -15.03125 C 1.34375 -19.6875 3.082031 -23.507812 6.5625 -26.5 C 10.050781 -29.5 14.359375 -31 19.484375 -31 C 24.535156 -31 28.789062 -29.488281 32.25 -26.46875 C 35.71875 -23.457031 37.453125 -19.640625 37.453125 -15.015625 C 37.453125 -10.398438 35.757812 -6.597656 32.375 -3.609375 C 28.988281 -0.617188 24.691406 0.875 19.484375 0.875 C 14.085938 0.875 9.710938 -0.609375 6.359375 -3.578125 Z M 14.40625 -20.125 C 13.0625 -18.800781 12.390625 -17.101562 12.390625 -15.03125 C 12.390625 -12.957031 13.035156 -11.265625 14.328125 -9.953125 C 15.617188 -8.640625 17.320312 -7.984375 19.4375 -7.984375 C 21.46875 -7.984375 23.140625 -8.644531 24.453125 -9.96875 C 25.765625 -11.300781 26.421875 -12.988281 26.421875 -15.03125 C 26.421875 -17.101562 25.742188 -18.800781 24.390625 -20.125 C 23.035156 -21.457031 21.382812 -22.125 19.4375 -22.125 C 17.4375 -22.125 15.757812 -21.457031 14.40625 -20.125 Z M 14.40625 -20.125 "/></g></g>
                  <g transform="translate(74.633287, 64.57606)"><g><path d="M 2.171875 7.390625 L 10.6875 3.234375 C 12.25 5.816406 14.96875 7.109375 18.84375 7.109375 C 20.644531 7.109375 22.316406 6.53125 23.859375 5.375 C 25.410156 4.21875 26.1875 2.445312 26.1875 0.0625 L 26.1875 -2.171875 C 24.34375 -0.140625 21.050781 0.875 16.3125 0.875 C 11.96875 0.875 8.382812 -0.65625 5.5625 -3.71875 C 2.75 -6.789062 1.34375 -10.554688 1.34375 -15.015625 C 1.34375 -19.484375 2.75 -23.265625 5.5625 -26.359375 C 8.382812 -29.453125 11.96875 -31 16.3125 -31 C 20.1875 -31 23.414062 -29.804688 26 -27.421875 L 26.1875 -27.421875 L 26.1875 -30.109375 L 36.578125 -30.109375 L 36.578125 0.828125 C 36.578125 5.710938 34.953125 9.484375 31.703125 12.140625 C 28.453125 14.804688 24.164062 16.140625 18.84375 16.140625 C 10.226562 16.140625 4.671875 13.222656 2.171875 7.390625 Z M 14.40625 -20.125 C 13.0625 -18.800781 12.390625 -17.101562 12.390625 -15.03125 C 12.390625 -12.957031 13.035156 -11.265625 14.328125 -9.953125 C 15.617188 -8.640625 17.320312 -7.984375 19.4375 -7.984375 C 21.46875 -7.984375 23.140625 -8.644531 24.453125 -9.96875 C 25.765625 -11.300781 26.421875 -12.988281 26.421875 -15.03125 C 26.421875 -17.101562 25.742188 -18.800781 24.390625 -20.125 C 23.035156 -21.457031 21.382812 -22.125 19.4375 -22.125 C 17.4375 -22.125 15.757812 -21.457031 14.40625 -20.125 Z M 14.40625 -20.125 "/></g></g>
                  <g transform="translate(111.782067, 64.57606)"><g><path d="M 2.171875 7.390625 L 10.6875 3.234375 C 12.25 5.816406 14.96875 7.109375 18.84375 7.109375 C 20.644531 7.109375 22.316406 6.53125 23.859375 5.375 C 25.410156 4.21875 26.1875 2.445312 26.1875 0.0625 L 26.1875 -2.171875 C 24.34375 -0.140625 21.050781 0.875 16.3125 0.875 C 11.96875 0.875 8.382812 -0.65625 5.5625 -3.71875 C 2.75 -6.789062 1.34375 -10.554688 1.34375 -15.015625 C 1.34375 -19.484375 2.75 -23.265625 5.5625 -26.359375 C 8.382812 -29.453125 11.96875 -31 16.3125 -31 C 20.1875 -31 23.414062 -29.804688 26 -27.421875 L 26.1875 -27.421875 L 26.1875 -30.109375 L 36.578125 -30.109375 L 36.578125 0.828125 C 36.578125 5.710938 34.953125 9.484375 31.703125 12.140625 C 28.453125 14.804688 24.164062 16.140625 18.84375 16.140625 C 10.226562 16.140625 4.671875 13.222656 2.171875 7.390625 Z M 14.40625 -20.125 C 13.0625 -18.800781 12.390625 -17.101562 12.390625 -15.03125 C 12.390625 -12.957031 13.035156 -11.265625 14.328125 -9.953125 C 15.617188 -8.640625 17.320312 -7.984375 19.4375 -7.984375 C 21.46875 -7.984375 23.140625 -8.644531 24.453125 -9.96875 C 25.765625 -11.300781 26.421875 -12.988281 26.421875 -15.03125 C 26.421875 -17.101562 25.742188 -18.800781 24.390625 -20.125 C 23.035156 -21.457031 21.382812 -22.125 19.4375 -22.125 C 17.4375 -22.125 15.757812 -21.457031 14.40625 -20.125 Z M 14.40625 -20.125 "/></g></g>
                  <g transform="translate(148.93085, 64.57606)"><g><path d="M 26.359375 -30.109375 L 38.328125 -30.109375 L 14.671875 15.265625 L 2.703125 15.265625 L 13.09375 -4.703125 L -1.171875 -30.109375 L 10.796875 -30.109375 L 19.203125 -14.671875 Z M 26.359375 -30.109375 "/></g></g>
                </g>
                <path stroke-linecap="butt" transform="matrix(0.821889, 0, 0, 0.821889, 23.905297, 88.408365)" fill="none" stroke-linejoin="miter" d="M 0.0011601 5.002095 L 84.434135 5.002095 " stroke="#292929" stroke-width="10" stroke-opacity="1" stroke-miterlimit="4"/>
                <path stroke-linecap="butt" transform="matrix(0, 0.821889, -0.821889, 0, 32.119977, 26.39006)" fill="none" stroke-linejoin="miter" d="M 0.000687302 4.998556 L 82.461262 4.998556 " stroke="#292929" stroke-width="10" stroke-opacity="1" stroke-miterlimit="4"/>
                <path stroke-linecap="butt" transform="matrix(-0.821889, 0, 0, -0.821889, 210.788701, 16.591622)" fill="none" stroke-linejoin="miter" d="M -0.000439593 5.002078 L 84.432535 5.002078 " stroke="#292929" stroke-width="10" stroke-opacity="1" stroke-miterlimit="4"/>
                <path stroke-linecap="butt" transform="matrix(0, -0.821889, 0.821889, 0, 202.57483, 78.60993)" fill="none" stroke-linejoin="miter" d="M 0.000675559 4.999172 L 82.46125 4.999172 " stroke="#292929" stroke-width="10" stroke-opacity="1" stroke-miterlimit="4"/>
              </svg>
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
