import React from "react";
import styled from "styled-components";

import { FormErrorPropTypes, FormErrorDefaultProps } from "./props";
import { DISPLAY, SPACER } from "../../theme";

const Error = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
  color: ${({ theme }) => theme.palette.error.main};
  margin-top: ${({ theme }) => theme.spacing(2)};

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const FormError = ({ message, ...props }) => {
  return <Error {...props}>{message}</Error>;
};

FormError.propTypes = FormErrorPropTypes;

FormError.defaultProps = FormErrorDefaultProps;
