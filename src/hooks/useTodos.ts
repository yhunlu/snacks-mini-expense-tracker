import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { CACHE_KEY_TODOS } from '../utils/constants';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const useTodos = () => {
  const fetchTodos = () => {
    return apiClient.get<Todo[]>(`/${CACHE_KEY_TODOS}`).then((res) => res.data);
  };

  return useQuery({
    queryKey: [CACHE_KEY_TODOS],
    queryFn: fetchTodos,
    staleTime: 10 * 1000, // 10 seconds
  });
};

export default useTodos;
