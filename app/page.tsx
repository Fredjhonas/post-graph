'use client';

import ExcelExportBtn from '@/components/ExcelExportBtn';
import LoadingSpinner from '@/components/LoadingSpinner';
import UserItem from '@/components/UserItem';
import { useUsers } from '@/hooks/useUsers';
import { formatUsers } from '@/utils/FormatUsers';
import Link from 'next/link';

export default function Home() {
  const { users, isLoading } = useUsers();

  const usersFormatted = formatUsers(users);

  return (
    <div className="lg:w-full sm:w-screen">
      <div className="items-center justify-center font-mono text-sm flex-col  p-14">
        <h2 className="text-2xl font-bold leading-7 text-gray-800 text-center">
          Bienvenido a Post Graph
        </h2>
        <h5 className="text-sm font-semibold leading-6 text-gray-500 text-center">
          Lista de usuarios con API básica de posteos
        </h5>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <ul
            role="list"
            className="divide-y divide-gray-300 bg-gradient-to-b from-blue-50 p-10 rounded-lg"
          >
            <div className="flex items-center justify-end">
              <Link href={`/graphic`}>
                <button className="leading-5 text-red-600 hover:text-red-500  bg-red-100 hover:bg-red-50 px-4 py-2.5 mb-4 rounded">
                  Ver gráfico de posteos
                </button>
              </Link>
              <ExcelExportBtn data={usersFormatted} fileName="Usuarios" />
            </div>
            {users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
