import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";

export const ReactSelectPropTypes = {
  async: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  endpoint: PropTypes.string,
  endpointQueryFlag: PropTypes.string,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const ReactSelectDefaultProps = {
  defaultValue: undefined,
  endpointQueryFlag: "q",
  isRequired: false,
};
