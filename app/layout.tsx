import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://beacoet.com'),
  title: 'BeaCoet : Business, Understood Differently.',
  description: 'BeaCoet is building an AI-powered business operating system designed to help businesses understand their context, make better decisions, and move forward with clarity.',
  keywords: 'BeaCoet, AI Business Operating System, business context, strategic clarity, intelligent business OS, pre-launch',
  openGraph: {
    title: 'BeaCoet : Business, Understood Differently.',
    description: 'BeaCoet is building an AI-powered business operating system designed to help businesses understand their context, make better decisions, and move forward with clarity.',
    url: 'https://beacoet.com/',
    siteName: 'BeaCoet',
    images: [
      {
        url: '/images/beacoet_logo_gold.webp',
        width: 1200,
        height: 630,
        alt: 'BeaCoet : Business, Understood Differently.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeaCoet : Business, Understood Differently.',
    description: 'BeaCoet is building an AI-powered business operating system designed to help businesses understand their context, make better decisions, and move forward with clarity.',
    images: ['/images/beacoet_logo_gold.webp'],
  },
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BeaCoet',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'BeaCoet is building an AI-powered business operating system designed to help businesses understand their context, make better decisions, and move forward with clarity.',
  };

  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WP6SQZRNDD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WP6SQZRNDD');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script src="/modals.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
