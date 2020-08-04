import React from "react";

import {
  FieldBase,
  FieldBasePropTypes,
  FieldBaseDefaultProps,
} from "../FieldBase";

const renderOptions = (options) =>
  options.map((opt) => (
    <option key={opt.value} value={opt.value}>
      {opt.label}
    </option>
  ));

export const Select = ({ options, ...props }) => {
  return (
    <FieldBase component="select" {...props}>
      {renderOptions(options)}
    </FieldBase>
  );
};

Select.propTypes = FieldBasePropTypes;

Select.defaultProps = FieldBaseDefaultProps;
