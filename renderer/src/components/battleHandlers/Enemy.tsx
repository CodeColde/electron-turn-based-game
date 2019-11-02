import * as React from "react";
import styled from "styled-components";
import Header from "../Atoms/Header";

interface Props {
  character: any;
  setDead: (bool: boolean) => void;
}

const Enemy: React.FC<Props> = ({ character, setDead }) => {
  const [currentHp, setHp] = React.useState(character.hp);

  React.useEffect(() => {
    if (currentHp <= 0) {
      setDead(true);
    }
  }, [currentHp, setDead]);
  console.log(setHp);
  return (
    <Wrapper>
      <Header>
        {character.name} - lv.{character.level}
      </Header>
      <HealthContainer>
        <HP total={character.hp} current={currentHp} />
      </HealthContainer>
    </Wrapper>
  );
};

export default Enemy;

const Wrapper = styled.section`
  width: 100%;
  height: 50%;
  position: relative;
`;
const HealthContainer = styled.div`
  width: 200px;
  height: 20px;
  border: 1px solid black;
`;

const HP = styled.div<{ total: number; current: number }>`
  text-align: left;
  background-color: blue;
  height: 100%;
  width: ${({ total, current }) => {
    const remaining = (current / total) * 100;
    return `${remaining}%`;
  }};
`;
