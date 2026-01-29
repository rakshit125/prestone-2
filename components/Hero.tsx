'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';

interface HeroProps {
  onSearchClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSearchClick }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-12 flex items-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#FF6B00]/15 dark:bg-[#FF6B00]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

      <div className="max-w-3xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Rotating badge – text ke upar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#FF6B00] rounded-full animate-[spin_12s_linear_infinite] p-2">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path id="hero-circle" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                </defs>
                <text fontSize="8" fontWeight="bold" letterSpacing="1.1">
                  <textPath href="#hero-circle" className="fill-white">
                    OTTAWA&apos;S PREMIER HARDWARE STORE • EST. 1945 •
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-[3px] border-[#FF6B00] p-1.5 overflow-hidden">
              <Image src="/img/image.png" alt="Preston Hardware" width={56} height={56} className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Headline + Search + CTA – sab center */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="space-y-6 w-full flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight text-gray-900 dark:text-white">
            Everything for <span className="text-[#FF6B00]">Your Home</span>
            <br />& Outdoor
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
            Ottawa&apos;s premier hardware. Find what you need.
          </p>

          {/* Search */}
          <button
            type="button"
            onClick={onSearchClick}
            className="w-full max-w-md flex items-center justify-center gap-3 h-14 px-6 rounded-2xl border-2 border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md hover:border-[#FF6B00]/50 focus:border-[#FF6B00] focus:outline-none transition-all group"
          >
            <Search className="w-5 h-5 text-gray-400 group-hover:text-[#FF6B00] shrink-0" />
            <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base">Search products, brands, categories...</span>
          </button>

          <a
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B00] text-white font-bold rounded-full hover:bg-[#e55f00] transition-colors shadow-lg shadow-[#FF6B00]/25"
          >
            Shop Departments
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
