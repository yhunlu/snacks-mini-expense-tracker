import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { Todo } from '../hooks/useTodos';
import apiClient from '../services/api-client';

const ToDoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      apiClient.post<Todo[]>('/todos', todo).then((res) => res.data),

    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

      queryClient.setQueryData<Todo[]>(['todos'], (todos) => {
        const updatedTodos = [newTodo, ...(todos || [])];
        return updatedTodos as Todo[];
      });

      ref.current!.value = '';

      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(
        ['todos'],
        (todos) =>
          todos?.map((todo) => (todo === newTodo ? savedTodo : todo)) as Todo[]
      );
    },

    onError: (err, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(['todos'], context?.previousTodos);
    },
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
          <button
            className="btn btn-primary"
            type="submit"
            disabled={addTodo.isPending}
          >
            {addTodo.isPending ? 'Adding...' : 'Add'}
          </button>
        </div>
      </form>
    </>
  );
};

export default ToDoForm;
