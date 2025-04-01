import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ConverterContext = createContext();

export const ConverterProvider = ({ children }) => {
  const [currencyRates, setCurrencyRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/USD`
        );
        setCurrencyRates(response.data.rates);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrencyRates();
  }, []);

  const value = {
    currencyRates,
    loading,
    error
  };

  return (
    <ConverterContext.Provider value={value}>
      {children}
    </ConverterContext.Provider>
  );
};

export const useConverter = () => useContext(ConverterContext);