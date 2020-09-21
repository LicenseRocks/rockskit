import PropTypes from "prop-types";

export const pageMetaPropTypes = {
  children: PropTypes.node,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  Wrapper: PropTypes.node,
};

export const pageMetaDefaultProps = {};
