import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { Music, MapPin, Calendar, Award } from "lucide-react";

export default function Bio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Bio Hero Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Biography</h1>
          <p className="text-xl lg:text-2xl text-gray-300">The Story of Dorgham</p>
        </div>
      </section>

      {/* Main Biography Content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Bio Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
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
              <div className="mt-12">
                <Link href="/book" className="bg-red-600 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-red-700 hover:shadow-lg inline-block">
                  Book Dorgham for Your Event
                </Link>
              </div>
            </div>
            
            {/* Sidebar Information */}
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-red-400 mr-3" />
                    <div>
                      <h4 className="font-semibold text-white">Years Active</h4>
                      <p className="text-gray-300 text-sm">2020 - Present</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Music className="w-4 h-4 text-red-400 mr-3" />
                    <div>
                      <h4 className="font-semibold text-white">Genres</h4>
                      <p className="text-gray-300 text-sm">Melodic Techno, Indie Dance</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-red-400 mr-3" />
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-gray-300 text-sm">Hurghada, Egypt</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 text-red-400 mr-3" />
                    <div>
                      <h4 className="font-semibold text-white">Professional Role</h4>
                      <p className="text-gray-300 text-sm">DJ/Producer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Musical Journey */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-400 mb-6">Musical Journey</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-red-400 pl-4">
                    <h4 className="font-semibold text-white">2020</h4>
                    <p className="text-gray-300 text-sm">Started music production during COVID-19 pandemic</p>
                  </div>
                  <div className="border-l-2 border-gray-600 pl-4">
                    <h4 className="font-semibold text-white">2021-2023</h4>
                    <p className="text-gray-300 text-sm">Developed signature melodic techno sound</p>
                  </div>
                  <div className="border-l-2 border-gray-600 pl-4">
                    <h4 className="font-semibold text-white">2024</h4>
                    <p className="text-gray-300 text-sm">Active performer and producer</p>
                  </div>
                </div>
              </div>

              {/* Influences */}
              <div className="bg-gray-800 rounded-lg p-6">
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
      <section className="py-20 bg-gray-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Connect With Dorgham
          </h2>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}