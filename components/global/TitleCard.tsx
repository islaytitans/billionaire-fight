import Link from "next/link";
import Image from "next/image";

const TitleCard = ({ title, enterText }: { title: string; enterText: string }) => {
  return (
    <section className="flex flex-col min-h-screen justify-around items-center p-6 bg-red-600 text-yellow-300">
      <figure>
        <Image src="/images/Logo.png" alt={title} width={600} height={80} />
      </figure>
      <Link href="/fighters">
        <a className="text-2xl md:text-4xl mt-96">{enterText}</a>
      </Link>
    </section>
  );
};

export default TitleCard;
