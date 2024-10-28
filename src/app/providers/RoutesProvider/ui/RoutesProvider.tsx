import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '~app/layouts/MainLayout';
import { Feed } from '~pages/Feed';
import { NotFound } from '~pages/NotFound';
import { Profile } from '~pages/Profile';
import { Saved } from '~pages/Saved';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        path: '/feed',
                        element: <Feed />,
                        index: true,
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
        ],
    },
]);

export const RoutesProvider = () => {
    return <RouterProvider router={router} />;
};
