import styled from 'styled-components';

const Section = styled.section`
  height: 100vh;
  background: linear-gradient(to bottom right, #0f2027, #203a43, #2c5364);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
`;

function Home() {
  return (
    <Section id="home">
      <Title>Hi, I’m Snehith 👋</Title>
      <SubTitle>
        Full Stack Developer | Java + Spring Boot | React + Angular | AWS | Building scalable apps with clean code and impact.
      </SubTitle>
    </Section>
  );
}

export default Home;
