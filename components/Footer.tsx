
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-['Pacifico'] text-2xl text-blue-400 mb-4">SkyRain Cloud</div>
            <p className="text-gray-400 mb-4">
              Premium hosting services for Minecraft and VPS with global reach and reliable performance.
            </p>
            <div className="flex space-x-4">
              <a href="https://dsc.gg/skyrain-cloud" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer">
                <i className="ri-discord-fill text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <Link href="/minecraft" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Minecraft Hosting
              </Link>
              <Link href="/vps" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                VPS Hosting
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </Link>
              <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </Link>
              <a href="https://status.skyrain.cloud" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Status Page
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <a href="https://dsc.gg/skyrain-cloud" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Discord Support
              </a>
              <div className="text-gray-400">24/7 Available</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SkyRain Cloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
