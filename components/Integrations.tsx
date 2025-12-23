import React from 'react';
import Image from 'next/image';
import { Check, Clock, Zap, BarChart3 } from 'lucide-react';

const Integrations = () => {
  return (
    <section className="py-24 md:py-32 bg-[#EBE9E6] text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Circular Graphic */}
          <div className="relative flex items-center justify-center min-h-[500px]" aria-hidden="true">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-orkestrate-pulse/5 blur-[100px] rounded-full" />
            
            {/* Orbit Rings */}
            <div className="absolute w-[300px] h-[300px] border border-dashed border-gray-400 rounded-full" />
            <div className="absolute w-[450px] h-[450px] border border-dashed border-gray-400 rounded-full" />
            
            {/* Center Logo */}
            <div className="relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-2xl shadow-orkestrate-pulse/20">
              <Image src="/Favicon - Dark.png" alt="" width={48} height={48} className="object-contain" loading="lazy" />
            </div>

            {/* Icons - Inner Ring */}
            <div className="absolute w-[300px] h-[300px] animate-spin-slow" style={{ animationDuration: '60s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-reverse-slow" style={{ animationDuration: '60s' }}>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-3">
                    <Image src="/integrations/shopify.webp" alt="" width={32} height={32} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="animate-spin-reverse-slow" style={{ animationDuration: '60s' }}>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-3">
                    <Image src="/integrations/klaviyo.webp" alt="" width={32} height={32} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-reverse-slow" style={{ animationDuration: '60s' }}>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-3">
                    <Image src="/integrations/braze.webp" alt="" width={32} height={32} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-reverse-slow" style={{ animationDuration: '60s' }}>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-3">
                    <Image src="/integrations/attentive.webp" alt="" width={32} height={32} loading="lazy" />
                  </div>
                </div>
              </div>
            </div>

            {/* Icons - Outer Ring */}
            <div className="absolute w-[450px] h-[450px] animate-spin-reverse-slow" style={{ animationDuration: '80s' }}>
              {/* 8 positions */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-3">
                    <Image src="/integrations/mailchimp.svg" alt="" width={32} height={32} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-3">
                    <Image src="/integrations/google-ads.svg" alt="" width={32} height={32} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-3">
                    <Image src="/integrations/firebase.svg" alt="" width={32} height={32} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-3">
                    <Image src="/integrations/airtable.svg" alt="" width={32} height={32} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-3">
                    <Image src="/integrations/aws.svg" alt="" width={32} height={32} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-3">
                    <Image src="/integrations/meta.svg" alt="" width={32} height={32} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-3">
                    <Image src="/integrations/slack.svg" alt="" width={32} height={32} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-slow" style={{ animationDuration: '80s' }}>
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-3">
                    <Image src="/integrations/meta.svg" alt="" width={32} height={32} loading="lazy" />
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

              <div className="grid gap-4">
                {/* Feature 1 */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/40 p-5 backdrop-blur-md transition-all hover:bg-white/60 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1">
                  <div className="flex gap-4 items-start">
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
                <div className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/40 p-5 backdrop-blur-md transition-all hover:bg-white/60 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1">
                  <div className="flex gap-4 items-start">
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
                <div className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/40 p-5 backdrop-blur-md transition-all hover:bg-white/60 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1">
                  <div className="flex gap-4 items-start">
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
