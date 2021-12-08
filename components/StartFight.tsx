import Link from "next/link";

const StartFight = () => {
  return (
    <button className="w-96 py-3 my-2 text-4xl tracking-widest bg-red-600 hover:bg-red-700 text-yellow-300 border-gray-100 rounded-xl">
      <Link href="/fight">
        <a>Fight!</a>
      </Link>
    </button>
  );
};

export default StartFight;
