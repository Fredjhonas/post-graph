'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Photo } from '../api/types';
import { fetchAlbumPhotos } from '@/api/resquests/album';

export const usePhotos = (albumId: number) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const { data, refetch, isLoading, isFetching, isError } = useQuery({
    queryKey: ['photos'],
    queryFn: () => fetchAlbumPhotos(albumId),
  });

  useEffect(() => {
    if (data) {
      setPhotos(data);
    }
  }, [data]);

  return { photos, refetch, isLoading, isFetching, isError };
};
