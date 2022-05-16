import { useState, useEffect, ReactEventHandler } from 'react';

const MEDIA_QUERY = '(prefers-color-scheme: dark)';

const useDetectTheme = (
  options: {
    onSystemChange?: (event: MediaQueryListEvent) => void;
  } = {}
): boolean => {
  const { onSystemChange } = options;
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const queryList = window.matchMedia(MEDIA_QUERY);

    const handleQueryChange =
      onSystemChange ??
      ((event: MediaQueryListEvent): void => {
        setIsDark(event.matches);
      });

    queryList.addEventListener('change', handleQueryChange);

    setIsDark(queryList.matches);

    return (): void => {
      queryList.removeEventListener('change', handleQueryChange);
    };
  }, [onSystemChange]);

  return isDark;
};

export default useDetectTheme;
