import Header, { HeaderVariantType } from "./Header";
import styled from "styled-components";
import theme from "../../constants/theme";

interface Props {
    variant: HeaderVariantType;
}

const Error: React.FC<Props> = ({variant, children}) => {
    return (
        <Text variant={variant}>{children}</Text>
    );
}

const Text = styled(Header)`
  height: 1rem;
  color: ${theme.colors.rustyRed};
`;

export default Error;