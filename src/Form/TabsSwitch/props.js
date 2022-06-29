import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";

export const ToggleSwitchPropTypes = {
  control: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.bool,
  isRequired: PropTypes.string,
  name: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const ToggleSwitchDefaultProps = {
  defaultValue: undefined,
  isRequired: "",
  name: "toggleSwitch",
};
