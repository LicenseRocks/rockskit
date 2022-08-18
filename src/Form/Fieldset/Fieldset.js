import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  gap: 1rem;
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;
export const Fieldset = ({ children }) => {
  return <StyledFieldset>{children}</StyledFieldset>;
};

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
};

Fieldset.defaultProps = {};
