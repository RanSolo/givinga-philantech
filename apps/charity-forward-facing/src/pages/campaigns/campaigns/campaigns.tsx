import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CampaignsProps {}

const StyledCampaigns = styled.div`
  color: pink;
`;

export function Campaigns(props: CampaignsProps) {
  return (
    <StyledCampaigns>
      <h1>Welcome to Campaigns!</h1>
    </StyledCampaigns>
  );
}

export default Campaigns;
