"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Check, ArrowDownToLine } from 'lucide-react';

const ConnectStoreAnimation = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCycle((prev) => prev + 1);
      }, 8000); // 8s loop
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[350px] bg-gradient-to-br from-orange-50/30 to-white flex flex-col items-center justify-center overflow-hidden p-6">
      {/* Background Grid */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.05 }}></div>

      <div className="relative z-10 w-full max-w-sm">
        <ConnectionSequence isActive={isInView} cycle={cycle} />
      </div>
    </div>
  );
};

const integrations = [
  { id: 'shopify', label: 'Shopify', imageSrc: '/shopify logo.webp', bg: 'bg-[#95BF47]/10', delay: 0.5, position: 'top-0 left-0' },
  { id: 'klaviyo', label: 'Klaviyo', imageSrc: '/Klaviyo logo.webp', bg: 'bg-white', delay: 0.7, position: 'top-0 right-0' },
  { id: 'attentive', label: 'Attentive', imageSrc: '/Attentive logo.webp', bg: 'bg-white', delay: 0.9, position: 'bottom-0 left-4' },
  { id: 'braze', label: 'Braze', imageSrc: '/Braze logo.webp', bg: 'bg-white', delay: 1.1, position: 'bottom-0 right-4' },
];

const ConnectionSequence = ({ isActive, cycle }: { isActive: boolean; cycle: number }) => {
  const [step, setStep] = useState(0); // 0: Init, 1: Connect, 2: Ingest, 3: Complete

  useEffect(() => {
    if (!isActive) {
      setStep(0);
      return;
    }

    const t1 = setTimeout(() => setStep(1), 500); // Show tools
    const t2 = setTimeout(() => setStep(2), 2000); // Start connecting/ingesting
    const t3 = setTimeout(() => setStep(3), 5500); // Complete

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isActive, cycle]);

  return (
    <div className="h-[380px] w-full relative flex items-center justify-center">
      
      {/* Central Hub (Orkestrate) */}
      <motion.div 
        className="relative z-20 w-24 h-24 bg-white rounded-2xl shadow-xl border border-orange-100 flex flex-col items-center justify-center gap-2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
          <img src="/Favicon - Dark.png" alt="Orkestrate" className="w-6 h-6 object-contain brightness-0 invert" />
        </div>
        <div className="text-[10px] font-bold text-gray-600">Orkestrate</div>
        
        {/* Status Indicator */}
        <div className="absolute -bottom-3 bg-white px-2 py-0.5 rounded-full border border-gray-100 shadow-sm flex items-center gap-1">
          {step === 3 ? (
            <>
              <Check className="w-3 h-3 text-green-500" />
              <span className="text-[10px] font-bold text-green-600">Connected</span>
            </>
          ) : step === 2 ? (
            <>
              <ArrowDownToLine className="w-3 h-3 text-orange-500 animate-bounce" />
              <span className="text-[10px] font-bold text-orange-600">Ingesting...</span>
            </>
          ) : (
            <span className="text-[10px] text-gray-400">Waiting...</span>
          )}
        </div>
      </motion.div>

      {/* Satellite Integrations */}
      <div className="absolute inset-0 w-full h-full">
        {integrations.map((tool, i) => {
          // Calculate positions in a circle
          const angle = (i * 360) / integrations.length - 45; // Start from top-leftish
          const radius = 140; // Distance from center
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <React.Fragment key={tool.id}>
              {/* Connection Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden md:block">
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${x}px)`}
                  y2={`calc(50% + ${y}px)`}
                  stroke="#fed7aa" // orange-200
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={step >= 2 ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                />
              </svg>

              {/* Tool Icon Card */}
              <motion.div
                className={`absolute w-20 h-20 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center gap-1 z-10`}
                style={{ 
                  left: `calc(50% + ${x}px - 40px)`, 
                  top: `calc(50% + ${y}px - 40px)` 
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={step >= 1 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: tool.delay, type: "spring", stiffness: 200 }}
              >
                <div className={`p-2 rounded-lg ${tool.bg} w-12 h-12 flex items-center justify-center`}>
                  <img src={tool.imageSrc} alt={tool.label} className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-medium text-gray-500">{tool.label}</span>
                
                {/* Success Checkmark */}
                <AnimatePresence>
                  {step === 3 && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center border border-white"
                    >
                      <Check className="w-2.5 h-2.5 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Floating Data Packets (Simulated with simple divs moving) */}
              {step === 2 && (
                <motion.div
                  className="absolute w-2 h-2 bg-orange-400 rounded-full z-10"
                  initial={{ 
                    left: `calc(50% + ${x}px)`, 
                    top: `calc(50% + ${y}px)`,
                    opacity: 1 
                  }}
                  animate={{ 
                    left: "50%", 
                    top: "50%",
                    opacity: 0
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity, 
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Data Ingestion Text Overlay */}
      <AnimatePresence>
        {step === 2 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-orange-100 shadow-lg z-30"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 items-end h-3">
                <motion.div animate={{ height: [4, 12, 6] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-orange-500 rounded-sm" />
                <motion.div animate={{ height: [8, 4, 10] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0.1 }} className="w-1 bg-orange-500 rounded-sm" />
                <motion.div animate={{ height: [6, 10, 5] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0.2 }} className="w-1 bg-orange-500 rounded-sm" />
              </div>
              <span className="text-xs font-semibold text-gray-700">Ingesting Orders & Campaigns...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ConnectStoreAnimation;