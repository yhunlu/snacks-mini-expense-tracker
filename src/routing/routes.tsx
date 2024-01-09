import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import UserLists from './UserLists';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/users',
    element: <UserLists />,
  },
]);

export default router;
