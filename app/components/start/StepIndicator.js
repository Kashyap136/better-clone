'use client';
import styled from 'styled-components';

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: #e0e0e0;
    z-index: 1;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;

  .step-number {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${props => props.$isActive ? '#0066FF' : props.$isCompleted ? '#4CAF50' : '#e0e0e0'};
    color: ${props => props.$isActive || props.$isCompleted ? 'white' : '#666'};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .step-label {
    font-size: 0.875rem;
    color: ${props => props.$isActive ? '#0066FF' : props.$isCompleted ? '#4CAF50' : '#666'};
    font-weight: ${props => props.$isActive ? '600' : '400'};
  }
`;

export default function StepIndicator({ currentStep = 0 }) {
  const steps = [
    'Property Type',
    'Location',
    'Financial Info'
  ];

  return (
    <StepContainer>
      {steps.map((label, index) => (
        <Step
          key={index}
          $isActive={currentStep === index}
          $isCompleted={currentStep > index}
        >
          <div className="step-number">
            {currentStep > index ? '✓' : index + 1}
          </div>
          <div className="step-label">{label}</div>
        </Step>
      ))}
    </StepContainer>
  );
}