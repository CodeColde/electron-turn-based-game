import * as React from 'react';
import styled from "styled-components";
import theme from 'constants/theme';

type variant = "default" | "small" | "large";

interface Props {
    url: string;
    children: string | Node;
    variant?: variant;
}

const InternalLink: React.FC<Props> = ({url, children, variant = "default"}) => {
    return (
        <Wrapper variant={variant}>
            <Content href={url}>{children}</Content>
        </Wrapper>
    );
}

export default InternalLink;

const Wrapper = styled.p<{variant: variant}>`
    ${({ variant }) => {
        switch(variant) {
            case "large":
                return `font-size: 1.1rem;`;
            case "small":
                return `font-size: 0.8rem;`;
            default:
                return `font-size: 1rem;`;
        }
    }}
    padding-bottom: 3px;
`;

const Content = styled.a`
    color: ${theme.colors.rustyRed};
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 1px solid ${theme.colors.rustyRed};
`;