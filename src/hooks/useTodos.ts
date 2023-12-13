import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from '../utils/constants';
import todoService from '../services/todoService';

const useTodos = () => {
  return useQuery({
    queryKey: [CACHE_KEY_TODOS],
    queryFn: todoService.getAll,
    staleTime: 10 * 1000, // 10 seconds
  });
};

export default useTodos;
