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
              Last updated: August 3, 2025
            </div>

            <div className="prose prose-gray max-w-none">
              <h2>1. Introduction</h2>
              <p>
                By using SkyRain Cloud’s services, you agree to the following Terms of Service. These terms apply to all services including Minecraft hosting, VPS, and related infrastructure. Please read carefully before using our platform.
              </p>

              <h2>2. Refund Policy</h2>
              <ul>
                <li>Refunds are offered within 24 hours of purchase and only for Minecraft hosting.</li>
                <li>No refunds are given for VPS, dedicated servers, or other services.</li>
                <li>Refunds exclude taxes and gateway fees.</li>
                <li>Overcharges must be reported within 7 days to be considered.</li>
                <li>Refunds process in 5–7 business days.</li>
                <li>Refunds are denied if:
                  <ul>
                    <li>You're outside the 24-hour window</li>
                    <li>Services are no longer needed by choice</li>
                    <li>Terms were violated</li>
                    <li>The reason is unrelated to our infrastructure</li>
                  </ul>
                </li>
              </ul>

              <h2>3. Disputes & Chargebacks</h2>
              <p>
                Chargebacks result in service suspension and data loss. Open a ticket first. We will respond to payment providers with evidence in all chargeback claims.
              </p>

              <h2>4. Credits</h2>
              <ul>
                <li>Issued credits are non-refundable and valid only within SkyRain Cloud.</li>
                <li>Misuse or exploitation of credits may lead to removal and account penalties.</li>
                <li>Transfers between accounts may be done via support requests.</li>
              </ul>

              <h2>5. Usage Policy & Abuse</h2>
              <ul>
                <li>Use of cracked/pirated software is strictly prohibited.</li>
                <li>Resource abuse (CPU, storage, memory) is not allowed.</li>
                <li>Do not upload or host illegal/malicious content.</li>
                <li>Any system exploitation will result in termination.</li>
              </ul>

              <h2>6. Minecraft Hosting</h2>
              <p>SkyRain Cloud is not affiliated with Mojang.</p>
              <ul>
                <li>We are not liable for Minecraft TOS violations.</li>
                <li>Support does <strong>not</strong> include:
                  <ul>
                    <li>Plugin/mod configurations or cracked jars</li>
                    <li>Map, datapack, or custom setup issues</li>
                    <li>Command block troubleshooting</li>
                    <li>Domain DNS configuration for Minecraft</li>
                  </ul>
                </li>
                <li>Support <strong>does</strong> include:
                  <ul>
                    <li>Startup and panel connection issues</li>
                    <li>Crash support for modpacks/versions</li>
                    <li>Addon setup like Geyser, Bungeecord, Dedicated IP</li>
                  </ul>
                </li>
              </ul>

              <h2>7. Discord Support</h2>
              <ul>
                <li>Discord support follows SkyRain and Discord’s own terms.</li>
                <li>Misuse or rule violations may lead to support denial or suspension.</li>
                <li>Tickets auto-close after 24 hours of inactivity.</li>
                <li>No support for services not hosted by us or billing issues via Discord.</li>
              </ul>

              <h2>8. Account Responsibility</h2>
              <p>
                You must secure your account with a strong password and 2FA. We are not responsible for breaches caused by user negligence.
              </p>

              <h2>9. Legal Jurisdiction</h2>
              <p>
                These terms are governed by the laws of India. Legal disputes shall be handled in the courts of Noida, Uttar Pradesh.
              </p>

              <h2>10. Cancellation Policy</h2>
              <ul>
                <li>Services can be cancelled at any time through the panel.</li>
                <li>Cancel at least 5 days before renewal to avoid billing.</li>
                <li>Unpaid services may be suspended or deleted without notice.</li>
              </ul>

              <h2>11. Backup & Data Responsibility</h2>
              <p>
                You are responsible for creating your own backups. Unless purchased separately, we do not guarantee data recovery or backup availability.
              </p>

              <h2>12. Public Defamation & Misinformation</h2>
              <p>
                Criticism must be submitted through support or official forms. False public claims, misinformation, or defamatory posts may result in suspension or legal action. We value free speech but enforce fairness.
              </p>

              <h2>13. Contact Information</h2>
              <p>
                Questions or concerns? Contact us through our official Discord: <a href="https://dsc.gg/skyrain-cloud" target="_blank" rel="noopener noreferrer">https://dsc.gg/skyrain-cloud</a>
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
