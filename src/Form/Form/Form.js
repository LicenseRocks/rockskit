import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledForm = styled.form`
  border: none;
  outline: none;
`;
export const Form = ({ children, ...props }) => {
  return <StyledForm {...props}>{children}</StyledForm>;
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

Form.defaultProps = {};
