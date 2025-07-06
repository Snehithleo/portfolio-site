import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #ffffff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #f3f4f6;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const Tech = styled.div`
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 1rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Projects() {
  return (
    <Section id="projects">
      <Title>Projects</Title>

      <ProjectsGrid>
        <Card>
          <ProjectTitle>JobTracker</ProjectTitle>
          <Description>
            A personal job tracking app to scrape new listings from 500+ company career sites and alert me in real time.
          </Description>
          <Tech>React, Node.js, Puppeteer, MongoDB, GitHub Actions</Tech>
          <Links>
            <a href="#">GitHub</a>
            <a href="#">Live Demo</a>
          </Links>
        </Card>

        <Card>
          <ProjectTitle>Payment Terminal Integration</ProjectTitle>
          <Description>
            Built a real-time terminal integration using WebSockets and SSL for a regional insurance provider in India.
          </Description>
          <Tech>Java, Spring Boot, Kafka, PostgreSQL, AWS ECS</Tech>
          <Links>
            <a href="#">GitHub</a>
          </Links>
        </Card>

        <Card>
          <ProjectTitle>Genesis Call Routing</ProjectTitle>
          <Description>
            Integrated Genesys IVR with backend APIs to automate call transfers and secure PCI-compliant recordings.
          </Description>
          <Tech>Node.js, AWS Lambda, Express.js, DynamoDB</Tech>
          <Links>
            <a href="#">GitHub</a>
          </Links>
        </Card>
      </ProjectsGrid>
    </Section>
  );
}

export default Projects;
