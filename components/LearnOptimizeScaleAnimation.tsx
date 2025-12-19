"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const LearnOptimizeScaleAnimation = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Reset key when entering view to restart animations
      setKey(prev => prev + 1);
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[300px] bg-gradient-to-br from-orange-50/30 to-white flex flex-col items-center justify-center overflow-hidden p-4">
      {/* Background Grid */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.05 }}></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md">
        
        {/* Header Stats */}
        <div className="flex justify-center items-center mb-4">
          <motion.div 
            key={`header-${key}`}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-100 shadow-sm"
          >
            <TrendingUp className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-bold text-orange-600">Output: +400%</span>
          </motion.div>
        </div>

        {/* The "Multiplier" Visualization */}
        <div className="relative h-36 flex items-center justify-center">
          
          {/* Central "Core" - The Strategy */}
          <motion.div
            key={`core-${key}`}
            className="absolute z-20 bg-white rounded-2xl shadow-xl border border-orange-100 p-4 flex flex-col items-center gap-2 w-32"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-orange-50 shadow-sm">
              <img src="/Favicon - Dark.png" alt="Orkestrate" className="w-8 h-8 object-contain" />
            </div>
            <div className="text-sm font-bold text-gray-900 tracking-tight">Orkestrate</div>
          </motion.div>

          {/* Orbiting "Campaigns" - Scaling Effect */}
          {['Learn', 'Optimize', 'Scale', 'Learn', 'Optimize', 'Scale'].map((label, i) => (
            <motion.div
              key={`orbit-${i}-${key}`}
              className="absolute z-10"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={isInView ? { 
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 0.5],
                x: [0, (i % 2 === 0 ? 1 : -1) * (80 + Math.random() * 40)],
                y: [0, (i < 2 ? -1 : i > 3 ? 1 : 0) * (60 + Math.random() * 20)]
              } : { opacity: 0 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut"
              }}
            >
              <div className="bg-white px-3 py-2 rounded-lg shadow-md border border-orange-50 flex items-center justify-center min-w-[80px]">
                <span className="text-xs font-bold text-gray-700">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Graph Area */}
        <div className="mt-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 p-4 h-24 relative overflow-hidden">
          <div className="absolute inset-0 flex items-end justify-between px-4 pb-4 gap-2 opacity-30">
            {[...Array(12)].map((_, i) => {
              const height = 15 + (i * 7);
              
              return (
                <motion.div
                  key={`bar-${i}-${key}`}
                  className="w-full bg-orange-500 rounded-t-sm"
                  initial={{ height: "0%" }}
                  animate={isInView ? { height: ["0%", `${height}%`, `${height}%`] } : { height: "0%" }}
                  transition={{ 
                    duration: 4,
                    times: [0, 0.75, 1],
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              );
            })}
          </div>
          
          {/* Main Trend Line */}
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            <motion.path
              key={`line-${key}`}
              d="M0 70 C 50 70, 100 55, 150 40 C 200 25, 250 15, 400 5"
              fill="none"
              stroke="#f97316"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: [0, 1, 1] } : { pathLength: 0 }}
              transition={{ 
                duration: 4, 
                times: [0, 0.75, 1],
                ease: "linear", 
                repeat: Infinity 
              }}
            />
            {/* Area under curve */}
            <motion.path
              key={`area-${key}`}
              d="M0 70 C 50 70, 100 55, 150 40 C 200 25, 250 15, 400 5 L 400 100 L 0 100 Z"
              fill="url(#gradient)"
              opacity="0.2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: [0, 0.2, 0.2, 0] } : { opacity: 0 }}
              transition={{ 
                duration: 4,
                times: [0, 0.75, 0.95, 1],
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      </div>
    </div>
  );
};

export default LearnOptimizeScaleAnimation;
