import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../global.css'; // Adjusted path for global.css if it's directly in app/
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Font configuration
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // CSS variable for sans-serif
  display: 'swap',
});

export const metadata: Metadata = {
  title: '[Your Name] - Flood & Environmental Insights',
  description: 'Expert insights on flood risk, drainage, environmental consulting, and sustainable development by [Your Name].',
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
    <html lang="en" data-theme="mytheme" className={`${montserrat.variable} font-sans`}>
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