import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";

export const FormRowPropTypes = {
  children: PropTypes.node.isRequired,
  errors: PropTypes.arrayOf(PropTypes.node).isRequired,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node,
  labelAlign: PropTypes.oneOf(["start", "center"]),
  labelGutter: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  labelColor: PropTypes.oneOf(["dark", "light"]),
  direction: PropTypes.oneOf(["column", "row"]),
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const FormRowDefaultProps = {
  label: "",
  labelAlign: "center",
  labelGutter: false,
  show: true,
  labelColor: "light",
  direction: "row",
};
