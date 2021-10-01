import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const InspectWarningPropTypes = {
  content: PropTypes.node,
  children: PropTypes.node,
  alert: PropTypes.oneOf(["required", "optional", "passed"]),
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const InspectWarningDefaultProps = {
  content: null,
  children: null,
  alert: "passed",
};
