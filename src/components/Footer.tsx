'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSoundcloud, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-600">Dorgham</h3>
            <p className="text-gray-300">Art Director & DJ/Producer</p>
            <p className="text-gray-300">Based in Hurghada, Egypt</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/music" 
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link 
                  href="/press-kit" 
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  Press Kit
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/book" 
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  Book
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-of-service" 
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/cookie-policy" 
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dorgham.music/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-red transition-colors duration-200"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </a>
              <a
                href="https://soundcloud.com/idorgham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-red transition-colors duration-200"
                aria-label="SoundCloud"
              >
                <FontAwesomeIcon icon={faSoundcloud} className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/iDorgham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-red transition-colors duration-200"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
              </a>
            </div>
            <div className="text-gray-300">
              <p>Email: hello@dorgham.me</p>
              <p>Location: Hurghada, Egypt</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} Dorgham. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              by{' '}
              <a 
                href="https://www.mediabubble.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors duration-200"
              >
                MediaBubble Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
