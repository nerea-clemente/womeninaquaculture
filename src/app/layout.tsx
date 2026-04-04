import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Women in Aquaculture — Empowering Women. Transforming Aquaculture.',
  description:
    'Women in Aquaculture (WiA) is a global non-profit connecting, supporting and celebrating women across aquaculture — from farming and science to leadership and entrepreneurship.',
  keywords: 'women in aquaculture, aquaculture, women, community, mentoring, leadership, sustainability',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: 'Thalassa';
                src: url('/womeninaquaculture/fonts/Thalassa.otf') format('opentype');
                font-weight: 400;
                font-style: normal;
                font-display: swap;
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
