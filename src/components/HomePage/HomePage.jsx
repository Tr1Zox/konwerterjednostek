import styled from 'styled-components';

const HeroSection = styled.section`
  padding: 8rem 2rem 4rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(108,92,231,0.1) 0%, rgba(0,0,0,0) 100%);
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #6c5ce7, #a8a4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HomePage = () => {
  return (
    <HeroSection>
      <Title>🔥 Konwerter Jednostek 🔥</Title>
      <p>Wybierz narzędzie z menu nawigacyjnego aby rozpocząć!</p>
    </HeroSection>
  );
};

export default HomePage;