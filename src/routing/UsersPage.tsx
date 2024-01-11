import { Navigate, Outlet } from 'react-router-dom'
import UserLists from './UserLists'
import useAuth from './hooks/useAuth'

const UsersPage = () => {


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