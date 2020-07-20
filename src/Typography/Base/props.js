import PropTypes from "prop-types";

export const BaseTypographyPropTypes = {
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  children: PropTypes.node,
  content: PropTypes.node,
  color: PropTypes.oneOf([
    "initial",
    "inherit",
    "primary",
    "secondary",
    "textPrimary",
    "textSecondary",
    "error",
  ]),
  display: PropTypes.oneOf(["initial", "block", "inline"]),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
};
