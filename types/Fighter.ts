import Attack from "./Attack";

type Fighter = {
  id: number;
  firstName: string;
  lastName: string;
  nickname: string;
  wealth: number;
  strength: number;
  defence: number;
  speed: number;
  image: string;
  attacks: Attack[];
};

export default Fighter;
