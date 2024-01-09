import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import UserLists from './UserLists';
import Contact from './Contact';
import UserDetailPage from './UserDetailPage';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'users',
        element: <UserLists />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'users/:id',
        element: <UserDetailPage />,
      },
    ],
  },
]);

export default router;
