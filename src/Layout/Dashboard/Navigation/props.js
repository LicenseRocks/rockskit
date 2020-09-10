import PropTypes from "prop-types";

export const DashboardLayoutNavigationPropTypes = {
  navigationItems: PropTypes.arrayOf(PropTypes.shape).isRequired,
  userMenuItems: PropTypes.arrayOf(PropTypes.shape),
};

export const DashboardLayoutNavigationDefaultProps = {
  userMenuItems: [],
};
