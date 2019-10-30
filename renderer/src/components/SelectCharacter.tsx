import * as React from "react";
import { connect } from "react-redux";
import { Character, DeleteCharacterAction } from "../redux/characters/types";
import { AppState } from "../redux";
import { deleteCharacter } from "../redux/characters/actions";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { SelectCharacterAction } from "../redux/player/types";
import { selectCharacter } from "../redux/player/actions";
import BaseWrapper from "./Containers/BaseWrapper";
import Button from "./Atoms/Button";
import Header from "./Atoms/Header";

interface Props extends RouteComponentProps<any> {
  characters: Character[];
  selectCharacter: SelectCharacterAction;
  deleteCharacter: (id: number) => DeleteCharacterAction;
}

const SelectCharacter: React.FC<Props> = ({
  characters,
  selectCharacter,
  deleteCharacter,
  history
}) => {
  const handleSelect = (character: Character) => {
    selectCharacter(character);
    history.push("/select/");
  };

  return (
    <BaseWrapper>
      <Header variant="Large">Select Character</Header>
      <Link to="/create/">New</Link>
      {characters &&
        characters.map(item => (
          <div key={item.id}>
            <Header>
              {item.name} (lvl: {item.level})
            </Header>
            <Button onClick={() => handleSelect(item)} marginRight>
              Select
            </Button>
            <Button onClick={() => deleteCharacter(item.id)} variant="Danger">
              Delete
            </Button>
          </div>
        ))}
    </BaseWrapper>
  );
};

const mapStateToProps = ({ characters }: AppState) => ({
  characters
});

export default withRouter(
  connect(
    mapStateToProps,
    { selectCharacter, deleteCharacter }
  )(SelectCharacter)
);
