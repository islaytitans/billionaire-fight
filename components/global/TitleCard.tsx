import Link from "next/link";
import Image from "next/image";

const TitleCard = ({ title, enterText }: { title: string; enterText: string }) => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-around bg-red-600 p-6 text-yellow-300">
      <figure>
        <Image src="/images/Logo.png" alt={title} width={600} height={80} />
      </figure>
      <Link href="/fighters">
        <a className="mt-96 text-2xl md:text-4xl">{enterText}</a>
      </Link>
    </section>
  );
};

export default TitleCard;
