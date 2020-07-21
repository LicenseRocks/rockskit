import PropTypes from "prop-types";

export const ButtonBasePropTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "subtle"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["md", "sm", "xs"]),
};

export const ButtonBaseDefaultProps = {
  color: "primary",
  size: "md",
};
