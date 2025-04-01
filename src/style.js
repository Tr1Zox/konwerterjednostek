import styled from 'styled-components';

export const ConverterContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;