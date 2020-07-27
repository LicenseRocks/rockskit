import PropTypes from "prop-types";

import { SHARE_MODULE_SHARE_OPTIONS } from ".";
import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const ShareModulePropTypes = {
  copyText: PropTypes.string,
  shareOptions: PropTypes.arrayOf(PropTypes.oneOf(SHARE_MODULE_SHARE_OPTIONS)),
  url: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const ShareModuleDefaultProps = {
  copyText: "Or copy the link",
  shareOptions: SHARE_MODULE_SHARE_OPTIONS,
  url: "#",
};
