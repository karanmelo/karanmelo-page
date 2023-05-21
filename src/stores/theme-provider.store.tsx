import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  ReactNode,
} from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../styles/themes';

interface Theme {
  name: string;
  colors: {
    body: string;
    text: string;
  };
}

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{
  children: ReactNode | undefined;
}> = ({ children }) => {
  // const getTheme = useCallback((): Theme => {
  //   const localTheme: string = localStorage ? localStorage.getItem('KaranMeloPageTheme') || '';

  //   if (localTheme === 'light') {
  //     return lightTheme;
  //   }
  //   if (localTheme === 'dark') {
  //     return darkTheme;
  //   }

  //   return darkTheme;
  // }, []);

  const [theme, setTheme] = useState<Theme>(darkTheme);

  const toggleTheme = useCallback(() => {
    if (theme.name === 'light') {
      setTheme(darkTheme);
      localStorage.setItem('KaranMeloPageTheme', 'dark');
    } else if (theme.name === 'dark') {
      setTheme(lightTheme);
      localStorage.setItem('KaranMeloPageTheme', 'light');
    }
  }, [theme]);

  if (!children) <></>;

  const contextValue = useMemo(
    () => ({ toggleTheme, theme }),
    [toggleTheme, theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={contextValue.theme}>
        <>{children}</>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
