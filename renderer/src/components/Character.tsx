import * as React from "react";
import ReactJson from "react-json-view";
import { CharacterExamples } from "../reduxState/characters/types";
import BaseWrapper from "./Containers/BaseWrapper";
import Header from "./Atoms/Header";
import Button from "./Atoms/Button";

interface Props {
  character: CharacterExamples;
}

const Character: React.FC<Props> = ({ character }) => {
  const { levelUp, ...characterStats } = character;
  const [characterState, setCharacterState] = React.useState(characterStats);

  const handleClick = () => {
    character.levelUp();
    const { levelUp, ...characterStats } = character;
    setCharacterState(characterStats);
  };

  return (
    <BaseWrapper>
      <Header variant="Large">
        {characterState.name} (lvl. {characterState.level})
      </Header>
      <ReactJson
        src={characterState}
        name={"stats"}
        displayDataTypes={false}
        displayObjectSize={false}
      />
      <Button onClick={handleClick}>Level Up {characterState.name}</Button>
    </BaseWrapper>
  );
};

export default Character;
