import * as React from "react";
import Header from "../Atoms/Header";
import { Statistics } from "../../redux/characters/types";

interface Props {
  selectedClass: string;
  setClass: (classTitle: string, ability: string, moves: string[], stats: Statistics) => void;
  stats: Statistics;
}

const CharacterClass: React.FC<Props> = ({
  selectedClass,
  setClass,
  stats
}) => {
  const handleClass = (classTitle: string) => {
    switch (classTitle) {
      case "Priest":
        setClass(classTitle, "Resurrect", [
          "Holy Grail",
          "Wish",
          "Immortal Stance",
          "Hail Gush"
        ], stats);
        break;
      case "Mage":
        setClass(classTitle, "Empower", [
          "Earth Blast",
          "Fireball",
          "Wave Smack",
          "Tornado"
        ], stats);
        break;
      case "Warrior":
        setClass(classTitle, "Adrenaline", ["Slash", "Stab", "Block", "Bash"], stats);
        break;
      default:
        throw Error("No Class Selected");
    }
  };

  return (
    <div>
      <Header variant="Big">Select a Class</Header>
      <label>
        Priest:{" "}
        <input
          type="radio"
          name="class"
          value="Priest"
          onChange={e => handleClass(e.target.value)}
          checked={selectedClass === "Priest"}
        />
      </label>
      <label>
        Warrior:{" "}
        <input
          type="radio"
          name="class"
          value="Warrior"
          onChange={e => handleClass(e.target.value)}
          checked={selectedClass === "Warrior"}
        />
      </label>
      <label>
        Mage:{" "}
        <input
          type="radio"
          name="class"
          value="Mage"
          onChange={e => handleClass(e.target.value)}
          checked={selectedClass === "Mage"}
        />
      </label>
    </div>
  );
};

export default CharacterClass;
