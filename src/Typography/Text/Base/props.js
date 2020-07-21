import PropTypes from "prop-types";

export const BaseTextPropTypes = {
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
  fontStyle: PropTypes.oneOf(["normal", "italic"]),
  fontWeight: PropTypes.oneOf(["light", "regular", "bold"]),
  fontSize: PropTypes.oneOf(["sm", "md", "lg"]),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
};

export const BaseTextDefaultProps = {
  fontStyle: "normal",
  fontWeight: "regular",
  fontSize: "md",
};
