import { KIT_FONTS } from "./fonts";

export const KIT_TYPOGRAPHY = {
  h1: (theme) => ({
    fontFamily: KIT_FONTS.Galano.name,
    fontSize: "32px",
    fontWeight: 500,
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
    fontWeight: 500,
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
    fontWeight: 500,
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
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "unset",
  }),
  h5: () => ({
    fontFamily: KIT_FONTS.Galano.name,
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "unset",
  }),
  h6: () => ({
    fontFamily: KIT_FONTS.Galano.name,
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "unset",
  }),
  body1: () => ({
    // Paragraph
    fontFamily: KIT_FONTS.Inter.name,
    fontSizeLg: "18px",
    fontSize: "16px",
    fontSizeSm: "14px",
    lineHeight: "160%",
    textTransform: "initial",
    letterSpacing: "-0.01em",
  }),
  body2: () => ({
    // Text
    fontFamily: KIT_FONTS.Inter.name,
    fontSizeLg: "16px",
    fontSize: "14px",
    fontSizeSm: "12px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "unset",
  }),
  button: () => ({
    fontFamily: KIT_FONTS.Inter.name,
    fontSizeMd: "16px",
    fontSizeSm: "14px",
    fontSizeXs: "10px",
    lineHeight: "120%",
    textTransform: "uppercase",
    letterSpacing: "unset",
    fontWeight: "bold",
  }),
};
