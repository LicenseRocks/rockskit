import React from "react";

import {
  FieldBase,
  FieldBasePropTypes,
  FieldBaseDefaultProps,
} from "../FieldBase";

export const Input = (props) => {
  return <FieldBase component="input" {...props} />;
};

Input.propTypes = FieldBasePropTypes;

Input.defaultProps = FieldBaseDefaultProps;
