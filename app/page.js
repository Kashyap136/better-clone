'use client';

import styled from 'styled-components';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import CalculatorCTA from './components/home/CalculatorCTA';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function HomePage() {
  return (
    <Container>
      <Hero />
      <Features />
      <CalculatorCTA />
    </Container>
  );
}
