'use client';

import { usePathname } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      {!isHomePage && <Navigation />}
      <main className={isHomePage ? '' : 'min-h-screen'}>
        {children}
      </main>
      {!isHomePage && <Footer />}
      <CookieBanner />
    </>
  );
}
