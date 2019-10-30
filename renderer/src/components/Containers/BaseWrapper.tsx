import * as React from "react";
import styled from "styled-components";

import theme from "../../constants/theme";

interface Props {
  children: any;
}

const BaseWrapper: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default BaseWrapper;

const Wrapper = styled.div`
  padding: 5rem;
  background-color: ${theme.colors.darkCerulean};
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
`;
