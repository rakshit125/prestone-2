'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Star, ShoppingCart, Heart, Share2, 
  ShieldCheck, Truck, RotateCcw, Plus, Minus, 
  ChevronDown, ChevronUp, Check, Info, Store, Package
} from 'lucide-react';
import { Product } from '@/lib/types';
import { PRODUCTS } from '@/lib/constants';
import { useRouter } from 'next/navigation';

interface ProductDetailsProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onProductClick }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews'>('desc');
  const router = useRouter();

  // Mock extended data based on reference
  const productMeta = {
    sku: `48-59-${product.id}81`,
    manufacturerId: `M18-${product.id}`,
    stock: 22,
    oldPrice: product.price * 1.2,
  };

  const specs = [
    { label: 'Brand', value: 'Premium Tools Co.' },
    { label: 'Model Number', value: productMeta.manufacturerId },
    { label: 'Warranty', value: '3 Years Limited' },
    { label: 'Weight', value: '4.5 lbs' },
    { label: 'Power Source', value: 'Cordless / Battery' },
    { label: 'Material', value: 'Industrial Grade Steel' },
  ];

  const reviews = [
    { id: 1, user: 'John D.', rating: 5, date: '2 days ago', comment: 'Absolutely game changing tool. The build quality is exceptional.' },
    { id: 2, user: 'Sarah M.', rating: 4, date: '1 week ago', comment: 'Great performance, though the battery life could be slightly better.' },
    { id: 3, user: 'Mike R.', rating: 5, date: '2 weeks ago', comment: 'Worth every penny. Professional grade equipment.' },
  ];

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen pt-32 pb-12 bg-gray-50 dark:bg-[#050505] relative overflow-hidden">
      
      {/* Intense Background Glows for Glass Effect */}
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#FF6B00]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[500px] left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <button 
          onClick={() => router.push('/products')}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#FF6B00] mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Browse
        </button>

        {/* Main Product Layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left: Images (Span 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 flex gap-4 h-[500px] md:h-[600px]"
          >
            {/* Vertical Thumbnails */}
            <div className="hidden md:flex flex-col gap-3 w-20 overflow-y-auto no-scrollbar py-1">
              {[product.image, product.image, product.image, product.image, product.image].map((img, i) => (
                <button 
                  key={i} 
                  className="aspect-square rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-[#FF6B00] transition-all bg-white dark:bg-white/5 p-1 flex-shrink-0"
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>

            {/* Main Image Container */}
            <div className="flex-1 rounded-[2rem] bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md shadow-xl relative group flex items-center justify-center p-8 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 z-10 relative"
              />
              
              {/* Image badges */}
              {product.isNew && (
                <div className="absolute top-6 left-6 px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider rounded shadow-lg z-20">
                  New Arrival
                </div>
              )}
              
              <button className="absolute top-6 right-6 p-3 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full text-gray-900 dark:text-white hover:text-[#FF6B00] transition-colors border border-gray-200 dark:border-white/10 z-20">
                <Heart className="w-5 h-5" />
              </button>
              
              {/* Radial gradient behind image */}
              <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: Info (Span 5) - High Glass Effect */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5"
          >
            <div className="h-full p-8 rounded-[2rem] bg-white/60 dark:bg-[#111]/60 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl flex flex-col relative overflow-hidden">
               {/* Shine effect on glass */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

               {/* SKU / Header */}
               <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] uppercase tracking-wider font-bold text-gray-500 mb-4">
                 <span>Store SKU: {productMeta.sku}</span>
                 <span className="w-px h-3 bg-gray-300 dark:bg-white/20" />
                 <span>Manuf. No: {productMeta.manufacturerId}</span>
               </div>

               <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                 {product.name}
               </h1>

               {/* Ratings */}
               <div className="flex items-center gap-3 mb-6">
                 <div className="flex text-[#FF6B00]">
                   {[...Array(5)].map((_, i) => (
                     <Star 
                       key={i} 
                       size={16} 
                       fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                       className={i < Math.floor(product.rating) ? "text-[#FF6B00]" : "text-gray-300 dark:text-gray-700"} 
                     />
                   ))}
                 </div>
                 <span className="text-sm font-medium text-gray-500 underline cursor-pointer hover:text-[#FF6B00]">
                   Write a review
                 </span>
               </div>

               {/* Short Desc */}
               <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed border-b border-gray-200 dark:border-white/10 pb-6">
                 The M18™ REDLITHIUM™ FORGE™ XC8.0 Starter Kit delivers HIGH OUTPUT™ 12.0 power in a smaller size and lighter weight design.
                 <button className="text-[#FF6B00] font-bold underline ml-1 text-xs uppercase">Read more</button>
               </p>

               {/* Price Block */}
               <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                     <span className="text-gray-400 line-through text-lg decoration-1">${productMeta.oldPrice.toFixed(2)}</span>
                     <span className="text-4xl font-bold text-red-600 dark:text-red-500">${product.price.toFixed(2)}</span>
                     <span className="text-[10px] font-bold text-red-600 bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded uppercase tracking-wide">
                       Save ${(productMeta.oldPrice - product.price).toFixed(2)}
                     </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                     or 4 payments of <span className="font-bold text-gray-900 dark:text-white">${(product.price / 4).toFixed(2)}</span> with Sezzle <Info size={12} />
                  </div>
               </div>

               {/* Stock & Delivery Info */}
               <div className="space-y-4 mb-8 text-sm">
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold">
                     <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                     {productMeta.stock} in Stock
                  </div>
                  
                  <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                     <Store className="w-5 h-5 flex-shrink-0" /> 
                     <div>
                       <span className="font-bold block">Free in-store pickup</span>
                       <span className="text-xs text-gray-500">Ready in 2 hours at Preston St.</span>
                     </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                     <Truck className="w-5 h-5 flex-shrink-0" /> 
                     <div>
                       <span className="block">Ship to me</span>
                       <a href="#" className="underline text-[#FF6B00] text-xs">View shipping policy</a>
                     </div>
                  </div>
               </div>

               {/* Add To Cart Actions */}
               <div className="mt-auto">
                 <div className="flex gap-4 mb-4">
                    <div className="flex items-center justify-between px-4 h-14 bg-white dark:bg-black/20 rounded-full border border-gray-200 dark:border-white/10 w-36 shadow-inner">
                       <button 
                         onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                         className="p-1 hover:text-[#FF6B00] transition-colors"
                       >
                         <Minus size={18} />
                       </button>
                       <span className="font-bold text-lg">{quantity}</span>
                       <button 
                         onClick={() => setQuantity(quantity + 1)} 
                         className="p-1 hover:text-[#FF6B00] transition-colors"
                       >
                         <Plus size={18} />
                       </button>
                    </div>
                    
                    <button className="flex-1 h-14 bg-[#0F3546] hover:bg-[#16485f] text-white font-bold rounded-full uppercase tracking-widest text-sm shadow-lg shadow-[#0F3546]/30 transition-all flex items-center justify-center gap-2">
                       Add to Cart
                    </button>
                 </div>
                 
                 <button className="w-full text-center text-xs text-gray-500 hover:text-[#FF6B00] underline decoration-dashed">
                    Request a Bulk Order Quote
                 </button>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs (Description, Specs, etc) */}
        <div className="mb-20">
           {/* Tab Header */}
           <div className="flex overflow-x-auto border-b border-gray-200 dark:border-white/10 mb-8 no-scrollbar bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-t-2xl px-2">
             {['desc', 'specs', 'reviews'].map((tab) => (
               <button
                 key={tab}
                 onClick={() => setActiveTab(tab as any)}
                 className={`flex-1 min-w-[120px] px-8 py-5 font-bold text-xs md:text-sm tracking-widest uppercase transition-all border-b-2 whitespace-nowrap ${
                   activeTab === tab 
                     ? 'border-[#FF6B00] text-[#FF6B00] bg-white/40 dark:bg-white/5' 
                     : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                 }`}
               >
                 {tab === 'desc' ? 'Description' : tab === 'specs' ? 'Specifications' : 'Reviews'}
               </button>
             ))}
           </div>

           <div className="min-h-[300px] p-2">
             {activeTab === 'desc' && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="prose dark:prose-invert max-w-none">
                 <div className="grid md:grid-cols-12 gap-12">
                   <div className="md:col-span-8">
                     <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">Product Description</h3>
                     <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                       The M18™ REDLITHIUM™ FORGE™ XC8.0 Battery delivers HIGH OUTPUT™ 12.0 power in a smaller size and lighter weight design. 
                       REDLITHIUM™ FORGE™ are Milwaukee&apos;s most powerful, fastest charging, and longest life batteries. 
                       The REDLITHIUM™ FORGE™ XC8.0 delivers 8 amp hours of runtime, but with the same power as the M18™ REDLITHIUM™ HIGH OUTPUT™ HD12.0 in a smaller size and lighter weight design.
                     </p>
                     <ul className="space-y-4 mt-8">
                       {[
                         'Delivers HIGH OUTPUT™ 12.0 power in a smaller size and lighter weight',
                         'Longest life for the most recharges and best performance over the life of the pack',
                         'REDLITHIUM™ FORGE™ provides the most powerful, fastest charging, and longest life batteries',
                         'Best protection against jobsite, weather, and environmental conditions'
                       ].map((item, i) => (
                         <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                           <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6B00] flex-shrink-0" />
                           {item}
                         </li>
                       ))}
                     </ul>
                   </div>
                   <div className="md:col-span-4 space-y-6">
                      <div className="glass-panel p-6 rounded-2xl bg-[#FF6B00]/5 border-[#FF6B00]/20">
                         <h4 className="font-bold text-[#FF6B00] mb-2 flex items-center gap-2">
                           <ShieldCheck className="w-5 h-5" /> Pro Protection
                         </h4>
                         <p className="text-sm text-gray-600 dark:text-gray-400">
                           This tool features advanced overload protection and is resistant to jobsite oils and solvents.
                         </p>
                      </div>
                   </div>
                 </div>
               </motion.div>
             )}

             {activeTab === 'specs' && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                 <div className="rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden bg-white/50 dark:bg-white/5 backdrop-blur-sm">
                   <table className="w-full text-left">
                     <tbody>
                       {specs.map((spec, i) => (
                         <tr key={i} className={`border-b border-gray-200 dark:border-white/10 last:border-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors`}>
                           <th className="p-5 font-bold text-gray-900 dark:text-white w-1/3 bg-gray-50/50 dark:bg-black/20 uppercase text-xs tracking-wider">{spec.label}</th>
                           <td className="p-5 text-gray-600 dark:text-gray-300 font-mono text-sm">{spec.value}</td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               </motion.div>
             )}

             {activeTab === 'reviews' && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                 {reviews.map((review) => (
                   <div key={review.id} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
                     <div className="flex justify-between items-start mb-4">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 dark:from-white/10 dark:to-white/5 flex items-center justify-center text-gray-700 dark:text-white font-bold border border-white/10 shadow-inner">
                           {review.user.charAt(0)}
                         </div>
                         <div>
                           <p className="font-bold text-gray-900 dark:text-white">{review.user}</p>
                           <p className="text-xs text-gray-500">{review.date}</p>
                         </div>
                       </div>
                       <div className="flex text-yellow-400">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                         ))}
                       </div>
                     </div>
                     <p className="text-gray-600 dark:text-gray-400 italic">&quot;{review.comment}&quot;</p>
                   </div>
                 ))}
                 <button className="w-full py-4 border border-dashed border-gray-300 dark:border-white/20 rounded-xl text-gray-500 hover:text-[#FF6B00] hover:border-[#FF6B00] transition-colors">
                   Write a Review
                 </button>
               </motion.div>
             )}
           </div>
        </div>

        {/* You May Also Like - Glass Cards */}
        <div className="mb-20">
           <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-white/10 pb-4">You May Also Like...</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {relatedProducts.length > 0 ? relatedProducts.map((p) => (
                <div 
                  key={p.id} 
                  onClick={() => onProductClick(p)}
                  className="group cursor-pointer glass-panel rounded-3xl overflow-hidden border border-gray-200/50 dark:border-white/10 hover:border-[#FF6B00]/50 transition-all hover:shadow-xl shadow-sm"
                >
                  <div className="relative aspect-square overflow-hidden p-4">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white dark:bg-black/50 p-2 rounded-full shadow-lg">
                        <Heart className="w-4 h-4 text-gray-900 dark:text-white hover:text-[#FF6B00]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white/30 dark:bg-white/5 backdrop-blur-sm border-t border-gray-200/50 dark:border-white/5">
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-[#FF6B00] transition-colors line-clamp-2 h-10 mb-2">{p.name}</h3>
                  <div className="flex items-center justify-between">
                     <div className="flex flex-col">
                        <span className="text-xs text-gray-500 line-through">${(p.price * 1.2).toFixed(2)}</span>
                        <span className="text-lg font-bold text-gray-900 dark:text-white">${p.price}</span>
                     </div>
                     <button className="px-4 py-2 bg-white dark:bg-white/10 text-xs font-bold uppercase tracking-wider rounded-lg border border-gray-200 dark:border-white/10 hover:bg-[#FF6B00] hover:text-white hover:border-[#FF6B00] transition-all">
                       Add
                     </button>
                  </div>
                  </div>
                </div>
             )) : (
               <p className="text-gray-500">No similar products found.</p>
             )}
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
