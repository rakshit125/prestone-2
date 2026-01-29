'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Heart, Filter, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';
import { Product } from '@/lib/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface AllProductsProps {
  onProductClick: (product: Product) => void;
}

const categories = ['All', 'Power Tools', 'Hand Tools & Accessories', 'Paint & Décor', 'Cabinet & Drawer Hardware', 'Faucets & Shower Heads', 'Windows & Doors'];

const AllProducts: React.FC<AllProductsProps> = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const router = useRouter();
  
  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory || (activeCategory === 'Grills & Outdoor' && p.category === 'Outdoor Living'));

  return (
    <div className="min-h-screen pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-section rounded-[2rem] p-8 md:p-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
           <div>
             <button 
               onClick={() => router.push('/')}
               className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#FF6B00] mb-4 transition-colors"
             >
               <ArrowLeft className="w-4 h-4" /> Back to Home
             </button>
             <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
               Our <span className="text-[#FF6B00]">Catalog</span>
             </h1>
           </div>
           
           <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white/5 transition-colors">
                 <Filter className="w-4 h-4" /> Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white/5 transition-colors">
                 Sort by: Featured <ChevronDown className="w-4 h-4" />
              </button>
           </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
           {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                 activeCategory === cat
                   ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/25'
                   : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Grid */}
        <motion.div 
           layout
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                onClick={() => onProductClick(product)}
                className="group cursor-pointer glass-panel rounded-3xl overflow-hidden border border-gray-200/50 dark:border-white/10 shadow-sm group-hover:shadow-xl transition-all duration-300"
              >
                {/* Card */}
                <div className="relative aspect-[4/5] overflow-hidden">
                   {product.isNew && (
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#FF6B00]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                      New
                    </div>
                   )}
                   
                   {/* Actions */}
                   <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                      <button 
                        onClick={(e) => e.stopPropagation()}
                        className="w-10 h-10 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md flex items-center justify-center text-gray-900 dark:text-white shadow-lg hover:bg-[#FF6B00] hover:text-white transition-colors"
                      >
                          <Heart className="w-5 h-5" />
                      </button>
                      <button 
                         onClick={(e) => e.stopPropagation()}
                         className="w-10 h-10 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md flex items-center justify-center text-gray-900 dark:text-white shadow-lg hover:bg-[#FF6B00] hover:text-white transition-colors"
                      >
                          <ShoppingCart className="w-5 h-5" />
                      </button>
                   </div>

                   {/* Image */}
                   <div className="absolute inset-0">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
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
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
             <p className="text-gray-500 dark:text-gray-400">No products found in this category.</p>
             <button 
               onClick={() => setActiveCategory('All')}
               className="mt-4 text-[#FF6B00] font-bold hover:underline"
             >
               Clear Filters
             </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
