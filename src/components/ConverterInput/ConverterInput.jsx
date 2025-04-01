import React from 'react';
import styled from 'styled-components';
const ConverterInput = ({ value, onValueChange, unit, onUnitChange, unitOptions, isOutput }) => {
    const InputWrapper = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const StyledInput = styled.input`
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.2rem;
  width: 100%;
  padding: 0.8rem;
  border-bottom: 2px solid var(--secondary);
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const StyledSelect = styled.select`
  background: rgba(0, 0, 0, 0.3);
  color: var(--text);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-left: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary);
  }
`; 
    return (
    <div>
      {!isOutput && (
        <input
          type="number"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
        />
      )}
      <select value={unit} onChange={(e) => onUnitChange(e.target.value)}>
        {unitOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ConverterInput;