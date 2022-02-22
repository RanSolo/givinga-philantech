import styled from '@emotion/styled';
import { useCharity } from '@givinga-philantech/hooks';

const StyledLanding = styled.div`
  color: black;
`;

export function Landing() {
  const { data: charity } = useCharity();

  return (
    <StyledLanding>
      <div style={{ textAlign: 'center' }}>
        <h1>
          Welcome to {charity?.branding?.name}
          's Landing
        </h1>
        <h2>{charity?.branding?.tagline}</h2>
      </div>
    </StyledLanding>
  );
}

export default Landing;
