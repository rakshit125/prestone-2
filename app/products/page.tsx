'use client';

import React from 'react';
import AllProducts from '@/components/AllProducts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AiSearch from '@/components/AiSearch';
import { useState } from 'react';
import { Product } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/components/ThemeProvider';

export default function ProductsPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const handleProductClick = (product: Product) => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-[#FF6B00] selection:text-white transition-colors duration-300 relative ${theme === 'light' ? 'site-bg-gradient-light text-gray-900' : 'site-bg-gradient-dark text-gray-100'}`}>
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
      
      <AllProducts onProductClick={handleProductClick} />
      
      <Footer />
      <AiSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
