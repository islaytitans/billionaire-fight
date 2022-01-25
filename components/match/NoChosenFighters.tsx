import Link from "next/link";

const NoChosenFighters = () => {
  return (
    <section className="my-10 flex w-full flex-col items-center space-y-10 rounded-xl bg-gray-50 py-4 px-2 text-center shadow-lg shadow-red-600/30">
      <h2 className="text-xl">Two fighters need to be selected</h2>
      <Link href="/fighters">
        <a>
          <div className="m-2 rounded-xl border-gray-100 bg-red-600 p-3 text-center text-4xl tracking-widest text-yellow-300 hover:bg-red-700">
            Go to the roster
          </div>
        </a>
      </Link>
    </section>
  );
};

export default NoChosenFighters;
