import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe,
  Layers,
  Layout,
  Users,
  Zap,
} from "lucide-react";
import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us | Orkestrate",
  description:
    "We are building the command center for the Agentic Era. Orkestrate gives marketers an intelligent layer of AI agents that handle execution so you can focus on strategy.",
  openGraph: {
    title: "About Us | Orkestrate",
    description:
      "We are building the command center for the Agentic Era. Orkestrate gives marketers an intelligent layer of AI agents that handle execution so you can focus on strategy.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <FloatingNavbar />

      {/* Section 1: Meet Orkestrate */}
      <section className="pt-32 pb-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimationWrapper>
            <h1 className="font-black text-5xl md:text-6xl text-gray-900 mb-4">
              Meet Orkestrate:
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
              The <span className="text-orange-600">Agentic Customer Journey Orchestration</span> Platform
            </h2>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimationWrapper>
              <h2 className="font-black text-4xl text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Orkestrate was founded by a group of MarTech veterans and AI
                  engineers based on our collective expertise in advancing
                  marketing automation at top global companies.
                </p>
                <p>
                  We started Orkestrate because we saw a paradigm shift unfolding
                  where the most successful marketing teams were drowning in
                  execution tasks rather than focusing on strategy.
                </p>
                <p>
                  We realized the problem wasn't the tools—it was the workflow.
                  The modern stack was fragmented, brittle, and manual. It needed
                  an orchestrator to shift from static rules to real-time
                  decision-making driven by AI agents.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Section 3: Our Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 md:px-10 lg:py-20 2xl:px-20">
          <div className="text-gray-800 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            <div className="px-4 py-6 flex items-center sm:px-6 lg:p-10 2xl:p-16">
              <ScrollAnimationWrapper>
                <header>
                  <p className="mb-6">
                    <span className="text-orange-600 border border-orange-600 rounded-sm px-3 py-2 inline-block text-xs font-medium uppercase tracking-wider">
                      Our Values
                    </span>
                  </p>
                  <h2 className="font-black text-5xl text-gray-900 leading-tight">
                    What We<br /> Believe In
                  </h2>
                </header>
              </ScrollAnimationWrapper>
            </div>

            <ScrollAnimationWrapper className="px-4 py-6 sm:px-6">
              <div className="mb-6">
                <img
                  alt="Quality"
                  loading="lazy"
                  width={733}
                  height={342}
                  decoding="async"
                  className="block w-full rounded-xl border border-solid border-orange-100"
                  style={{ color: "transparent", filter: "invert(46%) sepia(92%) saturate(1846%) hue-rotate(360deg) brightness(96%) contrast(96%)" }}
                  src="/quality.svg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive to achieve the highest standards of excellence in every
                component of our work.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="px-4 py-6 sm:px-6">
              <div className="mb-6">
                <img
                  alt="Ownership"
                  loading="lazy"
                  width={733}
                  height={342}
                  decoding="async"
                  className="block w-full rounded-xl border border-solid border-orange-100"
                  style={{ color: "transparent", filter: "invert(46%) sepia(92%) saturate(1846%) hue-rotate(360deg) brightness(96%) contrast(96%)" }}
                  src="/pOwnership.svg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ownership</h3>
              <p className="text-gray-600 leading-relaxed">
                The best companies are built by teams who take initiative and are
                willing to go above & beyond their job description.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="px-4 py-6 sm:px-6">
              <div className="mb-6">
                <img
                  alt="Transparency"
                  loading="lazy"
                  width={733}
                  height={342}
                  decoding="async"
                  className="block w-full rounded-xl border border-solid border-orange-100"
                  style={{ color: "transparent", filter: "invert(46%) sepia(92%) saturate(1846%) hue-rotate(360deg) brightness(96%) contrast(96%)" }}
                  src="/Transparency.svg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                Trust is built on transparency. We believe in clear, honest
                communication.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="px-4 py-6 sm:px-6">
              <div className="mb-6">
                <img
                  alt="Customer Obsession"
                  loading="lazy"
                  width={733}
                  height={342}
                  decoding="async"
                  className="block w-full rounded-xl border border-solid border-orange-100"
                  style={{ color: "transparent", filter: "invert(46%) sepia(92%) saturate(1846%) hue-rotate(360deg) brightness(96%) contrast(96%)" }}
                  src="/Customer Obsession.svg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Customer Obsession
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our North Star — Orkestrate's success is measured by the success
                of our customers.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="px-4 py-6 sm:px-6">
              <div className="mb-6">
                <img
                  alt="Velocity"
                  loading="lazy"
                  width={733}
                  height={342}
                  decoding="async"
                  className="block w-full rounded-xl border border-solid border-orange-100"
                  style={{ color: "transparent", filter: "invert(46%) sepia(92%) saturate(1846%) hue-rotate(360deg) brightness(96%) contrast(96%)" }}
                  src="/Velocity.svg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Velocity</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe rapid execution and decision-making are essential to
                maintaining a competitive edge.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Section 3: Our Philosophy (The Shift) */}
      <section className="py-24 px-4 bg-gradient-to-br from-orange-600 to-orange-500 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollAnimationWrapper className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-6xl mb-6">
              Execution is Linear.
              <br />
              <span className="text-orange-100">Orchestration is Exponential.</span>
            </h2>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <ScrollAnimationWrapper className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Layout className="w-8 h-8 text-white/80" />
                </div>
                <h3 className="text-2xl font-bold">The Old Way (Execution)</h3>
              </div>
              <div className="space-y-4 text-white/80 text-lg">
                <p>You define the steps.</p>
                <p>You pull the data.</p>
                <p>You write the copy.</p>
                <p>You test the links.</p>
                <div className="pt-4 border-t border-white/20">
                  <p className="font-bold text-white">Result: 18 hours for one campaign.</p>
                </div>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="bg-white text-orange-900 rounded-3xl p-8 border border-white shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-100 rounded-xl">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold">The Orkestrate Way</h3>
              </div>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>You define the goal.</p>
                <p>Our swarm of agents understands your brand.</p>
                <p>Studies your customer data.</p>
                <p>Executes the best path forward.</p>
                <div className="pt-4 border-t border-orange-100">
                  <p className="font-bold text-orange-600">
                    Result: 2.5 hours for the same campaign.
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Section 4: The Technology (The "Secret Sauce") */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimationWrapper className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl text-gray-900 mb-6">
              Powered by Reason, <span className="text-orange-600">Not Rules.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional automation relies on "If This, Then That" rules that
              break the moment consumer behavior changes. Orkestrate is
              different.
            </p>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hyper-Targeting Models",
                desc: "Find the right audience without manual segmentation.",
                icon: Users,
              },
              {
                title: "Always-On Sentinels",
                desc: "Monitor your data 24/7 for risks and opportunities.",
                icon: Globe,
              },
              {
                title: "Category & Brand Models",
                desc: "Understand the nuance of your specific industry (e.g., selling furniture vs. selling t-shirts).",
                icon: Layers,
              },
            ].map((item, i) => (
              <ScrollAnimationWrapper key={i} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-orange-200 transition-colors group">
                <div className="p-4 bg-white rounded-2xl inline-flex mb-6 shadow-sm group-hover:shadow-md transition-all text-orange-600">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: The Future (Call to Action) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimationWrapper>
            <h2 className="font-black text-5xl md:text-7xl text-gray-900 mb-8">
              Ready to <span className="text-orange-600">10x your output?</span>
            </h2>
            <p className="text-2xl text-gray-600 mb-12 font-medium">
              Stop managing tools. Start orchestrating growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors w-full sm:w-auto">
                Join the Waitlist
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-bold text-lg hover:border-orange-600 hover:text-orange-600 transition-colors w-full sm:w-auto">
                Request a Demo
              </button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
}
