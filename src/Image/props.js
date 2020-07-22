import PropTypes from "prop-types";

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
};

export const ImageDefaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false,
};
