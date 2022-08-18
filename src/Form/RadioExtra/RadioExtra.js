import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { DISPLAY, SPACER } from "../../theme";
import { Fieldset } from "../Fieldset";
import { RadioExtraBaseItem } from "./BaseItem";
import { RadioExtraDefaultProps, RadioExtraPropTypes } from "./props";

const RadioExtraBase = ({ options, ...props }) => {
  return (
    <Fieldset>
      {options.map((opt) => (
        <RadioExtraBaseItem key={opt.value} {...opt} {...props} />
      ))}
    </Fieldset>
  );
};

RadioExtraBase.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
      iconPrefix: PropTypes.string,
    })
  ).isRequired,
};

const StyledRadioExtraBase = styled(RadioExtraBase)`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const RadioExtra = (props) => {
  return <StyledRadioExtraBase type="radio" {...props} />;
};

RadioExtra.propTypes = RadioExtraPropTypes;

RadioExtra.defaultProps = RadioExtraDefaultProps;