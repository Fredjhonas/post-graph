'use client';

import { useAlbums } from '@/hooks/useAlbums';
import { useUsers } from '@/hooks/useUsers';
import Image from 'next/image';
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
              <div
                key={album.id}
                className="bg-gray-100 p-14 rounded-lg justify-start items-center flex flex-col"
              >
                <h3 className="text-lg text-center font-semibold">{album.title}</h3>
                <Image
                  src={'https://picsum.photos/200'}
                  width={200}
                  height={200}
                  alt="Album"
                  className="rounded-lg m-4"
                  priority={true}
                />
                <button className="mt-6 text-md leading-5 text-blue-600 hover:text-blue-500 bg-blue-100 hover:bg-blue-50 px-4 py-2 rounded-md">
                  Ver fotos
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
