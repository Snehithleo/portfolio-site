import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f4f4f4;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Frame = styled.iframe`
  width: 100%;
  max-width: 800px;
  height: 500px;
  border: none;
  margin-bottom: 1.5rem;
`;

const DownloadLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background: #007bff;
  color: white;
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    background: #0056b3;
  }
`;



export default Resume;
