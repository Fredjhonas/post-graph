'use client';

import CardImage from '@/components/CardImage';
import { useAlbums } from '@/hooks/useAlbums';
import { useUsers } from '@/hooks/useUsers';
import { useParams } from 'next/navigation';

export default function Albumes() {
  const userId = Number(useParams().userId);
  const { albums, isLoading } = useAlbums(userId);
  const { users } = useUsers();
  const user = users.find((user) => user.id === userId);

  return (
    <main className="flex min-h-screen flex-col items-center container ml-auto mr-auto">
      <div className="lg:w-full sm:w-screen items-center justify-center font-mono text-sm flex-col  p-14">
        <h2 className="text-2xl font-bold leading-7 text-gray-800 text-center">Post Graph</h2>
        <h5 className="text-sm font-semibold leading-6 text-gray-500 text-center">
          Lista de albumes de {user?.name}
        </h5>
      </div>
      <div className="lg:w-full sm:w-screen">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <p className="text-center text-gray-800">Cargando...</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
            {albums.map((album) => (
              <CardImage
                key={album.id}
                title={album.title}
                source="https://picsum.photos/200"
                showButton
                route={`/user/${userId}/albums`}
                buttonText="Ver fotos"
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
