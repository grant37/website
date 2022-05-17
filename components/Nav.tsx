import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React, { ReactEventHandler } from 'react';
import AnimatedTitleGrow from './AnimatedTitleGrow';

const Nav: React.FC<{
  pageTitle: string;
  isInDarkMode?: boolean;
  onToggleDarkMode?: ReactEventHandler;
}> = ({ isInDarkMode = false, onToggleDarkMode }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='default'>
        <Toolbar>
          <AnimatedTitleGrow
            BoxProps={{ flexGrow: 1 }}
            TypographyProps={{ variant: 'h6', component: 'h1' }}
          >
            Grant Sisson
          </AnimatedTitleGrow>
          {onToggleDarkMode && (
            <IconButton
              size='large'
              edge='end'
              color='inherit'
              aria-label={isInDarkMode ? 'Light Mode' : 'Dark Mode'}
              onClick={onToggleDarkMode}
            >
              {isInDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
