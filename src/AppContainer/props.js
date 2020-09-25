import PropTypes from "prop-types";

export const AppContainerPropTypes = {
  appConfig: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  icons: PropTypes.object,
  pageLoading: PropTypes.bool,
  theme: PropTypes.object.isRequired,
};
