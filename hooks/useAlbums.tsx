'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Album } from '../api/types';
import { fetchUserAlbums } from '@/api/resquests/user';

export const useAlbums = (userId: number) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { data, refetch, isLoading, isFetching, isError } = useQuery({
    queryKey: ['albums'],
    queryFn: () => fetchUserAlbums(userId),
  });

  useEffect(() => {
    if (data) {
      setAlbums(data);
    }
  }, [data]);

  return { albums, refetch, isLoading, isFetching, isError };
};
