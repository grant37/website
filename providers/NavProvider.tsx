import { createContext, ReactEventHandler, useContext, useState } from 'react';
import Nav from '../components/Nav';
import NavDrawer from '../components/NavDrawer';
import { ThemeSettingContext } from './ThemeSettingProvider';
import TerminalIcon from '@mui/icons-material/Terminal';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/router';

export type NavState = { isDrawerOpen: boolean };

const NavContext = createContext<NavState>({ isDrawerOpen: false });

// Control the Nav state and allow children to read from it
const NavProvider: React.FC<{
  pageTitle: string;
  children: React.ReactNode;
}> = ({ pageTitle, children }) => {
  const router = useRouter();
  const [state, setState] = useState<NavState>({ isDrawerOpen: false });
  const [themeSetting, setThemeSetting] = useContext(ThemeSettingContext);

  const handleToogleDarkMode = () => {
    setThemeSetting((prev) => ({ ...prev, isDark: !prev.isDark }));
  };

  const handleOpenDrawer = () => {
    setState((prev) => ({ ...prev, isDrawerOpen: true }));
  };

  const handleCloseDrawer = () => {
    setState((prev) => ({ ...prev, isDrawerOpen: false }));
  };

  const handleMenuItemClick = (route: string) => () => {
    router.push(route);
    handleCloseDrawer();
  };

  return (
    <NavContext.Provider value={state}>
      <Nav
        onMenuClick={handleOpenDrawer}
        pageTitle={pageTitle}
        isInDarkMode={themeSetting.isDark}
        onToggleDarkMode={handleToogleDarkMode}
      />
      <NavDrawer
        isOpen={state.isDrawerOpen}
        onClose={handleCloseDrawer}
        items={[
          {
            title: 'Home',
            onClick: handleMenuItemClick('/'),
            IconComponent: HomeIcon,
          },
          {
            title: 'About',
            onClick: handleMenuItemClick('/about'),
            IconComponent: PersonIcon,
          },
          {
            title: 'Work',
            onClick: handleMenuItemClick('/work'),
            IconComponent: TerminalIcon,
          },
          {
            title: 'Contact',
            onClick: handleMenuItemClick('/contact'),
            IconComponent: ContactMailIcon,
          },
        ]}
      />
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
