'use client';
import { useState } from 'react';
import styled from 'styled-components';
import { calculateMortgage, formatCurrency, formatPercentage, parseCurrencyInput } from '../../utils/calculatorUtils';

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 500;
    color: #333;
  }

  input {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #0066FF;
    }
  }
`;

const RangeInput = styled.div`
  input[type="range"] {
    width: 100%;
    margin: 0.5rem 0;
  }

  .range-labels {
    display: flex;
    justify-content: space-between;
    color: #666;
    font-size: 0.875rem;
  }
`;

const CalculateButton = styled.button`
  background: #0066FF;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0052cc;
  }
`;

export default function CalculatorForm({ onCalculate }) {
  const [formData, setFormData] = useState({
    homePrice: 300000,
    downPayment: 60000,
    loanTerm: 30,
    interestRate: 3.5,
    propertyTax: 3600,
    insurance: 1200
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;

    // Parse currency inputs
    if (['homePrice', 'downPayment', 'propertyTax', 'insurance'].includes(name)) {
      parsedValue = parseCurrencyInput(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: parsedValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const principal = formData.homePrice - formData.downPayment;
    const result = calculateMortgage(
      principal,
      formData.interestRate,
      formData.loanTerm,
      formData.propertyTax,
      formData.insurance
    );
    onCalculate(result);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label>Home Price</label>
          <input
            type="text"
            name="homePrice"
            value={formatCurrency(formData.homePrice)}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Down Payment</label>
          <input
            type="text"
            name="downPayment"
            value={formatCurrency(formData.downPayment)}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Loan Term (Years)</label>
          <RangeInput>
            <input
              type="range"
              name="loanTerm"
              min="15"
              max="30"
              step="15"
              value={formData.loanTerm}
              onChange={handleInputChange}
            />
            <div className="range-labels">
              <span>15 years</span>
              <span>30 years</span>
            </div>
          </RangeInput>
        </FormGroup>

        <FormGroup>
          <label>Interest Rate (%)</label>
          <input
            type="number"
            name="interestRate"
            step="0.1"
            value={formData.interestRate}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Annual Property Tax</label>
          <input
            type="text"
            name="propertyTax"
            value={formatCurrency(formData.propertyTax)}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Annual Insurance</label>
          <input
            type="text"
            name="insurance"
            value={formatCurrency(formData.insurance)}
            onChange={handleInputChange}
          />
        </FormGroup>

        <CalculateButton type="submit">
          Calculate Payment
        </CalculateButton>
      </Form>
    </FormContainer>
  );
}