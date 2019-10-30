import * as React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { addCharacter } from "../redux/characters/actions";
import {
  CharacterState,
  Character,
  Statistics
} from "../redux/characters/types";
import { AppState } from "../redux";
import CharacterClass from "./characterBuilder/CharacterClass";
import CharacterRace from "./characterBuilder/CharacterRace";
import CharacterInfo from "./characterBuilder/CharacterInfo";
import { PlayerProps } from "../redux/player/types";
import BaseWrapper from "./Containers/BaseWrapper";
import Header from "./Atoms/Header";
import Button from "./Atoms/Button";

interface Props extends RouteComponentProps<any> {
  characters: CharacterState;
  addCharacter: (data: Character) => void;
  player: PlayerProps;
}

const CreateCharacter: React.FC<Props> = ({
  characters,
  addCharacter,
  player,
  history
}) => {
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState();
  const [race, setRace] = React.useState();
  const [ability, setAbility] = React.useState();
  const [classTitle, setClass] = React.useState();
  const [moves, setMoves] = React.useState();
  const [stats, setStats] = React.useState();
  const [genderDiscrepancy, setDiscrepancy] = React.useState();

  const handleGender = (sex: string) => {
    if (sex === "Female") {
      setDiscrepancy({ speed: 2, attack: -2 });
    } else {
      setDiscrepancy({ speed: -2, attack: 2 });
    }
    setGender(sex);
  };

  const handleClass = (
    classTitle: string,
    ability: string,
    moves: Array<string>,
    stats: Statistics
  ) => {
    setClass(classTitle);
    setAbility(ability);
    setMoves(moves);
    setStats(stats);
  };
  const handleRace = (raceTitle: string, stats: Statistics) => {
    setRace(raceTitle);
    setStats(stats);
  };

  const handleSubmit = () => {
    if (player.username) {
      let statistics = { ...stats };
      statistics.speed = statistics.speed + genderDiscrepancy.speed;
      statistics.attack = statistics.attack + genderDiscrepancy.attack;
      addCharacter({
        id: characters.length,
        owner: player.username,
        name,
        gender,
        race,
        classTitle,
        moves,
        ability,
        ...statistics,
        level: 1,
        experience: 0
      });
      history.push("/characters/");
    }
  };

  return (
    <BaseWrapper>
      <Header variant="Large">Create your Character</Header>
      <CharacterInfo
        name={name}
        selectedGender={gender}
        setName={name => setName(name)}
        setGender={gender => handleGender(gender)}
      />
      <CharacterRace
        selectedRace={race}
        setRace={(raceTitle, stats) => handleRace(raceTitle, stats)}
      />
      <CharacterClass
        selectedClass={classTitle}
        setClass={(classTitle, ability, moves, stats) =>
          handleClass(classTitle, ability, moves, stats)
        }
        stats={stats}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </BaseWrapper>
  );
};

const mapStateToProps = ({ characters, player }: AppState) => ({
  characters,
  player
});

export default withRouter(
  connect(
    mapStateToProps,
    { addCharacter }
  )(CreateCharacter)
);
