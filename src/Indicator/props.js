import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const IndicatorPropTypes = {
  color: PropTypes.string,
  content: PropTypes.node,
  children: PropTypes.node,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const IndicatorDefaultProps = {
  color: "primary",
};
