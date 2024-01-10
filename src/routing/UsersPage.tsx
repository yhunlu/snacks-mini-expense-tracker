import { Navigate, Outlet } from 'react-router-dom'
import UserLists from './UserLists'
import useAuth from './hooks/useAuth'

const UsersPage = () => {
  const { user } = useAuth();
  if (!user)
    return <Navigate to="/login" />

  return (
    <div className="row">
      <div className="col">
        <UserLists />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  )
}

export default UsersPage