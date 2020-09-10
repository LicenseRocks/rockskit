import PropTypes from "prop-types";

export const DashboardLayoutHeaderPropTypes = {
  backButtonOnClick: PropTypes.func,
  headerLeft: PropTypes.node,
  headerRight: PropTypes.node,
  logoAction: PropTypes.func,
  renderLogo: PropTypes.func,
};

export const DashboardLayoutHeaderDefaultProps = {
  renderLogo: () => {},
};
