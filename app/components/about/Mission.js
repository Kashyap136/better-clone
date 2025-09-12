'use client';
import styled from 'styled-components';

const MissionSection = styled.section`
  padding: 5rem 2rem;
  background: #fff;
`;

const MissionContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
`;

const MissionText = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1.125rem;
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  background: #f5f7fa;
  padding: 2rem;
  border-radius: 8px;
`;

const StatItem = styled.div`
  text-align: center;

  h3 {
    font-size: 2.5rem;
    color: #0066FF;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;

export default function Mission() {
  return (
    <MissionSection>
      <MissionContent>
        <MissionText>
          <h2>Making homeownership accessible</h2>
          <p>
            We believe the mortgage industry is broken. Complex processes, excessive
            fees, and outdated technology make getting a mortgage harder than it needs
            to be.
          </p>
          <p>
            That's why we're building a better way. By combining innovative technology
            with industry expertise, we're creating a seamless digital mortgage
            experience that puts you in control.
          </p>
        </MissionText>
        <Stats>
          <StatItem>
            <h3>$100B+</h3>
            <p>Loans Funded</p>
          </StatItem>
          <StatItem>
            <h3>100K+</h3>
            <p>Families Helped</p>
          </StatItem>
          <StatItem>
            <h3>$2K+</h3>
            <p>Average Savings</p>
          </StatItem>
        </Stats>
      </MissionContent>
    </MissionSection>
  );
}