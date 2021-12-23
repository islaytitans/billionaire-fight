import Link from "next/link";

const NoChosenFighters = () => {
  return (
    <section className="flex flex-col py-4 px-2 my-10 w-full items-center text-center bg-gray-50 rounded-xl shadow-lg shadow-red-600/30 space-y-10">
      <h2 className="text-xl">Two fighters need to be selected</h2>
      <Link href="/fighters">
        <a>
          <div className="p-3 m-2 text-4xl text-center tracking-widest bg-red-600 hover:bg-red-700 text-yellow-300 border-gray-100 rounded-xl">
            Go to the roster
          </div>
        </a>
      </Link>
    </section>
  );
};

export default NoChosenFighters;
