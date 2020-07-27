import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../../theme";

export const TextBasePropTypes = {
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
  fontStyle: PropTypes.oneOf(["normal", "italic"]),
  fontWeight: PropTypes.oneOf(["light", "regular", "bold"]),
  fontSize: PropTypes.oneOf(["sm", "md", "lg"]),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const TextBaseDefaultProps = {
  fontStyle: "normal",
  fontWeight: "regular",
  fontSize: "md",
};
