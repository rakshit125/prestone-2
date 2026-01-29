'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Percent, Award, Snowflake, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Offer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
  discount?: string;
  icon: React.ReactNode;
  gradient: string;
}

const offers: Offer[] = [
  {
    id: '1',
    title: 'JANUARY CLEARANCE',
    subtitle: 'You\'re Gonna Want These Special Deals',
    description: 'Prepare to be amazed with these specially priced items! Score deep discounts on limited stock items while they last.',
    cta: 'SHOP NOW',
    ctaLink: '/products',
    discount: '73%',
    icon: <Percent className="w-20 h-20" />,
    gradient: 'from-yellow-400 via-yellow-500 to-orange-500'
  },
  {
    id: '2',
    title: 'PRESTON PRO',
    subtitle: 'A Preston PRO Account is Your Best Tool',
    description: 'When you register you\'ll get an instant 5% discount on all regular-priced items. You\'ll also earn points every time you shop!',
    cta: 'APPLY NOW',
    ctaLink: '#',
    discount: '5%',
    icon: <Award className="w-20 h-20" />,
    gradient: 'from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600'
  },
  {
    id: '3',
    title: 'WINTER ESSENTIALS',
    subtitle: 'Great Prices For Winter Survival Supplies',
    description: 'Make sure you\'re ready for the cold weather ahead. Our new January flyer is packed with essential winter must-haves.',
    cta: 'VIEW FLYER',
    ctaLink: '#',
    discount: 'NEW',
    icon: <Snowflake className="w-20 h-20" />,
    gradient: 'from-blue-100 via-blue-200 to-cyan-200 dark:from-blue-900 dark:via-blue-800 dark:to-cyan-900'
  }
];

const OffersSliderV2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % offers.length);
  };

  const currentOffer = offers[currentIndex];

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${currentOffer.gradient}`}
        >
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center py-16">
            <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
              {/* Left Content - 7 columns */}
              <div className="lg:col-span-7 space-y-6 z-10">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-black dark:bg-white" />
                  <span className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">
                    {currentOffer.title}
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight text-black dark:text-white">
                  {currentOffer.subtitle}
                </h2>
                
                <p className="text-xl md:text-2xl leading-relaxed text-black/80 dark:text-white/80 max-w-2xl">
                  {currentOffer.description}
                </p>
                
                <div className="flex gap-4 pt-6">
                  <Link
                    href={currentOffer.ctaLink}
                    className="group px-10 py-5 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-[#FF6B00] dark:hover:bg-[#FF6B00] hover:text-white transition-all shadow-2xl flex items-center gap-2"
                  >
                    {currentOffer.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Visual - 5 columns */}
              <div className="lg:col-span-5 relative h-full flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  {/* Discount Badge */}
                  {currentOffer.discount && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="absolute -top-10 -right-10 z-20"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-black dark:bg-white rounded-full blur-xl opacity-50" />
                        <div className="relative bg-black dark:bg-white text-white dark:text-black w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white dark:border-gray-800">
                          <span className="text-xs font-bold uppercase tracking-wider">SAVE</span>
                          <span className="text-4xl font-display font-bold">{currentOffer.discount}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Icon Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="relative z-10"
                  >
                    <div className="absolute inset-0 bg-black/20 dark:bg-white/20 rounded-full blur-3xl scale-150" />
                    <div className="relative bg-black/90 dark:bg-white/90 backdrop-blur-md p-16 rounded-full text-white dark:text-black shadow-2xl border-4 border-white/20 dark:border-black/20">
                      {currentOffer.icon}
                    </div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-black/10 dark:bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 dark:bg-white/10 rounded-full blur-3xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full shadow-xl hover:bg-white dark:hover:bg-gray-800 transition-all hover:scale-110"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full shadow-xl hover:bg-white dark:hover:bg-gray-800 transition-all hover:scale-110"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-black dark:bg-white w-8'
                : 'bg-black/30 dark:bg-white/30 w-2 hover:bg-black/50 dark:hover:bg-white/50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default OffersSliderV2;
