import styled from 'styled-components';

const Nav = styled.nav`
  background: #121212;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: #ff6b6b;
    }
  }
`;

function Header() {
  return (
    <Nav>
      <div><strong>Snehith Reddy</strong></div>
      <NavLinks>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </Nav>
  );
}

export default Header;
