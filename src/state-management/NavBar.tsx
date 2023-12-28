import React, { useContext } from 'react'
import LoginStatus from './LoginStatus'
import TasksContext from './contexts/tasksContext'

const NavBar = () => {
    const { task } = useContext(TasksContext)

    return (
        <nav className="navbar d-flex justify-content-between">
            <span className="badge text-bg-secondary">{task.length}</span>
            <LoginStatus />
        </nav>
    )
}

export default NavBar