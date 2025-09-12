'use client';
import styled from 'styled-components';
import { formatCurrency } from '../../utils/calculatorUtils';

const ResultsContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TotalPayment = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;

  h3 {
    color: #666;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }

  .amount {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0066FF;
  }
`;

const PaymentBreakdown = styled.div`
  h4 {
    color: #333;
    margin-bottom: 1rem;
  }
`;

const BreakdownItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 1rem;

  .label {
    color: #666;
  }

  .value {
    font-weight: 500;
    color: #333;
  }
`;

export default function CalculatorResults({ results }) {
  if (!results) return null;

  return (
    <ResultsContainer>
      <TotalPayment>
        <h3>Estimated Monthly Payment</h3>
        <div className="amount">{formatCurrency(results.total)}</div>
      </TotalPayment>

      <PaymentBreakdown>
        <h4>Payment Breakdown</h4>
        <BreakdownItem>
          <span className="label">Principal & Interest</span>
          <span className="value">{formatCurrency(results.principal)}</span>
        </BreakdownItem>
        <BreakdownItem>
          <span className="label">Property Tax</span>
          <span className="value">{formatCurrency(results.tax)}</span>
        </BreakdownItem>
        <BreakdownItem>
          <span className="label">Home Insurance</span>
          <span className="value">{formatCurrency(results.insurance)}</span>
        </BreakdownItem>
      </PaymentBreakdown>
    </ResultsContainer>
  );
}