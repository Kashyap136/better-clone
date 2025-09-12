'use client';
import Link from 'next/link';
import styled from 'styled-components';

const NavContainer = styled.header`
  padding: 1rem;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 0.5rem;
    width: 100%;
    text-align: center;
    
    &:hover {
      color: #0066FF;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    width: auto;

    a {
      width: auto;
      padding: 0;
    }
  }
`;

export default function Header() {
  return (
    <NavContainer>
      <Nav>
        <Logo>
          <Link href="/">Better.com</Link>
        </Logo>
        <NavLinks>
          <Link href="/about-us">About Us</Link>
          <Link href="/mortgage-calculator">Mortgage Calculator</Link>
          <Link href="/start">Get Started</Link>
        </NavLinks>
      </Nav>
    </NavContainer>
  );
}