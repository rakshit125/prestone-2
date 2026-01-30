'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ChevronDown, MapPin, Sparkles } from 'lucide-react';
import { CATEGORIES } from '@/lib/constants';

interface HeroProps {
  onSearchClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSearchClick }) => {
  const [isDeptOpen, setIsDeptOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const deptRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (deptRef.current && !deptRef.current.contains(event.target as Node)) {
        setIsDeptOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-12 flex items-center">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-orange/15 dark:bg-brand-orange/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Rotating badge – text ke upar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-orange rounded-full animate-[spin_12s_linear_infinite] p-2">
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
            <div className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-[3px] border-brand-orange p-1.5 overflow-hidden">
              <Image src="/img/image.png" alt="Preston Hardware" width={56} height={56} className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="space-y-6 w-full flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-7xl font-display font-bold leading-tight text-gray-900 dark:text-white">
            Everything for <span className="text-brand-orange">Your Home</span>
            <br />& Outdoor
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Ottawa&apos;s premier hardware store since 1945. Professional tools, expert advice, and premium quality.
          </p>

          {/* New Long Glass Search Bar - Modern Rectangular Look */}
          <div className="w-full max-w-6xl mt-12 mb-8 relative z-50">
            {/* Glow effect behind search bar */}
            <div className="absolute -inset-4 bg-linear-to-r from-brand-orange/10 via-blue-500/5 to-brand-orange/10 blur-3xl opacity-30 rounded-4xl pointer-events-none" />
            
            <div className="relative bg-white/40 dark:bg-white/5 backdrop-blur-2xl saturate-150 rounded-4xl p-6 md:p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-white/40 dark:border-white/10">
              <div className="flex flex-col md:flex-row items-end gap-6">
                
                {/* 1. Main Search Section */}
                <div className="flex-1 w-full flex flex-col gap-2 text-left">
                  <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-gray-500 dark:text-white/40 ml-4">
                    What can we help you find?
                  </label>
                  <div className="relative group w-full">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-orange transition-colors" />
                    <input
                      type="text"
                      placeholder="Search tools, hardware, brands..."
                      className="w-full bg-white/90 dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all text-lg font-medium shadow-sm"
                    />
                  </div>
                </div>

                {/* 2. Department Selector Section */}
                <div className="w-full md:w-auto flex flex-col gap-2 text-left" ref={deptRef}>
                  <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-gray-500 dark:text-white/40 ml-4">
                    Category
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => setIsDeptOpen(!isDeptOpen)}
                      className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/90 dark:bg-white/10 border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/15 transition-all text-gray-800 dark:text-gray-100 font-bold min-w-[240px] justify-between shadow-sm group"
                    >
                      <span className="truncate">{selectedDept}</span>
                      <ChevronDown className={`w-5 h-5 text-brand-orange transition-transform duration-300 ${isDeptOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isDeptOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          className="absolute top-full right-0 mt-3 w-80 bg-white/80 dark:bg-black/80 backdrop-blur-3xl shadow-[0_25px_50px_rgba(0,0,0,0.3)] border border-white/40 dark:border-white/10 p-3 z-100 rounded-3xl overflow-hidden"
                        >
                          <div className="max-h-[350px] overflow-y-auto no-scrollbar space-y-1">
                            <button
                              onClick={() => { setSelectedDept('All Departments'); setIsDeptOpen(false); }}
                              className={`w-full text-left px-5 py-3 rounded-xl transition-all text-sm font-bold flex items-center justify-between group/item ${
                                selectedDept === 'All Departments' 
                                ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
                                : 'hover:bg-brand-orange/10 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200'
                              }`}
                            >
                              All Departments
                              <ArrowRight className={`w-4 h-4 transition-all ${selectedDept === 'All Departments' ? 'opacity-100' : 'opacity-0 group-hover/item:opacity-100'}`} />
                            </button>
                            {CATEGORIES.map((cat) => (
                              <button
                                key={cat.id}
                                onClick={() => { setSelectedDept(cat.name); setIsDeptOpen(false); }}
                                className={`w-full text-left px-5 py-3 rounded-xl transition-all text-sm font-bold flex items-center justify-between group/item ${
                                  selectedDept === cat.name 
                                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
                                  : 'hover:bg-brand-orange/10 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200'
                                }`}
                              >
                                {cat.name}
                                <ArrowRight className={`w-4 h-4 transition-all ${selectedDept === cat.name ? 'opacity-100' : 'opacity-0 group-hover/item:opacity-100'}`} />
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* 3. Search Button Section */}
                <button 
                  className="bg-brand-orange text-white px-10 h-[62px] rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-[#e55f00] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-brand-orange/30 group w-full md:w-auto justify-center"
                >
                  Search
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Quick Suggestions below search */}
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <span className="text-gray-400 text-xs uppercase tracking-widest self-center mr-2">Trending:</span>
              {['Power Drills', 'Lawn Mowers', 'Paint', 'DeWalt'].map((tag) => (
                <button 
                  key={tag}
                  className="text-xs px-4 py-1.5 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-brand-orange/50 hover:text-brand-orange transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
