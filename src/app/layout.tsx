import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Farewell Party | Batch 2022-2026 | CUSAT B.Tech',
  description:
    'A curated collection of memories and moments from the farewell party of B.Tech Electrical and Electronics Engineering graduates, Batch 2022-2026, CUSAT',
  keywords:
    'farewell, CUSAT, B.Tech, electrical engineering, 2022-2026, graduation, memories',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        {/* Footer removed for a cleaner luxury look per request. */}
      </body>
    </html>
  );
}
