import PropTypes from "prop-types";

export const HeadingBasePropTypes = {
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  children: PropTypes.node,
  content: PropTypes.string,
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
