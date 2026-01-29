'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OffersSlider from '@/components/OffersSlider';
import OffersSliderV2 from '@/components/OffersSliderV2';
import WhyChooseUs from '@/components/WhyChooseUs';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import Brands from '@/components/Brands';
import Footer from '@/components/Footer';
import AiSearch from '@/components/AiSearch';
import DeliverySection from '@/components/DeliverySection';
import ProSection from '@/components/ProSection';
import { Product } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/components/ThemeProvider';

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const handleProductClick = (product: Product) => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-[#FF6B00] selection:text-white transition-colors duration-300 relative ${theme === 'light' ? 'site-bg-gradient-light text-gray-900' : 'site-bg-gradient-dark text-gray-100'}`}>
      {/* Gradient orbs for depth */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FF6B00]/10 blur-[140px]" />
        <div className="absolute top-[30%] right-[-15%] w-[45%] h-[45%] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-[#FF6B00]/5 blur-[120px]" />
      </div>

      <Navbar 
        onSearchClick={() => setIsSearchOpen(true)} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main className="relative z-10 flex flex-col gap-0">
        <Hero onSearchClick={() => setIsSearchOpen(true)} />
        
        {/* Offers & Promotions Slider - Choose one design */}
        {/* Option 1: Modern Gradient Design */}
        {/* <OffersSlider /> */}
        
        {/* Option 2: Bold Minimalist Design - Uncomment to use this instead */}
        {/* <OffersSliderV2 /> */}
        
        <Brands />
        <WhyChooseUs />
        <Categories />
        
        {/* New Delivery Section */}
        <DeliverySection />
        
        <FeaturedProducts onProductClick={handleProductClick} />
        
        {/* New Pro Section */}
        <ProSection />
        
        {/* Restored Simple Offer Banner (Footer CTA) */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="relative rounded-3xl overflow-hidden p-12 flex items-center justify-between glass-panel border border-[#FF6B00]/20 dark:border-[#FF6B00]/20 shadow-xl dark:shadow-none bg-white/50 dark:bg-white/5">
            <div className="relative z-10 max-w-xl">
              <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-sm mb-2 block">Limited Time Offer</span>
              <h2 className="text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">Upgrade Your Toolkit Today</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Get 20% off all DeWalt power tools when you sign up for a Pro account.</p>
              <button className="bg-[#FF6B00] text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-lg hover:shadow-[#FF6B00]/20">
                Claim Offer
              </button>
            </div>
            {/* Abstract visual for banner */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#FF6B00]/10 to-transparent pointer-events-none" />
          </div>
        </section>
      </main>

      <Footer />
      <AiSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
