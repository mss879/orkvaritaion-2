'use client';

import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

type Category = {
  id: number;
  title: string;
  description: string;
  image: string;
  insight: string;
  number: string;
};

const categories: Category[] = [
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

const categoryTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
  mass: 0.8
};

const Card = memo(function Card({
  category,
  isActive,
  onActivate
}: {
  category: Category;
  isActive: boolean;
  onActivate: (id: number) => void;
}) {
  return (
    <motion.div
      layout
      onMouseEnter={() => onActivate(category.id)}
      className={cn(
        'relative overflow-hidden rounded-3xl p-6 md:p-8 cursor-pointer border border-white/60 transition-shadow duration-300 transform-gpu',
        isActive ? 'shadow-xl' : ''
      )}
      style={{
        background:
          'radial-gradient(92.09% 124.47% at 50% 99.24%, rgba(221, 226, 238, 0.40) 58.91%, rgba(187, 197, 221, 0.40) 100%)',
        backdropFilter: 'blur(20px) saturate(180%)',
        boxShadow:
          '0 8px 32px 0 rgba(17, 24, 39, 0.12), 0 2px 8px 0 rgba(17, 24, 39, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
        flexGrow: isActive ? 3 : 1,
        flexShrink: 1,
        flexBasis: 0,
        willChange: 'transform'
      }}
      transition={categoryTransition}
    >
      {/* Top edge highlight */}
      <div
        className="pointer-events-none absolute top-[2px] left-[10%] right-[10%] h-[1px]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)'
        }}
      />
      {/* Main glass reflection */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.4) 100%)',
          mixBlendMode: 'overlay'
        }}
      />
      {/* Secondary reflection layer */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)',
          mixBlendMode: 'soft-light'
        }}
      />
      {/* Glass texture noise */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-30"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          mixBlendMode: 'overlay'
        }}
      />
      {/* Frosted glass inset shadows */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          boxShadow:
            'inset 0 1px 0 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 0 rgba(255, 255, 255, 0.2), inset 1px 0 0 0 rgba(255, 255, 255, 0.3), inset -1px 0 0 0 rgba(255, 255, 255, 0.3)'
        }}
      />
      <div className="flex h-full gap-6 md:gap-8">
        {/* Text Content Column */}
        <div className="flex flex-col justify-between flex-1 min-w-0">
          {isActive && (
            <span className="text-xl font-medium text-gray-400">{category.number}</span>
          )}

          <div className={cn(
            "relative z-10 min-w-0 overflow-hidden",
            isActive ? "space-y-3" : "flex items-center justify-center h-full"
          )}>
            {isActive ? (
              <>
                <h3
                  className={cn(
                    'font-bold text-gray-900 leading-tight transition-all duration-300 break-normal [hyphens:none]',
                    'text-3xl md:text-4xl'
                  )}
                >
                  {category.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {category.description}
                </p>
              </>
            ) : (
              <h3
                className={cn(
                  'font-bold text-gray-900 leading-tight transition-all duration-300 break-normal [hyphens:none] overflow-hidden text-center',
                  'text-xl md:text-2xl [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]'
                )}
              >
                {category.title}
              </h3>
            )}
          </div>
        </div>

        {/* Image Column - Only visible when active */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative h-full w-1/2 rounded-2xl overflow-hidden hidden md:block shrink-0"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100/50" />
              <Image src={category.image} alt={category.title} fill className="object-contain p-4" />

              {/* Insight Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-white/50 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1 rounded-full bg-orkestrate-pulse/10 text-orkestrate-scarlet">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span className="text-[10px] font-bold uppercase text-orkestrate-pulse tracking-wider">
                    Insight
                  </span>
                </div>
                <p className="text-xs font-medium text-gray-900 leading-snug">{category.insight}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
});

export default function CategoryCards() {
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    // Preload category images so hover doesn't stall on first decode/network.
    // Keeps layout identical; this is purely a performance hint.
    for (const category of categories) {
      const img = new window.Image();
      img.decoding = 'async';
      img.src = category.image;
    }
  }, []);

  const onActivate = useCallback((id: number) => {
    setActiveId((prev) => (prev === id ? prev : id));
  }, []);

  const categoryList = useMemo(() => categories, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full h-[500px] lg:h-[400px]">
      {categoryList.map((category) => (
        <Card
          key={category.id}
          category={category}
          isActive={activeId === category.id}
          onActivate={onActivate}
        />
      ))}
      
      {/* View all link as 4th item in flex row */}
      <div className="relative rounded-3xl p-6 md:p-8 border border-white/60 flex items-center justify-center flex-1 min-w-0"
        style={{
          background: 'radial-gradient(92.09% 124.47% at 50% 99.24%, rgba(221, 226, 238, 0.40) 58.91%, rgba(187, 197, 221, 0.40) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          boxShadow: '0 8px 32px 0 rgba(17, 24, 39, 0.12), 0 2px 8px 0 rgba(17, 24, 39, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0
        }}
      >
        <a href="/contact" className="flex flex-col items-center gap-3 text-center group">
          <span className="text-xl md:text-2xl font-bold text-gray-900">Select from</span>
          <span className="text-3xl md:text-4xl font-bold text-orkestrate-pulse">40+ Categories</span>
          <svg className="h-6 w-6 text-orkestrate-pulse transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
