'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function VPSHosting() {
  const [selectedLocation, setSelectedLocation] = useState('india');
  const [selectedProcessor, setSelectedProcessor] = useState('AMD EPYC 7B13');

  const locations = [
    {
      id: 'india',
      name: 'India',
      flag: '🇮🇳',
      city: 'Mumbai',
      processors: ['AMD EPYC 7B13', 'AMD Turin', 'Ryzen 9 9900X'],
      description: 'Optimized for Indian subcontinent'
    },
    {
      id: 'germany',
      name: 'Germany',
      flag: '🇩🇪',
      city: 'Frankfurt',
      processors: ['Ryzen 9 9900X'],
      description: 'Built for low-latency in Europe'
    },
    {
      id: 'singapore',
      name: 'Singapore',
      flag: '🇸🇬',
      city: 'Singapore',
      processors: ['AMD EPYC 7B13'],
      description: 'Ideal for Asia-Pacific region'
    }
  ];

  const vpsPlansData = {
    'AMD EPYC 7B13': [
      {
        name: "VPS Standard",
        ram: "16 GB",
        cpu: "4 vCPU",
        storage: "100 GB NVMe",
        bandwidth: "2 TB",
        price: "₹599",
        color: "from-blue-500 to-blue-600"
      },
      {
        name: "VPS Enterprise",
        ram: "32 GB",
        cpu: "8 vCPU",
        storage: "200 GB NVMe",
        bandwidth: "4 TB",
        price: "₹1199",
        color: "from-green-500 to-green-600",
        popular: true
      },
    ],
    'AMD Turin': [
      {
        name: "VPS Standard",
        ram: "16 GB",
        cpu: "4 vCPU",
        storage: "100 GB NVMe",
        bandwidth: "2 TB",
        price: "₹1199",
        color: "from-blue-500 to-blue-600"
      },
      {
        name: "VPS Enterprise",
        ram: "32 GB",
        cpu: "8 vCPU",
        storage: "200 GB NVMe",
        bandwidth: "4 TB",
        price: "₹1999",
        color: "from-green-500 to-green-600",
        popular: true
      },
    ],
    'Ryzen 9 9900X': [
      {
        name: "VPS Standard",
        ram: "16 GB",
        cpu: "4 vCPU",
        storage: "100 GB NVMe",
        bandwidth: "2 TB",
        price: "₹1999",
        color: "from-blue-500 to-blue-600"
      },
      {
        name: "VPS Enterprise",
        ram: "32 GB",
        cpu: "8 vCPU",
        storage: "200 GB NVMe",
        bandwidth: "4 TB",
        price: "₹3999",
        color: "from-green-500 to-green-600",
        popular: true
      },
    ]
  };

  const vpsFeatures = [
    "Full Root Access",
    "DDoS Protection",
    "99.9% Uptime SLA",
    "24/7 Support",
    "Instant Deployment",
    "Multiple OS Options",
    "Free Snapshots",
    "High-Performance NVMe"
  ];

  const getCurrentLocation = () => locations.find(loc => loc.id === selectedLocation);
  const getCurrentPlans = () =>
    selectedProcessor in vpsPlansData
      ? vpsPlansData[selectedProcessor as keyof typeof vpsPlansData]
      : vpsPlansData['AMD EPYC 7B13'];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative py-20 bg-cover bg-center" style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20data%20center%20with%20rows%20of%20server%20racks%2C%20blue%20LED%20lighting%2C%20high-tech%20infrastructure%2C%20clean%20white%20and%20blue%20environment%2C%20professional%20server%20room%20with%20glass%20panels%2C%20futuristic%20technology%20setup%2C%20minimalist%20design%20with%20geometric%20patterns&width=1920&height=800&seq=vpshero001&orientation=landscape')`
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/70"></div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">VPS Hosting</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            High-performance virtual private servers with full root access and premium hardware
          </p>
        </div>
      </section>

      {/* Location Selection */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Location</h2>
            <p className="text-gray-600">Select the server location closest to your audience</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => {
                  setSelectedLocation(location.id);
                  setSelectedProcessor(location.processors[0]);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedLocation === location.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {location.flag} {location.name}
              </button>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">{getCurrentLocation()?.flag}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {getCurrentLocation()?.name} - {getCurrentLocation()?.city}
              </h3>
              <p className="text-gray-600 mb-6">{getCurrentLocation()?.description}</p>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Select Processor:</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {getCurrentLocation()?.processors.map((processor, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedProcessor(processor)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedProcessor === processor
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                      }`}
                    >
                      {processor}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VPS Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">VPS Features</h2>
            <p className="text-gray-600">Enterprise-grade features included</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {vpsFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-check-line text-blue-600 text-xl"></i>
                </div>
                <span className="font-medium text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VPS Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">VPS Plans</h2>
            <p className="text-xl text-gray-600 mb-2">Scalable solutions for every need</p>
            <p className="text-lg text-blue-600 font-semibold">
              {getCurrentLocation()?.flag} {getCurrentLocation()?.name} - {selectedProcessor}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {getCurrentPlans().map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs hover:shadow-xl transition-shadow ${
                  plan.popular ? 'ring-2 ring-blue-500' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
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
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bandwidth</span>
                      <span className="font-semibold">{plan.bandwidth}</span>
                    </div>
                  </div>

                  <a 
                    href="https://dsc.gg/skyrain-cloud" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`block w-full bg-gradient-to-r ${plan.color} text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Plans CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want Custom Plans?</h3>
            <p className="text-gray-600 mb-6">
              Need different location or processor specifications? Our team can create a custom VPS solution for your requirements.
            </p>
            <a 
              href="https://dsc.gg/skyrain-cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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
    </div>
  );
}
