import PropTypes from "prop-types";

export const DashboardLayoutPropTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  headerBackButtonOnClick: PropTypes.func,
  headerLeft: PropTypes.node,
  headerLogoAction: PropTypes.func,
  headerLogoSrc: PropTypes.string,
  headerRight: PropTypes.node,
  headerRenderLogo: PropTypes.func,
  loading: PropTypes.bool,
  navigationItems: PropTypes.array,
};

export const DashboardLayoutDefaultProps = {
  navigationItems: [],
};
