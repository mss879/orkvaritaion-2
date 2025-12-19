"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { CheckCircle2, MousePointer2, Rocket, CalendarClock, SlidersHorizontal } from 'lucide-react';

const ApproveLaunchAnimation = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setKey((prev) => prev + 1);
      }, 9000); // 9s loop
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[350px] bg-gradient-to-br from-orange-50/30 to-white flex flex-col items-center justify-center overflow-hidden p-6">
      {/* Background Grid */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.05 }}></div>

      <div className="relative z-10 w-full max-w-sm">
        <ApprovalSequence key={key} isActive={isInView} />
      </div>
    </div>
  );
};

const ApprovalSequence = ({ isActive }: { isActive: boolean }) => {
  const [step, setStep] = useState(0); // 0: Review, 1: Tweak, 2: Approved, 3: Launching
  const [budget, setBudget] = useState(50);

  useEffect(() => {
    if (!isActive) {
      setStep(0);
      setBudget(50);
      return;
    }

    // Sequence
    const t1 = setTimeout(() => setStep(1), 1500); // Start tweaking
    const t2 = setTimeout(() => setStep(2), 4000); // Click Approve
    const t3 = setTimeout(() => setStep(3), 5000); // Launch animation

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isActive]);

  // Animate budget slider during step 1
  useEffect(() => {
    if (step === 1) {
      const interval = setInterval(() => {
        setBudget(prev => Math.min(prev + 2, 100));
      }, 50);
      return () => clearInterval(interval);
    } else if (step === 0) {
      setBudget(50);
    }
  }, [step]);

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        {step < 3 ? (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-orange-50 p-4 border-b border-orange-100 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-xs font-bold text-orange-800 uppercase tracking-wide">Proposed Play</span>
              </div>
              <div className="text-[10px] text-orange-600 font-mono">ID: #8821</div>
            </div>

            {/* Card Body */}
            <div className="p-5 flex flex-col gap-5">
              <div>
                <h3 className="text-lg font-bold text-gray-800">Win Back Lapsing VIPs</h3>
                <p className="text-xs text-gray-500 mt-1">Target customers with AOV &gt; $150 who haven't purchased in 90 days.</p>
              </div>

              {/* Controls */}
              <div className="space-y-4">
                {/* Budget Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium text-gray-700">
                    <span className="flex items-center gap-1"><SlidersHorizontal className="w-3 h-3" /> Daily Budget</span>
                    <span>${budget * 5}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden relative">
                    <motion.div 
                      className="h-full bg-orange-500 rounded-full"
                      style={{ width: `${budget}%` }}
                    />
                  </div>
                </div>

                {/* Tone Selector (Static visual) */}
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-400">Friendly</div>
                  <div className="px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-200 text-xs text-orange-700 font-medium">Urgent</div>
                  <div className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-400">Exclusive</div>
                </div>
              </div>

              {/* Approve Button */}
              <motion.button
                animate={step === 2 ? { scale: 0.95, backgroundColor: "#16a34a" } : {}}
                className="w-full py-3 bg-gray-900 text-white rounded-xl text-sm font-bold shadow-lg shadow-gray-200 flex items-center justify-center gap-2 transition-colors"
              >
                {step === 2 ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Approved
                  </>
                ) : (
                  "Approve & Launch"
                )}
              </motion.button>
            </div>

            {/* Simulated Cursor */}
            <motion.div
              className="absolute pointer-events-none z-50"
              initial={{ x: 300, y: 300, opacity: 0 }}
              animate={[
                { x: 300, y: 300, opacity: 1 }, // Start
                { x: 200, y: 160, opacity: 1, transition: { duration: 1, delay: 0.5 } }, // Move to slider
                { x: 250, y: 160, opacity: 1, transition: { duration: 1.5 } }, // Drag slider
                { x: 180, y: 280, opacity: 1, transition: { duration: 0.8 } }, // Move to button
                { scale: 0.8, transition: { duration: 0.1 } }, // Click down
                { scale: 1, opacity: 0, transition: { duration: 0.2, delay: 0.2 } } // Click up & fade
              ]}
            >
              <MousePointer2 className="w-6 h-6 text-black fill-white drop-shadow-md" />
            </motion.div>

          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20 rounded-full" />
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border border-green-100 relative z-10">
                <Rocket className="w-10 h-10 text-green-500" />
              </div>
              {/* Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-400 rounded-full"
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{ 
                    x: Math.cos(i * 60 * Math.PI / 180) * 60, 
                    y: Math.sin(i * 60 * Math.PI / 180) * 60, 
                    opacity: 0 
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900">Campaigns Launched!</h3>
              <div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-500">
                <CalendarClock className="w-4 h-4" />
                <span>Scheduled for Today, 2:00 PM</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <div className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-100 font-medium">Email</div>
              <div className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-100 font-medium">SMS</div>
              <div className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-100 font-medium">Push</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ApproveLaunchAnimation;