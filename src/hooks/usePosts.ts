import apiClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';

interface Posts {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = () => {
  const fetchPosts = () => {
    return apiClient.get<Posts[]>('/posts').then((res) => res.data);
  };

  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000, // 1 minute
  });
};

export default usePosts;
