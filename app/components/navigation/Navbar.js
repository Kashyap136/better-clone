'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
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
  font-size: 2.0rem;
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

  @media (max-width: 768px) {
    display: none;
  }
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

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: #0066FF;
  }
`;

const Dashboard = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

const DashboardContent = styled(motion.div)`
  background: white;
  margin-top: 70px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const DashboardLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.75rem 0;

  &:hover {
    color: #0066FF;
  }
`;

const DashboardButton = styled(Link)`
  background: #0066FF;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  display: inline-block;
  text-align: center;

  &:hover {
    background: #0052CC;
    box-shadow: 0 4px 12px rgba(0, 102, 255, 0.2);
  }
`;

export function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const dashboardVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 300, transition: { duration: 0.2 } }
  };

  return (
    <>
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
          <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </MenuButton>
        </NavContent>
      </NavbarContainer>

      <AnimatePresence>
        {isMenuOpen && (
          <Dashboard
            variants={dashboardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsMenuOpen(false)}
          >
            <DashboardContent onClick={(e) => e.stopPropagation()}>
              {[
                { href: '/about-us', label: 'About Us' },
                { href: '/mortgage-calculator', label: 'Calculator' }
              ].map(({ href, label }) => (
                <DashboardLink
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </DashboardLink>
              ))}
              <DashboardButton
                href="/start"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </DashboardButton>
            </DashboardContent>
          </Dashboard>
        )}
      </AnimatePresence>
    </>
  );
}