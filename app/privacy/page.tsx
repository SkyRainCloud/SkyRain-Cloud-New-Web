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
            {/* BIG TITLE */}
            <h1 className="text-5xl font-extrabold text-green-700 mb-4 text-center uppercase">Privacy Policy</h1>
            <div className="text-sm text-gray-500 mb-12 text-center">
              Last updated: June 22, 2025
            </div>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">• Data Collected</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">• Personal Information You Provide</h3>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li>• Name</li>
                <li>• Email address</li>
                <li>• Billing or postal address</li>
                <li>• Phone number (if provided)</li>
                <li>• Any other data submitted through account registration, forms, support requests, or service usage</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">• Automatically Collected Information</h3>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li>• IP address</li>
                <li>• Browser type and language</li>
                <li>• Operating system</li>
                <li>• Request logs and timestamps</li>
                <li>• Device and network details</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">• Cookies and Tracking Technologies</h3>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li>• Maintain sessions</li>
                <li>• Remember user preferences</li>
                <li>• Enhance website performance</li>
              </ul>
              <p className="text-gray-600 mb-6">
                Cookies are stored on your device and may be disabled via browser settings, although this may affect functionality.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">• Use of the Data</h2>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li>• Deliver and manage services</li>
                <li>• Respond to support requests</li>
                <li>• Process payments</li>
                <li>• Prevent fraud and abuse</li>
                <li>• Improve service performance and security</li>
              </ul>
              <p className="text-gray-600 mb-6">
                We do not sell your personal data to third parties. We only share it under limited, legitimate circumstances.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">• Sharing of Data</h2>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li>• <strong>Payment Gateways:</strong> (PayPal, Stripe, NowPayments, Coinbase Commerce)</li>
                <li>• <strong>Login Integrations:</strong> (e.g., Google login)</li>
                <li>• <strong>Legal Compliance & Disputes:</strong> Including law enforcement in India or the hosting country</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">• Cookies</h2>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li>• Recognize returning users</li>
                <li>• Store language or display preferences</li>
                <li>• Improve security and site analytics</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">• Security</h2>
              <ul className="text-gray-600 mb-6 ml-6 list-disc space-y-2">
                <li>• Data encryption where applicable</li>
                <li>• Secure server environments</li>
                <li>• Limited access to personal data by staff</li>
              </ul>
              <p className="text-gray-600 mb-6">
                While we take strong precautions, no system is 100% secure. We are not liable for breaches outside our control.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">• Accuracy of Information</h2>
              <p className="text-gray-600 mb-6">
                You must provide accurate information. Submitting false data (e.g., fake names, invalid emails) may result in service termination without notice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">• About Children</h2>
              <p className="text-gray-600 mb-6">
                Our services are not intended for children under 13. If we learn we have collected such data, we will delete it promptly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">• Chargebacks</h2>
              <p className="text-gray-600 mb-6">
                If a chargeback is initiated, we may provide data (logs, billing records, credentials, etc.) to resolve the dispute with the payment processor.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">• Legal Complaints</h2>
              <p className="text-gray-600 mb-6">
                We comply with valid legal processes such as court orders, law enforcement, and DMCA notices from India or server jurisdictions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">• Data Deletion</h2>
              <p className="text-gray-600 mb-6">
                To delete your data, open a support ticket. We will remove as much data as possible within 30 business days, retaining only what's needed for fraud prevention, tax, or security.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">• Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this policy at any time. Significant changes will be announced via email or your client dashboard.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">• Contact Us</h2>
              <p className="text-gray-600 mb-6">
                For privacy-related questions or data requests, contact us through Discord or email us at: <strong>privacy@elightnodes.com</strong>
              </p>

              <div className="bg-green-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-semibold text-green-900 mb-2">• Privacy Questions?</h3>
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
