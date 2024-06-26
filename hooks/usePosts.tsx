'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Post } from '../api/types';
import { getPosts } from '@/api/resquests/post';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { data, refetch, isLoading, isFetching, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  return { posts, refetch, isLoading, isFetching, isError };
};
