'use client';

import CardImage from '@/components/CardImage';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useAlbums } from '@/hooks/useAlbums';
import { useUsers } from '@/hooks/useUsers';
import { useParams } from 'next/navigation';

export default function Albumes() {
  const userId = Number(useParams().userId);
  const { albums, isLoading } = useAlbums(userId);
  const { users } = useUsers();
  const user = users.find((user) => user.id === userId);

  return (
    <div className="lg:w-full sm:w-screen">
      <div className="items-center justify-center font-mono text-sm flex-col  p-14">
        <h2 className="text-2xl font-bold leading-7 text-gray-800 text-center">
          Lista de albumes de {user?.name}
        </h2>
      </div>
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
            {albums.map((album) => (
              <CardImage
                key={album.id}
                title={album.title}
                source="https://picsum.photos/200"
                showButton
                route={`/user/${userId}/album/${album.id}/photos`}
                buttonText="Ver fotos"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
