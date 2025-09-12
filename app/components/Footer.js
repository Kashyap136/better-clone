'use client';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #f5f5f5;
  padding: 2rem 1rem;
  margin-top: auto;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 1rem;
      
      @media (min-width: 768px) {
        margin-bottom: 0.5rem;
      }
      
      a {
        color: #666;
        text-decoration: none;
        padding: 0.5rem;
        display: inline-block;
        
        &:hover {
          color: #0066FF;
        }

        @media (min-width: 768px) {
          padding: 0;
        }
      }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #ddd;
  color: #666;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Better</h3>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Licenses</a></li>
          </ul>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Better.com Clone. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}