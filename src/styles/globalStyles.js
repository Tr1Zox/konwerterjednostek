import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #6c5ce7;
    --secondary: #a8a4ff;
    --accent: #ff7675;
    --background: linear-gradient(45deg, #2d3436 0%, #000000 100%);
    --text: #ffffff;
    --glass: rgba(255, 255, 255, 0.05);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: var(--background);
    color: var(--text);
    min-height: 100vh;
    line-height: 1.6;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

      background: linear-gradient(45deg, var(--primary), var(--accent));
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(108, 92, 231, 0.4);
    
    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent,
        rgba(255,255,255,0.2),
        transparent
      );
      transform: rotate(45deg);
      animation: shine 1.5s;
    }
  }
`;
