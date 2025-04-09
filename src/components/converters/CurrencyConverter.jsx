import { useState } from 'react';
import styled from 'styled-components';
import { useConverter } from '../../context/ConverterContext';
import ConverterInput from '../ConverterInput/ConverterInput';
import ResultDisplay from '../ResultDisplay/resultdisplay';

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

const CurrencyConverter = () => {
  const { currencyRates, loading, error } = useConverter();
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const convertCurrency = () => {
    if (!currencyRates[fromCurrency] || !currencyRates[toCurrency]) return 0;
    return (amount * currencyRates[toCurrency]) / currencyRates[fromCurrency];
  };

  if (loading) return <div>Ładowanie kursów walut...</div>;
  if (error) return <div>Błąd: {error}</div>;

  const currencyOptions = Object.keys(currencyRates).map(currency => ({
    value: currency,
    label: currency
  }));

  return (
    <ConverterContainer>
      <h2>💱 Konwerter Walut</h2>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <ConverterInput
          value={amount}
          onValueChange={setAmount}
          unit={fromCurrency}
          onUnitChange={setFromCurrency}
          unitOptions={currencyOptions}
        />
        <button onClick={handleSwap} style={{ 
          background: 'var(--primary)',
          border: 'none',
          padding: '0.8rem',
          borderRadius: '50%',
          cursor: 'pointer'
        }}>
          🔄
        </button>
        <ConverterInput
          isOutput
          unit={toCurrency}
          onUnitChange={setToCurrency}
          unitOptions={currencyOptions}
        />
      </div>
      <ResultDisplay result={convertCurrency().toFixed(4)} />
    </ConverterContainer>
  );
};

export default CurrencyConverter;