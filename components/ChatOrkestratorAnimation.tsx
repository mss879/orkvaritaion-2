"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { User, Sparkles, Users, GitFork, FlaskConical, Send } from 'lucide-react';

const ChatOrkestratorAnimation = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setKey((prev) => prev + 1);
      }, 12000); // 12s loop cycle
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[350px] bg-gradient-to-br from-orange-50/30 to-white flex flex-col items-center justify-center overflow-hidden p-6">
      {/* Background Grid */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.05 }}></div>

      {/* Chat Interface Container */}
      <div className="relative z-10 w-full max-w-sm bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 overflow-hidden flex flex-col h-[320px]">
        
        {/* Chat Header */}
        <div className="bg-white/80 border-b border-orange-100 p-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center border border-orange-200">
            <img src="/Favicon - Dark.png" alt="Orkestrate" className="w-5 h-5 object-contain" />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-800">Orkestrate AI</div>
            <div className="text-[10px] text-green-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Online
            </div>
          </div>
        </div>

        <ChatSequence key={key} isActive={isInView} />

      </div>
    </div>
  );
};

const ChatSequence = ({ isActive }: { isActive: boolean }) => {
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState<'typing' | 'sending' | 'sent'>('typing');
  const fullText = "Recover my lapsing VIP customers.";

  useEffect(() => {
    if (!isActive) {
      // Reset state when out of view
      setInputText("");
      setStatus('typing');
      return;
    }

    let i = 0;
    // Start typing after a short delay
    const startDelay = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (i <= fullText.length) {
          setInputText(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
          // Typing done, wait a bit then "send"
          setTimeout(() => {
            setStatus('sending');
            setTimeout(() => {
              setStatus('sent');
              setInputText("");
            }, 300); // Button press animation duration
          }, 600); // Pause before hitting send
        }
      }, 50); // Typing speed
      return () => clearInterval(typingInterval);
    }, 500);

    return () => clearTimeout(startDelay);
  }, [isActive]);

  return (
    <>
      {/* Chat Area */}
      <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden relative">
        <AnimatePresence>
          {status === 'sent' && (
            <motion.div 
              className="flex flex-col gap-4 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* User Message */}
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="self-end max-w-[85%]"
              >
                <div className="bg-orange-500 text-white text-xs sm:text-sm py-2 px-3 rounded-2xl rounded-tr-sm shadow-md">
                  {fullText}
                </div>
                <div className="text-[10px] text-gray-400 text-right mt-1 mr-1">Just now</div>
              </motion.div>

              {/* AI Processing / Response */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                className="self-start max-w-[95%] w-full"
              >
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-orange-50 rounded-full flex-shrink-0 flex items-center justify-center border border-orange-100 mt-1">
                    <Sparkles className="w-3 h-3 text-orange-500" />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="bg-white border border-gray-100 text-gray-700 text-xs sm:text-sm py-2 px-3 rounded-2xl rounded-tl-sm shadow-sm w-fit">
                      On it. I've generated a strategy for you:
                    </div>

                    {/* Generated Artifacts (The "Magic") */}
                    <div className="grid gap-2 mt-1">
                      
                      {/* Artifact 1: Cohort */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.0, duration: 0.3 }}
                        className="bg-white p-2 rounded-xl border border-orange-100 shadow-sm flex items-center gap-3"
                      >
                        <div className="bg-blue-50 p-1.5 rounded-lg">
                          <Users className="w-4 h-4 text-blue-500" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase">Cohort Created</div>
                          <div className="text-xs font-semibold text-gray-800">VIPs (Last Order &gt; 90d)</div>
                        </div>
                      </motion.div>

                      {/* Artifact 2: Journey */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 0.3 }}
                        className="bg-white p-2 rounded-xl border border-orange-100 shadow-sm flex items-center gap-3"
                      >
                        <div className="bg-purple-50 p-1.5 rounded-lg">
                          <GitFork className="w-4 h-4 text-purple-500" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase">Journey Mapped</div>
                          <div className="text-xs font-semibold text-gray-800">Email <span className="text-gray-300">→</span> Wait 2d <span className="text-gray-300">→</span> SMS</div>
                        </div>
                      </motion.div>

                      {/* Artifact 3: Experiment */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.0, duration: 0.3 }}
                        className="bg-white p-2 rounded-xl border border-orange-100 shadow-sm flex items-center gap-3"
                      >
                        <div className="bg-pink-50 p-1.5 rounded-lg">
                          <FlaskConical className="w-4 h-4 text-pink-500" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase">Experiment Live</div>
                          <div className="text-xs font-semibold text-gray-800">Offer: 15% vs 20% Off</div>
                        </div>
                      </motion.div>

                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="bg-white p-3 border-t border-gray-100 flex gap-2 items-center">
        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
          <User className="w-3 h-3 text-gray-400" />
        </div>
        <div className="flex-1 h-8 bg-gray-50 rounded-full border border-gray-100 px-3 flex items-center text-xs text-gray-600 relative overflow-hidden">
          {inputText}
          {status === 'typing' && (
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-4 bg-orange-500 ml-0.5 align-middle"
            />
          )}
          {inputText === "" && status === 'typing' && <span className="text-gray-300 absolute">Type a message...</span>}
        </div>
        <motion.div 
          animate={status === 'sending' ? { scale: 0.8 } : { scale: 1 }}
          className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${
            inputText.length > 0 ? 'bg-orange-500 shadow-orange-200' : 'bg-gray-200'
          }`}
        >
          <Send className="w-3 h-3 text-white ml-0.5" />
        </motion.div>
      </div>
    </>
  );
};

export default ChatOrkestratorAnimation;
