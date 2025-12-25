import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { CheckCircle2, Plug, Layers, MessageSquare, TrendingUp } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

// Lazy load animation components
const LearnOptimizeScaleAnimation = dynamic(() => import('./LearnOptimizeScaleAnimation'), {
  loading: () => <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl animate-pulse" />,
  ssr: false,
});
const ChatOrkestratorAnimation = dynamic(() => import('./ChatOrkestratorAnimation'), {
  loading: () => <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl animate-pulse" />,
  ssr: false,
});
const ChooseCategoryAnimation = dynamic(() => import('./ChooseCategoryAnimation'), {
  loading: () => <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl animate-pulse" />,
  ssr: false,
});
const ConnectStoreAnimation = dynamic(() => import('./ConnectStoreAnimation'), {
  loading: () => <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl animate-pulse" />,
  ssr: false,
});
const ApproveLaunchAnimation = dynamic(() => import('./ApproveLaunchAnimation'), {
  loading: () => <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl animate-pulse" />,
  ssr: false,
});

const steps = [
  {
    title: "Connect your store and campaigns",
    Animation: ConnectStoreAnimation,
    items: [
      "Plug in Shopify plus your existing tools like Klaviyo, Attentive or Braze.",
      "Orkestrate ingests orders, browsing, campaigns and basic catalog data so it can see what you are already doing and where revenue is leaking."
    ],
    icon: Plug,
    imageSrc: '/work%20iamge%201.png',
    imageAlt: 'Connect your store and campaigns'
  },
  {
    title: "Choose your category profile",
    Animation: ChooseCategoryAnimation,
    items: [
      "Pick the category that matches your brand, for example beauty, fashion, home or food.",
      "Category models bring instant pattern recognition for your niche so you are not waiting months for the system to learn from scratch."
    ],
    icon: Layers,
    imageSrc: '/work%20iamge%202.png',
    imageAlt: 'Choose your category profile'
  },
  {
    title: "Start chatting with your Orkestrator",
    Animation: ChatOrkestratorAnimation,
    items: [
      "Describe your goals in simple language. e.g. \"Recover more lapsing VIPs\" or \"Launch a new product to high intent browsers.\"",
      "Orkestrate turns that into cohorts, journeys and experiments across your channels."
    ],
    icon: MessageSquare,
    imageSrc: '/work%20iamge%203.png',
    imageAlt: 'Start chatting with your Orkestrator'
  },
  {
    title: "Approve plays and launch",
    Animation: ApproveLaunchAnimation,
    items: [
      "Review the proposed plays in plain English. Tweak guardrails, budget and tone where needed.",
      "Approve and Orkestrate's agents create and schedule the actual campaigns in your connected tools."
    ],
    icon: CheckCircle2,
    imageSrc: '/work%20iamge%204.png',
    imageAlt: 'Approve plays and launch'
  },
  {
    title: "Learn, optimize and scale",
    Animation: LearnOptimizeScaleAnimation,
    items: [
      "Review the proposed plays in plain English. Tweak guardrails, budget and tone where needed.",
      "Over time you run far more campaigns and experiments with the same team while keeping performance and customer experience improving week after week."
    ],
    icon: TrendingUp,
    imageSrc: '/work%20iamge%205.png',
    imageAlt: 'Learn, optimize and scale'
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24 md:py-32 relative" aria-labelledby="how-it-works-heading">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <ScrollAnimationWrapper className="text-center mb-12">
        <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">How Orkestrate works</h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Turn a small team into a high output marketing engine in 5 automated steps.
        </p>
      </ScrollAnimationWrapper>

      <div className="flex flex-col gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative rounded-3xl p-6 flex flex-col gap-10 sm:p-12 sm:gap-12 md:items-center transition-all duration-500 border border-white/60 [contain:layout_style] ${
              index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
            style={{
              background: 'linear-gradient(135deg, #E86233 0%, #2B1209 100%)',
              boxShadow: '0 8px 32px 0 rgba(17, 24, 39, 0.12), 0 2px 8px 0 rgba(17, 24, 39, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.3)',
              transform: 'translateZ(0)'
            }}
          >
            {/* Consolidated glass overlay with reflection */}
            <div 
              className="pointer-events-none absolute inset-0 rounded-[inherit]"
              style={{
                background: 'radial-gradient(92.09% 124.47% at 50% 99.24%, rgba(221, 226, 238, 0.15) 58.91%, rgba(187, 197, 221, 0.15) 100%), linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.3) 100%)',
                mixBlendMode: 'overlay'
              }}
            />
            
            {/* Top edge highlight */}
            <div 
              className="pointer-events-none absolute top-[2px] left-[10%] right-[10%] h-[1px]"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
              }}
            />
            
            <div className="relative z-10 md:w-1/2 lg:w-[45%]">
              <h3 className="text-2xl font-bold text-white mb-6">{step.title}</h3>
              <ul className="grid gap-4">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative z-10 md:w-1/2 lg:w-[55%] flex items-center">
              <div
                className={`relative w-full max-w-lg overflow-hidden rounded-xl lg:rounded-3xl border border-white/20 bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] [contain:layout_paint] ${
                  index % 2 === 1 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
                style={{ transform: 'translateZ(0)' }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />

                {step.Animation ? (
                  <step.Animation />
                ) : (
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    width={1400}
                    height={1100}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 1024px) 55vw, (min-width: 768px) 50vw, 100vw"
                    priority={index === 0}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
