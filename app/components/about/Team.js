'use client';
import styled from 'styled-components';
import Image from 'next/image';

const TeamSection = styled.section`
  padding: 5rem 2rem;
  background: #f5f7fa;
`;

const TeamContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;

  .image-container {
    width: 200px;
    height: 200px;
    margin: 0 auto 1rem;
    border-radius: 50%;
    overflow: hidden;
    background: #e0e0e0;
  }

  h3 {
    font-size: 1.25rem;
    margin: 1rem 0 0.5rem;
    color: #333;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image: "/placeholder.jpg"
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "/placeholder.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Operations",
    image: "/placeholder.jpg"
  }
];

export default function Team() {
  return (
    <TeamSection>
      <TeamContent>
        <SectionTitle>Meet Our Leadership Team</SectionTitle>
        <SectionDescription>
          Our diverse team of experts is committed to transforming the mortgage
          industry and making homeownership accessible to everyone.
        </SectionDescription>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember key={index}>
              <div className="image-container">
                {/* Note: You'll need to add actual team member images */}
                <div style={{ width: '200px', height: '200px', background: '#e0e0e0' }} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamContent>
    </TeamSection>
  );
}