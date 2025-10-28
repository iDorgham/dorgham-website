export const metadata = {
  title: "Cookie Policy - Dorgham | Cookie Usage & Management",
  description: "Cookie policy for Dorgham's website. Learn about how we use cookies and how to manage them.",
  keywords: "cookie policy, cookies, Dorgham, website cookies, data collection",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Cookie Policy Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl lg:text-2xl">How We Use Cookies and Similar Technologies</p>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-300 mb-8">
              <strong>Last Updated:</strong> October 24, 2024
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">1. What Are Cookies?</h2>
            <p className="text-lg text-gray-300 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies allow a website to recognize a user's device and remember information about their visit.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">2. How We Use Cookies</h2>
            <p className="text-lg text-gray-300 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Improve website performance and functionality</li>
              <li>Analyze how visitors use our website</li>
              <li>Provide personalized content and experiences</li>
              <li>Ensure website security</li>
              <li>Enable social media features</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">3. Types of Cookies We Use</h2>
            
            <h3 className="text-2xl font-semibold text-white mb-4">3.1 Essential Cookies</h3>
            <p className="text-lg text-gray-300 mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
            </p>
            <div className="bg-gray-700 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">Examples:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Session cookies to maintain your login state</li>
                <li>Security cookies to protect against CSRF attacks</li>
                <li>Load balancing cookies to distribute website traffic</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">3.2 Performance Cookies</h3>
            <p className="text-lg text-gray-300 mb-4">
              These cookies collect information about how visitors use our website, such as which pages are visited most often and if visitors get error messages from web pages. This information helps us improve how our website works.
            </p>
            <div className="bg-gray-700 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">Examples:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Google Analytics cookies to track website usage</li>
                <li>Heat mapping tools to understand user behavior</li>
                <li>A/B testing cookies to optimize website performance</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">3.3 Functionality Cookies</h3>
            <p className="text-lg text-gray-300 mb-4">
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
            </p>
            <div className="bg-gray-700 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">Examples:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Language preference cookies</li>
                <li>Theme and display preference cookies</li>
                <li>Social media integration cookies</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">3.4 Marketing Cookies</h3>
            <p className="text-lg text-gray-300 mb-4">
              These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
            </p>
            <div className="bg-gray-700 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">Examples:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Facebook pixel cookies for targeted advertising</li>
                <li>Google Ads cookies for remarketing</li>
                <li>Email marketing tracking cookies</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">4. Third-Party Cookies</h2>
            <p className="text-lg text-gray-300 mb-4">
              We may use third-party services that set cookies on our website. These include:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
              <li><strong>Payment Processors:</strong> For secure payment processing</li>
              <li><strong>Content Delivery Networks:</strong> For faster website loading</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">5. Cookie Duration</h2>
            <h3 className="text-2xl font-semibold text-white mb-4">5.1 Session Cookies</h3>
            <p className="text-lg text-gray-300 mb-4">
              These cookies are temporary and are deleted when you close your browser. They are used to maintain your session while you navigate through our website.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-4">5.2 Persistent Cookies</h3>
            <p className="text-lg text-gray-300 mb-4">
              These cookies remain on your device for a set period of time or until you delete them. They remember your preferences and settings for future visits.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">6. Managing Cookies</h2>
            <h3 className="text-2xl font-semibold text-white mb-4">6.1 Browser Settings</h3>
            <p className="text-lg text-gray-300 mb-4">
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>View what cookies are stored on your device</li>
              <li>Delete cookies individually or all at once</li>
              <li>Block cookies from specific websites</li>
              <li>Block third-party cookies</li>
              <li>Clear cookies when you close your browser</li>
            </ul>

            <h3 className="text-2xl font-semibold text-white mb-4">6.2 Browser-Specific Instructions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Chrome</h4>
                <p className="text-gray-300">Settings → Privacy and security → Cookies and other site data</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Firefox</h4>
                <p className="text-gray-300">Options → Privacy & Security → Cookies and Site Data</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Safari</h4>
                <p className="text-gray-300">Preferences → Privacy → Manage Website Data</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Edge</h4>
                <p className="text-gray-300">Settings → Cookies and site permissions → Cookies and site data</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">7. Impact of Disabling Cookies</h2>
            <p className="text-lg text-gray-300 mb-4">
              If you choose to disable cookies, some features of our website may not function properly. This may include:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
              <li>Inability to remember your preferences</li>
              <li>Reduced website functionality</li>
              <li>Need to re-enter information on each visit</li>
              <li>Limited access to certain features</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6">8. Updates to This Policy</h2>
            <p className="text-lg text-gray-300 mb-6">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">9. Contact Us</h2>
            <p className="text-lg text-gray-300 mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-lg text-gray-300 mb-2"><strong>Email:</strong> privacy@dorgham.me</p>
              <p className="text-lg text-gray-300 mb-2"><strong>Phone:</strong> +20 010 6000 3484</p>
              <p className="text-lg text-gray-300"><strong>Address:</strong> Hurghada, Egypt</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
