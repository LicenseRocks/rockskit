import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";

export const RadioBasePropTypes = {
  block: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  hasError: PropTypes.bool,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.string,
    })
  ),
  register: PropTypes.func.isRequired,
  stacked: PropTypes.bool,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const RadioBaseDefaultProps = {
  block: true,
  defaultValue: "",
  hasError: false,
  name: "radio",
  stacked: true,
};
