import apiClient from '../services/api-client';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';

interface Posts {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) => useInfiniteQuery({
  queryKey: ['posts', query],
  queryFn: ({ pageParam = 1 }) => {
    const start = (pageParam - 1) * query.pageSize;
    const limit = query.pageSize;
    const params = { _start: start, _limit: limit };
    return apiClient.get<Posts[]>('/posts', { params })
      .then((res) => res.data);
  },
  staleTime: 60000,
  placeholderData: keepPreviousData,
  getNextPageParam: (lastPage, pages) => (lastPage.length > 0 ? pages.length : undefined),
});

export default usePosts;
