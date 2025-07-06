import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #555;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Contact() {
  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Description>Feel free to reach out via email or connect with me on LinkedIn.</Description>
      <Links>
        <a href="mailto:snehith@example.com">Email</a>
        <a href="https://www.linkedin.com/in/snehith" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/snehith-reddy" target="_blank" rel="noreferrer">GitHub</a>
      </Links>
    </Section>
  );
}

export default Contact;
