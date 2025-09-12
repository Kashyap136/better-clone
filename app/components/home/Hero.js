'use client';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { fadeIn } from '../../../utils/animations';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(-45deg, #0066FF, #5C9DFF, #00A3FF, #0052CC);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  padding: 8rem 2rem;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0.1), transparent);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  span {
    color: #FFD700;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: white;
  color: #0066FF;
  padding: 1.25rem 3rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    background: #FFD700;
    color: #333;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingCircle = styled.div`
  position: absolute;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  
  &.circle1 {
    width: 300px;
    height: 300px;
    top: -100px;
    right: -50px;
  }

  &.circle2 {
    width: 200px;
    height: 200px;
    bottom: -50px;
    left: -50px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
  animation-delay: ${props => props.delay}s;
  opacity: 0;
  animation-fill-mode: forwards;

  .number {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #FFD700;
  }

  .label {
    font-size: 1rem;
    opacity: 0.9;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <FloatingElements>
        <FloatingCircle className="circle1" />
        <FloatingCircle className="circle2" />
      </FloatingElements>
      
      <HeroContent>
        <Title>Transform Your <span>Home Dreams</span><br />Into Reality</Title>
        <Subtitle>
          Experience a revolutionary way to secure your dream home. Fast, transparent, 
          and designed around you – welcome to the future of mortgages.
        </Subtitle>
        <CTAButton href="/start">Begin Your Journey</CTAButton>

        <StatsContainer>
          <StatItem delay={0.3}>
            <div className="number">$50B+</div>
            <div className="label">Loans Funded</div>
          </StatItem>
          <StatItem delay={0.5}>
            <div className="number">50K+</div>
            <div className="label">Happy Homeowners</div>
          </StatItem>
          <StatItem delay={0.7}>
            <div className="number">4.9/5</div>
            <div className="label">Customer Rating</div>
          </StatItem>
        </StatsContainer>
      </HeroContent>
    </HeroSection>
  );
}