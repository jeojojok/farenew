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
        <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Batch 2022-2026
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  B.Tech in Electrical and Electronics Engineering
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Cochin University of Science and Technology (CUSAT)
                </p>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <p className="text-xs sm:text-sm text-gray-400">
                  © 2026 Farewell Party. All memories preserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
