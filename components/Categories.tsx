'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES } from '@/lib/constants';

const Categories = () => {
  const [width, setWidth] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section id="shop" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-4xl p-8 md:p-12 overflow-hidden relative group/section border border-white/10 dark:border-white/5 shadow-2xl">
          {/* Layer 1: Dynamic Background Image (Bottom-most) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <AnimatePresence>
              {hoveredImage ? (
                <motion.div
                  key={hoveredImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={hoveredImage} 
                    alt="background" 
                    className="w-full h-full object-cover scale-110 saturate-[2]"
                  />
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gray-100 dark:bg-zinc-900"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Layer 2: Glass Effect (Blur and Tint overlaying the image) */}
          <div className="absolute inset-0 z-1 backdrop-blur-3xl saturate-[1.8] bg-white/40 dark:bg-black/60 border border-white/20 dark:border-white/10" />
          
          {/* Layer 3: Subtle Noise/Texture for realism */}
          <div className="absolute inset-0 z-2 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* Layer 4: Content (Top-most) */}
          <div className="relative z-10">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-display font-bold mb-2 text-gray-900 dark:text-white">Shop Departments</h2>
                <p className="text-gray-600 dark:text-gray-400">Explore our wide range of products for every project.</p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-gray-400">
                <span className="text-xs uppercase tracking-widest">Drag to explore</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="overflow-hidden">
              <motion.div ref={carouselRef} className="cursor-grab active:cursor-grabbing overflow-hidden">
                <motion.div 
                  drag="x" 
                  dragConstraints={{ right: 0, left: -width }}
                  whileTap={{ cursor: "grabbing" }}
                  className="flex gap-6"
                >
                  {CATEGORIES.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <motion.div 
                        key={cat.id}
                        onMouseEnter={() => setHoveredImage(cat.image)}
                        onMouseLeave={() => setHoveredImage(null)}
                        className="group relative h-[400px] min-w-[300px] md:min-w-[350px] rounded-[32px] overflow-hidden shadow-lg dark:shadow-none border border-white/20 dark:border-white/5 cursor-pointer"
                      >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <img 
                            src={cat.image} 
                            alt={cat.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{cat.name}</h3>
                            <p className="text-gray-300 text-sm flex items-center gap-2">
                              {cat.itemCount} Items In Stock
                              <span className="w-8 h-px bg-white/50 inline-block group-hover:w-16 transition-all" />
                            </p>
                          </div>
                        </div>
                        
                        {/* Glass Sheen */}
                        <div className="absolute -inset-full top-0 block transform -skew-x-12 bg-linear-to-r from-transparent to-white opacity-10 group-hover:animate-shine pointer-events-none" />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
