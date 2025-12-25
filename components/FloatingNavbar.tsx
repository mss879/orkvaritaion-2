import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

const FloatingNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center" role="navigation" aria-label="Main navigation">
      <div 
        className="w-full max-w-6xl border-b border-x border-white/60 rounded-b-[32px] animate-in slide-in-from-top duration-700 ease-out relative"
        style={{
          background: 'radial-gradient(92.09% 124.47% at 50% 99.24%, rgba(251, 247, 239, 0.90) 58.91%, rgba(235, 228, 215, 0.90) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          boxShadow: '0 8px 32px 0 rgba(17, 24, 39, 0.08), 0 2px 8px 0 rgba(17, 24, 39, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.5)'
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
        <div className="px-6 py-3 relative z-10">
          <div className="flex h-12 items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Orkestrate - Home">
              <Image 
                src="/logo.png" 
                alt="Orkestrate" 
                width={120} 
                height={34} 
                priority 
                fetchPriority="high"
              />
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" className="h-9 text-sm font-medium hover:bg-black/5">
                <Link href="#login">Log in</Link>
              </Button>
              <Button asChild className="h-9 rounded-full px-5 text-sm">
                <Link href="#get-started">Get started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
