'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  {
    id: 1,
    title: 'Fashion & apparel',
    description: 'Spots fit, size and seasonality patterns so you send the right looks to the right closets.',
    image: '/fashion.png',
    insight: 'Your denim VIPs respond best to SMS drops on weekends.',
    number: '01'
  },
  {
    id: 2,
    title: 'Beauty & skincare',
    description: 'Understands replenishment cycles and routines, not just one-off orders.',
    image: '/skincare.png',
    insight: 'These 1,104 customers are due for a refill within 7 days.',
    number: '02'
  },
  {
    id: 3,
    title: 'Home & lifestyle',
    description: 'Reads browsing depth and consideration windows for higher ticket items.',
    image: '/home.png',
    insight: 'Visitors who viewed sofas 3+ times are 4x more likely to convert.',
    number: '03'
  }
];

export default function CategoryCards() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full h-[500px] lg:h-[400px]">
      {categories.map((category) => (
        <motion.div
          key={category.id}
          layout
          onMouseEnter={() => setActiveId(category.id)}
          className={cn(
            "relative rounded-3xl p-6 md:p-8 overflow-hidden cursor-pointer bg-white border border-gray-100 shadow-sm transition-colors duration-300",
            activeId === category.id ? "shadow-xl ring-1 ring-black/5" : "hover:bg-gray-50"
          )}
          animate={{
            flex: activeId === category.id ? 3 : 1,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            mass: 0.8
          }}
        >
          <div className="flex h-full gap-6 md:gap-8">
            {/* Text Content Column */}
            <div className="flex flex-col justify-between flex-1 min-w-0">
              <span className="text-xl font-medium text-gray-400">{category.number}</span>
              
              <div className="space-y-3 relative z-10">
                <motion.h3 
                  layout="position" 
                  className={cn(
                    "font-bold text-gray-900 leading-tight transition-all duration-300",
                    activeId === category.id ? "text-3xl md:text-4xl" : "text-xl md:text-2xl break-words hyphens-auto"
                  )}
                >
                  {category.title}
                </motion.h3>
                <motion.p 
                  layout="position" 
                  className="text-gray-500 leading-relaxed text-sm md:text-base line-clamp-3 md:line-clamp-none"
                >
                  {category.description}
                </motion.p>
              </div>
            </div>

            {/* Image Column - Only visible when active */}
            <AnimatePresence mode="popLayout">
              {activeId === category.id && (
                <motion.div 
                  initial={{ opacity: 0, width: 0, x: 20 }}
                  animate={{ opacity: 1, width: '50%', x: 0 }}
                  exit={{ opacity: 0, width: 0, x: 20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative h-full rounded-2xl overflow-hidden hidden md:block shrink-0"
                >
                   <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100/50" />
                   <Image 
                      src={category.image} 
                      alt={category.title} 
                      fill 
                      className="object-contain p-4" 
                   />
                   
                   {/* Insight Overlay */}
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2 }}
                     className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-white/50 shadow-sm"
                   >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1 rounded-full bg-orkestrate-pulse/10 text-orkestrate-scarlet">
                          <Sparkles className="w-3 h-3" />
                        </div>
                        <span className="text-[10px] font-bold uppercase text-orkestrate-pulse tracking-wider">Insight</span>
                      </div>
                      <p className="text-xs font-medium text-gray-900 leading-snug">{category.insight}</p>
                   </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
