import PropTypes from "prop-types";

export const ExplorerLayoutPropTypes = {
  ads: PropTypes.node,
  content: PropTypes.node.isRequired,
  extraContent: PropTypes.node,
  extraSidebar: PropTypes.node,
  footerContent: PropTypes.node,
  headerLogoAction: PropTypes.func,
  headerRight: PropTypes.node,
  loading: PropTypes.bool,
  sidebar: PropTypes.node,
};
