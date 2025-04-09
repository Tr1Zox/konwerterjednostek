import React from 'react';
import styled from 'styled-components';
const Footer = () => {
    

const StyledFooter = styled.footer`
  background: var(--glass);
  padding: 2rem;
  text-align: center;
  margin-top: auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>🎉 Made with ❤️ by Young Devs | 📧 contact@example.com</p>
    </StyledFooter>
  );
};
  return (
    <footer style={{ marginTop: '2rem', padding: '1rem', textAlign: 'center' }}>
      <p>© 2025 Konwerter Jednostek. Wszelkie prawa zastrzeżone.</p>
    </footer>
  );
};

export default Footer;