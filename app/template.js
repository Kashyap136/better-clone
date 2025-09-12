'use client';

import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const Navbar = dynamic(() => import('./components/navigation/Navbar').then(mod => ({ default: mod.Navbar })), {
  ssr: false
});

const Footer = dynamic(() => import('./components/navigation/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: false
});

const PageTransition = dynamic(() => import('./components/shared/PageTransition'), {
  ssr: false
});

export default function Template({ children }) {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
}