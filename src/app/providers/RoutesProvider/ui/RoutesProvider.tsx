import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '~app/layouts/MainLayout';
import { Feed } from '~pages/Feed';
import { Profile } from '~pages/Profile';
import { Saved } from '~pages/Saved';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/feed',
                element: <Feed />,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
            {
                path: '/saved',
                element: <Saved />,
            },
        ],
    },
]);

export const RoutesProvider = () => {
    return <RouterProvider router={router} />;
};
