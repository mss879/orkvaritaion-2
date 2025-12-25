import dynamic from 'next/dynamic';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUp,
  AudioLines,
  MessageSquare,
  Paperclip,
  Plus,
  Sparkles,
} from 'lucide-react';
import FloatingNavbar from '@/components/FloatingNavbar';
import Footer from '@/components/Footer';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';

import CategoryCards from '@/components/CategoryCards';

// Lazy load heavy components for better performance
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
  loading: () => <div className="min-h-[600px] bg-white" aria-label="Loading..." />,
});
const ProductSection = dynamic(() => import('@/components/ProductSection'), {
  loading: () => <div className="min-h-[600px] bg-white" aria-label="Loading..." />,
});
const Integrations = dynamic(() => import('@/components/Integrations'), {
  loading: () => <div className="min-h-[500px] bg-white" aria-label="Loading..." />,
});
const IntelligenceCarousel = dynamic(() => import('@/components/IntelligenceCarousel'), {
  loading: () => <div className="min-h-[400px]" aria-label="Loading..." />,
});
const TypewriterTextarea = dynamic(() => import('@/components/TypewriterTextarea'), {
  ssr: false,
});
const AdvantageAnimation = dynamic(() => import('@/components/AdvantageAnimation'), {
  loading: () => <div className="w-full h-[500px] bg-white rounded-2xl border border-gray-100" aria-label="Loading..." />,
  ssr: false,
});

const QUERIES = [
  'Ask Orkestrate to help create a Black Friday campaign',
  'Ask Orkestrate to suggest journeys to reduce churn from BFCM',
  'Ask Orkestrate to create a Christmas wish-list campaign',
  'Ask Orkestrate to pause the Christmas campaign and run a 20 A/B test variants',
];

export default function Home() {
  return (
    <main className="bg-orange-50">
      <FloatingNavbar />

      <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 pt-24 pb-24" aria-labelledby="hero-heading">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/hero%20background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl" />
        </div>

        <div className="max-w-5xl w-full text-center space-y-6 relative z-10">
          <ScrollAnimationWrapper className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/40 px-3 py-1 text-xs font-medium text-gray-900/90 backdrop-blur">
                <span className="rounded-full bg-[#E0422D] px-2 py-0.5 text-[10px] font-semibold text-white">
                  New
                </span>
                <span>Orkestrate Intelligence is live</span>
                <span className="text-gray-900/50" aria-hidden="true">→</span>
              </div>
            </div>

            <p className="text-gray-900/70 text-sm sm:text-base font-medium tracking-wide">
              The Marketing Orchestration Platform
            </p>

            <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight lg:whitespace-nowrap">
              Marketing made <span className="text-[#E0422D]">smarter</span> and{' '}
              <span className="text-[#E0422D]">simple</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-900/70 font-medium max-w-2xl mx-auto">
              Orchestrate your agents, channels, and data in one interface with Orkestrate intelligence.
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="mt-10">
            <div className="relative w-full max-w-[56rem] mx-auto">
              <div className="relative w-full">
                <div className="flex w-full flex-col items-center">
                  <div className="relative size-full w-full">
                    <form
                      className="group flex flex-col gap-2 p-3 w-full rounded-[28px] border border-white/60 text-base relative"
                      style={{
                        background: 'radial-gradient(92.09% 124.47% at 50% 99.24%, rgba(0, 0, 0, 0.95) 58.91%, rgba(30, 30, 30, 0.95) 100%)',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        boxShadow: '0 40px 70px -12px rgba(0, 0, 0, 0.8), 0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.25)'
                      }}
                    >
                      {/* Top edge highlight */}
                      <div 
                        className="pointer-events-none absolute top-[2px] left-[10%] right-[10%] h-[1px] z-[5]"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
                        }}
                      />
                      {/* Main glass reflection */}
                      <div 
                        className="pointer-events-none absolute inset-0 rounded-[inherit] z-[2]"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.2) 100%)',
                          mixBlendMode: 'overlay'
                        }}
                      />
                      {/* Secondary reflection layer */}
                      <div 
                        className="pointer-events-none absolute inset-0 rounded-[inherit] z-[2]"
                        style={{
                          background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
                          mixBlendMode: 'soft-light'
                        }}
                      />
                      {/* Glass texture noise */}
                      <div 
                        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-20 z-[2]"
                        style={{
                          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                          mixBlendMode: 'overlay'
                        }}
                      />
                      {/* Frosted glass inset shadows */}
                      <div 
                        className="pointer-events-none absolute inset-0 rounded-[inherit] z-[3]"
                        style={{
                          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 0 rgba(255, 255, 255, 0.1), inset 1px 0 0 0 rgba(255, 255, 255, 0.15), inset -1px 0 0 0 rgba(255, 255, 255, 0.15)'
                        }}
                      />
                      <div className="relative flex flex-1 items-center px-1 z-10">
                        <TypewriterTextarea
                          queries={QUERIES}
                          className="flex w-full resize-none border-none bg-transparent px-2 py-2 text-[16px] leading-snug text-white/80 placeholder:text-white/50 focus-visible:outline-none md:text-base max-h-[max(35svh,5rem)]"
                          placeholder="Ask Orkestrate to create a prototype..."
                          style={{ height: '80px' }}
                          prefix="Ask Orkestrate to "
                        />
                      </div>

                      <div className="flex gap-1 flex-wrap items-center relative z-10">
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
          </ScrollAnimationWrapper>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#F5F1ED] z-0" />
      </section>

      <IntelligenceCarousel />

      <ProductSection />

      <section className="relative px-4 py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimationWrapper className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                Select your category
              </h3>
            </div>
            <div className="max-w-md md:text-right">
              <p className="text-lg text-gray-500 font-medium">
                Category Based AI Models that know your industry's Ins &amp; Outs
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="w-full">
            <CategoryCards />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="mt-20 text-center border-t border-gray-100 pt-12">
            <p className="text-xl font-semibold text-gray-900">
              Choose from over 40 Unique Category Models that suit your brand
            </p>
            <p className="mt-3 text-gray-500">
              You would never hire a marketer from a random niche. Orkestrate is set up for your category.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <HowItWorks />

      <Integrations />

      {/* Footer */}
      <Footer />
    </main>
  );
}
