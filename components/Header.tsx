
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="https://static.readdy.ai/image/f71ceeda05e7a70bda1ea4c98999088c/d6a723df83f6af86d769d1e57cf701ca.png" 
              alt="SkyRain Cloud Logo" 
              className="w-8 h-8"
            />
            <div className="font-['Pacifico'] text-2xl text-blue-600">SkyRain Cloud</div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Home
            </Link>
            <Link href="/minecraft" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Minecraft Hosting
            </Link>
            <Link href="/vps" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              VPS Hosting
            </Link>
            <a 
              href="https://dsc.gg/skyrain-cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Discord Support
            </a>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/minecraft" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Minecraft Hosting
              </Link>
              <Link href="/vps" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                VPS Hosting
              </Link>
              <a 
                href="https://dsc.gg/skyrain-cloud" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center cursor-pointer"
              >
                Discord Support
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
