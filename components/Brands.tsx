'use client';

import React from 'react';
import { BRANDS } from '@/lib/constants';

const Brands = () => {
  return (
    <section id="brands" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-section rounded-2xl py-8 px-6">
      <div className="mb-8 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-widest">Trusted by industry leaders</p>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-[scroll_30s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, index) => (
            <div key={`${brand}-${index}`} className="mx-12 flex items-center justify-center">
              <span className="text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-200 dark:from-white/20 dark:to-white/5 hover:from-gray-600 hover:to-gray-400 dark:hover:from-white/40 dark:hover:to-white/10 transition-colors cursor-default">
                {brand}
              </span>
            </div>
          ))}
        </div>
        
        {/* Fade Edges */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white/80 dark:from-black/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white/80 dark:from-black/50 to-transparent z-10 pointer-events-none" />
      </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
