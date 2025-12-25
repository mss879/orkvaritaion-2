'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Zap, Brain, Layers, Bot, BarChart3, RefreshCw, ShieldCheck, Database, Settings } from 'lucide-react';
import { IntegrationAnimation, AgentsAnimation, IntelligenceAnimation } from './ProductAnimations';

export default function ProductSection() {
  return (
    <section className="py-12 md:py-32 bg-orange-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            AI agents built to accelerate your content supply chain
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Orchestrate your entire marketing workflow with intelligent agents that learn and adapt.
          </p>
        </div>

        <Tabs defaultValue="integration" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="relative grid w-full max-w-2xl grid-cols-3 h-auto p-2 bg-gradient-to-b from-orkestrate-scarlet/90 to-orkestrate-pulse/90 backdrop-blur-2xl rounded-full border border-white/20 shadow-[0_20px_50px_rgba(234,88,12,0.3),0_10px_20px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.4)] overflow-hidden">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              
              <TabsTrigger 
                value="integration"
                className="relative z-10 rounded-full py-2 md:py-3 text-xs md:text-base font-semibold text-white/90 data-[state=active]:bg-white data-[state=active]:text-orkestrate-pulse data-[state=active]:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                Integration
              </TabsTrigger>
              <TabsTrigger 
                value="agents"
                className="relative z-10 rounded-full py-2 md:py-3 text-xs md:text-base font-semibold text-white/90 data-[state=active]:bg-white data-[state=active]:text-orkestrate-pulse data-[state=active]:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                Agents
              </TabsTrigger>
              <TabsTrigger 
                value="intelligence"
                className="relative z-10 rounded-full py-2 md:py-3 text-xs md:text-base font-semibold text-white/90 data-[state=active]:bg-white data-[state=active]:text-orkestrate-pulse data-[state=active]:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                Intelligence
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-8">
            {/* Integration & Setup */}
            <TabsContent value="integration" className="mt-0 focus-visible:outline-none">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
                      Works where you work
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      Multi-Model AI: Orchestrate your agents, channels, and data in one interface with continuous intelligence.
                    </p>
                  </div>
                  
                  <div className="space-y-4 md:space-y-6">
                    <FeatureItem 
                      icon={<Layers className="w-5 h-5 text-orkestrate-pulse" />}
                      title="Seamless integrations"
                      description="Connect your channels + data sources (commerce, email/SMS, ads, analytics, CDP)"
                    />
                    <FeatureItem 
                      icon={<Zap className="w-5 h-5 text-orkestrate-pulse" />}
                      title="Fast onboarding"
                      description="Import brand voice, offers, constraints, and KPIs in minutes"
                    />
                    <FeatureItem 
                      icon={<Database className="w-5 h-5 text-orkestrate-pulse" />}
                      title="Clean data layer"
                      description="Standardises events, products, and audiences so decisions stay consistent"
                    />
                    <FeatureItem 
                      icon={<Settings className="w-5 h-5 text-orkestrate-pulse" />}
                      title="No rip and replace"
                      description="Sits on top of your stack and activates through your existing tools"
                    />
                  </div>
                </div>
                <div 
                  className="relative h-[250px] md:h-[400px] rounded-3xl border border-white/60 p-8 flex items-center justify-center transition-colors duration-500 group"
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
                  <div className="relative z-10 w-full h-full">
                    <IntegrationAnimation />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Agents */}
            <TabsContent value="agents" className="mt-0 focus-visible:outline-none">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
                      Always-on execution that ships work daily
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      Deploy specialized agents that work 24/7 to optimize every aspect of your marketing campaigns.
                    </p>
                  </div>
                  
                  <div className="space-y-4 md:space-y-6">
                    <FeatureItem 
                      icon={<Bot className="w-5 h-5 text-orkestrate-pulse" />}
                      title="Campaign builder agent"
                      description="Turns a goal into segments, offers, creatives, and launch plan"
                    />
                    <FeatureItem 
                      icon={<Check className="w-5 h-5 text-orkestrate-pulse" />}
                      title="Audience agent"
                      description="Builds cohorts, exclusions, and timing rules per lifecycle stage"
                    />
                    <FeatureItem 
                      icon={<RefreshCw className="w-5 h-5 text-orkestrate-pulse" />}
                      title="Experiment agent"
                      description="Runs holdouts/A-B tests, promotes winners, retires losers"
                    />
                    <FeatureItem 
                      icon={<BarChart3 className="w-5 h-5 text-orkestrate-pulse" />}
                      title="Optimization agent"
                      description="Adjusts timing, frequency, and targeting to hit performance goals"
                    />
                    <FeatureItem 
                      icon={<ShieldCheck className="w-5 h-5 text-orkestrate-pulse" />}
                      title="24/7-on insights agent"
                      description="Monitors performance and surfaces plays, risks, and opportunities with the “why”"
                    />
                  </div>
                </div>
                <div 
                  className="relative h-[250px] md:h-[400px] rounded-3xl border border-white/60 p-8 flex items-center justify-center transition-colors duration-500 group"
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
                  <div className="relative z-10 w-full h-full">
                    <AgentsAnimation />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Intelligence */}
            <TabsContent value="intelligence" className="mt-0 focus-visible:outline-none">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
                      Category-native intelligence that compounds
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      Built-in logic and memory that gets smarter with every campaign you run.
                    </p>
                  </div>
                  
                  <div className="space-y-4 md:space-y-6">
                    <FeatureItem 
                      icon={<Brain className="w-5 h-5 text-orkestrate-pulse" />}
                      title="Category models"
                      description="Built-in logic for timing, replenishment, upsell moments, and buyer nuance from day one"
                    />
                    <FeatureItem 
                      icon={<BarChart3 className="w-5 h-5 text-orkestrate-pulse" />}
                      title="Compounding ROI"
                      description="Learns what drives conversion, retention, and LTV and systematically lifts performance over time"
                    />
                    <FeatureItem 
                      icon={<Zap className="w-5 h-5 text-orkestrate-pulse" />}
                      title="Compounding efficiency"
                      description="Learns your team’s playbooks and preferences so setup time gets easier and faster every campaign"
                    />
                    <FeatureItem 
                      icon={<Database className="w-5 h-5 text-orkestrate-pulse" />}
                      title="Memory layer"
                      description="Keeps context across campaigns so decisions improve instead of resetting every launch"
                    />
                  </div>
                </div>
                <div 
                  className="relative h-[250px] md:h-[400px] rounded-3xl border border-white/60 p-8 flex items-center justify-center transition-colors duration-500 group"
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
                  <div className="relative z-10 w-full h-full">
                    <IntelligenceAnimation />
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1 p-2 bg-orkestrate-crimson/20 rounded-lg shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
