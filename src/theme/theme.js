import { createMuiTheme } from "@material-ui/core/styles";

import {
  FreeBrandIconSet,
  FreeSolidIconSet,
  KIT_COLORS,
  KIT_FONTS,
  KIT_TYPOGRAPHY,
} from ".";

export const RocksKitIcons = { ...FreeBrandIconSet, ...FreeSolidIconSet };

export const RocksKitTheme = ({ colors, fonts } = {}) => {
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 1200,
      },
    },
    defaultIconSet: "fa",
    typography: {
      fonts: fonts || KIT_FONTS,
    },
  });

  theme.palette = {
    ...theme.palette,
    primary: {
      main: colors?.primaryMain || KIT_COLORS.primary.main,
      light: colors?.primaryLight || KIT_COLORS.primary.light,
    },
    secondary: {
      main: KIT_COLORS.gray.dark,
      light: KIT_COLORS.gray.semiLight,
      dark: KIT_COLORS.gray.black,
    },
    text: {
      primary: KIT_COLORS.gray.black,
      secondary: KIT_COLORS.gray.medium,
    },
    gray: KIT_COLORS.gray,
    success: {
      main: KIT_COLORS.alert.darkGreen,
      light: KIT_COLORS.alert.lightGreen,
    },
    warning: {
      main: KIT_COLORS.alert.darkYellow,
      light: KIT_COLORS.alert.lightYellow,
    },
    error: {
      main: KIT_COLORS.alert.darkRed,
      light: KIT_COLORS.alert.lightRed,
    },
    common: {
      white: KIT_COLORS.gray.white,
      black: KIT_COLORS.gray.black,
    },
    background: {
      default: KIT_COLORS.gray.light,
    },
  };

  const typography = KIT_TYPOGRAPHY(theme);

  theme.typography = {
    ...theme.typography,
    fontFamily: [theme.typography.fonts.regular, "sans-serif"].join(","),
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: "normal",
    fontWeightBold: 600,
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    h4: typography.h4,
    h5: typography.h5,
    h6: typography.h6,
    body1: typography.body1, // Paragraph
    body2: typography.body2, // Text
    button: typography.button,
  };

  theme.spacing = (...nums) => {
    const amount = 4;
    return nums.reduce(
      (output, n) => `${output}${n * amount}${n > 0 ? "px" : ""} `,
      ""
    );
  };

  theme.overrides.MuiButtonBase = {
    root: typography.button,
    disabled: {
      opacity: 0.3,
    },
  };

  return theme;
};
