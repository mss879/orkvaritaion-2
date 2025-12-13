'use client';

import { useState, useEffect, type ComponentType } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUp,
  AudioLines,
  BarChart3,
  BellOff,
  Box,
  CheckCircle2,
  Cpu,
  Database,
  Eye,
  Globe,
  Layout,
  Layers,
  Mail,
  MessageSquare,
  Mic,
  Paperclip,
  Play,
  Plug,
  Plus,
  Radio,
  Search,
  Server,
  ShoppingBag,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import LightRays from '@/components/LightRays';
import FloatingNavbar from '@/components/FloatingNavbar';
import HowItWorks from '@/components/HowItWorks';

type InsightCard = {
  title: string;
  metric: string;
  moneyTop: string;
  moneyBottom: string;
  body: string;
  cta: string;
  Icon: ComponentType<{ className?: string }>;
  dotClassName: string;
  pingClassName?: string;
};

const QUERIES = [
  'where am I are loosing revenue',
  'how can I optimise my campaigns for more revenue',
  'Where is my stack the weakest today',
  'What campaigns performed the best in the last year',
];

export default function Home() {
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(55);

  const insightCards = [
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
  ] satisfies ReadonlyArray<InsightCard>;

  useEffect(() => {
    const currentQuery = QUERIES[currentQueryIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentQuery.length) {
          setDisplayedText(currentQuery.slice(0, displayedText.length + 1));
          setTypingSpeed(55);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentQuery.slice(0, displayedText.length - 1));
          setTypingSpeed(25);
        } else {
          setIsDeleting(false);
          setCurrentQueryIndex((prev) => (prev + 1) % QUERIES.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentQueryIndex, typingSpeed]);

  return (
    <div className="bg-orange-50">
      <FloatingNavbar />

      <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 pt-28 pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-orange-50" />
          <LightRays
            raysOrigin="top-center"
            raysColor="#EE5D25"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            saturation={1}
            className="opacity-35"
          />
        </div>

        <div className="max-w-6xl w-full text-center space-y-8 relative z-10">
          <div className="space-y-5 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur">
                <span className="rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                  New
                </span>
                <span>Orkestrate Intelligence is live</span>
                <span className="text-foreground/50">→</span>
              </div>
            </div>

            <h2 className="text-foreground/70 text-sm sm:text-base font-medium tracking-wide">
              The Marketing Orchestration Platform
            </h2>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Marketing by <span className="text-orange-600">chatting</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-foreground/70 font-medium">
              Unifies your data, channels, and agents in one interface.
              <br />
              Marketing made simple and better with Orkestrate intelligence.
            </p>
          </div>

          <div className="mt-10 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-200">
            <div className="relative w-full max-w-[56rem] mx-auto">
              <div className="relative w-full">
                <div className="flex w-full flex-col items-center">
                  <div className="relative size-full w-full">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="group flex flex-col gap-2 p-3 w-full rounded-[28px] border border-white/10 bg-neutral-900 text-base shadow-xl transition-all duration-150 ease-in-out focus-within:border-white/20 hover:border-white/15 focus-within:hover:border-white/20"
                    >
                      <div className="relative flex flex-1 items-center px-1">
                        <textarea
                          className="flex w-full resize-none border-none bg-transparent px-2 py-2 text-[16px] leading-snug text-white/80 placeholder:text-white/50 focus-visible:outline-none md:text-base max-h-[max(35svh,5rem)]"
                          value={displayedText}
                          placeholder="Ask Orkestrate to create a prototype..."
                          readOnly
                          style={{ height: '80px' }}
                        />
                      </div>

                      <div className="flex gap-1 flex-wrap items-center">
                        <button
                          type="button"
                          aria-label="Add"
                          className="inline-flex items-center justify-center border border-white/10 bg-neutral-900 hover:bg-white/5 hover:border-white/15 gap-1.5 h-10 w-10 rounded-full p-0 text-white/60 hover:text-white md:h-8 md:w-8 transition-colors"
                        >
                          <Plus className="h-5 w-5" />
                        </button>

                        <button
                          type="button"
                          className="inline-flex items-center justify-center border border-white/10 bg-neutral-900 hover:bg-white/5 hover:border-white/15 py-2 h-10 gap-1.5 rounded-full px-3 text-white/60 hover:text-white md:h-8 md:w-fit transition-colors"
                        >
                          <Paperclip className="h-4 w-4" />
                          <span className="hidden md:flex">Attach</span>
                        </button>

                        <div className="ml-auto flex items-center gap-1">
                          <button
                            type="button"
                            aria-label="Chat"
                            className="items-center justify-center whitespace-nowrap text-sm border border-white/10 bg-neutral-900 flex h-10 gap-1.5 rounded-full px-3 py-0 font-normal text-white/60 hover:text-white hover:border-white/15 hover:bg-white/5 md:h-8 md:font-medium transition-colors"
                          >
                            <MessageSquare className="h-4 w-4" />
                            Chat
                          </button>

                          <button
                            type="button"
                            aria-label="Audio"
                            className="inline-flex items-center justify-center border border-white/10 bg-neutral-900 hover:bg-white/5 hover:border-white/15 h-10 w-10 rounded-full p-0 text-white/60 hover:text-white md:h-8 md:w-8 transition-colors"
                          >
                            <AudioLines className="h-5 w-5" />
                          </button>

                          <button
                            type="submit"
                            aria-label="Send"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 hover:bg-white/90 transition-colors md:h-8 md:w-8 motion-safe:animate-pulse"
                          >
                            <ArrowUp className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 md:py-24 lg:py-28 border-t border-gray-100 bg-white/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto">
          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Intelligence to
              <br />
              Drive your revenue 24/7
            </h3>

            <p className="mt-4 max-w-3xl text-base sm:text-lg text-gray-600 leading-relaxed">
              Orkestrate reads your orders, site behaviour and campaign data to surface
              where you are leaking revenue and where you can safely push harder.
            </p>
          </div>

          <div className="mt-10 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-150">
            <div className="-mx-4 px-4 overflow-hidden pb-8">
              <div className="relative">
                <div className="flex w-max gap-5 px-2 motion-safe:animate-marquee motion-reduce:animate-none">
                  {[...insightCards, ...insightCards].map((card, index) => (
                    <div
                      key={`${card.title}-${index}`}
                      className="w-[340px] sm:w-[380px] flex flex-col justify-between rounded-2xl border border-white/50 bg-white/55 backdrop-blur-md p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_16px_44px_rgba(0,0,0,0.12)] hover:border-orange-200 hover:-translate-y-1 group"
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
          </div>

          <div className="mt-12 text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-300">
            <button className="inline-flex items-center justify-center rounded-2xl bg-[#DD3B2F] text-white font-bold px-8 py-5 text-base sm:text-lg hover:opacity-90 transition-opacity">
              Connect and try our intelligence layer
              <span className="ml-2 uppercase">FOR FREE</span>
            </button>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              All numbers update from your live data once you connect.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative px-4 py-20 md:py-24 lg:py-28"
        data-framer-name="Aampe Advantage"
        id="aampe-advantage"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
            <p className="text-sm font-medium tracking-wide text-gray-700">Aampe Advantage</p>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight max-w-4xl mx-auto">
              <span className="block">Continuous Intelligence for</span>
              <span className="block">Personalization at Scale</span>
            </h2>
          </div>

          <div className="mt-12 lg:mt-14 grid gap-10 lg:gap-14 lg:grid-cols-[0.85fr,2.8fr,0.85fr] items-center">
            <div className="space-y-7 text-left motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-150">
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 mt-1 text-gray-700" fill="currentColor">
                  <path d="M 11.89 3.404 L 11.182 4.111 L 11.889 4.818 L 12.596 4.111 L 11.889 3.404 Z M 9.767 5.525 L 10.474 4.818 L 11.181 5.525 L 10.474 6.232 Z M 7.293 8 L 6.233 9.06 L 6.939 9.768 L 8 8.707 L 9.06 9.767 L 9.768 9.061 L 8.708 8 L 9.768 6.94 L 9.061 6.232 L 8 7.292 L 6.94 6.232 L 6.232 6.939 L 7.292 8 Z M 4.11 4.818 L 3.403 4.111 L 4.11 3.404 L 4.817 4.111 Z M 4.817 5.525 L 5.524 6.232 L 6.231 5.525 L 5.524 4.818 Z M 9.767 10.475 L 10.474 11.182 L 11.181 10.475 L 10.474 9.768 Z M 11.888 12.596 L 11.181 11.889 L 11.888 11.182 L 12.595 11.889 Z M 4.817 10.475 L 5.524 9.768 L 6.231 10.475 L 5.524 11.182 Z M 4.11 11.182 L 3.403 11.889 L 4.11 12.596 L 4.817 11.889 Z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Limited Segments</p>
                  <p className="mt-2 text-[12.5px] text-gray-700 leading-relaxed max-w-[220px]">
                    You manually create a handful of static segments to tailor messages
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 mt-1 text-gray-700" fill="currentColor">
                  <path d="M 11.89 3.404 L 11.182 4.111 L 11.889 4.818 L 12.596 4.111 L 11.889 3.404 Z M 9.767 5.525 L 10.474 4.818 L 11.181 5.525 L 10.474 6.232 Z M 7.293 8 L 6.233 9.06 L 6.939 9.768 L 8 8.707 L 9.06 9.767 L 9.768 9.061 L 8.708 8 L 9.768 6.94 L 9.061 6.232 L 8 7.292 L 6.94 6.232 L 6.232 6.939 L 7.292 8 Z M 4.11 4.818 L 3.403 4.111 L 4.11 3.404 L 4.817 4.111 Z M 4.817 5.525 L 5.524 6.232 L 6.231 5.525 L 5.524 4.818 Z M 9.767 10.475 L 10.474 11.182 L 11.181 10.475 L 10.474 9.768 Z M 11.888 12.596 L 11.181 11.889 L 11.888 11.182 L 12.595 11.889 Z M 4.817 10.475 L 5.524 9.768 L 6.231 10.475 L 5.524 11.182 Z M 4.11 11.182 L 3.403 11.889 L 4.11 12.596 L 4.817 11.889 Z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Restricted Content</p>
                  <p className="mt-2 text-[12.5px] text-gray-700 leading-relaxed max-w-[220px]">
                    You must stay on top of your users&apos; evolving language and preferences
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 mt-1 text-gray-700" fill="currentColor">
                  <path d="M 11.89 3.404 L 11.182 4.111 L 11.889 4.818 L 12.596 4.111 L 11.889 3.404 Z M 9.767 5.525 L 10.474 4.818 L 11.181 5.525 L 10.474 6.232 Z M 7.293 8 L 6.233 9.06 L 6.939 9.768 L 8 8.707 L 9.06 9.767 L 9.768 9.061 L 8.708 8 L 9.768 6.94 L 9.061 6.232 L 8 7.292 L 6.94 6.232 L 6.232 6.939 L 7.292 8 Z M 4.11 4.818 L 3.403 4.111 L 4.11 3.404 L 4.817 4.111 Z M 4.817 5.525 L 5.524 6.232 L 6.231 5.525 L 5.524 4.818 Z M 9.767 10.475 L 10.474 11.182 L 11.181 10.475 L 10.474 9.768 Z M 11.888 12.596 L 11.181 11.889 L 11.888 11.182 L 12.595 11.889 Z M 4.817 10.475 L 5.524 9.768 L 6.231 10.475 L 5.524 11.182 Z M 4.11 11.182 L 3.403 11.889 L 4.11 12.596 L 4.817 11.889 Z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Manual A/B tests</p>
                  <p className="mt-2 text-[12.5px] text-gray-700 leading-relaxed max-w-[220px]">
                    You run A/B tests one at a time on one or two specific variables
                  </p>
                </div>
              </div>
            </div>

            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-200">
              <div className="mx-auto max-w-[1100px] w-full">
                <Image
                  alt=""
                  src="https://framerusercontent.com/images/d90MNP2pZ1fMl0QoqDcHf98C0iU.webp?width=1920&height=1620"
                  width={1920}
                  height={1620}
                  sizes="(min-width: 1024px) 1100px, 100vw"
                  className="w-full rounded-2xl"
                  style={{ height: 'auto' }}
                />
              </div>
            </div>

            <div className="space-y-7 text-left motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-250">
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 mt-1 text-emerald-700" fill="currentColor">
                  <path d="M 11.449 4.798 L 12.247 4 L 12.954 4.707 L 12.156 5.505 Z M 9.053 7.193 L 10.65 5.597 L 11.357 6.304 L 9.761 7.9 L 9.054 7.193 Z M 3.753 9.168 L 5.416 10.831 L 8.256 7.991 L 8.962 8.699 L 5.769 11.892 L 5.416 12.246 L 5.062 11.892 L 3.045 9.875 Z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Individual Users</p>
                  <p className="mt-2 text-[12.5px] text-gray-700 leading-relaxed max-w-[220px]">
                    Agents identify and act on user patterns in real time, down to the individual level
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 mt-1 text-emerald-700" fill="currentColor">
                  <path d="M 11.449 4.798 L 12.247 4 L 12.954 4.707 L 12.156 5.505 Z M 9.053 7.193 L 10.65 5.597 L 11.357 6.304 L 9.761 7.9 L 9.054 7.193 Z M 3.753 9.168 L 5.416 10.831 L 8.256 7.991 L 8.962 8.699 L 5.769 11.892 L 5.416 12.246 L 5.062 11.892 L 3.045 9.875 Z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Limitless Creativity</p>
                  <p className="mt-2 text-[12.5px] text-gray-700 leading-relaxed max-w-[220px]">
                    Access a rich library of content variants without compromising brand integrity
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 mt-1 text-emerald-700" fill="currentColor">
                  <path d="M 11.449 4.798 L 12.247 4 L 12.954 4.707 L 12.156 5.505 Z M 9.053 7.193 L 10.65 5.597 L 11.357 6.304 L 9.761 7.9 L 9.054 7.193 Z M 3.753 9.168 L 5.416 10.831 L 8.256 7.991 L 8.962 8.699 L 5.769 11.892 L 5.416 12.246 L 5.062 11.892 L 3.045 9.875 Z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Ongoing Optimizations</p>
                  <p className="mt-2 text-[12.5px] text-gray-700 leading-relaxed max-w-[220px]">
                    Agents test thousands of variants in parallel constantly learning and optimizing for impact
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-18 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-300">
            <div>
              <div className="flex items-end justify-center gap-1">
                <p className="text-4xl sm:text-5xl font-semibold text-gray-900">128</p>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900/50">%</p>
              </div>
              <p className="mt-3 text-sm sm:text-base text-gray-800">Improvement in Engagement</p>
            </div>

            <div>
              <div className="flex items-end justify-center gap-1">
                <p className="text-4xl sm:text-5xl font-semibold text-gray-900">25</p>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900/50">%</p>
              </div>
              <p className="mt-3 text-sm sm:text-base text-gray-800">Increase in Incremental Purchases</p>
            </div>

            <div>
              <div className="flex items-end justify-center gap-1">
                <p className="text-4xl sm:text-5xl font-semibold text-gray-900">135</p>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900/50">%</p>
              </div>
              <p className="mt-3 text-sm sm:text-base text-gray-800">Increase in GMV after Onboarding</p>
            </div>

            <div>
              <div className="flex items-end justify-center gap-1">
                <p className="text-4xl sm:text-5xl font-semibold text-gray-900">&lt;8</p>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900/50">hrs</p>
              </div>
              <p className="mt-3 text-sm sm:text-base text-gray-800">Completed Integration &amp; Testing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 md:py-32 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
            <div className="max-w-2xl">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                <span className="relative inline-block h-[1.15em] overflow-hidden align-baseline leading-none">
                  <span className="block animate-category-rotate leading-none">
                    <span className="block h-[1.15em] leading-none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Fashion &amp; apparel</span>
                    <span className="block h-[1.15em] leading-none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Beauty &amp; skincare</span>
                    <span className="block h-[1.15em] leading-none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Home &amp; lifestyle</span>
                    <span className="block h-[1.15em] leading-none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Fashion &amp; apparel</span>
                  </span>
                </span>
              </h3>
            </div>
            <div className="max-w-md md:text-right">
              <p className="text-lg text-gray-500 font-medium">
                Category Based AI Models that know your industry's Ins &amp; Outs
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-orange-600 font-semibold mt-2 hover:gap-3 transition-all">
                View all 40+ categories <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 lg:gap-10 lg:grid-cols-3 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-150">
            {/* Fashion Card */}
            <div className="group relative flex flex-col justify-between rounded-[2.5rem] border border-gray-100 bg-white p-10 shadow-[0_2px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(221,59,47,0.1)]">
              <div className="relative z-10">
                <div className="mb-8 inline-flex p-4 rounded-2xl bg-orange-50/30 group-hover:bg-orange-50 transition-colors duration-500">
                  <Image src="/fashion.png" alt="Fashion" width={64} height={64} className="object-contain drop-shadow-sm" />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-gray-900">Fashion &amp; apparel</h4>
                <p className="text-lg leading-relaxed text-gray-500 mb-12">
                  Spots fit, size and seasonality patterns so you send the right looks to the right closets.
                </p>
              </div>
              
              {/* Floating Glass Insight */}
              <div className="relative mt-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                <div className="relative rounded-2xl bg-white border border-gray-100 p-5 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:border-orange-100/50">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-orange-100/50 text-orange-600">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600/90">Model Insight</span>
                  </div>
                  <p className="text-base font-medium text-gray-900 leading-snug">
                    “Your denim VIPs respond best to SMS drops on weekends.”
                  </p>
                </div>
              </div>
            </div>

            {/* Beauty Card */}
            <div className="group relative flex flex-col justify-between rounded-[2.5rem] border border-gray-100 bg-white p-10 shadow-[0_2px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(221,59,47,0.1)]">
              <div className="relative z-10">
                <div className="mb-8 inline-flex p-4 rounded-2xl bg-orange-50/30 group-hover:bg-orange-50 transition-colors duration-500">
                  <Image src="/skincare.png" alt="Beauty" width={64} height={64} className="object-contain drop-shadow-sm" />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-gray-900">Beauty &amp; skincare</h4>
                <p className="text-lg leading-relaxed text-gray-500 mb-12">
                  Understands replenishment cycles and routines, not just one-off orders.
                </p>
              </div>

              {/* Floating Glass Insight */}
              <div className="relative mt-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                <div className="relative rounded-2xl bg-white border border-gray-100 p-5 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:border-orange-100/50">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-orange-100/50 text-orange-600">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600/90">Model Insight</span>
                  </div>
                  <p className="text-base font-medium text-gray-900 leading-snug">
                    “These 1,104 customers are due for a refill within 7 days.”
                  </p>
                </div>
              </div>
            </div>

            {/* Home Card */}
            <div className="group relative flex flex-col justify-between rounded-[2.5rem] border border-gray-100 bg-white p-10 shadow-[0_2px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(221,59,47,0.1)]">
              <div className="relative z-10">
                <div className="mb-8 inline-flex p-4 rounded-2xl bg-orange-50/30 group-hover:bg-orange-50 transition-colors duration-500">
                  <Image src="/home.png" alt="Home" width={64} height={64} className="object-contain drop-shadow-sm" />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-gray-900">Home &amp; lifestyle</h4>
                <p className="text-lg leading-relaxed text-gray-500 mb-12">
                  Reads browsing depth and consideration windows for higher ticket items.
                </p>
              </div>

              {/* Floating Glass Insight */}
              <div className="relative mt-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                <div className="relative rounded-2xl bg-white border border-gray-100 p-5 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:border-orange-100/50">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-orange-100/50 text-orange-600">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600/90">Model Insight</span>
                  </div>
                  <p className="text-base font-medium text-gray-900 leading-snug">
                    "Visitors who viewed sofas 3+ times are 4x more likely to convert."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center border-t border-gray-100 pt-12 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-250">
            <p className="text-xl font-semibold text-gray-900">
              Choose from over 40 Unique Category Models that suit your brand
            </p>
            <p className="mt-3 text-gray-500">
              You would never hire a marketer from a random niche. Orkestrate is set up for your category.
            </p>
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="relative px-4 py-20 md:py-24 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 mb-16">
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Integrations</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Orkestrate your existing stack
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
              Orkestrate is simple, enterprise-ready, and integrates seamlessly—no long setup required
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button className="inline-flex items-center justify-center rounded-lg bg-[#DD3B2F] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#c42e23] transition-colors">
                Request an Integration
              </button>
              <a href="#" className="text-sm font-semibold text-[#DD3B2F] hover:text-[#c42e23] flex items-center gap-1">
                See all Integrations <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-8 items-stretch">
            {/* Left Column: Data Sources */}
            <div className="space-y-6">
              <div className="text-center motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-100">
                <h4 className="text-xs font-bold text-[#DD3B2F] uppercase tracking-wider mb-4">Data Sources</h4>
              </div>
              
              {/* CDPs */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow motion-safe:animate-in motion-safe:slide-in-from-left-8 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-200">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">Customer Data Platforms</h5>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Segment">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="mParticle">
                    <Box className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-xs">•••</span>
                  </div>
                </div>
              </div>

              {/* Data Warehouse */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow motion-safe:animate-in motion-safe:slide-in-from-left-8 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-300">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">Data Warehouse & Storage</h5>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Snowflake">
                    <Database className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="BigQuery">
                    <Server className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="S3">
                    <Box className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-xs">•••</span>
                  </div>
                </div>
              </div>

              {/* CMS */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow motion-safe:animate-in motion-safe:slide-in-from-left-8 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-500">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">Content Management Systems</h5>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Shopify">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Contentful">
                    <Layout className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="WordPress">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-xs">•••</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column: The Engine */}
            <div className="flex flex-col items-center justify-center relative py-8">
              {/* Connecting Lines (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-12 h-[2px] bg-gray-200 overflow-hidden -translate-x-full">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#DD3B2F] to-transparent animate-stream-x"></div>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-[2px] bg-gray-200 overflow-hidden translate-x-full">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#DD3B2F] to-transparent animate-stream-x-reverse"></div>
              </div>

              <div className="w-full max-w-xs space-y-4">
                {/* Ingestion */}
                <div className="space-y-2 motion-safe:animate-in motion-safe:slide-in-from-top-4 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-300">
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:border-orange-200 transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-[#DD3B2F]">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">Stream Ingestion API</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:border-orange-200 transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-[#DD3B2F]">
                      <Workflow className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">Batch Connectors</span>
                  </div>
                </div>

                {/* Core */}
                <div className="relative py-6 flex justify-center motion-safe:animate-in motion-safe:zoom-in-90 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-500">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-[2px] h-1/2 bg-gray-200 overflow-hidden relative">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-[#DD3B2F] to-transparent animate-stream-y"></div>
                    </div>
                    <div className="w-[2px] h-1/2 bg-gray-200 overflow-hidden relative">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-[#DD3B2F] to-transparent animate-stream-y-reverse"></div>
                    </div>
                  </div>
                  <div className="relative z-10 bg-[#DD3B2F] text-white px-6 py-4 rounded-2xl shadow-[0_0_40px_rgba(221,59,47,0.4)] text-center hover:scale-105 transition-transform duration-300 border border-orange-400">
                    <Cpu className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-bold uppercase tracking-wide">Agentic<br/>Infrastructure</span>
                  </div>
                </div>

                {/* Output */}
                <div className="space-y-2 motion-safe:animate-in motion-safe:slide-in-from-bottom-4 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-700">
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:border-orange-200 transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-[#DD3B2F]">
                      <Layers className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">Action Queues</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:border-orange-200 transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-[#DD3B2F]">
                      <Database className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">Content API</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Agentic Actions */}
            <div className="space-y-6">
              <div className="text-center motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-100">
                <h4 className="text-xs font-bold text-[#DD3B2F] uppercase tracking-wider mb-4">Agentic Actions, Content & Data</h4>
              </div>

              {/* Delivery */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow motion-safe:animate-in motion-safe:slide-in-from-right-8 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-200">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">Delivery Infrastructure</h5>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="SendGrid">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Twilio">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-xs">•••</span>
                  </div>
                </div>
              </div>

              {/* Engagement */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow motion-safe:animate-in motion-safe:slide-in-from-right-8 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-300">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">Engagement Tools</h5>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Klaviyo">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Braze">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Attentive">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-xs">•••</span>
                  </div>
                </div>
              </div>

              {/* Observability */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow motion-safe:animate-in motion-safe:slide-in-from-right-8 motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-500">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">Observability & Insights</h5>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Mixpanel">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:scale-110 transition-transform duration-200" title="Amplitude">
                    <Radio className="h-5 w-5" />
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-xs">•••</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
