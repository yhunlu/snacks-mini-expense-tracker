import { createBrowserRouter } from 'react-router-dom';
import Contact from './Contact';
import HomePage from './HomePage';
import Layout from './Layout';
import UserDetail from './UserDetail';
import UsersPage from './UsersPage';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'users',
        element: <UsersPage />,
        children: [
          {
            path: ':id',
            element: <UserDetail />,
          },
        ],
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'users/:id',
        element: <UserDetail />,
      },
    ],
  },
]);

export default router;
