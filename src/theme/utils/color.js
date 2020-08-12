import PropTypes from "prop-types";

import { KIT_COLORS } from "..";

export const COLOR_PROP_TYPES = {
  colorPrimary: PropTypes.bool,
  colorPrimaryLight: PropTypes.bool,
  colorGrayLight: PropTypes.bool,
  colorGraySemiLight: PropTypes.bool,
  colorGrayRegular: PropTypes.bool,
  colorGrayMedium: PropTypes.bool,
  colorGrayDark: PropTypes.bool,
  colorBlack: PropTypes.bool,
  colorWhite: PropTypes.bool,
  colorError: PropTypes.bool,
  colorErrorLight: PropTypes.bool,
  colorWarning: PropTypes.bool,
  colorWarningLight: PropTypes.bool,
  colorSuccess: PropTypes.bool,
  colorSuccessLight: PropTypes.bool,
};

export const COLOR = ({
  colorPrimary,
  colorPrimaryLight,
  colorGrayLight,
  colorGraySemiLight,
  colorGrayRegular,
  colorGrayMedium,
  colorGrayDark,
  colorBlack,
  colorWhite,
  colorError,
  colorErrorLight,
  colorWarning,
  colorWarningLight,
  colorSuccess,
  colorSuccessLight,
}) => {
  let color = null;
  if (colorPrimary) color = KIT_COLORS.primary.main;
  if (colorPrimaryLight) color = KIT_COLORS.primary.light;
  if (colorGrayLight) color = KIT_COLORS.gray.light;
  if (colorGraySemiLight) color = KIT_COLORS.gray.semiLight;
  if (colorGrayRegular) color = KIT_COLORS.gray.regular;
  if (colorGrayMedium) color = KIT_COLORS.gray.medium;
  if (colorGrayDark) color = KIT_COLORS.gray.dark;
  if (colorBlack) color = KIT_COLORS.gray.black;
  if (colorWhite) color = KIT_COLORS.gray.white;
  if (colorError) color = KIT_COLORS.alert.darkRed;
  if (colorErrorLight) color = KIT_COLORS.alert.lightRed;
  if (colorWarning) color = KIT_COLORS.gray.white;
  if (colorWarningLight) color = KIT_COLORS.gray.white;
  if (colorSuccess) color = KIT_COLORS.gray.white;
  if (colorSuccessLight) color = KIT_COLORS.gray.white;

  return color ? `color: ${color} !important;` : "";
};
