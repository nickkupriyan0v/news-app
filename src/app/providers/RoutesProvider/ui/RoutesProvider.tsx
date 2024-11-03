import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '~app/layouts/MainLayout';
import { Feed } from '~pages/Feed';
import { NotFound } from '~pages/NotFound';
import { PostPage } from '~pages/PostPage';
import { Profile } from '~pages/Profile';
import { Saved } from '~pages/Saved';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '*',
                element: <NotFound />,
            },
            {
                path: '/',
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
            {
                path: '/post/:id',
                element: <PostPage />,
            },
        ],
    },
]);

export const RoutesProvider = () => {
    return <RouterProvider router={router} />;
};
