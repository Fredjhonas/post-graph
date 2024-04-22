'use client';

import UserItem from '@/components/UserItem';
import { useUsers } from '@/hooks/useUsers';

export default function Home() {
  const { users, isLoading } = useUsers();

  return (
    <main className="flex min-h-screen flex-col items-center container ml-auto mr-auto">
      <nav className="flex items-center justify-between w-screen p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold ml-6">Post Graph</h1>
      </nav>
      <div className="lg:w-full sm:w-screen items-center justify-center font-mono text-sm flex-col  p-14">
        <h2 className="text-2xl font-bold leading-7 text-gray-800 text-center">
          Bienvenido a Post Graph
        </h2>
        <h5 className="text-sm font-semibold leading-6 text-gray-500 text-center">
          Lista de usuarios con API básica de posteos
        </h5>
      </div>
      {isLoading ? (
        <div className="lg:w-full sm:w-screen flex justify-center items-center h-screen">
          <p className="text-center text-gray-800">Cargando...</p>
        </div>
      ) : (
        <div className="lg:w-full sm:w-screen">
          <ul
            role="list"
            className="divide-y divide-gray-300 bg-gradient-to-b from-blue-50 p-10 rounded-lg"
          >
            {users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
