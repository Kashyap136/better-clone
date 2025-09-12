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

// Step 2: Location
export function LocationStep({ formData, setFormData }) {
  return (
    <FormStep>
      <FormGroup>
        <label>ZIP Code</label>
        <input
          type="text"
          value={formData.zipCode}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 5);
            setFormData({...formData, zipCode: value});
          }}
          placeholder="Enter ZIP code"
        />
      </FormGroup>

      <FormGroup>
        <label>City</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({...formData, city: e.target.value})}
          placeholder="Enter city name"
        />
      </FormGroup>

      <FormGroup>
        <label>State</label>
        <input
          type="text"
          value={formData.state}
          onChange={(e) => setFormData({...formData, state: e.target.value})}
          placeholder="Enter state"
        />
      </FormGroup>
    </FormStep>
  );
}