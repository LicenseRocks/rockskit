import PropTypes from "prop-types";

export const ButtonBasePropTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "subtle"]),
  content: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  target: PropTypes.string,
};

export const ButtonBaseDefaultProps = {
  color: "primary",
  size: "md",
};
