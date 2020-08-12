import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";

export const BoxBasePropTypes = {
  shadow: PropTypes.oneOf(["none", "normal", "long"]),
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const BoxBaseDefaultProps = {
  shadow: "normal",
};
