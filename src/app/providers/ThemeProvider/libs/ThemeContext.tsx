import { createContext } from 'react';
import { Theme } from '../models/theme.enum';

interface ThemeContextType {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}
export const ThemeContext = createContext<ThemeContextType>({});
