import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mert Sabinov',
  description: 'Software developer, open source contributor, and blogger.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-20 lg:p-14 md:p-10 sm:p-5">{children}</main>
      </body>
    </html>
  );
}
