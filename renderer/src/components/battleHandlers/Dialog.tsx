import * as React from "react";

interface Props {
  enemyDead: boolean;
  playerDead: boolean;
}

const Dialog: React.FC<Props> = ({ enemyDead, playerDead }) => {
  console.log(enemyDead, playerDead);
  return <div />;
};

export default Dialog;
