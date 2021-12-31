import Image from "next/image";
import useWealthBar from "../../match/useWealthBar";
import Fighter from "../../types/Fighter";

const FighterAvatar = ({
  fighter,
  fighterWealth,
}: {
  fighter: Fighter;
  fighterWealth: number | null;
}) => {
  const [wealthPercent, wealthBarWidth] = useWealthBar(fighter.wealth, fighterWealth);

  return (
    <div className="grid grid-cols-3 items-center">
      <figure>
        <Image
          src={fighter.image}
          alt={fighter.nickname}
          width={50}
          height={50}
          layout="intrinsic"
          priority
          className="rounded-full border border-gray-100 shadow-sm"
        />
      </figure>
      <h2 className="col-span-2 text-xl px-1 py-0.5">{fighter.nickname}</h2>
      <div className="relative col-span-3 w-full bg-red-800 rounded-full h-8">
        <div
          className={`bg-green-400 h-8 ${wealthBarWidth} ${
            wealthPercent === 100 ? "rounded-full" : "rounded-l-full"
          } transition-width duration-500 ease-in-out`}>
          &nbsp;
        </div>
        <p className="absolute text-2xl text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {fighterWealth}
        </p>
      </div>
    </div>
  );
};

export default FighterAvatar;
