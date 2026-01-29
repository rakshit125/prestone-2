'use client';

import React from 'react';
import { Truck, CheckCircle, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const DeliverySection = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
         {/* Main Container - Dark Premium Card */}
         <div className="relative rounded-[3rem] bg-[#111] dark:bg-[#050505] overflow-hidden min-h-[500px] flex items-center border border-white/10 shadow-2xl">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6B00]/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full p-8 md:p-16">
               
               {/* Text Content */}
               <div className="space-y-8 relative z-20">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#FF6B00] text-xs font-bold tracking-widest uppercase">
                    <Truck className="w-3 h-3" /> Mobile Sales & Delivery
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-[1.1]">
                    Can&apos;t make it <br/>to the store? <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-amber-500">We deliver!</span>
                  </h2>
                  
                  <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                    Get your order delivered right to your doorstep or job site. 
                    Same-day delivery available for orders placed before noon.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button className="px-8 py-4 bg-[#FF6B00] text-white font-bold rounded-full hover:bg-white hover:text-black transition-all shadow-[0_0_30px_-5px_rgba(255,107,0,0.4)]">
                      View Rates
                    </button>
                    <button className="px-8 py-4 glass-panel border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                      Delivery Policies
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center gap-6 text-sm text-gray-500 pt-4">
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B00]" /> Real-time tracking</span>
                    <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B00]" /> Insured Cargo</span>
                  </div>
               </div>
               
               {/* Visual - Floating Van */}
               <div className="relative h-full min-h-[400px] flex items-center justify-center lg:justify-end">
                   {/* Abstract Road/Platform */}
                   <div className="absolute bottom-10 right-10 w-[80%] h-4 bg-black/50 blur-xl rounded-[100%]" />
                   
                   <motion.div
                     initial={{ x: 50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="relative z-10 w-full max-w-[600px] transform lg:scale-125 lg:translate-x-12"
                   >
                     <img 
                       src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                       alt="Preston Delivery Fleet" 
                       className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] brightness-110 contrast-110"
                       loading="eager"
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.src = 'https://images.unsplash.com/photo-1601581875037-8b2c88c4e3c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
                       }}
                     />
                   </motion.div>

                   {/* Floating Glass Stats Card */}
                   <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-0 left-0 md:left-10 p-4 glass-panel bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center gap-4 z-20"
                   >
                      <div className="bg-[#FF6B00]/20 p-3 rounded-full text-[#FF6B00]">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Coverage Area</p>
                        <p className="font-bold text-white text-lg">Greater Ottawa</p>
                      </div>
                   </motion.div>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default DeliverySection;
