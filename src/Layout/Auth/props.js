import PropTypes from "prop-types";

export const AuthLayoutPropTypes = {
  content: PropTypes.node.isRequired,
  headerBackButtonOnClick: PropTypes.func,
  headerLeft: PropTypes.node,
  headerLogoAction: PropTypes.func,
  headerRight: PropTypes.node,
};
