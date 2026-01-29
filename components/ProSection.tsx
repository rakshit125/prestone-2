'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Percent } from 'lucide-react';

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors w-full md:w-80 cursor-default group">
    <div className="w-10 h-10 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-white">{title}</h4>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  </div>
);

const ProSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-black">
      {/* Background Image with Parallax Feel */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Hardware Background" 
          className="w-full h-full object-cover grayscale brightness-75 scale-105"
        />
        {/* Radial Gradient Overlay for focus */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
         <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            
            {/* Left Content */}
            <div className="max-w-2xl">
               <div className="inline-block mb-6">
                  <span className="py-2 px-4 rounded-lg border border-[#FF6B00]/50 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-bold tracking-widest uppercase backdrop-blur-md shadow-[0_0_20px_-5px_rgba(255,107,0,0.3)]">
                    Join The Club
                  </span>
               </div>
               
               <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-none">
                 Preston <span className="text-[#FF6B00]">PRO</span>
               </h2>
               
               <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 leading-relaxed">
                 Exclusive pricing, bulk discounts, and priority service designed for contractors who build the future.
               </p>

               <div className="flex flex-col sm:flex-row gap-4">
                 <button className="px-10 py-4 bg-[#FF6B00] text-white font-bold rounded-full hover:bg-white hover:text-[#FF6B00] transition-all shadow-[0_0_40px_-10px_rgba(255,107,0,0.5)] flex items-center justify-center gap-2 group">
                   Apply Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </button>
                 <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                   Learn More
                 </button>
               </div>
            </div>

            {/* Right Features Cards - Glass Cards */}
            <div className="grid gap-4 w-full md:w-auto">
               <FeatureCard 
                 icon={<Percent className="w-5 h-5" />} 
                 title="Bulk Discounts" 
                 desc="Save more on volume orders." 
               />
               <FeatureCard 
                 icon={<Zap className="w-5 h-5" />} 
                 title="Priority Checkout" 
                 desc="Skip the line with pro lanes." 
               />
               <FeatureCard 
                 icon={<ShieldCheck className="w-5 h-5" />} 
                 title="Extended Warranty" 
                 desc="Double protection on tools." 
               />
            </div>
         </div>
      </div>
    </section>
  );
};

export default ProSection;
