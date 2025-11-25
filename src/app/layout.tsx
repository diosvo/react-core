import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';

import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainMono = JetBrains_Mono({
  variable: '--font-jetbrain-mono',
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
        className={`${inter.className} ${jetbrainMono.variable} antialiased`}
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
