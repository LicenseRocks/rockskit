import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { TextBasePropTypes, TextBaseDefaultProps } from "./props";

const StyledText = styled(Typography)`
  && {
    ${({ fontWeight, theme }) => {
      if (fontWeight === "light") {
        return `font-weight: ${theme.typography.fontWeightLight};`;
      }

      if (fontWeight === "bold") {
        return `font-weight: ${theme.typography.fontWeightBold};`;
      }

      return `font-weight: ${theme.typography.fontWeightRegular};`;
    }}

    ${({ fontSize, theme, variant }) => {
      if (fontSize === "sm") {
        return `font-size: ${theme.typography[variant].fontSizeSm};`;
      }

      if (fontSize === "lg") {
        return `font-size: ${theme.typography[variant].fontSizeLg};`;
      }

      return `font-size: ${theme.typography[variant].fontSize};`;
    }}

  font-style: ${({ fontStyle }) => fontStyle};
  }
`;

export const TextBase = ({ content, children, ...props }) => {
  return <StyledText {...props}>{content || children}</StyledText>;
};

TextBase.propTypes = TextBasePropTypes;

TextBase.defaultProps = TextBaseDefaultProps;
