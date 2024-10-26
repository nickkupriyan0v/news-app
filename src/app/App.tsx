import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { toggleTheme } = useTheme();

    return (
        <div>
            application
            <button onClick={() => toggleTheme()}>toggleTheme</button>
        </div>
    );
};

export default App;
