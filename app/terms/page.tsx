'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Terms of Service</h1>
            <p className="text-sm text-gray-500 mb-12 text-center">Last updated: August 3, 2025</p>

            <div className="prose prose-gray max-w-none space-y-12">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold">1. Introduction</h2>
                <p>
                  By using SkyRain Cloud’s services, you agree to the following Terms of Service.
                  These terms apply to all services including Minecraft hosting, VPS, and related infrastructure.
                </p>
                <p className="mt-2 font-semibold">
                  Zero Tolerance: Harassment or abusive behaviour toward staff, representatives, or other customers is not permitted and is cause for immediate action.
                </p>
                <p className="mt-2 text-blue-800 font-medium">
                  Note: At present, SkyRain Cloud only sells and processes service purchases through our official Discord server.
                  Please join our Discord for all inquiries, purchases, and support.
                </p>
              </section>

              {/* Refund Policy */}
              <section>
                <h2 className="text-2xl font-bold">2. Refund Policy</h2>
                <ul className="list-disc pl-6">
                  <li>Refunds are only provided within 24 hours of purchase, for Minecraft hosting only.</li>
                  <li>No refunds for VPS, dedicated servers, or other services.</li>
                  <li>Taxes and gateway fees are non-refundable.</li>
                  <li>Refunds process within 5–7 business days.</li>
                  <li>All refunds are eligible after deducting exchange costs and applicable taxes.</li>
                  <li>
                    Refunds are denied if:
                    <ul className="list-disc pl-6">
                      <li>You're outside the 24-hour window</li>
                      <li>Service is no longer needed</li>
                      <li>Terms were violated</li>
                      <li>Reason is unrelated to our infrastructure</li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Disputes */}
              <section>
                <h2 className="text-2xl font-bold">3. Disputes & Chargebacks</h2>
                <p>
                  Chargebacks result in service suspension and data loss. Always open a support ticket first.
                  We will respond to payment providers with full evidence.
                </p>
              </section>

              {/* Credits */}
              <section>
                <h2 className="text-2xl font-bold">4. Credits</h2>
                <ul className="list-disc pl-6">
                  <li>Non-refundable and usable only within SkyRain Cloud.</li>
                  <li>Misuse may result in credit removal and/or penalties.</li>
                  <li>Transfers require a support request.</li>
                </ul>
              </section>

              {/* Usage Policy */}
              <section>
                <h2 className="text-2xl font-bold">5. Usage Policy & Abuse</h2>
                <ul className="list-disc pl-6">
                  <li>No use of cracked or pirated software.</li>
                  <li>No hosting illegal or malicious content.</li>
                  <li>No resource abuse (CPU, disk, bandwidth).</li>
                  <li>System exploitation = termination.</li>
                </ul>
              </section>

              {/* Harassment Policy */}
              <section>
                <h2 className="text-2xl font-bold">5.1 Harassment, Abusive Language & Swearing</h2>
                <p>
                  Any form of harassment, threats, abusive language, or swearing directed toward SkyRain Cloud staff,
                  representatives, or other customers is strictly prohibited. This includes communications in support tickets,
                  live chat, Discord, email, social media, or any other channel managed by SkyRain Cloud.
                </p>
                <p className="mt-2">
                  Prohibited conduct includes but is not limited to: repeated insults, threats, sexually explicit harassment,
                  hate speech, targeted doxxing attempts, or any message intended to intimidate or humiliate our staff or other users.
                </p>
                <p className="mt-2 font-semibold">
                  Consequences: Breach of this section may result in immediate suspension or termination of services without refund,
                  without prior notice, and without access to stored data. SkyRain Cloud reserves the right to retain logs and evidence
                  of abusive behaviour and to provide those records to payment processors, law enforcement, or other parties as required.
                </p>
              </section>

              {/* Minecraft Hosting */}
              <section>
                <h2 className="text-2xl font-bold">6. Minecraft Hosting</h2>
                <ul className="list-disc pl-6">
                  <li>Not affiliated with Mojang/Minecraft.</li>
                  <li>
                    We do not support:
                    <ul className="list-disc pl-6">
                      <li>Plugin or modpack config</li>
                      <li>Cracked server jars</li>
                      <li>Custom maps/datapacks</li>
                    </ul>
                  </li>
                  <li>
                    We do support:
                    <ul className="list-disc pl-6">
                      <li>Startup issues</li>
                      <li>Crash support</li>
                      <li>Panel/connection/setup help</li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Discord Support */}
              <section>
                <h2 className="text-2xl font-bold">7. Discord Support</h2>
                <ul className="list-disc pl-6">
                  <li>Follows SkyRain and Discord's terms.</li>
                  <li>Rule violations = support denial or ban. See Section 5.1 for harassment policy and consequences.</li>
                  <li>Inactive tickets close after 24 hours.</li>
                </ul>
              </section>

              {/* Account Responsibility */}
              <section>
                <h2 className="text-2xl font-bold">8. Account Responsibility</h2>
                <p>
                  Keep your account secure. We are not responsible for user-side breaches.
                </p>
              </section>

              {/* Legal Jurisdiction */}
              <section>
                <h2 className="text-2xl font-bold">9. Legal Jurisdiction</h2>
                <p>
                  Governed under the laws of India. Disputes handled in courts of Noida, Uttar Pradesh.
                </p>
              </section>

              {/* Cancellation Policy */}
              <section>
                <h2 className="text-2xl font-bold">10. Cancellation Policy</h2>
                <ul className="list-disc pl-6">
                  <li>
                    All cancellations must be requested through our official Discord:{' '}
                    <a
                      href="https://dsc.gg/skyrain-cloud"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      https://dsc.gg/skyrain-cloud
                    </a>
                  </li>
                  <li>Requests should be made at least 5 days before the next renewal to avoid being charged.</li>
                  <li>Unpaid or overdue services may be deleted without recovery.</li>
                </ul>
              </section>

              {/* Backups */}
              <section>
                <h2 className="text-2xl font-bold">11. Backups & Data Loss</h2>
                <p>
                  Users are responsible for backups. We try to protect your data, but are not liable for losses due to mishaps or user error.
                </p>
              </section>

              {/* Defamation */}
              <section>
                <h2 className="text-2xl font-bold">12. Public Defamation & Misinformation</h2>
                <p>
                  Public misinformation or false claims may lead to suspension or legal action. Use support channels for feedback or complaints.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold">13. Contact Information</h2>
                <p>
                  Contact us via our official Discord:{' '}
                  <a
                    href="https://dsc.gg/skyrain-cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://dsc.gg/skyrain-cloud
                  </a>
                </p>
              </section>

              {/* Misc */}
              <section>
                <h2 className="text-2xl font-bold">14. Miscellaneous</h2>
                <p>
                  If any provision of these Terms is found to be invalid or unenforceable, the remainder will remain in effect.
                  We may update these Terms from time to time; material changes will be communicated via email or the client dashboard.
                </p>
              </section>
            </div>

            {/* Help Box */}
            <div className="bg-blue-50 p-6 rounded-lg mt-16">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
              <p className="text-blue-700">We're available 24/7 on Discord to help.</p>
              <a
                href="https://dsc.gg/skyrain-cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition mt-3"
              >
                <i className="ri-discord-fill mr-2"></i>
                Join Our Discord
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
