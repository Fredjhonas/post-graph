import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppQueryClientProvider } from '@/components/AppQueryClientProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Post Graph App',
  description: 'A simple app using api with posts for Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AppQueryClientProvider>
  );
}
