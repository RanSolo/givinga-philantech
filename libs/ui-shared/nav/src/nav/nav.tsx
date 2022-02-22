import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { useCharity } from '@givinga-philantech/hooks';
import { MenuItem } from '..';

const StyledNav = styled.div`
  color: black;
`;

export function Nav() {
  const { data: charity } = useCharity();
  const { secondaryColor, primaryColor } = charity?.branding || {};

  return (
    <StyledNav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            color: secondaryColor,
            backgroundColor: primaryColor,
          }}
          position="static"
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </IconButton>
            <MenuItem text="Home" color={secondaryColor} href="/" />
            <MenuItem
              text="Campaigns"
              color={secondaryColor}
              href="/campaigns"
            />
            <Button color="inherit">Donate Today!</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </StyledNav>
  );
}

export default Nav;
