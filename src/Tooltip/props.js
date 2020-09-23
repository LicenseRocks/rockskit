import PropTypes from "prop-types";

export const TooltipPropTypes = {
  arrow: PropTypes.bool,
  children: PropTypes.node.isRequired,
  content: PropTypes.node,
  contentProps: PropTypes.shape({}),
  interactive: PropTypes.bool,
  placement: PropTypes.string,
  renderContent: PropTypes.func,
};

export const TooltipDefaultProps = {
  arrow: true,
  interactive: true,
  placement: "top",
  renderContent: () => {},
};
