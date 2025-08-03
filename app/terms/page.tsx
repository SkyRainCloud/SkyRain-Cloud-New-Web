'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Terms of Service</h1>
            <div className="text-sm text-gray-500 mb-12 text-center">
              Last updated: December 2024
            </div>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing or using SkyRain Cloud services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-600 mb-4">
                SkyRain Cloud provides web hosting services including but not limited to:
              </p>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li>Minecraft server hosting</li>
                <li>Virtual Private Server (VPS) hosting</li>
                <li>Associated technical support services</li>
                <li>Server management and monitoring</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
              <p className="text-gray-600 mb-6">
                To use our services, you must provide accurate and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <div className="text-gray-600 mb-6 space-y-4">
                <p><strong>Billing:</strong> Services are billed monthly or annually as selected during purchase.</p>
                <p><strong>Payment:</strong> Payment is due in advance for the selected billing period.</p>
                <p><strong>Refunds:</strong> Refunds may be provided within 7 days of initial purchase, subject to our refund policy.</p>
                <p><strong>Late Payments:</strong> Services may be suspended for non-payment after a 3-day grace period.</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use Policy</h2>
              <p className="text-gray-600 mb-4">You agree not to use our services for:</p>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li>Illegal activities or content that violates applicable laws</li>
                <li>Spamming, phishing, or other malicious activities</li>
                <li>Distributing malware, viruses, or harmful code</li>
                <li>Unauthorized access to other systems or networks</li>
                <li>Activities that may harm our infrastructure or other users</li>
                <li>Adult content or gambling-related services</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Level Agreement</h2>
              <div className="text-gray-600 mb-6 space-y-4">
                <p><strong>Uptime Guarantee:</strong> We guarantee 99.9% uptime for our services.</p>
                <p><strong>Maintenance:</strong> Scheduled maintenance will be announced 24 hours in advance.</p>
                <p><strong>Support:</strong> Technical support is available 24/7 through Discord.</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Backup and Security</h2>
              <p className="text-gray-600 mb-6">
                While we implement security measures and perform regular backups, you are responsible for maintaining your own backups of critical data. SkyRain Cloud is not liable for data loss due to user error, hardware failure, or other unforeseen circumstances.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Suspension and Termination</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to suspend or terminate services for violation of these terms, non-payment, or activities that may harm our infrastructure. Upon termination, data may be deleted after a 7-day grace period.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                SkyRain Cloud's liability is limited to the amount paid for services in the preceding 12 months. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-6">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these terms at any time. Significant changes will be communicated via email or through our service announcements. Continued use of services constitutes acceptance of modified terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-600 mb-6">
                For questions regarding these Terms of Service, please contact us through our Discord server: https://dsc.gg/skyrain-cloud
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Support?</h3>
                <p className="text-blue-700">
                  Our support team is available 24/7 on Discord to help with any questions or concerns.
                </p>
                <a 
                  href="https://dsc.gg/skyrain-cloud" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors mt-3 whitespace-nowrap cursor-pointer"
                >
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-discord-fill"></i>
                  </div>
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}