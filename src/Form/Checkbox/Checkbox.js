import React from "react";

import {
  RadioBase,
  RadioBasePropTypes,
  RadioBaseDefaultProps,
} from "../RadioBase";

export const Checkbox = (props) => {
  return <RadioBase type="checkbox" {...props} />;
};

Checkbox.propTypes = RadioBasePropTypes;

Checkbox.defaultProps = RadioBaseDefaultProps;
