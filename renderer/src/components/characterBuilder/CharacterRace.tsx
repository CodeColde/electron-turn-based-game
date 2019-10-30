import * as React from "react";
import { Statistics } from "../../redux/characters/types";
import Header from "../Atoms/Header";

interface Props {
  selectedRace: string;
  setRace: (raceTitle: string, stats: Statistics) => void;
}

const CharacterRace: React.FC<Props> = ({ selectedRace, setRace }) => {
  const handleRace = (race: string) => {
    let stats = {
      hp: 35,
      attack: 10,
      magic: 10,
      defense: 10,
      magicResistance: 10,
      speed: 10
    };
    switch (race) {
      case "Human":
        stats.attack = stats.attack + 2;
        stats.defense = stats.defense - 2;
        break;
      case "Dwarf":
        stats.defense = stats.defense + 2;
        stats.speed = stats.speed - 2;
        break;
      case "Gnome":
        stats.speed = stats.speed + 2;
        stats.attack = stats.attack - 2;
        break;
      default:
        throw Error("No Race Selected");
    }
    setRace(race, stats);
  };

  return (
    <div>
      <Header variant="Big">Select a Race</Header>
      <label>
        Human:{" "}
        <input
          type="radio"
          name="race"
          value="Human"
          onChange={e => handleRace(e.target.value)}
          checked={selectedRace === "Human"}
        />
      </label>
      <label>
        Dwarf:{" "}
        <input
          type="radio"
          name="race"
          value="Dwarf"
          onChange={e => handleRace(e.target.value)}
          checked={selectedRace === "Dwarf"}
        />
      </label>
      <label>
        Gnome:{" "}
        <input
          type="radio"
          name="race"
          value="Gnome"
          onChange={e => handleRace(e.target.value)}
          checked={selectedRace === "Gnome"}
        />
      </label>
    </div>
  );
};

export default CharacterRace;
