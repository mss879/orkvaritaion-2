'use client';

import { motion } from 'framer-motion';
import { Database, Mail, ShoppingCart, BarChart3, Bot, Brain, Zap, Layers, MessageSquare, Users } from 'lucide-react';

export function IntegrationAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Hub */}
      <motion.div 
        className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-orkestrate-crimson/50"
        animate={{ 
          boxShadow: ["0px 10px 30px rgba(235, 88, 37, 0.1)", "0px 10px 50px rgba(235, 88, 37, 0.3)", "0px 10px 30px rgba(235, 88, 37, 0.1)"] 
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Layers className="w-8 h-8 md:w-10 md:h-10 text-orkestrate-pulse" />
      </motion.div>

      {/* Orbiting Icons */}
      {[
        { Icon: Database, delay: 0, angle: 0 },
        { Icon: Mail, delay: 1, angle: 60 },
        { Icon: ShoppingCart, delay: 2, angle: 120 },
        { Icon: BarChart3, delay: 3, angle: 180 },
        { Icon: MessageSquare, delay: 4, angle: 240 },
        { Icon: Users, delay: 5, angle: 300 },
      ].map(({ Icon, angle }, index) => (
        <motion.div
          key={index}
          className="absolute w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orkestrate-crimson/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: Math.cos(angle * (Math.PI / 180)) * 85, // Reduced from 120 to 85 to fit mobile
            y: Math.sin(angle * (Math.PI / 180)) * 85,
          }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.1,
            ease: "backOut"
          }}
        >
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
        </motion.div>
      ))}
      
      {/* Connecting Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
        <circle cx="50%" cy="50%" r="85" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-orkestrate-core" />
      </svg>
    </div>
  );
}

export function AgentsAnimation() {
  return (
    <div className="relative w-full h-full p-4 md:p-8 flex flex-col justify-center gap-3 md:gap-4 overflow-hidden">
      {[
        { title: "Campaign Builder", status: "Generating...", color: "bg-orkestrate-pulse" },
        { title: "Audience Agent", status: "Optimizing", color: "bg-orkestrate-core" },
        { title: "Experiment Agent", status: "Running A/B", color: "bg-orkestrate-deep" },
      ].map((agent, index) => (
        <motion.div
          key={index}
          className="bg-white/80 backdrop-blur-md rounded-xl p-3 md:p-4 shadow-sm border border-white/50 flex items-center justify-between"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
        >
          <div className="flex items-center gap-2 md:gap-3">
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${agent.color} flex items-center justify-center text-white shadow-md`}>
              <Bot className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm md:text-base text-gray-900">{agent.title}</div>
              <div className="text-[10px] md:text-xs text-gray-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Active now
              </div>
            </div>
          </div>
          <div className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-gray-100 text-[10px] md:text-xs font-medium text-gray-600 border border-gray-200 whitespace-nowrap">
            {agent.status}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function IntelligenceAnimation() {
  return (
    <div className="relative w-full h-full flex items-end justify-center pb-8 md:pb-16 px-4 md:px-8 gap-2 md:gap-3">
      {[35, 60, 45, 80, 55, 90, 70].map((height, index) => (
        <motion.div
          key={index}
          className="w-full bg-gradient-to-t from-orkestrate-deep to-orkestrate-pulse rounded-t-lg relative group shadow-sm"
          initial={{ height: "5%" }}
          animate={{ height: `${height}%` }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "circOut" }}
        >
          <motion.div 
            className="absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 bg-white px-2 py-1 md:px-3 md:py-1.5 rounded-lg shadow-lg border border-orkestrate-crimson/50 text-[10px] md:text-xs font-bold text-orkestrate-deep opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10"
          >
            +{height}% ROI
            <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-b border-r border-orkestrate-crimson/50"></div>
          </motion.div>
        </motion.div>
      ))}
      
      {/* Floating Brain */}
      <motion.div 
        className="absolute top-8 md:top-12 right-4 md:right-12 bg-white/90 backdrop-blur-xl p-3 md:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/60"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex items-center gap-2 md:gap-3">
          <div className="p-1.5 md:p-2 bg-orkestrate-crimson/20 rounded-lg text-orkestrate-pulse">
            <Brain className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div>
            <div className="text-xs md:text-sm font-bold text-gray-900">Learning...</div>
            <div className="text-[10px] md:text-xs text-gray-500">Optimizing models</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
