import PropTypes from "prop-types";

export const ThumbnailPropTypes = {
  hasPreview: PropTypes.bool,
  imgSrc: PropTypes.string,
  onClick: PropTypes.func,
};

export const ThumbnailDefaultProps = {
  hasPreview: false,
  onClick: () => {},
  imgSrc: "",
};
