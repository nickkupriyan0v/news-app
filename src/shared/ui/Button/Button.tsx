import { ReactNode } from 'react';
import s from './Button.module.scss';

type Props = {
    children?: ReactNode;
};

export const Button = ({ children }: Props) => {
    return <button className={s.button}>{children}</button>;
};
