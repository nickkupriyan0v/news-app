import { Link, Outlet } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { toggleTheme } = useTheme();

    return (
        <>
            <Link to={'/'}>Home</Link>
            <Link to={'/feed'}>Feed</Link>
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/saved'}>Saved</Link>
            <Outlet />
            <button onClick={() => toggleTheme()}>toggleTheme</button>
        </>
    );
};

export default App;
