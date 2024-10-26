import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { useTheme } from '~app/providers/ThemeProvider';

export const Header = () => {
    const { toggleTheme } = useTheme();
    return (
        <div className={s.header}>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/feed'}>Feed</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/saved'}>Saved</Link>
            </div>

            <button onClick={toggleTheme}>toggle theme</button>
        </div>
    );
};
