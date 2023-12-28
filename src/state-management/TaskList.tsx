import { useContext } from 'react';
import TasksContext from './contexts/tasksContext';

const TaskList = () => {
  const { task, dispatch } = useContext(TasksContext);

  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: 'ADD',
            task: { id: Date.now(), name: 'Task' + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {task.map((t) => (
          <li
            key={t.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span className="flex-grow-1">{t.name}</span>
            {/* delete task */}
            <button
              onClick={() => dispatch({ type: 'DELETE', taskId: t.id })}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
