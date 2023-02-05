import {createContext, FC, useMemo, useState} from "react";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

const LOCAL_STORAGE_THEME_KEY = 'theme';
const ThemeContext = createContext<ThemeContextProps>({})
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider:FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
      </ThemeContext.Provider>
  );
};

export {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  ThemeProvider
}
