import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

const FloatingNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center" role="navigation" aria-label="Main navigation">
      <div className="w-full max-w-6xl bg-[#fbf7ef]/90 backdrop-blur-xl border-b border-x border-black/5 rounded-b-[32px] shadow-sm animate-in slide-in-from-top duration-700 ease-out">
        <div className="px-6 py-3">
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
