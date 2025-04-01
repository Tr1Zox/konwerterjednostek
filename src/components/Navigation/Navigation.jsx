import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  padding: 1.5rem;
  background: var(--glass);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  margin: 0 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background: var(--primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(108, 92, 231, 0.4);
  }

  &::before {
    content: '✨';
    position: absolute;
    left: -20px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <NavLink to="/">🏠 Home</NavLink>
      <NavLink to="/length">📏 Długość</NavLink>
      <NavLink to="/currency">💵 Waluty</NavLink>
    </StyledNav>
  );
};

export default Navigation;
