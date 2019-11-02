import isCrit from "./isCrit";
import { Character } from "../reduxState/characters/types";

type Type = "attack" | "magic";

const useAttack = (
  power: number,
  type: Type,
  user: Character,
  target: Character
): number => {
  const crit = isCrit() ? 1.25 : 1;
  const rng = Math.floor(Math.random() * 11);
  console.log(power, type, user, target, crit, rng);

  return 1;
};

export default useAttack;
