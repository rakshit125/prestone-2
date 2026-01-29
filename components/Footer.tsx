'use client';

import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-gray-200/50 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass-section rounded-[2rem] rounded-t-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-[#FF6B00]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/img/image.png"
                alt="Preston Hardware"
                width={160}
                height={44}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Premium tools for professionals who demand excellence. 
              Building the future, one project at a time.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-[#FF6B00] hover:text-white transition-all duration-300 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              {['New Arrivals', 'Best Sellers', 'On Sale', 'Blog', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-[#FF6B00] transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-[#FF6B00] transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Customer Care</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              {['Shipping Policy', 'Returns & Exchanges', 'Warranty Info', 'FAQ', 'Secure Payment'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-[#FF6B00] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Stay in the Loop</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Subscribe for exclusive deals and tool tips.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-600 focus:outline-none focus:border-[#FF6B00] w-full"
              />
              <button className="bg-[#FF6B00] p-2 rounded-lg text-white hover:bg-[#FF6B00]/80 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; 2024 Preston Hardware. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms of Service</a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
