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

export default taskReducer;
