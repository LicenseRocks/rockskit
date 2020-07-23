import PropTypes from "prop-types";

import { THEME_COLORS } from "../../theme";

export const FieldWrapperPropTypes = {
  block: PropTypes.bool,
  endIcon: PropTypes.string,
  endIconColor: PropTypes.oneOf(THEME_COLORS),
  endIconOnClick: PropTypes.func,
  startIcon: PropTypes.string,
  startIconColor: PropTypes.oneOf(THEME_COLORS),
  startIconOnClick: PropTypes.func,
};

export const FieldWrapperDefaultProps = {
  block: true,
  endIcon: "",
  endIconColor: "input",
  startIcon: "",
  startIconColor: "input",
};
