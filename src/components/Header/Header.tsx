import React from 'react';

import { useLocation } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function MenuIcon() {
  const location = useLocation();

  // Don't show any icons for the root page.
  if (location.pathname === '/') return null;

  // Go back on click.
  return (
    <ArrowBackIosIcon
      onClick={() => {
        // TODO:
      }}
    />
  );
}

function Header() {
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
          Kanban board
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
