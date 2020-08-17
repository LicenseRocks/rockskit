import React, { forwardRef, useState, useEffect, useRef, createRef } from 'react';
import styled, { createGlobalStyle, css, useTheme, ThemeProvider as ThemeProvider$1 } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTelegramPlane, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight, faBox, faCheck, faCheckCircle, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faCopy, faEllipsisH, faEnvelope, faFile, faFilePdf, faInfoCircle, faLink, faMinus, faPlus, faSearchPlus, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes, { bool, func, oneOf } from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { library } from '@fortawesome/fontawesome-svg-core';
import { SnackbarProvider } from 'notistack';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MuiButtonBase from '@material-ui/core/ButtonBase';
import { Collapse as Collapse$1 } from 'react-collapse';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import QRCode from 'qrcode.react';
import { Controller } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Select$1 from 'react-select';
import AsyncSelect from 'react-select/async';
import MuiContainer from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import copy from 'copy-to-clipboard';
import MuiTabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';
import ReactDOM from 'react-dom';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  html, body, #root {\n    height: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyle = createGlobalStyle(_templateObject());

var FreeBrandIconSet = {
  fabFacebookF: faFacebookF,
  fabTelegramPlane: faTelegramPlane,
  fabTwitter: faTwitter,
  fabWhatsapp: faWhatsapp
};

var FreeSolidIconSet = {
  faArrowLeft: faArrowLeft,
  faArrowRight: faArrowRight,
  faBox: faBox,
  faCheck: faCheck,
  faCheckCircle: faCheckCircle,
  faChevronDown: faChevronDown,
  faChevronLeft: faChevronLeft,
  faChevronRight: faChevronRight,
  faChevronUp: faChevronUp,
  faCopy: faCopy,
  faEllipsisH: faEllipsisH,
  faEnvelope: faEnvelope,
  faFile: faFile,
  faFilePdf: faFilePdf,
  faInfoCircle: faInfoCircle,
  faLink: faLink,
  faMinus: faMinus,
  faPlus: faPlus,
  faSearchPlus: faSearchPlus,
  faTimes: faTimes,
  faUser: faUser
};

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
    var _ref;

    return _ref = {
      fontFamily: KIT_FONTS.Galano.name,
      fontSize: "32px",
      fontWeight: 500,
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "-0.03em"
    }, _ref[theme.breakpoints.down("sm")] = {
      fontSize: "28px",
      letterSpacing: "-0.02em"
    }, _ref;
  },
  h2: function h2(theme) {
    var _ref2;

    return _ref2 = {
      fontFamily: KIT_FONTS.Galano.name,
      fontWeight: 500,
      fontSize: "26px",
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "-0.02em"
    }, _ref2[theme.breakpoints.down("sm")] = {
      fontSize: "20px",
      letterSpacing: "-0.01em"
    }, _ref2;
  },
  h3: function h3(theme) {
    var _ref3;

    return _ref3 = {
      fontFamily: KIT_FONTS.Galano.name,
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "-0.01em"
    }, _ref3[theme.breakpoints.down("sm")] = {
      fontSize: "16px",
      letterSpacing: "-0.01em"
    }, _ref3;
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

var RocksKitIcons = _extends({}, FreeBrandIconSet, FreeSolidIconSet);
var RocksKitTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1200
    }
  },
  defaultIconSet: "fa"
});
RocksKitTheme.palette = _extends({}, RocksKitTheme.palette, {
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
    default: KIT_COLORS.gray.light
  }
});
RocksKitTheme.typography = _extends({}, RocksKitTheme.typography, {
  fontFamily: [KIT_FONTS.Inter.name, "sans-serif"].join(","),
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: "normal",
  fontWeightBold: 600,
  h1: KIT_TYPOGRAPHY.h1(RocksKitTheme),
  h2: KIT_TYPOGRAPHY.h2(RocksKitTheme),
  h3: KIT_TYPOGRAPHY.h3(RocksKitTheme),
  h4: KIT_TYPOGRAPHY.h4(),
  h5: KIT_TYPOGRAPHY.h5(),
  h6: KIT_TYPOGRAPHY.h6(),
  body1: KIT_TYPOGRAPHY.body1(),
  // Paragraph
  body2: KIT_TYPOGRAPHY.body2(),
  // Text
  button: KIT_TYPOGRAPHY.button()
});

RocksKitTheme.spacing = function () {
  var amount = 4;

  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce(function (output, n) {
    return "" + output + n * amount + (n > 0 ? "px" : "") + " ";
  }, "");
};

RocksKitTheme.overrides.MuiButtonBase = {
  root: KIT_TYPOGRAPHY.button()
};

var COLOR_PROP_TYPES = {
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
  colorSuccessLight: PropTypes.bool
};
var COLOR = function COLOR(_ref) {
  var colorPrimary = _ref.colorPrimary,
      colorPrimaryLight = _ref.colorPrimaryLight,
      colorGrayLight = _ref.colorGrayLight,
      colorGraySemiLight = _ref.colorGraySemiLight,
      colorGrayRegular = _ref.colorGrayRegular,
      colorGrayMedium = _ref.colorGrayMedium,
      colorGrayDark = _ref.colorGrayDark,
      colorBlack = _ref.colorBlack,
      colorWhite = _ref.colorWhite,
      colorError = _ref.colorError,
      colorErrorLight = _ref.colorErrorLight,
      colorWarning = _ref.colorWarning,
      colorWarningLight = _ref.colorWarningLight,
      colorSuccess = _ref.colorSuccess,
      colorSuccessLight = _ref.colorSuccessLight;
  var color = null;
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
  return color ? "color: " + color + " !important;" : "";
};

var DIMENSION_PROP_TYPES = {
  h100: PropTypes.bool,
  w100: PropTypes.bool,
  h100vh: PropTypes.bool,
  w100vw: PropTypes.bool
};
var DIMENSION = function DIMENSION(_ref) {
  var h100 = _ref.h100,
      w100 = _ref.w100,
      h100vh = _ref.h100vh,
      w100vw = _ref.w100vw;
  var temp = "";
  if (h100) temp += "height: 100% !important;";
  if (w100) temp += "width: 100% !important;";
  if (h100vh) temp += "height: 100vh !important;";
  if (w100vw) temp += "width: 100vw !important;";
  return temp;
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
  return display ? "display: " + display + " !important;" : "";
};

var SPACER_FORMULA = function SPACER_FORMULA(factor) {
  return factor * 4;
};
var SPACER_POSTFIX = function SPACER_POSTFIX(space) {
  return "" + (space > 0 ? "px" : "");
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
  mAuto: PropTypes.bool,
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
      mAuto = _ref.mAuto,
      p = _ref.p,
      p0 = _ref.p0,
      px = _ref.px,
      py = _ref.py,
      pt = _ref.pt,
      pb = _ref.pb,
      pr = _ref.pr,
      pl = _ref.pl;
  var temp = "";
  if (m) temp += "margin: " + SPACER_FORMULA(m) + "px !important;";
  if (m0) temp += "margin: 0 !important;";
  if (mx) temp += "margin: 0 " + SPACER_FORMULA(mx) + "px !important;";
  if (my) temp += "margin: " + SPACER_FORMULA(my) + "px 0 !important;";
  if (mt) temp += "margin-top: " + SPACER_FORMULA(mt) + "px !important;";
  if (mb) temp += "margin-bottom: " + SPACER_FORMULA(mb) + "px !important;";
  if (mr) temp += "margin-right: " + SPACER_FORMULA(mr) + "px !important;";
  if (ml) temp += "margin-left: " + SPACER_FORMULA(ml) + "px !important;";
  if (mAuto) temp += "margin: auto !important;";
  if (p) temp += "padding: " + SPACER_FORMULA(p) + "px !important;";
  if (p0) temp += "padding: 0 !important;";
  if (px) temp += "padding: 0 " + SPACER_FORMULA(px) + "px !important;";
  if (py) temp += "padding: " + SPACER_FORMULA(py) + "px 0 !important;";
  if (pt) temp += "padding-top: " + SPACER_FORMULA(pt) + "px !important;";
  if (pb) temp += "padding-bottom: " + SPACER_FORMULA(pb) + "px !important;";
  if (pr) temp += "padding-right: " + SPACER_FORMULA(pr) + "px !important;";
  if (pl) temp += "padding-left: " + SPACER_FORMULA(pl) + "px !important;";
  return temp;
};

var THEME_COLORS = ["primary", "secondary", "success", "error", "warning"];

var IconPropTypes = _extends({
  bordered: PropTypes.bool,
  color: PropTypes.oneOf(THEME_COLORS),
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  prefix: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(KIT_ICON_SIZES))
}, COLOR_PROP_TYPES, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var IconDefaultProps = {
  bordered: false,
  color: "primary",
  size: "md"
};

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Bordered = styled.div(_templateObject$1(), function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return css(["width:32px;height:32px;border:solid 2px ", ";background-color:", ";display:inline-flex;align-items:center;justify-content:center;border-radius:100%;box-sizing:border-box;position:relative;"], theme.palette.gray.regular, theme.palette[color].light);
});
var StyledIcon = styled(function (_ref2) {
  var icon = _ref2.icon,
      prefix = _ref2.prefix,
      size = _ref2.size,
      props = _objectWithoutPropertiesLoose(_ref2, ["icon", "prefix", "size"]);

  return /*#__PURE__*/React.createElement(FontAwesomeIcon, _extends({
    icon: [prefix, icon]
  }, props));
})(_templateObject2(), function (_ref3) {
  var size = _ref3.size;
  return KIT_ICON_SIZES[size];
}, function (_ref4) {
  var color = _ref4.color,
      theme = _ref4.theme;
  if (color === "input") return "color: " + theme.palette.gray.regular + ";";
  return "color: " + theme.palette[color].main + ";";
}, function (_ref5) {
  var onClick = _ref5.onClick;
  return onClick && css(["cursor:pointer;transition:all 0.1s ease-in-out;:hover{opacity:0.7;}"]);
}, function (theme) {
  return COLOR(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var Icon = function Icon(_ref6) {
  var bordered = _ref6.bordered,
      className = _ref6.className,
      color = _ref6.color,
      prefix = _ref6.prefix,
      props = _objectWithoutPropertiesLoose(_ref6, ["bordered", "className", "color", "prefix"]);

  var theme = useTheme();

  var defaultProps = _extends({
    color: color,
    prefix: prefix || theme.defaultIconSet
  }, props);

  return bordered ? /*#__PURE__*/React.createElement(Bordered, _extends({
    className: className,
    color: color
  }, props), /*#__PURE__*/React.createElement(StyledIcon, defaultProps)) : /*#__PURE__*/React.createElement(StyledIcon, _extends({
    className: className
  }, defaultProps));
};
Icon.propTypes = IconPropTypes;
Icon.defaultProps = IconDefaultProps;

var AlertPropTypes = _extends({
  content: PropTypes.node,
  children: PropTypes.node,
  color: PropTypes.oneOf(["info", "danger", "warning"])
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var AlertDefaultProps = {
  content: null,
  children: null,
  color: "info"
};

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  box-sizing: border-box;\n  min-height: 40px;\n  padding: 8px;\n  font-size: 14px;\n  border-radius: 8px;\n  background-color: ", ";\n  color: ", ";\n  transition: all 100ms ease-in-out;\n  display: flex;\n  align-items: center;\n\n  svg {\n    color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledMessage = styled.div(_templateObject$2(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.semiLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.text.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.main;
}, function (_ref4) {
  var color = _ref4.color,
      theme = _ref4.theme;
  return color === "danger" && css(["background-color:", ";color:", ";svg{color:", ";}"], theme.palette.error.light, theme.palette.error.main, theme.palette.error.main);
}, function (_ref5) {
  var color = _ref5.color,
      theme = _ref5.theme;
  return color === "warning" && css(["background-color:", ";color:", ";"], theme.palette.primary.light, theme.palette.primary.main);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Alert = function Alert(_ref6) {
  var content = _ref6.content,
      children = _ref6.children,
      props = _objectWithoutPropertiesLoose(_ref6, ["content", "children"]);

  return /*#__PURE__*/React.createElement(StyledMessage, props, /*#__PURE__*/React.createElement(Icon, {
    icon: "info-circle",
    mr: 2
  }), content || children);
};
Alert.propTypes = AlertPropTypes;
Alert.defaultProps = AlertDefaultProps;

var AppContainerPropTypes = {
  children: PropTypes.node.isRequired,
  icons: PropTypes.object,
  theme: PropTypes.object.isRequired
};

var AppContainer = function AppContainer(_ref) {
  var children = _ref.children,
      icons = _ref.icons,
      theme = _ref.theme;
  if (icons) library.add(icons);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(ThemeProvider$1, {
    theme: theme
  }, /*#__PURE__*/React.createElement(SnackbarProvider, {
    maxSnack: 3
  }, /*#__PURE__*/React.createElement(GlobalStyle, null), /*#__PURE__*/React.createElement(CssBaseline, null), children)));
};
AppContainer.propTypes = AppContainerPropTypes;

var ChipBadgePropTypes = _extends({
  color: PropTypes.oneOf(THEME_COLORS),
  label: PropTypes.string,
  icon: PropTypes.string.isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ChipBadgeDefaultProps = {
  color: "primary"
};

var HeadingBasePropTypes = _extends({
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  children: PropTypes.node,
  content: PropTypes.string,
  color: PropTypes.oneOf(["initial", "inherit", "primary", "secondary", "textPrimary", "textSecondary", "error"]),
  display: PropTypes.oneOf(["initial", "block", "inline"]),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledHeading = styled(Typography)(_templateObject$3(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var HeadingBase = function HeadingBase(_ref) {
  var content = _ref.content,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["content", "children"]);

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

var TextBasePropTypes = _extends({
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
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var TextBaseDefaultProps = {
  fontStyle: "normal",
  fontWeight: "regular",
  fontSize: "md"
};

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    ", "\n\n    ", "\n\n  font-style: ", ";\n\n  ", "\n  ", "\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledText = styled(Typography)(_templateObject$4(), function (_ref) {
  var fontWeight = _ref.fontWeight,
      theme = _ref.theme;

  if (fontWeight === "light") {
    return "font-weight: " + theme.typography.fontWeightLight + ";";
  }

  if (fontWeight === "bold") {
    return "font-weight: " + theme.typography.fontWeightBold + ";";
  }

  return "font-weight: " + theme.typography.fontWeightRegular + ";";
}, function (_ref2) {
  var fontSize = _ref2.fontSize,
      theme = _ref2.theme,
      variant = _ref2.variant;

  if (fontSize === "sm") {
    return "font-size: " + theme.typography[variant].fontSizeSm + ";";
  }

  if (fontSize === "lg") {
    return "font-size: " + theme.typography[variant].fontSizeLg + ";";
  }

  return "font-size: " + theme.typography[variant].fontSize + ";";
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
      props = _objectWithoutPropertiesLoose(_ref4, ["content", "children"]);

  return /*#__PURE__*/React.createElement(StyledText, props, content || children);
};
TextBase.propTypes = TextBasePropTypes;
TextBase.defaultProps = TextBaseDefaultProps;

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    margin-bottom: ", ";\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledParagraph = styled(TextBase)(_templateObject$5(), function (_ref) {
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

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n  padding-left: ", ";\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 22px;\n  min-width: 32px;\n  min-height: 32px;\n  width: max-content;\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledChip = styled.div(_templateObject$6(), function (_ref) {
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
})(_templateObject2$1(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2);
});
var ChipBadge = function ChipBadge(_ref3) {
  var color = _ref3.color,
      icon = _ref3.icon,
      label = _ref3.label,
      props = _objectWithoutPropertiesLoose(_ref3, ["color", "icon", "label"]);

  return /*#__PURE__*/React.createElement(StyledChip, _extends({
    color: color
  }, props), /*#__PURE__*/React.createElement(Icon, {
    color: color,
    icon: icon
  }), label && /*#__PURE__*/React.createElement(StyledLabel, null, label));
};
ChipBadge.propTypes = ChipBadgePropTypes;
ChipBadge.defaultProps = ChipBadgeDefaultProps;

var BoxBasePropTypes = _extends({
  shadow: PropTypes.oneOf(["none", "normal", "long"])
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var BoxBaseDefaultProps = {
  shadow: "normal"
};

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 16px;\n  position: relative;\n  overflow: hidden;\n\n  box-shadow: ", ";\n\n  ", "\n  ", "\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledBox = styled.div(_templateObject$7(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var shadow = _ref2.shadow;
  if (shadow === "long") return "0px 16px 56px rgba(41, 40, 57, 0.16)";
  if (shadow === "normal") return "0px 8px 32px rgba(41, 40, 57, 0.08)";
  return "none";
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var BoxBase = function BoxBase(props) {
  return /*#__PURE__*/React.createElement(StyledBox, props);
};
BoxBase.propTypes = BoxBasePropTypes;
BoxBase.defaultProps = BoxBaseDefaultProps;

var FlexPropTypes = _extends({
  alignItems: PropTypes.oneOf(["flex-start", "center", "flex-end", "stretch", "baseline"]),
  container: PropTypes.bool,
  item: PropTypes.bool,
  justify: PropTypes.oneOf(["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"])
}, SPACER_PROP_TYPES, DIMENSION_PROP_TYPES);
var FlexDefaultProps = {
  alignItems: "center",
  justify: "flex-start"
};

function _templateObject$8() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFlex = styled(Grid)(_templateObject$8(), function (theme) {
  return DIMENSION(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var Flex = function Flex(props) {
  return /*#__PURE__*/React.createElement(StyledFlex, props);
};
Flex.propTypes = FlexPropTypes;
Flex.defaultProps = FlexDefaultProps;

function _templateObject$9() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  box-sizing: border-box;\n  background-color: ", ";\n  padding: ", ";\n  border-top: 1px solid ", ";\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledBoxFooter = styled(Flex).attrs(function () {
  return {
    container: true,
    alignItems: "center",
    justify: "space-between"
  };
})(_templateObject$9(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var padding = _ref2.padding,
      theme = _ref2.theme;
  return theme.spacing(4, padding);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.gray.semiLight;
});
var BoxFooter = function BoxFooter(_ref4) {
  var action = _ref4.action,
      actionDisabled = _ref4.actionDisabled,
      actionLoading = _ref4.actionLoading,
      actionTitle = _ref4.actionTitle,
      renderAction = _ref4.renderAction,
      renderTitle = _ref4.renderTitle,
      props = _objectWithoutPropertiesLoose(_ref4, ["action", "actionDisabled", "actionLoading", "actionTitle", "renderAction", "renderTitle"]);

  return /*#__PURE__*/React.createElement(StyledBoxFooter, props, /*#__PURE__*/React.createElement(Flex, {
    item: true
  }, renderTitle()), /*#__PURE__*/React.createElement(Flex, {
    item: true
  }, renderAction() || /*#__PURE__*/React.createElement(Button, {
    content: actionTitle,
    disabled: actionDisabled,
    loading: actionLoading,
    onClick: action
  })));
};
BoxFooter.propTypes = {
  action: PropTypes.func,
  actionDisabled: PropTypes.bool,
  actionLoading: PropTypes.bool,
  actionTitle: PropTypes.string.isRequired,
  padding: PropTypes.number.isRequired,
  renderAction: PropTypes.func,
  renderTitle: PropTypes.func
};
BoxFooter.defaultProps = {
  action: function action() {},
  actionDisabled: false,
  actionLoading: false,
  renderAction: function renderAction() {},
  renderTitle: function renderTitle() {}
};

function _templateObject$a() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  box-sizing: border-box;\n  background-color: ", ";\n  padding: ", ";\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var StyledBoxHeader = styled(Flex).attrs(function () {
  return {
    container: true,
    justify: "space-between"
  };
})(_templateObject$a(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var padding = _ref2.padding,
      theme = _ref2.theme;
  return theme.spacing(padding);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.gray.semiLight;
});
var BoxHeader = function BoxHeader(_ref4) {
  var action = _ref4.action,
      actionIcon = _ref4.actionIcon,
      actionIconSize = _ref4.actionIconSize,
      renderAction = _ref4.renderAction,
      renderTitle = _ref4.renderTitle,
      title = _ref4.title,
      titleIcon = _ref4.titleIcon,
      props = _objectWithoutPropertiesLoose(_ref4, ["action", "actionIcon", "actionIconSize", "renderAction", "renderTitle", "title", "titleIcon"]);

  return /*#__PURE__*/React.createElement(StyledBoxHeader, props, /*#__PURE__*/React.createElement(Flex, {
    container: true,
    item: true,
    xs: 6
  }, renderTitle() || /*#__PURE__*/React.createElement(React.Fragment, null, titleIcon && /*#__PURE__*/React.createElement(Icon, {
    colorBlack: true,
    icon: titleIcon,
    mr: 2,
    size: "lg"
  }), /*#__PURE__*/React.createElement(H3, {
    content: title,
    dInlineBlock: true
  }))), /*#__PURE__*/React.createElement(Flex, {
    item: true
  }, renderAction() || actionIcon && /*#__PURE__*/React.createElement(Icon, {
    colorGrayMedium: true,
    icon: actionIcon,
    size: actionIconSize,
    onClick: action
  })));
};
BoxHeader.propTypes = {
  action: PropTypes.func,
  actionIcon: PropTypes.string,
  actionIconSize: PropTypes.string,
  padding: PropTypes.number.isRequired,
  renderAction: PropTypes.func,
  renderTitle: PropTypes.func,
  title: PropTypes.string.isRequired,
  titleIcon: PropTypes.string,
  titleComponent: PropTypes.string
};
BoxHeader.defaultProps = {
  action: function action() {},
  actionIcon: "",
  actionIconSize: "lg",
  renderAction: function renderAction() {},
  renderTitle: function renderTitle() {},
  titleIcon: "",
  titleComponent: "H3"
};

var BoxPropTypes = _extends({
  children: PropTypes.node.isRequired,
  footerAction: PropTypes.func,
  footerActionLoading: PropTypes.bool,
  footerActionDisabled: PropTypes.bool,
  footerActionTitle: PropTypes.string,
  footerRenderAction: PropTypes.func,
  footerRenderTitle: PropTypes.func,
  headerAction: PropTypes.func,
  headerActionIcon: PropTypes.string,
  headerActionIconSize: PropTypes.string,
  headerRenderAction: PropTypes.func,
  headerRenderTitle: PropTypes.func,
  headerTitle: PropTypes.string,
  headerTitleIcon: PropTypes.string,
  padding: PropTypes.number
}, BoxBasePropTypes);
var BoxDefaultProps = _extends({
  padding: 6
}, BoxBaseDefaultProps);

function _templateObject$b() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var BoxContent = styled.div(_templateObject$b(), function (_ref) {
  var padding = _ref.padding,
      theme = _ref.theme;
  return theme.spacing(padding);
});
var Box = function Box(_ref2) {
  var children = _ref2.children,
      footerAction = _ref2.footerAction,
      footerActionLoading = _ref2.footerActionLoading,
      footerActionDisabled = _ref2.footerActionDisabled,
      footerActionTitle = _ref2.footerActionTitle,
      footerRenderAction = _ref2.footerRenderAction,
      footerRenderTitle = _ref2.footerRenderTitle,
      headerAction = _ref2.headerAction,
      headerActionIcon = _ref2.headerActionIcon,
      headerActionIconSize = _ref2.headerActionIconSize,
      headerRenderAction = _ref2.headerRenderAction,
      headerRenderTitle = _ref2.headerRenderTitle,
      headerTitle = _ref2.headerTitle,
      headerTitleIcon = _ref2.headerTitleIcon,
      padding = _ref2.padding,
      props = _objectWithoutPropertiesLoose(_ref2, ["children", "footerAction", "footerActionLoading", "footerActionDisabled", "footerActionTitle", "footerRenderAction", "footerRenderTitle", "headerAction", "headerActionIcon", "headerActionIconSize", "headerRenderAction", "headerRenderTitle", "headerTitle", "headerTitleIcon", "padding"]);

  return /*#__PURE__*/React.createElement(BoxBase, props, headerTitle && /*#__PURE__*/React.createElement(BoxHeader, {
    action: headerAction,
    actionIcon: headerActionIcon,
    actionIconSize: headerActionIconSize,
    padding: padding,
    renderAction: headerRenderAction,
    renderTitle: headerRenderTitle,
    title: headerTitle,
    titleIcon: headerTitleIcon
  }), /*#__PURE__*/React.createElement(BoxContent, {
    padding: padding
  }, children), /*#__PURE__*/React.createElement(BoxFooter, {
    action: footerAction,
    actionDisabled: footerActionDisabled,
    actionLoading: footerActionLoading,
    actionTitle: footerActionTitle,
    padding: padding,
    renderAction: footerRenderAction,
    renderTitle: footerRenderTitle
  }));
};
Box.propTypes = BoxPropTypes;
Box.defaultProps = BoxDefaultProps;

var ButtonBasePropTypes = _extends({
  color: PropTypes.oneOf(["primary", "secondary", "subtle"]),
  content: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  endIcon: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  startIcon: PropTypes.string,
  target: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ButtonBaseDefaultProps = {
  color: "primary",
  size: "md"
};

function _templateObject$c() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    box-sizing: border-box;\n    border-radius: 12px;\n    padding: ", ";\n    min-width: 40px;\n    height: 40px;\n    transition: all 100ms ease-in-out;\n\n    :hover {\n      opacity: 0.7;\n    }\n\n    :disabled {\n      opacity: 0.3;\n      cursor: not-allowed;\n      pointer-events: none;\n    }\n\n    ", "\n\n    ", "\n    ", "\n  }\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled(MuiButtonBase)(_templateObject$c(), function (_ref) {
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

var getIconSize = function getIconSize(buttonSize) {
  switch (buttonSize) {
    case "xs":
      return "sm";

    case "sm":
      return "md";

    default:
      return "lg";
  }
};

var ButtonBase = function ButtonBase(_ref3) {
  var colors = _ref3.colors,
      content = _ref3.content,
      children = _ref3.children,
      loading = _ref3.loading,
      endIcon = _ref3.endIcon,
      href = _ref3.href,
      size = _ref3.size,
      startIcon = _ref3.startIcon,
      props = _objectWithoutPropertiesLoose(_ref3, ["colors", "content", "children", "loading", "endIcon", "href", "size", "startIcon"]);

  var iconSize = getIconSize(size);
  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    component: href ? "a" : "button",
    href: href,
    size: size
  }, props), loading ? /*#__PURE__*/React.createElement(DotsSpinner, {
    color: colors == null ? void 0 : colors.color
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, startIcon && /*#__PURE__*/React.createElement(Icon, {
    icon: startIcon,
    size: iconSize,
    mr: 2
  }), content || children, endIcon && /*#__PURE__*/React.createElement(Icon, {
    icon: endIcon,
    size: iconSize,
    ml: 2
  })));
};
ButtonBase.propTypes = ButtonBasePropTypes;
ButtonBase.defaultProps = ButtonBaseDefaultProps;

function _templateObject$d() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    ", "\n  }\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton$1 = styled(ButtonBase)(_templateObject$d(), function (_ref) {
  var colors = _ref.colors;
  return css(["background-color:", ";color:", ";svg{color:", ";}"], colors.backgroundColor, colors.color, colors.color);
});

var colorMapper = function colorMapper(color, theme) {
  if (color === "secondary") return {
    backgroundColor: theme.palette.gray.dark,
    color: theme.palette.common.white
  };
  if (color === "subtle") return {
    backgroundColor: theme.palette.gray.regular,
    color: theme.palette.gray.medium
  };
  return {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  };
};

var Button = function Button(_ref2) {
  var color = _ref2.color,
      props = _objectWithoutPropertiesLoose(_ref2, ["color"]);

  var theme = useTheme();
  var colors = colorMapper(color, theme);
  return /*#__PURE__*/React.createElement(StyledButton$1, _extends({
    colors: colors
  }, props));
};
Button.propTypes = ButtonBasePropTypes;

function _templateObject$e() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    ", "\n  }\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton$2 = styled(ButtonBase)(_templateObject$e(), function (_ref) {
  var colors = _ref.colors;
  return css(["border:1px solid ", ";color:", ";svg{color:", ";}:hover{background-color:", ";opacity:1;}"], colors.borderColor, colors.color, colors.color, colors.backgroundColorHover);
});

var colorMapper$1 = function colorMapper(color, theme) {
  if (color === "secondary") return {
    backgroundColorHover: theme.palette.gray.semiLight,
    borderColor: theme.palette.gray.dark,
    color: theme.palette.gray.dark
  };
  if (color === "subtle") return {
    backgroundColorHover: theme.palette.gray.semiLight,
    borderColor: theme.palette.gray.regular,
    color: theme.palette.gray.medium
  };
  return {
    backgroundColorHover: theme.palette.primary.light,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main
  };
};

var OutlineButton = function OutlineButton(_ref2) {
  var color = _ref2.color,
      props = _objectWithoutPropertiesLoose(_ref2, ["color"]);

  var theme = useTheme();
  var colors = colorMapper$1(color, theme);
  return /*#__PURE__*/React.createElement(StyledButton$2, _extends({
    colors: colors
  }, props));
};
OutlineButton.propTypes = ButtonBasePropTypes;

function _templateObject$f() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    ", "\n  }\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton$3 = styled(ButtonBase)(_templateObject$f(), function (_ref) {
  var colors = _ref.colors;
  return css(["color:", ";svg{color:", ";}"], colors.color, colors.color);
});

var colorMapper$2 = function colorMapper(color, theme) {
  if (color === "secondary") return {
    color: theme.palette.gray.dark
  };
  if (color === "subtle") return {
    color: theme.palette.gray.medium
  };
  return {
    color: theme.palette.primary.main
  };
};

var TextButton = function TextButton(_ref2) {
  var color = _ref2.color,
      props = _objectWithoutPropertiesLoose(_ref2, ["color"]);

  var theme = useTheme();
  var colors = colorMapper$2(color, theme);
  return /*#__PURE__*/React.createElement(StyledButton$3, _extends({
    colors: colors
  }, props));
};
TextButton.propTypes = ButtonBasePropTypes;

var CollapsePropTypes = {
  isOpened: PropTypes.bool
};

function _templateObject$g() {
  var data = _taggedTemplateLiteralLoose(["\n  .ReactCollapse--collapse {\n    transition: height 200ms ease-in-out;\n  }\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled.div(_templateObject$g());
var Collapse = function Collapse(props) {
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Collapse$1, props));
};
Collapse.propTypes = CollapsePropTypes;

var CollapseButton = function CollapseButton(_ref) {
  var isOpened = _ref.isOpened,
      props = _objectWithoutPropertiesLoose(_ref, ["isOpened"]);

  return /*#__PURE__*/React.createElement(Icon, _extends({
    icon: isOpened ? "chevron-up" : "chevron-down"
  }, props));
};
CollapseButton.propTypes = {
  isOpened: PropTypes.bool.isRequired
};

var DetailsTablePropTypes = _extends({
  rows: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.node,
    expanded: PropTypes.bool
  }))
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var DetailsTableDefaultProps = {};

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 140px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  height: 32px;\n  margin-bottom: ", ";\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$h() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$1 = styled.div(_templateObject$h(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Row = styled.div(_templateObject2$2(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var Label = styled(Text).attrs(function () {
  return {
    color: "textSecondary"
  };
})(_templateObject3());
var DetailsTable = function DetailsTable(_ref2) {
  var rows = _ref2.rows,
      props = _objectWithoutPropertiesLoose(_ref2, ["rows"]);

  return /*#__PURE__*/React.createElement(Wrapper$1, props, rows.map(function (_ref3) {
    var label = _ref3.label,
        value = _ref3.value;
    return /*#__PURE__*/React.createElement(Row, {
      key: label + ":" + value
    }, /*#__PURE__*/React.createElement(Label, {
      content: label
    }), value);
  }));
};
DetailsTable.propTypes = DetailsTablePropTypes;
DetailsTable.defaultProps = DetailsTableDefaultProps;

var DropdownPropTypes = _extends({
  anchorEl: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string
  })),
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var DropdownDefaultProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center"
  },
  getContentAnchorEl: null,
  transformOrigin: {
    vertical: "top",
    horizontal: "center"
  }
};

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$i() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: 24px;\n\n  ", "\n  ", "\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDropdown = styled(Menu)(_templateObject$i(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledItem = styled(MenuItem)(_templateObject2$3());
var Dropdown = function Dropdown(_ref) {
  var items = _ref.items,
      props = _objectWithoutPropertiesLoose(_ref, ["items"]);

  return /*#__PURE__*/React.createElement(StyledDropdown, props, items.map(function (_ref2) {
    var label = _ref2.label,
        _onClick = _ref2.onClick,
        value = _ref2.value,
        itemProps = _objectWithoutPropertiesLoose(_ref2, ["label", "onClick", "value"]);

    return /*#__PURE__*/React.createElement(StyledItem, _extends({
      key: label,
      onClick: function onClick() {
        return _onClick(value);
      }
    }, itemProps), label);
  }));
};
Dropdown.propTypes = DropdownPropTypes;
Dropdown.defaultProps = DropdownDefaultProps;

function _templateObject$j() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n\n  && {\n    width: 40px;\n    height: 40px;\n    background-color: ", ";\n    svg {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$2 = styled.div(_templateObject$j(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.primary.light;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.primary.main;
});
var DownloadModuleButton = function DownloadModuleButton(_ref3) {
  var icon = _ref3.icon;
  return /*#__PURE__*/React.createElement(Wrapper$2, null, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    size: "lg"
  }));
};
DownloadModuleButton.propTypes = {
  icon: PropTypes.string.isRequired
};

var DownloadModulePropTypes = _extends({
  downloadPdfText: PropTypes.string,
  downloadPdfUrl: PropTypes.string,
  downloadQrCodeDesc: PropTypes.string,
  downloadQrCodeText: PropTypes.string,
  downloadQrCodeUrl: PropTypes.string,
  qrCodeUrl: PropTypes.string,
  qrCodeValue: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var DownloadModuleDefaultProps = {
  downloadPdfText: "Download as PDF",
  downloadQrCodeDesc: "Or just download the QR Code of license",
  downloadQrCodeText: "Download QR Code",
  qrCodeValue: "https://license.rocks"
};

function _templateObject$k() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  padding: ", ";\n  border-radius: 16px;\n  ", "\n  ", "\n"]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div(_templateObject$k(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.semiLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(4);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var DownloadModule = function DownloadModule(_ref3) {
  var downloadPdfText = _ref3.downloadPdfText,
      downloadPdfUrl = _ref3.downloadPdfUrl,
      downloadQrCodeDesc = _ref3.downloadQrCodeDesc,
      downloadQrCodeText = _ref3.downloadQrCodeText,
      downloadQrCodeUrl = _ref3.downloadQrCodeUrl,
      qrCodeUrl = _ref3.qrCodeUrl,
      qrCodeValue = _ref3.qrCodeValue,
      props = _objectWithoutPropertiesLoose(_ref3, ["downloadPdfText", "downloadPdfUrl", "downloadQrCodeDesc", "downloadQrCodeText", "downloadQrCodeUrl", "qrCodeUrl", "qrCodeValue"]);

  return /*#__PURE__*/React.createElement(Container, props, /*#__PURE__*/React.createElement(Flex, {
    container: true,
    mb: 8
  }, /*#__PURE__*/React.createElement(DownloadModuleButton, {
    icon: "file-pdf"
  }), /*#__PURE__*/React.createElement(TextButton, {
    content: downloadPdfText,
    href: downloadPdfUrl,
    size: "sm"
  })), /*#__PURE__*/React.createElement(Flex, {
    container: true,
    wrap: "nowrap"
  }, /*#__PURE__*/React.createElement(QRCode, {
    includeMargin: true,
    size: 76,
    value: qrCodeValue
  }), /*#__PURE__*/React.createElement(Flex, {
    item: true
  }, /*#__PURE__*/React.createElement(Text, {
    content: downloadQrCodeDesc,
    ml: 2
  }), /*#__PURE__*/React.createElement(TextButton, {
    content: downloadQrCodeText,
    href: downloadQrCodeUrl,
    ml: 1,
    size: "sm"
  }))));
};
DownloadModule.propTypes = DownloadModulePropTypes;
DownloadModule.defaultProps = DownloadModuleDefaultProps;

var FileManagerPropTypes = _extends({
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    files: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
      previewUrl: PropTypes.string
    }))
  }))
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FileManagerDefaultProps = {};

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 48px;\n  margin-bottom: ", ";\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteralLoose(["\n  border: 1px solid ", ";\n  padding: ", ";\n  margin-bottom: ", ";\n  border-radius: 8px;\n\n  ", "\n  ", "\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$l() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var Container$1 = styled.div(_templateObject$l());
var Wrapper$3 = styled.div(_templateObject2$4(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.semiLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(4);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(2);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Row$1 = styled(Grid).attrs(function () {
  return {
    container: true
  };
})(_templateObject3$1(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(2);
});
var Item = styled(Grid).attrs(function (_ref5) {
  var lg = _ref5.lg;
  return {
    item: true,
    xs: 4,
    lg: lg || 3
  };
})(_templateObject4());
var FileManager = function FileManager(_ref6) {
  var data = _ref6.data;
  return /*#__PURE__*/React.createElement(Container$1, null, data.map(function (_ref7) {
    var label = _ref7.label,
        files = _ref7.files;
    return /*#__PURE__*/React.createElement(Wrapper$3, {
      key: label
    }, /*#__PURE__*/React.createElement(Text, {
      content: label,
      fontWeight: "bold",
      mb: 2
    }), files.map(function (_ref8) {
      var date = _ref8.date,
          description = _ref8.description,
          id = _ref8.id,
          name = _ref8.name,
          previewUrl = _ref8.previewUrl;
      return /*#__PURE__*/React.createElement(Row$1, {
        key: id
      }, /*#__PURE__*/React.createElement(Item, {
        lg: 5,
        md: 5
      }, /*#__PURE__*/React.createElement(Thumbnail, {
        imgSrc: previewUrl,
        hasPreview: true,
        mr: 4
      }), /*#__PURE__*/React.createElement(Text, {
        content: name,
        color: "textSecondary",
        fontStyle: "italic",
        noWrap: true
      })), /*#__PURE__*/React.createElement(Item, {
        lg: 4,
        md: 3
      }, /*#__PURE__*/React.createElement(Text, {
        content: date,
        color: "textSecondary",
        fontWeight: "bold"
      })), /*#__PURE__*/React.createElement(Item, {
        justify: "flex-end"
      }, /*#__PURE__*/React.createElement(Text, {
        content: description,
        color: "textSecondary",
        fontWeight: "bold",
        noWrap: true
      })));
    }));
  }));
};
FileManager.propTypes = FileManagerPropTypes;
FileManager.defaultProps = FileManagerDefaultProps;

const img = "data:image/svg+xml,%3csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.5938 0.625L5.375 8.84375L2.375 5.8125C2.21875 5.6875 1.96875 5.6875 1.84375 5.8125L0.9375 6.71875C0.8125 6.84375 0.8125 7.09375 0.9375 7.25L5.125 11.4062C5.28125 11.5625 5.5 11.5625 5.65625 11.4062L15.0312 2.03125C15.1562 1.90625 15.1562 1.65625 15.0312 1.5L14.125 0.625C14 0.46875 13.75 0.46875 13.5938 0.625Z' fill='white'/%3e%3c/svg%3e";

var RadioBasePropTypes = _extends({
  defaultValue: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  hasError: PropTypes.bool,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node,
    value: PropTypes.string
  })),
  register: PropTypes.func.isRequired,
  stacked: PropTypes.bool
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var RadioBaseDefaultProps = {
  defaultValue: "",
  hasError: false,
  name: "radio",
  stacked: true
};

function _templateObject2$5() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$m() {
  var data = _taggedTemplateLiteralLoose(["\n  display: none;\n\n  + label {\n    display: inline-flex;\n    align-items: center;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 120%;\n    margin: 0 32px 0 0;\n    cursor: pointer;\n    transition: all 0.1s ease-in-out;\n\n    ", "\n\n    &::before {\n      content: \"\";\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border-radius: ", ";\n      background-color: ", ";\n      border: 1px solid ", ";\n      margin-right: 8px;\n      transition: background-color 0.1s ease-in-out;\n      ", "\n    }\n\n    &:hover {\n      &::before {\n        background-color: ", ";\n        border-color: ", ";\n      }\n    }\n  }\n\n  &:checked + label::before {\n    background-color: ", ";\n    border-color: ", ";\n    background-image: url(\"", "\");\n    background-size: 16px 16px;\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n\n  &:disabled + label {\n    opacity: 0.3;\n\n    &,\n    span {\n      cursor: default;\n    }\n  }\n"]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
var StyledInput = styled.input(_templateObject$m(), function (_ref) {
  var stacked = _ref.stacked;
  return stacked && css(["display:flex;:not(:last-child){margin:0 0 24px 0;}"]);
}, function (_ref2) {
  var type = _ref2.type;
  return type === "radio" ? "50%" : "8px";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.common.white;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.gray.regular;
}, function (_ref5) {
  var hasError = _ref5.hasError;
  return hasError && css(["border-color:", ";"], function (_ref6) {
    var theme = _ref6.theme;
    return theme.palette.error.main;
  });
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.primary.main;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.primary.main;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.palette.primary.main;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.palette.primary.main;
}, "" + img);
var StyledLabel$1 = styled.label(_templateObject2$5());
var RadioBaseItem = function RadioBaseItem(_ref11) {
  var defaultValue = _ref11.defaultValue,
      hasError = _ref11.hasError,
      label = _ref11.label,
      name = _ref11.name,
      options = _ref11.options,
      register = _ref11.register,
      stacked = _ref11.stacked,
      type = _ref11.type,
      value = _ref11.value,
      props = _objectWithoutPropertiesLoose(_ref11, ["defaultValue", "hasError", "label", "name", "options", "register", "stacked", "type", "value"]);

  var id = name + "-" + value;
  var defaultChecked = type === "checkbox" ? defaultValue.includes(value) : defaultValue === value;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledInput, _extends({
    defaultChecked: defaultChecked,
    hasError: hasError,
    id: id,
    name: name,
    ref: register,
    stacked: stacked,
    type: type,
    value: value
  }, props)), /*#__PURE__*/React.createElement(StyledLabel$1, {
    htmlFor: id
  }, label));
};
RadioBaseItem.propTypes = RadioBasePropTypes;
RadioBaseItem.defaultProps = RadioBaseDefaultProps;

var RadioBase = function RadioBase(_ref) {
  var options = _ref.options,
      props = _objectWithoutPropertiesLoose(_ref, ["options"]);

  return /*#__PURE__*/React.createElement(Fieldset, null, options.map(function (opt) {
    return /*#__PURE__*/React.createElement(RadioBaseItem, _extends({
      key: opt.value
    }, opt, props));
  }));
};
RadioBase.propTypes = RadioBasePropTypes;
RadioBase.defaultProps = RadioBaseDefaultProps;

function _templateObject$n() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRadioBase = styled(RadioBase)(_templateObject$n(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Checkbox = function Checkbox(props) {
  return /*#__PURE__*/React.createElement(StyledRadioBase, _extends({
    type: "checkbox"
  }, props));
};
Checkbox.propTypes = RadioBasePropTypes;
Checkbox.defaultProps = RadioBaseDefaultProps;

var FormErrorPropTypes = _extends({
  message: PropTypes.node.isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FormErrorDefaultProps = {};

function _templateObject$o() {
  var data = _taggedTemplateLiteralLoose(["\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 120%;\n  color: ", ";\n  margin-top: ", ";\n\n  ", "\n  ", "\n"]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var Error = styled.div(_templateObject$o(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.error.main;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var FormError = function FormError(_ref3) {
  var message = _ref3.message,
      props = _objectWithoutPropertiesLoose(_ref3, ["message"]);

  return /*#__PURE__*/React.createElement(Error, props, message);
};
FormError.propTypes = FormErrorPropTypes;
FormError.defaultProps = FormErrorDefaultProps;

var FieldWrapperPropTypes = _extends({
  block: PropTypes.bool,
  endIcon: PropTypes.string,
  endIconColor: PropTypes.oneOf(THEME_COLORS),
  endIconOnClick: PropTypes.func,
  endIconPrefix: PropTypes.string,
  startIcon: PropTypes.string,
  startIconColor: PropTypes.oneOf(THEME_COLORS),
  startIconOnClick: PropTypes.func,
  startIconPrefix: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FieldWrapperDefaultProps = {
  block: true,
  endIcon: "",
  endIconColor: "input",
  startIcon: "",
  startIconColor: "input"
};

function _templateObject$p() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  padding: ", ";\n  outline: none;\n  height: 40px;\n  box-sizing: border-box;\n  transition: all 100ms ease-in-out;\n\n  :not(:last-child) {\n    margin-right: ", ";\n  }\n\n  &:focus-within {\n    border: 1px solid ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$p = function _templateObject() {
    return data;
  };

  return data;
}
var StyledWrapper = styled.div(_templateObject$p(), function (_ref) {
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
  var disabled = _ref9.disabled;
  return disabled && css(["opacity:0.3;cursor:not-allowed;pointer-events:none;"]);
}, function (_ref10) {
  var block = _ref10.block;
  return block && css(["flex:1;"]);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var FieldWrapper = function FieldWrapper(_ref11) {
  var children = _ref11.children,
      endIcon = _ref11.endIcon,
      endIconColor = _ref11.endIconColor,
      endIconOnClick = _ref11.endIconOnClick,
      endIconPrefix = _ref11.endIconPrefix,
      startIcon = _ref11.startIcon,
      startIconColor = _ref11.startIconColor,
      startIconOnClick = _ref11.startIconOnClick,
      startIconPrefix = _ref11.startIconPrefix,
      props = _objectWithoutPropertiesLoose(_ref11, ["children", "endIcon", "endIconColor", "endIconOnClick", "endIconPrefix", "startIcon", "startIconColor", "startIconOnClick", "startIconPrefix"]);

  return /*#__PURE__*/React.createElement(StyledWrapper, props, startIcon && /*#__PURE__*/React.createElement(Icon, {
    color: startIconColor,
    icon: startIcon,
    onClick: startIconOnClick,
    prefix: startIconPrefix
  }), children, endIcon && /*#__PURE__*/React.createElement(Icon, {
    color: endIconColor,
    icon: endIcon,
    onClick: endIconOnClick,
    prefix: endIconPrefix
  }));
};
FieldWrapper.propTypes = FieldWrapperPropTypes;
FieldWrapper.defaultProps = FieldWrapperDefaultProps;

var FieldBasePropTypes = _extends({}, FieldWrapperPropTypes, {
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  readOnly: PropTypes.bool,
  register: PropTypes.func,
  type: PropTypes.string
});
var FieldBaseDefaultProps = _extends({}, FieldWrapperDefaultProps, {
  disabled: false,
  hasError: false,
  readOnly: false,
  register: null,
  type: "text"
});

function _templateObject$q() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 120%;\n  padding: 8px;\n  color: ", ";\n  outline: none;\n  border: none;\n  height: 100%;\n  box-sizing: border-box;\n  transition: all 100ms ease-in-out;\n  background-color: transparent;\n\n  ::placeholder {\n    font-weight: normal;\n  }\n\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject$q = function _templateObject() {
    return data;
  };

  return data;
}
var StyledInput$1 = styled(
/*#__PURE__*/
// eslint-disable-next-line react/prop-types
forwardRef(function (_ref, ref) {
  var Component = _ref.component,
      props = _objectWithoutPropertiesLoose(_ref, ["component"]);

  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: ref
  }, props));
}))(_templateObject$q(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.text.primary;
}, function (_ref3) {
  var component = _ref3.component;
  return component === "input" && css(["&:read-only{cursor:", ";}"], function (_ref4) {
    var selectable = _ref4.selectable;
    return !selectable && "not-allowed";
  });
}, function (_ref5) {
  var hasError = _ref5.hasError;
  return hasError && css(["::placeholder{color:", ";}color:", ";"], function (_ref6) {
    var theme = _ref6.theme;
    return theme.palette.error.main;
  }, function (_ref7) {
    var theme = _ref7.theme;
    return theme.palette.error.main;
  });
}, function (_ref8) {
  var block = _ref8.block;
  return block && css(["width:100%;"]);
}, function (_ref9) {
  var selectable = _ref9.selectable;
  return selectable && css(["user-select:all;"]);
});
var FieldBase = function FieldBase(_ref10) {
  var block = _ref10.block,
      endIcon = _ref10.endIcon,
      endIconColor = _ref10.endIconColor,
      endIconOnClick = _ref10.endIconOnClick,
      endIconPrefix = _ref10.endIconPrefix,
      hasError = _ref10.hasError,
      register = _ref10.register,
      startIcon = _ref10.startIcon,
      startIconColor = _ref10.startIconColor,
      startIconOnClick = _ref10.startIconOnClick,
      startIconPrefix = _ref10.startIconPrefix,
      props = _objectWithoutPropertiesLoose(_ref10, ["block", "endIcon", "endIconColor", "endIconOnClick", "endIconPrefix", "hasError", "register", "startIcon", "startIconColor", "startIconOnClick", "startIconPrefix"]);

  return /*#__PURE__*/React.createElement(FieldWrapper, {
    endIcon: endIcon,
    endIconColor: endIconColor,
    endIconOnClick: endIconOnClick,
    endIconPrefix: endIconPrefix,
    hasError: hasError,
    startIcon: startIcon,
    startIconColor: startIconColor,
    startIconOnClick: startIconOnClick,
    startIconPrefix: startIconPrefix
  }, /*#__PURE__*/React.createElement(StyledInput$1, _extends({
    hasError: hasError,
    ref: register
  }, props)));
};
FieldBase.propTypes = FieldBasePropTypes;
FieldBase.defaultProps = FieldBaseDefaultProps;

function _templateObject$r() {
  var data = _taggedTemplateLiteralLoose(["\n  border: none;\n  padding: 0%;\n  margin: 0;\n"]);

  _templateObject$r = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFieldset = styled.fieldset(_templateObject$r());
var Fieldset = function Fieldset(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(StyledFieldset, null, children);
};
Fieldset.propTypes = {
  children: PropTypes.node.isRequired
};
Fieldset.defaultProps = {};

function _templateObject2$6() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$s() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  background-color: ", ";\n  color: ", ";\n  font-size: 12px;\n  margin-bottom: 8px;\n  border-radius: 8px;\n"]);

  _templateObject$s = function _templateObject() {
    return data;
  };

  return data;
}
var Item$1 = styled.div(_templateObject$s(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.success.main;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.common.white;
});
var RemoveIcon = styled(Icon)(_templateObject2$6(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.common.white;
});

function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}

var DropzonePreview = function DropzonePreview(_ref4) {
  var files = _ref4.files,
      onRemoveClick = _ref4.onRemoveClick;
  return files.map(function (file) {
    return /*#__PURE__*/React.createElement(Item$1, {
      key: file.name
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, file.name), /*#__PURE__*/React.createElement("div", null, bytesToSize(file.size))), /*#__PURE__*/React.createElement(RemoveIcon, {
      icon: "times",
      onClick: onRemoveClick
    }));
  });
};
DropzonePreview.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
  onRemoveClick: PropTypes.func.isRequired
};
DropzonePreview.defaultProps = {
  files: []
};

function _templateObject2$7() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 16px;\n  border-style: dashed;\n  border-width: 2px;\n  cursor: pointer;\n  min-height: 125px;\n  outline: none;\n  transition: all 100ms ease-in-out;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n  margin-bottom: 8px;\n\n  &:hover {\n    border-color: ", ";\n  }\n\n\n  ", "\n\n\n  ", "\n\n  ", "\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$t() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n\n  ", "\n  ", "\n"]);

  _templateObject$t = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContainer = styled.div(_templateObject$t(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var DropzoneArea = styled.div(_templateObject2$7(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.semiLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.gray.regular;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.gray.black;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.gray.medium;
}, function (_ref5) {
  var hasError = _ref5.hasError;
  return hasError && css(["border-color:", ";background-color:", ";"], function (_ref6) {
    var theme = _ref6.theme;
    return theme.palette.error.main;
  }, function (_ref7) {
    var theme = _ref7.theme;
    return theme.palette.error.light;
  });
}, function (_ref8) {
  var disabled = _ref8.disabled;
  return disabled && css(["opacity:0.3;cursor:not-allowed;pointer-events:none;"]);
}, function (_ref9) {
  var dragActive = _ref9.dragActive,
      theme = _ref9.theme;
  return dragActive && css(["border-color:", ";"], theme.palette.gray.medium);
});
var Dropzone = function Dropzone(_ref10) {
  var accept = _ref10.accept,
      disabled = _ref10.disabled,
      defaultValue = _ref10.defaultValue,
      hasError = _ref10.hasError,
      multiple = _ref10.multiple,
      onChange = _ref10.onChange,
      props = _objectWithoutPropertiesLoose(_ref10, ["accept", "disabled", "defaultValue", "hasError", "multiple", "onChange"]);

  var _useState = useState(defaultValue),
      files = _useState[0],
      setFiles = _useState[1];

  useEffect(function () {
    return function () {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(function (file) {
        return URL.revokeObjectURL(file.preview);
      });
    };
  }, [files]);

  var _useDropzone = useDropzone({
    accept: accept,
    disabled: disabled,
    multiple: multiple,
    onDrop: function onDrop(acceptedFiles) {
      var accepted = acceptedFiles.map(function (file) {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        });
      });
      setFiles(accepted);

      if (onChange) {
        onChange(accepted);
      }
    }
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  var removeFile = function removeFile(file) {
    var newFiles = [].concat(files);
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);

    if (onChange) {
      onChange(newFiles);
    }
  };

  return /*#__PURE__*/React.createElement(StyledContainer, props, /*#__PURE__*/React.createElement(DropzoneArea, _extends({
    dragActive: isDragActive,
    dragAccept: isDragAccept,
    dragReject: isDragReject,
    disabled: disabled,
    hasError: hasError
  }, getRootProps()), /*#__PURE__*/React.createElement("input", getInputProps()), isDragAccept && /*#__PURE__*/React.createElement("p", null, "Accepted"), isDragReject && /*#__PURE__*/React.createElement("p", null, "Rejected"), isDragActive ? /*#__PURE__*/React.createElement("p", null, "Drop here") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Drop, or click to select"), multiple ? /*#__PURE__*/React.createElement("p", null, "Accepts multiple files") : /*#__PURE__*/React.createElement("p", null, "Single file only"))), /*#__PURE__*/React.createElement(DropzonePreview, {
    files: files,
    onRemoveClick: removeFile
  }));
};
Dropzone.propTypes = {
  accept: PropTypes.string,
  defaultValue: PropTypes.arrayOf(PropTypes.object),
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func
};
Dropzone.defaultProps = {
  accept: "image/*",
  defaultValue: [],
  disabled: false,
  hasError: false,
  multiple: true,
  onChange: function onChange() {}
};

var FileUploadPropTypes = _extends({
  control: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.arrayOf(PropTypes.object),
  isRequired: PropTypes.string,
  name: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FileUploadDefaultProps = {
  defaultValue: undefined,
  name: "fileUpload"
};

var FileUpload = function FileUpload(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      isRequired = _ref.isRequired,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, ["control", "defaultValue", "isRequired", "name"]);

  return /*#__PURE__*/React.createElement(Controller, {
    as: /*#__PURE__*/React.createElement(Dropzone, _extends({
      defaultValue: defaultValue
    }, props)),
    control: control,
    defaultValue: defaultValue,
    name: name,
    rules: {
      required: isRequired
    }
  });
};
FileUpload.propTypes = FileUploadPropTypes;
FileUpload.defaultProps = FileUploadDefaultProps;

var Input = function Input(props) {
  return /*#__PURE__*/React.createElement(FieldBase, _extends({
    component: "input"
  }, props));
};
Input.propTypes = FieldBasePropTypes;
Input.defaultProps = FieldBaseDefaultProps;

function _templateObject$u() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: 14px;\n  line-height: 120%;\n  color: ", ";\n"]);

  _templateObject$u = function _templateObject() {
    return data;
  };

  return data;
}
var StyledLabel$2 = styled.label(_templateObject$u(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.medium;
});
var FormLabel = function FormLabel(props) {
  return /*#__PURE__*/React.createElement(StyledLabel$2, props);
};
FormLabel.propTypes = {};
FormLabel.defaultProps = {};

function _templateObject$v() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$v = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRadioBase$1 = styled(RadioBase)(_templateObject$v(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Radio = function Radio(props) {
  return /*#__PURE__*/React.createElement(StyledRadioBase$1, _extends({
    type: "radio"
  }, props));
};
Radio.propTypes = RadioBasePropTypes;
Radio.defaultProps = RadioBaseDefaultProps;

var ReactSelectPropTypes = _extends({
  async: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  endpoint: PropTypes.string,
  endpointQueryFlag: PropTypes.string,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ReactSelectDefaultProps = {
  defaultValue: undefined,
  endpointQueryFlag: "q",
  isRequired: false
};

function _templateObject$w() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n\n  .react-select__control {\n    border-radius: 12px;\n    color: ", ";\n    padding: ", ";\n    height: 40px;\n    box-sizing: border-box;\n    box-shadow: none;\n    border-color: ", ";\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 120%;\n  }\n\n  .react-select__control--is-focused {\n    border-color: ", ";\n  }\n\n  .react-select__menu {\n    border-radius: 12px;\n  }\n\n  .react-select__option {\n    font-weight: 300;\n    font-size: 14px;\n    line-height: 160%;\n    padding: ", ";\n  }\n\n  .react-select__option--is-focused {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  .react-select__option:hover,\n  .react-select__option--is-selected {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$w = function _templateObject() {
    return data;
  };

  return data;
}
var ReactSelectWrapper = styled.div(_templateObject$w(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.text.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(0, 2);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.gray.regular;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.primary.main;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(2, 4);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.primary.light;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.text.primary;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.common.white;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.palette.primary.main;
}, function (_ref10) {
  var hasError = _ref10.hasError;
  return hasError && css([".react-select__control{border-color:", ";}"], function (_ref11) {
    var theme = _ref11.theme;
    return theme.palette.error.main;
  });
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var ReactSelect = function ReactSelect(_ref12) {
  var async = _ref12.async,
      cacheOptions = _ref12.cacheOptions,
      control = _ref12.control,
      defaultOptions = _ref12.defaultOptions,
      defaultValue = _ref12.defaultValue,
      endpoint = _ref12.endpoint,
      endpointQueryFlag = _ref12.endpointQueryFlag,
      hasError = _ref12.hasError,
      loadOptions = _ref12.loadOptions,
      isRequired = _ref12.isRequired,
      name = _ref12.name,
      options = _ref12.options,
      selectedOption = _ref12.selectedOption,
      props = _objectWithoutPropertiesLoose(_ref12, ["async", "cacheOptions", "control", "defaultOptions", "defaultValue", "endpoint", "endpointQueryFlag", "hasError", "loadOptions", "isRequired", "name", "options", "selectedOption"]);

  var loadOptionsfromEndpoint = function loadOptionsfromEndpoint(inputValue, callback) {
    axios.get("" + endpoint + (endpointQueryFlag ? "?" + endpointQueryFlag + "=" + inputValue : "")).then(function (_ref13) {
      var data = _ref13.data;
      return callback(data.filter(function (item) {
        return item.label.toLowerCase().includes(inputValue);
      }));
    });
  };

  var Component = /*#__PURE__*/forwardRef(function (data, ref) {
    return async ? /*#__PURE__*/React.createElement(AsyncSelect, _extends({
      defaultOptions: defaultOptions,
      loadOptions: endpoint ? loadOptionsfromEndpoint : loadOptions,
      cacheOptions: cacheOptions,
      ref: ref
    }, data)) : /*#__PURE__*/React.createElement(Select$1, _extends({
      ref: ref
    }, data));
  });
  var As = /*#__PURE__*/React.createElement(Component, _extends({
    options: options,
    selectedOption: selectedOption,
    classNamePrefix: "react-select"
  }, props));
  return /*#__PURE__*/React.createElement(ReactSelectWrapper, _extends({
    hasError: hasError
  }, props), /*#__PURE__*/React.createElement(Controller, {
    as: As,
    control: control,
    defaultValue: defaultValue,
    name: name,
    onChange: function onChange(_ref14) {
      var selected = _ref14[0];
      return selected;
    },
    rules: {
      required: isRequired
    }
  }));
};
ReactSelect.propTypes = ReactSelectPropTypes;
ReactSelect.defaultProps = ReactSelectDefaultProps;

var FormRowPropTypes = _extends({
  children: PropTypes.node.isRequired,
  errors: PropTypes.arrayOf(PropTypes.node).isRequired,
  label: PropTypes.node,
  show: PropTypes.bool.isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FormRowDefaultProps = {
  label: ""
};

function _templateObject4$1() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: ", " 0;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 30% 0;\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$x() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  min-height: 40px;\n  margin-bottom: 8px;\n  ", ";\n\n  ", "\n  ", "\n"]);

  _templateObject$x = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$4 = styled.div(_templateObject$x(), function (_ref) {
  var show = _ref.show;
  return !show && "display: none";
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledLabel$3 = styled(FormLabel)(_templateObject2$8());
var FieldsAndErrorsWrapper = styled.div(_templateObject3$2(), function (_ref2) {
  var fullWidth = _ref2.fullWidth;
  return fullWidth ? "100%" : "50%";
});
var Fields = styled.div(_templateObject4$1());
var FormRow = function FormRow(_ref3) {
  var children = _ref3.children,
      errors = _ref3.errors,
      label = _ref3.label,
      show = _ref3.show,
      props = _objectWithoutPropertiesLoose(_ref3, ["children", "errors", "label", "show"]);

  return /*#__PURE__*/React.createElement(Wrapper$4, _extends({
    show: show
  }, props), label && /*#__PURE__*/React.createElement(StyledLabel$3, null, label), /*#__PURE__*/React.createElement(FieldsAndErrorsWrapper, {
    fullWidth: !label
  }, /*#__PURE__*/React.createElement(Fields, null, children), errors.map(function (err) {
    return /*#__PURE__*/React.createElement(FormError, {
      key: err,
      message: err
    });
  })));
};
FormRow.propTypes = FormRowPropTypes;
FormRow.defaultProps = FormRowDefaultProps;

var renderOptions = function renderOptions(options) {
  return options.map(function (opt) {
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  });
};

var Select = function Select(_ref) {
  var options = _ref.options,
      props = _objectWithoutPropertiesLoose(_ref, ["options"]);

  return /*#__PURE__*/React.createElement(FieldBase, _extends({
    component: "select"
  }, props), renderOptions(options));
};
Select.propTypes = FieldBasePropTypes;
Select.defaultProps = FieldBaseDefaultProps;

var StepperPropTypes = {
  control: PropTypes.object,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["sm", "normal"]),
  value: PropTypes.number
};
var StepperDefaultProps = {
  label: "Days",
  min: 1,
  max: 100,
  name: "stepper",
  size: "normal",
  value: 1
};

function _templateObject$y() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n\n  user-select: none;\n\n  input {\n    border: none;\n    width: 40px;\n    outline: none;\n    font-weight: 600;\n    font-size: 16px;\n    text-align: center;\n  }\n\n  span {\n    font-size: 12px;\n    font-style: italic;\n  }\n"]);

  _templateObject$y = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$5 = styled.div(_templateObject$y(), function (_ref) {
  var size = _ref.size;
  return size === "sm" && css(["flex-direction:column;"]);
});
var StepperComponent = function StepperComponent(_ref2) {
  var label = _ref2.label,
      value = _ref2.value,
      onChange = _ref2.onChange,
      min = _ref2.min,
      max = _ref2.max,
      size = _ref2.size,
      props = _objectWithoutPropertiesLoose(_ref2, ["label", "value", "onChange", "min", "max", "size"]);

  var handleChange = function handleChange(type) {
    var newVal = type === "sub" ? value - 1 : value + 1;
    if (newVal < min || newVal > max) return;
    onChange(newVal);
  };

  return /*#__PURE__*/React.createElement(FieldWrapper, _extends({
    endIcon: "plus",
    endIconColor: "secondary",
    endIconOnClick: function endIconOnClick() {
      return handleChange("add");
    },
    startIcon: "minus",
    startIconColor: "secondary",
    startIconOnClick: function startIconOnClick() {
      return handleChange("sub");
    }
  }, props), /*#__PURE__*/React.createElement(Wrapper$5, {
    size: size
  }, /*#__PURE__*/React.createElement("input", {
    onChange: onChange,
    value: value
  }), /*#__PURE__*/React.createElement("span", null, label)));
};
StepperComponent.propTypes = StepperPropTypes;
StepperComponent.defaultProps = StepperDefaultProps;

var Stepper = function Stepper(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      isRequired = _ref.isRequired,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, ["control", "defaultValue", "isRequired", "name"]);

  return /*#__PURE__*/React.createElement(Controller, {
    render: function render(events) {
      return /*#__PURE__*/React.createElement(StepperComponent, _extends({
        defaultValue: defaultValue
      }, props, events));
    },
    control: control,
    defaultValue: defaultValue,
    name: name,
    rules: {
      required: isRequired
    }
  });
};
Stepper.propTypes = StepperPropTypes;
Stepper.defaultProps = StepperDefaultProps;

function _templateObject2$9() {
  var data = _taggedTemplateLiteralLoose(["\n  background: #fff;\n  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);\n  left: 2px;\n  position: absolute;\n  top: 2px;\n  transition: left 0.2s, transform 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: ", ";\n  text-transform: uppercase;\n  user-select: none;\n\n  ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$z() {
  var data = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  background-color: ", ";\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  transition: background-color 0.2s;\n\n  ", "\n\n    ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject$z = function _templateObject() {
    return data;
  };

  return data;
}

var Switch = function Switch(_ref) {
  var disabled = _ref.disabled,
      handleToggle = _ref.handleToggle,
      size = _ref.size,
      toggled = _ref.toggled,
      props = _objectWithoutPropertiesLoose(_ref, ["disabled", "handleToggle", "size", "toggled"]);

  return /*#__PURE__*/React.createElement(StyledSwitchContainer, _extends({
    disabled: disabled,
    onClick: handleToggle,
    size: size,
    toggled: toggled
  }, props), /*#__PURE__*/React.createElement(StyledSwitch, {
    size: size,
    toggled: toggled
  }, toggled ? "Yes" : "No"));
};

var StyledSwitchContainer = styled.div(_templateObject$z(), function (_ref2) {
  var theme = _ref2.theme,
      toggled = _ref2.toggled;
  return toggled ? theme.palette.primary.main : theme.palette.gray.regular;
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled && css(["opacity:0.3;cursor:not-allowed;pointer-events:none;"]);
}, function (_ref4) {
  var hasError = _ref4.hasError;
  return hasError && css(["border:1px solid ", ";"], function (_ref5) {
    var theme = _ref5.theme;
    return theme.palette.error.main;
  });
}, function (_ref6) {
  var size = _ref6.size;
  return size === "sm" && css(["border-radius:40px;height:20px;width:40px;"]);
}, function (_ref7) {
  var size = _ref7.size;
  return size === "md" && css(["border-radius:35px;height:32px;width:56px;"]);
}, function (_ref8) {
  var size = _ref8.size;
  return size === "lg" && css(["border-radius:100px;height:50px;width:100px;"]);
});
var StyledSwitch = styled.span(_templateObject2$9(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.palette.gray.medium;
}, function (_ref10) {
  var theme = _ref10.theme,
      toggled = _ref10.toggled;
  return toggled && css(["left:calc(100% - 2px);transform:translateX(-100%);color:", ";"], theme.palette.primary.main);
}, function (_ref11) {
  var size = _ref11.size;
  return size === "sm" && css(["border-radius:16px;height:16px;width:16px;"]);
}, function (_ref12) {
  var size = _ref12.size;
  return size === "md" && css(["border-radius:37px;height:28px;width:28px;"]);
}, function (_ref13) {
  var size = _ref13.size;
  return size === "lg" && css(["border-radius:46px;height:46px;width:46px;"]);
});
Switch.propTypes = {
  disabled: bool,
  handleToggle: func,
  size: oneOf(["sm", "md", "lg"]),
  toggled: bool
};
Switch.defaultProps = {
  disabled: false,
  handleToggle: null,
  size: "md",
  toggled: false
};

function _templateObject$A() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  position: relative;\n\n  ", "\n  ", "\n"]);

  _templateObject$A = function _templateObject() {
    return data;
  };

  return data;
}
var StyledToggle = styled.div(_templateObject$A(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Toggle = function Toggle(_ref) {
  var disabled = _ref.disabled,
      onChange = _ref.onChange,
      size = _ref.size,
      value = _ref.value,
      props = _objectWithoutPropertiesLoose(_ref, ["disabled", "onChange", "size", "value"]);

  var handleToggle = function handleToggle() {
    onChange(!value);
  };

  return /*#__PURE__*/React.createElement(StyledToggle, null, /*#__PURE__*/React.createElement(Switch, _extends({
    disabled: disabled,
    handleToggle: !disabled ? handleToggle : undefined,
    size: size,
    toggled: value
  }, props)));
};
Toggle.propTypes = {
  disabled: bool,
  onChange: func,
  size: oneOf(["sm", "md", "lg"]),
  value: bool
};
Toggle.defaultProps = {
  disabled: false,
  onChange: null,
  size: "md",
  value: false
};

var ToggleSwitchPropTypes = _extends({
  control: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.bool,
  isRequired: PropTypes.string,
  name: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ToggleSwitchDefaultProps = {
  defaultValue: undefined,
  isRequired: "",
  name: "toggleSwitch"
};

var ToggleSwitch = function ToggleSwitch(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      isRequired = _ref.isRequired,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, ["control", "defaultValue", "isRequired", "name"]);

  return /*#__PURE__*/React.createElement(Controller, {
    render: function render(events) {
      return /*#__PURE__*/React.createElement(Toggle, _extends({
        defaultValue: defaultValue
      }, props, events));
    },
    control: control,
    defaultValue: defaultValue,
    name: name,
    rules: {
      required: isRequired
    }
  });
};
ToggleSwitch.propTypes = ToggleSwitchPropTypes;
ToggleSwitch.defaultProps = ToggleSwitchDefaultProps;

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-left: ", ";\n  color: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-right: ", ";\n  flex-shrink: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  min-height: 40px;\n\n  :last-child {\n    ", " {\n      border-left-width: 0;\n    }\n  }\n"]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$B() {
  var data = _taggedTemplateLiteralLoose(["\n  border-width: 0;\n  border-style: solid;\n  border-color: ", ";\n  border-left-width: 1px;\n  transition: all 0.1ms ease-in-out;\n  position: absolute;\n  bottom: 0;\n  left: 15px;\n  top: 0;\n  ::before {\n    content: \"\";\n    width: 1px;\n    height: 100%;\n    display: inline-block;\n  }\n"]);

  _templateObject$B = function _templateObject() {
    return data;
  };

  return data;
}
var ItemConnector = styled.div(_templateObject$B(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.regular;
});
var Container$2 = styled.div(_templateObject2$a(), ItemConnector);
var RowWrapper = styled.div(_templateObject3$3());
var RowDetails = styled(Grid).attrs(function () {
  return {
    container: true
  };
})(_templateObject4$2());
var Item$2 = styled(Grid).attrs(function (_ref2) {
  var lg = _ref2.lg;
  return {
    item: true,
    xs: 4,
    lg: lg || 3
  };
})(_templateObject5());
var StyledIcon$1 = styled(Icon)(_templateObject6(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(2);
});
var StyledCollapseButton = styled(CollapseButton)(_templateObject7(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(4);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.text.primary;
});
var Content = styled.div(_templateObject8(), function (_ref6) {
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
      collapseOpen = _useState[0],
      setCollapseOpen = _useState[1];

  return /*#__PURE__*/React.createElement(Container$2, {
    "data-cy": "historyItem"
  }, /*#__PURE__*/React.createElement(ItemConnector, null), /*#__PURE__*/React.createElement(RowWrapper, null, /*#__PURE__*/React.createElement(StyledIcon$1, {
    bordered: true,
    color: iconColor,
    icon: icon
  }), /*#__PURE__*/React.createElement(RowDetails, null, /*#__PURE__*/React.createElement(Item$2, {
    lg: 5
  }, /*#__PURE__*/React.createElement(Text, {
    fontWeight: "bold"
  }, title)), /*#__PURE__*/React.createElement(Item$2, {
    lg: 4
  }, /*#__PURE__*/React.createElement(Text, {
    color: "textSecondary",
    noWrap: true
  }, description)), /*#__PURE__*/React.createElement(Item$2, {
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

var HistoryPropTypes = _extends({
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    moreInfo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string
  })).isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);

function _templateObject$C() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$C = function _templateObject() {
    return data;
  };

  return data;
}
var Container$3 = styled.div(_templateObject$C(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var History = function History(_ref) {
  var rows = _ref.rows,
      props = _objectWithoutPropertiesLoose(_ref, ["rows"]);

  return /*#__PURE__*/React.createElement(Container$3, props, rows.map(function (h) {
    return /*#__PURE__*/React.createElement(HistoryItem, {
      key: h.id,
      data: h
    });
  }));
};
History.propTypes = HistoryPropTypes;

var ImagePropTypes = _extends({
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
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ImageDefaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};

function _templateObject$D() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$D = function _templateObject() {
    return data;
  };

  return data;
}
var Image = function Image(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(StyledImg, _extends({
    itemProp: "contentUrl"
  }, props));
};
var StyledImg = styled.img(_templateObject$D(), function (_ref2) {
  var width = _ref2.width;
  return width && "width: " + width + ";";
}, function (_ref3) {
  var height = _ref3.height;
  return height && "width: " + height + ";";
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

var LanguagePropTypes = _extends({
  languages: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var LanguageDefaultProps = {
  languages: [{
    value: "en",
    label: "English"
  }, {
    value: "de",
    label: "Deutsch"
  }],
  size: "sm"
};

var Language = function Language(_ref) {
  var value = _ref.value,
      languages = _ref.languages,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["value", "languages", "onChange"]);

  var _useState = useState(null),
      anchorEl = _useState[0],
      setAnchorEl = _useState[1];

  var handleClick = function handleClick(val) {
    onChange(val);
  };

  var current = languages.find(function (l) {
    return l.value === value;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextButton, _extends({
    content: current == null ? void 0 : current.label,
    color: "secondary",
    onClick: function onClick(_ref2) {
      var currentTarget = _ref2.currentTarget;
      return setAnchorEl(currentTarget);
    }
  }, props)), /*#__PURE__*/React.createElement(Dropdown, {
    anchorEl: anchorEl,
    items: languages.map(function (l) {
      return _extends({
        onClick: handleClick,
        selected: l.value === (current == null ? void 0 : current.value)
      }, l);
    }),
    open: Boolean(anchorEl),
    onClose: function onClose() {
      return setAnchorEl(null);
    }
  }));
};
Language.propTypes = LanguagePropTypes;
Language.defaultProps = LanguageDefaultProps;

const img$1 = "data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.20827 41.2468C9.85226 41.2468 12.484 44.0937 12.484 47.415C12.484 50.8719 9.85226 53.4477 6.20827 53.4477C2.56429 53.4477 0 50.8719 0 47.415C0 44.0937 2.56429 41.2468 6.20827 41.2468ZM35.9092 6C49.4054 6 60 16.5063 60 29.7916C60 43.0092 49.4054 53.4477 35.9092 53.4477C22.413 53.4477 11.8184 43.0092 11.8184 29.7916C11.8184 16.5063 22.413 6 35.9092 6ZM35.9092 43.2125C43.2647 43.2125 48.8656 37.5188 48.8656 29.7916C48.8656 21.9966 43.2647 16.2351 35.9092 16.2351C28.5538 16.2351 22.9528 21.9966 22.9528 29.7916C22.9528 37.5188 28.5538 43.2125 35.9092 43.2125Z' fill='%23AC00FC'/%3e%3c/svg%3e";

var AuthLayoutHeaderPropTypes = {
  headerLeft: PropTypes.node,
  headerRight: PropTypes.node,
  logoAction: PropTypes.func
};

function _templateObject2$b() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 48px;\n  height: 48px;\n"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$E() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 120px;\n  ", " {\n    height: 96px;\n  }\n"]);

  _templateObject$E = function _templateObject() {
    return data;
  };

  return data;
}
var StyledHeader = styled(Flex).attrs(function () {
  return {
    container: true,
    alignItems: "center",
    justify: "space-between"
  };
})(_templateObject$E(), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.down("md");
});
var StyledLogo = styled(Image).attrs(function () {
  return {
    alt: "Logo",
    src: img$1
  };
})(_templateObject2$b());
var AuthLayoutHeader = function AuthLayoutHeader(_ref2) {
  var headerLeft = _ref2.headerLeft,
      headerRight = _ref2.headerRight,
      logoAction = _ref2.logoAction,
      props = _objectWithoutPropertiesLoose(_ref2, ["headerLeft", "headerRight", "logoAction"]);

  var backButton = /*#__PURE__*/React.createElement(TextButton, {
    color: "secondary",
    size: "sm"
  }, "Back");
  return /*#__PURE__*/React.createElement(StyledHeader, props, /*#__PURE__*/React.createElement(Flex, {
    item: true
  }, headerLeft || backButton), /*#__PURE__*/React.createElement(Flex, {
    item: true
  }, /*#__PURE__*/React.createElement(StyledLogo, {
    onClick: logoAction
  })), /*#__PURE__*/React.createElement(Flex, {
    item: true
  }, headerRight));
};
AuthLayoutHeader.propTypes = AuthLayoutHeaderPropTypes;

var AuthLayoutPropTypes = {
  content: PropTypes.node.isRequired,
  headerLeft: PropTypes.node,
  headerLogoAction: PropTypes.func,
  headerRight: PropTypes.node
};

function _templateObject2$c() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  width: 100%;\n  padding-top: ", ";\n"]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$F() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100%;\n"]);

  _templateObject$F = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContainer$1 = styled(MuiContainer)(_templateObject$F());
var Content$1 = styled.div(_templateObject2$c(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(20);
});
var AuthLayout = function AuthLayout(_ref2) {
  var content = _ref2.content,
      headerLeft = _ref2.headerLeft,
      headerLogoAction = _ref2.headerLogoAction,
      headerRight = _ref2.headerRight,
      props = _objectWithoutPropertiesLoose(_ref2, ["content", "headerLeft", "headerLogoAction", "headerRight"]);

  return /*#__PURE__*/React.createElement(StyledContainer$1, props, /*#__PURE__*/React.createElement(Flex, {
    container: true,
    direction: "column",
    lg: 4,
    md: 6,
    xs: 12,
    mAuto: true,
    h100: true
  }, /*#__PURE__*/React.createElement(AuthLayoutHeader, {
    headerLeft: headerLeft,
    headerLogoAction: headerLogoAction,
    headerRight: headerRight
  }), /*#__PURE__*/React.createElement(Content$1, null, content)));
};
AuthLayout.propTypes = AuthLayoutPropTypes;
AuthLayout.defaultProps = {};

var ExplorerLayoutFooterPropTypes = {
  children: PropTypes.node
};

function _templateObject$G() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  height: 80px;\n  text-align: center;\n  padding-top: ", ";\n"]);

  _templateObject$G = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFooter = styled.div(_templateObject$G(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var ExplorerLayoutFooter = function ExplorerLayoutFooter(_ref2) {
  var action = _ref2.action,
      props = _objectWithoutPropertiesLoose(_ref2, ["action"]);

  return /*#__PURE__*/React.createElement(StyledFooter, props);
};
ExplorerLayoutFooter.propTypes = ExplorerLayoutFooterPropTypes;

const img$2 = "data:image/svg+xml,%3csvg width='194' height='60' viewBox='0 0 194 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M86.0961 52.0601C88.0083 52.0601 89.3892 53.5534 89.3892 55.2955C89.3892 57.1088 88.0083 58.4599 86.0961 58.4599C84.184 58.4599 82.8384 57.1088 82.8384 55.2955C82.8384 53.5534 84.184 52.0601 86.0961 52.0601Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M103.965 40.1848C104.461 40.1848 104.815 40.2204 105.24 40.327L104.992 46.0158H103.965C99.9993 46.0158 97.8393 48.0779 97.8393 52.7V58.2821H92.1737V40.4337H97.8393V43.8469C99.114 41.7136 101.062 40.1848 103.965 40.1848Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M120.118 33.9272C127.2 33.9272 132.76 39.4382 132.76 46.4069C132.76 53.34 127.2 58.8155 120.118 58.8155C113.037 58.8155 107.477 53.34 107.477 46.4069C107.477 39.4382 113.037 33.9272 120.118 33.9272ZM120.118 53.4467C123.978 53.4467 126.917 50.4601 126.917 46.4069C126.917 42.3181 123.978 39.2959 120.118 39.2959C116.259 39.2959 113.32 42.3181 113.32 46.4069C113.32 50.4601 116.259 53.4467 120.118 53.4467Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M144.587 53.8378C146.392 53.8378 147.844 52.8778 148.446 50.709L153.651 51.8467C152.766 56.0777 149.013 58.8154 144.587 58.8154C139.275 58.8154 134.884 55.0111 134.884 49.3579C134.884 43.7403 139.275 39.9003 144.587 39.9003C148.907 39.9003 152.66 42.5669 153.651 46.7624L148.34 48.0424C147.844 45.8735 146.392 44.878 144.587 44.878C142.037 44.878 140.337 46.7624 140.337 49.3579C140.337 51.9889 142.037 53.8378 144.587 53.8378Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M175.992 58.2821H168.733L162.961 51.8467H161.934V58.2821H156.269V32.6828H161.934V46.5135H162.713L168.343 40.4337H175.177L167.387 48.9312L175.992 58.2821Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M176.087 53.6483L181.611 52.5105C181.859 54.0394 183.24 54.6083 184.762 54.6083C186.25 54.6083 187.064 53.9683 187.064 53.1861C187.064 52.5817 186.604 52.1194 185.294 51.8706L181.682 51.1595C178.389 50.555 176.512 48.7773 176.512 45.9685C176.512 42.3064 179.663 39.9242 184.16 39.9242C188.587 39.9242 191.526 41.9508 192.234 45.0441L187.064 46.0752C186.887 44.973 185.825 43.9774 184.09 43.9774C182.567 43.9774 182.071 44.7241 182.071 45.3641C182.071 45.8618 182.284 46.3596 183.417 46.6085L187.595 47.4618C190.959 48.1729 192.517 50.1995 192.517 52.8305C192.517 56.7771 189.118 58.8393 184.444 58.8393C180.265 58.8393 176.689 57.3104 176.087 53.6483Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M79.4906 27.4174H73.825V1.81807H79.4906V27.4174Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M88.9289 27.4174H83.2634V9.569H88.9289V27.4174Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M86.0961 1.07143C88.0083 1.07143 89.3892 2.56472 89.3892 4.3069C89.3892 6.12019 88.0083 7.47127 86.0961 7.47127C84.184 7.47127 82.8384 6.12019 82.8384 4.3069C82.8384 2.56472 84.184 1.07143 86.0961 1.07143Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M101.853 22.9731C103.659 22.9731 105.111 22.0131 105.713 19.8443L110.918 20.982C110.033 25.213 106.28 27.9507 101.853 27.9507C96.542 27.9507 92.1512 24.1464 92.1512 18.4932C92.1512 12.8756 96.542 9.03566 101.853 9.03566C106.173 9.03566 109.927 11.7023 110.918 15.8977L105.607 17.1777C105.111 15.0088 103.659 14.0133 101.853 14.0133C99.3039 14.0133 97.6043 15.8977 97.6043 18.4932C97.6043 21.1242 99.3039 22.9731 101.853 22.9731Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M131.601 18.4932V19.9509H118.57C119.03 22.0842 120.482 23.3997 122.394 23.3997C123.704 23.3997 125.227 23.0798 126.183 21.3376L131.211 22.3687C129.689 26.1375 126.466 27.9507 122.394 27.9507C117.26 27.9507 113.011 24.1464 113.011 18.4932C113.011 12.8756 117.26 9.03566 122.43 9.03566C127.458 9.03566 131.495 12.6622 131.601 18.4932ZM122.43 13.6578C120.836 13.6578 119.207 14.6533 118.676 16.4666H126.006C125.475 14.5466 124.059 13.6578 122.43 13.6578Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M145.659 9.03566C149.801 9.03566 152.563 11.9867 152.563 16.4666V27.4174H146.933V17.6754C146.933 15.5777 145.694 14.1555 143.888 14.1555C141.657 14.1555 140.205 15.6844 140.205 19.1332V27.4174H134.54V9.56898H140.205V11.2756C141.551 9.85342 143.428 9.03566 145.659 9.03566Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M155.219 22.7598L160.743 21.622C160.991 23.1509 162.372 23.7197 163.895 23.7197C165.382 23.7197 166.196 23.0798 166.196 22.2975C166.196 21.6931 165.736 21.2309 164.426 20.982L160.814 20.2709C157.521 19.6665 155.644 17.8888 155.644 15.08C155.644 11.4178 158.796 9.03566 163.293 9.03566C167.719 9.03566 170.658 11.0623 171.366 14.1555L166.196 15.1866C166.019 14.0844 164.957 13.0889 163.222 13.0889C161.699 13.0889 161.203 13.8355 161.203 14.4755C161.203 14.9733 161.416 15.4711 162.549 15.7199L166.727 16.5732C170.091 17.2843 171.649 19.311 171.649 21.942C171.649 25.8886 168.25 27.9507 163.576 27.9507C159.397 27.9507 155.821 26.4219 155.219 22.7598Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M192.403 18.4932V19.9509H179.372C179.832 22.0842 181.284 23.3997 183.196 23.3997C184.506 23.3997 186.029 23.0798 186.985 21.3376L192.013 22.3687C190.49 26.1375 187.268 27.9507 183.196 27.9507C178.062 27.9507 173.812 24.1464 173.812 18.4932C173.812 12.8756 178.062 9.03566 183.231 9.03566C188.26 9.03566 192.296 12.6622 192.403 18.4932ZM183.231 13.6578C181.638 13.6578 180.009 14.6533 179.478 16.4666H186.808C186.277 14.5466 184.86 13.6578 183.231 13.6578Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.58723 46.6197C11.4115 46.6197 14.1734 49.6063 14.1734 53.0907C14.1734 56.7172 11.4115 59.4194 7.58723 59.4194C3.76298 59.4194 1.07184 56.7172 1.07184 53.0907C1.07184 49.6063 3.76298 46.6197 7.58723 46.6197ZM38.7574 9.64285C52.9213 9.64285 64.04 20.6648 64.04 34.6022C64.04 48.4685 52.9213 59.4194 38.7574 59.4194C24.5936 59.4194 13.4749 48.4685 13.4749 34.6022C13.4749 20.6648 24.5936 9.64285 38.7574 9.64285ZM38.7574 48.6819C46.4768 48.6819 52.3548 42.7087 52.3548 34.6022C52.3548 26.4247 46.4768 20.3804 38.7574 20.3804C31.0381 20.3804 25.1601 26.4247 25.1601 34.6022C25.1601 42.7087 31.0381 48.6819 38.7574 48.6819Z' fill='%23AC00FC'/%3e%3c/svg%3e";

var ExplorerLayoutHeaderPropTypes = {
  headerRight: PropTypes.node,
  logoAction: PropTypes.func
};

function _templateObject2$d() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 155px;\n  ", " {\n    width: 103px;\n  }\n"]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$H() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 128px;\n  ", " {\n    height: 96px;\n  }\n"]);

  _templateObject$H = function _templateObject() {
    return data;
  };

  return data;
}
var StyledHeader$1 = styled(Grid).attrs(function () {
  return {
    container: true,
    alignItems: "center"
  };
})(_templateObject$H(), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.down("md");
});
var StyledLogo$1 = styled(Image).attrs(function () {
  return {
    alt: "Logo",
    src: img$2
  };
})(_templateObject2$d(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.down("md");
});
var ExplorerLayoutHeader = function ExplorerLayoutHeader(_ref3) {
  var headerRight = _ref3.headerRight,
      logoAction = _ref3.logoAction,
      props = _objectWithoutPropertiesLoose(_ref3, ["headerRight", "logoAction"]);

  return /*#__PURE__*/React.createElement(StyledHeader$1, props, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 9,
    xs: 6
  }, /*#__PURE__*/React.createElement(StyledLogo$1, {
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
  ads: PropTypes.node,
  content: PropTypes.node.isRequired,
  extraContent: PropTypes.node,
  extraSidebar: PropTypes.node,
  footerContent: PropTypes.node,
  headerLogoAction: PropTypes.func,
  headerRight: PropTypes.node,
  sidebar: PropTypes.node
};

function _templateObject$I() {
  var data = _taggedTemplateLiteralLoose(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n  ", " {\n    padding-top: ", ";\n  }\n"]);

  _templateObject$I = function _templateObject() {
    return data;
  };

  return data;
}
var Content$2 = styled(Grid).attrs(function () {
  return {
    container: true
  };
})(_templateObject$I(), function (_ref) {
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
  var ads = _ref5.ads,
      content = _ref5.content,
      extraContent = _ref5.extraContent,
      extraSidebar = _ref5.extraSidebar,
      footerContent = _ref5.footerContent,
      headerLogoAction = _ref5.headerLogoAction,
      headerRight = _ref5.headerRight,
      sidebar = _ref5.sidebar,
      props = _objectWithoutPropertiesLoose(_ref5, ["ads", "content", "extraContent", "extraSidebar", "footerContent", "headerLogoAction", "headerRight", "sidebar"]);

  return /*#__PURE__*/React.createElement(MuiContainer, props, /*#__PURE__*/React.createElement(ExplorerLayoutHeader, {
    logoAction: headerLogoAction,
    headerRight: headerRight
  }), /*#__PURE__*/React.createElement(Content$2, null, /*#__PURE__*/React.createElement(Hidden, {
    mdDown: true
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 9
  }, content, extraContent), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 3
  }, sidebar, extraSidebar, ads)), /*#__PURE__*/React.createElement(Hidden, {
    lgUp: true
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12
  }, content), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    alignItems: "center",
    justify: "space-between",
    spacing: 4
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    md: 6,
    xs: 12
  }, sidebar), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    md: 6,
    xs: 12
  }, extraSidebar)), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12
  }, extraContent, ads))), footerContent && /*#__PURE__*/React.createElement(ExplorerLayoutFooter, null, footerContent || poweredBy));
};
ExplorerLayout.propTypes = ExplorerLayoutPropTypes;
ExplorerLayout.defaultProps = {
  footerContent: poweredBy
};

function _templateObject5$1() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  z-index: 1;\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    justify-content: ", ";\n  }\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n  background-color: white;\n  && {\n    color: ", ";\n  }\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$e() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    font-size: 16px;\n    font-weight: 500;\n    color: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: ", "px;\n  }\n"]);

  _templateObject2$e = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$J() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    padding: 0;\n    &:first-child {\n      padding-top: 0;\n    }\n  }\n"]);

  _templateObject$J = function _templateObject() {
    return data;
  };

  return data;
}
var ContentWrapper = styled(DialogContent).attrs(function () {
  return {
    dividers: true
  };
})(_templateObject$J());
var Title = styled(DialogTitle).attrs(function () {
  return {
    disableTypography: true
  };
})(_templateObject2$e(), function (_ref) {
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
})(_templateObject3$4(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.secondary.dark;
});
var Actions = styled(DialogActions)(_templateObject4$3(), function (_ref4) {
  var hasDesc = _ref4.hasDesc;
  return hasDesc ? "space-between" : "flex-end";
});
var LoadingWrapper = styled.div(_templateObject5$1(), function (_ref5) {
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
      props = _objectWithoutPropertiesLoose(_ref6, ["action", "actionDescription", "actionLoading", "actionTitle", "dataCy", "fullScreen", "isOpen", "loading", "onClose", "children", "maxWidth", "title", "disabled"]);

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

function _templateObject$K() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n\n  && {\n    width: 40px;\n    height: 40px;\n    background-color: ", ";\n    svg {\n      color: ", ";\n    }\n\n    :hover {\n      background-color: ", ";\n\n      svg {\n        color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject$K = function _templateObject() {
    return data;
  };

  return data;
}
var Button$1 = styled(ButtonBase)(_templateObject$K(), function (_ref) {
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

var ShareModulePropTypes = _extends({
  copyText: PropTypes.string,
  shareOptions: PropTypes.arrayOf(PropTypes.oneOf(SHARE_MODULE_SHARE_OPTIONS)),
  url: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ShareModuleDefaultProps = {
  copyText: "Or copy the link",
  shareOptions: SHARE_MODULE_SHARE_OPTIONS,
  url: "#"
};

function _templateObject3$5() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    ", "\n  }\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$f() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: ", ";\n"]);

  _templateObject2$f = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$L() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$L = function _templateObject() {
    return data;
  };

  return data;
}
var Container$4 = styled.div(_templateObject$L(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var ButtonsWrapper = styled.div(_templateObject2$f(), function (_ref) {
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
})(_templateObject3$5(), function (_ref2) {
  var spacing = _ref2.theme.spacing;
  return css(["margin:", ";"], spacing(2, 0));
});
var ShareModule = function ShareModule(_ref3) {
  var _window, _window$navigator, _window2, _window2$navigator;

  var copyText = _ref3.copyText,
      shareOptions = _ref3.shareOptions,
      url = _ref3.url,
      props = _objectWithoutPropertiesLoose(_ref3, ["copyText", "shareOptions", "url"]);

  var theme = useTheme();
  var navigatorShare = typeof window !== "undefined" && ((_window = window) == null ? void 0 : (_window$navigator = _window.navigator) == null ? void 0 : _window$navigator.share) ? (_window2 = window) == null ? void 0 : (_window2$navigator = _window2.navigator) == null ? void 0 : _window2$navigator.share : null;
  return /*#__PURE__*/React.createElement(Container$4, props, /*#__PURE__*/React.createElement(ButtonsWrapper, null, shareOptions.includes("twitter") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "twitter",
    href: "https://twitter.com/intent/tweet?url=" + url
  }), shareOptions.includes("facebook") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "facebook-f",
    href: "https://www.facebook.com/sharer.php?u=" + url
  }), shareOptions.includes("telegram") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "telegram-plane",
    href: "tg://msg?text=" + url
  }), shareOptions.includes("whatsapp") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "whatsapp",
    href: "whatsapp://send?" + url
  }), shareOptions.includes("email") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "envelope",
    iconPrefix: theme.defaultIconSet,
    href: "mailto:?body=" + url
  }), shareOptions.includes("navigator") && navigatorShare && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "ellipsis-h",
    iconPrefix: theme.defaultIconSet,
    onClick: function onClick() {
      return navigatorShare({
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

var DotsSpinnerPropTypes = _extends({
  size: PropTypes.number
}, COLOR_PROP_TYPES, DISPLAY_PROP_TYPES, DIMENSION_PROP_TYPES, SPACER_PROP_TYPES);
var DotsSpinnerDefaultProps = {
  size: 60
};

function _templateObject$M() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > div {\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n    animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  }\n\n  .bounce1 {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n  }\n\n  .bounce2 {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n  }\n\n  @-webkit-keyframes sk-bouncedelay {\n    0%, 80%, 100% { -webkit-transform: scale(0) }\n    40% { -webkit-transform: scale(1.0) }\n  }\n\n  @keyframes sk-bouncedelay {\n    0%, 80%, 100% {\n      -webkit-transform: scale(0);\n      transform: scale(0);\n    } 40% {\n      -webkit-transform: scale(1.0);\n      transform: scale(1.0);\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$M = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDotsSpinner = styled.div(_templateObject$M(), function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size / 4;
}, function (_ref3) {
  var size = _ref3.size;
  return size / 4;
}, function (_ref4) {
  var color = _ref4.color,
      theme = _ref4.theme;
  return color || theme.palette.primary.main;
}, function (theme) {
  return COLOR(theme);
}, function (theme) {
  return DIMENSION(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var DotsSpinner = function DotsSpinner(props) {
  return /*#__PURE__*/React.createElement(StyledDotsSpinner, props, /*#__PURE__*/React.createElement("div", {
    className: "bounce1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bounce2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bounce3"
  }));
};
DotsSpinner.propTypes = DotsSpinnerPropTypes;
DotsSpinner.defaultProps = DotsSpinnerDefaultProps;

var RocksSpinnerPropTypes = _extends({
  size: PropTypes.number
}, COLOR_PROP_TYPES, DISPLAY_PROP_TYPES, DIMENSION_PROP_TYPES, SPACER_PROP_TYPES);
var RocksSpinnerDefaultProps = {
  size: 60
};

function _templateObject$N() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", "px;\n  height: ", "px;\n  position: relative;\n\n  .dot {\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n    border-radius: 100%;\n    position: absolute;\n    bottom: 5px;\n    left: 0;\n\n    -webkit-animation: bounce 2.0s infinite ease-in-out;\n    animation: bounce 2.0s infinite ease-in-out;\n  }\n\n  .circle {\n    width: ", "px;\n    height: ", "px;\n    border: ", "px solid ", ";\n    border-radius: 100%;\n    position: absolute;\n    top: 5px;\n    right: 0;\n\n    -webkit-animation: bounce 2.0s infinite ease-in-out;\n    animation: bounce 2.0s infinite ease-in-out;\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s;\n  }\n\n  @-webkit-keyframes bounce {\n    0%, 100% { -webkit-transform: scale(0.0) }\n    50% { -webkit-transform: scale(1.0) }\n  }\n\n  @keyframes bounce {\n    0%, 100% {\n      transform: scale(0.0);\n      -webkit-transform: scale(0.0);\n    } 50% {\n      transform: scale(1.0);\n      -webkit-transform: scale(1.0);\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$N = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRocksSpinner = styled.div(_templateObject$N(), function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var size = _ref3.size;
  return size / 6;
}, function (_ref4) {
  var size = _ref4.size;
  return size / 6;
}, function (_ref5) {
  var color = _ref5.color,
      theme = _ref5.theme;
  return color || theme.palette.primary.main;
}, function (_ref6) {
  var size = _ref6.size;
  return size - 12;
}, function (_ref7) {
  var size = _ref7.size;
  return size - 12;
}, function (_ref8) {
  var size = _ref8.size;
  return size / 6;
}, function (_ref9) {
  var color = _ref9.color,
      theme = _ref9.theme;
  return color || theme.palette.primary.main;
}, function (theme) {
  return COLOR(theme);
}, function (theme) {
  return DIMENSION(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var RocksSpinner = function RocksSpinner(props) {
  return /*#__PURE__*/React.createElement(StyledRocksSpinner, props, /*#__PURE__*/React.createElement("div", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "circle"
  }));
};
RocksSpinner.propTypes = RocksSpinnerPropTypes;
RocksSpinner.defaultProps = RocksSpinnerDefaultProps;

var TabPropTypes = _extends({
  currentTab: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    showTab: PropTypes.bbol
  })).isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);

function _templateObject3$6() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    text-transform: initial;\n  }\n"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$g() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    min-height: fit-content;\n\n    .MuiTab-root {\n      min-height: 24px;\n    }\n  }\n\n  .MuiTabs-indicator {\n    display: none;\n  }\n\n  button {\n    min-width: fit-content;\n    margin-right: ", ";\n    padding: 0;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 120%;\n\n    &.Mui-selected {\n      font-weight: 600;\n    }\n  }\n\n  .Mui-selected {\n    &::after {\n      content: \"\";\n      position: absolute;\n      width: 100%;\n      left: 0;\n      bottom: 0;\n      height: 2px;\n      background-color: ", ";\n      border-radius: 2px 2px 0 0;\n    }\n  }\n"]);

  _templateObject2$g = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$O() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-bottom: ", ";\n  ", "\n  ", "\n"]);

  _templateObject$O = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$6 = styled.div(_templateObject$O(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledTabs = styled(MuiTabs)(_templateObject2$g(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(5);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.main;
});
var StyledTab = styled(MuiTab)(_templateObject3$6());
var Tab = function Tab(_ref4) {
  var tabs = _ref4.tabs,
      currentTab = _ref4.currentTab,
      _onChange = _ref4.onChange,
      props = _objectWithoutPropertiesLoose(_ref4, ["tabs", "currentTab", "onChange"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Wrapper$6, props, /*#__PURE__*/React.createElement(StyledTabs, {
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

function _templateObject2$h() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 500px;\n  max-width: 500px;\n  user-select: none;\n"]);

  _templateObject2$h = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$P() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-radius: 100%;\n  && {\n    margin: ", ";\n  }\n"]);

  _templateObject$P = function _templateObject() {
    return data;
  };

  return data;
}
var CloseModalIcon$1 = styled(Icon).attrs(function () {
  return {
    size: "lg"
  };
})(_templateObject$P(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
});
var StyledImg$1 = styled(Image)(_templateObject2$h());
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

var ThumbnailPropTypes = _extends({
  hasPreview: PropTypes.bool,
  imgSrc: PropTypes.string,
  onClick: PropTypes.func
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ThumbnailDefaultProps = {
  hasPreview: false,
  onClick: function onClick() {},
  imgSrc: ""
};

function _templateObject3$7() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$i() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.1s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  :hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"]);

  _templateObject2$i = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$Q() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  height: 48px;\n  width: 48px;\n  text-align: center;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"]);

  _templateObject$Q = function _templateObject() {
    return data;
  };

  return data;
}
var Container$5 = styled.div(_templateObject$Q(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var IconWrapper = styled.div(_templateObject2$i());
var StyledIcon$2 = styled(Icon)(_templateObject3$7(), function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return !color && theme.palette.common.white;
});
var Thumbnail = function Thumbnail(_ref3) {
  var hasPreview = _ref3.hasPreview,
      imgSrc = _ref3.imgSrc,
      onClick = _ref3.onClick,
      props = _objectWithoutPropertiesLoose(_ref3, ["hasPreview", "imgSrc", "onClick"]);

  var _useState = useState(false),
      loadError = _useState[0],
      setLoadError = _useState[1];

  var _useState2 = useState(false),
      previewOpen = _useState2[0],
      setPreviewOpen = _useState2[1];

  var handleClick = function handleClick() {
    if (hasPreview) setPreviewOpen(true);else onClick();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Container$5, _extends({
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

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
var classNamesShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;

var TransitionGroupContext = React.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps))
    );
  };

  return Transition;
}(React.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : PropTypes.instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

function _templateObject3$8() {
  var data = _taggedTemplateLiteralLoose(["\n  font-style: italic;\n  font-weight: normal;\n  font-size: 14px;\n  color: ", ";\n  margin-left: 8px;\n"]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$j() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 0;\n"]);

  _templateObject2$j = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$R() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  padding: 24px 24px 24px 40px;\n  transition: all ", "ms ease-in-out;\n\n  ", ";\n"]);

  _templateObject$R = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContent = styled.div(_templateObject$R(), function (_ref) {
  var duration = _ref.duration;
  return duration / 2;
}, function (_ref2) {
  var state = _ref2.state;

  switch (state) {
    case "entering":
    case "exited":
      return css(["-webkit-filter:blur(1rem);filter:blur(1rem);"]);

    default:
      return css(["-webkit-filter:blur(0);filter:blur(0);"]);
  }
});
var ActionWrapper = styled.div(_templateObject2$j());
var StepHint = styled.span(_templateObject3$8(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.gray.medium;
});
var duration = 500;
var WizardStepContent = function WizardStepContent(_ref4) {
  var children = _ref4.children,
      content = _ref4.content,
      currentStep = _ref4.currentStep,
      handleNext = _ref4.handleNext,
      handlePrev = _ref4.handlePrev,
      isFirstStep = _ref4.isFirstStep,
      isLastStep = _ref4.isLastStep,
      nextStepMethod = _ref4.nextStepMethod,
      stepCount = _ref4.stepCount,
      props = _objectWithoutPropertiesLoose(_ref4, ["children", "content", "currentStep", "handleNext", "handlePrev", "isFirstStep", "isLastStep", "nextStepMethod", "stepCount"]);

  var _useState = useState(false),
      mounted = _useState[0],
      setMounted = _useState[1];

  useEffect(function () {
    setMounted(true);
    return function () {
      setMounted(false);
    };
  }, []);
  return /*#__PURE__*/React.createElement(Transition, {
    in: mounted,
    timeout: duration,
    unmountOnExit: true
  }, function (state) {
    return /*#__PURE__*/React.createElement(StyledContent, _extends({
      duration: duration,
      state: state
    }, props), children || content, /*#__PURE__*/React.createElement(ActionWrapper, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OutlineButton, {
      color: "secondary",
      disabled: isFirstStep,
      onClick: handlePrev,
      px: 2
    }, /*#__PURE__*/React.createElement(Icon, {
      color: "secondary",
      icon: "arrow-left"
    })), /*#__PURE__*/React.createElement(StepHint, null, currentStep + " of " + stepCount + " steps")), /*#__PURE__*/React.createElement(Button, {
      content: isLastStep ? "Finish" : "Next",
      onClick: nextStepMethod === "button" ? handleNext : undefined,
      type: nextStepMethod // disabled

    })));
  });
};
WizardStepContent.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  currentStep: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
  nextStepMethod: PropTypes.string.isRequired,
  stepCount: PropTypes.number.isRequired
};
WizardStepContent.defaultProps = {
  children: null,
  content: null
};

var stepBorderAndTitleColor = function stepBorderAndTitleColor(_ref) {
  var isActive = _ref.isActive,
      isPassed = _ref.isPassed,
      theme = _ref.theme;
  if (isActive) return theme.palette.primary.main;
  if (isPassed) return theme.palette.gray.dark;
  return theme.palette.gray.medium;
};
var stepFlagColor = function stepFlagColor(_ref2) {
  var isActive = _ref2.isActive,
      isPassed = _ref2.isPassed,
      theme = _ref2.theme;
  if (isActive || isPassed) return theme.palette.common.white;
  return theme.palette.gray.medium;
};
var stepFlagBackgroundColor = function stepFlagBackgroundColor(_ref3) {
  var isActive = _ref3.isActive,
      isPassed = _ref3.isPassed,
      theme = _ref3.theme;
  if (isActive) return theme.palette.primary.main;
  if (isPassed) return theme.palette.gray.dark;
  return theme.palette.gray.regular;
};

function _templateObject3$9() {
  var data = _taggedTemplateLiteralLoose(["\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 120%;\n  color: ", ";\n  padding-left: 8px;\n  transition: all ", "\n    ease-in-out;\n  ", "\n"]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$k() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 100%;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 120%;\n  z-index: 1;\n  transition: all ", "\n    ease-in-out;\n"]);

  _templateObject2$k = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$S() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: normal;\n\n  ", "\n\n  ", "\n"]);

  _templateObject$S = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTitle = styled.div(_templateObject$S(), function (_ref) {
  var isPassed = _ref.isPassed;
  return isPassed && css(["cursor:pointer;"]);
}, function (_ref2) {
  var isHorizontal = _ref2.isHorizontal;
  return isHorizontal && css(["flex-direction:column;align-items:flex-start;"]);
});
var Flag = styled.div(_templateObject2$k(), function (props) {
  return stepFlagBackgroundColor(props);
}, function (props) {
  return stepFlagColor(props);
}, function (_ref3) {
  var transitionDuration = _ref3.transitionDuration;
  return transitionDuration + "ms";
});
var Label$1 = styled.span(_templateObject3$9(), function (props) {
  return stepBorderAndTitleColor(props);
}, function (_ref4) {
  var transitionDuration = _ref4.transitionDuration;
  return transitionDuration + "ms";
}, function (_ref5) {
  var isHorizontal = _ref5.isHorizontal;
  return isHorizontal && css(["font-size:12px;padding:4px 4px 0 0;"]);
});
var WizardStepTitle = function WizardStepTitle(_ref6) {
  var isActive = _ref6.isActive,
      isHorizontal = _ref6.isHorizontal,
      isPassed = _ref6.isPassed,
      label = _ref6.label,
      flag = _ref6.flag,
      onClick = _ref6.onClick,
      transitionDuration = _ref6.transitionDuration;
  return /*#__PURE__*/React.createElement(StyledTitle, {
    onClick: onClick,
    isHorizontal: isHorizontal,
    isPassed: isPassed
  }, /*#__PURE__*/React.createElement(Flag, {
    isActive: isActive,
    isPassed: isPassed,
    transitionDuration: transitionDuration
  }, isPassed ? /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "passed-step"
  }) : flag), /*#__PURE__*/React.createElement(Label$1, {
    isActive: isActive,
    isHorizontal: isHorizontal,
    isPassed: isPassed,
    transitionDuration: transitionDuration
  }, label));
};
WizardStepTitle.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isHorizontal: PropTypes.bool.isRequired,
  isPassed: PropTypes.bool.isRequired,
  label: PropTypes.node.isRequired,
  flag: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  transitionDuration: PropTypes.number.isRequired
};
WizardStepTitle.defaultProps = {
  onClick: function onClick() {}
};

var WizardPropTypes = _extends({
  currentStepContent: PropTypes.node.isRequired,
  currentStepIndex: PropTypes.number.isRequired,
  nextStepMethod: PropTypes.oneOf(["submit", "button"]),
  orientation: PropTypes.string,
  setCurrentStepIndex: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  transitionDuration: PropTypes.number
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var WizardDefaultProps = {
  nextStepMethod: "submit",
  orientation: "horizontal",
  transitionDuration: 250
};

var handleScroll = function handleScroll(el) {
  var slider = el;
  var isDown = false;
  var startX;
  var sl;
  slider.addEventListener("mousedown", function (e) {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    sl = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", function () {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", function () {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", function (e) {
    if (!isDown) return;
    e.preventDefault();
    slider.classList.add("active");
    var x = e.pageX - slider.offsetLeft;
    var walk = x - startX;
    slider.scrollLeft = sl - walk;
  });
};

function _templateObject5$2() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  position: relative;\n  min-height: 60px;\n\n  :last-child {\n    ", " {\n      ", ";\n    }\n  }\n\n  ", "\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteralLoose(["\n  border-width: 0;\n  border-style: dashed;\n  border-color: ", ";\n  border-left-width: 2px;\n  transition: all ", "\n    ease-in-out;\n  position: absolute;\n  top: 0;\n  left: 15px;\n  bottom: 0;\n  ::before {\n    content: \"\";\n    width: 2px;\n    height: 100%;\n    display: inline-block;\n  }\n\n  ", "\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$a() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject3$a = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$l() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject2$l = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$T() {
  var data = _taggedTemplateLiteralLoose(["\n  max-width: 680px;\n  margin: auto;\n\n  ", "\n  ", "\n"]);

  _templateObject$T = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$7 = styled.div(_templateObject$T(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StepsWrapper = styled.div(_templateObject2$l(), function (_ref) {
  var isHorizontal = _ref.isHorizontal;
  return isHorizontal && css(["position:relative;::before{content:\"\";display:inline-block;width:80px;height:100%;background:linear-gradient( 270deg,#ffffff 0%,rgba(255,255,255,0) 100% );transform:rotate(-180deg);position:absolute;top:0;left:0;z-index:2;}::after{content:\"\";display:inline-block;width:80px;height:100%;background:linear-gradient( 270deg,#ffffff 0%,rgba(255,255,255,0) 100% );position:absolute;top:0;right:0;z-index:2;}"]);
});
var Steps = styled.div(_templateObject3$a(), function (_ref2) {
  var isHorizontal = _ref2.isHorizontal;
  return isHorizontal && css(["display:flex;align-items:center;justify-content:flex-start;white-space:nowrap;overflow-y:hidden;overflow-x:scroll;padding:0 64px;user-select:none;-ms-overflow-style:none;&&::-webkit-scrollbar{display:none;}&.active{cursor:grabbing;cursor:-webkit-grabbing;}"]);
});
var StepConnector = styled.div(_templateObject4$4(), function (props) {
  return stepBorderAndTitleColor(props);
}, function (_ref3) {
  var transitionDuration = _ref3.transitionDuration;
  return transitionDuration + "ms";
}, function (_ref4) {
  var isHorizontal = _ref4.isHorizontal;
  return isHorizontal && css(["width:100%;border-left-width:0;border-top-width:2px;top:15px;left:8px;::before{content:\"\";width:100%;height:2px;display:inline-block;}"]);
});
var Step = styled.div(_templateObject5$2(), StepConnector, function (_ref5) {
  var isActive = _ref5.isActive,
      isHorizontal = _ref5.isHorizontal;
  return (!isActive || isHorizontal) && "border: none";
}, function (_ref6) {
  var isHorizontal = _ref6.isHorizontal;
  return isHorizontal && css(["width:100px;min-width:100px;"]);
});
var Wizard = function Wizard(_ref7) {
  var currentStepContent = _ref7.currentStepContent,
      currentStepIndex = _ref7.currentStepIndex,
      nextStepMethod = _ref7.nextStepMethod,
      orientation = _ref7.orientation,
      setCurrentStepIndex = _ref7.setCurrentStepIndex,
      steps = _ref7.steps,
      transitionDuration = _ref7.transitionDuration,
      props = _objectWithoutPropertiesLoose(_ref7, ["currentStepContent", "currentStepIndex", "nextStepMethod", "orientation", "setCurrentStepIndex", "steps", "transitionDuration"]);

  var stepRef = useRef(null);
  var wrapperRef = /*#__PURE__*/createRef();
  var isHorizontal = orientation === "horizontal";
  var stepCount = steps.length;
  var isLastStep = currentStepIndex === stepCount - 1;
  var isFirstStep = currentStepIndex === 0;
  useEffect(function () {
    if (isHorizontal) {
      handleScroll(wrapperRef.current);
    }
  }, []);
  useEffect(function () {
    if (isHorizontal && stepRef.current) stepRef.current.scrollIntoView({
      block: "end",
      behavior: "smooth"
    });
  }, [currentStepIndex]);

  var handleNext = function handleNext() {
    if (!isLastStep) {
      setCurrentStepIndex(function (prev) {
        return prev + 1;
      });
    }
  };

  var handlePrev = function handlePrev() {
    if (!isFirstStep) {
      setCurrentStepIndex(function (prev) {
        return prev - 1;
      });
    }
  };

  var handleStepClick = function handleStepClick(isPassed, stepIdx) {
    if (isPassed) {
      setCurrentStepIndex(stepIdx);
    }
  };

  var content = /*#__PURE__*/React.createElement(WizardStepContent, {
    content: currentStepContent,
    currentStep: currentStepIndex + 1,
    isHorizontal: isHorizontal,
    isLastStep: isLastStep,
    isFirstStep: isFirstStep,
    handleNext: handleNext,
    handlePrev: handlePrev,
    nextStepMethod: nextStepMethod,
    transitionDuration: transitionDuration,
    stepCount: stepCount
  });
  return /*#__PURE__*/React.createElement(Wrapper$7, props, /*#__PURE__*/React.createElement(StepsWrapper, {
    isHorizontal: isHorizontal
  }, /*#__PURE__*/React.createElement(Steps, {
    isHorizontal: isHorizontal,
    ref: wrapperRef
  }, steps.map(function (step, idx) {
    var isActive = idx === currentStepIndex;
    var isPassed = idx < currentStepIndex;
    var stepKey = "step-" + idx;
    return /*#__PURE__*/React.createElement(Step, {
      isActive: isActive,
      isHorizontal: isHorizontal,
      isPassed: isPassed,
      key: stepKey,
      ref: isActive ? stepRef : null
    }, /*#__PURE__*/React.createElement(WizardStepTitle, {
      label: step,
      flag: idx + 1,
      isActive: isActive,
      isHorizontal: isHorizontal,
      isPassed: isPassed,
      onClick: function onClick() {
        return handleStepClick(isPassed, idx);
      },
      transitionDuration: transitionDuration
    }), !isHorizontal && isActive && content, /*#__PURE__*/React.createElement(StepConnector, {
      isActive: isActive,
      isHorizontal: isHorizontal,
      isPassed: isPassed,
      transitionDuration: transitionDuration
    }));
  }))), isHorizontal && content);
};
Wizard.propTypes = WizardPropTypes;
Wizard.defaultProps = WizardDefaultProps;

export { Alert, AppContainer, AuthLayout, Box, BoxBase, Button, ButtonBase, COLOR, COLOR_PROP_TYPES, Checkbox, ChipBadge, Collapse, CollapseButton, DIMENSION, DIMENSION_PROP_TYPES, DISPLAY, DISPLAY_PROP_TYPES, DetailsTable, DotsSpinner, DownloadModule, Dropdown, ExplorerLayout, FieldBase, FieldWrapper, Fieldset, FileManager, FileUpload, Flex, FormError, FormLabel, FormRow, FreeBrandIconSet, FreeSolidIconSet, GlobalStyle, H1, H2, H3, H4, H5, H6, HeadingBase, History, Icon, Image, ImageModal, Input, KIT_COLORS, KIT_FONTS, KIT_ICON_SIZES, KIT_TYPOGRAPHY, Language, Modal, OutlineButton, Paragraph, Radio, RadioBase, ReactSelect, RocksKitIcons, RocksKitTheme, RocksSpinner, SPACER, SPACER_FORMULA, SPACER_POSTFIX, SPACER_PROP_TYPES, Select, ShareModule, Stepper, THEME_COLORS, Tab, Text, TextBase, TextButton, Thumbnail, ToggleSwitch, Wizard };
//# sourceMappingURL=rockskit.es.js.map
