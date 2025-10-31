'use client';

import { useState } from 'react';
import { useForm } from '@formspree/react';
import FormSuccess from '@/components/forms/FormSuccess';
import FormError from '@/components/forms/FormError';
import FormLoading from '@/components/forms/FormLoading';
import { getFormId } from '@/config/formspree';

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
    additionalNotes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    bookingSubmit(e);
  };

  return (
    <div className="min-h-screen bg-black/95">
      {/* Book Hero */}
      <section className="relative py-16 overflow-hidden">
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
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center scale-100 md:scale-[0.8] origin-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Book a Gig</h1>
          <p className="text-lg text-gray-300">Let's Create Something Amazing Together</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-black/95">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 scale-100 md:scale-[0.8] origin-top">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
            
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
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select Event Type</option>
                      <option value="club-gig">Club Gig</option>
                      <option value="music-festival">Music Festival</option>
                      <option value="private-event">Private Event</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Event Details */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Name *
                    </label>
                    <input
                      type="text"
                      id="eventName"
                      name="eventName"
                      value={formData.eventName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="venueLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                      Venue/Location *
                    </label>
                    <input
                      type="text"
                      id="venueLocation"
                      name="venueLocation"
                      value={formData.venueLocation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="expectedAttendance" className="block text-sm font-semibold text-gray-700 mb-2">
                      Expected Attendance
                    </label>
                    <input
                      type="text"
                      id="expectedAttendance"
                      name="expectedAttendance"
                      value={formData.expectedAttendance}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., 100 people, small event, large festival"
                    />
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contactPhone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="companyOrganization" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="companyOrganization"
                      name="companyOrganization"
                      value={formData.companyOrganization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-y"
                      placeholder="Any additional information, special requests, or questions..."
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-6">
                <button 
                  type="submit" 
                  className="bg-red-600 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-red-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={bookingState.submitting}
                >
                  {bookingState.submitting ? 'Sending...' : 'Submit Booking Request'}
                </button>
                <p className="text-gray-600 mt-4 text-sm">
                  We'll get back to you within 24-48 hours to discuss your project details.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}