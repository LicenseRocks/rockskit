import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";

export const RangeSliderPropTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  isRequired: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const RangeSliderDefaultProps = {
  defaultValue: 0,
  isRequired: false,
};
