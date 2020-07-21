import { createMuiTheme } from "@material-ui/core/styles";

import { KIT_COLORS, KIT_FONTS, KIT_TYPOGRAPHY } from ".";

export const theme = createMuiTheme();

theme.palette = {
  ...theme.palette,
  primary: {
    main: KIT_COLORS.primary.main,
    light: KIT_COLORS.primary.light,
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

theme.typography = {
  ...theme.typography,
  fontFamily: [KIT_FONTS.Inter.name, "sans-serif"].join(","),
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: "normal",
  fontWeightBold: 600,
  h1: KIT_TYPOGRAPHY.h1(theme),
  h2: KIT_TYPOGRAPHY.h2(theme),
  h3: KIT_TYPOGRAPHY.h3(theme),
  h4: KIT_TYPOGRAPHY.h4(),
  h5: KIT_TYPOGRAPHY.h5(),
  h6: KIT_TYPOGRAPHY.h6(),
  body1: KIT_TYPOGRAPHY.body1(), // Paragraph
  body2: KIT_TYPOGRAPHY.body2(), // Text
  button: KIT_TYPOGRAPHY.button(),
};

theme.spacing = (factor) => factor * 4;

theme.overrides.MuiButtonBase = {
  root: KIT_TYPOGRAPHY.button(),
};
