import Link from "next/link";

interface Props {
  title: string;
}

const TitleCard: React.FC<Props> = ({ title }) => {
  return (
    <section>
      <h1>{title}</h1>
      <Link href="/fighters">
        <a>Press any key</a>
      </Link>
    </section>
  );
};

export default TitleCard;
