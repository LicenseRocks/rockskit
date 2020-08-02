import React from "react";
import styled from "styled-components";

import { FormErrorPropTypes, FormErrorDefaultProps } from "./props";

const Error = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
  color: ${({ theme }) => theme.palette.error.main};
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const FormError = ({ message }) => {
  return <Error>{message}</Error>;
};

FormError.propTypes = FormErrorPropTypes;

FormError.defaultProps = FormErrorDefaultProps;
