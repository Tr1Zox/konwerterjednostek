import React from 'react';
  import styled, { keyframes } from 'styled-components';
const ResultDisplay = ({ result }) => {
  

const glow = keyframes`
  0% { text-shadow: 0 0 10px var(--primary); }
  50% { text-shadow: 0 0 20px var(--accent); }
  100% { text-shadow: 0 0 10px var(--primary); }
`;

const ResultText = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  padding: 2rem;
  margin: 1rem 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  animation: ${glow} 2s ease-in-out infinite;
`;

const ResultDisplay = ({ result }) => {
  return (
    <ResultText>
      🎯 Wynik: {!isNaN(result) && result.toFixed(2)}
    </ResultText>
  );
};
  return <div>Wynik: {result}</div>;
};

export default ResultDisplay;