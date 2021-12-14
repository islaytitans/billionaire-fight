const useDice = () => {
  const rollD20 = (): number => {
    return Math.floor(Math.random() * 20 + 1);
  };
  const rollD2 = (): number => {
    return Math.floor(Math.random() * 2 + 1);
  };
  const rollD3 = (): number => {
    return Math.floor(Math.random() * 3 + 1);
  };

  return [rollD2, rollD3, rollD20];
};

export default useDice;
