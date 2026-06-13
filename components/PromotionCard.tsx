
import Image from "next/image";
import Link from 'next/link';
type Props = {
  image: string;
  title: string;
  description: string;
  linkpage: string;
};

export default function PromotionCard({
  image,
  title,
  description,
  linkpage,
}: Props) {
  return (
    <article
      className="
      bg-white
      shadow-sm
      hover:shadow-xl
      transition
      "
    >
      <div className="relative h-[230px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3
          className="
          text-xl
          text-black
          font-semibold
          mb-4
          uppercase
          "
        >
          {title}
        </h3>

        <p
          className="
          text-gray-600
          leading-7
          mb-6
          "
        >
          {description}
        </p>

        <Link
          href={linkpage}
          className="
          bg-[#d6b15d]
          text-white
          px-6
          py-3
          hover:bg-[#c39d44]
          "
        >
          Xem thêm
        </Link>
      </div>
    </article>
  );
}