import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { Todo } from '../hooks/useTodos';
import apiClient from '../services/api-client';

const ToDoForm = () => {
  const queryClient = useQueryClient();

  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      apiClient.post<Todo[]>('/todos', todo).then((res) => res.data),

    onSuccess: (savedTodo, newTodo) => {
      // 1: Invalidating the cache of todos
      //   queryClient.invalidateQueries({ queryKey: ['todos'] });

      // 2: Updating the data in the cache
      queryClient.setQueryData<Todo[]>(['todos'], (todos) => {
        const updatedTodos = [savedTodo, ...(todos || [])];
        return updatedTodos as Todo[];
      });
    },
  });

  const ref = useRef<HTMLInputElement>(null);

  return (
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
  );
};

export default ToDoForm;
