'use client';

import StyledComponentsRegistry from './registry';
import { Navbar } from '../app/components/navigation/Navbar';
import { Footer } from '../app/components/navigation/Footer';
import PageTransition from '../app/components/shared/PageTransition';

export default function RootLayoutClient({ children }) {
  return (
    <>
      <Navbar />
      <PageTransition>
        {children}
      </PageTransition>
      <Footer />
    </>
  );
}