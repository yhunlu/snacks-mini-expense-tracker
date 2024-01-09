import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import UserLists from './UserLists';
import Contact from './Contact';
import UserDetailPage from './UserDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/users',
    element: <UserLists />,
  },
  {
    path: '/users/:id',
    element: <UserDetailPage />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

export default router;
