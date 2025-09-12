'use client';
import { useState } from 'react';
import styled from 'styled-components';
import StepIndicator from '../components/start/StepIndicator';
import { PropertyTypeStep } from '../components/start/PropertyTypeStep';
import { LocationStep } from '../components/start/LocationStep';
import { FinancialStep } from '../components/start/FinancialStep';

const StartPage = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
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

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &.back {
    background: white;
    border: 1px solid #ddd;
    color: #666;

    &:hover {
      background: #f5f5f5;
    }
  }

  &.next {
    background: #0066FF;
    border: none;
    color: white;

    &:hover {
      background: #0052cc;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function Start() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    propertyType: '',
    propertyStatus: '',
    zipCode: '',
    city: '',
    state: '',
    creditScore: '',
    income: 0,
    monthlyDebts: 0
  });

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle form submission
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PropertyTypeStep formData={formData} setFormData={setFormData} />;
      case 1:
        return <LocationStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <FinancialStep formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.propertyType && formData.propertyStatus;
      case 1:
        return formData.zipCode && formData.city && formData.state;
      case 2:
        return formData.creditScore && formData.income > 0;
      default:
        return false;
    }
  };

  return (
    <StartPage>
      <Header>
        <h1>Start Your Home Journey</h1>
        <p>Tell us about your plans and we'll help you find the perfect mortgage.</p>
      </Header>

      <StepIndicator currentStep={currentStep} />

      <FormContainer>
        {renderStep()}
        
        <ButtonContainer>
          <Button
            className="back"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Back
          </Button>
          <Button
            className="next"
            onClick={handleNext}
            disabled={!isStepValid()}
          >
            {currentStep === 2 ? 'Submit' : 'Next'}
          </Button>
        </ButtonContainer>
      </FormContainer>
    </StartPage>
  );
}