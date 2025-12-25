import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Github, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://twitter.com', label: 'Twitter', Icon: Twitter },
    { href: 'https://www.linkedin.com/company/orkestrateco', label: 'LinkedIn', Icon: Linkedin },
    { href: 'https://github.com', label: 'GitHub', Icon: Github },
    { href: 'https://instagram.com', label: 'Instagram', Icon: Instagram },
  ];

  const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ];

  return (
    <footer className="relative bg-[#1a0505] text-white overflow-hidden pt-24 md:pt-32 pb-10">
      {/* Background Gradients */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-orkestrate-pulse/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-orkestrate-pulse/20 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* Large Watermark Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pointer-events-none select-none overflow-hidden flex justify-center items-end z-0 opacity-[0.03]">
        <span className="text-[15vw] md:text-[18vw] font-bold leading-none tracking-tighter whitespace-nowrap text-white">
          Orkestrate
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* CTA Section */}
        <div className="flex flex-col items-start text-left mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
            Ready to start your<br />
            AI journey with us?
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3.5 rounded-lg bg-[#2a1008] border border-white/10 text-white font-medium hover:bg-[#3a160b] transition-colors min-w-[140px] text-center shadow-lg shadow-orange-900/20"
            >
              Get Started
            </Link>
            <Link 
              href="mailto:hello@orkestrate.com" 
              className="px-8 py-3.5 rounded-lg bg-white text-neutral-900 font-medium hover:bg-gray-100 transition-colors min-w-[140px] text-center"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 mb-16" />

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          {/* Left: Brand & Socials */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image 
                  src="/logo.png" 
                  alt="Orkestrate" 
                  width={160} 
                  height={45} 
                  className="brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400 text-sm">
                Marketing made smarter and simple
              </p>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/20 text-gray-400 hover:border-white hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Links */}
          <div className="md:col-span-7 flex flex-col sm:flex-row justify-end gap-16 md:gap-24">
            {/* Navigation */}
            <div>
              <h4 className="font-medium text-white mb-6">Use Link</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {/* Additional links to match design density if needed */}
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Book Demo</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-medium text-white mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+14158150649"
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    +1 415 815 0649
                  </a>
                </li>
                <li>
                  <Link
                    href="mailto:hello@orkestrate.com"
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    hello@orkestrate.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p>© {currentYear} Orkestrate. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
