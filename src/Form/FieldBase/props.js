import PropTypes from "prop-types";

import {
  FieldWrapperPropTypes,
  FieldWrapperDefaultProps,
} from "../FieldWrapper";

export const FieldBasePropTypes = {
  ...FieldWrapperPropTypes,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  readOnly: PropTypes.bool,
  register: PropTypes.func,
  type: PropTypes.string,
};

export const FieldBaseDefaultProps = {
  ...FieldWrapperDefaultProps,
  disabled: false,
  hasError: false,
  readOnly: false,
  register: null,
  type: "text",
};
