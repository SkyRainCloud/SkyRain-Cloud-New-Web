'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
            <div className="text-sm text-gray-500 mb-12 text-center">
              Last updated: December 2024
            </div>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-6">
                At SkyRain Cloud, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our hosting services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-600 mb-4">We may collect the following personal information:</p>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Billing and payment information</li>
                <li>Account credentials and authentication data</li>
                <li>Communication preferences and support interactions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Information</h3>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li>IP addresses and connection logs</li>
                <li>Server usage statistics and performance metrics</li>
                <li>Browser type, device information, and operating system</li>
                <li>Service usage patterns and feature utilization</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use collected information to:</p>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li>Provide, maintain, and improve our hosting services</li>
                <li>Process payments and manage billing</li>
                <li>Provide customer support and technical assistance</li>
                <li>Monitor service performance and security</li>
                <li>Communicate service updates and important notifications</li>
                <li>Comply with legal obligations and prevent fraud</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">We do not sell your personal information. We may share information in the following circumstances:</p>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li><strong>Service Providers:</strong> With trusted third parties who assist in service delivery</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfer:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>Consent:</strong> When you explicitly authorize such sharing</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">We implement comprehensive security measures including:</p>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication protocols</li>
                <li>Physical security measures at our data centers</li>
                <li>Employee training on data protection practices</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-600 mb-6">
                We retain your information for as long as necessary to provide services and comply with legal obligations. Account information is typically deleted within 30 days of account termination, unless required for legal or business purposes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. International Data Transfers</h2>
              <p className="text-gray-600 mb-6">
                Our services operate across multiple countries including India, Germany, and Singapore. Your data may be transferred and processed in these locations, which maintain adequate data protection standards.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights and Choices</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li>Access and review your personal information</li>
                <li>Update or correct inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Restrict or object to certain processing activities</li>
                <li>Receive a copy of your data in a portable format</li>
                <li>Withdraw consent where applicable</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-6">
                We use cookies and similar technologies to enhance user experience, analyze service usage, and provide personalized content. You can manage cookie preferences through your browser settings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p className="text-gray-600 mb-6">
                Our services are not intended for individuals under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Third-Party Services</h2>
              <p className="text-gray-600 mb-6">
                Our services may integrate with third-party applications and services. This Privacy Policy does not cover third-party practices. We encourage you to review the privacy policies of any third-party services you use.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Updates to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will notify you of significant changes through email or service notifications.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
              <p className="text-gray-600 mb-6">
                For privacy-related questions, concerns, or to exercise your rights, please contact us through our Discord server or email us with "Privacy" in the subject line.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Privacy Questions?</h3>
                <p className="text-green-700 mb-3">
                  We're committed to transparency and protecting your privacy. Contact us anytime with questions or concerns.
                </p>
                <a 
                  href="https://dsc.gg/skyrain-cloud" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-discord-fill"></i>
                  </div>
                  Contact Support
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