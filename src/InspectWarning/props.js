import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const InspectWarningPropTypes = {
  content: PropTypes.node,
  children: PropTypes.node,
  color: PropTypes.oneOf(["required", "optional", "passed"]),
  rounded: PropTypes.bool,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const InspectWarningDefaultProps = {
  content: null,
  children: null,
  color: "info",
  rounded: true,
};
