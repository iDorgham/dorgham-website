'use client';

import { useState } from 'react';
import Link from "next/link";
import { Calendar, Home as HomeIcon, User, Music2, FileText } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import HoverScale from '@/components/animations/HoverScale';

export default function HomeNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <FadeIn direction="down" duration={0.8}>
      <nav className="bg-transparent sticky top-0 z-50 border-b border-red-600 shadow-lg backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start md:justify-between items-center h-16">
            {/* Logo - Hidden on mobile */}
            <HoverScale scale={1.05}>
              <Link href="/" className="flex-shrink-0 hidden md:block">
                <span className="text-2xl font-bold text-white">
                  Dorgham
                </span>
              </Link>
            </HoverScale>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <HoverScale scale={1.05}>
                  <Link href="/bio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                    Bio
                  </Link>
                </HoverScale>
                <HoverScale scale={1.05}>
                  <Link href="/music" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                    Music
                  </Link>
                </HoverScale>
                <HoverScale scale={1.05}>
                  <Link href="/press-kit" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                    Press Kit
                  </Link>
                </HoverScale>
                <HoverScale scale={1.05}>
                  <Link href="/book" className="bg-red-600 text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-red-700 hover:shadow-lg flex items-center justify-center gap-2">
                    Book a Gig
                    <Calendar className="w-4 h-4" strokeWidth={2} />
                  </Link>
                </HoverScale>
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

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-transparent border-t border-red-600">
                <HoverScale scale={1.02}>
                  <Link 
                    href="/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-red-600 bg-red-900/20 transition-colors duration-200 flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <HomeIcon className="w-4 h-4" strokeWidth={2} />
                    Home
                  </Link>
                </HoverScale>
                <HoverScale scale={1.02}>
                  <Link 
                    href="/bio" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-red-900/20 transition-colors duration-200 flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-4 h-4" strokeWidth={2} />
                    Biography
                  </Link>
                </HoverScale>
                <HoverScale scale={1.02}>
                  <Link 
                    href="/music" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-red-900/20 transition-colors duration-200 flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Music2 className="w-4 h-4" strokeWidth={2} />
                    Music
                  </Link>
                </HoverScale>
                <HoverScale scale={1.02}>
                  <Link 
                    href="/press-kit" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-red-900/20 transition-colors duration-200 flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FileText className="w-4 h-4" strokeWidth={2} />
                    Press Kit
                  </Link>
                </HoverScale>
                <HoverScale scale={1.02}>
                  <Link 
                    href="/book" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-center bg-red-600 text-white hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book a Gig
                    <Calendar className="w-4 h-4" strokeWidth={2} />
                  </Link>
                </HoverScale>
              </div>
            </div>
          )}
        </div>
      </nav>
    </FadeIn>
  );
}

