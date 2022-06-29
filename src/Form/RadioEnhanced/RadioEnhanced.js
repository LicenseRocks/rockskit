import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { DISPLAY, SPACER } from "../../theme";
import { Fieldset } from "../Fieldset";
import { RadioEnhancedBaseItem } from "./BaseItem";

const RadioEnhancedBase = ({ options, ...props }) => {
  return (
    <Fieldset>
      {options.map((opt) => (
        <RadioEnhancedBaseItem key={opt.value} {...opt} {...props} />
      ))}
    </Fieldset>
  );
};

RadioEnhancedBase.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
};

const StyledRadioBase = styled(RadioEnhancedBase)`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const RadioEnhanced = (props) => {
  return <StyledRadioBase type="radio" {...props} />;
};
