import { Outlet } from 'react-router-dom'
import UserLists from './UserLists'

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