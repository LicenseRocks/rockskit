import { KIT_FONTS } from "./fonts";

export const KIT_TYPOGRAPHY = {
  h1: (theme) => ({
    fontFamily: KIT_FONTS.Galano.name,
    fontSize: "32px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "-0.03em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      letterSpacing: "-0.02em",
    },
  }),
  h2: (theme) => ({
    fontFamily: KIT_FONTS.Galano.name,
    fontSize: "26px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "-0.02em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      letterSpacing: "-0.01em",
    },
  }),
  h3: (theme) => ({
    fontFamily: KIT_FONTS.Galano.name,
    fontSize: "20px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "-0.01em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      letterSpacing: "-0.01em",
    },
  }),
  h4: () => ({
    fontFamily: KIT_FONTS.Galano.name,
    fontSize: "16px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "unset",
  }),
  h5: () => ({
    fontFamily: KIT_FONTS.Galano.name,
    fontSize: "14px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "unset",
  }),
  h6: () => ({
    fontFamily: KIT_FONTS.Galano.name,
    fontSize: "12px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "unset",
  }),
};
