import PropTypes from "prop-types";

import { SHARE_MODULE_SHARE_OPTIONS } from ".";

export const ShareModulePropTypes = {
  copyText: PropTypes.string,
  shareOptions: PropTypes.arrayOf(PropTypes.oneOf(SHARE_MODULE_SHARE_OPTIONS)),
  url: PropTypes.string,
};

export const ShareModuleDefaultProps = {
  copyText: "Or copy the link",
  shareOptions: SHARE_MODULE_SHARE_OPTIONS,
  url: "#",
};
