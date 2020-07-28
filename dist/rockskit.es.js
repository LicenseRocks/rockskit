import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styled, { ThemeProvider as ThemeProvider$1, css } from 'styled-components';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBox, faCheckCircle, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faCopy, faEllipsisH, faEnvelope, faFile, faLink, faPlus, faSearchPlus, faTimes, faUser } from '@fortawesome/pro-regular-svg-icons';
import { faFacebookF, faTelegramPlane, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import Typography from '@material-ui/core/Typography';
import MuiButtonBase from '@material-ui/core/ButtonBase';
import { Collapse as Collapse$1 } from 'react-collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import Grid from '@material-ui/core/Grid';
import MuiContainer from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import copy from 'copy-to-clipboard';
import MuiTabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';

var AppContainerPropTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired
};

library.add(faFacebookF, faTelegramPlane, faTwitter, faWhatsapp, faBox, faCheckCircle, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faCopy, faEllipsisH, faEnvelope, faFile, faLink, faPlus, faSearchPlus, faTimes, faUser);

var AppContainer = function AppContainer(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(ThemeProvider$1, {
    theme: theme
  }, /*#__PURE__*/React.createElement(CssBaseline, null), children));
};
AppContainer.propTypes = AppContainerPropTypes;

var KIT_COLORS = {
  primary: {
    main: "#AC00fC",
    light: "#F5E0FF"
  },
  gray: {
    black: "#292839",
    dark: "#4D4B63",
    regular: "#CECDD9",
    medium: "#8685A6",
    light: "#F7F7F9",
    semiLight: "#F0F0F4",
    white: "#FFFFFF"
  },
  alert: {
    darkRed: "#FE3118",
    lightRed: "#FFD6D1",
    darkGreen: "#6AD19C",
    lightGreen: "#DFF8E3",
    darkYellow: "#958409",
    lightYellow: "#FFF3A2"
  }
};

var KIT_FONTS = {
  Galano: {
    name: "GalanoGrotesque-Bold"
  },
  Inter: {
    name: "Inter"
  }
};

var KIT_ICON_SIZES = {
  lg: 20,
  md: 16,
  sm: 12
};

var KIT_TYPOGRAPHY = {
  h1: function h1(theme) {
    return _defineProperty({
      fontFamily: KIT_FONTS.Galano.name,
      fontSize: "32px",
      fontWeight: 500,
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "-0.03em"
    }, theme.breakpoints.down("sm"), {
      fontSize: "28px",
      letterSpacing: "-0.02em"
    });
  },
  h2: function h2(theme) {
    return _defineProperty({
      fontFamily: KIT_FONTS.Galano.name,
      fontWeight: 500,
      fontSize: "26px",
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "-0.02em"
    }, theme.breakpoints.down("sm"), {
      fontSize: "20px",
      letterSpacing: "-0.01em"
    });
  },
  h3: function h3(theme) {
    return _defineProperty({
      fontFamily: KIT_FONTS.Galano.name,
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "-0.01em"
    }, theme.breakpoints.down("sm"), {
      fontSize: "16px",
      letterSpacing: "-0.01em"
    });
  },
  h4: function h4() {
    return {
      fontFamily: KIT_FONTS.Galano.name,
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "unset"
    };
  },
  h5: function h5() {
    return {
      fontFamily: KIT_FONTS.Galano.name,
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "unset"
    };
  },
  h6: function h6() {
    return {
      fontFamily: KIT_FONTS.Galano.name,
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "unset"
    };
  },
  body1: function body1() {
    return {
      // Paragraph
      fontFamily: KIT_FONTS.Inter.name,
      fontSizeLg: "18px",
      fontSize: "16px",
      fontSizeSm: "14px",
      lineHeight: "160%",
      textTransform: "initial",
      letterSpacing: "-0.01em"
    };
  },
  body2: function body2() {
    return {
      // Text
      fontFamily: KIT_FONTS.Inter.name,
      fontSizeLg: "16px",
      fontSize: "14px",
      fontSizeSm: "12px",
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "unset"
    };
  },
  button: function button() {
    return {
      fontFamily: KIT_FONTS.Inter.name,
      fontSizeMd: "16px",
      fontSizeSm: "12px",
      fontSizeXs: "10px",
      lineHeight: "120%",
      textTransform: "uppercase",
      letterSpacing: "unset",
      fontWeight: "bold"
    };
  }
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var theme = createMuiTheme();
theme.palette = _objectSpread(_objectSpread({}, theme.palette), {}, {
  primary: {
    main: KIT_COLORS.primary.main,
    light: KIT_COLORS.primary.light
  },
  secondary: {
    main: KIT_COLORS.gray.dark,
    light: KIT_COLORS.gray.semiLight,
    dark: KIT_COLORS.gray.black
  },
  text: {
    primary: KIT_COLORS.gray.black,
    secondary: KIT_COLORS.gray.medium
  },
  gray: KIT_COLORS.gray,
  success: {
    main: KIT_COLORS.alert.darkGreen,
    light: KIT_COLORS.alert.lightGreen
  },
  warning: {
    main: KIT_COLORS.alert.darkYellow,
    light: KIT_COLORS.alert.lightYellow
  },
  error: {
    main: KIT_COLORS.alert.darkRed,
    light: KIT_COLORS.alert.lightRed
  },
  common: {
    white: KIT_COLORS.gray.white,
    black: KIT_COLORS.gray.black
  },
  background: {
    "default": KIT_COLORS.gray.light
  }
});
theme.typography = _objectSpread(_objectSpread({}, theme.typography), {}, {
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
  body1: KIT_TYPOGRAPHY.body1(),
  // Paragraph
  body2: KIT_TYPOGRAPHY.body2(),
  // Text
  button: KIT_TYPOGRAPHY.button()
});
theme.breakpoints = _objectSpread(_objectSpread({}, theme.breakpoints), {}, {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 1200
  }
});

theme.spacing = function () {
  var amount = 4;

  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce(function (output, n) {
    return "".concat(output).concat(n * amount).concat(n > 0 ? "px" : "", " ");
  }, "");
};

theme.overrides.MuiButtonBase = {
  root: KIT_TYPOGRAPHY.button()
};

var DISPLAY_PROP_TYPES = {
  dBlock: PropTypes.bool,
  dFlex: PropTypes.bool,
  dInline: PropTypes.bool,
  dInlineBlock: PropTypes.bool,
  dInlineFlex: PropTypes.bool,
  dNone: PropTypes.bool
};
var DISPLAY = function DISPLAY(_ref) {
  var dBlock = _ref.dBlock,
      dFlex = _ref.dFlex,
      dInline = _ref.dInline,
      dInlineBlock = _ref.dInlineBlock,
      dInlineFlex = _ref.dInlineFlex,
      dNone = _ref.dNone;
  var display = null;
  if (dBlock) display = "block";
  if (dFlex) display = "flex";
  if (dInline) display = "inline";
  if (dInlineBlock) display = "inline-block";
  if (dInlineFlex) display = "inline-flex";
  if (dNone) display = "none";
  return display ? "display: ".concat(display, " !important;") : "";
};

var SPACER_FORMULA = function SPACER_FORMULA(factor) {
  return factor * 4;
};
var SPACER_POSTFIX = function SPACER_POSTFIX(space) {
  return "".concat(space > 0 ? "px" : "");
};
var SPACER_PROP_TYPES = {
  m: PropTypes.number,
  m0: PropTypes.bool,
  mx: PropTypes.number,
  my: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
  p: PropTypes.number,
  p0: PropTypes.bool,
  px: PropTypes.number,
  py: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  pr: PropTypes.number,
  pl: PropTypes.number
};
var SPACER = function SPACER(_ref) {
  var m = _ref.m,
      m0 = _ref.m0,
      mx = _ref.mx,
      my = _ref.my,
      mt = _ref.mt,
      mb = _ref.mb,
      mr = _ref.mr,
      ml = _ref.ml,
      p = _ref.p,
      p0 = _ref.p0,
      px = _ref.px,
      py = _ref.py,
      pt = _ref.pt,
      pb = _ref.pb,
      pr = _ref.pr,
      pl = _ref.pl;
  var temp = "";
  if (m) temp += "margin: ".concat(SPACER_FORMULA(m), "px !important;");
  if (m0) temp += "margin: 0 !important;";
  if (mx) temp += "margin: 0 ".concat(SPACER_FORMULA(mx), "px !important;");
  if (my) temp += "margin: ".concat(SPACER_FORMULA(my), "px 0 !important;");
  if (mt) temp += "margin-top: ".concat(SPACER_FORMULA(mt), "px !important;");
  if (mb) temp += "margin-bottom: ".concat(SPACER_FORMULA(mb), "px !important;");
  if (mr) temp += "margin-right: ".concat(SPACER_FORMULA(mr), "px !important;");
  if (ml) temp += "margin-left: ".concat(SPACER_FORMULA(ml), "px !important;");
  if (p) temp += "padding: ".concat(SPACER_FORMULA(p), "px !important;");
  if (p0) temp += "padding: 0 !important;";
  if (px) temp += "padding: 0 ".concat(SPACER_FORMULA(px), "px !important;");
  if (py) temp += "padding: ".concat(SPACER_FORMULA(py), "px 0 !important;");
  if (pt) temp += "padding-top: ".concat(SPACER_FORMULA(pt), "px !important;");
  if (pb) temp += "padding-bottom: ".concat(SPACER_FORMULA(pb), "px !important;");
  if (pr) temp += "padding-right: ".concat(SPACER_FORMULA(pr), "px !important;");
  if (pl) temp += "padding-left: ".concat(SPACER_FORMULA(pl), "px !important;");
  return temp;
};

var THEME_COLORS = ["primary", "secondary", "success", "error", "warning"];

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ChipBadgePropTypes = _objectSpread$1(_objectSpread$1({
  color: PropTypes.oneOf(THEME_COLORS),
  label: PropTypes.string,
  icon: PropTypes.string.isRequired
}, SPACER_PROP_TYPES), DISPLAY_PROP_TYPES);
var ChipBadgeDefaultProps = {
  color: "primary"
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var HeadingBasePropTypes = _objectSpread$2(_objectSpread$2({
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  children: PropTypes.node,
  content: PropTypes.string,
  color: PropTypes.oneOf(["initial", "inherit", "primary", "secondary", "textPrimary", "textSecondary", "error"]),
  display: PropTypes.oneOf(["initial", "block", "inline"]),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool
}, SPACER_PROP_TYPES), DISPLAY_PROP_TYPES);

var StyledHeading = styled(Typography).withConfig({
  displayName: "Base__StyledHeading",
  componentId: "cb64jp-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var HeadingBase = function HeadingBase(_ref) {
  var content = _ref.content,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["content", "children"]);

  return /*#__PURE__*/React.createElement(StyledHeading, props, content || children);
};
HeadingBase.propTypes = HeadingBasePropTypes;

var H1 = function H1(props) {
  return /*#__PURE__*/React.createElement(HeadingBase, _extends({
    variant: "h1"
  }, props));
};
H1.propTypes = HeadingBasePropTypes;

var H2 = function H2(props) {
  return /*#__PURE__*/React.createElement(HeadingBase, _extends({
    variant: "h2"
  }, props));
};
H2.propTypes = HeadingBasePropTypes;

var H3 = function H3(props) {
  return /*#__PURE__*/React.createElement(HeadingBase, _extends({
    variant: "h3"
  }, props));
};
H3.propTypes = HeadingBasePropTypes;

var H4 = function H4(props) {
  return /*#__PURE__*/React.createElement(HeadingBase, _extends({
    variant: "h4"
  }, props));
};
H4.propTypes = HeadingBasePropTypes;

var H5 = function H5(props) {
  return /*#__PURE__*/React.createElement(HeadingBase, _extends({
    variant: "h5"
  }, props));
};
H5.propTypes = HeadingBasePropTypes;

var H6 = function H6(props) {
  return /*#__PURE__*/React.createElement(HeadingBase, _extends({
    variant: "h6"
  }, props));
};
H6.propTypes = HeadingBasePropTypes;

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var TextBasePropTypes = _objectSpread$3(_objectSpread$3({
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  children: PropTypes.node,
  content: PropTypes.string,
  color: PropTypes.oneOf(["initial", "inherit", "primary", "secondary", "textPrimary", "textSecondary", "error"]),
  display: PropTypes.oneOf(["initial", "block", "inline"]),
  fontStyle: PropTypes.oneOf(["normal", "italic"]),
  fontWeight: PropTypes.oneOf(["light", "regular", "bold"]),
  fontSize: PropTypes.oneOf(["sm", "md", "lg"]),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool
}, SPACER_PROP_TYPES), DISPLAY_PROP_TYPES);
var TextBaseDefaultProps = {
  fontStyle: "normal",
  fontWeight: "regular",
  fontSize: "md"
};

var StyledText = styled(Typography).withConfig({
  displayName: "Base__StyledText",
  componentId: "sc-1yx6bh1-0"
})(["&&{", " ", " font-style:", ";", " ", "}"], function (_ref) {
  var fontWeight = _ref.fontWeight,
      theme = _ref.theme;

  if (fontWeight === "light") {
    return "font-weight: ".concat(theme.typography.fontWeightLight, ";");
  }

  if (fontWeight === "bold") {
    return "font-weight: ".concat(theme.typography.fontWeightBold, ";");
  }

  return "font-weight: ".concat(theme.typography.fontWeightRegular, ";");
}, function (_ref2) {
  var fontSize = _ref2.fontSize,
      theme = _ref2.theme,
      variant = _ref2.variant;

  if (fontSize === "sm") {
    return "font-size: ".concat(theme.typography[variant].fontSizeSm, ";");
  }

  if (fontSize === "lg") {
    return "font-size: ".concat(theme.typography[variant].fontSizeLg, ";");
  }

  return "font-size: ".concat(theme.typography[variant].fontSize, ";");
}, function (_ref3) {
  var fontStyle = _ref3.fontStyle;
  return fontStyle;
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var TextBase = function TextBase(_ref4) {
  var content = _ref4.content,
      children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["content", "children"]);

  return /*#__PURE__*/React.createElement(StyledText, props, content || children);
};
TextBase.propTypes = TextBasePropTypes;
TextBase.defaultProps = TextBaseDefaultProps;

var StyledParagraph = styled(TextBase).withConfig({
  displayName: "Paragraph__StyledParagraph",
  componentId: "sc-174p9te-0"
})(["&&{margin-bottom:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var Paragraph = function Paragraph(props) {
  return /*#__PURE__*/React.createElement(StyledParagraph, _extends({
    variant: "body1",
    paragraph: true
  }, props));
};
Paragraph.propTypes = TextBasePropTypes;

var Text = function Text(props) {
  return /*#__PURE__*/React.createElement(TextBase, _extends({
    component: "div",
    variant: "body2"
  }, props));
};
Text.propTypes = TextBasePropTypes;

var StyledChip = styled.div.withConfig({
  displayName: "Chip__StyledChip",
  componentId: "sc-492e0l-0"
})(["box-sizing:border-box;display:flex;align-items:center;justify-content:center;border-radius:22px;min-width:32px;min-height:32px;width:max-content;", " ", " ", ""], function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return css(["padding:", ";background-color:", ";color:", ";"], theme.spacing(2), theme.palette[color].light, theme.palette[color].main);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledLabel = styled(Text).attrs(function () {
  return {
    fontWeight: "bold"
  };
}).withConfig({
  displayName: "Chip__StyledLabel",
  componentId: "sc-492e0l-1"
})(["padding-left:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2);
});
var ChipBadge = function ChipBadge(_ref3) {
  var color = _ref3.color,
      icon = _ref3.icon,
      label = _ref3.label,
      props = _objectWithoutProperties(_ref3, ["color", "icon", "label"]);

  return /*#__PURE__*/React.createElement(StyledChip, _extends({
    color: color
  }, props), /*#__PURE__*/React.createElement(Icon, {
    color: color,
    icon: icon
  }), label && /*#__PURE__*/React.createElement(StyledLabel, null, label));
};
ChipBadge.propTypes = ChipBadgePropTypes;
ChipBadge.defaultProps = ChipBadgeDefaultProps;

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ButtonBasePropTypes = _objectSpread$4(_objectSpread$4({
  color: PropTypes.oneOf(["primary", "secondary", "subtle"]),
  content: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  target: PropTypes.string
}, SPACER_PROP_TYPES), DISPLAY_PROP_TYPES);
var ButtonBaseDefaultProps = {
  color: "primary",
  size: "md"
};

var StyledButton = styled(MuiButtonBase).withConfig({
  displayName: "Base__StyledButton",
  componentId: "sc-12kghpw-0"
})(["&&{box-sizing:border-box;border-radius:12px;padding:", ";min-width:40px;height:40px;transition:all 100ms ease-in-out;:hover{opacity:0.7;}:disabled{opacity:0.3;cursor:not-allowed;pointer-events:none;}", " ", " ", "}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(0, 4);
}, function (_ref2) {
  var size = _ref2.size,
      theme = _ref2.theme;

  if (size === "xs") {
    return css(["font-size:", ";padding:", ";height:24px;border-radius:8px;"], theme.typography.button.fontSizeXs, theme.spacing(0, 2));
  }

  if (size === "sm") {
    return css(["font-size:", ";padding:", ";height:32px;border-radius:8px;"], theme.typography.button.fontSizeSm, theme.spacing(0, 2));
  }

  return css(["font-size:", ";"], theme.typography.button.fontSizeMd);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var ButtonBase = function ButtonBase(_ref3) {
  var content = _ref3.content,
      children = _ref3.children,
      href = _ref3.href,
      props = _objectWithoutProperties(_ref3, ["content", "children", "href"]);

  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    component: href ? "a" : "button",
    href: href
  }, props), content || children);
};
ButtonBase.propTypes = ButtonBasePropTypes;
ButtonBase.defaultProps = ButtonBaseDefaultProps;

var StyledButton$1 = styled(ButtonBase).withConfig({
  displayName: "Button__StyledButton",
  componentId: "wes1x7-0"
})(["&&{", "}"], function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  if (color === "secondary") return css(["background-color:", ";color:", ";"], theme.palette.gray.dark, theme.palette.common.white);
  if (color === "subtle") return css(["background-color:", ";color:", ";"], theme.palette.gray.regular, theme.palette.gray.medium);
  return css(["background-color:", ";color:", ";"], theme.palette.primary.main, theme.palette.common.white);
});
var Button = function Button(props) {
  return /*#__PURE__*/React.createElement(StyledButton$1, props);
};
Button.propTypes = ButtonBasePropTypes;

var StyledButton$2 = styled(ButtonBase).withConfig({
  displayName: "OutlineButton__StyledButton",
  componentId: "sc-1xxcw04-0"
})(["&&{", "}"], function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  if (color === "secondary") return css(["border:1px solid ", ";color:", ";:hover{background-color:", ";opacity:1;}"], theme.palette.gray.dark, theme.palette.gray.dark, theme.palette.gray.semiLight);
  if (color === "subtle") return css(["border:1px solid ", ";color:", ";:hover{background-color:", ";opacity:1;}"], theme.palette.gray.regular, theme.palette.gray.medium, theme.palette.gray.semiLight);
  return css(["border:1px solid ", ";color:", ";:hover{background-color:", ";opacity:1;}"], theme.palette.primary.main, theme.palette.primary.main, theme.palette.primary.light);
});
var OutlineButton = function OutlineButton(props) {
  return /*#__PURE__*/React.createElement(StyledButton$2, props);
};
OutlineButton.propTypes = ButtonBasePropTypes;

var StyledButton$3 = styled(ButtonBase).withConfig({
  displayName: "TextButton__StyledButton",
  componentId: "sc-11aor45-0"
})(["&&{", "}"], function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  if (color === "secondary") return css(["color:", ";"], theme.palette.gray.dark);
  if (color === "subtle") return css(["color:", ";"], theme.palette.gray.medium);
  return css(["color:", ";"], theme.palette.primary.main);
});
var TextButton = function TextButton(props) {
  return /*#__PURE__*/React.createElement(StyledButton$3, props);
};
TextButton.propTypes = ButtonBasePropTypes;

var CollapsePropTypes = {
  isOpened: PropTypes.bool
};

var Wrapper = styled.div.withConfig({
  displayName: "Collapse__Wrapper",
  componentId: "m05upq-0"
})([".ReactCollapse--collapse{transition:height 200ms ease-in-out;}"]);
var Collapse = function Collapse(props) {
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Collapse$1, props));
};
Collapse.propTypes = CollapsePropTypes;

var CollapseButton = function CollapseButton(_ref) {
  var isOpened = _ref.isOpened,
      props = _objectWithoutProperties(_ref, ["isOpened"]);

  return /*#__PURE__*/React.createElement(Icon, _extends({
    icon: isOpened ? "chevron-up" : "chevron-down"
  }, props));
};
CollapseButton.propTypes = {
  isOpened: PropTypes.bool.isRequired
};

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var DetailsTablePropTypes = _objectSpread$5(_objectSpread$5({
  rows: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.node,
    expanded: PropTypes.bool
  }))
}, SPACER_PROP_TYPES), DISPLAY_PROP_TYPES);
var DetailsTableDefaultProps = {};

var Wrapper$1 = styled.div.withConfig({
  displayName: "DetailsTable__Wrapper",
  componentId: "hwx39-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Row = styled.div.withConfig({
  displayName: "DetailsTable__Row",
  componentId: "hwx39-1"
})(["display:flex;align-items:center;height:32px;margin-bottom:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var Label = styled(Text).attrs(function () {
  return {
    color: "textSecondary"
  };
}).withConfig({
  displayName: "DetailsTable__Label",
  componentId: "hwx39-2"
})(["flex:0 140px;"]);
var DetailsTable = function DetailsTable(_ref2) {
  var rows = _ref2.rows,
      props = _objectWithoutProperties(_ref2, ["rows"]);

  return /*#__PURE__*/React.createElement(Wrapper$1, props, rows.map(function (_ref3) {
    var label = _ref3.label,
        value = _ref3.value;
    return /*#__PURE__*/React.createElement(Row, {
      key: "".concat(label, ":").concat(value)
    }, /*#__PURE__*/React.createElement(Label, {
      content: label
    }), value);
  }));
};
DetailsTable.propTypes = DetailsTablePropTypes;
DetailsTable.defaultProps = DetailsTableDefaultProps;

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var IconPropTypes = _objectSpread$6(_objectSpread$6({
  bordered: PropTypes.bool,
  color: PropTypes.oneOf(THEME_COLORS),
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  prefix: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(KIT_ICON_SIZES))
}, SPACER_PROP_TYPES), DISPLAY_PROP_TYPES);
var IconDefaultProps = {
  bordered: false,
  color: "primary",
  prefix: "far",
  size: "md"
};

var Bordered = styled.div.withConfig({
  displayName: "Icon__Bordered",
  componentId: "sc-1omhsb8-0"
})(["", ""], function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return css(["width:32px;height:32px;border:solid 2px ", ";background-color:", ";display:inline-flex;align-items:center;justify-content:center;border-radius:100%;box-sizing:border-box;position:relative;"], theme.palette.gray.regular, theme.palette[color].light);
});
var StyledIcon = styled(function (_ref2) {
  var icon = _ref2.icon,
      prefix = _ref2.prefix,
      size = _ref2.size,
      props = _objectWithoutProperties(_ref2, ["icon", "prefix", "size"]);

  return /*#__PURE__*/React.createElement(FontAwesomeIcon, _extends({
    icon: [prefix, icon]
  }, props));
}).withConfig({
  displayName: "Icon__StyledIcon",
  componentId: "sc-1omhsb8-1"
})(["font-size:", "px;", " ", " ", " ", ""], function (_ref3) {
  var size = _ref3.size;
  return KIT_ICON_SIZES[size];
}, function (_ref4) {
  var color = _ref4.color,
      theme = _ref4.theme;
  if (color === "input") return "color: ".concat(theme.palette.gray.regular, ";");
  return "color: ".concat(theme.palette[color].main, ";");
}, function (_ref5) {
  var onClick = _ref5.onClick;
  return onClick && css(["cursor:pointer;transition:all 0.1s ease-in-out;:hover{opacity:0.7;}"]);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Icon = function Icon(_ref6) {
  var bordered = _ref6.bordered,
      className = _ref6.className,
      color = _ref6.color,
      props = _objectWithoutProperties(_ref6, ["bordered", "className", "color"]);

  return bordered ? /*#__PURE__*/React.createElement(Bordered, _extends({
    className: className,
    color: color
  }, props), /*#__PURE__*/React.createElement(StyledIcon, _extends({
    color: color
  }, props))) : /*#__PURE__*/React.createElement(StyledIcon, _extends({
    className: className,
    color: color
  }, props));
};
Icon.propTypes = IconPropTypes;
Icon.defaultProps = IconDefaultProps;

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var FieldWrapperPropTypes = _objectSpread$7(_objectSpread$7({
  block: PropTypes.bool,
  endIcon: PropTypes.string,
  endIconColor: PropTypes.oneOf(THEME_COLORS),
  endIconOnClick: PropTypes.func,
  startIcon: PropTypes.string,
  startIconColor: PropTypes.oneOf(THEME_COLORS),
  startIconOnClick: PropTypes.func
}, SPACER_PROP_TYPES), DISPLAY_PROP_TYPES);
var FieldWrapperDefaultProps = {
  block: true,
  endIcon: "",
  endIconColor: "input",
  startIcon: "",
  startIconColor: "input"
};

var StyledWrapper = styled.div.withConfig({
  displayName: "FieldWrapper__StyledWrapper",
  componentId: "sc-8caztj-0"
})(["display:flex;align-items:center;justify-content:space-between;border-radius:", ";background-color:", ";border:1px solid ", ";padding:", ";outline:none;height:40px;box-sizing:border-box;transition:all 100ms ease-in-out;:not(:last-child){margin-right:", ";}&:focus-within{border:1px solid ", ";}", " ", " ", " ", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(3);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.common.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.gray.regular;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(0, 4);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(4);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.primary.main;
}, function (_ref7) {
  var hasError = _ref7.hasError;
  return hasError && css(["border:1px solid ", ";"], function (_ref8) {
    var theme = _ref8.theme;
    return theme.palette.error.main;
  });
}, function (_ref9) {
  var block = _ref9.block;
  return block && css(["flex:1;"]);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var FieldWrapper = function FieldWrapper(_ref10) {
  var children = _ref10.children,
      endIcon = _ref10.endIcon,
      endIconColor = _ref10.endIconColor,
      endIconOnClick = _ref10.endIconOnClick,
      startIcon = _ref10.startIcon,
      startIconColor = _ref10.startIconColor,
      startIconOnClick = _ref10.startIconOnClick,
      props = _objectWithoutProperties(_ref10, ["children", "endIcon", "endIconColor", "endIconOnClick", "startIcon", "startIconColor", "startIconOnClick"]);

  return /*#__PURE__*/React.createElement(StyledWrapper, props, startIcon && /*#__PURE__*/React.createElement(Icon, {
    color: startIconColor,
    icon: startIcon,
    onClick: startIconOnClick
  }), children, endIcon && /*#__PURE__*/React.createElement(Icon, {
    color: endIconColor,
    icon: endIcon,
    onClick: endIconOnClick
  }));
};
FieldWrapper.propTypes = FieldWrapperPropTypes;
FieldWrapper.defaultProps = FieldWrapperDefaultProps;

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var FieldBasePropTypes = _objectSpread$8(_objectSpread$8({}, FieldWrapperPropTypes), {}, {
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  readOnly: PropTypes.bool,
  register: PropTypes.func,
  type: PropTypes.string
});
var FieldBaseDefaultProps = _objectSpread$8(_objectSpread$8({}, FieldWrapperDefaultProps), {}, {
  disabled: false,
  hasError: false,
  readOnly: false,
  register: null,
  type: "text"
});

var StyledInput = styled(function (_ref) {
  var Component = _ref.component,
      props = _objectWithoutProperties(_ref, ["component"]);

  return /*#__PURE__*/React.createElement(Component, props);
}).withConfig({
  displayName: "FieldBase__StyledInput",
  componentId: "sc-9w7fs9-0"
})(["flex:1;font-weight:600;font-size:14px;line-height:120%;padding:8px;color:", ";outline:none;border:none;height:100%;box-sizing:border-box;transition:all 100ms ease-in-out;::placeholder{font-weight:normal;}&:read-only{cursor:", ";}&:disabled{opacity:0.3;cursor:not-allowed;pointer-events:none;}", " ", " ", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.text.primary;
}, function (_ref3) {
  var selectable = _ref3.selectable;
  return !selectable && "not-allowed";
}, function (_ref4) {
  var hasError = _ref4.hasError;
  return hasError && css(["::placeholder{color:", ";}color:", ";"], function (_ref5) {
    var theme = _ref5.theme;
    return theme.palette.error.main;
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.palette.error.main;
  });
}, function (_ref7) {
  var block = _ref7.block;
  return block && css(["width:100%;"]);
}, function (_ref8) {
  var selectable = _ref8.selectable;
  return selectable && css(["user-select:all;"]);
});
var FieldBase = function FieldBase(_ref9) {
  var block = _ref9.block,
      endIcon = _ref9.endIcon,
      endIconColor = _ref9.endIconColor,
      endIconOnClick = _ref9.endIconOnClick,
      hasError = _ref9.hasError,
      register = _ref9.register,
      startIcon = _ref9.startIcon,
      startIconColor = _ref9.startIconColor,
      startIconOnClick = _ref9.startIconOnClick,
      props = _objectWithoutProperties(_ref9, ["block", "endIcon", "endIconColor", "endIconOnClick", "hasError", "register", "startIcon", "startIconColor", "startIconOnClick"]);

  return /*#__PURE__*/React.createElement(FieldWrapper, {
    endIcon: endIcon,
    endIconColor: endIconColor,
    endIconOnClick: endIconOnClick,
    hasError: hasError,
    startIcon: startIcon,
    startIconColor: startIconColor,
    startIconOnClick: startIconOnClick
  }, /*#__PURE__*/React.createElement(StyledInput, _extends({
    hasError: hasError,
    ref: register
  }, props)));
};
FieldBase.propTypes = FieldBasePropTypes;
FieldBase.defaultProps = FieldBaseDefaultProps;

var Input = function Input(props) {
  return /*#__PURE__*/React.createElement(FieldBase, _extends({
    component: "input"
  }, props));
};
Input.propTypes = FieldBasePropTypes;
Input.defaultProps = FieldBaseDefaultProps;

var ItemConnector = styled.div.withConfig({
  displayName: "Item__ItemConnector",
  componentId: "sc-14akrnv-0"
})(["border-width:0;border-style:solid;border-color:", ";border-left-width:1px;transition:all 0.1ms ease-in-out;position:absolute;bottom:0;left:15px;top:0;::before{content:\"\";width:1px;height:100%;display:inline-block;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.regular;
});
var Container = styled.div.withConfig({
  displayName: "Item__Container",
  componentId: "sc-14akrnv-1"
})(["position:relative;min-height:40px;:last-child{", "{border-left-width:0;}}"], ItemConnector);
var RowWrapper = styled.div.withConfig({
  displayName: "Item__RowWrapper",
  componentId: "sc-14akrnv-2"
})(["display:flex;align-items:center;"]);
var RowDetails = styled(Grid).attrs(function () {
  return {
    container: true
  };
}).withConfig({
  displayName: "Item__RowDetails",
  componentId: "sc-14akrnv-3"
})(["width:100%;height:100%;"]);
var Item = styled(Grid).attrs(function (_ref2) {
  var lg = _ref2.lg;
  return {
    item: true,
    xs: 4,
    lg: lg || 3
  };
}).withConfig({
  displayName: "Item",
  componentId: "sc-14akrnv-4"
})(["display:flex;align-items:center;"]);
var StyledIcon$1 = styled(Icon).withConfig({
  displayName: "Item__StyledIcon",
  componentId: "sc-14akrnv-5"
})(["margin-right:", ";flex-shrink:0;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(2);
});
var StyledCollapseButton = styled(CollapseButton).withConfig({
  displayName: "Item__StyledCollapseButton",
  componentId: "sc-14akrnv-6"
})(["margin-left:", ";color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(4);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.text.primary;
});
var Content = styled.div.withConfig({
  displayName: "Item__Content",
  componentId: "sc-14akrnv-7"
})(["padding:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(4, 10);
});
var HistoryItem = function HistoryItem(_ref7) {
  var _ref7$data = _ref7.data,
      collapsible = _ref7$data.collapsible,
      collapseContent = _ref7$data.collapseContent,
      description = _ref7$data.description,
      icon = _ref7$data.icon,
      iconColor = _ref7$data.iconColor,
      moreInfo = _ref7$data.moreInfo,
      title = _ref7$data.title;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      collapseOpen = _useState2[0],
      setCollapseOpen = _useState2[1];

  return /*#__PURE__*/React.createElement(Container, {
    "data-cy": "historyItem"
  }, /*#__PURE__*/React.createElement(ItemConnector, null), /*#__PURE__*/React.createElement(RowWrapper, null, /*#__PURE__*/React.createElement(StyledIcon$1, {
    bordered: true,
    color: iconColor,
    icon: icon
  }), /*#__PURE__*/React.createElement(RowDetails, null, /*#__PURE__*/React.createElement(Item, {
    lg: 5
  }, /*#__PURE__*/React.createElement(Text, {
    fontWeight: "bold"
  }, title)), /*#__PURE__*/React.createElement(Item, {
    lg: 4
  }, /*#__PURE__*/React.createElement(Text, {
    color: "textSecondary",
    noWrap: true
  }, description)), /*#__PURE__*/React.createElement(Item, {
    justify: "flex-end"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "textSecondary",
    fontStyle: "italic"
  }, moreInfo), collapsible && /*#__PURE__*/React.createElement(StyledCollapseButton, {
    isOpened: collapseOpen,
    onClick: function onClick() {
      return setCollapseOpen(function (prev) {
        return !prev;
      });
    }
  })))), collapsible && /*#__PURE__*/React.createElement(Collapse, {
    isOpened: collapseOpen
  }, /*#__PURE__*/React.createElement(Content, null, collapseContent)));
};
HistoryItem.propTypes = {
  data: PropTypes.shape({
    collapsible: PropTypes.bool,
    collapseContent: PropTypes.node,
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    moreInfo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string
  }).isRequired
};

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var HistoryPropTypes = _objectSpread$9(_objectSpread$9({
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    moreInfo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string
  })).isRequired
}, SPACER_PROP_TYPES), DISPLAY_PROP_TYPES);

var Container$1 = styled.div.withConfig({
  displayName: "History__Container",
  componentId: "wa0hqd-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var History = function History(_ref) {
  var rows = _ref.rows,
      props = _objectWithoutProperties(_ref, ["rows"]);

  return /*#__PURE__*/React.createElement(Container$1, props, rows.map(function (h) {
    return /*#__PURE__*/React.createElement(HistoryItem, {
      key: h.id,
      data: h
    });
  }));
};
History.propTypes = HistoryPropTypes;

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ImagePropTypes = _objectSpread$a(_objectSpread$a({
  alt: PropTypes.string.isRequired,
  className: PropTypes.any,
  cover: PropTypes.bool,
  fluid: PropTypes.bool,
  height: PropTypes.number,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
  roundedCircle: PropTypes.bool,
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
  thumbnail: PropTypes.bool,
  width: PropTypes.number
}, SPACER_PROP_TYPES), DISPLAY_PROP_TYPES);
var ImageDefaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};

var Image = function Image(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(StyledImg, _extends({
    itemProp: "contentUrl"
  }, props));
};
var StyledImg = styled.img.withConfig({
  displayName: "Image__StyledImg",
  componentId: "sc-1ta15p5-0"
})(["", " ", " ", " ", " ", " ", ""], function (_ref2) {
  var width = _ref2.width;
  return width && "width: ".concat(width, ";");
}, function (_ref3) {
  var height = _ref3.height;
  return height && "width: ".concat(height, ";");
}, function (_ref4) {
  var cover = _ref4.cover;
  return cover && css(["height:100%;object-fit:fill;"]);
}, function (_ref5) {
  var onClick = _ref5.onClick;
  return onClick && css(["transition:all 100ms ease-in-out;cursor:pointer;:hover{opacity:0.7;}"]);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
Image.propTypes = ImagePropTypes;
Image.defaultProps = ImageDefaultProps;

var ExplorerLayoutFooterPropTypes = {
  children: PropTypes.node
};

var StyledFooter = styled.div.withConfig({
  displayName: "Footer__StyledFooter",
  componentId: "sc-1rkjlvz-0"
})(["box-sizing:border-box;height:80px;text-align:center;padding-top:", ";", "{position:fixed;bottom:0;left:0;right:0;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.up("lg");
});
var ExplorerLayoutFooter = function ExplorerLayoutFooter(_ref3) {
  var action = _ref3.action,
      props = _objectWithoutProperties(_ref3, ["action"]);

  return /*#__PURE__*/React.createElement(StyledFooter, props);
};
ExplorerLayoutFooter.propTypes = ExplorerLayoutFooterPropTypes;

var Logo = "const img = \"data:image/svg+xml,%3csvg width='194' height='60' viewBox='0 0 194 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M86.0961 52.0601C88.0083 52.0601 89.3892 53.5534 89.3892 55.2955C89.3892 57.1088 88.0083 58.4599 86.0961 58.4599C84.184 58.4599 82.8384 57.1088 82.8384 55.2955C82.8384 53.5534 84.184 52.0601 86.0961 52.0601Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M103.965 40.1848C104.461 40.1848 104.815 40.2204 105.24 40.327L104.992 46.0158H103.965C99.9993 46.0158 97.8393 48.0779 97.8393 52.7V58.2821H92.1737V40.4337H97.8393V43.8469C99.114 41.7136 101.062 40.1848 103.965 40.1848Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M120.118 33.9272C127.2 33.9272 132.76 39.4382 132.76 46.4069C132.76 53.34 127.2 58.8155 120.118 58.8155C113.037 58.8155 107.477 53.34 107.477 46.4069C107.477 39.4382 113.037 33.9272 120.118 33.9272ZM120.118 53.4467C123.978 53.4467 126.917 50.4601 126.917 46.4069C126.917 42.3181 123.978 39.2959 120.118 39.2959C116.259 39.2959 113.32 42.3181 113.32 46.4069C113.32 50.4601 116.259 53.4467 120.118 53.4467Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M144.587 53.8378C146.392 53.8378 147.844 52.8778 148.446 50.709L153.651 51.8467C152.766 56.0777 149.013 58.8154 144.587 58.8154C139.275 58.8154 134.884 55.0111 134.884 49.3579C134.884 43.7403 139.275 39.9003 144.587 39.9003C148.907 39.9003 152.66 42.5669 153.651 46.7624L148.34 48.0424C147.844 45.8735 146.392 44.878 144.587 44.878C142.037 44.878 140.337 46.7624 140.337 49.3579C140.337 51.9889 142.037 53.8378 144.587 53.8378Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M175.992 58.2821H168.733L162.961 51.8467H161.934V58.2821H156.269V32.6828H161.934V46.5135H162.713L168.343 40.4337H175.177L167.387 48.9312L175.992 58.2821Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M176.087 53.6483L181.611 52.5105C181.859 54.0394 183.24 54.6083 184.762 54.6083C186.25 54.6083 187.064 53.9683 187.064 53.1861C187.064 52.5817 186.604 52.1194 185.294 51.8706L181.682 51.1595C178.389 50.555 176.512 48.7773 176.512 45.9685C176.512 42.3064 179.663 39.9242 184.16 39.9242C188.587 39.9242 191.526 41.9508 192.234 45.0441L187.064 46.0752C186.887 44.973 185.825 43.9774 184.09 43.9774C182.567 43.9774 182.071 44.7241 182.071 45.3641C182.071 45.8618 182.284 46.3596 183.417 46.6085L187.595 47.4618C190.959 48.1729 192.517 50.1995 192.517 52.8305C192.517 56.7771 189.118 58.8393 184.444 58.8393C180.265 58.8393 176.689 57.3104 176.087 53.6483Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M79.4906 27.4174H73.825V1.81807H79.4906V27.4174Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M88.9289 27.4174H83.2634V9.569H88.9289V27.4174Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M86.0961 1.07143C88.0083 1.07143 89.3892 2.56472 89.3892 4.3069C89.3892 6.12019 88.0083 7.47127 86.0961 7.47127C84.184 7.47127 82.8384 6.12019 82.8384 4.3069C82.8384 2.56472 84.184 1.07143 86.0961 1.07143Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M101.853 22.9731C103.659 22.9731 105.111 22.0131 105.713 19.8443L110.918 20.982C110.033 25.213 106.28 27.9507 101.853 27.9507C96.542 27.9507 92.1512 24.1464 92.1512 18.4932C92.1512 12.8756 96.542 9.03566 101.853 9.03566C106.173 9.03566 109.927 11.7023 110.918 15.8977L105.607 17.1777C105.111 15.0088 103.659 14.0133 101.853 14.0133C99.3039 14.0133 97.6043 15.8977 97.6043 18.4932C97.6043 21.1242 99.3039 22.9731 101.853 22.9731Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M131.601 18.4932V19.9509H118.57C119.03 22.0842 120.482 23.3997 122.394 23.3997C123.704 23.3997 125.227 23.0798 126.183 21.3376L131.211 22.3687C129.689 26.1375 126.466 27.9507 122.394 27.9507C117.26 27.9507 113.011 24.1464 113.011 18.4932C113.011 12.8756 117.26 9.03566 122.43 9.03566C127.458 9.03566 131.495 12.6622 131.601 18.4932ZM122.43 13.6578C120.836 13.6578 119.207 14.6533 118.676 16.4666H126.006C125.475 14.5466 124.059 13.6578 122.43 13.6578Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M145.659 9.03566C149.801 9.03566 152.563 11.9867 152.563 16.4666V27.4174H146.933V17.6754C146.933 15.5777 145.694 14.1555 143.888 14.1555C141.657 14.1555 140.205 15.6844 140.205 19.1332V27.4174H134.54V9.56898H140.205V11.2756C141.551 9.85342 143.428 9.03566 145.659 9.03566Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M155.219 22.7598L160.743 21.622C160.991 23.1509 162.372 23.7197 163.895 23.7197C165.382 23.7197 166.196 23.0798 166.196 22.2975C166.196 21.6931 165.736 21.2309 164.426 20.982L160.814 20.2709C157.521 19.6665 155.644 17.8888 155.644 15.08C155.644 11.4178 158.796 9.03566 163.293 9.03566C167.719 9.03566 170.658 11.0623 171.366 14.1555L166.196 15.1866C166.019 14.0844 164.957 13.0889 163.222 13.0889C161.699 13.0889 161.203 13.8355 161.203 14.4755C161.203 14.9733 161.416 15.4711 162.549 15.7199L166.727 16.5732C170.091 17.2843 171.649 19.311 171.649 21.942C171.649 25.8886 168.25 27.9507 163.576 27.9507C159.397 27.9507 155.821 26.4219 155.219 22.7598Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M192.403 18.4932V19.9509H179.372C179.832 22.0842 181.284 23.3997 183.196 23.3997C184.506 23.3997 186.029 23.0798 186.985 21.3376L192.013 22.3687C190.49 26.1375 187.268 27.9507 183.196 27.9507C178.062 27.9507 173.812 24.1464 173.812 18.4932C173.812 12.8756 178.062 9.03566 183.231 9.03566C188.26 9.03566 192.296 12.6622 192.403 18.4932ZM183.231 13.6578C181.638 13.6578 180.009 14.6533 179.478 16.4666H186.808C186.277 14.5466 184.86 13.6578 183.231 13.6578Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.58723 46.6197C11.4115 46.6197 14.1734 49.6063 14.1734 53.0907C14.1734 56.7172 11.4115 59.4194 7.58723 59.4194C3.76298 59.4194 1.07184 56.7172 1.07184 53.0907C1.07184 49.6063 3.76298 46.6197 7.58723 46.6197ZM38.7574 9.64285C52.9213 9.64285 64.04 20.6648 64.04 34.6022C64.04 48.4685 52.9213 59.4194 38.7574 59.4194C24.5936 59.4194 13.4749 48.4685 13.4749 34.6022C13.4749 20.6648 24.5936 9.64285 38.7574 9.64285ZM38.7574 48.6819C46.4768 48.6819 52.3548 42.7087 52.3548 34.6022C52.3548 26.4247 46.4768 20.3804 38.7574 20.3804C31.0381 20.3804 25.1601 26.4247 25.1601 34.6022C25.1601 42.7087 31.0381 48.6819 38.7574 48.6819Z' fill='%23AC00FC'/%3e%3c/svg%3e\";\n  export default img;";

var ExplorerLayoutHeaderPropTypes = {
  headerRight: PropTypes.node,
  logoAction: PropTypes.func
};

var StyledHeader = styled(Grid).attrs(function () {
  return {
    container: true,
    alignItems: "center"
  };
}).withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-16ap3pj-0"
})(["height:128px;", "{height:96px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.down("md");
});
var StyledLogo = styled(Image).attrs(function () {
  return {
    alt: "Logo",
    src: Logo
  };
}).withConfig({
  displayName: "Header__StyledLogo",
  componentId: "sc-16ap3pj-1"
})(["width:155px;", "{width:103px;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.down("md");
});
var ExplorerLayoutHeader = function ExplorerLayoutHeader(_ref3) {
  var headerRight = _ref3.headerRight,
      logoAction = _ref3.logoAction,
      props = _objectWithoutProperties(_ref3, ["headerRight", "logoAction"]);

  return /*#__PURE__*/React.createElement(StyledHeader, props, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 9,
    xs: 6
  }, /*#__PURE__*/React.createElement(StyledLogo, {
    onClick: logoAction
  })), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    item: true,
    justify: "flex-end",
    lg: 3,
    xs: 6
  }, headerRight));
};
ExplorerLayoutHeader.propTypes = ExplorerLayoutHeaderPropTypes;

var ExplorerLayoutPropTypes = {
  children: PropTypes.node.isRequired,
  footerContent: PropTypes.node,
  headerLogoAction: PropTypes.func,
  headerRight: PropTypes.node,
  sidebar: PropTypes.node
};

var Content$1 = styled(Grid).attrs(function () {
  return {
    container: true
  };
}).withConfig({
  displayName: "Explorer__Content",
  componentId: "a6i2rb-0"
})(["padding-top:", ";padding-bottom:", ";", "{padding-top:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(8);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(20);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.breakpoints.down("md");
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(2);
});
var poweredBy = /*#__PURE__*/React.createElement(Text, {
  color: "textSecondary",
  fontStyle: "italic"
}, "Powered by", /*#__PURE__*/React.createElement(Text, {
  color: "textPrimary",
  fontWeight: "bold"
}, " ", "license.rocks"));
var ExplorerLayout = function ExplorerLayout(_ref5) {
  var children = _ref5.children,
      footerContent = _ref5.footerContent,
      headerLogoAction = _ref5.headerLogoAction,
      headerRight = _ref5.headerRight,
      sidebar = _ref5.sidebar,
      props = _objectWithoutProperties(_ref5, ["children", "footerContent", "headerLogoAction", "headerRight", "sidebar"]);

  return /*#__PURE__*/React.createElement(MuiContainer, props, /*#__PURE__*/React.createElement(ExplorerLayoutHeader, {
    logoAction: headerLogoAction,
    headerRight: headerRight
  }), /*#__PURE__*/React.createElement(Content$1, null, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 9,
    xs: 12
  }, children), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 3,
    xs: 12
  }, sidebar)), footerContent && /*#__PURE__*/React.createElement(ExplorerLayoutFooter, null, footerContent || poweredBy));
};
ExplorerLayout.propTypes = ExplorerLayoutPropTypes;
ExplorerLayout.defaultProps = {
  footerContent: poweredBy
};

var ContentWrapper = styled(DialogContent).attrs(function () {
  return {
    dividers: true
  };
}).withConfig({
  displayName: "Modal__ContentWrapper",
  componentId: "fzfza1-0"
})(["&&{padding:0;&:first-child{padding-top:0;}}"]);
var Title = styled(DialogTitle).attrs(function () {
  return {
    disableTypography: true
  };
}).withConfig({
  displayName: "Modal__Title",
  componentId: "fzfza1-1"
})(["&&{font-size:16px;font-weight:500;color:", ";display:flex;align-items:center;justify-content:space-between;padding:", "px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.darkIndigo;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(3, 5);
});
var CloseModalIcon = styled(Icon).attrs(function () {
  return {
    size: "lg"
  };
}).withConfig({
  displayName: "Modal__CloseModalIcon",
  componentId: "fzfza1-2"
})(["cursor:pointer;background-color:white;&&{color:", ";}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.secondary.dark;
});
var Actions = styled(DialogActions).withConfig({
  displayName: "Modal__Actions",
  componentId: "fzfza1-3"
})(["&&{justify-content:", ";}"], function (_ref4) {
  var hasDesc = _ref4.hasDesc;
  return hasDesc ? "space-between" : "flex-end";
});
var LoadingWrapper = styled.div.withConfig({
  displayName: "Modal__LoadingWrapper",
  componentId: "fzfza1-4"
})(["position:absolute;top:0;right:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:", ";z-index:1;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.secondary.dark;
});
var Modal = function Modal(_ref6) {
  var action = _ref6.action,
      actionDescription = _ref6.actionDescription,
      actionLoading = _ref6.actionLoading,
      actionTitle = _ref6.actionTitle,
      dataCy = _ref6.dataCy,
      fullScreen = _ref6.fullScreen,
      isOpen = _ref6.isOpen,
      loading = _ref6.loading,
      onClose = _ref6.onClose,
      children = _ref6.children,
      maxWidth = _ref6.maxWidth,
      title = _ref6.title,
      disabled = _ref6.disabled,
      props = _objectWithoutProperties(_ref6, ["action", "actionDescription", "actionLoading", "actionTitle", "dataCy", "fullScreen", "isOpen", "loading", "onClose", "children", "maxWidth", "title", "disabled"]);

  return /*#__PURE__*/React.createElement(Dialog, _extends({
    "data-cy": dataCy,
    fullScreen: typeof fullScreen !== "undefined" ? fullScreen : typeof window !== "undefined" && window.screen.width < 768,
    onClose: onClose,
    open: isOpen,
    maxWidth: maxWidth,
    PaperProps: {
      style: {
        position: "relative"
      }
    }
  }, props), loading && /*#__PURE__*/React.createElement(LoadingWrapper, null, /*#__PURE__*/React.createElement(CircularProgress, {
    size: 60
  })), title && /*#__PURE__*/React.createElement(Title, null, title, /*#__PURE__*/React.createElement(CloseModalIcon, {
    icon: "times",
    onClick: onClose
  })), /*#__PURE__*/React.createElement(ContentWrapper, null, children), action && /*#__PURE__*/React.createElement(Actions, {
    hasDesc: !!actionDescription
  }, /*#__PURE__*/React.createElement("div", null, actionDescription), /*#__PURE__*/React.createElement(Button, {
    disabled: disabled,
    loading: actionLoading,
    onClick: action
  }, actionTitle)));
};
Modal.propTypes = {
  action: PropTypes.func,
  actionDescription: PropTypes.node,
  actionLoading: PropTypes.bool,
  actionTitle: PropTypes.string,
  dataCy: PropTypes.string,
  fullScreen: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  maxWidth: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool
};
Modal.defaultProps = {
  action: undefined,
  actionDescription: null,
  actionLoading: false,
  actionTitle: "Save",
  dataCy: "modal",
  fullScreen: undefined,
  loading: false,
  maxWidth: "md",
  title: "",
  disabled: false
};

var Button$1 = styled(ButtonBase).withConfig({
  displayName: "Button",
  componentId: "sc-1vsutll-0"
})(["display:flex;align-items:center;&&{width:40px;height:40px;background-color:", ";svg{color:", ";}:hover{background-color:", ";svg{color:", ";}}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.semiLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.text.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.light;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.primary.main;
});
var ShareModuleButton = function ShareModuleButton(_ref5) {
  var href = _ref5.href,
      icon = _ref5.icon,
      iconPrefix = _ref5.iconPrefix,
      onClick = _ref5.onClick;
  return /*#__PURE__*/React.createElement(Button$1, {
    href: href,
    onClick: onClick,
    target: "_blank"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    prefix: iconPrefix,
    size: "lg"
  }));
};
ShareModuleButton.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconPrefix: PropTypes.string,
  onClick: PropTypes.func
};
ShareModuleButton.defaultProps = {
  href: null,
  iconPrefix: "fab",
  onClick: null
};

var SHARE_MODULE_SHARE_OPTIONS = ["twitter", "facebook", "telegram", "whatsapp", "email", "navigator"];

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ShareModulePropTypes = _objectSpread$b(_objectSpread$b({
  copyText: PropTypes.string,
  shareOptions: PropTypes.arrayOf(PropTypes.oneOf(SHARE_MODULE_SHARE_OPTIONS)),
  url: PropTypes.string
}, SPACER_PROP_TYPES), DISPLAY_PROP_TYPES);
var ShareModuleDefaultProps = {
  copyText: "Or copy the link",
  shareOptions: SHARE_MODULE_SHARE_OPTIONS,
  url: "#"
};

var Container$2 = styled.div.withConfig({
  displayName: "ShareModule__Container",
  componentId: "sc-1s032sh-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var ButtonsWrapper = styled.div.withConfig({
  displayName: "ShareModule__ButtonsWrapper",
  componentId: "sc-1s032sh-1"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var StyledText$1 = styled(Text).attrs(function () {
  return {
    component: "div",
    color: "textSecondary",
    fontSize: "sm",
    fontStyle: "italic"
  };
}).withConfig({
  displayName: "ShareModule__StyledText",
  componentId: "sc-1s032sh-2"
})(["&&{", "}"], function (_ref2) {
  var spacing = _ref2.theme.spacing;
  return css(["margin:", ";"], spacing(2, 0));
});
var ShareModule = function ShareModule(_ref3) {
  var copyText = _ref3.copyText,
      shareOptions = _ref3.shareOptions,
      url = _ref3.url,
      props = _objectWithoutProperties(_ref3, ["copyText", "shareOptions", "url"]);

  return /*#__PURE__*/React.createElement(Container$2, props, /*#__PURE__*/React.createElement(ButtonsWrapper, null, shareOptions.includes("twitter") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "twitter",
    href: "https://twitter.com/intent/tweet?url=".concat(url)
  }), shareOptions.includes("facebook") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "facebook-f",
    href: "https://www.facebook.com/sharer.php?u=".concat(url)
  }), shareOptions.includes("telegram") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "telegram-plane",
    href: "tg://msg?text=".concat(url)
  }), shareOptions.includes("whatsapp") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "whatsapp",
    href: "whatsapp://send?".concat(url)
  }), shareOptions.includes("email") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "envelope",
    iconPrefix: "far",
    href: "mailto:?body=".concat(url)
  }), shareOptions.includes("navigator") && navigator.share && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "ellipsis-h",
    iconPrefix: "far",
    onClick: function onClick() {
      return navigator.share({
        url: url
      });
    }
  })), /*#__PURE__*/React.createElement(StyledText$1, {
    content: copyText
  }), /*#__PURE__*/React.createElement(Input, {
    endIcon: "copy",
    endIconColor: "secondary",
    endIconOnClick: function endIconOnClick() {
      return copy(url);
    },
    readOnly: true,
    selectable: true,
    startIcon: "link",
    value: url
  }));
};
ShareModule.propTypes = ShareModulePropTypes;
ShareModule.defaultProps = ShareModuleDefaultProps;

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var TabPropTypes = _objectSpread$c(_objectSpread$c({
  currentTab: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    showTab: PropTypes.bbol
  })).isRequired
}, SPACER_PROP_TYPES), DISPLAY_PROP_TYPES);

var Wrapper$2 = styled.div.withConfig({
  displayName: "Tab__Wrapper",
  componentId: "cqsr0f-0"
})(["margin-bottom:", ";", " ", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledTabs = styled(MuiTabs).withConfig({
  displayName: "Tab__StyledTabs",
  componentId: "cqsr0f-1"
})(["&&{min-height:fit-content;.MuiTab-root{min-height:24px;}}.MuiTabs-indicator{display:none;}button{min-width:fit-content;margin-right:", ";padding:0;font-weight:normal;font-size:14px;line-height:120%;&.Mui-selected{font-weight:600;}}.Mui-selected{&::after{content:\"\";position:absolute;width:100%;left:0;bottom:0;height:2px;background-color:", ";border-radius:2px 2px 0 0;}}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(5);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.main;
});
var StyledTab = styled(MuiTab).withConfig({
  displayName: "Tab__StyledTab",
  componentId: "cqsr0f-2"
})(["&&{text-transform:initial;}"]);
var Tab = function Tab(_ref4) {
  var tabs = _ref4.tabs,
      currentTab = _ref4.currentTab,
      _onChange = _ref4.onChange,
      props = _objectWithoutProperties(_ref4, ["tabs", "currentTab", "onChange"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Wrapper$2, props, /*#__PURE__*/React.createElement(StyledTabs, {
    value: currentTab,
    onChange: function onChange(e, newTab) {
      return _onChange(newTab);
    },
    indicatorColor: "primary",
    variant: "scrollable"
  }, tabs.filter(function (t) {
    return typeof t.showTab === "boolean" ? t.showTab : true;
  }).map(function (t) {
    return /*#__PURE__*/React.createElement(StyledTab, {
      disabled: t.disabled,
      value: t.index,
      disableRipple: true,
      label: t.label,
      key: t.index
    });
  }))));
};
Tab.propTypes = TabPropTypes;

var CloseModalIcon$1 = styled(Icon).attrs(function () {
  return {
    size: "lg"
  };
}).withConfig({
  displayName: "ImageModal__CloseModalIcon",
  componentId: "sc-1grz9di-0"
})(["position:absolute;top:0;right:0;border-radius:100%;&&{margin:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
});
var StyledImg$1 = styled(Image).withConfig({
  displayName: "ImageModal__StyledImg",
  componentId: "sc-1grz9di-1"
})(["width:500px;max-width:500px;user-select:none;"]);
var ImageModal = function ImageModal(_ref2) {
  var isOpen = _ref2.isOpen,
      onClose = _ref2.onClose,
      imgSrc = _ref2.imgSrc;
  return /*#__PURE__*/React.createElement(Modal, {
    onClose: onClose,
    isOpen: isOpen
  }, /*#__PURE__*/React.createElement(CloseModalIcon$1, {
    color: "secondary",
    icon: "times",
    onClick: onClose
  }), /*#__PURE__*/React.createElement(StyledImg$1, {
    src: imgSrc,
    alt: "Attachment preview"
  }));
};
ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imgSrc: PropTypes.string
};
ImageModal.defaultProps = {
  imgSrc: ""
};

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$d(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ThumbnailPropTypes = _objectSpread$d(_objectSpread$d({
  hasPreview: PropTypes.bool,
  imgSrc: PropTypes.string,
  onClick: PropTypes.func
}, SPACER_PROP_TYPES), DISPLAY_PROP_TYPES);
var ThumbnailDefaultProps = {
  hasPreview: false,
  onClick: function onClick() {},
  imgSrc: ""
};

var Container$3 = styled.div.withConfig({
  displayName: "Thumbnail__Container",
  componentId: "cnapw-0"
})(["position:relative;height:48px;width:48px;text-align:center;border-radius:8px;overflow:hidden;background-color:", ";display:flex;align-items:center;justify-content:center;flex-shrink:0;", " ", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var IconWrapper = styled.div.withConfig({
  displayName: "Thumbnail__IconWrapper",
  componentId: "cnapw-1"
})(["position:absolute;top:0;left:0;width:100%;height:100%;transition:all 0.1s ease-in-out;display:flex;align-items:center;justify-content:center;cursor:pointer;:hover{background-color:rgba(0,0,0,0.2);}"]);
var StyledIcon$2 = styled(Icon).withConfig({
  displayName: "Thumbnail__StyledIcon",
  componentId: "cnapw-2"
})(["color:", ";"], function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return !color && theme.palette.common.white;
});
var Thumbnail = function Thumbnail(_ref3) {
  var hasPreview = _ref3.hasPreview,
      imgSrc = _ref3.imgSrc,
      onClick = _ref3.onClick,
      props = _objectWithoutProperties(_ref3, ["hasPreview", "imgSrc", "onClick"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loadError = _useState2[0],
      setLoadError = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      previewOpen = _useState4[0],
      setPreviewOpen = _useState4[1];

  var handleClick = function handleClick() {
    if (hasPreview) setPreviewOpen(true);else onClick();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Container$3, _extends({
    onClick: handleClick
  }, props), loadError ? /*#__PURE__*/React.createElement(StyledIcon$2, {
    color: "secondary",
    icon: "file",
    size: "lg"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconWrapper, null, /*#__PURE__*/React.createElement(StyledIcon$2, {
    icon: "search-plus"
  })), /*#__PURE__*/React.createElement(Image, {
    cover: true,
    src: imgSrc,
    alt: "Thumbnail",
    onError: function onError() {
      return setLoadError(true);
    },
    width: "48px"
  }))), hasPreview && /*#__PURE__*/React.createElement(ImageModal, {
    imgSrc: imgSrc,
    isOpen: previewOpen,
    onClose: function onClose() {
      return setPreviewOpen(false);
    }
  }));
};
Thumbnail.propTypes = ThumbnailPropTypes;
Thumbnail.defaultProps = ThumbnailDefaultProps;

export { AppContainer, Button, ButtonBase, ChipBadge, Collapse, CollapseButton, DISPLAY, DISPLAY_PROP_TYPES, DetailsTable, ExplorerLayout, FieldBase, FieldWrapper, H1, H2, H3, H4, H5, H6, HeadingBase, History, Icon, Image, ImageModal, Input, KIT_COLORS, KIT_FONTS, KIT_ICON_SIZES, KIT_TYPOGRAPHY, Modal, OutlineButton, Paragraph, SPACER, SPACER_FORMULA, SPACER_POSTFIX, SPACER_PROP_TYPES, ShareModule, THEME_COLORS, Tab, Text, TextBase, TextButton, Thumbnail, theme };
//# sourceMappingURL=rockskit.es.js.map
