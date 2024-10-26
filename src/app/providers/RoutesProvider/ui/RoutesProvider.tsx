import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '~app/App';
import { Feed } from '~pages/Feed';
import { Profile } from '~pages/Profile';
import { Saved } from '~pages/Saved';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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
