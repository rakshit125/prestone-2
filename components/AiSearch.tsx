'use client';

import React, { useState, useEffect } from 'react';
import { X, Mic, Sparkles, ArrowRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AiSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const AiSearch: React.FC<AiSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [onClose, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsThinking(true);
    // Simulate AI thinking
    setTimeout(() => {
      setIsThinking(false);
      setQuery('');
      // Ideally show results here
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 dark:bg-black/80 backdrop-blur-lg transition-opacity"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-[#FF6B00]/10"
        >
          {/* Animated Glow Border Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_340deg,rgba(255,107,0,0.5)_360deg)] animate-[spin_4s_linear_infinite] opacity-30" />
          </div>
          
          <div className="relative z-10 p-8 flex flex-col gap-8 bg-white/95 dark:bg-[#0a0a0a]/90 backdrop-blur-sm m-[1px] rounded-[23px]">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FF6B00] animate-pulse" />
                <span className="text-sm font-medium text-gray-500 dark:text-white/60 uppercase tracking-widest">
                  Preston AI Assistant
                </span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Thinking Visualizer (Centered) */}
            <div className="h-32 flex items-center justify-center relative">
              {isThinking ? (
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="w-3 bg-[#FF6B00] rounded-full"
                      animate={{
                        height: ['20px', '60px', '20px'],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-display font-medium text-gray-900 dark:text-white">
                    What can I help you find?
                  </h3>
                  <p className="text-gray-500 dark:text-white/40 text-sm">
                    Try &quot;Drills under $200&quot; or &quot;Best plumbing tools for beginners&quot;
                  </p>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400 dark:text-white/30 group-focus-within:text-[#FF6B00] transition-colors" />
              </div>
              <input
                type="text"
                autoFocus
                placeholder="Ask me anything..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl py-4 pl-12 pr-12 text-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#FF6B00]/50 transition-all"
              />
              <div className="absolute inset-y-0 right-4 flex items-center gap-2">
                <button type="button" className="p-2 hover:text-gray-900 dark:hover:text-white text-gray-400 dark:text-white/40 transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
                {query && (
                  <button type="submit" className="p-1.5 bg-[#FF6B00] rounded-lg text-white shadow-lg shadow-[#FF6B00]/20">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>

            {/* Quick Suggestions */}
            {!isThinking && (
              <div className="flex flex-wrap gap-2">
                {['Makita Impact Driver', 'Wrenches Set', 'Safety Gloves', 'Laser Measure'].map((tag) => (
                  <button 
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white hover:border-[#FF6B00]/30 transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AiSearch;
