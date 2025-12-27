'use client';

import { useMemo, useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import FloatingNavbar from '@/components/FloatingNavbar';
import Footer from '@/components/Footer';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import GlassPanel from '@/components/GlassPanel';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
    const [submitMessage, setSubmitMessage] = useState<string>('');
    const [monthlyActiveUsers, setMonthlyActiveUsers] = useState<string>('');
    const [annualRevenue, setAnnualRevenue] = useState<string>('');

    const statusText = useMemo(() => {
        if (submitState === 'success') return submitMessage || 'Thanks — we received your message.';
        if (submitState === 'error') return submitMessage || 'Something went wrong. Please try again.';
        return '';
    }, [submitMessage, submitState]);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (isSubmitting) return;

        const form = event.currentTarget;
        setIsSubmitting(true);
        setSubmitState('idle');
        setSubmitMessage('');

        try {
            const formData = new FormData(form);
            const payload = {
                first_name: String(formData.get('first_name') ?? '').trim(),
                last_name: String(formData.get('last_name') ?? '').trim(),
                email: String(formData.get('email') ?? '').trim(),
                phone_number: String(formData.get('phone_number') ?? '').trim(),
                category: String(formData.get('category') ?? '').trim(),
                monthly_active_users: String(formData.get('monthly_active_users') ?? '').trim(),
                annual_revenue: String(formData.get('annual_revenue') ?? '').trim(),
                message: String(formData.get('message') ?? '').trim(),
            };

            // Send email using EmailJS
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                payload,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setSubmitState('success');
            setSubmitMessage('Thanks — we’ll get back to you shortly.');
            form.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitState('error');
            setSubmitMessage('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }

  return (
    <div className="min-h-screen bg-white">
      <FloatingNavbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <ScrollAnimationWrapper className="text-center mb-16 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5">
                    <span className="text-sm font-medium text-orange-600">Contact us</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
                    Get in touch with our team
                </h1>
            </ScrollAnimationWrapper>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                {/* Left Column: Contact Info */}
                <ScrollAnimationWrapper className="space-y-12">
                    <div>
                        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                            Feel free to reach out - we'd love to connect.
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Whether you have a question about features, pricing, or need a demo, our team is ready to answer all your questions.
                        </p>
                        <div className="mt-6">
                            <a
                                href="https://calendar.app.google/bHLMbUhsobXQb8v2A"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Book a meeting
                            </a>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Email */}
                        <div className="flex items-start gap-4 group">
                            <div className="p-3 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-100 transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-neutral-900 mb-1">Email us</h3>
                                <a href="mailto:hello@orkestrate.com" className="text-gray-600 hover:text-orange-600 transition-colors">
                                    hello@orkestrate.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4 group">
                            <div className="p-3 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-100 transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-neutral-900 mb-1">Call us</h3>
                                <a href="tel:+14158150649" className="text-gray-600 hover:text-orange-600 transition-colors">
                                    +1 415 815 0649
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollAnimationWrapper>

                {/* Right Column: Form */}
                <ScrollAnimationWrapper>
                    <GlassPanel className="rounded-[2rem] border border-white/60 p-8 md:p-10">
                    <form className="space-y-6" onSubmit={onSubmit}>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-900">First Name</label>
                                <input 
                                    name="first_name"
                                    type="text" 
                                    placeholder="First name" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white placeholder:text-gray-400" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-900">Last Name</label>
                                <input 
                                    name="last_name"
                                    type="text" 
                                    placeholder="Last name" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white placeholder:text-gray-400" 
                                />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-900">Email</label>
                                <input 
                                    name="email"
                                    type="email" 
                                    placeholder="Your email" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white placeholder:text-gray-400" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-900">Phone Number</label>
                                <input 
                                    name="phone_number"
                                    type="tel" 
                                    placeholder="Your phone" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white placeholder:text-gray-400" 
                                />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-900">Category</label>
                                <input
                                    name="category"
                                    type="text"
                                    placeholder="e.g. Fashion"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-900">Monthly Active Users</label>
                            <input type="hidden" name="monthly_active_users" value={monthlyActiveUsers} />
                            <Select value={monthlyActiveUsers} onValueChange={setMonthlyActiveUsers}>
                                <SelectTrigger className="h-auto w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-neutral-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500">
                                    <SelectValue placeholder="Select monthly active users" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Less than 50,000">Less than 50,000</SelectItem>
                                    <SelectItem value="50-100">50-100</SelectItem>
                                    <SelectItem value="100-200">100-200</SelectItem>
                                    <SelectItem value="200-400">200-400</SelectItem>
                                    <SelectItem value="400+">400+</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-900">Annual Revenue</label>
                            <input type="hidden" name="annual_revenue" value={annualRevenue} />
                            <Select value={annualRevenue} onValueChange={setAnnualRevenue}>
                                <SelectTrigger className="h-auto w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-neutral-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500">
                                    <SelectValue placeholder="Select annual revenue" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Less than 1M a year">Less than 1M a year</SelectItem>
                                    <SelectItem value="1-5M">1-5M</SelectItem>
                                    <SelectItem value="5-50M">5-50M</SelectItem>
                                    <SelectItem value="50-100M">50-100M</SelectItem>
                                    <SelectItem value="100M+">100M+</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-900">Message</label>
                            <textarea 
                                name="message"
                                placeholder="Write your message" 
                                rows={4} 
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white resize-none placeholder:text-gray-400" 
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full py-4 rounded-xl bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:bg-neutral-900 disabled:hover:shadow-lg disabled:hover:translate-y-0"
                        >
                            {isSubmitting ? 'Submitting…' : 'Submit'}
                        </button>

                        {statusText ? (
                          <p
                            className={
                              submitState === 'success'
                                ? 'text-center text-sm text-green-700'
                                : 'text-center text-sm text-red-600'
                            }
                            role={submitState === 'error' ? 'alert' : 'status'}
                          >
                            {statusText}
                          </p>
                        ) : null}

                        <p className="text-center text-sm text-gray-500">
                            By submitting this form you agree to our friendly <a href="/privacy" className="underline hover:text-neutral-900 transition-colors">Privacy Policy</a>
                        </p>
                    </form>
                    </GlassPanel>
                </ScrollAnimationWrapper>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
