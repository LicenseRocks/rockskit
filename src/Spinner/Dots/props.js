import PropTypes from "prop-types";

import {
  COLOR_PROP_TYPES,
  DIMENSION_PROP_TYPES,
  DISPLAY_PROP_TYPES,
  SPACER_PROP_TYPES,
} from "../../theme";

export const DotsSpinnerPropTypes = {
  size: PropTypes.number,
  ...COLOR_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
  ...DIMENSION_PROP_TYPES,
  ...SPACER_PROP_TYPES,
};

export const DotsSpinnerDefaultProps = {
  size: 60,
};
