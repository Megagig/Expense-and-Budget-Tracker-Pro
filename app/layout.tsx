'use client';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { useThemeStore } from '@/store/useThemeStore';
import Navbar from '@/components/Navbar';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Expense Tracker',
//   description: 'Track your expenses and create a budget',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useThemeStore();
  return (
    <ClerkProvider>
      <html lang="en" data-theme={theme}>
        <body className={`${roboto.className} theme-${theme}`}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
