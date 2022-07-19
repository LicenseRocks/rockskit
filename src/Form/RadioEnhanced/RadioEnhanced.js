import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { DISPLAY, SPACER } from "../../theme";
import { Fieldset } from "../Fieldset";
import { RadioEnhancedBaseItem } from "./BaseItem";
import { RadioEnhancedDefaultProps, RadioEnhancedPropTypes } from "./props";

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
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
};

const StyledRadioEnhancedBase = styled(RadioEnhancedBase)`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const RadioEnhanced = (props) => {
  return <StyledRadioEnhancedBase type="radio" {...props} />;
};

RadioEnhanced.propTypes = RadioEnhancedPropTypes;

RadioEnhanced.defaultProps = RadioEnhancedDefaultProps;