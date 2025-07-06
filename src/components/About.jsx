import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fa;
  color: #333;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 2rem auto;
`;

const SkillsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillTag = styled.span`
  background: #e0e0e0;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
`;

function About() {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <Paragraph>
        I'm a Full Stack Developer with 3+ years of experience building scalable backend services and dynamic frontend interfaces. I specialize in Java, Spring Boot, and AWS on the backend, and React/Angular on the frontend. I'm passionate about writing clean, maintainable code and delivering real business value.
      </Paragraph>

      <SkillsGrid>
        <SkillTag>Java</SkillTag>
        <SkillTag>Spring Boot</SkillTag>
        <SkillTag>React</SkillTag>
        <SkillTag>Angular</SkillTag>
        <SkillTag>{"Node.js"}</SkillTag>
        <SkillTag>AWS</SkillTag>
        <SkillTag>Kafka</SkillTag>
        <SkillTag>PostgreSQL</SkillTag>
        <SkillTag>CI/CD</SkillTag>
      </SkillsGrid>
    </Section>
  );
}

export default About;
