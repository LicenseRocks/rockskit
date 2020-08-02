import React from "react";

import {
  RadioBase,
  RadioBasePropTypes,
  RadioBaseDefaultProps,
} from "../RadioBase";

export const Radio = (props) => {
  return <RadioBase type="radio" {...props} />;
};

Radio.propTypes = RadioBasePropTypes;

Radio.defaultProps = RadioBaseDefaultProps;
