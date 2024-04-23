import { User } from '@/api/types';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  user: User;
};

const UserItem = ({ user }: Props) => {
  const avatarDefault =
    'https://gravatar.com/avatar/058b0d8906db4e28dc5de8cdb01781de?s=400&d=identicon&r=x';
  return (
    <li className="sm:flex sm:flex-row justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4 mb-4">
        <Image
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={avatarDefault}
          width={48}
          height={48}
          alt="user"
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{user.name}</p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {' '}
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            <span className="font-semibold">Website:</span> {user.website}
          </p>
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
          <Link href={`/user/${user.id}/albums`}>
            <button className="mt-2 text-sm leading-5 text-blue-600 hover:text-blue-500 bg-blue-100 hover:bg-blue-50 px-2 py-1 rounded-md">
              Ver álbumes
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
