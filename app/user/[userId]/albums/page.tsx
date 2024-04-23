'use client';

import CardImage from '@/components/CardImage';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useAlbums } from '@/hooks/useAlbums';
import { useUsers } from '@/hooks/useUsers';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Albumes() {
  const userId = Number(useParams().userId);
  const { albums, isLoading } = useAlbums(userId);
  const { users } = useUsers();
  const user = users.find((user) => user.id === userId);

  return (
    <main className="flex min-h-screen flex-col items-center container ml-auto mr-auto">
      <nav className="flex items-center justify-between w-screen p-4 bg-gray-800 text-white">
        <Link href={'/'}>
          <h1 className="text-2xl font-bold ml-6">Post Graph</h1>
        </Link>
        <Link href="/" className="text-white mr-6">
          Regresar
        </Link>
      </nav>
      <div className="lg:w-full sm:w-screen items-center justify-center font-mono text-sm flex-col  p-14">
        <h2 className="text-2xl font-bold leading-7 text-gray-800 text-center">
          Lista de albumes de {user?.name}
        </h2>
      </div>
      <div className="lg:w-full sm:w-screen">
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
    </main>
  );
}
