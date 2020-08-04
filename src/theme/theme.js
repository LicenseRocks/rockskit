import { createMuiTheme } from "@material-ui/core/styles";

import { KIT_COLORS, KIT_FONTS, KIT_TYPOGRAPHY } from ".";

export const RocksTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1200,
    },
  },
  defaultIconSet: "fa",
});

RocksTheme.palette = {
  ...RocksTheme.palette,
  primary: {
    main: KIT_COLORS.primary.main,
    light: KIT_COLORS.primary.light,
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

RocksTheme.typography = {
  ...RocksTheme.typography,
  fontFamily: [KIT_FONTS.Inter.name, "sans-serif"].join(","),
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: "normal",
  fontWeightBold: 600,
  h1: KIT_TYPOGRAPHY.h1(RocksTheme),
  h2: KIT_TYPOGRAPHY.h2(RocksTheme),
  h3: KIT_TYPOGRAPHY.h3(RocksTheme),
  h4: KIT_TYPOGRAPHY.h4(),
  h5: KIT_TYPOGRAPHY.h5(),
  h6: KIT_TYPOGRAPHY.h6(),
  body1: KIT_TYPOGRAPHY.body1(), // Paragraph
  body2: KIT_TYPOGRAPHY.body2(), // Text
  button: KIT_TYPOGRAPHY.button(),
};

RocksTheme.spacing = (...nums) => {
  const amount = 4;
  return nums.reduce(
    (output, n) => `${output}${n * amount}${n > 0 ? "px" : ""} `,
    ""
  );
};

RocksTheme.overrides.MuiButtonBase = {
  root: KIT_TYPOGRAPHY.button(),
};
