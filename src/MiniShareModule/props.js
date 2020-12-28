import PropTypes from "prop-types";

import { MINI_SHARE_MODULE_SHARE_OPTIONS } from ".";
import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";
import { ButtonBasePropTypes } from "../Button/Base";

export const ShareModulePropTypes = {
  iconProps: PropTypes.shape(ButtonBasePropTypes),
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  shareOptions: PropTypes.arrayOf(
    PropTypes.oneOf(MINI_SHARE_MODULE_SHARE_OPTIONS)
  ),
  url: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const ShareModuleDefaultProps = {
  orientation: "vertical",
  shareOptions: MINI_SHARE_MODULE_SHARE_OPTIONS,
  url: "#",
};
