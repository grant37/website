import { ThemeProvider } from '@mui/material/styles';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
  useEffect,
} from 'react';
import useDetectTheme from '../hooks/useDetectTheme';
import { dark, light } from '../theme';
import Head from 'next/head';

export type ThemeSetting = {
  isDark: boolean;
};

// manage any mui theme overrides
export const ThemeSettingContext = createContext<
  [ThemeSetting, Dispatch<SetStateAction<ThemeSetting>>?]
>([{ isDark: false }]);

const ThemeSettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isBrowserInDarkMode = useDetectTheme();

  const [themeSettings, setThemeSettings] = useState<ThemeSetting>({
    isDark: isBrowserInDarkMode,
  });

  // TODO: maybe remember setting/don't overwrite if changed
  useEffect(() => {
    setThemeSettings({ isDark: isBrowserInDarkMode });
  }, [isBrowserInDarkMode]);

  const contextValue: [ThemeSetting, Dispatch<SetStateAction<ThemeSetting>>] =
    useMemo(() => [themeSettings, setThemeSettings], [themeSettings]);

  const currentTheme = themeSettings.isDark ? dark : light;
  const faviconPath = isBrowserInDarkMode
    ? 'images/favicon_dark.png'
    : 'images/favicon.png';

  return (
    <ThemeProvider theme={currentTheme}>
      <Head>
        <link rel='icon' type='image/png' href={faviconPath} />
      </Head>
      <ThemeSettingContext.Provider value={contextValue}>
        {children}
      </ThemeSettingContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeSettingsProvider;
