"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import GlassPanel from "@/components/GlassPanel";
import { cn } from "@/lib/utils";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "unset";
      }, 700); // Fade out duration
    }, 2500); // Display duration

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-orange-50 transition-opacity duration-700 ease-in-out",
        isFading ? "opacity-0" : "opacity-100"
      )}
    >
      <GlassPanel className="p-12 rounded-[32px] flex flex-col items-center gap-8 min-w-[320px]">
        <div className="relative w-48 h-16">
          <Image
            src="/logo.png"
            alt="Orkestrate"
            fill
            className="object-contain"
            priority
            fetchPriority="high"
          />
        </div>
        
        <div className="w-48 h-1.5 bg-gray-200/50 rounded-full overflow-hidden relative">
          <div 
            className="absolute inset-y-0 bg-[#E0422D] rounded-full"
            style={{
                animation: 'indeterminate 1.5s infinite ease-in-out',
                width: '50%'
            }}
           />
        </div>
        
        <p className="text-sm font-medium text-gray-500 animate-pulse">
          Loading Experience...
        </p>
      </GlassPanel>
      
      <style jsx global>{`
        @keyframes indeterminate {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
}
