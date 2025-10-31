'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/bio', label: 'Bio' },
    { href: '/music', label: 'Music' },
    { href: '/press-kit', label: 'Press Kit' },
    { href: '/book', label: 'Book a Gig' },
  ];

  const isActive = (href: string) => {
    if (href === '/bio' && pathname === '/bio') return true;
    if (href !== '/bio' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-black/95 shadow-lg sticky top-0 z-50 backdrop-blur-sm border-b border-red-600">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start md:justify-between items-center h-16">
          {/* Logo - Hidden on mobile */}
          <Link href="/" className="flex-shrink-0 hidden md:block">
            <span className="text-2xl font-bold text-red-600">
              Dorgham
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-red-600 bg-red-900/20'
                      : 'text-gray-300 hover:text-red-600 hover:bg-red-900/20'
                  } ${item.label === 'Book a Gig' ? 'btn-primary' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button - Left aligned */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-600 hover:bg-red-900/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-t border-red-600">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                pathname === '/'
                  ? 'text-red-600 bg-red-900/20'
                  : 'text-gray-300 hover:text-red-600 hover:bg-red-900/20'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-red-600 bg-red-900/20'
                    : 'text-gray-300 hover:text-red-600 hover:bg-red-900/20'
                } ${item.label === 'Book a Gig' ? 'btn-primary text-center' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.href === '/bio' ? 'Biography' : item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
