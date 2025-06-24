'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsAboutDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.jpg"
                  alt="Essungue Ejuma Foundation Logo"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-gray-900">Oracles Nursery & Primary School</div>
                <div className="text-sm text-gray-600">Essungue Ejuma Foundation</div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                isActive('/')
                  ? 'text-primary bg-accent'
                  : 'text-gray-700 hover:text-primary hover:bg-accent'
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative" ref={aboutDropdownRef}>
              <button 
                onClick={toggleAboutDropdown}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center rounded-md ${
                  isActive('/school') || isActive('/foundation') || isAboutDropdownOpen
                    ? 'text-primary bg-accent'
                    : 'text-gray-700 hover:text-primary hover:bg-accent'
                }`}
              >
                About
                <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-200 z-50">
                  <Link
                    href="/school"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-accent hover:text-primary transition-colors duration-200"
                    onClick={() => setIsAboutDropdownOpen(false)}
                  >
                    Our School
                  </Link>
                  <Link
                    href="/foundation"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-accent hover:text-primary transition-colors duration-200"
                    onClick={() => setIsAboutDropdownOpen(false)}
                  >
                    The Foundation
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button 
                onClick={toggleServicesDropdown}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center rounded-md ${
                  isActive('/admissions') || isActive('/events') || isActive('/gallery') || isServicesDropdownOpen
                    ? 'text-primary bg-accent'
                    : 'text-gray-700 hover:text-primary hover:bg-accent'
                }`}
              >
                Programs
                <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-200 z-50">
                  <Link
                    href="/admissions"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-accent hover:text-primary transition-colors duration-200"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    Admissions
                  </Link>
                  <Link
                    href="/events"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-accent hover:text-primary transition-colors duration-200"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    Activities & Events
                  </Link>
                  <Link
                    href="/gallery"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-accent hover:text-primary transition-colors duration-200"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    Gallery
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                isActive('/contact')
                  ? 'text-primary bg-accent'
                  : 'text-gray-700 hover:text-primary hover:bg-accent'
              }`}
            >
              Contact
            </Link>

            <Link
              href="/enroll"
              className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors duration-200 shadow-md"
            >
              Enroll Now
            </Link>

            <Link
              href="/donate"
              className="border-2 border-primary text-primary px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t border-gray-200">
            <Link
              href="/"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                isActive('/')
                  ? 'text-primary bg-accent'
                  : 'text-gray-700 hover:text-primary hover:bg-accent'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/school"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                isActive('/school')
                  ? 'text-primary bg-accent'
                  : 'text-gray-700 hover:text-primary hover:bg-accent'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our School
            </Link>
            <Link
              href="/foundation"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                isActive('/foundation')
                  ? 'text-primary bg-accent'
                  : 'text-gray-700 hover:text-primary hover:bg-accent'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              The Foundation
            </Link>
            <Link
              href="/admissions"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                isActive('/admissions')
                  ? 'text-primary bg-accent'
                  : 'text-gray-700 hover:text-primary hover:bg-accent'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Admissions
            </Link>
            <Link
              href="/events"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                isActive('/events')
                  ? 'text-primary bg-accent'
                  : 'text-gray-700 hover:text-primary hover:bg-accent'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Activities & Events
            </Link>
            <Link
              href="/gallery"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                isActive('/gallery')
                  ? 'text-primary bg-accent'
                  : 'text-gray-700 hover:text-primary hover:bg-accent'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                isActive('/contact')
                  ? 'text-primary bg-accent'
                  : 'text-gray-700 hover:text-primary hover:bg-accent'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="/enroll"
                className="block bg-primary text-white px-3 py-2 rounded-lg text-base font-medium hover:bg-primary-dark transition-colors duration-200 mb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Enroll Now
              </Link>
              <Link
                href="/donate"
                className="block border-2 border-primary text-primary px-3 py-2 rounded-lg text-base font-medium hover:bg-primary hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 
