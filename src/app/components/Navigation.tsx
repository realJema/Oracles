'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2
    }
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2
    }
  }
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Oracles Nursery & Primary School Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-3">
                <div className={`font-semibold text-xl ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Oracles Nursery & Primary School
                </div>
                <div className={`text-sm ${
                  isScrolled ? 'text-gray-600' : 'text-white/75'
                }`}>
                  Essungue Ejuma Foundation
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" ref={dropdownRef}>
            {/* About Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleDropdown('about')}
                className={`flex items-center space-x-1 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                <span>About</span>
                <motion.svg
                  animate={{ rotate: activeDropdown === 'about' ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2"
                  >
                    <Link href="/school" className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                      Our School
                    </Link>
                    <Link href="/foundation" className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                      The Foundation
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Programs Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleDropdown('programs')}
                className={`flex items-center space-x-1 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                <span>Programs</span>
                <motion.svg
                  animate={{ rotate: activeDropdown === 'programs' ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
              <AnimatePresence>
                {activeDropdown === 'programs' && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2"
                  >
                    <Link href="/admissions" className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                      Admissions
                    </Link>
                    <Link href="/events" className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                      Activities & Events
                    </Link>
                    <Link href="/gallery" className="block px-4 py-2 text-gray-800 hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                      Gallery
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className={`${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Contact
              </Link>
            </motion.div>

            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/enroll"
                  className="bg-accent text-primary px-6 py-2 rounded-lg font-semibold hover:bg-white transition-all duration-200 shadow-lg"
                >
                  Enroll Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/donate"
                  className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-200 shadow-lg"
                >
                  Donate
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/school"
                  className="block px-3 py-2 text-gray-900 hover:bg-primary/10 hover:text-primary rounded-lg"
                >
                  Our School
                </Link>
                <Link
                  href="/foundation"
                  className="block px-3 py-2 text-gray-900 hover:bg-primary/10 hover:text-primary rounded-lg"
                >
                  The Foundation
                </Link>
                <Link
                  href="/admissions"
                  className="block px-3 py-2 text-gray-900 hover:bg-primary/10 hover:text-primary rounded-lg"
                >
                  Admissions
                </Link>
                <Link
                  href="/events"
                  className="block px-3 py-2 text-gray-900 hover:bg-primary/10 hover:text-primary rounded-lg"
                >
                  Activities & Events
                </Link>
                <Link
                  href="/gallery"
                  className="block px-3 py-2 text-gray-900 hover:bg-primary/10 hover:text-primary rounded-lg"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-gray-900 hover:bg-primary/10 hover:text-primary rounded-lg"
                >
                  Contact
                </Link>
                <Link
                  href="/enroll"
                  className="block px-3 py-2 bg-accent text-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
                >
                  Enroll Now
                </Link>
                <Link
                  href="/donate"
                  className="block px-3 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
                >
                  Donate
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;
