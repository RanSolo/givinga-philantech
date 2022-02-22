import styled from '@emotion/styled';
import { Typography, Link } from '@mui/material';

export interface MenuItemProps {
  text: string;
  href?: string;
  color?: string;
}

const StyledMenuItem = styled.div`
  color: pink;
`;

export function MenuItem({ text, href, color }: MenuItemProps) {
  return (
    <StyledMenuItem>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, color }}>
        <Link href={href}>{text}</Link>
      </Typography>
    </StyledMenuItem>
  );
}

export default MenuItem;
