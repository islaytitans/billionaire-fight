import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Card: NextPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Head>
        <title>Billionaire Bum Fight</title>
        <meta name="description" content="Let them fight" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <Image
          className="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
          width={400}
          height={400}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Next + Tailwind ❤️</div>
          <p className="text-grey-darker text-base">
            Next and Tailwind CSS are a match made in heaven, check out this
            article on how you can combine these two for your next app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
