import { ReactNode, useReducer } from 'react';
import TasksContext from './tasksContext';

export interface Task {
  id: number;
  name: string;
}

interface AddTask {
  type: 'ADD';
  task: Task;
}

interface DeleteTask {
  type: 'DELETE';
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.task];
    case 'DELETE':
      return state.filter((task) => task.id !== action.taskId);
    default:
      return state;
  }
};

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
