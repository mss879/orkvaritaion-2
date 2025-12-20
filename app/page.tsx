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

// Lazy load heavy components for better performance
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
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

      <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 pt-28 pb-24" aria-labelledby="hero-heading">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_100%,#E86233_0%,#ffffff_72%)]" />
        </div>

        <div className="max-w-6xl w-full text-center space-y-8 relative z-10">
          <ScrollAnimationWrapper className="space-y-5">
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-900/90 backdrop-blur">
                <span className="rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                  New
                </span>
                <span>Orkestrate Intelligence is live</span>
                <span className="text-gray-900/50" aria-hidden="true">→</span>
              </div>
            </div>

            <p className="text-gray-900/70 text-sm sm:text-base font-medium tracking-wide">
              The Marketing Orchestration Platform
            </p>

            <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight lg:whitespace-nowrap">
              Marketing made <span className="text-orange-600">smarter</span> and{' '}
              <span className="text-orange-600">simple</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-900/70 font-medium">
              Orchestrate your agents, channels, and data in one interface with Orkestrate intelligence.
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="mt-10">
            <div className="relative w-full max-w-[56rem] mx-auto">
              <div className="relative w-full">
                <div className="flex w-full flex-col items-center">
                  <div className="relative size-full w-full">
                    <form
                      className="group flex flex-col gap-2 p-3 w-full rounded-[28px] border border-white/10 bg-neutral-900 text-base shadow-xl transition-all duration-150 ease-in-out focus-within:border-white/20 hover:border-white/15 focus-within:hover:border-white/20"
                    >
                      <div className="relative flex flex-1 items-center px-1">
                        <TypewriterTextarea
                          queries={QUERIES}
                          className="flex w-full resize-none border-none bg-transparent px-2 py-2 text-[16px] leading-snug text-white/80 placeholder:text-white/50 focus-visible:outline-none md:text-base max-h-[max(35svh,5rem)]"
                          placeholder="Ask Orkestrate to create a prototype..."
                          style={{ height: '80px' }}
                          prefix="Ask Orkestrate to "
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
          </ScrollAnimationWrapper>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-orange-50 z-10" />
      </section>

      <IntelligenceCarousel />

      <section
        className="relative px-4 py-20 md:py-24 lg:py-28"
        data-framer-name="Orkestrate Advantage"
        id="orkestrate-advantage"
      >
        <div className="max-w-7xl mx-auto">
          <ScrollAnimationWrapper className="text-center">
            <p className="text-sm font-medium tracking-wide text-gray-700">Orkestrate Advantage</p>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight max-w-4xl mx-auto">
              <span className="block">Continuous Intelligence for</span>
              <span className="block">Personalization at Scale</span>
            </h2>
          </ScrollAnimationWrapper>

          <div className="mt-12 lg:mt-14 grid gap-10 lg:gap-14 lg:grid-cols-[0.85fr,2.8fr,0.85fr] items-center">
            <ScrollAnimationWrapper className="space-y-7 text-left">
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
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <div className="mx-auto max-w-[600px] w-full">
                <AdvantageAnimation />
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="space-y-7 text-left">
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
            </ScrollAnimationWrapper>
          </div>

          <ScrollAnimationWrapper className="mt-16 lg:mt-18 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center">
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
          </ScrollAnimationWrapper>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white z-10" />
      </section>

      <section className="relative px-4 py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimationWrapper className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                <span className="relative inline-block h-[1.15em] overflow-hidden align-baseline leading-none">
                  <span className="block animate-category-rotate leading-none">
                    <span className="block h-[1.15em] leading-none whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                      Fashion &amp; apparel{' '}
                      <span className="text-orange-600">AI Model</span>
                    </span>
                    <span className="block h-[1.15em] leading-none whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                      Beauty &amp; skincare{' '}
                      <span className="text-orange-600">AI Model</span>
                    </span>
                    <span className="block h-[1.15em] leading-none whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                      Home &amp; lifestyle{' '}
                      <span className="text-orange-600">AI Model</span>
                    </span>
                    <span className="block h-[1.15em] leading-none whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                      Fashion &amp; apparel{' '}
                      <span className="text-orange-600">AI Model</span>
                    </span>
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
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="grid gap-8 lg:gap-10 lg:grid-cols-3">
            {/* Fashion Card */}
            <div className="group relative flex flex-col justify-between rounded-[2.5rem] border border-white/70 bg-white/60 backdrop-blur-xl p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-200/60 hover:shadow-[0_30px_70px_rgba(221,59,47,0.12)] overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent opacity-70" />
              <div className="relative z-10">
                <div className="mb-8 inline-flex p-4 rounded-2xl bg-white/50 border border-white/70 backdrop-blur-md shadow-sm group-hover:border-orange-200/50 transition-colors duration-500">
                  <Image src="/fashion.png" alt="Fashion and apparel AI model" width={64} height={64} className="object-contain drop-shadow-sm" loading="lazy" />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-gray-900">Fashion &amp; apparel</h4>
                <p className="text-lg leading-relaxed text-gray-500 mb-12">
                  Spots fit, size and seasonality patterns so you send the right looks to the right closets.
                </p>
              </div>
              
              {/* Floating Glass Insight */}
              <div className="relative mt-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                <div className="relative rounded-2xl bg-white/55 backdrop-blur-xl border border-white/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-500 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] group-hover:border-orange-200/60">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-orange-100/60 text-orange-700 border border-orange-200/50">
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
            <div className="group relative flex flex-col justify-between rounded-[2.5rem] border border-white/70 bg-white/60 backdrop-blur-xl p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-200/60 hover:shadow-[0_30px_70px_rgba(221,59,47,0.12)] overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent opacity-70" />
              <div className="relative z-10">
                <div className="mb-8 inline-flex p-4 rounded-2xl bg-white/50 border border-white/70 backdrop-blur-md shadow-sm group-hover:border-orange-200/50 transition-colors duration-500">
                  <Image src="/skincare.png" alt="Beauty and skincare AI model" width={64} height={64} className="object-contain drop-shadow-sm" loading="lazy" />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-gray-900">Beauty &amp; skincare</h4>
                <p className="text-lg leading-relaxed text-gray-500 mb-12">
                  Understands replenishment cycles and routines, not just one-off orders.
                </p>
              </div>

              {/* Floating Glass Insight */}
              <div className="relative mt-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                <div className="relative rounded-2xl bg-white/55 backdrop-blur-xl border border-white/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-500 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] group-hover:border-orange-200/60">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-orange-100/60 text-orange-700 border border-orange-200/50">
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
            <div className="group relative flex flex-col justify-between rounded-[2.5rem] border border-white/70 bg-white/60 backdrop-blur-xl p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-200/60 hover:shadow-[0_30px_70px_rgba(221,59,47,0.12)] overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent opacity-70" />
              <div className="relative z-10">
                <div className="mb-8 inline-flex p-4 rounded-2xl bg-white/50 border border-white/70 backdrop-blur-md shadow-sm group-hover:border-orange-200/50 transition-colors duration-500">
                  <Image src="/home.png" alt="Home and lifestyle AI model" width={64} height={64} className="object-contain drop-shadow-sm" loading="lazy" />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-gray-900">Home &amp; lifestyle</h4>
                <p className="text-lg leading-relaxed text-gray-500 mb-12">
                  Reads browsing depth and consideration windows for higher ticket items.
                </p>
              </div>

              {/* Floating Glass Insight */}
              <div className="relative mt-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                <div className="relative rounded-2xl bg-white/55 backdrop-blur-xl border border-white/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-500 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] group-hover:border-orange-200/60">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-orange-100/60 text-orange-700 border border-orange-200/50">
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
