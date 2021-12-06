import Link from "next/link";

interface Props {
  title: string;
}

const TitleCard: React.FC<Props> = ({ title }) => {
  return (
    <section className="h-48 flex flex-col justify-around items-center">
      <h1 className="text-4xl pb-20 md:text-8xl md:pb-80">{title}</h1>
      <Link href="/fighters">
        <a className="text-2xl md:text-4xl">Press any key</a>
      </Link>
    </section>
  );
};

export default TitleCard;
