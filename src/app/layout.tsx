import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { RecyBot } from '@/components/RecyBot';
import { Analytics } from '@/components/Analytics';

export const metadata: Metadata = {
  title: 'ECONE | Circular Formwork Panels Built from Recycled Plastic',
  description: 'ECONE builds circular formwork panels from recycled plastic for smarter, lighter, and more sustainable construction workflows.',
  keywords: ['recycled plastic formwork', 'circular formwork panels', 'plywood alternative formwork', 'plastic formwork for construction', 'sustainable construction materials', 'formwork cost calculator', 'construction carbon impact calculator', 'ECONE'],
  openGraph: {
    title: 'ECONE | Circular Formwork Panels Built from Recycled Plastic',
    description: 'ECONE builds circular formwork panels from recycled plastic for smarter, lighter, and more sustainable construction workflows.',
    images: ['/images/econe-logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECONE | Circular Formwork Panels Built from Recycled Plastic',
    description: 'ECONE builds circular formwork panels from recycled plastic for smarter, lighter, and more sustainable construction workflows.',
    images: ['/images/econe-logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Analytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <RecyBot />
      </body>
    </html>
  );
}
