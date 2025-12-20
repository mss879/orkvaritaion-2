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
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_100%,#E0422D_0%,#EB5825_25%,#FAB6AA_50%,#ffffff_80%)]" />
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
                      className="group flex flex-col gap-2 p-3 w-full rounded-[28px] border border-white/10 bg-[#1a0505] text-base shadow-xl transition-all duration-150 ease-in-out focus-within:border-white/20 hover:border-white/15 focus-within:hover:border-white/20"
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

      <ProductSection />

      <section className="relative px-4 py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimationWrapper className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                <span className="relative inline-block h-[1.15em] overflow-hidden align-baseline leading-none">
                  <span className="block animate-category-rotate leading-none">
                    <span className="block h-[1.15em] leading-none whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                      Fashion &amp; apparel{' '}
                      <span className="text-orkestrate-pulse">AI Model</span>
                    </span>
                    <span className="block h-[1.15em] leading-none whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                      Beauty &amp; skincare{' '}
                      <span className="text-orkestrate-pulse">AI Model</span>
                    </span>
                    <span className="block h-[1.15em] leading-none whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                      Home &amp; lifestyle{' '}
                      <span className="text-orkestrate-pulse">AI Model</span>
                    </span>
                    <span className="block h-[1.15em] leading-none whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                      Fashion &amp; apparel{' '}
                      <span className="text-orkestrate-pulse">AI Model</span>
                    </span>
                  </span>
                </span>
              </h3>
            </div>
            <div className="max-w-md md:text-right">
              <p className="text-lg text-gray-500 font-medium">
                Category Based AI Models that know your industry's Ins &amp; Outs
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-orkestrate-pulse font-semibold mt-2 hover:gap-3 transition-all">
                View all 40+ categories <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="grid gap-8 lg:gap-10 lg:grid-cols-3">
            {/* Fashion Card */}
            <div className="group relative flex flex-col justify-between rounded-[2.5rem] border border-white/70 bg-white/60 backdrop-blur-xl p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-500 hover:-translate-y-2 hover:border-orkestrate-pulse/30 hover:shadow-[0_30px_70px_rgba(235,88,37,0.12)] overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent opacity-70" />
              <div className="relative z-10">
                <div className="mb-8 inline-flex p-4 rounded-2xl bg-white/50 border border-white/70 backdrop-blur-md shadow-sm group-hover:border-orkestrate-pulse/20 transition-colors duration-500">
                  <Image src="/fashion.png" alt="Fashion and apparel AI model" width={64} height={64} className="object-contain drop-shadow-sm" loading="lazy" />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-gray-900">Fashion &amp; apparel</h4>
                <p className="text-lg leading-relaxed text-gray-500 mb-12">
                  Spots fit, size and seasonality patterns so you send the right looks to the right closets.
                </p>
              </div>
              
              {/* Floating Glass Insight */}
              <div className="relative mt-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orkestrate-pulse/10 to-orkestrate-pulse/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                <div className="relative rounded-2xl bg-white/55 backdrop-blur-xl border border-white/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-500 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] group-hover:border-orkestrate-pulse/30">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-orkestrate-pulse/10 text-orkestrate-scarlet border border-orkestrate-pulse/20">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orkestrate-pulse/90">Model Insight</span>
                  </div>
                  <p className="text-base font-medium text-gray-900 leading-snug">
                    “Your denim VIPs respond best to SMS drops on weekends.”
                  </p>
                </div>
              </div>
            </div>

            {/* Beauty Card */}
            <div className="group relative flex flex-col justify-between rounded-[2.5rem] border border-white/70 bg-white/60 backdrop-blur-xl p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-500 hover:-translate-y-2 hover:border-orkestrate-pulse/30 hover:shadow-[0_30px_70px_rgba(235,88,37,0.12)] overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent opacity-70" />
              <div className="relative z-10">
                <div className="mb-8 inline-flex p-4 rounded-2xl bg-white/50 border border-white/70 backdrop-blur-md shadow-sm group-hover:border-orkestrate-pulse/20 transition-colors duration-500">
                  <Image src="/skincare.png" alt="Beauty and skincare AI model" width={64} height={64} className="object-contain drop-shadow-sm" loading="lazy" />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-gray-900">Beauty &amp; skincare</h4>
                <p className="text-lg leading-relaxed text-gray-500 mb-12">
                  Understands replenishment cycles and routines, not just one-off orders.
                </p>
              </div>

              {/* Floating Glass Insight */}
              <div className="relative mt-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orkestrate-pulse/10 to-orkestrate-pulse/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                <div className="relative rounded-2xl bg-white/55 backdrop-blur-xl border border-white/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-500 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] group-hover:border-orkestrate-pulse/30">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-orkestrate-pulse/10 text-orkestrate-scarlet border border-orkestrate-pulse/20">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orkestrate-pulse/90">Model Insight</span>
                  </div>
                  <p className="text-base font-medium text-gray-900 leading-snug">
                    “These 1,104 customers are due for a refill within 7 days.”
                  </p>
                </div>
              </div>
            </div>

            {/* Home Card */}
            <div className="group relative flex flex-col justify-between rounded-[2.5rem] border border-white/70 bg-white/60 backdrop-blur-xl p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-500 hover:-translate-y-2 hover:border-orkestrate-pulse/30 hover:shadow-[0_30px_70px_rgba(235,88,37,0.12)] overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent opacity-70" />
              <div className="relative z-10">
                <div className="mb-8 inline-flex p-4 rounded-2xl bg-white/50 border border-white/70 backdrop-blur-md shadow-sm group-hover:border-orkestrate-pulse/20 transition-colors duration-500">
                  <Image src="/home.png" alt="Home and lifestyle AI model" width={64} height={64} className="object-contain drop-shadow-sm" loading="lazy" />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-gray-900">Home &amp; lifestyle</h4>
                <p className="text-lg leading-relaxed text-gray-500 mb-12">
                  Reads browsing depth and consideration windows for higher ticket items.
                </p>
              </div>

              {/* Floating Glass Insight */}
              <div className="relative mt-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orkestrate-pulse/10 to-orkestrate-pulse/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                <div className="relative rounded-2xl bg-white/55 backdrop-blur-xl border border-white/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-500 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] group-hover:border-orkestrate-pulse/30">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-orkestrate-pulse/10 text-orkestrate-scarlet border border-orkestrate-pulse/20">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orkestrate-pulse/90">Model Insight</span>
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
