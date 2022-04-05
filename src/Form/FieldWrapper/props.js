import PropTypes from "prop-types";

import {
  DISPLAY_PROP_TYPES,
  SPACER_PROP_TYPES,
  THEME_COLORS,
} from "../../theme";

export const FieldWrapperPropTypes = {
  block: PropTypes.bool,
  endIcon: PropTypes.string,
  copyable: PropTypes.bool,
  valueToCopy: PropTypes.string,
  endIconColor: PropTypes.oneOf(THEME_COLORS),
  endIconOnClick: PropTypes.func,
  endIconPrefix: PropTypes.string,
  fixedHeight: PropTypes.bool,
  startIcon: PropTypes.string,
  startIconColor: PropTypes.oneOf(THEME_COLORS),
  startIconOnClick: PropTypes.func,
  startIconPrefix: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const FieldWrapperDefaultProps = {
  block: true,
  endIcon: "",
  copyable: false,
  valueToCopy: "",
  endIconColor: "input",
  fixedHeight: true,
  startIcon: "",
  startIconColor: "input",
};
