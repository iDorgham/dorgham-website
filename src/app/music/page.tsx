import Link from "next/link";
import SoundCloudEmbed from "@/components/SoundCloudEmbed";
import { soundcloudTracks } from "@/config/soundcloud";
import FadeIn from '@/components/animations/FadeIn';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import HoverScale from '@/components/animations/HoverScale';
import LazyWrapper from '@/components/animations/LazyWrapper';

export const metadata = {
  title: "Music Portfolio - Dorgham | Melodic Techno & Indie Dance",
  description: "Explore Dorgham's music portfolio. Melodic techno and indie dance productions from Egypt. Listen to tracks, mixes, and live performances.",
  keywords: "Dorgham music, melodic techno Egypt, Egyptian electronic music, indie dance, DJ mixes",
};

export default function MusicPage() {
  return (
    <div className="min-h-screen">
      {/* Music Hero Section */}
      <FadeIn direction="up" duration={0.8}>
        <section className="relative py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/images/generated/hero-desktop.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
              aria-hidden="true"
            />
            {/* Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center scale-[0.8] origin-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">Music Portfolio</h1>
            <p className="text-xl lg:text-2xl text-gray-300">Melodic Techno & Indie Dance Productions</p>
          </div>
        </section>
      </FadeIn>

      {/* SoundCloud Mixes */}
      <ScrollReveal direction="up" delay={0.2}>
        <section className="py-20 bg-black/95">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 scale-[0.8] origin-top">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Latest Mixes</h2>
            <StaggerContainer staggerDelay={0.15}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {soundcloudTracks.map((track, index) => (
                  <StaggerItem key={track.id}>
                    <HoverScale scale={1.02}>
                      <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-white mb-4">{track.title}</h3>
                        <div className="aspect-square">
                          <LazyWrapper>
                            <SoundCloudEmbed track={track} className="w-full h-full" />
                          </LazyWrapper>
                        </div>
                      </div>
                    </HoverScale>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* Call to Action */}
      <ScrollReveal direction="up" delay={0.4}>
        <section className="py-20 bg-black/95 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center scale-[0.8] origin-center">
            <h2 className="text-4xl font-bold mb-6">Book Dorgham for Your Event</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Ready to bring melodic techno and indie dance to your venue?
            </p>
            <HoverScale scale={1.05}>
              <Link href="/book" className="btn-secondary">
                Book a Gig
              </Link>
            </HoverScale>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}