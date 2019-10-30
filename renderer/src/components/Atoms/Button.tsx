import * as React from "react";
import styled, { css } from "styled-components";
import theme from "../../constants/theme";

type VariantType = "Danger" | "Default";

interface Props extends React.ButtonHTMLAttributes<any> {
  variant?: VariantType;
  marginRight?: boolean;
}

const Button: React.FC<Props> = ({
  variant = "Default",
  children,
  onClick,
  marginRight
}) => {
  return (
    <ButtonWrapper
      variant={variant}
      onClick={onClick}
      marginRight={marginRight}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;

const defaultVariant = css`
  color: ${theme.colors.eggshell};
  border: 1px solid ${theme.colors.eggshell};

  &:hover {
    color: ${theme.colors.yankeesBlue};
    background-color: ${theme.colors.eggshell};
    border: 1px solid ${theme.colors.eggshell};
  }
`;

const dangerVariant = css`
  color: ${theme.colors.rustyRed};
  border: 1px solid ${theme.colors.rustyRed};

  &:hover {
    color: ${theme.colors.eggshell};
    background-color: ${theme.colors.rustyRed};
    border: 1px solid ${theme.colors.rustyRed};
  }
`;

const Constant = styled.button<{ marginRight?: boolean }>`
  ${({ marginRight }) => marginRight && `margin-right: 2rem;`}
  padding: 1rem 4rem;
  font-size: 1.2rem;
  background-color: transparent;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonWrapper = styled(Constant)<{ variant: VariantType }>`
  ${({ variant }) => {
    switch (variant) {
      case "Danger":
        return dangerVariant;
      default:
        return defaultVariant;
    }
  }}
`;
