import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo } from './useTodos';
import apiClient from '../services/api-client';
import { CACHE_KEY_TODOS } from '../utils/constants';

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      apiClient
        .post<Todo[]>(`/${CACHE_KEY_TODOS}`, todo)
        .then((res) => res.data),

    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>([CACHE_KEY_TODOS]);

      queryClient.setQueryData<Todo[]>([CACHE_KEY_TODOS], (todos = []) => {
        const updatedTodos = [newTodo, ...todos];
        return updatedTodos as Todo[];
      });

      onAdd();

      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(
        [CACHE_KEY_TODOS],
        (todos) =>
          todos?.map((todo) => (todo === newTodo ? savedTodo : todo)) as Todo[]
      );
    },

    onError: (err, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(
        [CACHE_KEY_TODOS],
        context?.previousTodos
      );
    },
  });

  return addTodo;
};

export default useAddTodo;
