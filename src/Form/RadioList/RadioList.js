import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { DISPLAY, SPACER } from "../../theme";
import { Fieldset } from "../Fieldset";
import { RadioListBaseItem } from "./BaseItem";
import { RadioListDefaultProps, RadioListPropTypes } from "./props";

const RadioListBase = ({ options, ...props }) => {
  return (
    <Fieldset>
      {options.map((opt) => (
        <RadioListBaseItem key={opt.value} {...opt} {...props} />
      ))}
    </Fieldset>
  );
};

RadioListBase.propTypes = {
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

const StyledRadioListBase = styled(RadioListBase)`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const RadioList = (props) => {
  return <StyledRadioListBase type="radio" {...props} />;
};

RadioList.propTypes = RadioListPropTypes;

RadioList.defaultProps = RadioListDefaultProps;