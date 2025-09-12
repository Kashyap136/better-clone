'use client';
import { useState } from 'react';
import styled from 'styled-components';
import CalculatorForm from '../components/calculator/CalculatorForm';
import CalculatorResults from '../components/calculator/CalculatorResults';

const CalculatorPage = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    font-size: 1.125rem;
  }
`;

const CalculatorLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function MortgageCalculator() {
  const [calculationResults, setCalculationResults] = useState(null);

  const handleCalculate = (results) => {
    setCalculationResults(results);
  };

  return (
    <CalculatorPage>
      <Header>
        <h1>Mortgage Calculator</h1>
        <p>Estimate your monthly mortgage payments with our easy-to-use calculator.</p>
      </Header>
      <CalculatorLayout>
        <CalculatorForm onCalculate={handleCalculate} />
        <CalculatorResults results={calculationResults} />
      </CalculatorLayout>
    </CalculatorPage>
  );
}