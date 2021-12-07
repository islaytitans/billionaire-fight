import Link from "next/link";
import Image from "next/image";

const TitleCard = ({
  title,
  enterText,
}: {
  title: string;
  enterText: string;
}) => {
  return (
    <section className="h-48 flex flex-col justify-around items-center">
      <figure className="pb-20 md:pb-80">
        <Image src="/images/Logo.png" alt={title} width={300} height={40} />
      </figure>
      <Link href="/fighters">
        <a className="text-2xl md:text-4xl">{enterText}</a>
      </Link>
    </section>
  );
};

export default TitleCard;
