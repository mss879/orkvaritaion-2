import React from 'react';
import Image from 'next/image';
import { Check, Clock, Zap, BarChart3 } from 'lucide-react';

const Integrations = () => {
  return (
    <section className="py-24 md:py-32 bg-[#EBE9E6] text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Mobile/tablet order: heading + description, then diagram, then cards */}
        <div className="relative z-10 lg:hidden mb-12">
          {/* Decorative gradient behind text for glass effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-purple-500/10 blur-3xl -z-10 rounded-full opacity-50" />

          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-sm font-medium text-orange-600 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
              Integration & Setup
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              We work where <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">you work</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Orkestrate integrates effortlessly with your existing tools. Connect to over 2,000+ apps for fast onboarding and efficient operations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-12 items-center">
          {/* Left Column: Circular Graphic */}
          <div className="relative flex items-center justify-center min-h-[420px] md:min-h-[500px]" aria-hidden="true">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-orkestrate-pulse/5 blur-[70px] md:blur-[100px] rounded-full" />
            
            {/* Orbit Rings */}
            <div className="absolute w-[210px] h-[210px] md:w-[300px] md:h-[300px] border border-dashed border-gray-400 rounded-full" />
            <div className="absolute w-[340px] h-[340px] md:w-[450px] md:h-[450px] border border-dashed border-gray-400 rounded-full" />
            
            {/* Center Logo */}
            <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-2xl shadow-orkestrate-pulse/20">
              <Image src="/Favicon - Dark.png" alt="" width={40} height={40} className="object-contain" loading="lazy" />
            </div>

            {/* Icons - Inner Ring */}
            <div className="absolute w-[210px] h-[210px] md:w-[300px] md:h-[300px] animate-spin-slow" style={{ animationDuration: '60s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-reverse-slow" style={{ animationDuration: '60s' }}>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2.5 md:p-3">
                    <Image src="/integrations/shopify.webp" alt="" width={28} height={28} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="animate-spin-reverse-slow" style={{ animationDuration: '60s' }}>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2.5 md:p-3">
                    <Image src="/integrations/klaviyo.webp" alt="" width={28} height={28} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-reverse-slow" style={{ animationDuration: '60s' }}>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2.5 md:p-3">
                    <Image src="/integrations/braze.webp" alt="" width={28} height={28} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-reverse-slow" style={{ animationDuration: '60s' }}>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2.5 md:p-3">
                    <Image src="/integrations/attentive.webp" alt="" width={28} height={28} loading="lazy" />
                  </div>
                </div>
              </div>
            </div>

            {/* Icons - Outer Ring */}
            <div className="absolute w-[340px] h-[340px] md:w-[450px] md:h-[450px] animate-spin-reverse-slow" style={{ animationDuration: '80s' }}>
              {/* 8 positions */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2.5 md:p-3">
                    <Image src="/integrations/mailchimp.svg" alt="" width={28} height={28} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2.5 md:p-3">
                    <Image src="/integrations/google-ads.svg" alt="" width={28} height={28} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2.5 md:p-3">
                    <Image src="/integrations/firebase.svg" alt="" width={28} height={28} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2.5 md:p-3">
                    <Image src="/integrations/airtable.svg" alt="" width={28} height={28} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2.5 md:p-3">
                    <Image src="/integrations/aws.svg" alt="" width={28} height={28} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2.5 md:p-3">
                    <Image src="/integrations/meta.svg" alt="" width={28} height={28} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2.5 md:p-3">
                    <Image src="/integrations/slack.svg" alt="" width={28} height={28} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2.5 md:p-3">
                    <Image src="/integrations/meta.svg" alt="" width={28} height={28} loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="relative z-10 pl-0 lg:pl-10">
            {/* Decorative gradient behind text for glass effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-purple-500/10 blur-3xl -z-10 rounded-full opacity-50" />

            <div className="space-y-8">
              {/* Desktop order: heading + description next to diagram */}
              <div className="hidden lg:block space-y-4">
                <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-sm font-medium text-orange-600 backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
                  Integration & Setup
                </div>

                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                  We work where <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">you work</span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Orkestrate integrates effortlessly with your existing tools. Connect to over 2,000+ apps for fast onboarding and efficient operations.
                </p>
              </div>

              <div className="grid gap-4">
                {/* Feature 1 */}
                <div 
                  className="group relative rounded-2xl border border-white/60 p-5 transition-all hover:shadow-xl hover:-translate-y-1"
                  style={{
                    background: 'radial-gradient(92.09% 124.47% at 50% 99.24%, rgba(221, 226, 238, 0.40) 58.91%, rgba(187, 197, 221, 0.40) 100%)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    boxShadow: '0 8px 32px 0 rgba(17, 24, 39, 0.12), 0 2px 8px 0 rgba(17, 24, 39, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)'
                  }}
                >
                  {/* Top edge highlight */}
                  <div 
                    className="pointer-events-none absolute top-[2px] left-[10%] right-[10%] h-[1px]"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
                    }}
                  />
                  {/* Main glass reflection */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-[inherit]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.4) 100%)',
                      mixBlendMode: 'overlay'
                    }}
                  />
                  {/* Secondary reflection layer */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-[inherit]"
                    style={{
                      background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)',
                      mixBlendMode: 'soft-light'
                    }}
                  />
                  {/* Glass texture noise */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-30"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                      mixBlendMode: 'overlay'
                    }}
                  />
                  {/* Frosted glass inset shadows */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-[inherit]"
                    style={{
                      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 0 rgba(255, 255, 255, 0.2), inset 1px 0 0 0 rgba(255, 255, 255, 0.3), inset -1px 0 0 0 rgba(255, 255, 255, 0.3)'
                    }}
                  />
                  <div className="flex gap-4 items-start relative z-10">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Seamless Integrations</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Connect your store (Shopify) and existing tools like Klaviyo, Attentive, or Braze instantly.</p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div 
                  className="group relative rounded-2xl border border-white/60 p-5 transition-all hover:shadow-xl hover:-translate-y-1"
                  style={{
                    background: 'radial-gradient(92.09% 124.47% at 50% 99.24%, rgba(221, 226, 238, 0.40) 58.91%, rgba(187, 197, 221, 0.40) 100%)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    boxShadow: '0 8px 32px 0 rgba(17, 24, 39, 0.12), 0 2px 8px 0 rgba(17, 24, 39, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)'
                  }}
                >
                  {/* Top edge highlight */}
                  <div 
                    className="pointer-events-none absolute top-[2px] left-[10%] right-[10%] h-[1px]"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
                    }}
                  />
                  {/* Main glass reflection */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-[inherit]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.4) 100%)',
                      mixBlendMode: 'overlay'
                    }}
                  />
                  {/* Secondary reflection layer */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-[inherit]"
                    style={{
                      background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)',
                      mixBlendMode: 'soft-light'
                    }}
                  />
                  {/* Glass texture noise */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-30"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                      mixBlendMode: 'overlay'
                    }}
                  />
                  {/* Frosted glass inset shadows */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-[inherit]"
                    style={{
                      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 0 rgba(255, 255, 255, 0.2), inset 1px 0 0 0 rgba(255, 255, 255, 0.3), inset -1px 0 0 0 rgba(255, 255, 255, 0.3)'
                    }}
                  />
                  <div className="flex gap-4 items-start relative z-10">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Fast Onboarding</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Orkestrate agents rapidly learn your brand and systems, completing integration & testing in under 8 hours.</p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div 
                  className="group relative rounded-2xl border border-white/60 p-5 transition-all hover:shadow-xl hover:-translate-y-1"
                  style={{
                    background: 'radial-gradient(92.09% 124.47% at 50% 99.24%, rgba(221, 226, 238, 0.40) 58.91%, rgba(187, 197, 221, 0.40) 100%)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    boxShadow: '0 8px 32px 0 rgba(17, 24, 39, 0.12), 0 2px 8px 0 rgba(17, 24, 39, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)'
                  }}
                >
                  {/* Top edge highlight */}
                  <div 
                    className="pointer-events-none absolute top-[2px] left-[10%] right-[10%] h-[1px]"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
                    }}
                  />
                  {/* Main glass reflection */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-[inherit]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 0.4) 100%)',
                      mixBlendMode: 'overlay'
                    }}
                  />
                  {/* Secondary reflection layer */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-[inherit]"
                    style={{
                      background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)',
                      mixBlendMode: 'soft-light'
                    }}
                  />
                  {/* Glass texture noise */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-30"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                      mixBlendMode: 'overlay'
                    }}
                  />
                  {/* Frosted glass inset shadows */}
                  <div 
                    className="pointer-events-none absolute inset-0 rounded-[inherit]"
                    style={{
                      boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 0 rgba(255, 255, 255, 0.2), inset 1px 0 0 0 rgba(255, 255, 255, 0.3), inset -1px 0 0 0 rgba(255, 255, 255, 0.3)'
                    }}
                  />
                  <div className="flex gap-4 items-start relative z-10">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Multi-Model AI</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Orchestrate your agents, channels, and data in one interface with continuous intelligence.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
