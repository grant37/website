import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React, { ReactEventHandler } from 'react';

const Nav: React.FC<{
  pageTitle: string;
  isInDarkMode?: boolean;
  onToggleDarkMode?: ReactEventHandler;
  onMenuClick: ReactEventHandler;
}> = ({ onMenuClick, pageTitle, isInDarkMode = false, onToggleDarkMode }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {pageTitle}
          </Typography>
          {onToggleDarkMode && (
            <IconButton
              size='large'
              edge='end'
              color='inherit'
              aria-label={isInDarkMode ? 'Light Mode' : 'Dark Mode'}
              sx={{ mr: 2 }}
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
