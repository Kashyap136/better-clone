'use client';
import styled from 'styled-components';
import Link from 'next/link';

const CalculatorSection = styled.section`
  background: #f5f7fa;
  padding: 5rem 2rem;
`;

const CalculatorContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CalculatorText = styled.div`
  flex: 1;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  }
  
  p {
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const CalculatorButton = styled(Link)`
  display: inline-block;
  background: #0066FF;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: #0052cc;
  }
`;

const CalculatorPreview = styled.div`
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function CalculatorCTA() {
  return (
    <CalculatorSection>
      <CalculatorContent>
        <CalculatorText>
          <h2>Calculate your monthly mortgage payment</h2>
          <p>
            Use our mortgage calculator to estimate your monthly payments and find
            the right mortgage option for you.
          </p>
          <CalculatorButton href="/mortgage-calculator">
            Try Calculator
          </CalculatorButton>
        </CalculatorText>
        <CalculatorPreview>
          {/* We'll add a simplified calculator preview here when implementing the full calculator */}
          <h3>Quick Estimate</h3>
        </CalculatorPreview>
      </CalculatorContent>
    </CalculatorSection>
  );
}