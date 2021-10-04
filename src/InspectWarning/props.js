import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const InspectWarningPropTypes = {
  children: PropTypes.node,
  data: PropTypes.array,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const InspectWarningDefaultProps = {
  children: null,
  data: null,
};
