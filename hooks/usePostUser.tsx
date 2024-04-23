'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Post } from '../api/types';
import { getPostsByUserId } from '@/api/resquests/post';

export const usePostUser = (userId: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { data, refetch, isLoading, isFetching, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPostsByUserId(userId),
  });

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  return { posts, refetch, isLoading, isFetching, isError };
};
