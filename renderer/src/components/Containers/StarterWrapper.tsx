import * as React from "react";
import styled from "styled-components";

import theme from "../../constants/theme";

interface Props {
  children: any;
}

const StarterWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

export default StarterWrapper;

const Wrapper = styled.div`
  padding: 5rem;
  background-color: ${theme.colors.darkCerulean};
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
`;

const Inner = styled.div`
  width: 50rem;
  background-color: ${theme.colors.yankeesBlue};
  padding: 5rem;
  box-sizing: border-box;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.4rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  color: ${theme.colors.eggshell};
`;
