import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const ProfilePropTypes = {
  coverSrc: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  shareOnClick: PropTypes.func,
  shareUrl: PropTypes.string,
  socialLinks: PropTypes.array,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const ProfileDefaultProps = {
  socialLinks: [],
};
