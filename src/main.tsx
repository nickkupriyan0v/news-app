import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './app/styles/index.scss';
import { ThemeProvider } from '~app/providers/ThemeProvider/index.ts';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
