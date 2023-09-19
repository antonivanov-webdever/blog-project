import {
    createContext, FC, useMemo, useState,
} from 'react';

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme'
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

const LOCAL_STORAGE_THEME_KEY = 'theme';
const ThemeContext = createContext<ThemeContextProps>({});
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
  || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
}

const ThemeProvider:FC<ThemeProviderProps> = (props) => {
    const {
        initialTheme,
        children,
    } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
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
    ThemeProvider,
};
