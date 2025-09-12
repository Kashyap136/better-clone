'use client';
import styled from 'styled-components';
import Image from 'next/image';
import { fadeIn } from '../../../utils/animations';

const FeaturesSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 1000px;
    height: 1000px;
    background: radial-gradient(circle, rgba(0,122,255,0.05) 0%, rgba(0,122,255,0) 70%);
    top: -400px;
    right: -400px;
    border-radius: 50%;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(255,45,85,0.05) 0%, rgba(255,45,85,0) 70%);
    bottom: -300px;
    left: -300px;
    border-radius: 50%;
    z-index: 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;

  span {
    background: linear-gradient(135deg, #007AFF 0%, #FF2D55 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 4rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  animation: ${fadeIn} 0.6s ease-out;
  animation-delay: ${props => props.delay}s;
  opacity: 0;
  animation-fill-mode: forwards;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    .icon-container {
      transform: scale(1.1);
      background: linear-gradient(135deg, #007AFF 0%, #FF2D55 100%);

      img {
        filter: brightness(0) invert(1);
      }
    }
  }

  h3 {
    margin: 1.5rem 0 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a1a1a;
  }

  p {
    color: #666;
    line-height: 1.8;
    font-size: 1rem;
  }

  .icon-container {
    width: 80px;
    height: 80px;
    background: #f5f7fa;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    transition: all 0.3s ease;

    img {
      transition: all 0.3s ease;
    }
  }
  }
`;

export default function Features() {
  const features = [
    {
      icon: '/file.svg',
      title: 'Streamlined Process',
      description: 'Our digital-first approach eliminates paperwork and speeds up your mortgage journey significantly.'
    },
    {
      icon: '/globe.svg',
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprises. We believe in complete transparency throughout your home buying journey.'
    },
    {
      icon: '/window.svg',
      title: 'Expert Support',
      description: 'Our dedicated team of mortgage experts is available 24/7 to guide you every step of the way.'
    }
  ];

  return (
    <FeaturesSection>
      <SectionTitle>Why Choose <span>Better</span>?</SectionTitle>
      <SectionSubtitle>
        We've reimagined the mortgage process to put you first. Here's what makes us different.
      </SectionSubtitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index} delay={0.2 * (index + 1)}>
            <div className="icon-container">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={40}
                height={40}
              />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
}