import * as React from "react";
import Enemy from "./battleHandlers/Enemy";
import Player from "./battleHandlers/Player";
import Dialog from "./battleHandlers/Dialog";
import { connect } from "react-redux";
import { PlayerProps } from "../reduxState/player/types";
import { AppState } from "../reduxState";
import { withRouter, RouteComponentProps } from "react-router";
import BaseWrapper from "./Containers/BaseWrapper";
import Header from "./Atoms/Header";
// import useAttack from "../utils/useAttack";

interface Props extends RouteComponentProps<any> {
  player: PlayerProps;
}

const Battlefield: React.FC<Props> = ({ location, player, history }) => {
  React.useEffect(() => {
    if (!player.selectedCharacter || !location.state || !location.state.enemy) {
      history.push("/characters/");
    }
  }, [history, player, location]);

  const [enemyIsDead, setEnemyDead] = React.useState(false);
  const [playerIsDead, setPlayerDead] = React.useState(false);

  const {
    state: { enemy }
  } = location;
  if (!player.selectedCharacter) {
    history.push("/characters/");
  }
  const character = player.selectedCharacter && player.selectedCharacter;
  // const damage = useAttack(80, "attack", character, enemy);
  return (
    <BaseWrapper>
      <Header variant="Large">Battlefield</Header>
      <Enemy character={enemy} setDead={bool => setEnemyDead(bool)} />
      <Dialog enemyDead={enemyIsDead} playerDead={playerIsDead} />
      <Player character={character} setDead={bool => setPlayerDead(bool)} />
    </BaseWrapper>
  );
};

const mapStateToProps = ({ player }: AppState) => ({
  player
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Battlefield)
);
