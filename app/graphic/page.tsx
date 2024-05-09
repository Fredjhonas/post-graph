'use client';

import Link from 'next/link';
import { usePosts } from '@/hooks/usePosts';
import { useUsers } from '@/hooks/useUsers';
import GraphicPost from '@/components/GraphicPost';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Graphic() {
  const { posts, isLoading } = usePosts();
  const { users } = useUsers();

  const dataFormatted = users.map((user) => {
    const userPosts = posts.filter((post) => post.userId === user.id);
    return {
      ...user,
      posts: userPosts.length,
    };
  });

  return (
    <div className="lg:w-full sm:w-screen">
      <div className="items-center justify-center font-mono text-sm flex-col  p-14">
        <h2 className="text-2xl font-bold leading-7 text-gray-800 text-center">
          {' '}
          Publicaciones de usuarios
        </h2>
      </div>
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="flex justify-center items-center mt-6">
            <GraphicPost dataUsers={dataFormatted} />
          </div>
        )}
      </div>
    </div>
  );
}
