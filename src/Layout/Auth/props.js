import PropTypes from "prop-types";

export const AuthLayoutPropTypes = {
  content: PropTypes.node.isRequired,
  headerLeft: PropTypes.node,
  headerLogoAction: PropTypes.func,
  headerRight: PropTypes.node,
};
