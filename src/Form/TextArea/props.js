import PropTypes from "prop-types";

import { FieldBasePropTypes, FieldBaseDefaultProps } from "../FieldBase/props";

export const TextAreaPropTypes = {
  ...FieldBasePropTypes,
  autoFocus: PropTypes.bool,
  cols: PropTypes.number,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  rows: PropTypes.number,
  spellCheck: PropTypes.bool,
  tabIndex: PropTypes.number,
  wrap: PropTypes.oneOf(["soft", "hard"]),
};

export const TextAreaDefaultProps = {
  ...FieldBaseDefaultProps,
  rows: 5,
};
