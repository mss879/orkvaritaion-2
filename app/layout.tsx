import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Orkestrate — Intelligence layer for marketing orchestration',
    template: '%s | Orkestrate',
  },
  icons: {
    icon: [{ url: '/Favicon%20-%20Light.png', type: 'image/png' }],
  },
  description:
    'Orchestrate your existing marketing stack with agentic infrastructure that turns data into campaigns, journeys, and experiments across your channels.',
  applicationName: 'Orkestrate',
  keywords: [
    'Orkestrate',
    'AI marketing',
    'agentic marketing',
    'marketing automation',
    'Shopify marketing',
    'Klaviyo',
    'Attentive',
    'Braze',
    'CDP',
    'data warehouse',
    'customer journeys',
    'personalization',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Orkestrate',
    title: 'Orkestrate — Intelligence layer for marketing orchestration',
    description:
      'Orchestrate your existing marketing stack with agentic infrastructure that turns data into campaigns, journeys, and experiments across your channels.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Orkestrate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orkestrate — Intelligence layer for marketing orchestration',
    description:
      'Orchestrate your existing marketing stack with agentic infrastructure that turns data into campaigns, journeys, and experiments across your channels.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
