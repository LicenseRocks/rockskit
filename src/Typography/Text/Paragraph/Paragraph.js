import React from "react";
import styled from "styled-components";

import { TextBase, TextBasePropTypes } from "../Base";

const StyledParagraph = styled(TextBase)`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;

export const Paragraph = (props) => {
  return <StyledParagraph variant="body1" paragraph {...props} />;
};

Paragraph.propTypes = TextBasePropTypes;
