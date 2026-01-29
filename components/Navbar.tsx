'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, Sun, Moon, ChevronDown, MapPin, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  onSearchClick: () => void;
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchClick, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShopClick = () => {
    router.push('/products');
    setMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    router.push('/');
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Info Bar – commented out */}
      {/* <div className={`fixed top-0 left-0 right-0 z-50 h-8 flex items-center justify-between px-6 text-[10px] sm:text-xs font-medium transition-all duration-300 ${
        scrolled ? 'bg-[#FF6B00] text-white translate-y-0' : 'bg-transparent text-gray-500 dark:text-gray-400 translate-y-2'
      }`}>
         <div className="flex items-center gap-4 max-w-7xl mx-auto w-full">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> 248 Preston St, Ottawa</span>
            <span className="hidden sm:flex items-center gap-1"><Phone className="w-3 h-3" /> 613-230-7166</span>
            <span className="ml-auto">Open Today: 7am - 6pm</span>
         </div>
      </div> */}

      <nav className="fixed top-4 left-0 right-0 z-40 px-4 md:px-6">
        <div className={`max-w-7xl mx-auto rounded-2xl h-16 glass-section ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="px-6 h-full flex items-center justify-between">
          {/* Logo & Departments */}
          <div className="flex items-center gap-8">
            <Link 
              href="/"
              className="flex items-center cursor-pointer group"
              onClick={handleHomeClick}
            >
              <Image
                src="/img/image.png"
                alt="Preston Hardware"
                width={180}
                height={48}
                className="h-10 w-auto object-contain "
                priority
              />
            </Link>

            {/* Desktop Departments Trigger */}
            <div className="hidden md:block relative group">
              <button 
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-sm font-bold text-gray-800 dark:text-gray-200"
                onMouseEnter={() => setDepartmentsOpen(true)}
                onMouseLeave={() => setDepartmentsOpen(false)}
              >
                Departments <ChevronDown className="w-4 h-4" />
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {departmentsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-[600px] p-6 rounded-2xl glass-panel shadow-2xl mt-2 grid grid-cols-2 gap-6 z-[99999] bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-2xl border border-gray-200 dark:border-white/10"
                    onMouseEnter={() => setDepartmentsOpen(true)}
                    onMouseLeave={() => setDepartmentsOpen(false)}
                  >
                    <div>
                      <h4 className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-4">Tools & Hardware</h4>
                      <ul className="space-y-3">
                        {['Power Tools', 'Hand Tools & Accessories', 'Cabinet & Drawer Hardware', 'Windows & Door Hardware', 'Safety'].map(item => (
                          <li 
                            key={item} 
                            onClick={handleShopClick}
                            className="text-gray-600 dark:text-gray-300 hover:text-[#FF6B00] cursor-pointer transition-colors text-sm font-medium"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-4">Home & Building</h4>
                      <ul className="space-y-3">
                        {['Paint & Décor', 'Plumbing', 'Electrical', 'Kitchen', 'Bath', 'Lighting & Ceiling Fans'].map(item => (
                          <li 
                            key={item} 
                            onClick={handleShopClick}
                            className="text-gray-600 dark:text-gray-300 hover:text-[#FF6B00] cursor-pointer transition-colors text-sm font-medium"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <button 
               onClick={handleShopClick}
               className="hidden md:block px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-sm font-bold text-gray-800 dark:text-gray-200"
            >
              Shop All
            </button>
          </div>

          {/* Desktop Search & Actions */}
          <div className="flex items-center gap-4">
             {/* Search Bar – commented out */}
             {/* <div 
               onClick={onSearchClick}
               className="hidden lg:flex items-center gap-3 w-96 h-10 px-4 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 hover:border-[#FF6B00]/50 transition-colors cursor-text group"
             >
               <Search className="w-4 h-4 text-gray-400 group-hover:text-[#FF6B00] transition-colors" />
               <span className="text-sm text-gray-400">Search for &quot;Benjamin Moore&quot;...</span>
               <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
             </div> */}

             <div className="flex items-center gap-2">
                {/* <button 
                  onClick={onSearchClick}
                  className="lg:hidden p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full text-gray-600 dark:text-gray-300"
                >
                  <Search className="w-5 h-5" />
                </button> */}

                <button 
                  onClick={toggleTheme}
                  className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full text-gray-600 dark:text-gray-300"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <button 
                  className="relative p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full text-gray-600 dark:text-gray-300 group"
                  onClick={handleShopClick}
                >
                  <ShoppingCart className="w-6 h-6 group-hover:text-[#FF6B00] transition-colors" />
                  <span className="absolute top-0 right-0 w-4 h-4 bg-[#FF6B00] text-[10px] font-bold flex items-center justify-center rounded-full text-white ring-2 ring-white dark:ring-[#050505]">
                    2
                  </span>
                </button>

                <button 
                  className="md:hidden p-2 text-gray-600 dark:text-gray-300"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </button>
             </div>
          </div>
        </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl md:hidden flex flex-col p-6 text-gray-900 dark:text-white overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-display font-bold">Departments</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 border border-gray-200 dark:border-white/10 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
               <div>
                  <h3 className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider mb-4">Shop</h3>
                  <div className="flex flex-col gap-4 text-lg font-light">
                    {['Shop All', 'Power Tools', 'Hand Tools & Accessories', 'Paint & Décor', 'Cabinet Hardware', 'Plumbing', 'Electrical'].map((item) => (
                      <a 
                        key={item} 
                        href="#" 
                        className="text-gray-600 dark:text-white/80 hover:text-[#FF6B00] transition-colors flex items-center justify-between"
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileMenuOpen(false);
                          handleShopClick();
                        }}
                      >
                        {item} <ArrowRight className="w-4 h-4 opacity-30" />
                      </a>
                    ))}
                  </div>
               </div>
               
               <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                  <h3 className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider mb-4">Services</h3>
                   <div className="flex flex-col gap-4 text-lg font-light">
                    {['Key Cutting', 'Paint Matching', 'Delivery', 'Screen Repair'].map((item) => (
                      <a 
                        key={item} 
                        href="#" 
                        className="text-gray-600 dark:text-white/80 hover:text-[#FF6B00] transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
