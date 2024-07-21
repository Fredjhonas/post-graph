'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type Props = {};

export default function NavBar({}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <nav className=" bg-blue-950 pb-2 w-screen">
      <div className="flex items-center justify-between p-4 text-white bg-blue-950 shadow-xl shadow-blue-200 rounded-md">
        <Link href={'/'}>
          <h1 className="text-2xl font-bold ml-6">Post Graph</h1>
        </Link>

        {pathname !== '/' && (
          <Link href="" role="button" className="text-white mr-6" onClick={goBack}>
            Regresar
          </Link>
        )}
      </div>
    </nav>
  );
}
