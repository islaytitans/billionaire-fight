const useModifier = () => {
  function calcStatModifier(score: number): number {
    const mod = Math.floor(score / 2 - 5);
    return mod;
  }

  return [calcStatModifier];
};

export default useModifier;
