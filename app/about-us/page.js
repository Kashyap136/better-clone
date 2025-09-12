'use client';
import styled from 'styled-components';
import AboutHero from '../components/about/AboutHero';
import Mission from '../components/about/Mission';
import Team from '../components/about/Team';

const AboutPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function AboutUs() {
  return (
    <AboutPage>
      <AboutHero />
      <Mission />
      <Team />
    </AboutPage>
  );
}