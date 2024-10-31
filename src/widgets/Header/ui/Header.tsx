import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { Theme, useTheme } from '~app/providers/ThemeProvider';
import { UserAvatar } from '~entities/User';

export const Header = () => {
    const { toggleTheme } = useTheme();
    return (
        <div className={s.header}>
            <div>LOGO</div>

            <div className={s.nav}>
                <Link to={'/'}>Home</Link>
                <Link to={'/feed'}>Feed</Link>
                <Link to={'/saved'}>Saved</Link>
            </div>

            <button onClick={() => toggleTheme(Theme.Dark)}>dark</button>
            <button onClick={() => toggleTheme(Theme.Light)}>light</button>
            <button onClick={() => toggleTheme(Theme.Purple)}>purple</button>

            <UserAvatar />
        </div>
    );
};
