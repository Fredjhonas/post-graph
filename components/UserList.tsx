import { User } from '@/api/types';
import Image from 'next/image';

type UserListProps = {
  users: User[];
};

export default function UserList({ users }: UserListProps) {
  const avatarDefault =
    'https://gravatar.com/avatar/058b0d8906db4e28dc5de8cdb01781de?s=400&d=identicon&r=x';
  return (
    <ul
      role="list"
      className="divide-y divide-gray-300 bg-gradient-to-b from-blue-50 p-10 rounded-lg"
    >
      {users.map((user) => (
        <li key={user.email} className="sm:flex sm:flex-row justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4 mb-4">
            <Image
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={avatarDefault}
              width={48}
              height={48}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{user.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.email}</p>
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">En línea</p>
              </div>
            </div>
          </div>
          <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-600">
              <span className="font-semibold">Dirección:</span> {user.address.street},{' '}
              {user.address.city}, {user.address.suite}
            </p>
            <p className="text-sm leading-6 text-gray-600">
              <span className="font-semibold">Teléfono: </span> {user.phone}
            </p>
            <p className="text-sm leading-6 text-gray-600">
              <span className="font-semibold">Empresa: </span> {user.company.name}
            </p>
            <div className="mt-1 flex gap-x-6 items-center">
              <button className="mt-2 text-sm leading-5 text-blue-600 hover:text-blue-500 bg-blue-100 hover:bg-blue-50 px-2 py-1 rounded-md">
                Ver álbumes
              </button>
              <button className="mt-2 text-sm leading-5 text-red-600 hover:text-red-500  bg-red-100 hover:bg-red-50 px-2 py-1 rounded-md">
                Ver gráfico de posteos
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
