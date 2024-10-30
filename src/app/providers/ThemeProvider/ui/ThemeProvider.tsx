import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useLocalStorage } from '~shared/lib/hooks';
import { Theme } from '../models/theme.enum';
import { THEME_ATTRIBUTE, THEME_STORAGE_KEY } from '../constants/theme.const';

type ThemeContextType = {
    theme?: Theme;
    toggleTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

type Props = {
    children: ReactNode;
};

const applyTheme = (theme: Theme) => {
    document.querySelector('html')?.setAttribute(THEME_ATTRIBUTE, theme);
};

export const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
    const [theme, setTheme] = useState<Theme>();
    const { getItem, setItem } = useLocalStorage();

    useEffect(() => {
        const theme = (getItem(THEME_STORAGE_KEY) as Theme) ?? Theme.Dark;
        setTheme(theme);
        applyTheme(theme);
        setItem(THEME_STORAGE_KEY, theme);
    }, []);

    const toggleTheme = (theme: Theme) => {
        setTheme(theme);
        applyTheme(theme);
        setItem(THEME_STORAGE_KEY, theme);
    };

    const memoedValue = useMemo(
        () => ({
            theme,
            toggleTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={memoedValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType =>  {
    return useContext(ThemeContext);
}
