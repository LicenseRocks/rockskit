import { createMuiTheme } from "@material-ui/core/styles";

import {
  FreeBrandIconSet,
  FreeSolidIconSet,
  KIT_COLORS,
  KIT_FONTS,
  KIT_TYPOGRAPHY,
} from ".";

export const RocksKitIcons = { ...FreeBrandIconSet, ...FreeSolidIconSet };

export const RocksKitTheme = ({ colors, fonts, loadingIndicator } = {}) => {
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
      fonts: {
        heading: fonts?.heading || KIT_FONTS.heading,
        regular: fonts?.regular || KIT_FONTS.regular,
      },
    },
    loadingIndicator,
  });

  theme.palette = {
    ...theme.palette,
    primary: {
      main: colors?.primaryMain || KIT_COLORS.primary.main,
      light: colors?.primaryLight || KIT_COLORS.primary.light,
    },
    secondary: {
      main: colors?.elementsThirdColor || KIT_COLORS.gray.dark,
      light: colors?.elementsSecondaryColor || KIT_COLORS.gray.semiLight,
      dark: colors?.basicFontsColor || KIT_COLORS.gray.black,
    },
    text: {
      primary: colors?.basicFontsColor || KIT_COLORS.gray.black,
      secondary: colors?.secondaryFontColor || KIT_COLORS.gray.medium,
    },
    black: {
      main: colors?.basicFontsColor || KIT_COLORS.gray.black,
    },
    white: {
      main: KIT_COLORS.gray.white,
    },
    darkYellow: {
      main: KIT_COLORS.alert.darkYellow,
    },
    gray: {
      black: colors?.basicFontsColor || KIT_COLORS.gray.black,
      dark: colors?.elementsThirdColor || KIT_COLORS.gray.dark,
      regular: colors?.secondaryComponentsColor || KIT_COLORS.gray.regular,
      medium: colors?.secondaryFontColor || KIT_COLORS.gray.medium,
      light: colors?.elementsPrimaryColor || KIT_COLORS.gray.light,
      semiLight: colors?.elementsSecondaryColor || KIT_COLORS.gray.semiLight,
      main: colors?.elementsSecondaryColor || KIT_COLORS.gray.semiLight,
      white: KIT_COLORS.gray.white,
    },
    success: {
      main: KIT_COLORS.alert.darkGreen,
      light: KIT_COLORS.alert.lightGreen,
    },
    warning: {
      main: KIT_COLORS.alert.yellow,
      dark: KIT_COLORS.alert.darkYellow,
      light: KIT_COLORS.alert.lightYellow,
    },
    error: {
      main: KIT_COLORS.alert.darkRed,
      light: KIT_COLORS.alert.lightRed,
    },
    common: {
      white: colors?.componentsColor || KIT_COLORS.gray.white,
      black: KIT_COLORS.gray.black,
      yellow: KIT_COLORS.alert.yellow,
    },
    background: {
      default: colors?.bgColor || KIT_COLORS.gray.light,
      gradient: colors?.bgColorGradient || null,
    },
    green: {
      light: KIT_COLORS.green.light,
    },
    red: {
      light: KIT_COLORS.red.light,
      dark: KIT_COLORS.red.dark,
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
