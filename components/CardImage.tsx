import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <div className="bg-gray-100 p-14 rounded-lg justify-start items-center flex flex-col">
      <h3 className="text-lg text-center font-semibold">{title}</h3>
      <Image
        src={source}
        width={200}
        height={200}
        alt="image card"
        className="rounded-lg m-4"
        priority={true}
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
