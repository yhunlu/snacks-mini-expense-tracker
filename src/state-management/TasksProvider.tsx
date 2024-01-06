import { ReactNode, useReducer } from 'react';
import TasksContext from './contexts/tasksContext';
import taskReducer from './reducers/taskReducer';

interface Props {
    children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
    const [task, dispatch] = useReducer(taskReducer, []);

    return (
        <TasksContext.Provider value={{ task, dispatch: dispatch }}>
            {children}
        </TasksContext.Provider>
    );
};

export default TasksProvider;
