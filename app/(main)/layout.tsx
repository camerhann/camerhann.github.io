import type { Metadata } from 'next';
import { Montserrat, Merriweather } from 'next/font/google';
import Script from 'next/script'; // Import the Script component
import '../global.css'; // Adjusted path for global.css if it's directly in app/
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Font configuration
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // CSS variable for sans-serif
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather', // CSS variable for serif
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chris Cameron-Hann - Flood & Environmental Insights',
  description: 'Expert insights on flood risk assessment, environmental consulting, and sustainable development. Authored by Chris Cameron-Hann, founder of Aegaea.',
  // Add more metadata: openGraph, twitter, icons etc.
  icons: {
    icon: '/favicon.ico', // Place your favicon in public/
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="mytheme" className={`${montserrat.variable} ${merriweather.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TFQY841XR9"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TFQY841XR9');
            `,
          }}
        />
      </head>
      <body>
        <div className="flex flex-col min-h-screen bg-brand-bg-light">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 