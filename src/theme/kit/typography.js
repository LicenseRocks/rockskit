export const KIT_TYPOGRAPHY = (theme) => ({
  h1: {
    fontFamily: theme.typography.fonts.heading,
    fontSize: "32px",
    fontWeight: 500,
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "-0.03em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      letterSpacing: "-0.02em",
    },
  },
  h2: {
    fontFamily: theme.typography.fonts.heading,
    fontWeight: 500,
    fontSize: "26px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "-0.02em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      letterSpacing: "-0.01em",
    },
  },
  h3: {
    fontFamily: theme.typography.fonts.heading,
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "-0.01em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      letterSpacing: "-0.01em",
    },
  },
  h4: {
    fontFamily: theme.typography.fonts.heading,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "unset",
  },
  h5: {
    fontFamily: theme.typography.fonts.heading,
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "unset",
  },
  h6: {
    fontFamily: theme.typography.fonts.heading,
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "unset",
  },
  body1: {
    // Paragraph
    fontFamily: theme.typography.fonts.regular,
    fontSizeLg: "18px",
    fontSize: "16px",
    fontSizeSm: "14px",
    lineHeight: "160%",
    textTransform: "initial",
    letterSpacing: "-0.01em",
  },
  body2: {
    // Text
    fontFamily: theme.typography.fonts.regular,
    fontSizeLg: "16px",
    fontSize: "14px",
    fontSizeSm: "12px",
    lineHeight: "120%",
    textTransform: "initial",
    letterSpacing: "unset",
  },
  button: {
    fontFamily: theme.typography.fonts.regular,
    fontSizeLg: "16px",
    fontSizeMd: "16px",
    fontSizeSm: "12px",
    fontSizeXs: "10px",
    lineHeight: "120%",
    textTransform: "uppercase",
    letterSpacing: "unset",
    fontWeight: "bold",
  },
});
