'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

type Props = {};

export default function NavBar({}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <nav className="flex items-center justify-between w-screen p-4 bg-gray-800 text-white">
      <Link href={'/'}>
        <h1 className="text-2xl font-bold ml-6">Post Graph</h1>
      </Link>

      {pathname !== '/' && (
        <Link href="" role="button" className="text-white mr-6" onClick={goBack}>
          Regresar
        </Link>
      )}
    </nav>
  );
}
