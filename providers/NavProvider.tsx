import { createContext, useContext, useState } from 'react';
import Nav from '../components/Nav';
import { ThemeSettingContext } from './ThemeSettingProvider';

export type NavState = { isDrawerOpen: boolean };

const NavContext = createContext<NavState>({ isDrawerOpen: false });

// Control the Nav state and allow children to read from it
const NavProvider: React.FC<{
  pageTitle: string;
  children: React.ReactNode;
}> = ({ pageTitle, children }) => {
  const [state, setState] = useState<NavState>({ isDrawerOpen: false });
  const [themeSetting, setThemeSetting] = useContext(ThemeSettingContext);

  const handleToogleDarkMode = () => {
    setThemeSetting((prev) => ({ ...prev, isDark: !prev.isDark }));
  };

  return (
    <NavContext.Provider value={state}>
      <Nav
        pageTitle={pageTitle}
        isInDarkMode={themeSetting.isDark}
        onToggleDarkMode={handleToogleDarkMode}
      />
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
