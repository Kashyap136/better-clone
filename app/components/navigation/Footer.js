'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: #f8faff;
  padding: 4rem 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: #666;
    text-decoration: none;
    transition: color 0.2s ease;
    font-size: 0.95rem;

    &:hover {
      color: #0066FF;
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: #666;
    transition: color 0.2s ease;
    
    &:hover {
      color: #0066FF;
    }
  }
`;

export function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Contact", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Mortgage Calculator", href: "/mortgage-calculator" },
        { label: "Help Center", href: "#" },
        { label: "Blog", href: "#" },
        { label: "FAQs", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Licenses", href: "#" },
        { label: "Security", href: "#" }
      ]
    }
  ];

  return (
    <FooterContainer>
      <FooterContent>
        {footerSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <FooterSection>
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </motion.div>
        ))}
      </FooterContent>
      <FooterBottom>
        <div>© {new Date().getFullYear()} Better.com Clone. All rights reserved.</div>
        <SocialLinks>
          <a href="#" aria-label="Twitter">Twitter</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Facebook">Facebook</a>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
}