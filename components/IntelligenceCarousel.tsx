"use client";

import React, { useRef, useState, useCallback, memo } from 'react';
import { ArrowRight, Users, Zap, Eye, BellOff, ShoppingBag } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

type InsightCard = {
  title: string;
  metric: string;
  moneyTop: string;
  moneyBottom: string;
  body: string;
  cta: string;
  Icon: React.ComponentType<{ className?: string }>;
  dotClassName: string;
  pingClassName?: string;
};

const insightCards: ReadonlyArray<InsightCard> = [
    {
      title: 'High value lapsing',
      metric: '183 customers at risk',
      moneyTop: '$9.4k to $14.2k',
      moneyBottom: 'recoverable this month',
      body:
        'Customers who used to buy often and have gone quiet for over their regular time. Perfect for a sharp, respectful winback instead of another broad blast.',
      cta: 'Run this winback',
      Icon: Users,
      dotClassName: 'bg-orange-500',
      pingClassName: 'bg-orange-400',
    },
    {
      title: 'Ready to buy now',
      metric: '276 likely buyers',
      moneyTop: '$8.1k to $11.7k',
      moneyBottom: 'within 30 days',
      body:
        'People who browsed in a very similar pattern to those who bought but had strange cut offs. Ideal for a focused SKU lead nudge that feels timely, not spammy.',
      cta: 'Run this nudge',
      Icon: Zap,
      dotClassName: 'bg-orange-500',
      pingClassName: 'bg-orange-400',
    },
    {
      title: 'Overlooked buyers',
      metric: '7,000 Likely buyers',
      moneyTop: '$55.5k to $90.8k',
      moneyBottom: 'potential revenue',
      body:
        'Overlooked customers that aren’t in your chosen segment but have several attributes that relates to the overall campaign and content.',
      cta: 'Run this segment',
      Icon: Eye,
      dotClassName: 'bg-orange-500',
    },
    {
      title: 'Over-messaged VIPs',
      metric: '94 VIPs on the edge',
      moneyTop: 'Protect $3.2k',
      moneyBottom: 'in monthly margin',
      body:
        'Top spenders who have seen too many emails and ads this week. Orkestrate cools them off so they do not unsubscribe.',
      cta: 'Apply this guardrail',
      Icon: BellOff,
      dotClassName: 'bg-orange-500',
    },
    {
      title: 'Next best product',
      metric: '211 cross sell candidates',
      moneyTop: '$6.5k to $9.8k',
      moneyBottom: 'incremental revenue',
      body:
        'Customers who bought Product A and showed interest in Product B but never finished. Clean, relevant cross sell that feels like a helpful suggestion.',
      cta: 'Launch this cross sell',
      Icon: ShoppingBag,
      dotClassName: 'bg-orange-500',
    },
];

export default function IntelligenceCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  return (
    <section className="relative px-4 py-20 md:py-24 lg:py-28" aria-labelledby="intelligence-heading">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-xl -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_8rem)]" aria-hidden="true" />
        <div className="max-w-6xl mx-auto">
          <ScrollAnimationWrapper>
            <h2 id="intelligence-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Intelligence to
              <br />
              Drive your revenue 24/7
            </h2>

            <p className="mt-4 max-w-3xl text-base sm:text-lg text-gray-600 leading-relaxed">
              Orkestrate reads your orders, site behaviour and campaign data to surface
              where you are leaking revenue and where you can safely push harder.
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="mt-10 relative">
            {/* Left fade */}
            <div className="pointer-events-none absolute -left-4 top-0 bottom-8 w-24 z-20 bg-gradient-to-r from-white/90 to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute -right-4 top-0 bottom-8 w-24 z-20 bg-gradient-to-l from-white/90 to-transparent" />
            <div 
                ref={scrollRef}
                className={`-mx-4 px-4 overflow-x-auto no-scrollbar pb-8 relative cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
              <div className="relative">
                <div className="flex w-max gap-5 px-2 motion-safe:animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
                  {[...insightCards, ...insightCards].map((card, index) => (
                    <div
                      key={`${card.title}-${index}`}
                      className="w-[340px] sm:w-[380px] flex flex-col justify-between rounded-2xl border border-white/20 bg-white/90 backdrop-blur-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(232,98,51,0.15)] hover:border-orange-500/50 hover:-translate-y-1 group select-none"
                      aria-hidden={index >= insightCards.length}
                    >
                      <div>
                        <div className="flex items-start justify-between mb-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/55 text-[#DD3B2F] border border-white/50 group-hover:bg-[#DD3B2F] group-hover:text-white transition-colors duration-300">
                              <card.Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-gray-900">{card.title}</h4>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="relative flex h-2 w-2">
                                  {card.pingClassName ? (
                                    <span
                                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${card.pingClassName}`}
                                    />
                                  ) : null}
                                  <span className={`relative inline-flex rounded-full h-2 w-2 ${card.dotClassName}`} />
                                </span>
                                <p className="text-xs font-medium text-gray-500">{card.metric}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-5 rounded-xl bg-white/45 p-4 border border-white/45 group-hover:border-orange-100 transition-colors">
                          <p className="text-lg font-bold text-gray-900">{card.moneyTop}</p>
                          <p className="mt-0.5 text-sm font-medium text-gray-700">{card.moneyBottom}</p>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed mb-6">{card.body}</p>
                      </div>

                      <button className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-white border-2 border-gray-100 py-3 text-sm font-bold text-gray-900 transition-all hover:border-[#DD3B2F] hover:text-[#DD3B2F]">
                        {card.cta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="mt-12 text-center">
            <button className="inline-flex items-center justify-center rounded-2xl bg-[#DD3B2F] text-white font-bold px-8 py-5 text-base sm:text-lg hover:opacity-90 transition-opacity">
              Connect and try our intelligence layer
              <span className="ml-2 uppercase">FOR FREE</span>
            </button>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              All numbers update from your live data once you connect.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>
  );
}
