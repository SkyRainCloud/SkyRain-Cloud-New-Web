
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function MinecraftHosting() {
  const [selectedPlan, setSelectedPlan] = useState('standard');

  const standardPlans = [
    {
      name: "Dirt Plan",
      icon: "🌱",
      ram: "2 GB",
      cpu: "100%",
      storage: "10 GB NVMe",
      price: "₹69",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Grass Plan",
      icon: "🌿",
      ram: "4 GB",
      cpu: "200%",
      storage: "20 GB NVMe",
      price: "₹139",
      color: "from-green-600 to-green-700"
    },
    {
      name: "Stone Plan",
      icon: "🗿",
      ram: "6 GB",
      cpu: "250%",
      storage: "35 GB NVMe",
      price: "₹209",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Iron Plan",
      icon: "⚙️",
      ram: "8 GB",
      cpu: "300%",
      storage: "45 GB NVMe",
      price: "₹309",
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Diamond Plan",
      icon: "💎",
      ram: "10 GB",
      cpu: "400%",
      storage: "55 GB NVMe",
      price: "₹409",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Netherite Plan",
      icon: "🔥",
      ram: "12 GB",
      cpu: "450%",
      storage: "70 GB NVMe",
      price: "₹509",
      color: "from-red-600 to-red-700"
    },
    {
      name: "Ultra Plan",
      icon: "👑",
      ram: "16 GB",
      cpu: "600%",
      storage: "90 GB NVMe",
      price: "₹609",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Rocket Plan",
      icon: "🚀",
      ram: "24 GB",
      cpu: "800%",
      storage: "130 GB NVMe",
      price: "₹849",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const poweredPlans = [
    {
      name: "Performance 1",
      icon: "⚡",
      ram: "6 GB",
      storage: "20 GB SSD",
      price: "₹660",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Performance 2",
      icon: "⚡",
      ram: "8 GB",
      storage: "30 GB SSD",
      price: "₹880",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Performance 3",
      icon: "⚡",
      ram: "12 GB",
      storage: "40 GB SSD",
      price: "₹1,320",
      color: "from-purple-500 to-purple-600",
      popular: true
    },
    {
      name: "Performance 4",
      icon: "⚡",
      ram: "16 GB",
      storage: "60 GB SSD",
      price: "₹1,760",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      name: "Performance 5",
      icon: "⚡",
      ram: "24 GB",
      storage: "80 GB SSD",
      price: "₹2,640",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Performance 6",
      icon: "⚡",
      ram: "32 GB",
      storage: "100 GB SSD",
      price: "₹3,520",
      color: "from-red-500 to-red-600"
    }
  ];

  const features = [
    "DDoS Protection",
    "Free Subdomain",
    "Full FTP + Panel Access",
    "24/7 Uptime",
    "Modpack & Custom JAR Support",
    "Automatic Backups"
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Minecraft%20server%20world%20with%20beautiful%20landscapes%2C%20floating%20islands%2C%20crystal%20clear%20water%2C%20pixelated%20blocks%2C%20green%20grass%20fields%2C%20blue%20sky%20with%20white%20clouds%2C%20peaceful%20gaming%20environment%2C%20colorful%20minecraft%20terrain%20with%20trees%20and%20mountains%2C%20vibrant%20and%20cheerful%20atmosphere&width=1920&height=800&seq=mchero001&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-900/70"></div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Minecraft Hosting
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-slide-up">
            Premium Minecraft server hosting with instant setup, modpack support, and global locations
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything Included</h2>
            <p className="text-gray-600">All plans come with these premium features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-check-line text-green-600 text-xl"></i>
                </div>
                <span className="font-medium text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Selection Toggle */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="bg-white p-2 rounded-full shadow-lg">
              <button
                onClick={() => setSelectedPlan('standard')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedPlan === 'standard'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Standard Plans
              </button>
              <button
                onClick={() => setSelectedPlan('powered')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedPlan === 'powered'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Powered Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {selectedPlan === 'standard' ? (
            <div className="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Standard Plans</h2>
                <p className="text-xl text-gray-600 mb-2">Powered by DDR4 RAM & AMD EPYC Processor</p>
                <p className="text-gray-500">Perfect for small to medium servers</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {standardPlans.map((plan, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>

                    <div className="p-6">
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-3">{plan.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <div className="text-3xl font-bold text-gray-900">
                          {plan.price}
                          <span className="text-base font-normal text-gray-600">/month</span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">RAM</span>
                          <span className="font-semibold">{plan.ram}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">CPU</span>
                          <span className="font-semibold">{plan.cpu}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Storage</span>
                          <span className="font-semibold">{plan.storage}</span>
                        </div>
                      </div>

                      <a
                        href="https://dsc.gg/skyrain-cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full bg-gradient-to-r ${plan.color} text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105`}
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                  href="https://dsc.gg/skyrain-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2">
                    <i className="ri-shopping-cart-line text-lg"></i>
                  </div>
                  Order Standard Plan
                </a>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Powered Plans</h2>
                <p className="text-xl text-gray-600 mb-2">Powered by DDR5 RAM & Ryzen 9 9900X</p>
                <p className="text-gray-500">High-performance hosting for large communities</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {poweredPlans.map((plan, index) => (
                  <div key={index} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                    {plan.popular && (
                      <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                        Popular
                      </div>
                    )}

                    <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>

                    <div className="p-6">
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-3">{plan.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <div className="text-3xl font-bold text-gray-900">
                          {plan.price}
                          <span className="text-base font-normal text-gray-600">/month</span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">RAM</span>
                          <span className="font-semibold">{plan.ram}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Processor</span>
                          <span className="font-semibold">Ryzen 9 9900X</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Storage</span>
                          <span className="font-semibold">{plan.storage}</span>
                        </div>
                      </div>

                      <a
                        href="https://dsc.gg/skyrain-cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full bg-gradient-to-r ${plan.color} text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105`}
                      >
                        Purchase Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                  href="https://dsc.gg/skyrain-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2">
                    <i className="ri-flashlight-line text-lg"></i>
                  </div>
                  Order Powered Plan
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Custom Plans CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want Custom Plans?</h3>
            <p className="text-gray-600 mb-6">
              Need different location or processor specifications? Our team can create a custom solution for your needs.
            </p>
            <a
              href="https://dsc.gg/skyrain-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 hover:shadow-lg"
            >
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <i className="ri-discord-fill text-lg"></i>
              </div>
              Contact Us on Discord
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
}
