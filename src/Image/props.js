import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const ImagePropTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.any,
  cover: PropTypes.bool,
  fluid: PropTypes.bool,
  height: PropTypes.number,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
  roundedCircle: PropTypes.bool,
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
  thumbnail: PropTypes.bool,
  width: PropTypes.number,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const ImageDefaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false,
};
