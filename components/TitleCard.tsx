import Link from "next/link";
import Image from "next/Image";

interface Props {
  title: string;
  enterText: string;
}

const TitleCard: React.FC<Props> = ({ title }) => {
  return (
    <section className="h-48 flex flex-col justify-around items-center">
      <figure className="pb-20 md:pb-80">
        <Image
          src="/images/Logo.png"
          alt={title}
          width={300}
          height={40}
        />
      </figure>
      <Link href="/fighters">
        <a className="text-2xl md:text-4xl">Press any key</a>
      </Link>
    </section>
  );
};

export default TitleCard;
