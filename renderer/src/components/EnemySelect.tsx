import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../redux";
import { PlayerProps } from "../redux/player/types";
import EnemyDirectory from "../characters/enemies/Enemies";
import BaseWrapper from "./Containers/BaseWrapper";
import Header from "./Atoms/Header";

interface Props {
  player: PlayerProps;
}

const EnemySelect: React.FC<Props> = ({ player }) => {
  const randomOne = Math.round(Math.random() * 2);
  const randomTwo = Math.round(Math.random() * 2);
  const randomThree = Math.round(Math.random() * 2);

  const options = [
    EnemyDirectory[randomOne],
    EnemyDirectory[randomTwo],
    EnemyDirectory[randomThree]
  ];

  return (
    <BaseWrapper>
      {options.map((enemy, i) => (
        <article key={i}>
          <Header variant="Big">{enemy.name}</Header>
          <Header>
            {enemy.race} lv.{enemy.level}
          </Header>
          <Link
            to={{
              pathname: "/battlefield/",
              state: {
                enemy
              }
            }}
          >
            Fight
          </Link>
        </article>
      ))}
    </BaseWrapper>
  );
};

const mapStateToProps = ({ player }: AppState) => {
  return {
    player
  };
};

export default connect(mapStateToProps)(EnemySelect);
