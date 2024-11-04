import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { Theme, useTheme } from '~app/providers/ThemeProvider';
import { UserAvatar } from '~entities/User';

export const Header = () => {
    const { toggleTheme } = useTheme();
    return (
        <div className={s.header}>
            <div className={s.headerWrapper}>
                <Link to={'/'}>
                    <div>LOGO</div>
                </Link>

                <div className={s.nav}>
                    <Link to={'/'}>Feed</Link>
                    <Link to={'/saved'}>Saved</Link>
                </div>

                <div className={s.thmeSwitcher}>
                    <button onClick={() => toggleTheme(Theme.Dark)}>
                        dark
                    </button>
                    <button onClick={() => toggleTheme(Theme.Light)}>
                        light
                    </button>
                    <button onClick={() => toggleTheme(Theme.Purple)}>
                        purple
                    </button>
                </div>

                <Link to={'/new-post'}>New Post</Link>

                <UserAvatar />
            </div>
        </div>
    );
};
