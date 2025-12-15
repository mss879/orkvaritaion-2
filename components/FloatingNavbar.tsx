import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

const FloatingNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20">
      <div className="bg-[#fbf7ef]/70 backdrop-blur supports-[backdrop-filter]:bg-[#fbf7ef]/60 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Orkestrate" width={140} height={40} priority />
            </Link>

            <div className="hidden md:flex items-center gap-10 text-base font-medium text-foreground/80">
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
              <Button asChild variant="secondary" className="h-9 bg-neutral-900 text-white hover:bg-neutral-800">
                <Link href="#login">Log in</Link>
              </Button>
              <Button asChild className="h-9">
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
