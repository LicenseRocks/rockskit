import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;
  flex: 1;
`;
export const Fieldset = ({ children }) => {
  return <StyledFieldset>{children}</StyledFieldset>;
};

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
};

Fieldset.defaultProps = {};
