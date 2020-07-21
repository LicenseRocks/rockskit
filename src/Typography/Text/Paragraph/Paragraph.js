import React from "react";
import styled from "styled-components";

import { BaseText, BaseTextPropTypes } from "../Base";

const StyledParagraph = styled(BaseText)`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  }
`;

export const Paragraph = (props) => {
  return <StyledParagraph variant="body1" paragraph {...props} />;
};

Paragraph.propTypes = BaseTextPropTypes;
