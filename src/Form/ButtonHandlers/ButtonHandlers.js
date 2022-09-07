import React from "react";
import styled from "styled-components";

import { FormButtonHandlersDefaultProps, FormButtonHandlersPropTypes } from "./props";

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const FormButtonHandlers = ({ children }) => {
  return (
    <StyledRow>
      {children}
    </StyledRow>
  );
};

FormButtonHandlers.propTypes = FormButtonHandlersPropTypes;

FormButtonHandlers.defaultProps = FormButtonHandlersDefaultProps;
