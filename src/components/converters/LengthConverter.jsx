import { useState } from 'react';
import ConverterInput from '../ConverterInput/ConverterInput';
import ResultDisplay from '../ResultDisplay/resultdisplay';
import { lengthUnits } from '../../utils/units';
import styled from 'styled-components';

const ConverterContainer = styled.div`
  background: var(--glass);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  margin: 6rem auto 2rem;
  max-width: 800px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: center;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SwapButton = styled.button`
  background: var(--primary);
  border: none;
  padding: 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: rotate(180deg) scale(1.1);
    box-shadow: 0 0 15px var(--primary);
  }
`;

const LengthConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('meters');
  const [toUnit, setToUnit] = useState('kilometers');

  // Dodana funkcja do zamiany jednostek
  const handleSwapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  const convertLength = (value, from, to) => {
    const conversions = {
      meters: 1,
      kilometers: 0.001,
      centimeters: 100,
      miles: 0.000621371,
      inches: 39.3701
    };
    return value * conversions[to] / conversions[from];
  };

  const result = inputValue ? 
    convertLength(inputValue, fromUnit, toUnit) : 
    '';

  // Propsy dla komponentów ConverterInput
  const inputProps = {
    unitOptions: lengthUnits,
    onValueChange: setInputValue
  };

  return (
    <ConverterContainer>
      <h2>🔀 Konwerter Długości</h2>
      <InputGroup>
        <ConverterInput
          {...inputProps}
          value={inputValue}
          unit={fromUnit}
          onUnitChange={setFromUnit}
        />
        <SwapButton onClick={handleSwapUnits}>
          🔄
        </SwapButton>
        <ConverterInput
          {...inputProps}
          isOutput
          unit={toUnit}
          onUnitChange={setToUnit}
        />
      </InputGroup>
      <ResultDisplay result={result} />
    </ConverterContainer>
  );
};

export default LengthConverter;