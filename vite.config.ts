import { defineConfig } from 'vite';
import path from 'path'
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '~app': path.resolve('src/app'),
            '~entities': path.resolve('src/entities'),
            '~features': path.resolve('src/features'),
            '~pages': path.resolve('src/pages'),
            '~shared': path.resolve('src/shared'),
            '~widgets': path.resolve('src/widgets'),
        },
    },
});
