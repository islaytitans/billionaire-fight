import Image from "next/image";
import Fighter from "../../types/Fighter";

const FighterAvatar = ({
  fighter,
  fighterWealth,
}: {
  fighter: Fighter;
  fighterWealth: number | null;
}) => {
  let currentWealth;
  if (fighterWealth !== null) {
    currentWealth = Math.round((fighterWealth / fighter.wealth) * 100);
  }

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
      <div className="col-span-3 w-full bg-red-800 rounded-full">
        <div
          className={`bg-green-400 w-[${currentWealth}%] ${
            currentWealth === 100 ? "rounded-full" : "rounded-l-full"
          }`}>
          <p className="text-2xl">{fighterWealth}</p>
        </div>
      </div>
    </div>
  );
};

export default FighterAvatar;
