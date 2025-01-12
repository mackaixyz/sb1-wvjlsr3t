import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AtomIcon, MenuIcon, XIcon, TwitterIcon } from 'lucide-react';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Logo */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] overflow-hidden">
        <AtomIcon className="w-[150vh] h-[150vh] text-white animate-[spin_60s_linear_infinite]" />
      </div>

      {/* Header */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <AtomIcon className="w-8 h-8 text-purple-500" />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 blur-2xl opacity-40" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                mack.ai
              </span>
            </Link>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/solutions" className="text-sm hover:text-purple-500 transition-colors">Solutions</Link>
              <Link to="/technology" className="text-sm hover:text-purple-500 transition-colors">Technology</Link>
              <Link to="/about" className="text-sm hover:text-purple-500 transition-colors">About</Link>
              <Link to="/contact" className="text-sm hover:text-purple-500 transition-colors">Contact</Link>
              <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-full transition-colors">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-16">
          <nav className="flex flex-col items-center gap-8 p-8">
            <Link to="/solutions" className="text-lg hover:text-purple-500 transition-colors">Solutions</Link>
            <Link to="/technology" className="text-lg hover:text-purple-500 transition-colors">Technology</Link>
            <Link to="/about" className="text-lg hover:text-purple-500 transition-colors">About</Link>
            <Link to="/contact" className="text-lg hover:text-purple-500 transition-colors">Contact</Link>
            <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full transition-colors">
              Get Started
            </button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-6 h-6">
                  <AtomIcon className="w-6 h-6 text-purple-500" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 blur-xl opacity-40" />
                </div>
                <span className="font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  mack.ai
                </span>
              </div>
              <p className="text-gray-400">
                Making AI automation effortless, one workflow at a time.
              </p>
            </div>
            
            {[
              {
                title: "Product",
                links: ["Features", "Solutions", "Pricing", "Updates"]
              },
              {
                title: "Company",
                links: ["About", "Careers", "Contact", "Press"]
              },
              {
                title: "Connect",
                links: ["Twitter", "Contact"]
              }
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 mack.ai. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com/McKenneyLLC" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}