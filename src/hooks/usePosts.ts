import apiClient from '../services/api-client';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

interface Posts {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  const fetchPosts = () => {
    return apiClient
      .get<Posts[]>('/posts', {
        params: {
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);
  };

  return useQuery({
    queryKey: ['posts', query], // when parameterizing queryKey, it should be an array
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000, // 1 minute
    placeholderData: keepPreviousData,
  });
};

export default usePosts;
