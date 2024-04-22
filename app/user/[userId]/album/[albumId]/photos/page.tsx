'use client';

import CardImage from '@/components/CardImage';
import { usePhotos } from '@/hooks/usePhotos';
import { useParams } from 'next/navigation';
import { useAlbums } from '@/hooks/useAlbums';

export default function Photos() {
  const albumId = Number(useParams().albumId);
  const userId = Number(useParams().userId);
  const { photos, isLoading } = usePhotos(albumId);
  const { albums } = useAlbums(userId);
  const album = albums.find((album) => album.id === albumId);

  return (
    <main className="flex min-h-screen flex-col items-center container ml-auto mr-auto">
      <div className="lg:w-full sm:w-screen items-center justify-center font-mono text-sm flex-col  p-14">
        <h2 className="text-2xl font-bold leading-7 text-gray-800 text-center">Post Graph</h2>
        <h5 className="text-sm font-semibold leading-6 text-gray-500 text-center">
          Lista de fotos de {album?.title}
        </h5>
      </div>
      <div className="lg:w-full sm:w-screen">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <p className="text-center text-gray-800">Cargando...</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
            {photos.map((photo) => (
              <CardImage key={photo.id} title={photo.title} source={photo.url} showButton={false} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
