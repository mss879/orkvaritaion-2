import React from 'react';
import Image from 'next/image';
import { Check, Clock, Zap, BarChart3 } from 'lucide-react';

const Integrations = () => {
  return (
    <section className="py-24 bg-white text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Circular Graphic */}
          <div className="relative flex items-center justify-center min-h-[500px]" aria-hidden="true">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-orange-500/5 blur-[100px] rounded-full" />
            
            {/* Orbit Rings */}
            <div className="absolute w-[300px] h-[300px] border border-gray-200 rounded-full" />
            <div className="absolute w-[450px] h-[450px] border border-gray-200 rounded-full" />
            
            {/* Center Logo */}
            <div className="relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-2xl shadow-orange-500/20">
              <Image src="/Favicon - Dark.png" alt="" width={48} height={48} className="object-contain" loading="lazy" />
            </div>

            {/* Icons - Inner Ring */}
            <div className="absolute w-[300px] h-[300px] animate-spin-slow" style={{ animationDuration: '60s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-reverse-slow" style={{ animationDuration: '60s' }}>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2">
                    <Image src="/integrations/slack.svg" alt="" width={24} height={24} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="animate-spin-reverse-slow" style={{ animationDuration: '60s' }}>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2">
                    <Image src="/integrations/zapier.svg" alt="" width={24} height={24} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-reverse-slow" style={{ animationDuration: '60s' }}>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2">
                    <Image src="/integrations/google-ads.svg" alt="" width={24} height={24} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin-reverse-slow" style={{ animationDuration: '60s' }}>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-md p-2">
                    <Image src="/shopify logo.webp" alt="" width={24} height={24} loading="lazy" />
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
                    <Image src="/integrations/meta.svg" alt="" width={32} height={32} loading="lazy" />
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
                    <Image src="/integrations/extra.svg" alt="" width={32} height={32} loading="lazy" />
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
                    <Image src="/integrations/zapier.svg" alt="" width={32} height={32} loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8">
            <div>
              <h4 className="text-orange-500 font-medium mb-2">Integration & Setup</h4>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">We work where you work</h2>
              <p className="text-gray-600 text-lg">
                Orkestrate integrates effortlessly with your existing tools and workflows. Connect to over 2,000+ apps for fast onboarding and efficient operations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Seamless Integrations</h3>
                  <p className="text-gray-600">Connect your store (Shopify) and existing tools like Klaviyo, Attentive, or Braze instantly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Fast Onboarding</h3>
                  <p className="text-gray-600">Orkestrate agents rapidly learn your brand and systems, completing integration & testing in under 8 hours.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Multi-Model AI</h3>
                  <p className="text-gray-600">Orchestrate your agents, channels, and data in one interface with continuous intelligence.</p>
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
