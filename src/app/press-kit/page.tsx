import { FileText, Camera, Settings } from "lucide-react";
import FadeIn from '@/components/animations/FadeIn';
import ScrollReveal from '@/components/animations/ScrollReveal';
import HoverScale from '@/components/animations/HoverScale';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

export const metadata = {
  title: "Press Kit - Dorgham | Media Downloads & Press Materials",
  description: "Download Dorgham's press kit. Biography, photos, videos, tech rider, and press materials for media and booking inquiries.",
  keywords: "Dorgham press kit, DJ press kit Egypt, media downloads, biography, photos, tech rider",
};

export default function PressKitPage() {
  return (
    <div className="min-h-screen">
      {/* Press Kit Hero */}
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
              <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center scale-100 origin-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">Press Kit</h1>
            <p className="text-xl lg:text-2xl text-gray-300">Media Downloads & Press Materials</p>
          </div>
        </section>
      </FadeIn>

      {/* Download Section */}
      <ScrollReveal direction="up" delay={0.2}>
        <section className="py-20 bg-red-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scale-100 origin-top">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Download Materials</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              All materials are available for download and use in accordance with our terms of service.
            </p>
          </div>
          
              <StaggerContainer staggerDelay={0.15}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
              <StaggerItem className="h-full">
                <HoverScale scale={1.02} className="h-full">
                  <div className="bg-red-950 rounded-lg shadow-lg p-8 text-center flex flex-col h-full hover:bg-red-900 transition-colors duration-300">
                    <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FileText className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Biography</h3>
                    <p className="text-gray-300 mb-6 flex-grow">Complete artist biography and background information</p>
                    <a href="/downloads/bio-full.md" className="btn-primary w-full" download>
                      Download
                    </a>
                  </div>
                </HoverScale>
              </StaggerItem>
              
              <StaggerItem className="h-full">
                <HoverScale scale={1.02} className="h-full">
                  <div className="bg-red-950 rounded-lg shadow-lg p-8 text-center flex flex-col h-full hover:bg-red-900 transition-colors duration-300">
                    <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Camera className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">High-Resolution Photos</h3>
                    <p className="text-gray-300 mb-6 flex-grow">Professional photos in JPEG format</p>
                    <a href="/downloads/photos.zip" className="btn-primary w-full" download>
                      Download
                    </a>
                  </div>
                </HoverScale>
              </StaggerItem>
              
              <StaggerItem className="h-full">
                <HoverScale scale={1.02} className="h-full">
                  <div className="bg-red-950 rounded-lg shadow-lg p-8 text-center flex flex-col h-full hover:bg-red-900 transition-colors duration-300">
                    <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Settings className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Tech Rider</h3>
                    <p className="text-gray-300 mb-6 flex-grow">Technical requirements for live performances</p>
                    <a href="/downloads/technical-rider.md" className="btn-primary w-full" download>
                      Download
                    </a>
                  </div>
                </HoverScale>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}