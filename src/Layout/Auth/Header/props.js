import PropTypes from "prop-types";

export const AuthLayoutHeaderPropTypes = {
  backButtonOnClick: PropTypes.func,
  headerLeft: PropTypes.node,
  headerRight: PropTypes.node,
  logoAction: PropTypes.func,
  logoSrc: PropTypes.string,
  renderLogo: PropTypes.func,
};

export const AuthLayoutHeaderDefaultProps = {
  renderLogo: () => {},
};
