import { FC, ReactNode } from 'react';
import s from './Card.module.scss';

type CardProps = {
    children?: ReactNode;
};

export const Card: FC<CardProps> = (props) => {
    const { children } = props;
    return <div className={s.card}>{children}</div>;
};
