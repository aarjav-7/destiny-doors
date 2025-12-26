import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-accent',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shilpaajain.com'),
  title: {
    default: 'Shilpa A Jain — Numerologist & Life Guidance Expert',
    template: '%s | Shilpa A Jain'
  },
  description: 'Personal numerology guidance for clarity, career progress, and meaningful relationships. Book a session with certified numerologist Shilpa A Jain.',
  keywords: ['numerology', 'life guidance', 'numerologist', 'personal consultation', 'career guidance', 'relationship compatibility'],
  authors: [{ name: 'Shilpa A Jain' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shilpaajain.com',
    siteName: 'Shilpa A Jain',
    title: 'Shilpa A Jain — Numerologist & Life Guidance Expert',
    description: 'Personal numerology guidance for clarity, career progress, and meaningful relationships.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shilpa A Jain — Numerologist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shilpa A Jain — Numerologist & Life Guidance Expert',
    description: 'Personal numerology guidance for clarity, career progress, and meaningful relationships.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="font-body bg-base text-gray-warm antialiased">
        <ScrollProgress />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:shadow-lg">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
