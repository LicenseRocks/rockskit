import PropTypes from "prop-types";

export const LinkPropTypes = {
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  Component: PropTypes.element.isRequired,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  passHref: PropTypes.bool,
};

export const LinkDefaultProps = {
  passHref: true,
};
