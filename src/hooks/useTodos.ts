import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from '../utils/constants';
import APIClient from '../services/apiClient';

const apiClient = new APIClient<Todo>(`/${CACHE_KEY_TODOS}`);

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const useTodos = () => {
  return useQuery({
    queryKey: [CACHE_KEY_TODOS],
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000, // 10 seconds
  });
};

export default useTodos;
