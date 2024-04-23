'use client';

import Link from 'next/link';
import { usePosts } from '@/hooks/usePosts';
import { useParams } from 'next/navigation';
import { useUsers } from '@/hooks/useUsers';
import GraphicPost from '@/components/GraphicPost';

export default function Graphic() {
  const userId = Number(useParams().userId);
  const { posts, isLoading } = usePosts(userId);
  const { users } = useUsers();
  const user = users.find((user) => user.id === userId);

  return (
    <main className="flex min-h-screen flex-col items-center container ml-auto mr-auto">
      <nav className="flex items-center justify-between w-screen p-4 bg-gray-800 text-white mr-6">
        <Link href={'/'}>
          <h1 className="text-2xl font-bold ml-6">Post Graph</h1>
        </Link>
        <Link href="/" className="text-white mr-6">
          Regresar
        </Link>
      </nav>
      <div className="lg:w-full sm:w-screen items-center justify-center font-mono text-sm flex-col  p-14">
        <h2 className="text-2xl font-bold leading-7 text-gray-800 text-center">
          {' '}
          Publicaciones de {user?.name}
        </h2>
      </div>
      <div className="lg:w-full sm:w-screen">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <p className="text-center text-gray-800">Cargando...</p>
          </div>
        ) : (
          <div className="flex justify-center items-center mt-6">
            <GraphicPost postCount={posts.length} />
          </div>
        )}
      </div>
    </main>
  );
}
