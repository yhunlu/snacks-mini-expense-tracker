import apiClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';

interface Posts {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | undefined) => {
  const fetchPosts = () => {
    return apiClient
      .get<Posts[]>('/posts', { params: { userId } })
      .then((res) => res.data);
  };

  return useQuery({
    queryKey: userId ? ['users', userId, 'posts'] : ['posts'], // when parameterizing queryKey, it should be an array
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000, // 1 minute
  });
};

export default usePosts;
