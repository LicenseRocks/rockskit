import PropTypes from "prop-types";

export const DashboardLayoutPropTypes = {
  content: PropTypes.node.isRequired,
  headerBackButtonOnClick: PropTypes.func,
  headerLeft: PropTypes.node,
  headerLogoAction: PropTypes.func,
  headerRight: PropTypes.node,
  loading: PropTypes.bool,
};
