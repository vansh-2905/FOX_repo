import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { FloatingMenu } from '@/components/floating-menu/FloatingMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FOY - Your Premier Streaming Platform',
  description: 'Stream your favorite shows and movies on FOY',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-black`} suppressHydrationWarning>
        <Navbar />
        {children}
        <FloatingMenu />
      </body>
    </html>
  );
}