import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';

interface Todo {
  id: number;
  title: string;
}

const useTodos = () => {
  const fetchTodos = () => {
    return apiClient.get<Todo[]>('/todos').then((res) => res.data);
  };

  return useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });
};

export default useTodos;
