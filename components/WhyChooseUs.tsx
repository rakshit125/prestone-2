'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '@/lib/constants';

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass-section rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF6B00]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Why Professionals Choose <span className="text-[#FF6B00]">Preston</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            For over 75 years, we&apos;ve been the backbone of Ottawa&apos;s construction and DIY community.
            Here is what sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-[#FF6B00]/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#FF6B00] group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7 text-[#FF6B00] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
