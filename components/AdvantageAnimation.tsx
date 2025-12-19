"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { User, Users, Zap, Lock, MousePointer2, Mail, MessageCircle, Bell, Star, Clock, Eye, Send, AlertCircle, Heart, ShoppingBag, Shirt, Glasses, Sun, MapPin, DollarSign, Tag, ArrowRight } from 'lucide-react';

const AdvantageAnimation = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const [mode, setMode] = useState<'manual' | 'orkestrate'>('manual');

  useEffect(() => {
    if (!isInView) {
      setMode('manual');
      return;
    }

    const interval = setInterval(() => {
      setMode(prev => prev === 'manual' ? 'orkestrate' : 'manual');
    }, 8000); // Switch every 8 seconds

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div ref={containerRef} className="relative w-full h-[500px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      {/* Header / Toggle Indicator */}
      <div className="relative z-10 flex justify-center pt-6 mb-2">
        <div className="bg-gray-100/80 backdrop-blur-md border border-gray-200 rounded-full p-1 flex gap-1 shadow-inner">
          <button 
            onClick={() => setMode('manual')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-500 ${mode === 'manual' ? 'bg-white text-slate-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Traditional Marketing
          </button>
          <button 
            onClick={() => setMode('orkestrate')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-500 ${mode === 'orkestrate' ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Orkestrate Agentic
          </button>
        </div>
      </div>

      {/* Main Visualization Area */}
      <div className="flex-1 relative flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {mode === 'manual' ? (
            <ManualMode key="manual" />
          ) : (
            <OrkestrateMode key="orkestrate" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const ManualMode = () => {
  return (
    <motion.div 
      className="relative w-full max-w-4xl h-full flex flex-col items-center justify-center bg-slate-50/50 rounded-xl"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Audience Definition */}
        <motion.div 
          className="bg-slate-200 text-slate-600 px-6 py-2 rounded-lg font-bold text-sm shadow-sm border border-slate-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          All Users
        </motion.div>

        {/* Connection Line */}
        <div className="h-6 w-0.5 bg-slate-300"></div>

        {/* Generic Card - Horizontal Layout */}
        <motion.div 
          className="bg-white p-4 rounded-xl shadow-xl border border-slate-200 w-[420px] flex items-center gap-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Generic Image (Left) */}
          <div className="w-32 h-32 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center border border-slate-100">
            <Shirt className="w-12 h-12 text-slate-300" />
          </div>

          {/* Generic Content (Right) */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="space-y-2 mb-3">
              <h3 className="text-base font-bold text-slate-900 leading-tight">Summer Collection is Here.</h3>
              <p className="text-slate-500 text-[10px] leading-relaxed">
                Shop our latest styles for the season. Check out what's new.
              </p>
            </div>

            {/* Generic Button */}
            <button className="w-full bg-emerald-600 text-white font-bold py-1.5 rounded text-[10px] hover:bg-emerald-700 transition-colors">
              Shop Now
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const OrkestrateMode = () => {
  // Symmetrical Layout: Center is (0,0) relative to the signals container
  const signals = [
    { id: 1, text: "Browsed Swimwear", icon: Eye, color: "bg-white text-orange-700 border-orange-100", delay: 0.4, x: -160, y: -40 },
    { id: 2, text: "Location: Miami", icon: MapPin, color: "bg-white text-orange-700 border-orange-100", delay: 0.6, x: 160, y: -40 },
    { id: 3, text: "Post Purchase: Sandals", icon: ShoppingBag, color: "bg-white text-orange-700 border-orange-100", delay: 0.8, x: -90, y: 20 },
    { id: 4, text: "Price Sensitivity: Medium", icon: DollarSign, color: "bg-white text-orange-700 border-orange-100", delay: 1.0, x: 90, y: 20 },
  ];

  return (
    <motion.div 
      className="relative w-full h-full flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#fdba74_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
      
      <div className="relative z-10 flex flex-col items-center gap-4">
        
        {/* 1. User Persona (Top) */}
        <motion.div 
          className="bg-white text-slate-800 px-5 py-2 rounded-full font-bold text-xs shadow-sm border border-slate-200 flex items-center gap-2 z-30"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="bg-orange-100 p-1 rounded-full"><User className="w-3 h-3 text-orange-600" /></div>
          User A (Sarah) <span className="text-slate-300 font-normal">|</span> <span className="text-orange-600">High Intent</span>
        </motion.div>

        {/* 2. Signals Processing Area (Middle) */}
        <div className="relative w-[500px] h-[100px]">
           {/* Central Spine */}
           <motion.div 
             className="absolute left-1/2 -translate-x-1/2 top-[-16px] w-0.5 h-[130px] bg-gradient-to-b from-slate-200 via-orange-300 to-orange-500 rounded-full"
             initial={{ scaleY: 0 }}
             animate={{ scaleY: 1 }}
             style={{ originY: 0 }}
             transition={{ duration: 0.5 }}
           />

           {/* Signals */}
           {signals.map((signal) => (
             <React.Fragment key={signal.id}>
               {/* Connector Line */}
               <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                 <motion.path
                   d={`M ${250 + signal.x} ${50 + signal.y} C ${250 + signal.x} ${110}, 250 ${50 + signal.y}, 250 110`}
                   fill="none"
                   stroke="#fdba74"
                   strokeWidth="1.5"
                   strokeOpacity="0.6"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ delay: signal.delay, duration: 0.4 }}
                 />
               </svg>

               {/* Signal Pill */}
               <motion.div
                 className={`absolute flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold border shadow-sm ${signal.color} z-20`}
                 style={{ left: 250 + signal.x, top: 50 + signal.y, transform: 'translate(-50%, -50%)' }}
                 initial={{ opacity: 0, scale: 0 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: signal.delay, type: "spring" }}
               >
                 <signal.icon className="w-3 h-3 text-orange-500" />
                 {signal.text}
               </motion.div>
             </React.Fragment>
           ))}
           
           {/* Convergence Node */}
           <motion.div 
             className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-md z-30"
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ delay: 1.2 }}
           >
             <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-75"></div>
           </motion.div>
        </div>

        {/* 3. The Result Card (Bottom) */}
        <motion.div 
          className="bg-white p-1 rounded-xl shadow-2xl border border-orange-100 w-[460px] relative z-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <div className="bg-gradient-to-br from-orange-50/30 to-white rounded-lg p-4 flex items-center gap-5">
            {/* Dynamic Product Grid (Left) */}
            <div className="w-28 h-28 flex-shrink-0 grid grid-cols-2 gap-1.5">
              <motion.div 
                className="col-span-2 h-[70px] bg-white rounded-lg flex items-center justify-center border border-orange-100 relative overflow-hidden shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
              >
                <Shirt className="w-8 h-8 text-orange-300" />
                <div className="absolute bottom-1 right-1 bg-orange-100 px-1.5 py-0.5 rounded text-[6px] font-bold text-orange-800">Sundress</div>
              </motion.div>
              <motion.div 
                className="h-9 bg-white rounded-lg flex items-center justify-center border border-orange-100 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
              >
                <Glasses className="w-4 h-4 text-amber-400" />
              </motion.div>
              <motion.div 
                className="h-9 bg-white rounded-lg flex items-center justify-center border border-orange-100 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
              >
                <ShoppingBag className="w-4 h-4 text-rose-300" />
              </motion.div>
            </div>

            {/* Personalized Copy (Right) */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-2 mb-3">
                <motion.h3 
                  className="text-sm font-bold text-slate-900 leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  Sarah, your beach look is ready.
                </motion.h3>
                <motion.p 
                  className="text-slate-500 text-[10px] leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9 }}
                >
                  Based on your recent <span className="bg-orange-100 text-orange-800 px-1 rounded font-medium">browsing</span>, 
                  we curated these <span className="bg-orange-100 text-orange-800 px-1 rounded font-medium">sundresses</span> for your Miami trip.
                </motion.p>
              </div>

              {/* CTA Button */}
              <motion.button 
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-2 rounded-lg text-[10px] hover:shadow-lg transition-all flex items-center justify-center gap-2"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 2.1, duration: 0.5 }}
              >
                <span className="whitespace-nowrap">Shop Your Curated Looks</span> <ArrowRight className="w-3 h-3" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdvantageAnimation;