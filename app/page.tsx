
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center bg-cover bg-center bg-top"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20cloud%20computing%20data%20center%20with%20glowing%20blue%20servers%2C%20futuristic%20technology%20infrastructure%2C%20floating%20holographic%20displays%2C%20digital%20network%20connections%2C%20sleek%20metallic%20surfaces%20with%20LED%20lights%2C%20professional%20hosting%20environment%2C%20clean%20minimalist%20design%20with%20blue%20and%20white%20color%20scheme%2C%20high-tech%20atmosphere&width=1920&height=1080&seq=hero002&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/85 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Next-Gen Cloud
              <span className="block text-blue-300">Hosting Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed animate-slide-up">
              Experience lightning-fast performance with our premium hosting infrastructure. Deploy your projects with confidence using our cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up-delayed">
              <Link 
                href="/minecraft"
                className="group inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 hover:shadow-lg"
              >
                <div className="w-6 h-6 flex items-center justify-center mr-3">
                  <i className="ri-gamepad-line text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                </div>
                Get Started - Minecraft
              </Link>
              <Link 
                href="/vps"
                className="group inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 hover:shadow-lg"
              >
                <div className="w-6 h-6 flex items-center justify-center mr-3">
                  <i className="ri-server-line text-lg group-hover:rotate-12 transition-transform duration-300"></i>
                </div>
                Get Started - VPS
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-40 right-40 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-80" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Hosting Services Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Hosting Solutions</h2>
            <p className="text-xl text-gray-600">Choose the perfect hosting solution for your needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Minecraft Hosting Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center relative" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Beautiful%20Minecraft%20server%20world%20with%20colorful%20pixelated%20blocks%2C%20green%20grass%20fields%2C%20blue%20sky%20with%20white%20clouds%2C%20peaceful%20gaming%20environment%2C%20vibrant%20minecraft%20terrain%20with%20trees%20mountains%20and%20water%2C%20cheerful%20atmosphere%20with%20floating%20islands%20and%20crystal%20clear%20lakes&width=600&height=300&seq=mccard001&orientation=landscape')`
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Minecraft Hosting</h3>
                  <p className="text-green-100">Premium game servers</p>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-green-600 font-semibold">Starting from</span>
                    <span className="text-3xl font-bold text-gray-900">₹69<span className="text-base text-gray-600">/month</span></span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span className="text-gray-700">DDoS Protection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span className="text-gray-700">Free Subdomain</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span className="text-gray-700">Modpack Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span className="text-gray-700">24/7 Uptime</span>
                  </div>
                </div>

                <Link href="/minecraft" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  View Minecraft Plans
                </Link>
              </div>
            </div>

            {/* VPS Hosting Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center relative" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20data%20center%20server%20room%20with%20blue%20LED%20lighting%2C%20high-tech%20server%20racks%20in%20rows%2C%20clean%20professional%20environment%20with%20glass%20panels%2C%20futuristic%20technology%20infrastructure%2C%20minimalist%20design%20with%20geometric%20patterns%20and%20server%20equipment&width=600&height=300&seq=vpscard001&orientation=landscape')`
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">VPS Hosting</h3>
                  <p className="text-blue-100">Virtual private servers</p>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-600 font-semibold">Starting from</span>
                    <span className="text-3xl font-bold text-gray-900">₹799<span className="text-base text-gray-600">/month</span></span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-blue-600"></i>
                    <span className="text-gray-700">Full Root Access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-blue-600"></i>
                    <span className="text-gray-700">High-Performance NVMe</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-blue-600"></i>
                    <span className="text-gray-700">Multiple OS Options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-blue-600"></i>
                    <span className="text-gray-700">99.9% Uptime SLA</span>
                  </div>
                </div>

                <Link href="/vps" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                  View VPS Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SkyRain Cloud?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              At SkyRain Cloud, we're committed to delivering exceptional hosting experiences. Here's what sets us apart from the competition and makes us the preferred choice for thousands of satisfied customers worldwide.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                    <i className="ri-shield-check-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Advanced DDoS Protection</h3>
                    <p className="text-gray-600">Our enterprise-grade DDoS protection keeps your services online 24/7, defending against even the most sophisticated attacks with real-time threat detection.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg flex-shrink-0">
                    <i className="ri-time-line text-xl text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">99.9% Uptime Guarantee</h3>
                    <p className="text-gray-600">We guarantee 99.9% uptime with redundant infrastructure, automatic failover systems, and continuous monitoring to ensure your services never go down.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg flex-shrink-0">
                    <i className="ri-global-line text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Global Network Coverage</h3>
                    <p className="text-gray-600">Strategic server locations in India (Mumbai & Noida), Germany (Frankfurt), and Singapore provide optimal performance worldwide with low latency.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-lg flex-shrink-0">
                    <i className="ri-flashlight-line text-xl text-yellow-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Instant Setup & Deployment</h3>
                    <p className="text-gray-600">Get your server running within minutes using our automated deployment system. No waiting, no complications - just instant access to your hosting environment.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-lg flex-shrink-0">
                    <i className="ri-customer-service-2-line text-xl text-red-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">24/7 Expert Support</h3>
                    <p className="text-gray-600">Our dedicated support team is available around the clock through Discord, providing quick responses and expert solutions to keep you running smoothly.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-lg flex-shrink-0">
                    <i className="ri-cpu-line text-xl text-indigo-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Premium Hardware</h3>
                    <p className="text-gray-600">Powered by the latest AMD EPYC and Ryzen processors with ultra-fast NVMe storage, delivering unmatched performance for demanding applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Infrastructure */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Global Infrastructure</h2>
            <p className="text-xl text-gray-300">High-performance servers across multiple strategic locations</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* World Map */}
            <div className="relative">
              <div
                className="w-full h-96 bg-cover bg-center rounded-xl relative"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20world%20map%20illustration%20with%20subtle%20grid%20lines%2C%20professional%20dark%20navy%20blue%20background%2C%20minimalist%20geographic%20visualization%20with%20continent%20outlines%20in%20light%20gray%2C%20corporate%20style%20global%20connectivity%20design%2C%20elegant%20world%20geography%20with%20clean%20modern%20aesthetics%20and%20soft%20lighting&width=600&height=400&seq=worldmap002&orientation=landscape')`
                }}
              >
                {/* Location Markers */}
                <div className="absolute inset-0">
                  {/* Mumbai Marker */}
                  <div className="absolute" style={{ top: '45%', left: '65%' }}>
                    <div className="relative">
                      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="absolute -top-8 -left-8 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        Mumbai
                      </div>
                    </div>
                  </div>

                  {/* Noida Marker */}
                  <div className="absolute" style={{ top: '38%', left: '67%' }}>
                    <div className="relative">
                      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="absolute -top-8 -left-6 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        Noida
                      </div>
                    </div>
                  </div>

                  {/* Singapore Marker */}
                  <div className="absolute" style={{ top: '62%', left: '72%' }}>
                    <div className="relative">
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="absolute -top-8 -left-8 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        Singapore
                      </div>
                    </div>
                  </div>

                  {/* Germany Marker */}
                  <div className="absolute" style={{ top: '28%', left: '48%' }}>
                    <div className="relative">
                      <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                      <div className="absolute -top-8 -left-10 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        Frankfurt
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">🇮🇳</div>
                  <h3 className="text-2xl font-semibold">India</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span><strong>Mumbai:</strong> AMD EPYC 7B13, AMD Turin, Ryzen 9 9900X</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span><strong>Noida:</strong> AMD EPYC 7B13, Ryzen 9 9900X</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-3">Optimized for Indian subcontinent and South Asia</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">🇩🇪</div>
                  <h3 className="text-2xl font-semibold">Germany - Frankfurt</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span>Ryzen 9 9900X</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-3">Built for low-latency across Europe</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">🇸🇬</div>
                  <h3 className="text-2xl font-semibold">Singapore</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span>AMD EPYC 7B13</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-3">Perfect gateway for Asia-Pacific region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on the foundation of reliability, innovation, and customer satisfaction
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0 mt-1">
                      <i className="ri-heart-3-line text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">Customer-First Approach</h3>
                      <p className="text-gray-600">We believe that every customer deserves exceptional service. From small gaming communities to large enterprises, we treat every client with the same level of dedication and support, ensuring their success is our success.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg flex-shrink-0 mt-1">
                      <i className="ri-leaf-line text-xl text-green-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">Sustainable Growth</h3>
                      <p className="text-gray-600">We're committed to sustainable practices in our data centers and operations. Our philosophy extends beyond just providing hosting - we're building a future where technology and environmental responsibility work hand in hand.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg flex-shrink-0 mt-1">
                      <i className="ri-rocket-2-line text-xl text-purple-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation & Excellence</h3>
                      <p className="text-gray-600">We constantly push the boundaries of what's possible in cloud hosting. By embracing cutting-edge technology and maintaining the highest standards, we deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="w-full h-96 bg-cover bg-center rounded-2xl relative"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Inspirational%20technology%20workspace%20with%20modern%20computers%2C%20collaborative%20team%20environment%2C%20bright%20natural%20lighting%20through%20large%20windows%2C%20professional%20atmosphere%20with%20diverse%20people%20working%20together%2C%20innovative%20tech%20company%20culture%20with%20clean%20minimalist%20design%20and%20motivational%20ambiance&width=600&height=400&seq=philosophy001&orientation=landscape')`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">Building the Future</h4>
                    <p className="text-gray-200">One server at a time, one customer at a time</p>
                  </div>
                </div>

                <div className="mt-8 bg-gray-50 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">💡</div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-900">Our Core Belief</h4>
                    <p className="text-gray-600 italic">
                      "Technology should empower dreams, not complicate them. We simplify the complex, making world-class hosting accessible to everyone, everywhere."
                    </p>
                    <div className="mt-4 text-sm text-gray-500">- SkyRain Cloud Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-300/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Choose your perfect hosting solution and launch your project today with our premium infrastructure
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up-delayed">
            <Link 
              href="/minecraft"
              className="group inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 hover:shadow-xl"
            >
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className="ri-gamepad-fill text-xl group-hover:rotate-12 transition-transform duration-300"></i>
              </div>
              Start Minecraft Hosting
            </Link>
            <Link 
              href="/vps"
              className="group inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer transform hover:scale-105 hover:shadow-xl"
            >
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className="ri-server-fill text-xl group-hover:rotate-12 transition-transform duration-300"></i>
              </div>
              Launch VPS Server
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
