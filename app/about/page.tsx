import type { Metadata } from "next";
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

      {/* Section 1: The Hero (The Vision) */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_0%,#fff7ed_0%,#ffffff_70%)]" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <ScrollAnimationWrapper>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 mb-8">
              <span className="text-sm font-medium text-orange-600">
                From Marketers to Orchestrators
              </span>
            </div>
            <h1 className="font-black text-5xl md:text-7xl tracking-tight text-gray-900 mb-8">
              We are building the command center for the{" "}
              <span className="text-orange-600">Agentic Era.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              We believe marketing shouldn't be about connecting pipes or moving
              data. It should be about designing outcomes.
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="mt-12 max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              For too long, brilliant marketing teams have been stuck in the
              "Execution Trap." They spend days designing, developing, and
              troubleshooting single campaigns, leaving no room for strategy. We
              created Orkestrate to flip the script—giving marketers an
              intelligent layer of AI agents that handle the "how," so you can
              focus on the "why."
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Section 2: The Origin Story (The "Why") */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimationWrapper>
              <h2 className="font-black text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
                Born from the frustration of{" "}
                <span className="text-orange-600">1,700+ CMOs.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  After years of building Marketing Technology and working
                  alongside the world’s top CMOs, our founders noticed a glaring
                  pattern. The tools were getting better, but the work was
                  getting harder.
                </p>
                <p>Teams were drowning in SaaS tasks.</p>
                <ul className="space-y-4 mt-4">
                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-orange-100 text-orange-600 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>
                      <strong className="text-gray-900">72% of marketers</strong>{" "}
                      were forced to reuse old creatives because new production
                      was too slow.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-orange-100 text-orange-600 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>
                      <strong className="text-gray-900">
                        43% of "personalized" experiences
                      </strong>{" "}
                      felt generic to customers.
                    </span>
                  </li>
                </ul>
                <p>
                  We realized the problem wasn't the tools—it was the workflow.
                  The modern stack was fragmented, brittle, and manual. It
                  needed an orchestrator.
                </p>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-8">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                    <div className="p-2 bg-red-100 rounded-lg text-red-600">
                      <Layout className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">The Problem</p>
                      <p className="text-sm text-gray-600">Drowning in SaaS tasks</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">The Solution</p>
                      <p className="text-sm text-gray-600">Intelligent Orchestration</p>
                    </div>
                  </div>
                </div>
              </div>
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
                    Result: 2.5 hours to orchestrate outcomes that are humanly impossible to scale manually.
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

      {/* Section 5: Leadership (The Team) */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimationWrapper className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl text-gray-900 mb-6">
              Built by MarTech Veterans.
            </h2>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimationWrapper className="bg-white rounded-3xl p-8 border border-gray-200 text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900">Founder Name</h3>
              <p className="text-orange-600 font-medium mb-4">CEO</p>
              <p className="text-gray-600 italic">"Driving the vision of Agentic Marketing."</p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="bg-white rounded-3xl p-8 border border-gray-200 text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900">Founder Name</h3>
              <p className="text-orange-600 font-medium mb-4">CTO</p>
              <p className="text-gray-600 italic">"Architecting the intelligence layer."</p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="bg-white rounded-3xl p-8 border border-gray-200 text-center flex flex-col justify-center">
              <div className="p-4 bg-orange-50 rounded-full mx-auto mb-6 text-orange-600">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Advisors</h3>
              <p className="text-gray-600 mt-4">
                Backed by industry leaders who have scaled Shopify's biggest brands.
              </p>
            </ScrollAnimationWrapper>
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
            <p className="mt-8 text-gray-500 font-medium">
              Join the marketers turning 2 weeks of work into 2 hours.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
}
