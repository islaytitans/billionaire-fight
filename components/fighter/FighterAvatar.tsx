import Image from "next/image";
import Fighter from "../../types/Fighter";

const FighterAvatar = ({
  fighter,
  fighterWealth,
}: {
  fighter: Fighter;
  fighterWealth: number | null;
}) => {
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
      <p className="col-span-3 text-2xl bg-green-400 rounded-3xl">{fighterWealth}</p>
    </div>
  );
};

export default FighterAvatar;
