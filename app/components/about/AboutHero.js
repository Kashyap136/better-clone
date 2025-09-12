'use client';
import styled from 'styled-components';

const AboutHeroSection = styled.section`
  background: linear-gradient(135deg, #0066FF 0%, #5C9DFF 100%);
  padding: 6rem 2rem;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.9;
`;

export default function AboutHero() {
  return (
    <AboutHeroSection>
      <HeroContent>
        <Title>Our mission is to make homeownership simpler</Title>
        <Subtitle>
          We're using technology to make the mortgage process faster, simpler, and 
          more accessible for everyone. Our goal is to revolutionize the industry 
          by putting customers first.
        </Subtitle>
      </HeroContent>
    </AboutHeroSection>
  );
}