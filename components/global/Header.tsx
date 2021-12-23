import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center bg-red-600 mb-4 py-1">
      <Link href="/fighters">
        <a>
          <Image
            src="/images/Logo.png"
            alt="Billionaire Bum Fight"
            width={300}
            height={40}
          />
        </a>
      </Link>
    </header>
  );
};

export default Header;
