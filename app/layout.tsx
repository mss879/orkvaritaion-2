import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://orkestrate.com'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#ffffff',
  title: {
    default: 'Orkestrate — Intelligence layer for marketing orchestration',
    template: '%s | Orkestrate',
  },
  icons: {
    icon: [
      { url: '/Favicon%20-%20Light.png', type: 'image/png', sizes: '16x16', media: '(prefers-color-scheme: light)' },
      { url: '/Favicon%20-%20Light.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/Favicon%20-%20Dark.png', type: 'image/png', sizes: '16x16', media: '(prefers-color-scheme: dark)' },
      { url: '/Favicon%20-%20Dark.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
    ],
    apple: [{ url: '/Favicon%20-%20Light.png', sizes: '180x180' }],
  },
  description:
    'Orchestrate your existing marketing stack with agentic infrastructure that turns data into campaigns, journeys, and experiments across your channels.',
  applicationName: 'Orkestrate',
  authors: [{ name: 'Orkestrate', url: 'https://orkestrate.com' }],
  generator: 'Next.js',
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
    'marketing orchestration',
    'AI agents',
    'ecommerce marketing',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Orkestrate',
    title: 'Orkestrate — Intelligence layer for marketing orchestration',
    description:
      'Orchestrate your existing marketing stack with agentic infrastructure that turns data into campaigns, journeys, and experiments across your channels.',
    images: [
      {
        url: '/share%20image.png',
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
    images: ['/share%20image.png'],
    creator: '@orkestrate',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Orkestrate',
    description: 'AI-powered marketing orchestration platform',
    url: 'https://orkestrate.com',
    logo: 'https://orkestrate.com/logo.png',
    sameAs: [
      'https://twitter.com/orkestrate',
      'https://www.linkedin.com/company/orkestrateco',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@orkestrate.com',
      contactType: 'customer service',
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.hubspot.com" />
        <link rel="dns-prefetch" href="https://cdn.simpleicons.org" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
