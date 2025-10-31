import FadeIn from '@/components/animations/FadeIn';
import ScrollReveal from '@/components/animations/ScrollReveal';

export const metadata = {
  title: "Privacy Policy - Dorgham | Data Protection & Privacy",
  description: "Privacy policy for Dorgham's website. Learn how we collect, use, and protect your personal information.",
  keywords: "privacy policy, data protection, Dorgham, personal information",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Privacy Policy Hero */}
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">Privacy Policy</h1>
            <p className="text-xl lg:text-2xl text-gray-300">How We Protect Your Information</p>
          </div>
        </section>
      </FadeIn>

      {/* Privacy Policy Content */}
      <ScrollReveal direction="up" delay={0.2}>
        <section className="py-20 bg-black/95">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scale-100 origin-top">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-300 mb-8">
              <strong>Last Updated:</strong> October 24, 2024
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">1. Introduction</h2>
            <p className="text-lg text-gray-300 mb-6">
              Dorgham ("we," "our," or "us") operates the website dorgham.me (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">2. Information We Collect</h2>
            <h3 className="text-2xl font-semibold text-white mb-4">2.1 Personal Information</h3>
            <p className="text-lg text-gray-300 mb-4">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Event details and preferences</li>
              <li>Communication preferences</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Any other information you voluntarily provide to us</li>
            </ul>

            <h3 className="text-2xl font-semibold text-white mb-4">2.2 Automatically Collected Information</h3>
            <p className="text-lg text-gray-300 mb-4">
              We may automatically collect certain information when you visit our website:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">3. How We Use Your Information</h2>
            <p className="text-lg text-gray-300 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process bookings and service requests</li>
              <li>To communicate with you about your inquiries</li>
              <li>To send you updates about our services (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and interests</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">4. Information Sharing and Disclosure</h2>
            <p className="text-lg text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred to the new entity</li>
              <li><strong>Consent:</strong> We may share information with your explicit consent</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">5. Data Security</h2>
            <p className="text-lg text-gray-300 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">6. Cookies and Tracking Technologies</h2>
            <p className="text-lg text-gray-300 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              For more information about our use of cookies, please see our <a href="/cookie-policy" className="text-primary-red hover:underline">Cookie Policy</a>.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">7. Your Rights</h2>
            <p className="text-lg text-gray-300 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to delete your personal information</li>
              <li>Right to restrict processing of your information</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">8. Data Retention</h2>
            <p className="text-lg text-gray-300 mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">9. International Data Transfers</h2>
            <p className="text-lg text-gray-300 mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">10. Children's Privacy</h2>
            <p className="text-lg text-gray-300 mb-6">
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">11. Changes to This Privacy Policy</h2>
            <p className="text-lg text-gray-300 mb-6">
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">12. Contact Us</h2>
            <p className="text-lg text-gray-300 mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-neutral-light p-6 rounded-lg">
              <p className="text-lg text-gray-300 mb-2"><strong>Email:</strong> privacy@dorgham.me</p>
              <p className="text-lg text-gray-300 mb-2"><strong>Phone:</strong> +20 010 6000 3484</p>
              <p className="text-lg text-gray-300"><strong>Address:</strong> Hurghada, Egypt</p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
