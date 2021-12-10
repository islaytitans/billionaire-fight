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
};

export function getModifier(score: number): number {
  const mod = Math.floor(score / 2 - 5);
  return mod;
}

export default Fighter;
