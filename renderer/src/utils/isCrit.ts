const isCrit = () => {
  const random = Math.random();
  if (random <= 0.25) {
    return true;
  }
  return false;
};

export default isCrit;
