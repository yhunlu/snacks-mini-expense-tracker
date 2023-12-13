import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const useTodos = () => {
  const fetchTodos = () => {
    return apiClient.get<Todo[]>('/todos').then((res) => res.data);
  };

  return useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 10 * 1000, // 10 seconds
  });
};

export default useTodos;
