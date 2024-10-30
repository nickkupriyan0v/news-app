import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from '../models/theme.enum';
import { THEME_ATTRIBUTE, THEME_STORAGE_KEY } from '../constants/theme.const';

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = (newTheme: Theme) => {
        console.log('change');
        setTheme!(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
        document.getElementById('root')?.setAttribute(THEME_ATTRIBUTE, theme!);
    };

    return {
        theme,
        changeTheme,
    };
};
