'use client';

import CardImage from '@/components/CardImage';
import { usePhotos } from '@/hooks/usePhotos';
import { useParams } from 'next/navigation';
import { useAlbums } from '@/hooks/useAlbums';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Photos() {
  const albumId = Number(useParams().albumId);
  const userId = Number(useParams().userId);
  const { photos, isLoading } = usePhotos(albumId);
  const { albums } = useAlbums(userId);
  const album = albums.find((album) => album.id === albumId);

  return (
    <div className="lg:w-full sm:w-screen">
      <div className="items-center justify-center font-mono text-sm flex-col  p-14">
        <h2 className="text-2xl font-bold leading-7 text-gray-800 text-center">
          {' '}
          Lista de fotos de {album?.title}
        </h2>
      </div>
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
            {photos.map((photo) => (
              <CardImage key={photo.id} title={photo.title} source={photo.url} showButton={false} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
