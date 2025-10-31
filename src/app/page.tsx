import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSoundcloud, faFacebook } from '@fortawesome/free-brands-svg-icons';
import FadeIn from '@/components/animations/FadeIn';
import ScrollReveal from '@/components/animations/ScrollReveal';
import HoverScale from '@/components/animations/HoverScale';
import HeroBackground from '@/components/HeroBackground';
import HomeNavigation from '@/components/HomeNavigation';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 overflow-hidden">
      {/* Top Navigation */}
      <HomeNavigation />

      {/* Fullscreen Hero Section */}
      <section className="flex-1 flex items-end md:items-center relative">
        {/* Background Image */}
        <HeroBackground />
        
        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 md:pb-0">
          <div className="max-w-4xl scale-75 md:scale-90 lg:scale-100 origin-bottom-left md:origin-top-left">
            {/* Logo/Name */}
            <FadeIn delay={0.2} duration={0.8}>
              <div className="mb-4 md:mb-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 md:mb-3">
                  Dorgham
                </h1>
                <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-light text-gray-300">
                  DJ/Producer
                </h2>
              </div>
            </FadeIn>

          {/* Short Bio */}
          <FadeIn delay={0.4} duration={0.8}>
            <div className="mb-4 md:mb-8 max-w-2xl">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Egyptian DJ/Producer specializing in <strong className="text-white">Melodic Techno</strong> and <strong className="text-white">Indie Dance</strong>. 
                Creating immersive electronic experiences that resonate with audiences worldwide.
              </p>
            </div>
          </FadeIn>

          {/* Social Media Links */}
          <FadeIn delay={0.6} duration={0.8}>
            <div className="mb-4 md:mb-8">
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <HoverScale scale={1.1}>
                  <a
                    href="https://www.instagram.com/dorgham.music/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm sm:text-base"
                    aria-label="Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Instagram
                  </a>
                </HoverScale>
                <HoverScale scale={1.1}>
                  <a
                    href="https://soundcloud.com/idorgham"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm sm:text-base"
                    aria-label="SoundCloud"
                  >
                    <FontAwesomeIcon icon={faSoundcloud} className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    SoundCloud
                  </a>
                </HoverScale>
                <HoverScale scale={1.1}>
                  <a
                    href="https://www.facebook.com/iDorgham"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm sm:text-base"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Facebook
                  </a>
                </HoverScale>
              </div>
            </div>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.8} duration={0.8}>
            <div className="mb-0 md:mb-8 flex flex-row gap-2 sm:gap-4">
              <HoverScale scale={1.05}>
                <Link href="/bio" className="bg-transparent text-red-400 border-2 border-red-400 px-3 py-2 sm:px-6 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 hover:bg-red-400 hover:text-white text-center whitespace-nowrap">
                  Read More
                </Link>
              </HoverScale>
              <HoverScale scale={1.05}>
                <Link href="/book" className="bg-red-600 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 hover:bg-red-700 hover:shadow-lg text-center whitespace-nowrap">
                  Book a Gig
                </Link>
              </HoverScale>
            </div>
          </FadeIn>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <ScrollReveal direction="up" delay={0.2}>
        <footer className="py-8 bg-black/95">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Dorgham. All rights reserved.
              </p>
              <div className="text-gray-400 text-sm mt-2 md:mt-0">
                by{' '}
                <HoverScale scale={1.05} as="span">
                  <a 
                    href="https://www.mediabubble.co" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 transition-colors duration-200"
                  >
                    MediaBubble Agency
                  </a>
                </HoverScale>
              </div>
            </div>
          </div>
        </footer>
      </ScrollReveal>
    </div>
  );
}