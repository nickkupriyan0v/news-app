import { createRoot } from 'react-dom/client';
import './app/styles/index.scss';
import { RoutesProvider } from '~app/providers/RoutesProvider';
import { ThemeProvider } from '~app/providers/ThemeProvider';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <RoutesProvider />
    </ThemeProvider>
);
