import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 14px;
  line-height: 120%;
  color: ${({ theme }) => theme.palette.gray.medium};
`;

export const FormLabel = (props) => {
  return <StyledLabel {...props} />;
};

FormLabel.propTypes = {};

FormLabel.defaultProps = {};
