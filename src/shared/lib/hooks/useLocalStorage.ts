import { useState } from 'react';

export const useLocalStorage: () => {
    value: string | null;
    setItem: (key: string, value: string) => void;
    getItem: (key: string) => string | null;
    removeItem: (key: string) => void;
} = () => {
    const [value, setValue] = useState<string | null>(null);

    const setItem: (key: string, value: string) => void = (
        key: string,
        value: string
    ) => {
        localStorage.setItem(key, value);
        setValue(value);
    };

    const getItem: (key: string) => string | null = (key: string) => {
        const value = localStorage.getItem(key);
        setValue(value);
        return value;
    };

    const removeItem: (key: string) => void = (key: string) => {
        localStorage.removeItem(key);
        setValue(null);
    };

    return { value, setItem, getItem, removeItem };
};
