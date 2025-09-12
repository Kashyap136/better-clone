'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const NavbarContainer = styled.nav`
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0066FF;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;

  &:hover {
    color: #0066FF;
  }
`;

const NavLinkIndicator = styled(motion.div)`
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: #0066FF;
`;

const Button = styled(Link)`
  background: #0066FF;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: #0052CC;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 102, 255, 0.2);
  }
`;

export function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const linkVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { scale: 1.05 }
  };

  return (
    <NavbarContainer>
      <NavContent>
        <Logo href="/">
          <motion.span
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            Better
          </motion.span>
        </Logo>
        <NavLinks>
          {[
            { href: '/about-us', label: 'About Us' },
            { href: '/mortgage-calculator', label: 'Calculator' }
          ].map(({ href, label }) => (
            <motion.div
              key={href}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <NavLink href={href}>
                {label}
                {pathname === href && (
                  <NavLinkIndicator
                    layoutId="navIndicator"
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </NavLink>
            </motion.div>
          ))}
          <motion.div
            variants={linkVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Button href="/start">Get Started</Button>
          </motion.div>
        </NavLinks>
      </NavContent>
    </NavbarContainer>
  );
}