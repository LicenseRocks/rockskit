import PropTypes from "prop-types";

export const ExplorerLayoutPropTypes = {
  children: PropTypes.node.isRequired,
  footerContent: PropTypes.node,
  headerLogoAction: PropTypes.func,
  headerRight: PropTypes.node,
  sidebar: PropTypes.node,
};
