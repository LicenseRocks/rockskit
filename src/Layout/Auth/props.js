import PropTypes from "prop-types";

export const AuthLayoutPropTypes = {
  content: PropTypes.node.isRequired,
  headerBackButtonOnClick: PropTypes.func,
  headerLeft: PropTypes.node,
  headerLogoAction: PropTypes.func,
  headerLogoSrc: PropTypes.string,
  headerRight: PropTypes.node,
  headerRenderLogo: PropTypes.func,
  loading: PropTypes.bool,
};
