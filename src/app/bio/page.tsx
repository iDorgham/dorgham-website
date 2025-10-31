import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Bio() {
  return (
    <div className="min-h-screen bg-black/95 text-white">
      {/* Bio Hero Section */}
      <section className="relative py-8 md:py-20 overflow-hidden">
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
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center scale-[0.8] origin-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">Biography</h1>
          <p className="text-xl lg:text-2xl text-gray-300">The Story of Dorgham</p>
        </div>
      </section>

      {/* Main Biography Content */}
      <section className="py-8 md:py-20 bg-black/95">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Bio Content */}
            <div className="lg:col-span-2 space-y-8 text-center md:text-left">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed scale-[0.8] origin-center md:origin-top-left">
                <p>
                  <strong className="text-white">Dorgham</strong> is an Egyptian DJ/Producer specializing in <strong className="text-red-400">Melodic Techno</strong> and <strong className="text-red-400">Indie Dance</strong>. Based in <strong className="text-white">Hurghada, Egypt</strong>, he brings a unique perspective to electronic music production, creating immersive audio experiences that resonate with audiences worldwide.
                </p>
                
                <p>
                  Born in <strong className="text-white">Alexandria, Egypt</strong>, and now based in <strong className="text-white">Hurghada</strong>, Dorgham's musical journey began during the <strong className="text-white">COVID-19 pandemic</strong> as a creative outlet that quickly evolved into a serious pursuit. His approach to music production focuses on creating immersive electronic experiences that resonate with audiences.
                </p>
                
                <p>
                  Dorgham's sound is characterized by <strong className="text-white">emotive melodies</strong>, <strong className="text-white">driving rhythms</strong>, and a deep understanding of musical storytelling. His tracks often explore themes of personal growth, creative expression, and the intersection of technology and human emotion.
                </p>
                
                <p>
                  When not in the studio, Dorgham continues to develop his craft, constantly exploring new sounds and techniques to push the boundaries of electronic music production. His dedication to his art and his unique Egyptian perspective make him a standout figure in the electronic music scene.
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-12 scale-[0.8] origin-center md:origin-top-left">
                <Link href="/book" className="bg-red-600 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-red-700 hover:shadow-lg inline-block">
                  Book Dorgham for Your Event
                </Link>
              </div>
            </div>
            
            {/* Sidebar Information */}
            <div className="space-y-8">
              {/* Influences */}
              <div className="bg-gray-800 rounded-lg p-6 hidden lg:block scale-[0.8] origin-top">
                <h3 className="text-xl font-bold text-red-400 mb-6">Musical Influences</h3>
                <div className="space-y-3">
                  <div className="text-gray-300">
                    <span className="text-white font-semibold">Electronic Music:</span> Melodic Techno, Progressive House
                  </div>
                  <div className="text-gray-300">
                    <span className="text-white font-semibold">Indie Dance:</span> Alternative Electronic, Indie Pop
                  </div>
                  <div className="text-gray-300">
                    <span className="text-white font-semibold">Cultural:</span> Egyptian Music Heritage, Middle Eastern Sounds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-8 md:py-20 bg-black/95">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center scale-[0.8] origin-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Connect With Dorgham
          </h2>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}