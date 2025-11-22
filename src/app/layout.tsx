import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'React Core',
  description: 'Learn React with a focus on core concepts and best practices.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        <NuqsAdapter>
          <SidebarProvider>
            <AppSidebar />
            <main className="flex-1">
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
          <Toaster richColors position="top-center" />
        </NuqsAdapter>
      </body>
    </html>
  );
}
