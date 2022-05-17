import { useContext } from 'react';
import Nav from '../components/Nav';
import { ThemeSettingContext } from './ThemeSettingProvider';

// Control the Nav state and allow children to read from it
const NavProvider: React.FC<{
  pageTitle: string;
  children: React.ReactNode;
}> = ({ pageTitle, children }) => {
  const [themeSetting, setThemeSetting] = useContext(ThemeSettingContext);

  const handleToogleDarkMode = () => {
    setThemeSetting((prev) => ({ ...prev, isDark: !prev.isDark }));
  };

  return (
    <>
      <Nav
        pageTitle={pageTitle}
        isInDarkMode={themeSetting.isDark}
        onToggleDarkMode={handleToogleDarkMode}
      />
      {children}
    </>
  );
};

export default NavProvider;
