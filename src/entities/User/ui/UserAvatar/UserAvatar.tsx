import { Link } from 'react-router-dom';
import s from './UserAvatar.module.scss';

export const UserAvatar = () => {
    return (
        <Link to={'./profile'}>
            <div className={s.userAvatar}></div>
        </Link>
    );
};
