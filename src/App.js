import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConverterProvider } from './context/ConverterContext';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage/HomePage';
import LengthConverter from './components/converters/LengthConverter';
import CurrencyConverter from './components/converters/CurrencyConverter';
import Footer from './components/Footer/Footer';


export default function App() {
  return (
    <ConverterProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/length" element={<LengthConverter />} />
          <Route path="/currency" element={<CurrencyConverter />} />
          {/* ... inne trasy */}
        </Routes>
        <Footer />
      </Router>
    </ConverterProvider>
  );
}
