import React, { useContext } from 'react';

import { useLocation } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { AppContext } from '../../context/AppContext';

function MenuIcon(): JSX.Element | null {
  const location = useLocation();
  const { handleNavigate } = useContext(AppContext);

  // Don't show any icons for the root page.
  if (location.pathname === '/') return null;

  // Go back on click.
  return <ArrowBackIosIcon onClick={() => handleNavigate(-1)} />;
}

function Header(): JSX.Element {
  const { context } = useContext(AppContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {context.pageTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
