'use client';
import styled from 'styled-components';

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

  select, input {
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
  }
`;

// Step 1: Property Type
export function PropertyTypeStep({ formData, setFormData }) {
  return (
    <FormStep>
      <FormGroup>
        <label>What type of property are you looking for?</label>
        <RadioGroup>
          <RadioButton selected={formData.propertyType === 'primary'}>
            <input
              type="radio"
              name="propertyType"
              value="primary"
              checked={formData.propertyType === 'primary'}
              onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
            />
            Primary Residence
          </RadioButton>
          <RadioButton selected={formData.propertyType === 'investment'}>
            <input
              type="radio"
              name="propertyType"
              value="investment"
              checked={formData.propertyType === 'investment'}
              onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
            />
            Investment Property
          </RadioButton>
        </RadioGroup>
      </FormGroup>

      <FormGroup>
        <label>Property Status</label>
        <select
          value={formData.propertyStatus}
          onChange={(e) => setFormData({...formData, propertyStatus: e.target.value})}
        >
          <option value="">Select status</option>
          <option value="looking">Still Looking</option>
          <option value="found">Found a Property</option>
          <option value="under-contract">Under Contract</option>
        </select>
      </FormGroup>
    </FormStep>
  );
}