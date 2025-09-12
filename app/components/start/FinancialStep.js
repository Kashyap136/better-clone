'use client';
import styled from 'styled-components';
import { formatCurrency, parseCurrencyInput } from '../../utils/calculatorUtils';

const FormStep = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
  }

  input {
    width: 100%;
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

const RadioGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
`;

const RadioButton = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid ${props => props.selected ? '#0066FF' : '#ddd'};
  border-radius: 4px;
  cursor: pointer;
  background: ${props => props.selected ? '#f0f7ff' : 'white'};
  
  input {
    margin-right: 0.5rem;
    width: auto;
  }
`;

// Step 3: Financial Information
export function FinancialStep({ formData, setFormData }) {
  const handleCurrencyInput = (e, field) => {
    const value = parseCurrencyInput(e.target.value);
    setFormData({...formData, [field]: value});
  };

  return (
    <FormStep>
      <FormGroup>
        <label>What's your estimated credit score?</label>
        <RadioGroup>
          <RadioButton selected={formData.creditScore === 'excellent'}>
            <input
              type="radio"
              name="creditScore"
              value="excellent"
              checked={formData.creditScore === 'excellent'}
              onChange={(e) => setFormData({...formData, creditScore: e.target.value})}
            />
            Excellent (720+)
          </RadioButton>
          <RadioButton selected={formData.creditScore === 'good'}>
            <input
              type="radio"
              name="creditScore"
              value="good"
              checked={formData.creditScore === 'good'}
              onChange={(e) => setFormData({...formData, creditScore: e.target.value})}
            />
            Good (680-719)
          </RadioButton>
        </RadioGroup>
        <RadioGroup>
          <RadioButton selected={formData.creditScore === 'fair'}>
            <input
              type="radio"
              name="creditScore"
              value="fair"
              checked={formData.creditScore === 'fair'}
              onChange={(e) => setFormData({...formData, creditScore: e.target.value})}
            />
            Fair (620-679)
          </RadioButton>
          <RadioButton selected={formData.creditScore === 'poor'}>
            <input
              type="radio"
              name="creditScore"
              value="poor"
              checked={formData.creditScore === 'poor'}
              onChange={(e) => setFormData({...formData, creditScore: e.target.value})}
            />
            Poor (below 620)
          </RadioButton>
        </RadioGroup>
      </FormGroup>

      <FormGroup>
        <label>Annual Household Income</label>
        <input
          type="text"
          value={formatCurrency(formData.income)}
          onChange={(e) => handleCurrencyInput(e, 'income')}
          placeholder="Enter annual income"
        />
      </FormGroup>

      <FormGroup>
        <label>Monthly Debt Payments</label>
        <input
          type="text"
          value={formatCurrency(formData.monthlyDebts)}
          onChange={(e) => handleCurrencyInput(e, 'monthlyDebts')}
          placeholder="Enter monthly debt payments"
        />
      </FormGroup>
    </FormStep>
  );
}