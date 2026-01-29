'use client';

import React from 'react';
import { ShoppingCart, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '@/lib/constants';
import { Product } from '@/lib/types';
import Link from 'next/link';

interface FeaturedProductsProps {
  onProductClick?: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onProductClick }) => {
  // Only show first 4 items for the featured section
  const featuredItems = PRODUCTS.slice(0, 4);

  const handleProductClick = (product: Product) => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  return (
    <section id="deals" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass-section rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#FF6B00]/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
           <div>
             <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[2px] bg-[#FF6B00]" />
                <span className="text-[#FF6B00] font-bold uppercase tracking-widest text-xs">Shop Favorites</span>
             </div>
             <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white">Trending <span className="text-[#FF6B00]">Now</span></h2>
           </div>
           
           <Link 
             href="/products"
             className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#FF6B00] transition-colors uppercase tracking-widest group"
           >
             View All Products
             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((product, idx) => (
            <motion.div 
              key={product.id} 
              onClick={() => handleProductClick(product)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group cursor-pointer glass-panel rounded-3xl overflow-hidden border border-gray-200/50 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Card Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                
                {product.isNew && (
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#FF6B00]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                    New
                  </div>
                )}
                
                {/* Actions Top Right */}
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                   <button 
                     onClick={(e) => { e.stopPropagation(); }}
                     className="w-10 h-10 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md flex items-center justify-center text-gray-900 dark:text-white shadow-lg hover:bg-[#FF6B00] hover:text-white transition-colors"
                   >
                      <Heart className="w-5 h-5" />
                   </button>
                   <button 
                     onClick={(e) => { e.stopPropagation(); }}
                     className="w-10 h-10 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md flex items-center justify-center text-gray-900 dark:text-white shadow-lg hover:bg-[#FF6B00] hover:text-white transition-colors"
                   >
                      <ShoppingCart className="w-5 h-5" />
                   </button>
                </div>

                {/* Image - Object Cover for Full Bleed */}
                <div className="absolute inset-0">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle gradient overlay for better text contrast if we wanted text inside */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </div>

              {/* Info */}
              <div className="p-4 bg-white/30 dark:bg-white/5 backdrop-blur-sm border-t border-gray-200/50 dark:border-white/5">
                <p className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider mb-1">{product.category}</p>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#FF6B00] transition-colors">{product.name}</h3>
                <div className="flex justify-between items-center">
                   <span className="text-xl font-display font-bold text-gray-900 dark:text-white">${product.price}</span>
                   <div className="flex text-yellow-500 text-xs gap-0.5">
                     {'★'.repeat(Math.floor(product.rating))}
                     <span className="text-gray-400 dark:text-gray-600 ml-1">({product.rating})</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
