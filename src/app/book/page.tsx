'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from '@formspree/react';
import FormSuccess from '@/components/forms/FormSuccess';
import FormError from '@/components/forms/FormError';
import FormLoading from '@/components/forms/FormLoading';
import { getFormId } from '@/config/formspree';
import FadeIn from '@/components/animations/FadeIn';
import ScrollReveal from '@/components/animations/ScrollReveal';
import HoverScale from '@/components/animations/HoverScale';

export default function BookPage() {
  // Formspree hook for the booking form
  const [bookingState, bookingSubmit] = useForm(getFormId('MUSIC_BOOKING'));

  const [formData, setFormData] = useState({
    serviceType: '',
    eventName: '',
    eventDate: '',
    venueLocation: '',
    expectedAttendance: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    companyOrganization: '',
    additionalNotes: '',
    legalAgreement: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    bookingSubmit(e);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Book Hero */}
      <FadeIn direction="up" duration={0.8}>
        <section className="relative py-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/images/pages-background-1.jpg"
              alt=""
              className="w-full h-full object-cover object-center"
              aria-hidden="true"
            />
            {/* Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10"></div>
          </div>
          
          {/* Content */}
              <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center scale-100 origin-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Book a Gig</h1>
            <p className="text-lg text-gray-300">Let's Create Something Amazing Together</p>
          </div>
        </section>
      </FadeIn>

      {/* Booking Form */}
      <ScrollReveal direction="up" delay={0.2}>
        <section className="py-16 bg-[#0a0000]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scale-100 origin-top">
          <div className="p-8 md:p-12 bg-[#0a0000] hover:bg-red-950 transition-colors duration-300 rounded-lg">
            
            {/* Form Status Messages */}
            {bookingState.succeeded && (
              <FormSuccess 
                message="Thank you! Your booking inquiry has been sent successfully. We'll get back to you within 24-48 hours with a detailed proposal."
              />
            )}
            
            {bookingState.errors && Object.keys(bookingState.errors).length > 0 && (
              <FormError 
                message="Sorry, there was an error sending your booking inquiry. Please try again or contact us directly."
              />
            )}
            
            {bookingState.submitting && (
              <FormLoading 
                message="Sending your booking inquiry..."
              />
            )}
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Selection */}
              <div className="bg-[#0a0000] p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Event Details</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="serviceType" className="sr-only">
                      Event Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 bg-transparent text-red-300 border-0 border-b-2 border-red-600 focus:border-red-600 focus:outline-none transition-all duration-200 [&>option]:bg-red-950 [&>option]:text-red-300"
                      required
                    >
                      <option value="">Event Type *</option>
                      <option value="club-gig">Club Gig</option>
                      <option value="music-festival">Music Festival</option>
                      <option value="private-event">Private Event</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Event Details */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Event Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventName" className="sr-only">
                      Event Name *
                    </label>
                    <input
                      type="text"
                      id="eventName"
                      name="eventName"
                      value={formData.eventName}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 bg-transparent text-red-300 border-0 border-b-2 border-red-600 focus:border-red-600 focus:outline-none transition-all duration-200 placeholder-red-300"
                      placeholder="Event Name *"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="eventDate" className="sr-only">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 bg-transparent text-red-300 border-0 border-b-2 border-red-600 focus:border-red-600 focus:outline-none transition-all duration-200 [color-scheme:dark]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="venueLocation" className="sr-only">
                      Venue/Location *
                    </label>
                    <input
                      type="text"
                      id="venueLocation"
                      name="venueLocation"
                      value={formData.venueLocation}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 bg-transparent text-red-300 border-0 border-b-2 border-red-600 focus:border-red-600 focus:outline-none transition-all duration-200 placeholder-red-300"
                      placeholder="Venue/Location *"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="expectedAttendance" className="sr-only">
                      Expected Attendance
                    </label>
                    <input
                      type="text"
                      id="expectedAttendance"
                      name="expectedAttendance"
                      value={formData.expectedAttendance}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 bg-transparent text-red-300 border-0 border-b-2 border-red-600 focus:border-red-600 focus:outline-none transition-all duration-200 placeholder-red-300"
                      placeholder="Expected Attendance (e.g., 100 people, small event, large festival)"
                    />
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="sr-only">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 bg-transparent text-red-300 border-0 border-b-2 border-red-600 focus:border-red-600 focus:outline-none transition-all duration-200 placeholder-red-300"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contactEmail" className="sr-only">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 bg-transparent text-red-300 border-0 border-b-2 border-red-600 focus:border-red-600 focus:outline-none transition-all duration-200 placeholder-red-300"
                      placeholder="Email Address *"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contactPhone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 bg-transparent text-red-300 border-0 border-b-2 border-red-600 focus:border-red-600 focus:outline-none transition-all duration-200 placeholder-red-300"
                      placeholder="Phone Number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="companyOrganization" className="sr-only">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="companyOrganization"
                      name="companyOrganization"
                      value={formData.companyOrganization}
                      onChange={handleInputChange}
                      className="w-full px-0 py-3 bg-transparent text-red-300 border-0 border-b-2 border-red-600 focus:border-red-600 focus:outline-none transition-all duration-200 placeholder-red-300"
                      placeholder="Company/Organization"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="additionalNotes" className="sr-only">
                      Additional Notes
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-0 py-3 bg-transparent text-red-300 border-0 border-b-2 border-red-600 focus:border-red-600 focus:outline-none transition-all duration-200 resize-y placeholder-red-300"
                      placeholder="Additional Notes (Any additional information, special requests, or questions...)"
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-left pt-6">
                <div className="mb-6 flex items-center justify-start">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="legalAgreement"
                      checked={formData.legalAgreement}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 accent-red-600 border-red-600 rounded focus:ring-red-600 focus:ring-2 bg-transparent"
                    />
                    <span className="text-red-300 text-sm">
                      I have read and agree to the{' '}
                      <Link href="/privacy-policy" target="_blank" className="underline hover:text-red-400 transition-colors">
                        Privacy Policy
                      </Link>
                      {' '}and{' '}
                      <Link href="/terms-of-service" target="_blank" className="underline hover:text-red-400 transition-colors">
                        Terms of Service
                      </Link>
                    </span>
                  </label>
                </div>
                <HoverScale scale={1.05}>
                  <button 
                    type="submit" 
                    className="bg-red-600 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-red-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={bookingState.submitting || !formData.legalAgreement}
                  >
                    {bookingState.submitting ? 'Sending...' : 'Submit Booking Request'}
                  </button>
                </HoverScale>
                <p className="text-gray-300 mt-4 text-sm">
                  We'll get back to you within 24-48 hours to discuss your project details.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}