import { ReactNode, useCallback, useState } from 'react';
import { ThemeContext } from '../libs/ThemeContext';

type Props = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState(false);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => !prev);
        document.getElementById('root')?.classList.toggle('dark');
    }, []);

    const value = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
