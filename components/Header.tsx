import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-center bg-red-600 mb-4 py-1">
      <Image
        src="/images/Logo.png"
        alt="Billionaire Bum Fight"
        width={300}
        height={40}
      />
    </header>
  );
};

export default Header;
