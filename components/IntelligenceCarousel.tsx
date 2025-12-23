"use client";

import React, { useRef, useState, useCallback, memo } from 'react';
import { ArrowRight, Users, Zap, Eye, BellOff, ShoppingBag, Clock, Mail, MessageSquare } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

type InsightCard = {
  title: string;
  metric?: string;
  moneyTop?: string;
  moneyBottom?: string;
  body: string;
  cta: string;
  Icon: React.ComponentType<{ className?: string }>;
  dotClassName: string;
  pingClassName?: string;
  type?: 'default' | 'nudge';
  waitTime?: string;
  stats?: { label: string; value: string }[];
};

export default function IntelligenceCarousel() {
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
    <section className="relative px-4 py-24 md:py-32 bg-[#F5F1ED]" aria-labelledby="intelligence-heading">
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
            <div className="pointer-events-none absolute -left-4 top-0 bottom-8 w-24 z-20 bg-gradient-to-r from-[#F5F1ED] to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute -right-4 top-0 bottom-8 w-24 z-20 bg-gradient-to-l from-[#F5F1ED] to-transparent" />
            <div 
                ref={scrollRef}
                className={`-mx-4 px-4 overflow-x-auto no-scrollbar pb-8 relative cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
              <div className="relative">
                <div className="flex w-max items-stretch gap-5 px-2 motion-safe:animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
                  {[...insightCards, ...insightCards].map((card, index) => (
                    <div
                      key={`${card.title}-${index}`}
                      className="w-[340px] sm:w-[380px] shrink-0 self-stretch group select-none"
                      aria-hidden={index >= insightCards.length}
                    >
                      <div className="h-full rounded-[36px] border border-gray-200/70 bg-gray-50/70 p-3 shadow-[0_18px_45px_rgba(17,24,39,0.06)] transition-transform duration-300 group-hover:-translate-y-0.5">
                        <div className="h-full rounded-[32px] border border-gray-200/70 bg-white p-6">
                          <div className="flex h-full flex-col justify-between">
                            {card.type === 'nudge' ? (
                              <>
                                <div>
                                  <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-[#DD3B2F]">
                                        <card.Icon className="h-5 w-5" />
                                      </div>
                                      <h4 className="text-base font-bold text-gray-900">{card.title}</h4>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <div className="p-2 rounded-xl bg-white border border-gray-200/70 text-gray-400">
                                        <Mail className="h-4 w-4" />
                                      </div>
                                      <div className="p-2 rounded-xl bg-white border border-gray-200/70 text-gray-400">
                                        <MessageSquare className="h-4 w-4" />
                                      </div>
                                    </div>
                                  </div>

                                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">{card.body}</p>

                                  <div className="my-5 h-px w-full bg-gray-100" />

                                  <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-1.5">
                                      <Clock className="h-4 w-4" />
                                      <span>Wait time: {card.waitTime}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="inline-flex h-2 w-2 rounded-full bg-gray-400" />
                                      <span>{card.metric}</span>
                                    </div>
                                  </div>

                                  <div className="mt-5 grid grid-cols-3 gap-3">
                                    {card.stats?.map((stat) => (
                                      <div key={stat.label} className="rounded-2xl bg-gray-50 px-3 py-4 text-center">
                                        <div className="text-xs text-gray-500">{stat.label}</div>
                                        <div className="mt-1 text-2xl font-bold text-gray-900">{stat.value}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="mt-6 flex justify-end">
                                  <button className="text-sm font-medium text-gray-400 hover:text-gray-700 transition-colors">
                                    {card.cta}
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div>
                                  <div className="flex items-start justify-between mb-5">
                                    <div className="flex items-center gap-3">
                                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-[#DD3B2F]">
                                        <card.Icon className="h-5 w-5" />
                                      </div>
                                      <div>
                                        <h4 className="text-base font-bold text-gray-900">{card.title}</h4>
                                        <div className="flex items-center gap-2 mt-0.5">
                                          <span className={`inline-flex h-2 w-2 rounded-full ${card.dotClassName}`} />
                                          <p className="text-xs font-medium text-gray-500">{card.metric}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mb-5 rounded-2xl bg-gray-50 px-4 py-4">
                                    <p className="text-lg font-bold text-gray-900">{card.moneyTop}</p>
                                    <p className="mt-0.5 text-sm font-medium text-gray-700">{card.moneyBottom}</p>
                                  </div>

                                  <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
                                </div>

                                <button className="group/btn mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-300">
                                  {card.cta}
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
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
