export const metadata = {
  title: "Terms of Service - Dorgham | Website Terms & Conditions",
  description: "Terms of service for Dorgham's website. Read our terms and conditions for using our services.",
  keywords: "terms of service, terms and conditions, Dorgham, website terms",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      {/* Terms of Service Hero */}
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
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center scale-100 md:scale-[0.8] origin-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">Terms of Service</h1>
          <p className="text-xl lg:text-2xl text-gray-300">Terms and Conditions for Using Our Services</p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-20 bg-black/95">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 scale-100 md:scale-[0.8] origin-top">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-300 mb-8">
              <strong>Last Updated:</strong> October 24, 2024
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
            <p className="text-lg text-gray-300 mb-6">
              By accessing and using the dorgham.me website (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">2. Use License</h2>
            <p className="text-lg text-gray-300 mb-4">
              Permission is granted to temporarily download one copy of the materials on Dorgham's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>attempt to decompile or reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">3. Services</h2>
            <h3 className="text-2xl font-semibold text-white mb-4">3.1 Music Services</h3>
            <p className="text-lg text-gray-300 mb-4">
              Dorgham provides various music services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>DJ performances for private and corporate events</li>
              <li>Music production and composition</li>
              <li>Live performances and stage shows</li>
              <li>Music consulting and creative direction</li>
            </ul>

            <h3 className="text-2xl font-semibold text-white mb-4">3.2 Creative Services</h3>
            <p className="text-lg text-gray-300 mb-4">
              Through MediaBubble Agency, we provide creative services including:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>Art direction and creative direction</li>
              <li>Brand identity development</li>
              <li>Visual design and creative consulting</li>
              <li>Project management and team collaboration</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">4. Booking and Payment</h2>
            <h3 className="text-2xl font-semibold text-white mb-4">4.1 Booking Process</h3>
            <p className="text-lg text-gray-300 mb-4">
              All bookings are subject to availability and confirmation. We reserve the right to decline any booking request at our discretion.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-4">4.2 Payment Terms</h3>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>Payment terms will be specified in individual service agreements</li>
              <li>Deposits may be required to secure bookings</li>
              <li>Final payment is typically due before or on the day of service</li>
              <li>Late payment fees may apply as specified in service agreements</li>
            </ul>

            <h3 className="text-2xl font-semibold text-white mb-4">4.3 Cancellation Policy</h3>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>Cancellations must be made in writing</li>
              <li>Refund policies vary by service type and will be specified in service agreements</li>
              <li>We reserve the right to cancel services due to circumstances beyond our control</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">5. Intellectual Property</h2>
            <p className="text-lg text-gray-300 mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Dorgham and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">6. User Content</h2>
            <p className="text-lg text-gray-300 mb-4">
              Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">7. Prohibited Uses</h2>
            <p className="text-lg text-gray-300 mb-4">
              You may not use our Service:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">8. Disclaimer</h2>
            <p className="text-lg text-gray-300 mb-6">
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms relating to our website and the use of this website.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">9. Limitation of Liability</h2>
            <p className="text-lg text-gray-300 mb-6">
              In no event shall Dorgham, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">10. Indemnification</h2>
            <p className="text-lg text-gray-300 mb-6">
              You agree to defend, indemnify, and hold harmless Dorgham and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">11. Termination</h2>
            <p className="text-lg text-gray-300 mb-6">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease immediately.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">12. Governing Law</h2>
            <p className="text-lg text-gray-300 mb-6">
              These Terms shall be interpreted and governed by the laws of Egypt, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">13. Changes to Terms</h2>
            <p className="text-lg text-gray-300 mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">14. Contact Information</h2>
            <p className="text-lg text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-neutral-light p-6 rounded-lg">
              <p className="text-lg text-gray-300 mb-2"><strong>Email:</strong> legal@dorgham.me</p>
              <p className="text-lg text-gray-300 mb-2"><strong>Phone:</strong> +20 010 6000 3484</p>
              <p className="text-lg text-gray-300"><strong>Address:</strong> Hurghada, Egypt</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
