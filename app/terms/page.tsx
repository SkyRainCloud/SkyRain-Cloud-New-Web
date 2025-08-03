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
              <section>
                <h2 className="text-2xl font-bold">1. Introduction</h2>
                <p>
                  By using SkyRain Cloud’s services, you agree to the following Terms of Service.
                  These terms apply to all services including Minecraft hosting, VPS, and related infrastructure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold">2. Refund Policy</h2>
                <ul className="list-disc pl-6">
                  <li>Refunds are only provided within 24 hours of purchase, for Minecraft hosting only.</li>
                  <li>No refunds for VPS, dedicated servers, or other services.</li>
                  <li>Taxes and gateway fees are non-refundable.</li>
                  <li>Refunds process within 5–7 business days.</li>
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

              <section>
                <h2 className="text-2xl font-bold">3. Disputes & Chargebacks</h2>
                <p>
                  Chargebacks result in service suspension and data loss. Always open a support ticket first.
                  We will respond to payment providers with full evidence.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold">4. Credits</h2>
                <ul className="list-disc pl-6">
                  <li>Non-refundable and usable only within SkyRain Cloud.</li>
                  <li>Misuse may result in credit removal and/or penalties.</li>
                  <li>Transfers require a support request.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold">5. Usage Policy & Abuse</h2>
                <ul className="list-disc pl-6">
                  <li>No use of cracked or pirated software.</li>
                  <li>No hosting illegal or malicious content.</li>
                  <li>No resource abuse (CPU, disk, bandwidth).</li>
                  <li>System exploitation = termination.</li>
                </ul>
              </section>

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

              <section>
                <h2 className="text-2xl font-bold">7. Discord Support</h2>
                <ul className="list-disc pl-6">
                  <li>Follows SkyRain and Discord's terms.</li>
                  <li>Rule violations = support denial or ban.</li>
                  <li>Inactive tickets close after 24 hours.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold">8. Account Responsibility</h2>
                <p>
                  Keep your account secure. We are not responsible for user-side breaches.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold">9. Legal Jurisdiction</h2>
                <p>
                  Governed under the laws of India. Disputes handled in courts of Noida, Uttar Pradesh.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold">10. Cancellation Policy</h2>
                <ul className="list-disc pl-6">
                  <li>Cancel anytime via panel.</li>
                  <li>Cancel 5+ days before renewal to avoid charges.</li>
                  <li>Unpaid services may be deleted.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold">11. Backups & Data Loss</h2>
                <p>
                  Users are responsible for backups. We try to protect your data, but are not liable for losses due to mishaps or user error.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold">12. Public Defamation & Misinformation</h2>
                <p>
                  Public misinformation or false claims may lead to suspension or legal action. Use support channels for feedback or complaints.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold">13. Contact Information</h2>
                <p>
                  Contact us via our official Discord:{" "}
                  <a
                    href="https://dsc.gg/skyrain-cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://dsc.gg/skyrain-cloud
                  </a>
                </p>
              </section>
            </div>

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
