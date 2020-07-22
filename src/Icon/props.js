import PropTypes from "prop-types";

import { KIT_ICON_SIZES, KIT_ICON_COLORS } from "../theme";

export const IconPropTypes = {
  color: PropTypes.oneOf(KIT_ICON_COLORS),
  icon: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(KIT_ICON_SIZES)),
};

export const IconDefaultProps = {
  color: "text",
  prefix: "far",
  size: "md",
};
