'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Percent, Award, Snowflake } from 'lucide-react';
import Link from 'next/link';

interface Offer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  icon: React.ReactNode;
  badge?: string;
  badgeColor?: string;
}

const offers: Offer[] = [
  {
    id: '1',
    title: 'January Clearance',
    subtitle: 'You\'re Gonna Want These Special Deals',
    description: 'Prepare to be amazed with these specially priced items! Score deep discounts on limited stock items while they last. Shop early for the best selection and save big before it\'s all gone.',
    cta: 'Shop Now',
    ctaLink: '/products',
    bgColor: 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500',
    textColor: 'text-black',
    accentColor: 'bg-black',
    icon: <Percent className="w-16 h-16" />,
    badge: 'SAVE UP TO 73%',
    badgeColor: 'bg-black text-white'
  },
  {
    id: '2',
    title: 'Preston PRO Account',
    subtitle: 'A Preston PRO Account is Your Best Tool',
    description: 'When you register you\'ll get an instant 5% discount on all regular-priced items. You\'ll also earn points every time you shop which you can redeem for savings on future purchases!',
    cta: 'Apply Now',
    ctaLink: '#',
    bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800',
    textColor: 'text-gray-900 dark:text-white',
    accentColor: 'bg-[#FF6B00]',
    icon: <Award className="w-16 h-16" />,
    badge: '5% INSTANT DISCOUNT',
    badgeColor: 'bg-[#FF6B00] text-white'
  },
  {
    id: '3',
    title: 'Winter Survival Supplies',
    subtitle: 'Great Prices For Winter Survival Supplies',
    description: 'Make sure you\'re ready for the cold weather ahead. Our new January flyer is packed with essential winter must-haves to help you stay warm, safe, and comfortable through the season.',
    cta: 'View Flyer',
    ctaLink: '#',
    bgColor: 'bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900',
    textColor: 'text-gray-900 dark:text-white',
    accentColor: 'bg-[#FF6B00]',
    icon: <Snowflake className="w-16 h-16" />,
    badge: 'JANUARY 2026',
    badgeColor: 'bg-white text-gray-900 dark:bg-gray-800 dark:text-white'
  }
];

const OffersSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % offers.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % offers.length);
  };

  const currentOffer = offers[currentIndex];

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className={`absolute inset-0 ${currentOffer.bgColor} ${currentOffer.textColor}`}
        >
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left Content */}
              <div className="space-y-6 z-10">
                {currentOffer.badge && (
                  <div className={`inline-block px-4 py-2 rounded-full ${currentOffer.badgeColor} text-sm font-bold uppercase tracking-wider shadow-lg`}>
                    {currentOffer.badge}
                  </div>
                )}
                
                <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                  {currentOffer.subtitle}
                </h2>
                
                <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-xl">
                  {currentOffer.description}
                </p>
                
                <div className="flex gap-4 pt-4">
                  <Link
                    href={currentOffer.ctaLink}
                    className={`px-8 py-4 ${currentOffer.accentColor} text-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl`}
                  >
                    {currentOffer.cta}
                  </Link>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative h-full flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className={`absolute inset-0 ${currentOffer.accentColor} opacity-20 rounded-full blur-3xl scale-150`} />
                  <div className="relative z-10 flex items-center justify-center">
                    <div className={`${currentOffer.accentColor} p-12 rounded-full text-white shadow-2xl`}>
                      {currentOffer.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white dark:bg-white w-8'
                : 'bg-white/50 dark:bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default OffersSlider;
