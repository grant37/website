import { ThemeOptions, createTheme } from '@mui/material';

const sharedOverrides: ThemeOptions = {
  typography: {
    h1: {
      fontSize: '4rem',
    },
  },
};

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#4b96bf',
    },
    secondary: {
      main: '#4b5dbf',
    },
  },
  ...sharedOverrides,
};

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#344185',
    },
    secondary: {
      main: '#346985',
    },
  },
  ...sharedOverrides,
};

export const light = createTheme(lightThemeOptions);
export const dark = createTheme(darkThemeOptions);
