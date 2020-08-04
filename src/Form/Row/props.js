import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";

export const FormRowPropTypes = {
  children: PropTypes.node.isRequired,
  errors: PropTypes.arrayOf(PropTypes.node).isRequired,
  label: PropTypes.node,
  show: PropTypes.bool.isRequired,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const FormRowDefaultProps = {
  label: "",
};
