import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type CardImageProps = {
  title: string;
  source: string;
  showButton?: boolean;
  route?: string;
  buttonText?: string;
};

export default function CardImage({
  title,
  source,
  showButton,
  route,
  buttonText,
}: CardImageProps) {
  const [loading, setLoading] = useState(true);
  const titleFormatted = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <div className="bg-gray-100 p-10 rounded-xl justify-start items-center flex flex-col">
      <h3 className="text-lg text-center font-semibold h-24">{titleFormatted}</h3>
      {loading && <div className="animate-pulse bg-gray-200 w-52 h-52 rounded-lg m-4" />}
      <Image
        src={source}
        width={300}
        height={300}
        alt="image card"
        className="rounded-lg m-4"
        priority={true}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(true)}
        style={{ display: loading ? 'none' : 'block' }}
      />

      {showButton && (
        <Link href={route || '#'}>
          <button className="mt-6 text-md leading-5 text-blue-600 hover:text-blue-500 bg-blue-100 hover:bg-blue-50 px-4 py-2 rounded-md">
            {buttonText}
          </button>
        </Link>
      )}
    </div>
  );
}
