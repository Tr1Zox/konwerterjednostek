import {useState} from 'react';
import ConverterInput from '../ConverterInput/ConverterInput';
import ResultDisplay from '../ResultDisplay/resultdisplay';
import { useConverter } from '../../context/ConverterContext';


const CurrencyConverter = () => {
  const { currencyRates, loading, error } = useConverter();
  const [amount, setAmount] = useState(1); 
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const convertCurrency = () => {
    if (!currencyRates[fromCurrency] || !currencyRates[toCurrency]) return 0;
    return (amount * currencyRates[toCurrency]) / currencyRates[fromCurrency];
  };

  if (loading) return <div>Ładowanie kursów...</div>;
  if (error) return <div>Błąd: {error}</div>;

  return (
    <div className="converter-container">
      <ConverterInput
        value={amount}
        onValueChange={setAmount}
        unit={fromCurrency}
        onUnitChange={setFromCurrency}
        unitOptions={Object.keys(currencyRates).map(currency => ({
          value: currency,
          label: currency
        }))}
      />
      <ConverterInput
        isOutput
        unit={toCurrency}
        onUnitChange={setToCurrency}
        unitOptions={Object.keys(currencyRates).map(currency => ({
          value: currency,
          label: currency
        }))}
      />
      <ResultDisplay result={convertCurrency()} />
    </div>
  );
};

export default CurrencyConverter;