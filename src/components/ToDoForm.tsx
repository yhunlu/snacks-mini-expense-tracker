import { useRef } from 'react';
import useAddTodo from '../hooks/useAddTodo';

const ToDoForm = () => {
  const addTodo = useAddTodo(() => {
    ref.current!.value = '';
  });

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();

          addTodo.mutate({
            id: 0,
            title: ref.current!.value,
            completed: false,
            userId: 1,
          });
        }}
      >
        <div className="col">
          <input type="text" ref={ref} className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default ToDoForm;
