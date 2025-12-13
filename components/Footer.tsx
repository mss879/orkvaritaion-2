import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Github, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://twitter.com', label: 'Twitter', Icon: Twitter },
    { href: 'https://linkedin.com', label: 'LinkedIn', Icon: Linkedin },
    { href: 'https://github.com', label: 'GitHub', Icon: Github },
    { href: 'https://instagram.com', label: 'Instagram', Icon: Instagram },
  ];

  const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo.png" 
                alt="Orkestrate" 
                width={140} 
                height={40} 
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm max-w-md mb-6">
              Agentic infrastructure that connects your data, automates your marketing, 
              and drives revenue growth with intelligent insights.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#DD3B2F] hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Navigation
            </h4>
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
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-300">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="mailto:hello@orkestrate.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  hello@orkestrate.com
                </Link>
              </li>
            </ul>

            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 mt-6 text-gray-300">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Orkestrate. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <span className="flex items-center gap-1">
                Powered by <span className="text-white font-medium">Next.js</span>
              </span>
              <span className="text-gray-600">•</span>
              <span className="flex items-center gap-1">
                Built by <span className="text-[#DD3B2F] font-medium">ARC AI</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
