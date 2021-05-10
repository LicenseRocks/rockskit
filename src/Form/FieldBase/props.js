import PropTypes from "prop-types";

import {
  FieldWrapperPropTypes,
  FieldWrapperDefaultProps,
} from "../FieldWrapper";

export const FieldBasePropTypes = {
  ...FieldWrapperPropTypes,
  disabled: PropTypes.bool,
  disableScrollOnNumber: PropTypes.bool,
  hasError: PropTypes.bool,
  hasWrapper: PropTypes.bool,
  readOnly: PropTypes.bool,
  register: PropTypes.func,
  type: PropTypes.string,
};

export const FieldBaseDefaultProps = {
  ...FieldWrapperDefaultProps,
  disabled: false,
  disableScrollOnNumber: true,
  hasError: false,
  hasWrapper: true,
  readOnly: false,
  register: null,
  type: "text",
};
