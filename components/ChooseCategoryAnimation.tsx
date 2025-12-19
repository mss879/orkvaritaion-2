"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Shirt, Sparkles, Home, Utensils, Check, BarChart3, Zap } from 'lucide-react';

const ChooseCategoryAnimation = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setKey((prev) => prev + 1);
      }, 8000); // 8s loop
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[350px] bg-gradient-to-br from-orange-50/30 to-white flex flex-col items-center justify-center overflow-hidden p-6">
      {/* Background Grid */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.05 }}></div>

      <div className="relative z-10 w-full max-w-sm">
        <CategorySelectionSequence key={key} isActive={isInView} />
      </div>
    </div>
  );
};

const categories = [
  { id: 'beauty', label: 'Beauty', icon: Sparkles, color: 'text-pink-500', bg: 'bg-pink-50', border: 'border-pink-100' },
  { id: 'fashion', label: 'Fashion', icon: Shirt, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
  { id: 'home', label: 'Home', icon: Home, color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-100' },
  { id: 'food', label: 'Food', icon: Utensils, color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' },
];

const CategorySelectionSequence = ({ isActive }: { isActive: boolean }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setSelectedId(null);
      setModelLoaded(false);
      return;
    }

    // Sequence:
    // 0s: Show all
    // 1.5s: Select 'Fashion' (simulated click)
    // 2.0s: Load Model animation starts
    // 4.0s: Model Loaded complete
    
    const selectTimer = setTimeout(() => {
      setSelectedId('fashion');
    }, 1500);

    const loadTimer = setTimeout(() => {
      setModelLoaded(true);
    }, 2500);

    return () => {
      clearTimeout(selectTimer);
      clearTimeout(loadTimer);
    };
  }, [isActive]);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Header Text */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Select Industry</div>
        <div className="text-xs text-gray-400">Load pre-trained patterns</div>
      </motion.div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-2 gap-3 w-full">
        {categories.map((cat) => {
          const isSelected = selectedId === cat.id;
          const isOther = selectedId && !isSelected;

          return (
            <motion.div
              key={cat.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: isOther ? 0.4 : 1,
                scale: isSelected ? 1.05 : 1,
                borderColor: isSelected ? '#f97316' : 'rgba(229, 231, 235, 0.5)', // orange-500 vs gray-200
                backgroundColor: isSelected ? '#fff' : 'rgba(255, 255, 255, 0.6)'
              }}
              transition={{ duration: 0.4 }}
              className={`relative p-4 rounded-xl border shadow-sm backdrop-blur-sm flex flex-col items-center gap-2 cursor-default overflow-hidden ${cat.border}`}
            >
              {/* Selection Ring */}
              {isSelected && (
                <motion.div 
                  layoutId="selectionRing"
                  className="absolute inset-0 border-2 border-orange-500 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}

              <div className={`p-2 rounded-full ${cat.bg}`}>
                <cat.icon className={`w-5 h-5 ${cat.color}`} />
              </div>
              <span className="text-sm font-medium text-gray-700">{cat.label}</span>

              {/* Loading/Loaded State Overlay for Selected Item */}
              <AnimatePresence>
                {isSelected && modelLoaded && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="w-full mt-2 pt-2 border-t border-gray-100 flex flex-col gap-1"
                  >
                    <div className="flex items-center justify-between text-[10px] text-gray-500">
                      <span>Model</span>
                      <span className="text-green-600 font-bold flex items-center gap-1">
                        <Check className="w-3 h-3" /> Ready
                      </span>
                    </div>
                    {/* Simulated Data Pattern */}
                    <div className="h-8 w-full flex items-end justify-between gap-0.5 opacity-80">
                      {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: i * 0.05, duration: 0.4 }}
                          className="w-full bg-orange-400 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Status Indicator */}
      <motion.div 
        className="h-10 flex items-center justify-center"
        animate={{ opacity: selectedId ? 1 : 0 }}
      >
        {modelLoaded ? (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-100 shadow-sm"
          >
            <Zap className="w-4 h-4 fill-green-500" />
            <span className="text-xs font-bold">Instant Pattern Recognition Active</span>
          </motion.div>
        ) : (
          selectedId && (
            <div className="flex items-center gap-2 text-orange-600">
              <div className="w-4 h-4 border-2 border-orange-600 border-t-transparent rounded-full animate-spin" />
              <span className="text-xs font-medium">Loading Category Model...</span>
            </div>
          )
        )}
      </motion.div>

    </div>
  );
};

export default ChooseCategoryAnimation;