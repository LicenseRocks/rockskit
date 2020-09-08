import React, { forwardRef, useState, Fragment, useEffect, useRef, createRef } from 'react';
import styled, { createGlobalStyle, css, useTheme, ThemeProvider as ThemeProvider$1 } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdobe, faFacebookF, faTelegramPlane, faTwitter, faWhatsapp, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight, faAt, faBars, faBox, faBoxes, faBuilding, faCheck, faCheckCircle, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faComments, faCopy, faEllipsisH, faEnvelope, faEuroSign, faFile, faFilePdf, faFilter, faHashtag, faGlobe, faInfoCircle, faKey, faLink, faMapMarker, faMinus, faPhone, faPlus, faQuestion, faSadCry, faSearch, faSearchPlus, faSignInAlt, faStore, faTachometerAlt, faThLarge, faTimes, faTruck, faTv, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes, { bool, func, oneOf } from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { library } from '@fortawesome/fontawesome-svg-core';
import { SnackbarProvider } from 'notistack';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MuiButtonBase from '@material-ui/core/ButtonBase';
import RCL from 'react-content-loader';
import { Collapse as Collapse$1 } from 'react-collapse';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import QRCode from 'qrcode.react';
import { Controller } from 'react-hook-form';
import { FilePond as FilePond$1 } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Select$1 from 'react-select';
import AsyncSelect from 'react-select/async';
import MuiContainer from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import { ListItem, List, ListItemIcon, ListItemText } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useNProgress } from '@tanem/react-nprogress';
import { Transition } from 'react-transition-group';
import MuiPagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import copy from 'copy-to-clipboard';
import MuiTabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';

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
  var data = _taggedTemplateLiteralLoose(["\n  html, body, #root, #__next {\n    height: 100%;\n  }\n\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus,\n  input:-webkit-autofill:active  {\n      -webkit-box-shadow: 0 0 0 30px white inset !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyle = createGlobalStyle(_templateObject());

var FreeBrandIconSet = {
  fabAdobe: faAdobe,
  fabFacebookF: faFacebookF,
  fabTelegramPlane: faTelegramPlane,
  fabTwitter: faTwitter,
  fabWhatsapp: faWhatsapp,
  fabWindows: faWindows
};

var FreeSolidIconSet = {
  faArrowLeft: faArrowLeft,
  faArrowRight: faArrowRight,
  faAt: faAt,
  faBars: faBars,
  faBox: faBox,
  faBoxes: faBoxes,
  faBuilding: faBuilding,
  faCheck: faCheck,
  faCheckCircle: faCheckCircle,
  faChevronDown: faChevronDown,
  faChevronLeft: faChevronLeft,
  faChevronRight: faChevronRight,
  faChevronUp: faChevronUp,
  faComments: faComments,
  faCopy: faCopy,
  faEllipsisH: faEllipsisH,
  faEnvelope: faEnvelope,
  faEuroSign: faEuroSign,
  faFile: faFile,
  faFilePdf: faFilePdf,
  faFilter: faFilter,
  faHashtag: faHashtag,
  faGlobe: faGlobe,
  faInfoCircle: faInfoCircle,
  faKey: faKey,
  faLink: faLink,
  faMapMarker: faMapMarker,
  faMinus: faMinus,
  faPhone: faPhone,
  faPlus: faPlus,
  faQuestion: faQuestion,
  faSadCry: faSadCry,
  faSearch: faSearch,
  faSearchPlus: faSearchPlus,
  faSignInAlt: faSignInAlt,
  faStore: faStore,
  faTachometerAlt: faTachometerAlt,
  faThLarge: faThLarge,
  faTimes: faTimes,
  faTruck: faTruck,
  faTv: faTv,
  faUser: faUser,
  faUserCircle: faUserCircle
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
  root: KIT_TYPOGRAPHY.button(),
  disabled: {
    opacity: 0.3
  }
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
  if (m > -1) temp += "margin: " + SPACER_FORMULA(m) + "px !important;";
  if (m0) temp += "margin: 0 !important;";
  if (mx > -1) temp += "margin: 0 " + SPACER_FORMULA(mx) + "px !important;";
  if (my > -1) temp += "margin: " + SPACER_FORMULA(my) + "px 0 !important;";
  if (mt > -1) temp += "margin-top: " + SPACER_FORMULA(mt) + "px !important;";
  if (mb > -1) temp += "margin-bottom: " + SPACER_FORMULA(mb) + "px !important;";
  if (mr > -1) temp += "margin-right: " + SPACER_FORMULA(mr) + "px !important;";
  if (ml > -1) temp += "margin-left: " + SPACER_FORMULA(ml) + "px !important;";
  if (mAuto) temp += "margin: auto !important;";
  if (p > -1) temp += "padding: " + SPACER_FORMULA(p) + "px !important;";
  if (p0) temp += "padding: 0 !important;";
  if (px > -1) temp += "padding: 0 " + SPACER_FORMULA(px) + "px !important;";
  if (py > -1) temp += "padding: " + SPACER_FORMULA(py) + "px 0 !important;";
  if (pt > -1) temp += "padding-top: " + SPACER_FORMULA(pt) + "px !important;";
  if (pb > -1) temp += "padding-bottom: " + SPACER_FORMULA(pb) + "px !important;";
  if (pr > -1) temp += "padding-right: " + SPACER_FORMULA(pr) + "px !important;";
  if (pl > -1) temp += "padding-left: " + SPACER_FORMULA(pl) + "px !important;";
  return temp;
};

var THEME_COLORS = ["primary", "secondary", "success", "error", "warning"];

var IconPropTypes = _extends({
  color: PropTypes.oneOf(THEME_COLORS),
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  prefix: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(KIT_ICON_SIZES))
}, COLOR_PROP_TYPES, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var IconDefaultProps = {
  color: "primary",
  rounded: false,
  size: "md"
};

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", "px;\n\n  ", "\n\n  ", "\n\n    ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  width: 40px;\n  height: 40px;\n  background-color: transparent;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  box-sizing: border-box;\n  position: relative;\n\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  box-sizing: border-box;\n  position: relative;\n\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Rounded = styled.div(_templateObject$1(), function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return css(["border:solid 2px ", ";background-color:", ";"], theme.palette.gray.regular, theme.palette[color].light);
}, function (theme) {
  return COLOR(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var Squared = styled.div(_templateObject2(), function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return css(["border:solid 1px ", ";"], theme.palette[color].light);
}, function (theme) {
  return COLOR(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var StyledIcon = styled(function (_ref3) {
  var icon = _ref3.icon,
      prefix = _ref3.prefix,
      size = _ref3.size,
      props = _objectWithoutPropertiesLoose(_ref3, ["icon", "prefix", "size"]);

  return /*#__PURE__*/React.createElement(FontAwesomeIcon, _extends({
    icon: [prefix, icon]
  }, props));
})(_templateObject3(), function (_ref4) {
  var size = _ref4.size;
  return KIT_ICON_SIZES[size];
}, function (_ref5) {
  var color = _ref5.color,
      theme = _ref5.theme;
  if (color === "input") return "color: " + theme.palette.gray.regular + ";";
  return "color: " + theme.palette[color].main + ";";
}, function (_ref6) {
  var onClick = _ref6.onClick;
  return onClick && css(["cursor:pointer;transition:all 0.1s ease-in-out;:hover{opacity:0.7;}"]);
}, function (_ref7) {
  var simple = _ref7.simple;
  return simple && css(["", " ", " ", ""], function (theme) {
    return COLOR(theme);
  }, function (theme) {
    return DISPLAY(theme);
  }, function (theme) {
    return SPACER(theme);
  });
});
var Icon = function Icon(_ref8) {
  var className = _ref8.className,
      color = _ref8.color,
      rounded = _ref8.rounded,
      squared = _ref8.squared,
      prefix = _ref8.prefix,
      props = _objectWithoutPropertiesLoose(_ref8, ["className", "color", "rounded", "squared", "prefix"]);

  var theme = useTheme();

  var defaultProps = _extends({
    color: color,
    prefix: prefix || theme.defaultIconSet,
    rounded: rounded,
    squared: squared,
    simple: !rounded && !squared
  }, props);

  var Wrapper = null;
  if (rounded) Wrapper = Rounded;
  if (squared) Wrapper = Squared;
  return Wrapper ? /*#__PURE__*/React.createElement(Wrapper, _extends({
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
  color: PropTypes.oneOf(["info", "danger", "warning"]),
  noBorderRadius: PropTypes.bool
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var AlertDefaultProps = {
  content: null,
  children: null,
  color: "info"
};

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  box-sizing: border-box;\n  min-height: 40px;\n  padding: 8px;\n  font-size: 14px;\n  transition: all 100ms ease-in-out;\n  display: flex;\n  align-items: center;\n  ", "\n  background-color: ", ";\n  color: ", ";\n  svg {\n    color: ", ";\n  }\n\n  ", "\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledMessage = styled.div(_templateObject$2(), function (_ref) {
  var noBorderRadius = _ref.noBorderRadius;
  return !noBorderRadius && "border-radius: 8px;";
}, function (_ref2) {
  var colors = _ref2.colors;
  return colors.backgroundColor;
}, function (_ref3) {
  var colors = _ref3.colors;
  return colors.color;
}, function (_ref4) {
  var colors = _ref4.colors;
  return colors.iconColor;
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});

var getColors = function getColors(color, theme) {
  switch (color) {
    case "danger":
      return {
        backgroundColor: theme.palette.error.light,
        color: theme.palette.error.main,
        iconColor: theme.palette.error.main
      };

    case "warning":
      return {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
        iconColor: theme.palette.primary.main
      };

    case "success":
      return {
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.main,
        iconColor: theme.palette.success.main
      };

    default:
      return {
        backgroundColor: theme.palette.gray.semiLight,
        color: theme.palette.text.primary,
        iconColor: theme.palette.primary.main
      };
  }
};

var Alert = function Alert(_ref5) {
  var content = _ref5.content,
      children = _ref5.children,
      color = _ref5.color,
      props = _objectWithoutPropertiesLoose(_ref5, ["content", "children", "color"]);

  var theme = useTheme();
  var colors = getColors(color, theme);
  return /*#__PURE__*/React.createElement(StyledMessage, _extends({
    colors: colors
  }, props), /*#__PURE__*/React.createElement(Icon, {
    icon: "info-circle",
    mr: 2
  }), content || children);
};
Alert.propTypes = AlertPropTypes;
Alert.defaultProps = AlertDefaultProps;

var AppContainerPropTypes = {
  children: PropTypes.node.isRequired,
  icons: PropTypes.object,
  pageLoading: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

var AppContainer = function AppContainer(_ref) {
  var children = _ref.children,
      icons = _ref.icons,
      pageLoading = _ref.pageLoading,
      pageProgressBar = _ref.pageProgressBar,
      pageProgressBarListener = _ref.pageProgressBarListener,
      theme = _ref.theme;
  if (icons) library.add(icons);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(ThemeProvider$1, {
    theme: theme
  }, /*#__PURE__*/React.createElement(SnackbarProvider, {
    maxSnack: 3
  }, /*#__PURE__*/React.createElement(GlobalStyle, null), /*#__PURE__*/React.createElement(CssBaseline, null), pageProgressBar && /*#__PURE__*/React.createElement(PageProgressBar, {
    listener: pageProgressBarListener
  }), pageLoading ? /*#__PURE__*/React.createElement(PageLoading, null) : children)));
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
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    ", "\n\n    ", "\n\n  font-style: ", ";\n\n    ", "\n    ", "\n  }\n"]);

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
      actionType = _ref4.actionType,
      renderAction = _ref4.renderAction,
      renderTitle = _ref4.renderTitle,
      props = _objectWithoutPropertiesLoose(_ref4, ["action", "actionDisabled", "actionLoading", "actionTitle", "actionType", "renderAction", "renderTitle"]);

  if (!renderTitle || !renderAction || !actionTitle) return null;
  return /*#__PURE__*/React.createElement(StyledBoxFooter, props, /*#__PURE__*/React.createElement(Flex, {
    item: true,
    sm: 8
  }, renderTitle()), /*#__PURE__*/React.createElement(Flex, {
    item: true
  }, renderAction() || /*#__PURE__*/React.createElement(Button, {
    content: actionTitle,
    disabled: actionDisabled,
    loading: actionLoading,
    onClick: action,
    type: actionType
  })));
};
BoxFooter.propTypes = {
  action: PropTypes.func,
  actionDisabled: PropTypes.bool,
  actionLoading: PropTypes.bool,
  actionTitle: PropTypes.string.isRequired,
  actionType: PropTypes.string,
  padding: PropTypes.number.isRequired,
  renderAction: PropTypes.func,
  renderTitle: PropTypes.func
};
BoxFooter.defaultProps = {
  action: function action() {},
  actionDisabled: false,
  actionLoading: false,
  actionType: "submit",
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
    justify: "space-between",
    wrap: "nowrap"
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
      actionIconProps = _ref4.actionIconProps,
      actionIconSize = _ref4.actionIconSize,
      renderAction = _ref4.renderAction,
      renderTitle = _ref4.renderTitle,
      metaTitle = _ref4.metaTitle,
      metaTitleColor = _ref4.metaTitleColor,
      subTitle = _ref4.subTitle,
      subTitleColor = _ref4.subTitleColor,
      title = _ref4.title,
      titleIcon = _ref4.titleIcon,
      titleIconProps = _ref4.titleIconProps,
      titleSize = _ref4.titleSize,
      props = _objectWithoutPropertiesLoose(_ref4, ["action", "actionIcon", "actionIconProps", "actionIconSize", "renderAction", "renderTitle", "metaTitle", "metaTitleColor", "subTitle", "subTitleColor", "title", "titleIcon", "titleIconProps", "titleSize"]);

  return /*#__PURE__*/React.createElement(StyledBoxHeader, props, /*#__PURE__*/React.createElement(Flex, {
    item: true
  }, renderTitle() || /*#__PURE__*/React.createElement(Flex, {
    container: true
  }, titleIcon && /*#__PURE__*/React.createElement(Icon, _extends({
    colorBlack: true,
    icon: titleIcon,
    mr: 2,
    size: "lg"
  }, titleIconProps)), /*#__PURE__*/React.createElement("div", null, metaTitle && /*#__PURE__*/React.createElement(Text, {
    content: metaTitle,
    color: metaTitleColor,
    dBlock: true,
    fontSize: "sm"
  }), titleSize === "sm" ? /*#__PURE__*/React.createElement(H4, {
    content: title
  }) : /*#__PURE__*/React.createElement(H3, {
    content: title
  }), subTitle && /*#__PURE__*/React.createElement(Text, {
    content: subTitle,
    color: subTitleColor,
    dBlock: true,
    fontStyle: "italic",
    fontSize: "sm"
  })))), /*#__PURE__*/React.createElement(Flex, {
    item: true
  }, renderAction() || actionIcon && /*#__PURE__*/React.createElement(Icon, _extends({
    colorGrayMedium: true,
    icon: actionIcon,
    size: actionIconSize,
    onClick: action
  }, actionIconProps))));
};
BoxHeader.propTypes = {
  action: PropTypes.func,
  actionIcon: PropTypes.string,
  actionIconProps: PropTypes.shape({}),
  actionIconSize: PropTypes.string,
  padding: PropTypes.number.isRequired,
  renderAction: PropTypes.func,
  renderTitle: PropTypes.func,
  subTitle: PropTypes.string,
  subTitleColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleIcon: PropTypes.string,
  titleIconProps: PropTypes.shape({}),
  titleSize: PropTypes.string
};
BoxHeader.defaultProps = {
  action: function action() {},
  actionIcon: "",
  actionIconSize: "lg",
  metaTitleColor: "textSecondary",
  renderAction: function renderAction() {},
  renderTitle: function renderTitle() {},
  subTitle: "",
  subTitleColor: "textSecondary",
  titleIcon: "",
  titleSize: "md"
};

var BoxPropTypes = _extends({
  children: PropTypes.node.isRequired,
  footerAction: PropTypes.func,
  footerActionLoading: PropTypes.bool,
  footerActionDisabled: PropTypes.bool,
  footerActionTitle: PropTypes.string,
  footerActionType: PropTypes.string,
  footerRenderAction: PropTypes.func,
  footerRenderTitle: PropTypes.func,
  headerAction: PropTypes.func,
  headerActionIcon: PropTypes.string,
  headerActionIconProps: PropTypes.shape({}),
  headerActionIconSize: PropTypes.string,
  headerMetaTitle: PropTypes.string,
  headerMetaTitleColor: PropTypes.string,
  headerRenderAction: PropTypes.func,
  headerRenderTitle: PropTypes.func,
  headerSubTitle: PropTypes.string,
  headerSubTitleColor: PropTypes.string,
  headerTitle: PropTypes.string,
  headerTitleIcon: PropTypes.string,
  headerTitleIconProps: PropTypes.shape({}),
  headerTitleSize: PropTypes.string,
  loading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  padding: PropTypes.number,
  transition: PropTypes.bool
}, BoxBasePropTypes);
var BoxDefaultProps = _extends({
  padding: 6,
  transition: false
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
  var alert = _ref2.alert,
      alertColor = _ref2.alertColor,
      children = _ref2.children,
      footerAction = _ref2.footerAction,
      footerActionLoading = _ref2.footerActionLoading,
      footerActionDisabled = _ref2.footerActionDisabled,
      footerActionTitle = _ref2.footerActionTitle,
      footerActionType = _ref2.footerActionType,
      footerRenderAction = _ref2.footerRenderAction,
      footerRenderTitle = _ref2.footerRenderTitle,
      headerAction = _ref2.headerAction,
      headerActionIcon = _ref2.headerActionIcon,
      headerActionIconProps = _ref2.headerActionIconProps,
      headerActionIconSize = _ref2.headerActionIconSize,
      headerMetaTitle = _ref2.headerMetaTitle,
      headerMetaTitleColor = _ref2.headerMetaTitleColor,
      headerRenderAction = _ref2.headerRenderAction,
      headerRenderTitle = _ref2.headerRenderTitle,
      headerSubTitle = _ref2.headerSubTitle,
      headerSubTitleColor = _ref2.headerSubTitleColor,
      headerTitle = _ref2.headerTitle,
      headerTitleIcon = _ref2.headerTitleIcon,
      headerTitleIconProps = _ref2.headerTitleIconProps,
      headerTitleSize = _ref2.headerTitleSize,
      loading = _ref2.loading,
      loadingMessage = _ref2.loadingMessage,
      padding = _ref2.padding,
      transition = _ref2.transition,
      props = _objectWithoutPropertiesLoose(_ref2, ["alert", "alertColor", "children", "footerAction", "footerActionLoading", "footerActionDisabled", "footerActionTitle", "footerActionType", "footerRenderAction", "footerRenderTitle", "headerAction", "headerActionIcon", "headerActionIconProps", "headerActionIconSize", "headerMetaTitle", "headerMetaTitleColor", "headerRenderAction", "headerRenderTitle", "headerSubTitle", "headerSubTitleColor", "headerTitle", "headerTitleIcon", "headerTitleIconProps", "headerTitleSize", "loading", "loadingMessage", "padding", "transition"]);

  var content = /*#__PURE__*/React.createElement(React.Fragment, null, alert && /*#__PURE__*/React.createElement(Alert, {
    content: alert,
    color: alertColor,
    noBorderRadius: true
  }), /*#__PURE__*/React.createElement(BoxContent, {
    padding: padding
  }, children), /*#__PURE__*/React.createElement(BoxFooter, {
    action: footerAction,
    actionDisabled: footerActionDisabled,
    actionLoading: footerActionLoading,
    actionTitle: footerActionTitle,
    actionType: footerActionType,
    padding: padding,
    renderAction: footerRenderAction,
    renderTitle: footerRenderTitle
  }));
  return /*#__PURE__*/React.createElement(BoxBase, props, loading && /*#__PURE__*/React.createElement(PageLoading, {
    message: loadingMessage,
    type: "box"
  }), headerTitle && /*#__PURE__*/React.createElement(BoxHeader, {
    action: headerAction,
    actionIcon: headerActionIcon,
    actionIconProps: headerActionIconProps,
    actionIconSize: headerActionIconSize,
    padding: padding,
    metaTitle: headerMetaTitle,
    metaTitleColor: headerMetaTitleColor,
    renderAction: headerRenderAction,
    renderTitle: headerRenderTitle,
    subTitle: headerSubTitle,
    subTitleColor: headerSubTitleColor,
    title: headerTitle,
    titleIcon: headerTitleIcon,
    titleIconProps: headerTitleIconProps,
    titleSize: headerTitleSize
  }), transition ? /*#__PURE__*/React.createElement(PageTransition, null, content) : content);
};
Box.propTypes = BoxPropTypes;
Box.defaultProps = BoxDefaultProps;

var ButtonBasePropTypes = _extends({
  block: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary", "subtle"]),
  content: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  endIcon: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  iconProps: IconPropTypes,
  noPadding: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  startIcon: PropTypes.string,
  target: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ButtonBaseDefaultProps = {
  block: false,
  color: "primary",
  size: "md"
};

function _templateObject$c() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    box-sizing: border-box;\n    border-radius: 12px;\n    ", "\n    min-width: 40px;\n    height: 40px;\n    transition: all 100ms ease-in-out;\n    width: ", ";\n\n    :hover {\n      opacity: 0.7;\n    }\n\n    :disabled {\n      opacity: 0.3;\n      cursor: not-allowed;\n      pointer-events: none;\n    }\n\n    ", "\n\n    ", "\n    ", "\n  }\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled(MuiButtonBase)(_templateObject$c(), function (_ref) {
  var noPadding = _ref.noPadding,
      theme = _ref.theme;
  return !noPadding && "padding: " + theme.spacing(0, 4) + ";";
}, function (_ref2) {
  var block = _ref2.block;
  return block ? "100%" : "initial";
}, function (_ref3) {
  var size = _ref3.size,
      theme = _ref3.theme;

  if (size === "xs") {
    return css(["font-size:", ";padding:", ";height:24px;min-width:24px;border-radius:8px;"], theme.typography.button.fontSizeXs, theme.spacing(0, 2));
  }

  if (size === "sm") {
    return css(["font-size:", ";padding:", ";height:32px;min-width:32px;border-radius:8px;"], theme.typography.button.fontSizeSm, theme.spacing(0, 2));
  }

  return css(["font-size:", ";"], theme.typography.button.fontSizeMd);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
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

var ButtonBase = function ButtonBase(_ref4) {
  var colors = _ref4.colors,
      content = _ref4.content,
      children = _ref4.children,
      loading = _ref4.loading,
      endIcon = _ref4.endIcon,
      href = _ref4.href,
      icon = _ref4.icon,
      iconProps = _ref4.iconProps,
      size = _ref4.size,
      startIcon = _ref4.startIcon,
      props = _objectWithoutPropertiesLoose(_ref4, ["colors", "content", "children", "loading", "endIcon", "href", "icon", "iconProps", "size", "startIcon"]);

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
  }), icon && /*#__PURE__*/React.createElement(Icon, _extends({
    icon: icon,
    size: iconSize
  }, iconProps)), content || children, endIcon && /*#__PURE__*/React.createElement(Icon, {
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

var CategoryItemPropTypes = {
  checked: PropTypes.bool.isRequired,
  dataCy: PropTypes.string,
  description: PropTypes.string,
  iconName: PropTypes.string,
  iconImage: PropTypes.string,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  subCategory: PropTypes.bool,
  name: PropTypes.string.isRequired
};
var CategoryItemDefaultProps = {
  dataCy: "categoryItem",
  iconName: null,
  iconImage: null,
  description: "",
  subCategory: false
};

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 24px;\n  height: 24px;\n  border-bottom-right-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  svg {\n    color: #ffffff;\n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 32px;\n  height: 32px;\n  background-color: ", ";\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$g() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  border-radius: 8px;\n  padding: ", "px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 130px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ", ";\n  text-align: center;\n  cursor: pointer;\n  overflow: hidden;\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  ", "\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var StyledCategoryItem = styled.div(_templateObject$g(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.gray.semiLight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.main;
}, function (_ref4) {
  var checked = _ref4.checked;
  return checked && css(["border-color:", ";"], function (_ref5) {
    var theme = _ref5.theme;
    return theme.palette.primary.main;
  });
});
var StyledIcon$1 = styled.img(_templateObject2$2(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.primary.main;
});
var CheckIcon = styled.div(_templateObject3$1(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.primary.main;
});
var CategoryItem = function CategoryItem(_ref8) {
  var checked = _ref8.checked,
      dataCy = _ref8.dataCy,
      description = _ref8.description,
      iconName = _ref8.iconName,
      iconImage = _ref8.iconImage,
      id = _ref8.id,
      onChange = _ref8.onChange,
      subCategory = _ref8.subCategory,
      name = _ref8.name,
      props = _objectWithoutPropertiesLoose(_ref8, ["checked", "dataCy", "description", "iconName", "iconImage", "id", "onChange", "subCategory", "name"]);

  return /*#__PURE__*/React.createElement(StyledCategoryItem, _extends({
    checked: checked,
    "data-cy": dataCy,
    onClick: function onClick() {
      return onChange(id);
    }
  }, props), checked && /*#__PURE__*/React.createElement(CheckIcon, null, /*#__PURE__*/React.createElement(Icon, {
    icon: "check",
    size: "sm"
  })), iconName && /*#__PURE__*/React.createElement(Icon, {
    colorGrayMedium: true,
    icon: iconName,
    size: "lg"
  }), iconImage && /*#__PURE__*/React.createElement(StyledIcon$1, {
    src: iconImage,
    alt: name
  }), /*#__PURE__*/React.createElement(Text, {
    color: subCategory ? "textPrimary" : "primary",
    fontWeight: "bold",
    noWrap: true,
    py: 2
  }, name), /*#__PURE__*/React.createElement(Text, {
    color: "textSecondary",
    fontSize: "sm"
  }, description));
};
CategoryItem.propTypes = CategoryItemPropTypes;
CategoryItem.defaultProps = CategoryItemDefaultProps;

var WIDTH = 160;
var HEIGHT = 130;
var ICON_SIZE = 24;
var ICON_TOP = 24;
var TITLE_WIDTH = 80;
var TITLE_HEIGHT = 16;
var TITLE_TOP = ICON_SIZE + ICON_TOP + 8;
var DESC_WIDTH = 100;
var DESC_HEIGHT = 8;
var DESC_TOP = TITLE_HEIGHT + TITLE_TOP + 8;
var DESC2_WIDTH = 50;
var DESC2_HEIGHT = 8;
var DESC2_TOP = DESC_TOP + DESC_HEIGHT + 8;
var CategoryItemContentLoader = function CategoryItemContentLoader(_ref) {
  var subCategory = _ref.subCategory;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(RCL, {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: theme.palette.gray.light,
    foregroundColor: theme.palette.gray.regular,
    style: {
      // border: `4px solid ${theme.palette.gray.light}`,
      backgroundColor: theme.palette.gray.light,
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: WIDTH / 2 - ICON_SIZE / 2,
    y: ICON_TOP,
    rx: 4,
    ry: 4,
    width: ICON_SIZE,
    height: ICON_SIZE
  }), /*#__PURE__*/React.createElement("rect", {
    x: WIDTH / 2 - TITLE_WIDTH / 2,
    y: TITLE_TOP,
    rx: 0,
    ry: 0,
    width: TITLE_WIDTH,
    height: TITLE_HEIGHT
  }), !subCategory && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: WIDTH / 2 - DESC_WIDTH / 2,
    y: DESC_TOP,
    rx: 0,
    ry: 0,
    width: DESC_WIDTH,
    height: DESC_HEIGHT
  }), /*#__PURE__*/React.createElement("rect", {
    x: WIDTH / 2 - DESC2_WIDTH / 2,
    y: DESC2_TOP,
    rx: 0,
    ry: 0,
    width: DESC2_WIDTH,
    height: DESC2_HEIGHT
  })));
};
CategoryItemContentLoader.propTypes = {
  subCategory: PropTypes.bool
};
CategoryItemContentLoader.defaultProps = {
  subCategory: false
};

var CollapsePropTypes = {
  isOpened: PropTypes.bool
};

function _templateObject$h() {
  var data = _taggedTemplateLiteralLoose(["\n  .ReactCollapse--collapse {\n    transition: height 200ms ease-in-out;\n  }\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled.div(_templateObject$h());
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
  justifyBetween: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.node,
    expanded: PropTypes.bool
  }))
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var DetailsTableDefaultProps = {};

function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 140px;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  ", "\n  height: 32px;\n  margin-bottom: ", ";\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$i() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$1 = styled.div(_templateObject$i(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Row = styled.div(_templateObject2$3(), function (_ref) {
  var justifyBetween = _ref.justifyBetween;
  return justifyBetween && "justify-content: space-between;";
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2);
});
var Label = styled(Text).attrs(function () {
  return {
    color: "textSecondary"
  };
})(_templateObject3$2());
var DetailsTable = function DetailsTable(_ref3) {
  var rows = _ref3.rows,
      justifyBetween = _ref3.justifyBetween,
      props = _objectWithoutPropertiesLoose(_ref3, ["rows", "justifyBetween"]);

  return /*#__PURE__*/React.createElement(Wrapper$1, props, rows.map(function (_ref4) {
    var label = _ref4.label,
        value = _ref4.value;
    return /*#__PURE__*/React.createElement(Row, {
      key: label + ":" + value,
      justifyBetween: justifyBetween
    }, /*#__PURE__*/React.createElement(Label, {
      content: label
    }), value || "-");
  }));
};
DetailsTable.propTypes = DetailsTablePropTypes;
DetailsTable.defaultProps = DetailsTableDefaultProps;

var DividerPropTypes = _extends({
  className: PropTypes.any,
  thickness: PropTypes.number
}, SPACER_PROP_TYPES);
var DividerDefaultProps = {
  thickness: 1
};

function _templateObject$j() {
  var data = _taggedTemplateLiteralLoose(["\n  line-height: 1em;\n  position: relative;\n  outline: 0;\n  border: 0;\n  color: black;\n  text-align: center;\n\n  &:before {\n    content: \"\";\n    background-color: ", ";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: ", "px;\n  }\n  &:after {\n    content: \"", "\";\n    position: relative;\n    display: inline-block;\n    padding: ", ";\n    background-color: ", ";\n    color: ", ";\n    font-weight: 300;\n    font-size: 16px;\n    line-height: 160%;\n    font-style: italic;\n  }\n/*\n  ", "\n\n  ", "; */\n\n  ", "\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDivider = styled.hr(_templateObject$j(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.semiLight;
}, function (_ref2) {
  var thickness = _ref2.thickness;
  return thickness;
}, function (_ref3) {
  var text = _ref3.text;
  return text;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(0, 2);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.common.white;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.gray.dark;
}, function (_ref7) {
  var vertical = _ref7.vertical;
  return vertical && css(["width:", "px;height:100%;"], function (_ref8) {
    var thickness = _ref8.thickness;
    return thickness;
  });
}, function (_ref9) {
  var flexItem = _ref9.flexItem;
  return flexItem && css(["height:auto;align-self:stretch;"]);
}, function (props) {
  return SPACER(props);
});
var Divider = function Divider(props) {
  return /*#__PURE__*/React.createElement(StyledDivider, props);
};
Divider.propTypes = DividerPropTypes;
Divider.defaultProps = DividerDefaultProps;

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

function _templateObject2$4() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$k() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: 24px;\n\n  ", "\n  ", "\n"]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDropdown = styled(Menu)(_templateObject$k(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledItem = styled(MenuItem)(_templateObject2$4());
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

function _templateObject$l() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n\n  && {\n    width: 40px;\n    height: 40px;\n    background-color: ", ";\n    svg {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$2 = styled.div(_templateObject$l(), function (_ref) {
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

function _templateObject$m() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  padding: ", ";\n  border-radius: 16px;\n  ", "\n  ", "\n"]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div(_templateObject$m(), function (_ref) {
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

function _templateObject3$3() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 48px;\n  margin-bottom: ", ";\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteralLoose(["\n  border: 1px solid ", ";\n  padding: ", ";\n  margin-bottom: ", ";\n  border-radius: 8px;\n\n  ", "\n  ", "\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$n() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var Container$1 = styled.div(_templateObject$n());
var Wrapper$3 = styled.div(_templateObject2$5(), function (_ref) {
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
})(_templateObject3$3(), function (_ref4) {
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

function _templateObject2$6() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$o() {
  var data = _taggedTemplateLiteralLoose(["\n  display: none;\n\n  + label {\n    display: inline-flex;\n    align-items: center;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 120%;\n    margin: 0 32px 0 0;\n    cursor: pointer;\n    transition: all 0.1s ease-in-out;\n\n    ", "\n\n    &::before {\n      content: \"\";\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border-radius: ", ";\n      background-color: ", ";\n      border: 1px solid ", ";\n      margin-right: 8px;\n      transition: background-color 0.1s ease-in-out;\n      ", "\n    }\n\n    &:hover {\n      &::before {\n        background-color: ", ";\n        border-color: ", ";\n      }\n    }\n  }\n\n  &:checked + label::before {\n    background-color: ", ";\n    border-color: ", ";\n    background-image: url(\"", "\");\n    background-size: 16px 16px;\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n\n  &:disabled + label {\n    opacity: 0.3;\n\n    &,\n    span {\n      cursor: default;\n    }\n  }\n"]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var StyledInput = styled.input(_templateObject$o(), function (_ref) {
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
var StyledLabel$1 = styled.label(_templateObject2$6());
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

function _templateObject$p() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$p = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRadioBase = styled(RadioBase)(_templateObject$p(), function (theme) {
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

function _templateObject$q() {
  var data = _taggedTemplateLiteralLoose(["\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 120%;\n  color: ", ";\n  margin-top: ", ";\n\n  ", "\n  ", "\n"]);

  _templateObject$q = function _templateObject() {
    return data;
  };

  return data;
}
var Error = styled.div(_templateObject$q(), function (_ref) {
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
  fixedHeight: PropTypes.bool,
  startIcon: PropTypes.string,
  startIconColor: PropTypes.oneOf(THEME_COLORS),
  startIconOnClick: PropTypes.func,
  startIconPrefix: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FieldWrapperDefaultProps = {
  block: true,
  endIcon: "",
  endIconColor: "input",
  fixedHeight: true,
  startIcon: "",
  startIconColor: "input"
};

function _templateObject$r() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  padding: ", ";\n  outline: none;\n  box-sizing: border-box;\n  transition: all 100ms ease-in-out;\n  ", "\n\n  &:focus-within {\n    border: 1px solid ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$r = function _templateObject() {
    return data;
  };

  return data;
}
var StyledWrapper = styled.div(_templateObject$r(), function (_ref) {
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
  var fixedHeight = _ref5.fixedHeight;
  return fixedHeight && "height: 40px;";
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

function _templateObject$s() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: inherit;\n  line-height: 120%;\n  padding: 8px;\n  color: ", ";\n  outline: none;\n  border: none;\n  height: 100%;\n  box-sizing: border-box;\n  transition: all 100ms ease-in-out;\n  background-color: transparent;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n\n  ::placeholder {\n    font-weight: normal;\n  }\n\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject$s = function _templateObject() {
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
}))(_templateObject$s(), function (_ref2) {
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
      className = _ref10.className,
      endIcon = _ref10.endIcon,
      endIconColor = _ref10.endIconColor,
      endIconOnClick = _ref10.endIconOnClick,
      endIconPrefix = _ref10.endIconPrefix,
      fixedHeight = _ref10.fixedHeight,
      hasError = _ref10.hasError,
      register = _ref10.register,
      startIcon = _ref10.startIcon,
      startIconColor = _ref10.startIconColor,
      startIconOnClick = _ref10.startIconOnClick,
      startIconPrefix = _ref10.startIconPrefix,
      props = _objectWithoutPropertiesLoose(_ref10, ["block", "className", "endIcon", "endIconColor", "endIconOnClick", "endIconPrefix", "fixedHeight", "hasError", "register", "startIcon", "startIconColor", "startIconOnClick", "startIconPrefix"]);

  return /*#__PURE__*/React.createElement(FieldWrapper, {
    block: block,
    className: className,
    endIcon: endIcon,
    endIconColor: endIconColor,
    endIconOnClick: endIconOnClick,
    endIconPrefix: endIconPrefix,
    fixedHeight: fixedHeight,
    hasError: hasError,
    startIcon: startIcon,
    startIconColor: startIconColor,
    startIconOnClick: startIconOnClick,
    startIconPrefix: startIconPrefix
  }, /*#__PURE__*/React.createElement(StyledInput$1, _extends({
    block: block,
    hasError: hasError,
    ref: register
  }, props)));
};
FieldBase.propTypes = FieldBasePropTypes;
FieldBase.defaultProps = FieldBaseDefaultProps;

function _templateObject$t() {
  var data = _taggedTemplateLiteralLoose(["\n  border: none;\n  padding: 0%;\n  margin: 0;\n  width: 100%;\n  flex: 1;\n"]);

  _templateObject$t = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFieldset = styled.fieldset(_templateObject$t());
var Fieldset = function Fieldset(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(StyledFieldset, null, children);
};
Fieldset.propTypes = {
  children: PropTypes.node.isRequired
};
Fieldset.defaultProps = {};

function _templateObject2$7() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$u() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: ", ";\n  background-color: ", ";\n  color: ", ";\n  font-size: 12px;\n  margin-bottom: ", ";\n  border-radius: 8px;\n"]);

  _templateObject$u = function _templateObject() {
    return data;
  };

  return data;
}
var Item$1 = styled.div(_templateObject$u(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2, 4);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.success.main;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.common.white;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(2);
});
var RemoveIcon = styled(Icon)(_templateObject2$7(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.common.white;
});

function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}

var UploaderPreview = function UploaderPreview(_ref6) {
  var files = _ref6.files,
      onRemoveClick = _ref6.onRemoveClick;
  return files.map(function (file) {
    return /*#__PURE__*/React.createElement(Item$1, {
      key: file.name
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, file.name), /*#__PURE__*/React.createElement("div", null, bytesToSize(file.size))), onRemoveClick && /*#__PURE__*/React.createElement(RemoveIcon, {
      icon: "times",
      onClick: function onClick() {
        return onRemoveClick(file);
      }
    }));
  });
};
UploaderPreview.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
  onRemoveClick: PropTypes.func.isRequired
};
UploaderPreview.defaultProps = {
  files: []
};

function _templateObject3$4() {
  var data = _taggedTemplateLiteralLoose(["\n  &.filepond--root {\n    font-weight: unset;\n    font-family: unset;\n    font-size: unset;\n    overflow: hidden;\n  }\n\n  .filepond--drop-label {\n    color: unset;\n  }\n\n  && {\n    .filepond--panel,\n    .filepond--panel-root,\n    .filepond--drip,\n    .filepond--drop-label {\n      background-color: transparent !important;\n    }\n  }\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 16px;\n  border-style: dashed;\n  border-width: 2px;\n  cursor: pointer;\n  min-height: 125px;\n  outline: none;\n  transition: all 100ms ease-in-out;\n  color: ", ";\n  margin-bottom: ", ";\n  overflow: hidden;\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$v() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject$v = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$4 = styled.div(_templateObject$v());
var Container$2 = styled.div(_templateObject2$8(), function (_ref) {
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
  return theme.spacing(2);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.gray.medium;
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled && css(["opacity:0.3;cursor:not-allowed;pointer-events:none;"]);
}, function (_ref7) {
  var hasError = _ref7.hasError;
  return hasError && css(["border-color:", ";background-color:", ";"], function (_ref8) {
    var theme = _ref8.theme;
    return theme.palette.error.main;
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.palette.error.light;
  });
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledFilePond = styled(FilePond$1)(_templateObject3$4());
var FilePondComponent = function FilePondComponent(_ref10) {
  var disabled = _ref10.disabled,
      hasError = _ref10.hasError,
      onChange = _ref10.onChange,
      value = _ref10.value,
      props = _objectWithoutPropertiesLoose(_ref10, ["disabled", "hasError", "onChange", "value"]);

  return /*#__PURE__*/React.createElement(Wrapper$4, null, /*#__PURE__*/React.createElement(Container$2, {
    disabled: disabled,
    hasError: hasError
  }, /*#__PURE__*/React.createElement(StyledFilePond, _extends({
    disabled: disabled,
    onprocessfile: function onprocessfile(error, file) {
      if (file.status === 5) {
        onChange([].concat(value, [{
          id: file.id,
          name: file.filename,
          size: file.fileSize,
          serverId: file == null ? void 0 : file.serverId
        }]));
      }
    }
  }, props))), /*#__PURE__*/React.createElement(UploaderPreview, {
    files: value,
    onRemoveClick: function onRemoveClick(file) {
      onChange(value.filter(function (f) {
        return f.id !== file.id;
      }));
    }
  }));
};
FilePondComponent.propTypes = {
  accept: PropTypes.string,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.shape)
};
FilePondComponent.defaultProps = {
  accept: "image/*",
  disabled: false,
  hasError: false,
  multiple: true,
  onChange: function onChange() {},
  value: []
};

var FileUploadPropTypes = _extends({
  allowRemove: PropTypes.bool,
  allowRevert: PropTypes.bool,
  allowMultiple: PropTypes.bool,
  control: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.arrayOf(PropTypes.object),
  isRequired: PropTypes.string,
  name: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FileUploadDefaultProps = {
  allowRemove: false,
  allowRevert: false,
  allowMultiple: true,
  defaultValue: undefined,
  name: "fileUpload"
};

var FilePond = function FilePond(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      isRequired = _ref.isRequired,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, ["control", "defaultValue", "isRequired", "name"]);

  return /*#__PURE__*/React.createElement(Controller, {
    as: /*#__PURE__*/React.createElement(FilePondComponent, _extends({
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
FilePond.propTypes = FileUploadPropTypes;
FilePond.defaultProps = FileUploadDefaultProps;

function _templateObject2$9() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 16px;\n  border-style: dashed;\n  border-width: 2px;\n  cursor: pointer;\n  min-height: 125px;\n  outline: none;\n  transition: all 100ms ease-in-out;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n  margin-bottom: 8px;\n\n  &:hover {\n    border-color: ", ";\n  }\n\n\n  ", "\n\n\n  ", "\n\n  ", "\n"]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$w() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n\n  ", "\n  ", "\n"]);

  _templateObject$w = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContainer = styled.div(_templateObject$w(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var DropzoneArea = styled.div(_templateObject2$9(), function (_ref) {
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
      value = _ref10.value,
      props = _objectWithoutPropertiesLoose(_ref10, ["accept", "disabled", "defaultValue", "hasError", "multiple", "onChange", "value"]);

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
      onChange([].concat(value, accepted));
    }
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  var removeFile = function removeFile(file) {
    onChange(value.filter(function (f) {
      return f.preview !== file.preview;
    }));
  };

  return /*#__PURE__*/React.createElement(StyledContainer, props, /*#__PURE__*/React.createElement(DropzoneArea, _extends({
    dragActive: isDragActive,
    dragAccept: isDragAccept,
    dragReject: isDragReject,
    disabled: disabled,
    hasError: hasError
  }, getRootProps()), /*#__PURE__*/React.createElement("input", getInputProps()), isDragAccept && /*#__PURE__*/React.createElement("p", null, "Accepted"), isDragReject && /*#__PURE__*/React.createElement("p", null, "Rejected"), isDragActive ? /*#__PURE__*/React.createElement("p", null, "Drop here") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Drop, or click to select"), multiple ? /*#__PURE__*/React.createElement("p", null, "Accepts multiple files") : /*#__PURE__*/React.createElement("p", null, "Single file only"))), /*#__PURE__*/React.createElement(UploaderPreview, {
    files: value,
    onRemoveClick: removeFile
  }));
};
Dropzone.propTypes = {
  accept: PropTypes.string,
  defaultValue: PropTypes.arrayOf(PropTypes.object),
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.shape)
};
Dropzone.defaultProps = {
  accept: "image/*",
  defaultValue: [],
  disabled: false,
  hasError: false,
  multiple: true,
  onChange: function onChange() {},
  value: []
};

var FileUploadPropTypes$1 = _extends({
  control: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.arrayOf(PropTypes.object),
  isRequired: PropTypes.string,
  name: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FileUploadDefaultProps$1 = {
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
FileUpload.propTypes = FileUploadPropTypes$1;
FileUpload.defaultProps = FileUploadDefaultProps$1;

var Input = function Input(props) {
  return /*#__PURE__*/React.createElement(FieldBase, _extends({
    component: "input"
  }, props));
};
Input.propTypes = FieldBasePropTypes;
Input.defaultProps = FieldBaseDefaultProps;

function _templateObject$x() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: 14px;\n  line-height: 120%;\n  color: ", ";\n"]);

  _templateObject$x = function _templateObject() {
    return data;
  };

  return data;
}
var StyledLabel$2 = styled.label(_templateObject$x(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.medium;
});
var FormLabel = function FormLabel(props) {
  return /*#__PURE__*/React.createElement(StyledLabel$2, props);
};
FormLabel.propTypes = {};
FormLabel.defaultProps = {};

function _templateObject$y() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$y = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRadioBase$1 = styled(RadioBase)(_templateObject$y(), function (theme) {
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

function _templateObject$z() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n\n  .react-select__control {\n    border-radius: 12px;\n    color: ", ";\n    padding: ", ";\n    height: 40px;\n    box-sizing: border-box;\n    box-shadow: none;\n    border-color: ", ";\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 120%;\n  }\n\n  .react-select__control--is-focused {\n    border-color: ", ";\n  }\n\n  .react-select__menu {\n    border-radius: 12px;\n  }\n\n  .react-select__option {\n    font-weight: 300;\n    font-size: 14px;\n    line-height: 160%;\n    padding: ", ";\n  }\n\n  .react-select__option--is-focused {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  .react-select__option:hover,\n  .react-select__option--is-selected {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$z = function _templateObject() {
    return data;
  };

  return data;
}
var ReactSelectWrapper = styled.div(_templateObject$z(), function (_ref) {
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
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node,
  show: PropTypes.bool.isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FormRowDefaultProps = {
  label: "",
  show: true
};

function _templateObject4$1() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  & > * {\n    :not(:last-child) {\n      margin-right: ", ";\n    }\n  }\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 0 30%;\n  padding-top: ", ";\n  ", " {\n    flex: 100%;\n    margin-bottom: ", ";\n    padding-top: 0;\n  }\n"]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$A() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  min-height: 40px;\n  margin-bottom: ", ";\n  ", ";\n  ", " {\n    flex-wrap: wrap;\n  }\n\n  ", "\n  ", "\n"]);

  _templateObject$A = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRow = styled.div(_templateObject$A(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
}, function (_ref2) {
  var show = _ref2.show;
  return !show && "display: none";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.breakpoints.down("sm");
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledLabel$3 = styled(FormLabel)(_templateObject2$a(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(3);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.breakpoints.down("sm");
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(2);
});
var FieldsAndErrorsWrapper = styled.div(_templateObject3$5());
var Fields = styled.div(_templateObject4$1(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing(4);
});
var FormRow = function FormRow(_ref8) {
  var children = _ref8.children,
      errors = _ref8.errors,
      fields = _ref8.fields,
      label = _ref8.label,
      show = _ref8.show,
      props = _objectWithoutPropertiesLoose(_ref8, ["children", "errors", "fields", "label", "show"]);

  var rowErrors = Array.isArray(errors) ? errors : getFormRowErrors(errors, fields);
  return /*#__PURE__*/React.createElement(StyledRow, _extends({
    show: show
  }, props), label && /*#__PURE__*/React.createElement(StyledLabel$3, null, label), /*#__PURE__*/React.createElement(FieldsAndErrorsWrapper, {
    fullWidth: !label
  }, /*#__PURE__*/React.createElement(Fields, null, children), rowErrors.map(function (err) {
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

function _templateObject$B() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n\n  user-select: none;\n\n  input {\n    border: none;\n    width: 40px;\n    outline: none;\n    font-weight: 600;\n    font-size: 16px;\n    text-align: center;\n  }\n\n  span {\n    font-size: 12px;\n    font-style: italic;\n  }\n"]);

  _templateObject$B = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$5 = styled.div(_templateObject$B(), function (_ref) {
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

var TextAreaPropTypes = _extends({}, FieldBasePropTypes, {
  autoFocus: PropTypes.bool,
  cols: PropTypes.number,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  rows: PropTypes.number,
  spellCheck: PropTypes.bool,
  tabIndex: PropTypes.number,
  wrap: PropTypes.oneOf(["soft", "hard"])
});
var TextAreaDefaultProps = _extends({}, FieldBaseDefaultProps, {
  rows: 5
});

var TextArea = function TextArea(props) {
  return /*#__PURE__*/React.createElement(FieldBase, _extends({}, props, {
    component: "textarea",
    fixedHeight: false
  }));
};
TextArea.propTypes = TextAreaPropTypes;
TextArea.defaultProps = TextAreaDefaultProps;

function _templateObject2$b() {
  var data = _taggedTemplateLiteralLoose(["\n  background: #fff;\n  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);\n  left: 2px;\n  position: absolute;\n  top: 2px;\n  transition: left 0.2s, transform 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: ", ";\n  text-transform: uppercase;\n  user-select: none;\n\n  ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$C() {
  var data = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  background-color: ", ";\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  transition: background-color 0.2s;\n\n  ", "\n\n    ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject$C = function _templateObject() {
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

var StyledSwitchContainer = styled.div(_templateObject$C(), function (_ref2) {
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
var StyledSwitch = styled.span(_templateObject2$b(), function (_ref9) {
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

function _templateObject$D() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  position: relative;\n\n  ", "\n  ", "\n"]);

  _templateObject$D = function _templateObject() {
    return data;
  };

  return data;
}
var StyledToggle = styled.div(_templateObject$D(), function (theme) {
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

function _templateObject3$6() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$c() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  min-height: 40px;\n\n  :last-child {\n    ", " {\n      border-left-width: 0;\n    }\n  }\n"]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$E() {
  var data = _taggedTemplateLiteralLoose(["\n  border-width: 0;\n  border-style: solid;\n  border-color: ", ";\n  border-left-width: 1px;\n  transition: all 0.1ms ease-in-out;\n  position: absolute;\n  bottom: 0;\n  left: 15px;\n  top: 0;\n  ::before {\n    content: \"\";\n    width: 1px;\n    height: 100%;\n    display: inline-block;\n  }\n"]);

  _templateObject$E = function _templateObject() {
    return data;
  };

  return data;
}
var ItemConnector = styled.div(_templateObject$E(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.regular;
});
var Container$3 = styled.div(_templateObject2$c(), ItemConnector);
var RowWrapper = styled.div(_templateObject3$6());
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
var StyledIcon$2 = styled(Icon)(_templateObject6(), function (_ref3) {
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

  return /*#__PURE__*/React.createElement(Container$3, {
    "data-cy": "historyItem"
  }, /*#__PURE__*/React.createElement(ItemConnector, null), /*#__PURE__*/React.createElement(RowWrapper, null, /*#__PURE__*/React.createElement(StyledIcon$2, {
    rounded: true,
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

function _templateObject$F() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$F = function _templateObject() {
    return data;
  };

  return data;
}
var Container$4 = styled.div(_templateObject$F(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var History = function History(_ref) {
  var rows = _ref.rows,
      props = _objectWithoutPropertiesLoose(_ref, ["rows"]);

  return /*#__PURE__*/React.createElement(Container$4, props, rows.map(function (h) {
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

function _templateObject$G() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$G = function _templateObject() {
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
var StyledImg = styled.img(_templateObject$G(), function (_ref2) {
  var width = _ref2.width;
  return width && "width: " + width + ";";
}, function (_ref3) {
  var height = _ref3.height;
  return height && "height: " + height + ";";
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
    setAnchorEl(null);
  };

  var current = languages.find(function (l) {
    return l.value === value;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextButton, _extends({
    content: current == null ? void 0 : current.label,
    color: "secondary",
    endIcon: "chevron-down",
    onClick: function onClick(_ref2) {
      var currentTarget = _ref2.currentTarget;
      return setAnchorEl(currentTarget);
    },
    startIcon: "globe"
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
  backButtonOnClick: PropTypes.func,
  headerLeft: PropTypes.node,
  headerRight: PropTypes.node,
  logoAction: PropTypes.func
};

function _templateObject2$d() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 48px;\n  height: 48px;\n"]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$H() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 0 120px;\n  ", " {\n    flex: 0 0 96px;\n  }\n"]);

  _templateObject$H = function _templateObject() {
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
})(_templateObject$H(), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.down("md");
});
var StyledLogo = styled(Image).attrs(function () {
  return {
    alt: "Logo",
    src: img$1
  };
})(_templateObject2$d());
var AuthLayoutHeader = function AuthLayoutHeader(_ref2) {
  var backButtonOnClick = _ref2.backButtonOnClick,
      headerLeft = _ref2.headerLeft,
      headerRight = _ref2.headerRight,
      logoAction = _ref2.logoAction,
      props = _objectWithoutPropertiesLoose(_ref2, ["backButtonOnClick", "headerLeft", "headerRight", "logoAction"]);

  var backButton = /*#__PURE__*/React.createElement(TextButton, {
    color: "secondary",
    onClick: backButtonOnClick,
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
  headerBackButtonOnClick: PropTypes.func,
  headerLeft: PropTypes.node,
  headerLogoAction: PropTypes.func,
  headerRight: PropTypes.node,
  loading: PropTypes.bool
};

function _templateObject2$e() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  width: 100%;\n  padding: ", ";\n"]);

  _templateObject2$e = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$I() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100%;\n"]);

  _templateObject$I = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContainer$1 = styled(MuiContainer)(_templateObject$I());
var Content$1 = styled.div(_templateObject2$e(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(10, 0);
});
var AuthLayout = function AuthLayout(_ref2) {
  var content = _ref2.content,
      headerLeft = _ref2.headerLeft,
      headerBackButtonOnClick = _ref2.headerBackButtonOnClick,
      headerLogoAction = _ref2.headerLogoAction,
      headerRight = _ref2.headerRight,
      loading = _ref2.loading,
      props = _objectWithoutPropertiesLoose(_ref2, ["content", "headerLeft", "headerBackButtonOnClick", "headerLogoAction", "headerRight", "loading"]);

  if (loading) return /*#__PURE__*/React.createElement(PageLoading, null);
  return /*#__PURE__*/React.createElement(StyledContainer$1, props, /*#__PURE__*/React.createElement(Flex, {
    container: true,
    direction: "column",
    lg: 5,
    md: 8,
    xs: 12,
    mAuto: true,
    h100: true,
    wrap: "nowrap"
  }, /*#__PURE__*/React.createElement(AuthLayoutHeader, {
    backButtonOnClick: headerBackButtonOnClick,
    headerLeft: headerLeft,
    headerLogoAction: headerLogoAction,
    headerRight: headerRight
  }), /*#__PURE__*/React.createElement(Content$1, null, content)));
};
AuthLayout.propTypes = AuthLayoutPropTypes;
AuthLayout.defaultProps = {};

var DashboardLayoutHeaderPropTypes = {
  backButtonOnClick: PropTypes.func,
  headerLeft: PropTypes.node,
  headerRight: PropTypes.node,
  logoAction: PropTypes.func
};

function _templateObject3$7() {
  var data = _taggedTemplateLiteralLoose(["\n  ", " {\n    order: 2;\n  }\n"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$f() {
  var data = _taggedTemplateLiteralLoose(["\n  ", " {\n    order: 1;\n  }\n\n  img {\n    width: 48px;\n    height: 48px;\n  }\n"]);

  _templateObject2$f = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$J() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 0 120px;\n  ", " {\n    flex: 0 0 96px;\n  }\n"]);

  _templateObject$J = function _templateObject() {
    return data;
  };

  return data;
}
var StyledHeader$1 = styled(Flex).attrs(function () {
  return {
    container: true,
    alignItems: "center",
    justify: "space-between"
  };
})(_templateObject$J(), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.down("md");
});
var LogoContainer = styled(Flex).attrs(function () {
  return {
    container: true,
    item: true,
    md: 2,
    xs: 4,
    justify: "center"
  };
})(_templateObject2$f(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.down("sm");
});
var HeaderRight = styled(Flex).attrs(function () {
  return {
    container: true,
    item: true,
    md: 2,
    xs: 4,
    justify: "flex-end"
  };
})(_templateObject3$7(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.breakpoints.down("sm");
});
var DashboardLayoutHeader = function DashboardLayoutHeader(_ref4) {
  var backButtonOnClick = _ref4.backButtonOnClick,
      headerLeft = _ref4.headerLeft,
      headerRight = _ref4.headerRight,
      logoAction = _ref4.logoAction,
      props = _objectWithoutPropertiesLoose(_ref4, ["backButtonOnClick", "headerLeft", "headerRight", "logoAction"]);

  var backButton = /*#__PURE__*/React.createElement(TextButton, {
    color: "secondary",
    onClick: backButtonOnClick,
    px: 0,
    size: "sm"
  }, "Back");
  return /*#__PURE__*/React.createElement(StyledHeader$1, props, /*#__PURE__*/React.createElement(LogoContainer, null, /*#__PURE__*/React.createElement(Image, {
    alt: "Logo",
    onClick: logoAction,
    src: img$1
  })), /*#__PURE__*/React.createElement(Flex, {
    item: true,
    md: 6,
    xs: 4
  }, headerLeft || backButton), /*#__PURE__*/React.createElement(HeaderRight, null, headerRight), /*#__PURE__*/React.createElement(Hidden, {
    smDown: true,
    implementation: "js"
  }, /*#__PURE__*/React.createElement(Flex, {
    item: true,
    md: 2
  })));
};
DashboardLayoutHeader.propTypes = DashboardLayoutHeaderPropTypes;

var DashboardLayoutPropTypes = {
  content: PropTypes.node.isRequired,
  headerBackButtonOnClick: PropTypes.func,
  headerLeft: PropTypes.node,
  headerLogoAction: PropTypes.func,
  headerRight: PropTypes.node,
  loading: PropTypes.bool
};

function _templateObject4$3() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    justify-content: center;\n    align-items: center;\n    min-width: 40px;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-color: #fff;\n    margin-right: ", ";\n    svg {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$8() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    box-shadow: initial;\n    max-height: unset;\n    height: 100%;\n  }\n"]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$g() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    color: ", ";\n    flex-direction: row;\n    margin-top: ", ";\n    height: 40px;\n    padding: 0;\n    cursor: pointer;\n\n    span {\n      font-size: 14px;\n    }\n\n    .MuiListItemText-root {\n      margin: 0;\n      .MuiTypography-root {\n        font-size: 16px;\n      }\n    }\n\n    &.Mui-selected {\n      background: none;\n      color: ", ";\n\n      .MuiTypography-root {\n        font-weight: 600;\n      }\n\n      svg {\n        color: ", ";\n      }\n    }\n\n    &.MuiListItem-root:hover {\n      color: ", ";\n      background: none;\n\n      svg {\n        color: ", ";\n      }\n    }\n\n    &:first-child {\n      margin-top: 0;\n    }\n  }\n"]);

  _templateObject2$g = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$K() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    color: ", ";\n    display: flex;\n    padding: 0;\n    margin: 0;\n    padding-left: ", ";\n    margin-bottom: 2px;\n    cursor: pointer;\n\n    &.Mui-selected {\n      background: none;\n      color: ", ";\n\n      span {\n        font-weight: bold;\n      }\n\n      &:hover {\n        background: inherit;\n      }\n    }\n\n    div {\n      margin: 0;\n      span {\n        font-size: 14px;\n      }\n    }\n  }\n"]);

  _templateObject$K = function _templateObject() {
    return data;
  };

  return data;
}
var NestedListItem = styled(ListItem)(_templateObject$K(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.text.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(12);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.text.primary;
});
var ImprovedListItem = styled(ListItem)(_templateObject2$g(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.text.secondary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(6);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.primary.main;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.primary.main;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.primary.main;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.palette.primary.main;
});
var ImprovedList = styled(List)(_templateObject3$8());
var ImprovedListItemIcon = styled(ListItemIcon)(_templateObject4$3(), function (_ref10) {
  var theme = _ref10.theme;
  return theme.spacing(2);
}, function (_ref11) {
  var thm = _ref11.theme;
  return thm.palette.text.secondary;
});
var NavigationMenu = function NavigationMenu(_ref12) {
  var items = _ref12.items;
  return /*#__PURE__*/React.createElement(ImprovedList, {
    component: "nav"
  }, items.filter(function (m) {
    return typeof m.show === "boolean" ? m.show : true;
  }).map(function (_ref13) {
    var _ref13$component = _ref13.component,
        component = _ref13$component === void 0 ? "a" : _ref13$component,
        selected = _ref13.selected,
        title = _ref13.title,
        icon = _ref13.icon,
        _ref13$additional = _ref13.additional,
        additional = _ref13$additional === void 0 ? null : _ref13$additional,
        dataCy = _ref13.dataCy,
        _ref13$nestedItems = _ref13.nestedItems,
        nestedItems = _ref13$nestedItems === void 0 ? [] : _ref13$nestedItems,
        Wrapper = _ref13.WrapperComponent,
        props = _objectWithoutPropertiesLoose(_ref13, ["component", "selected", "title", "icon", "additional", "dataCy", "nestedItems", "WrapperComponent"]);

    var showNested = nestedItems.length > 0 && selected;

    var item = function item() {
      return /*#__PURE__*/React.createElement(ImprovedListItem, _extends({
        component: component,
        selected: selected
      }, dataCy ? {
        "data-cy": dataCy
      } : {}, props), /*#__PURE__*/React.createElement(ImprovedListItemIcon, null, /*#__PURE__*/React.createElement(Icon, {
        icon: icon
      })), /*#__PURE__*/React.createElement(ListItemText, {
        primary: title
      }), additional);
    };

    var nestedItem = function nestedItem(n) {
      return /*#__PURE__*/React.createElement(NestedListItem, _extends({
        component: n.component || "a",
        key: n.title
      }, n), /*#__PURE__*/React.createElement(ListItemText, {
        primary: n.title
      }));
    };

    var listItem = function listItem() {
      return Wrapper ? /*#__PURE__*/React.createElement(Wrapper, null, item()) : item();
    };

    var nestedListItem = function nestedListItem(_ref14) {
      var WrapperComponent = _ref14.WrapperComponent,
          nested = _objectWithoutPropertiesLoose(_ref14, ["WrapperComponent"]);

      return WrapperComponent ? /*#__PURE__*/React.createElement(WrapperComponent, null, nestedItem(nested)) : nestedItem(nested);
    };

    return /*#__PURE__*/React.createElement(Fragment, {
      key: title
    }, listItem(), showNested && nestedItems.map(function (n) {
      return nestedListItem(n);
    }));
  }));
};
NavigationMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired
};

var UserMenu = function UserMenu(_ref) {
  var menuItems = _ref.menuItems,
      _onClick = _ref.onClick,
      props = _objectWithoutPropertiesLoose(_ref, ["menuItems", "onClick"]);

  var _useState = useState(null),
      anchorEl = _useState[0],
      setAnchorEl = _useState[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextButton, _extends({
    block: true,
    content: "John Seller",
    color: "subtle",
    endIcon: "chevron-down",
    startIcon: "user-circle",
    onClick: function onClick(_ref2) {
      var currentTarget = _ref2.currentTarget;
      return setAnchorEl(currentTarget);
    }
  }, props)), /*#__PURE__*/React.createElement(Dropdown, {
    anchorEl: anchorEl,
    items: menuItems.map(function (l) {
      return _extends({
        onClick: function onClick() {
          return _onClick(l.value);
        }
      }, l);
    }),
    open: Boolean(anchorEl),
    onClose: function onClose() {
      return setAnchorEl(null);
    }
  }));
};
UserMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape)
};
UserMenu.defaultProps = {
  menuItems: [{
    value: "/dashboard/profile",
    label: "Profile"
  }]
};

var DashboardLayoutNavigationPropTypes = {
  navigationItems: PropTypes.arrayOf(PropTypes.shape).isRequired
};

function _templateObject4$4() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n  height: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  background-color: ", ";\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$9() {
  var data = _taggedTemplateLiteralLoose(["\n  color: #fff;\n"]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$h() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    position: fixed;\n    bottom: ", ";\n    right: ", ";\n    z-index: 10;\n  }\n"]);

  _templateObject2$h = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$L() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: ", ";\n  height: 100%;\n"]);

  _templateObject$L = function _templateObject() {
    return data;
  };

  return data;
}
var MainNav = styled.div(_templateObject$L(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(0, 8, 0, 4);
});
var StyledFab = styled(Fab).attrs(function () {
  return {
    color: "primary",
    size: "small"
  };
})(_templateObject2$h(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(4);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(4);
});
var NavIcon = styled(Icon).attrs(function () {
  return {
    icon: "bars",
    size: "lg"
  };
})(_templateObject3$9());
var DrawerWrapper = styled.div(_templateObject4$4(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(2, 10, 0, 2);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.common.white;
});
var DashboardLayoutNavigation = function DashboardLayoutNavigation(_ref6) {
  var navigationItems = _ref6.navigationItems,
      userMenuItems = _ref6.userMenuItems,
      userMenuOnClick = _ref6.userMenuOnClick;

  var _useState = useState(false),
      mobileOpen = _useState[0],
      setMobileOpen = _useState[1];

  var renderMainNav = function renderMainNav() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavigationMenu, {
      items: navigationItems
    }), userMenuItems.length > 0 && /*#__PURE__*/React.createElement(UserMenu, {
      menuItems: userMenuItems,
      onClick: userMenuOnClick
    }));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hidden, {
    smUp: true,
    implementation: "js"
  }, /*#__PURE__*/React.createElement(StyledFab, {
    "aria-label": "toggleNavigation",
    onClick: function onClick() {
      return setMobileOpen(true);
    }
  }, /*#__PURE__*/React.createElement(NavIcon, null))), /*#__PURE__*/React.createElement(Hidden, {
    smUp: true,
    implementation: "js"
  }, /*#__PURE__*/React.createElement(Drawer, {
    variant: "temporary",
    anchor: "left",
    open: mobileOpen,
    onClose: function onClose() {
      return setMobileOpen(false);
    },
    ModalProps: {
      keepMounted: true
    }
  }, /*#__PURE__*/React.createElement(DrawerWrapper, null, renderMainNav()))), /*#__PURE__*/React.createElement(Hidden, {
    smDown: true,
    implementation: "js"
  }, /*#__PURE__*/React.createElement(MainNav, null, renderMainNav())));
};
DashboardLayoutNavigation.propTypes = DashboardLayoutNavigationPropTypes;

var DashboardLayoutFooterPropTypes = {
  content: PropTypes.node
};

function _templateObject$M() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  height: 70px;\n  width: 100%;\n  text-align: center;\n  padding-top: ", ";\n"]);

  _templateObject$M = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFooter = styled.div(_templateObject$M(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var DashboardLayoutFooter = function DashboardLayoutFooter(_ref2) {
  var content = _ref2.content,
      props = _objectWithoutPropertiesLoose(_ref2, ["content"]);

  return /*#__PURE__*/React.createElement(StyledFooter, props, content);
};
DashboardLayoutFooter.propTypes = DashboardLayoutFooterPropTypes;

function _templateObject4$5() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n\n  ", " {\n    padding: ", ";\n    height: 100%;\n  }\n"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$a() {
  var data = _taggedTemplateLiteralLoose(["\n  ", " {\n    height: 100%;\n  }\n\n  ", " {\n    order: 2;\n  }\n"]);

  _templateObject3$a = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$i() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  width: 100%;\n"]);

  _templateObject2$i = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$N() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100%;\n"]);

  _templateObject$N = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContainer$2 = styled(MuiContainer).attrs(function () {
  return {
    maxWidth: false
  };
})(_templateObject$N());
var Content$2 = styled.div(_templateObject2$i());
var NavigationContainer = styled(Flex).attrs(function () {
  return {
    item: true,
    md: 2,
    xs: 4
  };
})(_templateObject3$a(), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.up("md");
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.down("sm");
});
var SidebarContainer = styled(Flex).attrs(function () {
  return {
    item: true,
    md: 2,
    xs: 12
  };
})(_templateObject4$5(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(8, 0);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakpoints.up("md");
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(0, 8);
});
var poweredBy = /*#__PURE__*/React.createElement(Text, {
  color: "textSecondary",
  fontStyle: "italic"
}, "Powered by", /*#__PURE__*/React.createElement(Text, {
  color: "textPrimary",
  fontWeight: "bold",
  dInline: true
}, " ", "license.rocks"));
var DashboardLayout = function DashboardLayout(_ref6) {
  var content = _ref6.content,
      footerContent = _ref6.footerContent,
      headerLeft = _ref6.headerLeft,
      headerBackButtonOnClick = _ref6.headerBackButtonOnClick,
      headerLogoAction = _ref6.headerLogoAction,
      headerRight = _ref6.headerRight,
      navigationItems = _ref6.navigationItems,
      loading = _ref6.loading,
      sidebar = _ref6.sidebar,
      userMenuItems = _ref6.userMenuItems,
      userMenuOnClick = _ref6.userMenuOnClick,
      props = _objectWithoutPropertiesLoose(_ref6, ["content", "footerContent", "headerLeft", "headerBackButtonOnClick", "headerLogoAction", "headerRight", "navigationItems", "loading", "sidebar", "userMenuItems", "userMenuOnClick"]);

  if (loading) return /*#__PURE__*/React.createElement(PageLoading, null);
  return /*#__PURE__*/React.createElement(StyledContainer$2, props, /*#__PURE__*/React.createElement(Flex, {
    container: true,
    direction: "column",
    alignItems: "flex-start",
    justify: "flex-start",
    xs: 12,
    h100: true,
    wrap: "nowrap"
  }, /*#__PURE__*/React.createElement(DashboardLayoutHeader, {
    backButtonOnClick: headerBackButtonOnClick,
    headerLeft: headerLeft,
    headerRight: headerRight,
    logoAction: headerLogoAction
  }), /*#__PURE__*/React.createElement(Flex, {
    item: true,
    container: true,
    alignItems: "flex-start",
    justify: "flex-start",
    xs: 12
  }, /*#__PURE__*/React.createElement(NavigationContainer, null, /*#__PURE__*/React.createElement(DashboardLayoutNavigation, {
    navigationItems: navigationItems,
    userMenuItems: userMenuItems,
    userMenuOnClick: userMenuOnClick
  })), /*#__PURE__*/React.createElement(Flex, {
    item: true,
    md: 8,
    xs: 12
  }, /*#__PURE__*/React.createElement(Content$2, null, content)), /*#__PURE__*/React.createElement(SidebarContainer, null, sidebar)), /*#__PURE__*/React.createElement(Flex, {
    container: true,
    item: true,
    xs: 12
  }, /*#__PURE__*/React.createElement(DashboardLayoutFooter, {
    content: footerContent || poweredBy
  }))));
};
DashboardLayout.propTypes = DashboardLayoutPropTypes;

var ExplorerLayoutFooterPropTypes = {
  children: PropTypes.node
};

function _templateObject$O() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  height: 80px;\n  text-align: center;\n  padding-top: ", ";\n"]);

  _templateObject$O = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFooter$1 = styled.div(_templateObject$O(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var ExplorerLayoutFooter = function ExplorerLayoutFooter(_ref2) {
  var action = _ref2.action,
      props = _objectWithoutPropertiesLoose(_ref2, ["action"]);

  return /*#__PURE__*/React.createElement(StyledFooter$1, props);
};
ExplorerLayoutFooter.propTypes = ExplorerLayoutFooterPropTypes;

const img$2 = "data:image/svg+xml,%3csvg width='194' height='60' viewBox='0 0 194 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M86.0961 52.0601C88.0083 52.0601 89.3892 53.5534 89.3892 55.2955C89.3892 57.1088 88.0083 58.4599 86.0961 58.4599C84.184 58.4599 82.8384 57.1088 82.8384 55.2955C82.8384 53.5534 84.184 52.0601 86.0961 52.0601Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M103.965 40.1848C104.461 40.1848 104.815 40.2204 105.24 40.327L104.992 46.0158H103.965C99.9993 46.0158 97.8393 48.0779 97.8393 52.7V58.2821H92.1737V40.4337H97.8393V43.8469C99.114 41.7136 101.062 40.1848 103.965 40.1848Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M120.118 33.9272C127.2 33.9272 132.76 39.4382 132.76 46.4069C132.76 53.34 127.2 58.8155 120.118 58.8155C113.037 58.8155 107.477 53.34 107.477 46.4069C107.477 39.4382 113.037 33.9272 120.118 33.9272ZM120.118 53.4467C123.978 53.4467 126.917 50.4601 126.917 46.4069C126.917 42.3181 123.978 39.2959 120.118 39.2959C116.259 39.2959 113.32 42.3181 113.32 46.4069C113.32 50.4601 116.259 53.4467 120.118 53.4467Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M144.587 53.8378C146.392 53.8378 147.844 52.8778 148.446 50.709L153.651 51.8467C152.766 56.0777 149.013 58.8154 144.587 58.8154C139.275 58.8154 134.884 55.0111 134.884 49.3579C134.884 43.7403 139.275 39.9003 144.587 39.9003C148.907 39.9003 152.66 42.5669 153.651 46.7624L148.34 48.0424C147.844 45.8735 146.392 44.878 144.587 44.878C142.037 44.878 140.337 46.7624 140.337 49.3579C140.337 51.9889 142.037 53.8378 144.587 53.8378Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M175.992 58.2821H168.733L162.961 51.8467H161.934V58.2821H156.269V32.6828H161.934V46.5135H162.713L168.343 40.4337H175.177L167.387 48.9312L175.992 58.2821Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M176.087 53.6483L181.611 52.5105C181.859 54.0394 183.24 54.6083 184.762 54.6083C186.25 54.6083 187.064 53.9683 187.064 53.1861C187.064 52.5817 186.604 52.1194 185.294 51.8706L181.682 51.1595C178.389 50.555 176.512 48.7773 176.512 45.9685C176.512 42.3064 179.663 39.9242 184.16 39.9242C188.587 39.9242 191.526 41.9508 192.234 45.0441L187.064 46.0752C186.887 44.973 185.825 43.9774 184.09 43.9774C182.567 43.9774 182.071 44.7241 182.071 45.3641C182.071 45.8618 182.284 46.3596 183.417 46.6085L187.595 47.4618C190.959 48.1729 192.517 50.1995 192.517 52.8305C192.517 56.7771 189.118 58.8393 184.444 58.8393C180.265 58.8393 176.689 57.3104 176.087 53.6483Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M79.4906 27.4174H73.825V1.81807H79.4906V27.4174Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M88.9289 27.4174H83.2634V9.569H88.9289V27.4174Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M86.0961 1.07143C88.0083 1.07143 89.3892 2.56472 89.3892 4.3069C89.3892 6.12019 88.0083 7.47127 86.0961 7.47127C84.184 7.47127 82.8384 6.12019 82.8384 4.3069C82.8384 2.56472 84.184 1.07143 86.0961 1.07143Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M101.853 22.9731C103.659 22.9731 105.111 22.0131 105.713 19.8443L110.918 20.982C110.033 25.213 106.28 27.9507 101.853 27.9507C96.542 27.9507 92.1512 24.1464 92.1512 18.4932C92.1512 12.8756 96.542 9.03566 101.853 9.03566C106.173 9.03566 109.927 11.7023 110.918 15.8977L105.607 17.1777C105.111 15.0088 103.659 14.0133 101.853 14.0133C99.3039 14.0133 97.6043 15.8977 97.6043 18.4932C97.6043 21.1242 99.3039 22.9731 101.853 22.9731Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M131.601 18.4932V19.9509H118.57C119.03 22.0842 120.482 23.3997 122.394 23.3997C123.704 23.3997 125.227 23.0798 126.183 21.3376L131.211 22.3687C129.689 26.1375 126.466 27.9507 122.394 27.9507C117.26 27.9507 113.011 24.1464 113.011 18.4932C113.011 12.8756 117.26 9.03566 122.43 9.03566C127.458 9.03566 131.495 12.6622 131.601 18.4932ZM122.43 13.6578C120.836 13.6578 119.207 14.6533 118.676 16.4666H126.006C125.475 14.5466 124.059 13.6578 122.43 13.6578Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M145.659 9.03566C149.801 9.03566 152.563 11.9867 152.563 16.4666V27.4174H146.933V17.6754C146.933 15.5777 145.694 14.1555 143.888 14.1555C141.657 14.1555 140.205 15.6844 140.205 19.1332V27.4174H134.54V9.56898H140.205V11.2756C141.551 9.85342 143.428 9.03566 145.659 9.03566Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M155.219 22.7598L160.743 21.622C160.991 23.1509 162.372 23.7197 163.895 23.7197C165.382 23.7197 166.196 23.0798 166.196 22.2975C166.196 21.6931 165.736 21.2309 164.426 20.982L160.814 20.2709C157.521 19.6665 155.644 17.8888 155.644 15.08C155.644 11.4178 158.796 9.03566 163.293 9.03566C167.719 9.03566 170.658 11.0623 171.366 14.1555L166.196 15.1866C166.019 14.0844 164.957 13.0889 163.222 13.0889C161.699 13.0889 161.203 13.8355 161.203 14.4755C161.203 14.9733 161.416 15.4711 162.549 15.7199L166.727 16.5732C170.091 17.2843 171.649 19.311 171.649 21.942C171.649 25.8886 168.25 27.9507 163.576 27.9507C159.397 27.9507 155.821 26.4219 155.219 22.7598Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M192.403 18.4932V19.9509H179.372C179.832 22.0842 181.284 23.3997 183.196 23.3997C184.506 23.3997 186.029 23.0798 186.985 21.3376L192.013 22.3687C190.49 26.1375 187.268 27.9507 183.196 27.9507C178.062 27.9507 173.812 24.1464 173.812 18.4932C173.812 12.8756 178.062 9.03566 183.231 9.03566C188.26 9.03566 192.296 12.6622 192.403 18.4932ZM183.231 13.6578C181.638 13.6578 180.009 14.6533 179.478 16.4666H186.808C186.277 14.5466 184.86 13.6578 183.231 13.6578Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.58723 46.6197C11.4115 46.6197 14.1734 49.6063 14.1734 53.0907C14.1734 56.7172 11.4115 59.4194 7.58723 59.4194C3.76298 59.4194 1.07184 56.7172 1.07184 53.0907C1.07184 49.6063 3.76298 46.6197 7.58723 46.6197ZM38.7574 9.64285C52.9213 9.64285 64.04 20.6648 64.04 34.6022C64.04 48.4685 52.9213 59.4194 38.7574 59.4194C24.5936 59.4194 13.4749 48.4685 13.4749 34.6022C13.4749 20.6648 24.5936 9.64285 38.7574 9.64285ZM38.7574 48.6819C46.4768 48.6819 52.3548 42.7087 52.3548 34.6022C52.3548 26.4247 46.4768 20.3804 38.7574 20.3804C31.0381 20.3804 25.1601 26.4247 25.1601 34.6022C25.1601 42.7087 31.0381 48.6819 38.7574 48.6819Z' fill='%23AC00FC'/%3e%3c/svg%3e";

var ExplorerLayoutHeaderPropTypes = {
  headerRight: PropTypes.node,
  logoAction: PropTypes.func
};

function _templateObject2$j() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 155px;\n  ", " {\n    width: 103px;\n  }\n"]);

  _templateObject2$j = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$P() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 128px;\n  ", " {\n    height: 96px;\n  }\n"]);

  _templateObject$P = function _templateObject() {
    return data;
  };

  return data;
}
var StyledHeader$2 = styled(Grid).attrs(function () {
  return {
    container: true,
    alignItems: "center"
  };
})(_templateObject$P(), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.down("md");
});
var StyledLogo$1 = styled(Image).attrs(function () {
  return {
    alt: "Logo",
    src: img$2
  };
})(_templateObject2$j(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.down("md");
});
var ExplorerLayoutHeader = function ExplorerLayoutHeader(_ref3) {
  var headerRight = _ref3.headerRight,
      logoAction = _ref3.logoAction,
      props = _objectWithoutPropertiesLoose(_ref3, ["headerRight", "logoAction"]);

  return /*#__PURE__*/React.createElement(StyledHeader$2, props, /*#__PURE__*/React.createElement(Grid, {
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
  loading: PropTypes.bool,
  sidebar: PropTypes.node
};

function _templateObject$Q() {
  var data = _taggedTemplateLiteralLoose(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n  ", " {\n    padding-top: ", ";\n  }\n"]);

  _templateObject$Q = function _templateObject() {
    return data;
  };

  return data;
}
var Content$3 = styled(Grid).attrs(function () {
  return {
    container: true
  };
})(_templateObject$Q(), function (_ref) {
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
var poweredBy$1 = /*#__PURE__*/React.createElement(Text, {
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
      loading = _ref5.loading,
      sidebar = _ref5.sidebar,
      props = _objectWithoutPropertiesLoose(_ref5, ["ads", "content", "extraContent", "extraSidebar", "footerContent", "headerLogoAction", "headerRight", "loading", "sidebar"]);

  if (loading) return /*#__PURE__*/React.createElement(PageLoading, null);
  return /*#__PURE__*/React.createElement(MuiContainer, props, /*#__PURE__*/React.createElement(ExplorerLayoutHeader, {
    logoAction: headerLogoAction,
    headerRight: headerRight
  }), /*#__PURE__*/React.createElement(Content$3, null, /*#__PURE__*/React.createElement(Hidden, {
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
  }, extraContent, ads))), footerContent && /*#__PURE__*/React.createElement(ExplorerLayoutFooter, null, footerContent || poweredBy$1));
};
ExplorerLayout.propTypes = ExplorerLayoutPropTypes;
ExplorerLayout.defaultProps = {
  footerContent: poweredBy$1
};

var MarketPlaceItemPropTypes = {
  action: PropTypes.func,
  actionTitle: PropTypes.string,
  details: PropTypes.array,
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  iconPrefix: PropTypes.string,
  megaTitle: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string
};
var MarketPlaceItemDefaultProps = {
  actionTitle: "More info",
  details: []
};

const img$3 = "data:image/svg+xml,%3csvg width='92' height='109' viewBox='0 0 92 109' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M32 2.00015C36 3.00015 36 10.0002 36 10.0002C36 10.0002 37.2536 109.627 34 108C33.7765 107.888 22.7735 108 22 108C14 108 22 3.00015 22 3.00015C24 2.00015 28 1.00015 32 2.00015Z' fill='white' stroke='%23F0F0F4' stroke-width='1.5' stroke-linejoin='round'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M27 8.11923C27 4.39928 30.3502 1.57581 34.0163 2.20593L84.3551 10.8579C88.1942 11.5178 91 14.8469 91 18.7423V100C91 104.418 87.4183 108 83 108H33C29.6863 108 27 105.314 27 102V8.11923Z' fill='white' stroke='%23F0F0F4' stroke-width='1.5' stroke-linejoin='round'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M27 10.0534C27 5.75785 22.6182 2.85385 18.6622 4.52755L5.88288 9.93417C2.92312 11.1864 1 14.0882 1 17.3019V100C1 104.418 4.58172 108 9 108H21C24.3137 108 27 105.314 27 102V10.0534Z' fill='white' stroke='%23F0F0F4' stroke-width='1.5' stroke-linejoin='round'/%3e%3c/svg%3e";

function _templateObject2$k() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: 24px;\n  margin-left: ", ";\n"]);

  _templateObject2$k = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$R() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-top: -", ";\n  margin-bottom: ", ";\n  position: relative;\n  background-image: url(\"", "\");\n  background-size: 90px 108px;\n  background-repeat: no-repeat;\n  width: 90px;\n  height: 108px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject$R = function _templateObject() {
    return data;
  };

  return data;
}
var LicenseBoxWrapper = styled.div(_templateObject$R(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(10);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2);
}, "" + img$3);
var StyledIcon$3 = styled(Icon)(_templateObject2$k(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(6);
});
var LicenseBox = function LicenseBox(_ref4) {
  var iconName = _ref4.iconName,
      iconPrefix = _ref4.iconPrefix,
      iconColor = _ref4.iconColor,
      props = _objectWithoutPropertiesLoose(_ref4, ["iconName", "iconPrefix", "iconColor"]);

  return /*#__PURE__*/React.createElement(LicenseBoxWrapper, props, /*#__PURE__*/React.createElement(StyledIcon$3, {
    color: iconColor,
    icon: iconName,
    prefix: iconPrefix
  }));
};
LicenseBox.propTypes = {
  iconName: PropTypes.string,
  iconPrefix: PropTypes.string,
  iconColor: PropTypes.string
};
LicenseBox.defaultProps = {
  iconName: "th-large",
  iconPrefix: "fas",
  iconColor: "primary"
};

function _templateObject2$l() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  padding: ", ";\n  box-sizing: border-box;\n  ", "\n"]);

  _templateObject2$l = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$S() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: 8px;\n  overflow: initial;\n  min-height: 240px;\n  text-align: center;\n  margin-top: ", ";\n  width: 100%;\n"]);

  _templateObject$S = function _templateObject() {
    return data;
  };

  return data;
}
var StyledMarketPlaceItem = styled(BoxBase)(_templateObject$S(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(10);
});
var Content$4 = styled.div(_templateObject2$l(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2, 4, 4, 4);
}, function (_ref3) {
  var initialTextAlign = _ref3.initialTextAlign;
  return initialTextAlign && "text-align: initial;";
});
var MarketPlaceItem = function MarketPlaceItem(_ref4) {
  var ActionWrapper = _ref4.ActionWrapper,
      action = _ref4.action,
      actionTitle = _ref4.actionTitle,
      dataCy = _ref4.dataCy,
      details = _ref4.details,
      iconName = _ref4.iconName,
      iconPrefix = _ref4.iconPrefix,
      iconColor = _ref4.iconColor,
      megaTitle = _ref4.megaTitle,
      subTitle = _ref4.subTitle,
      title = _ref4.title,
      props = _objectWithoutPropertiesLoose(_ref4, ["ActionWrapper", "action", "actionTitle", "dataCy", "details", "iconName", "iconPrefix", "iconColor", "megaTitle", "subTitle", "title"]);

  var actionButton = /*#__PURE__*/React.createElement(Button, {
    block: true,
    content: actionTitle,
    color: "subtle",
    onClick: action
  });
  return /*#__PURE__*/React.createElement(StyledMarketPlaceItem, _extends({
    "data-cy": dataCy
  }, props), /*#__PURE__*/React.createElement(LicenseBox, {
    iconName: iconName,
    iconPrefix: iconPrefix,
    iconColor: iconColor
  }), /*#__PURE__*/React.createElement(Content$4, null, /*#__PURE__*/React.createElement(Text, {
    content: megaTitle,
    color: "textSecondary",
    noWrap: true
  }), /*#__PURE__*/React.createElement(H3, {
    content: title,
    noWrap: true
  }), /*#__PURE__*/React.createElement(Text, {
    content: subTitle,
    color: "textSecondary",
    fontSize: "sm",
    fontStyle: "italic",
    noWrap: true
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Content$4, {
    initialTextAlign: true
  }, /*#__PURE__*/React.createElement(DetailsTable, {
    justifyBetween: true,
    rows: details
  }), ActionWrapper ? /*#__PURE__*/React.createElement(ActionWrapper, null, actionButton) : actionButton));
};
MarketPlaceItem.propTypes = MarketPlaceItemPropTypes;
MarketPlaceItem.defaultProps = MarketPlaceItemDefaultProps;

var WIDTH$1 = 160;
var HEIGHT$1 = 130;
var ICON_SIZE$1 = 24;
var ICON_TOP$1 = 24;
var TITLE_WIDTH$1 = 80;
var TITLE_HEIGHT$1 = 16;
var TITLE_TOP$1 = ICON_SIZE$1 + ICON_TOP$1 + 8;
var DESC_WIDTH$1 = 100;
var DESC_HEIGHT$1 = 8;
var DESC_TOP$1 = TITLE_HEIGHT$1 + TITLE_TOP$1 + 8;
var DESC2_WIDTH$1 = 50;
var DESC2_HEIGHT$1 = 8;
var DESC2_TOP$1 = DESC_TOP$1 + DESC_HEIGHT$1 + 8;
var MarketPlaceItemContentLoader = function MarketPlaceItemContentLoader(_ref) {
  var subCategory = _ref.subCategory;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(RCL, {
    width: WIDTH$1,
    height: HEIGHT$1,
    backgroundColor: theme.palette.gray.light,
    foregroundColor: theme.palette.gray.regular,
    style: {
      // border: `4px solid ${theme.palette.gray.light}`,
      backgroundColor: theme.palette.gray.light,
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: WIDTH$1 / 2 - ICON_SIZE$1 / 2,
    y: ICON_TOP$1,
    rx: 4,
    ry: 4,
    width: ICON_SIZE$1,
    height: ICON_SIZE$1
  }), /*#__PURE__*/React.createElement("rect", {
    x: WIDTH$1 / 2 - TITLE_WIDTH$1 / 2,
    y: TITLE_TOP$1,
    rx: 0,
    ry: 0,
    width: TITLE_WIDTH$1,
    height: TITLE_HEIGHT$1
  }), !subCategory && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: WIDTH$1 / 2 - DESC_WIDTH$1 / 2,
    y: DESC_TOP$1,
    rx: 0,
    ry: 0,
    width: DESC_WIDTH$1,
    height: DESC_HEIGHT$1
  }), /*#__PURE__*/React.createElement("rect", {
    x: WIDTH$1 / 2 - DESC2_WIDTH$1 / 2,
    y: DESC2_TOP$1,
    rx: 0,
    ry: 0,
    width: DESC2_WIDTH$1,
    height: DESC2_HEIGHT$1
  })));
};
MarketPlaceItemContentLoader.propTypes = {
  subCategory: PropTypes.bool
};
MarketPlaceItemContentLoader.defaultProps = {
  subCategory: false
};

function _templateObject5$1() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  z-index: 1;\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$6() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    justify-content: ", ";\n  }\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$b() {
  var data = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n  background-color: white;\n  && {\n    color: ", ";\n  }\n"]);

  _templateObject3$b = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$m() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    font-size: 16px;\n    font-weight: 500;\n    color: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: ", "px;\n  }\n"]);

  _templateObject2$m = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$T() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    padding: 0;\n    &:first-child {\n      padding-top: 0;\n    }\n  }\n"]);

  _templateObject$T = function _templateObject() {
    return data;
  };

  return data;
}
var ContentWrapper = styled(DialogContent).attrs(function () {
  return {
    dividers: true
  };
})(_templateObject$T());
var Title = styled(DialogTitle).attrs(function () {
  return {
    disableTypography: true
  };
})(_templateObject2$m(), function (_ref) {
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
})(_templateObject3$b(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.secondary.dark;
});
var Actions = styled(DialogActions)(_templateObject4$6(), function (_ref4) {
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

var NoItemPropTypes = _extends({
  buttonAction: PropTypes.func,
  buttonHref: PropTypes.string,
  buttonText: PropTypes.string,
  dataCy: PropTypes.string,
  text: PropTypes.string
}, COLOR_PROP_TYPES, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var NoItemDefaultProps = {
  buttonAction: null,
  buttonHref: null,
  buttonText: "",
  dataCy: "noItem",
  text: "Nothing yet..."
};

function _templateObject2$n() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: 32px;\n"]);

  _templateObject2$n = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$U() {
  var data = _taggedTemplateLiteralLoose(["\n  text-align: center;\n\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$U = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$6 = styled.div(_templateObject$U(), function (theme) {
  return COLOR(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var StyledIcon$4 = styled(Icon).attrs(function () {
  return {
    colorGrayRegular: true,
    icon: "sad-cry"
  };
})(_templateObject2$n());
var NoItem = function NoItem(_ref) {
  var buttonAction = _ref.buttonAction,
      buttonHref = _ref.buttonHref,
      buttonText = _ref.buttonText,
      dataCy = _ref.dataCy,
      text = _ref.text,
      props = _objectWithoutPropertiesLoose(_ref, ["buttonAction", "buttonHref", "buttonText", "dataCy", "text"]);

  return /*#__PURE__*/React.createElement(Wrapper$6, _extends({
    "data-cy": dataCy
  }, props), /*#__PURE__*/React.createElement(StyledIcon$4, null), /*#__PURE__*/React.createElement(Text, {
    fontWeight: "bold",
    my: 2
  }, text), buttonText && /*#__PURE__*/React.createElement(Button, {
    color: "subtle",
    href: buttonHref,
    onClick: buttonAction,
    size: "xs"
  }, buttonText));
};
NoItem.propTypes = NoItemPropTypes;
NoItem.defaultProps = NoItemDefaultProps;

var PageLoadingPropTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(["page", "box"])
};
var PageLoadingDefaultProps = {
  type: "page"
};

function _templateObject$V() {
  var data = _taggedTemplateLiteralLoose(["\n  position: ", ";\n  top: 0;\n  right: 0;\n  left: 0;\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n"]);

  _templateObject$V = function _templateObject() {
    return data;
  };

  return data;
}
var StyledLoading = styled.div(_templateObject$V(), function (_ref) {
  var type = _ref.type;
  return type === "page" ? "fixed" : "absolute";
}, function (_ref2) {
  var type = _ref2.type;
  return type === "page" ? "100vw" : "100%";
}, function (_ref3) {
  var type = _ref3.type;
  return type === "page" ? "100vh" : "100%";
}, function (_ref4) {
  var theme = _ref4.theme,
      type = _ref4.type;
  return type === "page" ? theme.palette.common.white : "rgba(0, 0, 0, 0.3)";
});
var PageLoading = function PageLoading(_ref5) {
  var message = _ref5.message,
      props = _objectWithoutPropertiesLoose(_ref5, ["message"]);

  return /*#__PURE__*/React.createElement(StyledLoading, props, /*#__PURE__*/React.createElement(RocksSpinner, null), message && /*#__PURE__*/React.createElement(Text, {
    content: message,
    fontWeight: "bold",
    mt: 4
  }));
};
PageLoading.propTypes = PageLoadingPropTypes;
PageLoading.defaultProps = PageLoadingDefaultProps;

var Container$5 = function Container(_ref) {
  var children = _ref.children,
      isFinished = _ref.isFinished,
      animationDuration = _ref.animationDuration;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: isFinished ? 0 : 1,
      pointerEvents: "none",
      transition: "opacity " + animationDuration + "ms linear"
    }
  }, children);
};
Container$5.propTypes = {
  animationDuration: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  isFinished: PropTypes.bool.isRequired
};

function _templateObject2$o() {
  var data = _taggedTemplateLiteralLoose(["\n  box-shadow: ", ";\n  display: block;\n  height: 100%;\n  opacity: 1;\n  position: absolute;\n  right: 0;\n  transform: rotate(3deg) translate(0px, -4px);\n  width: 100;\n"]);

  _templateObject2$o = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$W() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  height: 2px;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1031;\n"]);

  _templateObject$W = function _templateObject() {
    return data;
  };

  return data;
}
var StyledBar = styled.div(_templateObject$W(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.primary.main;
});
var InnerBar = styled.div(_templateObject2$o(), function (_ref2) {
  var theme = _ref2.theme;
  return "0 0 10px " + theme.palette.primary.main + ", 0 0 5px  " + theme.palette.primary.main;
});
var Bar = function Bar(_ref3) {
  var animationDuration = _ref3.animationDuration,
      progress = _ref3.progress;
  return /*#__PURE__*/React.createElement(StyledBar, {
    style: {
      marginLeft: (-1 + progress) * 100 + "%",
      transition: "margin-left " + animationDuration + "ms linear"
    }
  }, /*#__PURE__*/React.createElement(InnerBar, null));
};
Bar.propTypes = {
  animationDuration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired
};

var Progress = function Progress(_ref) {
  var isAnimating = _ref.isAnimating;

  var _useNProgress = useNProgress({
    isAnimating: isAnimating
  }),
      animationDuration = _useNProgress.animationDuration,
      isFinished = _useNProgress.isFinished,
      progress = _useNProgress.progress;

  return /*#__PURE__*/React.createElement(Container$5, {
    animationDuration: animationDuration,
    isFinished: isFinished
  }, /*#__PURE__*/React.createElement(Bar, {
    animationDuration: animationDuration,
    progress: progress
  }));
};

var PageProgressBarPropTypes = {
  isAnimating: PropTypes.bool,
  instanceKey: PropTypes.string,
  listener: PropTypes.func
};
var PageProgressBarDefaultProps = {
  isAnimating: false,
  instanceKey: null
};

var PageProgressBar = function PageProgressBar(_ref) {
  var isAnimating = _ref.isAnimating,
      instanceKey = _ref.instanceKey,
      listener = _ref.listener;

  var _useState = useState(false),
      isRouteChanging = _useState[0],
      setIsRouteChanging = _useState[1];

  var _useState2 = useState(new Date().getTime()),
      loadingKey = _useState2[0],
      setLoadingKey = _useState2[1];

  var routeChangeStartHandler = function routeChangeStartHandler() {
    setIsRouteChanging(true);
    setLoadingKey(new Date().getTime());
  };

  var routeChangeEndHandler = function routeChangeEndHandler() {
    setIsRouteChanging(false);
  };

  useEffect(function () {
    if (listener) {
      listener(routeChangeStartHandler, routeChangeEndHandler);
    }
  }, []);
  return /*#__PURE__*/React.createElement(Progress, {
    isAnimating: isRouteChanging || isAnimating
  });
};
PageProgressBar.propTypes = PageProgressBarPropTypes;
PageProgressBar.defaultProps = PageProgressBarDefaultProps;

function _templateObject$X() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: auto;\n  transition: filter ", "ms ease-in-out;\n\n  ", ";\n"]);

  _templateObject$X = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContent = styled.div(_templateObject$X(), function (_ref) {
  var duration = _ref.duration;
  return duration / 2;
}, function (_ref2) {
  var state = _ref2.state;

  switch (state) {
    case "entering":
    case "exited":
      return css(["-webkit-filter:blur(0.75rem);filter:blur(0.75rem);pointer-events:none;"]);

    default:
      return css(["-webkit-filter:blur(0);filter:blur(0);"]);
  }
});
var duration = 200;
var PageTransition = function PageTransition(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["children"]);

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
    }, props), children);
  });
};
PageTransition.propTypes = {
  children: PropTypes.node.isRequired
};
PageTransition.defaultProps = {};

var PaginationPropTypes = {
  currentPage: PropTypes.number,
  itemProps: PropTypes.shape({}),
  nextText: PropTypes.string,
  pageCount: PropTypes.number,
  prevText: PropTypes.string
};
var PaginationDefaultProps = {
  nextText: "Next",
  prevText: "Prev"
};

function _templateObject2$p() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    width: 24px;\n    min-width: 24px;\n    height: 24px;\n    background: ", ";\n    border-radius: 8px;\n    padding: 0;\n  }\n"]);

  _templateObject2$p = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$Y() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject$Y = function _templateObject() {
    return data;
  };

  return data;
}
var StyledPagination = styled(MuiPagination)(_templateObject$Y());
var StyledPaginationItem = styled(PaginationItem)(_templateObject2$p(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.semiLight;
});

var prevButton = function prevButton(prevText, disabled) {
  return /*#__PURE__*/React.createElement(OutlineButton, {
    content: prevText,
    color: "secondary",
    disabled: disabled,
    mr: 6,
    size: "sm",
    startIcon: "chevron-left"
  });
};

var nextButton = function nextButton(nextText, disabled) {
  return /*#__PURE__*/React.createElement(OutlineButton, {
    content: nextText,
    color: "secondary",
    disabled: disabled,
    endIcon: "chevron-right",
    ml: 6,
    size: "sm"
  });
};

var Pagination = function Pagination(_ref2) {
  var currentPage = _ref2.currentPage,
      itemProps = _ref2.itemProps,
      ItemWrapper = _ref2.ItemWrapper,
      nextText = _ref2.nextText,
      pageCount = _ref2.pageCount,
      prevText = _ref2.prevText,
      props = _objectWithoutPropertiesLoose(_ref2, ["currentPage", "itemProps", "ItemWrapper", "nextText", "pageCount", "prevText"]);

  var _renderItem = function renderItem(item) {
    if (item.type === "previous") return prevButton(prevText, currentPage === 1);
    if (item.type === "next") return nextButton(nextText, currentPage === pageCount);
    return /*#__PURE__*/React.createElement(StyledPaginationItem, _extends({}, item, itemProps));
  };

  return /*#__PURE__*/React.createElement(StyledPagination, _extends({
    page: currentPage,
    count: pageCount,
    renderItem: function renderItem(item) {
      return ItemWrapper ? /*#__PURE__*/React.createElement(ItemWrapper, {
        page: item.page
      }, _renderItem(item)) : _renderItem(item);
    }
  }, props));
};
Pagination.propTypes = PaginationPropTypes;
Pagination.defaultProps = PaginationDefaultProps;

var SearchBarPropTypes = {
  filterButtonText: PropTypes.string,
  filterItems: PropTypes.array,
  noBorderRadius: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  showFilter: PropTypes.nool,
  value: PropTypes.string
};
var SearchBarDefaultProps = {
  filterButtonText: "Filter",
  filterItems: [],
  placeholder: "Type and press Enter"
};

function _templateObject3$c() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    margin-left: ", ";\n    border-radius: unset;\n    background-color: ", ";\n\n    svg {\n      font-size: 16px;\n    }\n  }\n"]);

  _templateObject3$c = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$q() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    background-color: ", ";\n    height: 100%;\n    border: none;\n    outline: none;\n    border-radius: unset;\n  }\n"]);

  _templateObject2$q = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$Z() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: transparent;\n  ", "\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n"]);

  _templateObject$Z = function _templateObject() {
    return data;
  };

  return data;
}
var StyledSearchBar = styled.form(_templateObject$Z(), function (_ref) {
  var noBorderRadius = _ref.noBorderRadius;
  return !noBorderRadius && "border-radius: 12px;";
});
var SearchInput = styled(FieldBase).attrs(function () {
  return {
    component: "input"
  };
})(_templateObject2$q(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.gray.semiLight;
});
var FilterButton = styled(TextButton)(_templateObject3$c(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(1);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.gray.semiLight;
});
var SearchBar = function SearchBar(_ref5) {
  var filterButtonText = _ref5.filterButtonText,
      filterItems = _ref5.filterItems,
      onChange = _ref5.onChange,
      onSubmit = _ref5.onSubmit,
      placeholder = _ref5.placeholder,
      showFilter = _ref5.showFilter,
      value = _ref5.value,
      props = _objectWithoutPropertiesLoose(_ref5, ["filterButtonText", "filterItems", "onChange", "onSubmit", "placeholder", "showFilter", "value"]);

  var _useState = useState(value),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var _useState2 = useState(null),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) onSubmit(inputValue);
  };

  var handleChange = function handleChange(e) {
    setInputValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  var handleClear = function handleClear() {
    setInputValue("");
    if (onChange) onChange("");
    if (value && onSubmit) onSubmit("");
  };

  return /*#__PURE__*/React.createElement(StyledSearchBar, _extends({
    onSubmit: handleSubmit
  }, props), /*#__PURE__*/React.createElement(SearchInput, {
    endIcon: inputValue ? "times" : null,
    endIconOnClick: handleClear,
    placeholder: placeholder,
    startIcon: "search",
    startIconColor: "secondary",
    value: inputValue,
    onChange: handleChange
  }), showFilter && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterButton, {
    content: filterButtonText,
    color: "secondary",
    onClick: function onClick(_ref6) {
      var currentTarget = _ref6.currentTarget;
      return setAnchorEl(currentTarget);
    },
    startIcon: "filter"
  }), /*#__PURE__*/React.createElement(Dropdown, {
    anchorEl: anchorEl,
    items: filterItems.map(function (l) {
      var _current;

      return _extends({
        onClick: handleClick,
        selected: l.value === ((_current = current) == null ? void 0 : _current.value)
      }, l);
    }),
    open: Boolean(anchorEl),
    onClose: function onClose() {
      return setAnchorEl(null);
    }
  })));
};
SearchBar.propTypes = SearchBarPropTypes;
SearchBar.defaultProps = SearchBarDefaultProps;

function _templateObject$_() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n\n  && {\n    background-color: ", ";\n    svg {\n      color: ", ";\n    }\n\n    :hover {\n      background-color: ", ";\n\n      svg {\n        color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject$_ = function _templateObject() {
    return data;
  };

  return data;
}
var Button$1 = styled(ButtonBase)(_templateObject$_(), function (_ref) {
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
  var buttonProps = _ref5.buttonProps,
      href = _ref5.href,
      icon = _ref5.icon,
      iconPrefix = _ref5.iconPrefix,
      onClick = _ref5.onClick;
  return /*#__PURE__*/React.createElement(Button$1, _extends({
    href: href,
    icon: icon,
    iconProps: {
      prefix: iconPrefix
    },
    noPadding: true,
    onClick: onClick,
    target: "_blank"
  }, buttonProps));
};
ShareModuleButton.propTypes = {
  buttonProps: PropTypes.shape({}),
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconPrefix: PropTypes.string,
  onClick: PropTypes.func
};
ShareModuleButton.defaultProps = {
  buttonProps: {},
  href: null,
  iconPrefix: "fab",
  onClick: null
};

var SHARE_MODULE_SHARE_OPTIONS = ["twitter", "facebook", "telegram", "whatsapp", "email", "navigator"];

var ShareModulePropTypes = _extends({
  buttonProps: PropTypes.shape(ButtonBasePropTypes),
  copyText: PropTypes.string,
  shareOptions: PropTypes.arrayOf(PropTypes.oneOf(SHARE_MODULE_SHARE_OPTIONS)),
  url: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ShareModuleDefaultProps = {
  copyText: "Or copy the link",
  shareOptions: SHARE_MODULE_SHARE_OPTIONS,
  url: "#"
};

function _templateObject3$d() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    ", "\n  }\n"]);

  _templateObject3$d = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$r() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: ", ";\n"]);

  _templateObject2$r = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$$() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$$ = function _templateObject() {
    return data;
  };

  return data;
}
var Container$6 = styled.div(_templateObject$$(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var ButtonsWrapper = styled.div(_templateObject2$r(), function (_ref) {
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
})(_templateObject3$d(), function (_ref2) {
  var spacing = _ref2.theme.spacing;
  return css(["margin:", ";"], spacing(2, 0));
});
var ShareModule = function ShareModule(_ref3) {
  var _navigator;

  var buttonProps = _ref3.buttonProps,
      copyText = _ref3.copyText,
      shareOptions = _ref3.shareOptions,
      url = _ref3.url,
      props = _objectWithoutPropertiesLoose(_ref3, ["buttonProps", "copyText", "shareOptions", "url"]);

  var theme = useTheme();
  return /*#__PURE__*/React.createElement(Container$6, props, /*#__PURE__*/React.createElement(ButtonsWrapper, null, shareOptions.includes("twitter") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "twitter",
    href: "https://twitter.com/intent/tweet?url=" + url,
    buttonProps: buttonProps
  }), shareOptions.includes("facebook") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "facebook-f",
    href: "https://www.facebook.com/sharer.php?u=" + url,
    buttonProps: buttonProps
  }), shareOptions.includes("telegram") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "telegram-plane",
    href: "tg://msg?text=" + url,
    buttonProps: buttonProps
  }), shareOptions.includes("whatsapp") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "whatsapp",
    href: "whatsapp://send?" + url,
    buttonProps: buttonProps
  }), shareOptions.includes("email") && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "envelope",
    iconPrefix: theme.defaultIconSet,
    href: "mailto:?body=" + url,
    buttonProps: buttonProps
  }), shareOptions.includes("navigator") && ((_navigator = navigator) == null ? void 0 : _navigator.share) && /*#__PURE__*/React.createElement(ShareModuleButton, {
    icon: "ellipsis-h",
    iconPrefix: theme.defaultIconSet,
    onClick: function onClick() {
      var _navigator2;

      return (_navigator2 = navigator) == null ? void 0 : _navigator2.share({
        url: url
      });
    },
    buttonProps: buttonProps
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

function _templateObject$10() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > div {\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n    animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  }\n\n  .bounce1 {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n  }\n\n  .bounce2 {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n  }\n\n  @-webkit-keyframes sk-bouncedelay {\n    0%, 80%, 100% { -webkit-transform: scale(0) }\n    40% { -webkit-transform: scale(1.0) }\n  }\n\n  @keyframes sk-bouncedelay {\n    0%, 80%, 100% {\n      -webkit-transform: scale(0);\n      transform: scale(0);\n    } 40% {\n      -webkit-transform: scale(1.0);\n      transform: scale(1.0);\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$10 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDotsSpinner = styled.div(_templateObject$10(), function (_ref) {
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

function _templateObject$11() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", "px;\n  height: ", "px;\n  position: relative;\n\n  .dot {\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n    border-radius: 100%;\n    position: absolute;\n    bottom: 5px;\n    left: 0;\n\n    -webkit-animation: bounce 2.0s infinite ease-in-out;\n    animation: bounce 2.0s infinite ease-in-out;\n  }\n\n  .circle {\n    width: ", "px;\n    height: ", "px;\n    border: ", "px solid ", ";\n    border-radius: 100%;\n    position: absolute;\n    top: 5px;\n    right: 0;\n\n    -webkit-animation: bounce 2.0s infinite ease-in-out;\n    animation: bounce 2.0s infinite ease-in-out;\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s;\n  }\n\n  @-webkit-keyframes bounce {\n    0%, 100% { -webkit-transform: scale(0.0) }\n    50% { -webkit-transform: scale(1.0) }\n  }\n\n  @keyframes bounce {\n    0%, 100% {\n      transform: scale(0.0);\n      -webkit-transform: scale(0.0);\n    } 50% {\n      transform: scale(1.0);\n      -webkit-transform: scale(1.0);\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$11 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRocksSpinner = styled.div(_templateObject$11(), function (_ref) {
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

function _templateObject3$e() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    text-transform: initial;\n  }\n"]);

  _templateObject3$e = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$s() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    min-height: fit-content;\n\n    .MuiTab-root {\n      min-height: 24px;\n    }\n  }\n\n  .MuiTabs-indicator {\n    display: none;\n  }\n\n  button {\n    min-width: fit-content;\n    margin-right: ", ";\n    padding: 0;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 120%;\n\n    &.Mui-selected {\n      font-weight: 600;\n    }\n  }\n\n  .Mui-selected {\n    &::after {\n      content: \"\";\n      position: absolute;\n      width: 100%;\n      left: 0;\n      bottom: 0;\n      height: 2px;\n      background-color: ", ";\n      border-radius: 2px 2px 0 0;\n    }\n  }\n"]);

  _templateObject2$s = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$12() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-bottom: ", ";\n  ", "\n  ", "\n"]);

  _templateObject$12 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$7 = styled.div(_templateObject$12(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledTabs = styled(MuiTabs)(_templateObject2$s(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(5);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.main;
});
var StyledTab = styled(MuiTab)(_templateObject3$e());
var Tab = function Tab(_ref4) {
  var tabs = _ref4.tabs,
      currentTab = _ref4.currentTab,
      _onChange = _ref4.onChange,
      props = _objectWithoutPropertiesLoose(_ref4, ["tabs", "currentTab", "onChange"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Wrapper$7, props, /*#__PURE__*/React.createElement(StyledTabs, {
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

var ErrorTemplatePropTypes = {
  action: PropTypes.node,
  image: PropTypes.string,
  statusCode: PropTypes.number,
  subTitle: PropTypes.string,
  title: PropTypes.string
};
var ErrorTemplateDefaultProps = {
  title: "oops!"
};

const img$4 = "data:image/svg+xml,%3csvg width='754' height='278' viewBox='0 0 754 278' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='362.6' y='0.6' width='148.8' height='262.8' rx='7.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 18H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 35H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 130H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 246H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 113H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 229H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='374.5' cy='9.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='374.5' cy='26.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='374.5' cy='121.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='374.5' cy='237.5' r='2.9' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='384.5' cy='9.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='384.5' cy='26.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='384.5' cy='121.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='384.5' cy='237.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='394.5' cy='9.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='394.5' cy='26.5' r='2.9' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='394.5' cy='121.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='394.5' cy='237.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='42.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='55.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='68.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='81.6' width='25.8' height='6.8' rx='1.4' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='94.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='138.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='151.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='164.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='177.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='190.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='203.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='216.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='251.6' width='25.8' height='6.8' rx='1.4' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='42.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='55.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='68.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='81.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='94.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='138.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='151.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='164.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='177.6' width='93.8' height='6.8' rx='1.4' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='190.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='203.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='216.6' width='93.8' height='6.8' rx='1.4' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='251.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M481 263.5H753' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M1 263.5H125' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M362.5 88L359.555 90.5946C348.028 100.749 341.175 115.184 340.668 130.538C339.78 157.441 338.5 200.408 338.5 224.5C338.5 272.5 221.5 279.5 216.5 259C211.667 239.186 278.643 243.548 261.5 232.5C239 218 165.5 270.5 165.5 270.5' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M362 67.5C362 67.5 336.736 73.9914 324.5 103.5C310.29 137.77 313 122 307.5 175.5C303.437 215.024 192.792 166.527 206 204C215.998 232.366 272 197 276.5 235' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M100.333 119.992L100.822 108.763H136.951V91.3081H83.2449L81.7802 136.47H109.854C113.272 136.47 116.079 137.447 118.276 139.278C120.473 141.109 121.572 143.55 121.572 146.601C121.572 150.019 120.473 152.704 118.276 154.779C116.079 156.854 113.272 157.831 109.854 157.831C106.192 157.831 103.141 156.61 100.699 154.169C98.2583 151.728 96.9156 148.066 96.9156 143.062L77.8743 146.845C78.1184 155.756 81.1699 162.713 87.1508 167.596C93.1318 172.478 100.577 174.919 109.488 174.919C118.764 174.919 126.332 172.356 131.947 166.985C137.562 161.737 140.491 154.901 140.491 146.357C140.491 138.301 137.928 131.954 132.801 127.194C127.675 122.433 120.595 119.992 111.685 119.992H100.333Z' fill='%23292839'/%3e%3cpath d='M184.311 89.4771C173.447 89.4771 164.781 93.505 158.19 101.317C151.599 109.129 148.303 119.504 148.303 132.198C148.303 145.014 151.599 155.389 158.19 163.201C164.781 171.013 173.447 174.919 184.311 174.919C195.052 174.919 203.84 171.013 210.431 163.201C217.023 155.389 220.44 145.014 220.44 132.198C220.44 119.504 217.023 109.129 210.431 101.317C203.84 93.505 195.052 89.4771 184.311 89.4771ZM184.311 157.22C179.428 157.22 175.644 155.023 172.837 150.507C169.908 145.991 168.565 139.888 168.565 132.198C168.565 124.63 169.908 118.527 172.837 114.011C175.644 109.495 179.428 107.176 184.311 107.176C189.071 107.176 192.855 109.495 195.784 114.011C198.714 118.527 200.178 124.63 200.178 132.198C200.178 139.888 198.714 145.991 195.784 150.507C192.855 155.023 189.071 157.22 184.311 157.22Z' fill='%23292839'/%3e%3cpath d='M264.87 89.4771C254.007 89.4771 245.341 93.505 238.749 101.317C232.158 109.129 228.863 119.504 228.863 132.198C228.863 145.014 232.158 155.389 238.749 163.201C245.341 171.013 254.007 174.919 264.87 174.919C275.612 174.919 284.4 171.013 290.991 163.201C297.582 155.389 301 145.014 301 132.198C301 119.504 297.582 109.129 290.991 101.317C284.4 93.505 275.612 89.4771 264.87 89.4771ZM264.87 157.22C259.988 157.22 256.204 155.023 253.397 150.507C250.467 145.991 249.125 139.888 249.125 132.198C249.125 124.63 250.467 118.527 253.397 114.011C256.204 109.495 259.988 107.176 264.87 107.176C269.631 107.176 273.414 109.495 276.344 114.011C279.273 118.527 280.738 124.63 280.738 132.198C280.738 139.888 279.273 145.991 276.344 150.507C273.414 155.023 269.631 157.22 264.87 157.22Z' fill='%23292839'/%3e%3cpath d='M583.315 257.926C581.583 251.511 579.526 243.568 579.526 242.289H567.099L529.885 259.387C529.213 259.695 528.783 260.367 528.783 261.107C528.783 262.152 529.63 263 530.676 263H579.441C582.086 263 584.004 260.479 583.315 257.926Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M568.135 242.289V226.5H582.633L579.526 242.289H568.135Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M722.2 224.328L706.901 225.719L709.674 248.83C709.874 250.497 709.006 252.109 707.505 252.86L694.5 259.363C693.85 259.688 693.439 260.353 693.439 261.08C693.439 262.14 694.298 263 695.359 263H713.569C715.764 263 717.706 261.577 718.368 259.483L727.421 230.814C728.497 227.408 725.757 224.005 722.2 224.328Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M707 225.5L696.545 224V237.111L708.5 238L707 225.5Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M565 142.5C582.118 142.253 603.5 126 603.5 126L585.895 107.36L571.241 122.162C571.241 122.162 527.015 108.5 523 103C518.986 97.4996 514.98 70.5301 513 73.4999C510 77.9998 512 102 512 102C512 102 505.612 97.5001 503.5 97.5001C500.5 97.5001 510 114 517 115.5C533.898 119.121 551.472 142.695 565 142.5Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M638.553 46.4229L645 66.5L638.553 78.5257L626 70.5L628.198 50.5652C628.198 50.5652 616.902 55.7267 615 50.5652C612.265 43.1423 624.5 19.5 624.5 19.5L646.838 29.8538L638.553 46.4229Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M673.098 68.0838C677.803 79.4239 688.459 104.185 697.5 118.5C700.974 124 667.156 131.018 663 127C650.413 114.832 621.984 123.198 621.984 123.198C621.984 123.198 597 134 597 127C597 113.767 575.288 110.043 585 104C591.924 99.6918 602.704 82.6073 609.683 70.647C612.585 65.6747 622.021 65.1518 627.741 65.8043C629.563 66.0122 631.642 65.9536 634 65.5001C643 62.0989 643 58.5 643 58.5L664.239 61.2638C668.2 61.7793 671.567 64.3944 673.098 68.0838Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='581' y='57' width='118' height='73'%3e%3cpath d='M673.098 68.0838C677.803 79.4239 688.459 104.185 697.5 118.5C700.974 124 667.156 131.018 663 127C650.413 114.832 621.984 123.198 621.984 123.198C621.984 123.198 597 134 597 127C597 113.767 575.288 110.043 585 104C591.924 99.6918 602.704 82.6073 609.683 70.647C612.585 65.6747 622.021 65.1518 627.741 65.8043C629.563 66.0122 631.642 65.9536 634 65.5001C643 62.0989 643 58.5 643 58.5L664.239 61.2638C668.2 61.7793 671.567 64.3944 673.098 68.0838Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3c/mask%3e%3cg mask='url(%23mask0)'%3e%3cpath d='M682.5 112.5C680 95.9999 667.5 80.6989 667.5 60.4999C667.5 45.5 706 125.5 706 125.5L667.5 130.5C667.5 130.5 683.774 120.911 682.5 112.5Z' fill='%23FFE94E'/%3e%3c/g%3e%3cpath d='M673.098 68.0838C677.803 79.4239 688.459 104.185 697.5 118.5C700.974 124 667.156 131.018 663 127C650.413 114.832 621.984 123.198 621.984 123.198C621.984 123.198 597 134 597 127C597 113.767 575.288 110.043 585 104C591.924 99.6918 602.704 82.6073 609.683 70.647C612.585 65.6747 622.021 65.1518 627.741 65.8043C629.563 66.0122 631.642 65.9536 634 65.5001C643 62.0989 643 58.5 643 58.5L664.239 61.2638C668.2 61.7793 671.567 64.3944 673.098 68.0838Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M558 140.5C575 128.855 627.162 143.909 627.162 143.909L613.5 67.5C613.5 67.5 615.885 66.4615 617.5 66C621.984 64.7188 623.484 65.5 623.484 65.5L626.052 85.5398C626.687 90.4921 630.902 94.2017 635.895 94.2017C640.489 94.2017 644.483 91.0479 645.548 86.5786L652 59.5L660.5 61L652.437 89.1218C651.491 92.4208 651.631 95.9364 652.836 99.1497L669.621 143.909L690 148C690 148 700.512 168.848 698.617 182.5C695.91 202 647.874 222.613 647.874 222.613C647.874 222.613 690 218 698.617 218C702.12 218 698.48 222.534 698.617 228C698.748 233.262 702.802 239.447 698.617 240.217C683.5 243 603 270.5 592.5 240.217C587.289 225.189 627.162 187.403 627.162 187.403L588.846 167.727C588.846 167.727 591.142 212 587 228.826C586.145 232.298 580.565 227.624 575.5 228C569.68 228.432 562.352 232.542 563 228C566.472 203.674 544.393 149.82 558 140.5Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cmask id='mask1' mask-type='alpha' maskUnits='userSpaceOnUse' x='552' y='58' width='150' height='197'%3e%3cpath d='M558 140.5C575 128.855 627.162 143.909 627.162 143.909L613.5 67.5C613.5 67.5 615.885 66.4615 617.5 66C621.984 64.7188 623.484 65.5 623.484 65.5L626.052 85.5398C626.687 90.4921 630.902 94.2017 635.895 94.2017C640.489 94.2017 644.483 91.0479 645.548 86.5786L652 59.5L660.5 61L652.437 89.1218C651.491 92.4208 651.631 95.9364 652.836 99.1497L669.621 143.909L690 148C690 148 700.512 168.848 698.617 182.5C695.91 202 647.874 222.613 647.874 222.613C647.874 222.613 690 218 698.617 218C702.12 218 698.48 222.534 698.617 228C698.748 233.262 702.802 239.447 698.617 240.217C683.5 243 603 270.5 592.5 240.217C587.289 225.189 627.162 187.403 627.162 187.403L588.846 167.727C588.846 167.727 591.142 212 587 228.826C586.145 232.298 580.565 227.624 575.5 228C569.68 228.432 562.352 232.542 563 228C566.472 203.674 544.393 149.82 558 140.5Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3c/mask%3e%3cg mask='url(%23mask1)'%3e%3cpath d='M560.5 148C565.444 141.078 579 136.5 579 136.5L545.5 139L557.5 232C557.5 232 571.818 237.58 577 232C583.5 225 550.5 162 560.5 148Z' fill='%23FFE94E'/%3e%3c/g%3e%3cpath d='M558 140.5C575 128.855 627.162 143.909 627.162 143.909L613.5 67.5C613.5 67.5 615.885 66.4615 617.5 66C621.984 64.7188 623.484 65.5 623.484 65.5L626.052 85.5398C626.687 90.4921 630.902 94.2017 635.895 94.2017C640.489 94.2017 644.483 91.0479 645.548 86.5786L652 59.5L660.5 61L652.437 89.1218C651.491 92.4208 651.631 95.9364 652.836 99.1497L669.621 143.909L690 148C690 148 700.512 168.848 698.617 182.5C695.91 202 647.874 222.613 647.874 222.613C647.874 222.613 690 218 698.617 218C702.12 218 698.48 222.534 698.617 228C698.748 233.262 702.802 239.447 698.617 240.217C683.5 243 603 270.5 592.5 240.217C587.289 225.189 627.162 187.403 627.162 187.403L588.846 167.727C588.846 167.727 591.142 212 587 228.826C586.145 232.298 580.565 227.624 575.5 228C569.68 228.432 562.352 232.542 563 228C566.472 203.674 544.393 149.82 558 140.5Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M617.49 176.842L600.673 144.526C600.673 144.526 603.99 141.022 604.001 138.247C604.017 134.041 596.44 130.576 596.44 130.576L598.349 138.994L593.278 141.124L588.603 133.868C588.603 133.868 585.75 141.729 588.788 144.637C590.904 146.662 596.063 146.462 596.063 146.462L606.953 181.196C607.962 184.414 611.521 186.066 614.63 184.76C617.715 183.464 619.035 179.81 617.49 176.842Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='612.116' cy='178.224' r='2.4' transform='rotate(-22.7849 612.116 178.224)' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M688.5 150C695.5 141 694.5 123 694.5 123C694.5 123 686.477 126.026 680.5 127C675.682 127.785 667.5 128.5 667.5 128.5C667.5 128.5 672.571 139.977 667.5 142C653.308 147.662 615.771 154.265 615.771 154.265L609.123 152.271C606.816 151.578 604.315 152.121 602.502 153.707L599.082 156.699C597.895 157.738 597.429 159.378 597.893 160.886L600.404 169.046C600.92 170.724 602.471 171.87 604.227 171.87H607.963C609.658 171.87 611.296 171.254 612.572 170.138L618.878 164.621C618.878 164.621 673.745 168.971 688.5 150Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M646 36C656.532 29.4174 647.873 18.4624 647.873 18.4624L636.536 21.6798L635.5 31C635.5 31 637.527 29.1519 639.589 29.8537C642.746 30.9284 638 36 638 36L638.5 46.5C638.5 46.5 642 38.5 646 36Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M628.198 25.7115C635.773 25.2999 645.544 21.5959 648.567 20.3827C649.085 20.175 649.314 19.5886 649.07 19.0872C647.491 15.8504 641.779 5.10812 635.447 5.00003C628.49 4.88127 620.949 15.3558 620.949 15.3558L605.328 17.0914C604.369 17.1979 604.122 18.4229 604.98 18.8626C609.831 21.3459 620.312 26.1399 628.198 25.7115Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M627 187.5C627 187.5 641.5 175.5 651.5 170.5' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M627 143.5C627 143.5 628.219 148.681 629 152' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle r='18.4782' transform='matrix(-1 0 0 1 32.5218 188.609)' fill='%23AC00FC'/%3e%3ccircle r='7.06521' transform='matrix(-1 0 0 1 12.1087 211.717)' fill='%23AC00FC'/%3e%3cpath d='M77.4958 212.052L73.6516 215.96L78.8837 214.325C79.8437 214.025 80.1656 212.828 79.4856 212.087C78.9545 211.508 78.0468 211.492 77.4958 212.052Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M70.9662 199.06L73.6414 203.845L69.0272 200.885C68.1806 200.342 68.1863 199.103 69.038 198.568C69.7032 198.15 70.5828 198.374 70.9662 199.06Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M73.8248 208.507L74.2248 215.399L77.1198 209.132C77.6509 207.982 76.8056 206.67 75.5388 206.678C74.5494 206.685 73.7674 207.519 73.8248 208.507Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M75.443 196.611L73.2363 203.153L72.1001 196.343C71.8916 195.093 73.0535 194.051 74.273 194.394C75.2255 194.662 75.7593 195.673 75.443 196.611Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M68.9865 210.981L74.0283 215.697L71.8038 209.161C71.3956 207.962 69.8788 207.595 68.9671 208.474C68.2551 209.161 68.2639 210.305 68.9865 210.981Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M79.4563 200.275L73.3476 203.491L77.2198 197.776C77.9303 196.727 79.4902 196.773 80.1371 197.862C80.6424 198.713 80.3318 199.813 79.4563 200.275Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M67.0023 214.265L73.702 215.932L68.5783 211.305C67.6382 210.456 66.1343 210.873 65.7659 212.085C65.4781 213.031 66.0422 214.026 67.0023 214.265Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M80.5022 203.967L73.6001 203.805L79.7643 200.695C80.8953 200.125 82.2356 200.924 82.2707 202.191C82.2982 203.18 81.4914 203.99 80.5022 203.967Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M83.7305 191.275L74.6702 191.062L82.7619 186.98C84.2466 186.231 86.0059 187.281 86.0521 188.943C86.0881 190.242 85.029 191.305 83.7305 191.275Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M87.472 183.047L79.6183 181.984L87.0136 179.134C88.2285 178.666 89.5643 179.445 89.7561 180.732C89.9557 182.072 88.8143 183.229 87.472 183.047Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M92.4057 172.154L83.1148 177.484L88.7227 168.358C89.7099 166.752 91.9897 166.607 93.1727 168.075C94.2254 169.381 93.861 171.319 92.4057 172.154Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M75.0625 176.089L80.1558 182.161L78.6152 174.387C78.3621 173.11 76.9907 172.396 75.7996 172.922C74.5603 173.468 74.1919 175.051 75.0625 176.089Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M69.1468 186.852L74.0091 191.143L71.7423 185.067C71.3264 183.952 69.8922 183.649 69.0603 184.499C68.4105 185.164 68.45 186.237 69.1468 186.852Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M66.7748 249.77C62.1128 240.027 71.2202 224.914 72.7014 219.56C75.8325 208.241 70.0764 200.287 74.8714 189.566C77.341 184.045 83.5825 176.76 83.5825 176.76' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M32.7615 148.545C33.056 149.332 31.3225 150.616 31.3225 150.616C31.3225 150.616 29.8335 148.812 29.8736 147.451C29.9166 145.99 31.7505 144.072 31.7505 144.072C31.7505 144.072 32.0202 146.563 32.7615 148.545Z' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M37.61 148.498C37.1166 151.159 39.4303 155.185 39.4303 155.185C39.4303 155.185 42.3814 154.115 43.1426 152.494C43.9486 150.778 42.5406 149.555 42.6679 147.663C42.8196 145.407 44.182 142.075 44.182 142.075C44.182 142.075 38.2642 144.969 37.61 148.498Z' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M28.3674 163.858C31.1105 163.945 34.421 167.428 34.421 167.428C34.421 167.428 31.1248 167.864 28.1886 168.528C25.6298 169.107 20.769 170.909 19.5621 171.362C19.4784 171.394 19.4039 171.302 19.4569 171.23C20.4085 169.935 25.1202 163.756 28.3674 163.858Z' fill='%23292839' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M45.1446 173.28C39.441 167.162 28.3695 166.327 28.3695 166.327' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M51.4429 163.271C50.7271 166.177 47.3526 169.751 47.3526 169.751C47.3526 169.751 45.1083 165.841 45.2387 163.13C45.4159 159.447 50.1129 155.167 50.4466 154.867C50.4562 154.859 50.4689 154.862 50.473 154.874C50.5989 155.252 52.204 160.182 51.4429 163.271Z' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M48.1089 178.887C48.1089 178.887 45.846 168.549 48.6291 161.747' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M39.1011 163.284C39.1011 163.284 38.417 154.797 41.2002 147.995' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.5544 227.538C60.0576 215.51 60.1207 208.246 55.5807 196.593C51.1276 185.163 48.3216 178.819 42.3507 168.104C38.3513 160.927 34.9697 158.662 31.2167 150.252' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.998 231.001C63.7872 215.761 58.9938 207.826 57.1333 192.538C55.3368 177.777 57.3175 171.51 56.2431 154.47' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.6575 228.881C61.7154 222.365 56.9491 209.554 54.8751 206.151C47.136 193.453 41.6946 189.766 31.974 175.729' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M60.8658 183.843C58.8859 189.558 56.9396 188.649 56.9396 188.649C56.9396 188.649 56.4615 187.39 57.4633 185.907C58.2838 184.692 60.0947 183.931 60.7231 183.695C60.8138 183.661 60.8975 183.752 60.8658 183.843Z' fill='%23292839' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M46.5555 201.643C51.6517 204.899 52.6155 202.98 52.6155 202.98C52.6155 202.98 52.2101 201.695 50.5048 201.153C49.1079 200.708 47.2151 201.234 46.5759 201.438C46.4836 201.468 46.4739 201.59 46.5555 201.643Z' fill='%23292839' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M60.4308 173.536C58.7275 181.119 56.5246 179.733 56.5246 179.733C56.5246 179.733 56.5242 178.329 57.4987 176.407C58.2735 174.88 59.7076 173.793 60.2631 173.412C60.3484 173.353 60.4535 173.435 60.4308 173.536Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M40.5068 193.285C46.5443 198.179 47.4135 195.726 47.4135 195.726C47.4135 195.726 46.5435 194.624 44.5878 193.721C43.033 193.003 41.2339 193.039 40.5615 193.084C40.4583 193.091 40.4264 193.22 40.5068 193.285Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M59.5935 165.378C59.8612 170.928 56.448 171.418 56.448 171.418C56.448 171.418 56.4476 170.014 57.4221 168.093C58.1716 166.615 59.0443 165.661 59.4075 165.3C59.4767 165.231 59.5888 165.28 59.5935 165.378Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M36.1058 186.365C39.3362 190.886 42.3182 189.154 42.3182 189.154C42.3182 189.154 41.4482 188.053 39.4925 187.149C37.9884 186.455 36.7124 186.247 36.2032 186.189C36.1062 186.177 36.049 186.286 36.1058 186.365Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M61.1354 155.991C60.1071 159.796 56.4691 161.537 56.4691 161.537C56.4691 161.537 56.7106 160.23 57.4432 158.212C58.0715 156.481 60.3696 155.963 61.0111 155.85C61.0924 155.836 61.1569 155.911 61.1354 155.991Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M29.0771 179.955C32.2432 182.304 36.177 181.415 36.177 181.415C36.177 181.415 35.1771 180.539 33.3513 179.41C31.7854 178.441 29.6607 179.459 29.0876 179.768C29.0149 179.807 29.0108 179.906 29.0771 179.955Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M60.4417 148.79C59.7487 152.645 56.3124 154.697 56.3124 154.697C56.3124 154.697 57.3492 153.647 57.8934 151.57C58.3354 149.883 59.7641 148.961 60.2849 148.674C60.3666 148.629 60.4582 148.698 60.4417 148.79Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M25.1574 173.875C28.0913 176.471 32.0596 175.95 32.0596 175.95C32.0596 175.95 30.5951 175.769 28.8808 174.477C27.4882 173.428 25.7953 173.59 25.2088 173.687C25.1168 173.703 25.0875 173.813 25.1574 173.875Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M54.1191 150.845C54.4501 153.528 56.6517 154.999 56.6517 154.999C56.6517 154.999 55.9959 154.245 55.7158 152.778C55.4997 151.645 54.6534 150.985 54.2781 150.742C54.2007 150.692 54.1078 150.754 54.1191 150.845Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M31.392 171.569C32.7954 173.879 31.9796 176.398 31.9796 176.398C31.9796 176.398 32.0274 175.4 31.3372 174.075C30.8047 173.053 31.0592 172.009 31.2032 171.586C31.2329 171.499 31.3441 171.49 31.392 171.569Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.834 184.176C54.7874 189.9 56.7378 189 56.7378 189C56.7378 189 57.2218 187.744 56.2269 186.256C55.4121 185.037 53.6047 184.268 52.9774 184.029C52.8868 183.995 52.8027 184.085 52.834 184.176Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M53.0644 196.925C55.08 202.627 52.9918 203.13 52.9918 203.13C52.9918 203.13 51.8329 202.444 51.6913 200.66C51.5754 199.199 52.5164 197.474 52.8607 196.898C52.9104 196.815 53.0321 196.833 53.0644 196.925Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.9888 173.107C53.185 177.253 56.3412 180.15 56.3412 180.15C56.3412 180.15 56.9593 177.933 55.9644 176.446C55.164 175.249 53.7194 173.617 53.1855 173.026C53.1131 172.945 52.9837 172.999 52.9888 173.107Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M46.0811 188.335C48.4977 191.71 47.8173 195.94 47.8173 195.94C47.8173 195.94 45.9577 194.583 45.8161 192.799C45.7022 191.364 45.8244 189.188 45.8765 188.393C45.8836 188.285 46.0183 188.247 46.0811 188.335Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.9125 164.791C53.1139 168.918 56.3702 171.416 56.3702 171.416C56.3702 171.416 56.8827 169.618 55.8878 168.13C55.0874 166.933 53.6428 165.302 53.1089 164.71C53.0365 164.63 52.9072 164.684 52.9125 164.791Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M40.9852 181.764C43.3855 185.127 42.3788 189.105 42.3788 189.105C42.3788 189.105 40.8619 188.012 40.7203 186.228C40.6063 184.793 40.7286 182.617 40.7807 181.822C40.7877 181.714 40.9225 181.676 40.9852 181.764Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.3887 155.297C53.275 162.843 56.3913 161.535 56.3913 161.535C56.3913 161.535 56.9038 159.737 55.9089 158.249C55.0857 157.018 53.1945 155.627 52.5666 155.183C52.4847 155.125 52.377 155.198 52.3887 155.297Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M35.511 173.989C39.4935 180.46 36.2375 181.365 36.2375 181.365C36.2375 181.365 34.7205 180.272 34.5789 178.488C34.4618 177.012 35.0829 174.747 35.3007 174.01C35.3291 173.914 35.4584 173.904 35.511 173.989Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M64.9741 220.394C64.9741 220.394 65.6176 217.779 68.61 214.634' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.9751 208.44C65.9751 208.44 66.6186 205.825 69.611 202.68' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M67.1085 197.073C67.1085 197.073 71.8626 193.529 75.6874 185.875' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M70.4279 176.262C70.4279 176.262 75.011 170.597 80.7123 167.147' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.1953 212.691C65.1953 212.691 63.4852 207.869 63.0184 203.553' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M69.802 252.405C67.0322 236.057 62.7503 228.527 65.4639 211.642C67.7035 197.705 66.7438 177.712 76.3824 161.645' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3ccircle cx='70.3712' cy='214.236' r='0.602053' transform='rotate(-12.7384 70.3712 214.236)' fill='%23292839'/%3e%3ccircle cx='71.3718' cy='202.282' r='0.602053' transform='rotate(-12.7384 71.3718 202.282)' fill='%23292839'/%3e%3ccircle cx='76.8621' cy='185.61' r='0.602053' transform='rotate(-12.7384 76.8621 185.61)' fill='%23292839'/%3e%3ccircle cx='81.6317' cy='168.483' r='0.602053' transform='rotate(-12.7384 81.6317 168.483)' fill='%23292839'/%3e%3ccircle cx='75.7639' cy='188.944' r='0.602053' transform='rotate(-12.7384 75.7639 188.944)' fill='%23292839'/%3e%3ccircle cx='79.5482' cy='170.188' r='0.602053' transform='rotate(-12.7384 79.5482 170.188)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 61.5762 202.309)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 61.9308 200.35)' fill='%23292839'/%3e%3ccircle cx='71.6959' cy='210.541' r='0.90308' transform='rotate(-12.7384 71.6959 210.541)' fill='%23292839'/%3e%3ccircle cx='69.5747' cy='210.712' r='0.602053' transform='rotate(-12.7384 69.5747 210.712)' fill='%23292839'/%3e%3ccircle cx='71.8672' cy='212.663' r='0.602053' transform='rotate(-12.7384 71.8672 212.663)' fill='%23292839'/%3e%3ccircle cx='71.5612' cy='200.387' r='0.602053' transform='rotate(-12.7384 71.5612 200.387)' fill='%23292839'/%3e%3ccircle cx='77.2782' cy='183.355' r='0.90308' transform='rotate(-12.7384 77.2782 183.355)' fill='%23292839'/%3e%3ccircle cx='82.5022' cy='165.508' r='0.90308' transform='rotate(-12.7384 82.5022 165.508)' fill='%23292839'/%3e%3ccircle r='0.923111' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 61.355 198.476)' fill='%23292839'/%3e%3ccircle cx='68.799' cy='212.74' r='0.602053' transform='rotate(-12.7384 68.799 212.74)' fill='%23292839'/%3e%3ccircle cx='69.7995' cy='200.785' r='0.602053' transform='rotate(-12.7384 69.7995 200.785)' fill='%23292839'/%3e%3ccircle cx='75.2892' cy='184.113' r='0.602053' transform='rotate(-12.7384 75.2892 184.113)' fill='%23292839'/%3e%3ccircle cx='80.2477' cy='165.092' r='0.602053' transform='rotate(-12.7384 80.2477 165.092)' fill='%23292839'/%3e%3ccircle cx='72.4296' cy='187.846' r='0.602053' transform='rotate(-12.7384 72.4296 187.846)' fill='%23292839'/%3e%3ccircle cx='78.1648' cy='166.798' r='0.602053' transform='rotate(-12.7384 78.1648 166.798)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 63.6043 201.534)' fill='%23292839'/%3e%3cpath d='M67.596 190.544C67.596 190.544 65.8859 185.723 65.419 181.407' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M71.7813 171.327C71.7813 171.327 72.0603 167.662 71.5935 163.345' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 63.9774 180.162)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 70.2195 163.293)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.169376 -0.985551 -0.985551 0.169376 75.2809 159.892)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 64.3317 178.204)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 70.5063 160.142)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.169376 -0.985551 -0.985551 0.169376 77.3679 158.032)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 66.0049 179.388)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 72.1794 161.327)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 72.8338 163.936)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.169376 -0.985551 -0.985551 0.169376 77.9856 161.227)' fill='%23292839'/%3e%3cpath d='M93.7851 269.759C91.339 268.229 88.6876 268.363 88.6876 268.363C88.6876 268.363 41.9135 265.557 53.6962 272.55C57.5411 274.832 60.3812 275.595 64.7552 276.475C73.2447 278.185 73.3087 275.167 83.6765 275.167C88.219 275.167 97.6464 272.175 93.7851 269.759Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M77.5852 239.047L75.1459 232.774C74.6305 231.449 73.3544 230.576 71.9325 230.576H61.2102C59.8764 230.576 58.6621 231.345 58.0926 232.551L54.924 239.261C54.1579 240.883 52.7795 242.135 51.2235 243.028C47.3851 245.231 40.3588 250.592 39.0872 260.795C37.3205 274.97 50.8299 273.336 65.0714 274.446C78.805 275.517 92.4131 271.382 92.9828 266.714C94.6311 253.207 85.8078 245.967 81.247 243.172C79.6437 242.189 78.2668 240.8 77.5852 239.047Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M81.2607 243.087C81.2607 243.087 66.5086 248.174 50.739 243.087' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M85.2173 245.87C85.2173 245.87 67.3316 252.66 47.913 245.348' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M619 115C618.057 112.643 618 96.5 618 96.5L623.5 123C623.5 123 617.684 125.449 618 124.5C619 121.5 621 120 619 115Z' fill='%23292839'/%3e%3c/svg%3e";

const img$5 = "data:image/svg+xml,%3csvg width='881' height='421' viewBox='0 0 881 421' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='33.5' cy='301.5' r='23.5' fill='%23FFE94E'/%3e%3ccircle cx='7' cy='326' r='7' fill='%23FFE94E'/%3e%3cpath d='M29 385.5H229' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M95.1285 392.315C93.2079 391.114 91.1262 391.219 91.1262 391.219C91.1262 391.219 54.4023 389.016 63.6534 394.507C66.6721 396.298 68.902 396.897 72.3362 397.588C79.0015 398.931 79.0518 396.561 87.1919 396.561C90.7583 396.561 98.1601 394.212 95.1285 392.315Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M66.0752 394.391H81.6397C84.4768 394.391 87.1176 392.898 88.3377 390.337C89.7743 387.321 91.4741 383.127 91.8314 379.555C92.3141 374.728 91.2101 368.443 90.7858 366.286C90.7017 365.859 90.2916 365.586 89.8634 365.665C87.3704 366.125 79.3233 367.526 73.7873 367.526C68.2473 367.526 60.1924 366.123 57.7058 365.664C57.2799 365.586 56.8716 365.853 56.7846 366.277C56.3309 368.488 55.119 375.069 55.7433 379.555C56.2256 383.021 57.869 387.15 59.254 390.172C60.4675 392.819 63.1631 394.391 66.0752 394.391Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M75.3913 281.717C78.8713 297.3 79.401 316.602 69.7775 320.612C53.8001 327.269 48.5256 281.717 48.5256 281.717C48.5256 281.717 45.3179 240.416 54.1393 242.421C58.8828 243.499 58.8254 248.473 60.956 252.846C68.5746 268.484 72.7653 269.958 75.3913 281.717Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M53.3375 246.029C53.3375 246.029 74.1883 307.379 72.5844 367.526' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M100.653 303.369C89.8313 311.717 78.5991 332.641 88.6234 337.452C91.8314 338.992 101.71 321.819 110.677 312.191C120.426 301.723 141.954 293.827 136.741 286.528C134.736 283.721 114.687 292.543 100.653 303.369Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M79.802 366.723C79.802 366.723 83.0098 322.616 134.736 289.335' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M90.6281 279.311C90.164 291.147 88.6232 306.978 78.1978 306.978C64.1636 306.978 64.1635 291.949 64.1636 280.112C64.1637 263.672 72.9854 234 79.8017 234C87.8215 234 91.4301 258.861 90.6281 279.311Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M79.401 240.416C79.401 240.416 76.9952 327.027 72.9854 367.526' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M102.658 299.761C101.455 313.661 93.4356 329.625 83.4112 327.027C71.7915 324.015 78.1553 302.166 80.2033 297.756C85.4167 286.528 95.4405 259.662 105.465 262.469C115.489 265.276 103.861 285.86 102.658 299.761Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M81.7528 310.046C82.2744 308.008 82.7297 307.631 84.0129 307.632C85.2961 307.633 82.8127 315.96 81.7915 315.317C80.7704 314.674 81.2624 311.963 81.7528 310.046Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M74.2842 282.549C74.8353 283.909 74.6358 284.342 73.5564 284.987C72.477 285.633 70.5218 279.899 71.6923 279.731C72.8629 279.562 73.7659 281.27 74.2842 282.549Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M104.663 265.677C104.663 265.677 78.1981 329.032 75.7923 367.125' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M68.1736 295.751C69.953 307.098 74.8563 319.625 64.1637 323.819C52.0045 328.588 48.8104 309.38 43.7138 297.355C37.1007 281.751 31.6848 255.653 40.1052 255.653C44.405 255.653 44.9367 258.491 47.3227 262.068C51.8696 268.885 65.5955 279.31 68.1736 295.751Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.7675 301.084C53.3187 302.444 53.1191 302.877 52.0398 303.522C50.9604 304.168 49.0052 298.434 50.1757 298.266C51.3462 298.097 52.2493 299.805 52.7675 301.084Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M40.5062 259.262C40.5062 259.262 65.3668 311.389 73.7874 367.526' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M58.9512 323.418C67.3947 339.039 60.1547 342.264 57.3475 341.462C54.5404 340.66 48.9347 328.735 42.5114 321.413C34.1061 311.832 16.2075 304.973 18.4527 299.359C20.0563 295.349 50.9316 308.582 58.9512 323.418Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M20.4573 302.166C20.4573 302.166 58.5502 318.606 67.3717 367.125' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M90.6284 365.521C90.6284 365.521 73.7873 360.308 56.9463 365.521' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3ccircle cx='727' cy='114' r='90' fill='%23AC00FC'/%3e%3ccircle cx='815.5' cy='217.5' r='23.5' fill='%23AC00FC'/%3e%3cpath d='M698.52 181.119C698.52 181.119 664.348 203.198 643.292 188.807C631.046 180.439 621.548 177.008 619.006 162.395C616.764 149.513 628.208 132.707 628.208 132.707L634.527 156.209C635.44 159.607 639.902 160.397 641.927 157.52C642.636 156.513 642.861 155.244 642.541 154.054L638.043 137.323C636.29 130.806 638.658 123.877 644.032 119.795L667.258 102.156L667.504 135.032C667.504 135.032 671.787 109.442 684.009 100.516C695.558 92.0818 717.14 95.905 717.14 95.905C717.14 95.905 728.968 115.318 721.037 126.367C713.793 136.46 691.39 138.636 691.39 138.636C691.39 138.636 698.024 143.109 702.898 144.135C708.807 145.379 718.306 142.857 718.306 142.857L711.83 159.914C709.209 166.819 702.342 171.161 694.981 170.568L666.415 168.267C666.415 168.267 661.257 170.38 662.512 175.046C663.948 180.389 698.52 181.119 698.52 181.119Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M622 210C622 210 661.925 138.68 713.153 100.054' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M657.425 158.53C657.425 158.53 649.371 142.056 653.591 126.942' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M664.875 147.725C664.875 147.725 674.88 157.978 695.067 154.104' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M347.065 165.829C347.065 165.829 340.452 192.96 323.165 195.725C313.111 197.332 306.758 200.104 298.594 194.02C291.397 188.657 289.171 174.88 289.171 174.88L303.412 183.612C305.47 184.875 308.067 183.163 307.719 180.774C307.597 179.937 307.11 179.198 306.389 178.756L296.251 172.539C292.302 170.118 290.212 165.546 290.965 160.976L294.217 141.222L309.855 157.493C309.855 157.493 299.913 142.717 301.793 132.5C303.569 122.845 316.131 114.566 316.131 114.566C316.131 114.566 331.189 118.66 332.45 127.911C333.602 136.36 323.462 148.017 323.462 148.017C323.462 148.017 328.88 147.116 331.794 145.327C335.326 143.159 338.871 137.419 338.871 137.419L343.693 148.977C345.645 153.656 344.271 159.061 340.322 162.24L324.997 174.574C324.997 174.574 323.423 178.061 326.251 179.795C329.488 181.78 347.065 165.829 347.065 165.829Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M322.553 216.337C322.553 216.337 308.796 161.945 316.102 118.516' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M315.92 173.963C315.92 173.963 304.131 169.552 299.102 160.027' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M314.535 165.061C314.535 165.061 324.361 165.45 332.595 153.993' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M713.681 108.382C704.114 134.908 711.569 181.455 711.569 181.455C711.569 181.455 751.039 155.099 761.381 126.58C770.871 100.411 762.887 55 762.887 55C762.887 55 724.085 79.5329 713.681 108.382Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M763.035 55.3499C763.035 55.3499 765.62 126.851 711.717 181.805' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M763.035 55.3499C763.035 55.3499 711.354 104.828 711.717 181.805' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M762.887 55L711.919 181.308' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M420 269.117C429.313 288.84 458.889 310.166 458.889 310.166C458.889 310.166 465.994 274.148 456.012 252.913C446.852 233.427 417.61 213.012 417.61 213.012C417.61 213.012 409.871 247.667 420 269.117Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M417.882 213.122C417.882 213.122 458.474 250.738 459.162 310.276' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M417.882 213.122C417.882 213.122 416.782 268.453 459.162 310.276' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M417.61 213.012L458.999 309.894' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M549.555 97.5645C555.604 108.276 566.737 108.601 571.902 119.765C583.236 144.262 542.763 182.44 542.763 182.44C542.763 182.44 508.209 181.372 502.047 165.249C497.581 153.563 510.966 145.906 507.954 133.764C504.194 118.602 482.325 120.95 479.578 105.572C476.925 90.7227 494.814 85.2492 495.018 70.166C495.182 58.0263 483.333 52.4 485.728 40.4978C487.504 31.6737 493.525 28.7997 498.039 21.0119C502.128 13.9568 507.878 2.59478 507.878 2.59478C507.878 2.59478 514.436 24.8129 525.303 33.297C532.963 39.2774 541.064 36.2967 548.315 42.7675C564.285 57.02 539.03 78.9258 549.555 97.5645Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M507.523 2.24229C501.332 37.044 523.27 121.251 543.02 186.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M511.256 62.3345C511.256 62.3345 496.398 59.5548 485.742 44.7404' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M517.727 94.8402C517.727 94.8402 502.17 94.8912 489.408 84.3264' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M527.39 130.518C527.39 130.518 515.385 135.507 505.462 128.468' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M538.835 170.786C538.835 170.786 517.986 174.036 502.047 165.249' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M508.589 45.1928C508.589 45.1928 517.193 40.0409 521.756 29.7727' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M514.845 78.5861C514.845 78.5861 543.771 58.6921 546.542 41.0052' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M522.027 112.504C522.027 112.504 539.698 110.324 548.13 94.0332' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M533.257 151.147C533.257 151.147 552.196 148.114 572.619 122.591' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M584.578 115.586C580.088 123.537 571.825 123.778 567.991 132.065C559.578 150.248 589.62 178.586 589.62 178.586C589.62 178.586 615.268 177.793 619.841 165.826C623.156 157.152 613.221 151.468 615.457 142.455C618.248 131.201 634.481 132.944 636.52 121.53C638.489 110.508 625.211 106.445 625.059 95.2493C624.937 86.2385 633.733 82.0623 631.954 73.2278C630.636 66.6779 626.167 64.5447 622.817 58.7642C619.782 53.5274 615.514 45.0938 615.514 45.0938C615.514 45.0938 610.646 61.5855 602.58 67.8829C596.894 72.3219 590.88 70.1094 585.499 74.9125C573.645 85.4916 592.39 101.751 584.578 115.586Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M615.777 44.8323C620.843 73.3132 600.53 146.372 584.994 196' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M613.006 89.4366C613.006 89.4366 624.035 87.3733 631.944 76.3772' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M608.203 113.564C608.203 113.564 619.75 113.602 629.223 105.76' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M601.031 140.046C601.031 140.046 609.941 143.75 617.306 138.525' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M592.535 169.936C592.535 169.936 608.01 172.348 619.841 165.826' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M614.986 76.7129C614.986 76.7129 608.599 72.8888 605.212 65.2672' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M610.342 101.499C610.342 101.499 588.871 86.7329 586.815 73.6046' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M605.011 126.675C605.011 126.675 591.895 125.058 585.636 112.965' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M596.676 155.359C596.676 155.359 582.618 153.108 567.459 134.163' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M612.759 248.799C607.602 254.452 600.808 253.1 596.124 259.15C585.847 272.424 605.073 301.196 605.073 301.196C605.073 301.196 626.168 305.353 632.145 296.437C636.478 289.974 629.429 283.471 632.943 276.529C637.331 267.861 650.262 272.325 654.065 263.385C657.739 254.752 647.656 248.947 649.629 239.775C651.218 232.393 659.184 230.63 659.387 223.082C659.537 217.486 656.287 214.906 654.634 209.557C653.136 204.712 651.231 197.025 651.231 197.025C651.231 197.025 644.165 209.581 636.398 213.213C630.923 215.773 626.426 212.84 621.131 215.754C609.468 222.173 621.731 238.964 612.759 248.799Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M575.437 351.867C575.437 351.867 649.606 235.028 651.494 196.86' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M640.875 232.769C640.875 232.769 650.269 233.15 658.788 225.652' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M632.432 251.574C632.432 251.574 641.855 253.768 651.061 249.139' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M621.613 271.858C621.613 271.858 628.196 276.552 635.19 273.665' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M609.074 294.677C609.074 294.677 621.261 299.547 632.145 296.437' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M644.876 222.749C644.876 222.749 640.376 218.429 639.038 211.57' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M636.439 242.122C636.439 242.122 621.671 226.039 622.451 214.932' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M627.369 261.684C627.369 261.684 616.96 257.905 614.114 246.857' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M615.187 283.548C615.187 283.548 604.128 279.076 595.297 260.763' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M417.435 199.867C433.924 200.072 455.047 179.655 455.047 179.655C455.047 179.655 464.972 177.188 469.913 173.243C476.938 167.633 478.53 161.766 481.209 153.185C487.039 134.508 472.777 103.799 472.777 103.799C472.777 103.799 460.74 115.65 457.42 125.481C455.434 131.358 455.441 139.842 455.712 145.262C455.854 148.111 453.714 150.637 450.866 150.804C448.348 150.951 446.126 149.19 445.802 146.688C445.194 141.992 444.47 134.466 445.154 128.969C446.012 122.072 450.486 113.105 454.976 105.553C460.207 96.7547 459.003 85.2044 451.228 78.5471L425.684 56.676L420.238 93.8202C419.949 95.7906 418.316 97.2872 416.328 97.4036C413.764 97.5536 411.636 95.3916 411.683 92.8236C411.84 84.1856 411.016 66.3045 402.21 58.0492C389.575 46.2049 361.925 56.2499 361.925 56.2499C361.925 56.2499 356.056 82.8551 364.267 96.293C373.083 110.719 386.434 117.003 393.24 119.395C395.546 120.205 397.024 122.663 396.388 125.022C395.778 127.283 393.451 128.622 391.19 128.013L361.498 120.009L375.296 156.34C377.807 162.951 384.317 167.167 391.377 166.754L422.231 164.949C423.156 164.895 424.053 165.279 424.651 165.987C426.162 167.774 425.086 170.524 422.763 170.811L385.523 175.41C385.523 175.41 399.85 199.649 417.435 199.867Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M482.5 233.5C482.5 233.5 420.5 103.5 373.834 65.469' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M425.108 128.582C425.108 128.582 440.382 107.153 436.044 84.3677' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M435.115 145.526C435.115 145.526 402.081 154.471 384.496 144.982' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M451.342 174.628C451.342 174.628 422.299 191.854 406.299 183.775' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M449.054 169.753C449.054 169.753 473.251 155.315 471.499 125.367' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M432.09 306.936V306.336H431.49H407.461V159.328V158.728H406.861H350.78H350.446L350.27 159.012L253.252 315.606L253.162 315.752V315.922V350.203V350.803H253.762H350.18V401.625V402.225H350.78H406.861H407.461V401.625V350.803H431.49H432.09V350.203V306.936ZM350.18 234.496V306.336H308.224L347.796 238.357L347.8 238.35L350.18 234.496Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M494.952 172.941L494.95 172.943C477.349 188.056 465.783 211.826 460.184 244.154L452.631 287.77C447.069 319.882 450.033 346.111 461.616 366.39C473.211 386.69 492.408 399.136 519.116 403.761C545.605 408.349 567.696 403.11 585.314 387.983C603.025 372.888 614.645 349.128 620.244 316.799L627.77 273.347C633.35 241.126 630.396 214.843 618.812 194.563C607.218 174.264 588.076 161.827 561.476 157.22C534.879 152.614 512.678 157.834 494.952 172.941ZM572.521 217.11L572.522 217.113C575.5 226.166 575.545 239.226 572.578 256.357L562.356 315.383C559.279 332.497 554.819 344.602 549.034 351.796C546.16 355.326 542.872 357.752 539.171 359.104C535.469 360.456 531.32 360.745 526.704 359.946C521.924 359.118 517.996 357.401 514.893 354.815C511.791 352.231 509.485 348.753 507.984 344.357C504.99 335.418 504.989 322.089 508.071 304.297L518.634 243.305C521.72 227.438 526.055 216.036 531.591 209.018C534.398 205.537 537.649 203.148 541.343 201.824C545.04 200.498 549.216 200.226 553.888 201.035C558.664 201.863 562.583 203.618 565.671 206.283C568.758 208.947 571.046 212.546 572.521 217.11Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M805.85 385.409L794.678 335.83L818.119 330.548L818.705 330.416L818.573 329.831L809.061 287.622L808.929 287.037L808.344 287.168L784.903 292.451L752.586 149.039L752.454 148.454L751.869 148.585L697.16 160.914L696.834 160.987L696.725 161.303L636.503 335.394L636.448 335.555L636.485 335.722L644.021 369.164L644.153 369.75L644.738 369.618L738.809 348.42L747.917 385.683L748.029 386.14L748.5 386.14L805.265 386.14L806.015 386.14L805.85 385.409ZM713.231 234.96L729.023 305.043L688.093 314.266L711.753 239.25L711.756 239.243L713.231 234.96Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M292 385.5H880' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3crect x='285' y='386' width='587' height='24' fill='white'/%3e%3cpath d='M195.095 101.784V99.0328C195.095 98.558 194.71 98.1731 194.235 98.1731C193.76 98.1731 193.375 98.558 193.375 99.0328V101.784C193.375 102.259 193.76 102.644 194.235 102.644C194.71 102.644 195.095 102.259 195.095 101.784Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M291.005 95.7656L197.126 97.8289V102.987L291.005 104.706C291.005 104.706 292.042 101.878 292 100C291.962 98.3018 291.005 95.7656 291.005 95.7656Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M225.014 99.0395L225.614 96.0355C225.835 94.9315 225.131 93.857 224.023 93.6597C222.424 93.3749 220.168 93.0341 218.447 93.0148C216.241 92.9902 212.432 93.4748 210.215 93.7883C209.21 93.9304 208.474 94.7933 208.474 95.8079V98.128C208.474 99.2849 209.425 100.216 210.582 100.201C212.613 100.175 215.633 100.155 217.415 100.236C219.048 100.311 221.2 100.528 222.729 100.699C223.806 100.819 224.801 100.101 225.014 99.0395Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M221.886 107.114C220.247 110.348 221.886 115.711 221.886 115.711L212.945 117.086C212.945 117.086 216.384 108.145 212.945 107.114C209.887 106.196 206.755 103.331 206.755 103.331L224.293 103.675C224.293 103.675 222.578 105.748 221.886 107.114Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M252.835 96.4534H249.052C249.052 96.4534 251.142 100.587 250.772 103.331C250.426 105.891 248.714 106.811 247.677 109.177C244.863 115.594 243.894 126.715 243.894 126.715L237.36 121.557C237.36 121.557 241.569 113.356 241.143 107.801C240.792 103.225 236.51 101.359 237.016 96.7973C237.36 93.7024 247.677 90.9513 250.772 92.6707C252.243 93.4879 252.835 96.4534 252.835 96.4534Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M222.23 147.692C226.012 140.126 226.356 123.276 225.325 115.367C224.921 112.272 221.725 115.515 218.447 115.367C214.731 115.199 212.601 111.24 211.225 115.367C209.562 120.357 209.85 147.692 209.85 147.692L175.118 135.312L178.557 147.692C178.557 147.692 214.294 163.563 222.23 147.692Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M195.483 378.817L192.5 366.5H185.5L184.785 376.333L189.649 380.482L195.483 378.817Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M162.815 378.817L159.5 366.5L153.196 367.532L152.116 376.333L156.98 380.482L162.815 378.817Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M183.343 384.265L184.785 376.333C184.785 376.333 188.434 377.624 190.753 378.091C192.627 378.468 194.312 378.189 196.047 377.66C197.169 377.317 198.39 377.445 199.364 378.098L209.14 384.653C209.744 385.058 209.457 386 208.731 386H184.79C183.872 386 183.179 385.168 183.343 384.265Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M150.674 384.265L152.116 376.333C152.116 376.333 155.765 377.624 158.084 378.091C159.958 378.468 161.644 378.189 163.379 377.66C164.501 377.317 165.721 377.445 166.696 378.098L176.472 384.653C177.076 385.058 176.789 386 176.062 386H152.122C151.204 386 150.51 385.168 150.674 384.265Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M207.443 301.062C207.443 285.201 192.312 218.531 192.312 218.531L161.019 214.06C161.019 214.06 162.319 236.936 168.241 256.701C174.677 278.186 185.778 296.931 185.778 303.125C185.778 310.304 178.816 350.131 183 367.5C183.649 370.193 186.575 367.564 190 367.5C193.441 367.435 197.38 369.923 198 367.5C201.036 355.631 207.443 313.743 207.443 301.062Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='160' y='213' width='49' height='157'%3e%3cpath d='M207.443 301.062C207.443 285.201 192.312 218.531 192.312 218.531L161.019 214.06C161.019 214.06 162.319 236.936 168.241 256.701C174.677 278.186 185.778 296.931 185.778 303.125C185.778 310.304 178.816 350.131 183 367.5C183.649 370.193 186.575 367.564 190 367.5C193.441 367.435 197.38 369.923 198 367.5C201.036 355.631 207.443 313.743 207.443 301.062Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3c/mask%3e%3cg mask='url(%23mask0)'%3e%3cpath d='M196 359C196 342 207.5 297 207.5 297C207.5 297 214 360.5 202 371.5C195.465 377.49 179.5 371.5 179.5 368.5C179.5 363.56 196 365.206 196 359Z' fill='%23FFE94E'/%3e%3c/g%3e%3cpath d='M207.443 301.062C207.443 285.201 192.312 218.531 192.312 218.531L161.019 214.06C161.019 214.06 162.319 236.936 168.241 256.701C174.677 278.186 185.778 296.931 185.778 303.125C185.778 310.304 178.816 350.131 183 367.5C183.649 370.193 186.575 367.564 190 367.5C193.441 367.435 197.38 369.923 198 367.5C201.036 355.631 207.443 313.743 207.443 301.062Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M176.5 273.5L187 221L181.5 220L174.5 275.5L176.5 273.5Z' fill='%23292839'/%3e%3cpath d='M177.181 264.61C178.54 243.124 183.371 214.404 183.371 214.404H155.22C155.22 214.404 149.13 227.985 146.92 237.196C140.261 264.956 153.454 294.528 153.454 305.188C153.454 310.003 145.5 356 150.5 368C151.609 370.661 154.544 367.852 157.5 368C160.839 368.167 164.205 370.951 165 368C169.058 352.943 176.023 319.975 177.181 308.627C177.989 300.718 176.107 281.594 177.181 264.61Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M171.679 118.118L172.711 130.498L165.489 134.968L160.331 130.498L165.489 115.711L160.331 91.9832L186.81 94.3903C186.81 94.3903 189.905 113.304 179.245 121.901C175.497 124.923 171.679 118.118 171.679 118.118Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M148.639 180.016C148.511 159.631 158.956 126.715 158.956 126.715C158.956 126.715 161.466 130.097 164.458 131.185C168.241 132.561 172.711 130.498 172.711 130.498C172.711 130.498 183.549 141.297 186.466 150.786C190.294 163.238 185.226 171.175 186.466 184.143C188.023 200.426 197.377 216.67 194.719 218.531C184.747 225.511 164.802 213.372 156.893 216.467C143.752 221.609 148.728 194.127 148.639 180.016Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cmask id='mask1' mask-type='alpha' maskUnits='userSpaceOnUse' x='147' y='125' width='49' height='97'%3e%3cpath d='M148.639 180.016C148.511 159.631 158.956 126.715 158.956 126.715C158.956 126.715 161.466 130.097 164.458 131.185C168.241 132.561 172.711 130.498 172.711 130.498C172.711 130.498 183.549 141.297 186.466 150.786C190.294 163.238 185.226 171.175 186.466 184.143C188.023 200.426 197.377 216.67 194.719 218.531C184.747 225.511 164.802 213.372 156.893 216.467C143.752 221.609 148.728 194.127 148.639 180.016Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3c/mask%3e%3cg mask='url(%23mask1)'%3e%3cpath d='M161.5 170C165.112 153.39 162.5 129.5 162.5 129.5L141.5 157L147 209C147 209 158.196 185.192 161.5 170Z' fill='%23FFE94E'/%3e%3c/g%3e%3cpath d='M148.639 180.016C148.511 159.631 158.956 126.715 158.956 126.715C158.956 126.715 161.466 130.097 164.458 131.185C168.241 132.561 172.711 130.498 172.711 130.498C172.711 130.498 183.549 141.297 186.466 150.786C190.294 163.238 185.226 171.175 186.466 184.143C188.023 200.426 197.377 216.67 194.719 218.531C184.747 225.511 164.802 213.372 156.893 216.467C143.752 221.609 148.728 194.127 148.639 180.016Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M177.525 80.979C184.372 83.561 190.812 86.4 191.28 93.7025C191.892 103.244 169.96 105.738 169.96 105.738C169.96 105.738 165.855 102.21 163.77 103.675C161.215 105.471 167.209 110.896 167.209 110.896C167.209 110.896 164.873 119.542 162.738 125.683C159.658 134.547 161.047 138.316 160.675 147.692C160.16 160.677 157.157 168.253 150.359 179.328C141.031 194.525 124.912 214.116 115.283 208.558C107.03 203.794 118.583 184.275 117.69 166.949C116.915 151.908 103.565 141.093 112.188 128.778C118.345 119.985 128.504 120.428 138.667 112.96C153.507 102.054 160.294 74.4809 177.525 80.979Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M217.071 162.822C206.325 171.419 163.082 162.822 163.082 162.822L169.616 138.407C169.616 138.407 199.877 149.28 211.569 144.597C217.071 142.393 229.107 124.996 235.641 118.118C237.347 116.322 238.522 119.728 241.143 121.557C244.093 123.615 248.708 122.588 246.645 126.715C243.999 132.007 234.265 149.067 217.071 162.822Z' fill='white' stroke='white' stroke-width='1.2'/%3e%3cpath d='M175 164.5C175 164.5 206.325 171.419 217.071 162.822C234.265 149.067 243.999 132.007 246.645 126.715C248.708 122.588 244.093 123.615 241.143 121.557C238.522 119.728 237.347 116.322 235.641 118.118C229.107 124.996 217.071 142.393 211.569 144.597C199.877 149.28 169.616 138.407 169.616 138.407' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M265 96.5V104' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M268 96.5V104' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M290.5 96C290.5 96 287.5 100 290.5 104.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M169.5 114.5L172 118.5L172.5 130.5L169.5 114.5Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M185 171C184.643 167.428 176.5 165 176.5 165L187 167L186 175.5L186.5 184C186.5 184 185.5 176 185 171Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3c/svg%3e";

function _templateObject2$t() {
  var data = _taggedTemplateLiteralLoose(["\n  max-width: 750px;\n  width: 100%;\n"]);

  _templateObject2$t = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$13() {
  var data = _taggedTemplateLiteralLoose(["\n  text-align: center;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: ", ";\n"]);

  _templateObject$13 = function _templateObject() {
    return data;
  };

  return data;
}
var ErrorWrapper = styled.div(_templateObject$13(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
});
var StyledImage = styled(Image)(_templateObject2$t());

var getImg = function getImg(image, statusCode) {
  switch (statusCode) {
    case 500:
      return img$4;

    case 404:
      return img$5;

    default:
      return image;
  }
};

var ErrorTemplate = function ErrorTemplate(_ref2) {
  var action = _ref2.action,
      image = _ref2.image,
      statusCode = _ref2.statusCode,
      subTitle = _ref2.subTitle,
      title = _ref2.title;
  var imgSrc = getImg(image, statusCode);
  return /*#__PURE__*/React.createElement(ErrorWrapper, null, imgSrc && /*#__PURE__*/React.createElement(StyledImage, {
    src: imgSrc,
    alt: title,
    mb: 12
  }), /*#__PURE__*/React.createElement(H1, {
    content: title,
    mb: 2
  }), subTitle && /*#__PURE__*/React.createElement(Text, {
    content: subTitle,
    color: "textSecondary",
    mb: 6
  }), action);
};
ErrorTemplate.propTypes = ErrorTemplatePropTypes;
ErrorTemplate.defaultProps = ErrorTemplateDefaultProps;

function _templateObject2$u() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 500px;\n  max-width: 500px;\n  user-select: none;\n"]);

  _templateObject2$u = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$14() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-radius: 100%;\n  && {\n    margin: ", ";\n  }\n"]);

  _templateObject$14 = function _templateObject() {
    return data;
  };

  return data;
}
var CloseModalIcon$1 = styled(Icon).attrs(function () {
  return {
    size: "lg"
  };
})(_templateObject$14(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
});
var StyledImg$1 = styled(Image)(_templateObject2$u());
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

function _templateObject3$f() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject3$f = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$v() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.1s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  :hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"]);

  _templateObject2$v = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$15() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  height: 48px;\n  width: 48px;\n  text-align: center;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"]);

  _templateObject$15 = function _templateObject() {
    return data;
  };

  return data;
}
var Container$7 = styled.div(_templateObject$15(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var IconWrapper = styled.div(_templateObject2$v());
var StyledIcon$5 = styled(Icon)(_templateObject3$f(), function (_ref2) {
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Container$7, _extends({
    onClick: handleClick
  }, props), loadError ? /*#__PURE__*/React.createElement(StyledIcon$5, {
    color: "secondary",
    icon: "file",
    size: "lg"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconWrapper, null, /*#__PURE__*/React.createElement(StyledIcon$5, {
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

// Get an array of error messages for a form row
var getFormRowErrors = function getFormRowErrors(errors, fields) {
  return Object.keys(errors).map(function (errKey) {
    var _errors$errKey;

    return fields.includes(errKey) ? (_errors$errKey = errors[errKey]) == null ? void 0 : _errors$errKey.message : null;
  });
}; // Get error for an input from errors object

var getFormInputError = function getFormInputError(errors, field) {
  return errors[field] ? errors[field] : null;
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

function _templateObject2$w() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 0;\n"]);

  _templateObject2$w = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$16() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  flex: 1;\n  padding: 24px 24px 24px 40px;\n"]);

  _templateObject$16 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContent$1 = styled.div(_templateObject$16());
var ActionWrapper = styled.div(_templateObject2$w());
var WizardStepContent = function WizardStepContent(_ref) {
  var children = _ref.children,
      content = _ref.content,
      currentStep = _ref.currentStep,
      handleNext = _ref.handleNext,
      handlePrev = _ref.handlePrev,
      isFirstStep = _ref.isFirstStep,
      isLastStep = _ref.isLastStep,
      nextStepMethod = _ref.nextStepMethod,
      stepCount = _ref.stepCount,
      submitButtonDisabled = _ref.submitButtonDisabled,
      submitButtonLoading = _ref.submitButtonLoading,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "content", "currentStep", "handleNext", "handlePrev", "isFirstStep", "isLastStep", "nextStepMethod", "stepCount", "submitButtonDisabled", "submitButtonLoading"]);

  var _useState = useState(false),
      mounted = _useState[0],
      setMounted = _useState[1];

  useEffect(function () {
    setMounted(true);
    return function () {
      setMounted(false);
    };
  }, []);
  return /*#__PURE__*/React.createElement(StyledContent$1, props, children || content, /*#__PURE__*/React.createElement(ActionWrapper, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OutlineButton, {
    color: "secondary",
    disabled: isFirstStep,
    icon: "arrow-left",
    iconProps: {
      color: "secondary"
    },
    noPadding: true,
    onClick: handlePrev
  }), /*#__PURE__*/React.createElement(Text, {
    color: "textSecondary",
    dInline: true,
    fontStyle: "italic",
    ml: 2
  }, currentStep + " of " + stepCount + " steps")), /*#__PURE__*/React.createElement(Button, {
    content: isLastStep ? "Finish" : "Next",
    disabled: submitButtonDisabled,
    loading: submitButtonLoading,
    onClick: nextStepMethod === "button" ? handleNext : undefined,
    type: nextStepMethod
  })));
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

function _templateObject3$g() {
  var data = _taggedTemplateLiteralLoose(["\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 120%;\n  color: ", ";\n  padding-left: 8px;\n  transition: all ", "\n    ease-in-out;\n  ", "\n"]);

  _templateObject3$g = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$x() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 100%;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 120%;\n  z-index: 1;\n  transition: all ", "\n    ease-in-out;\n"]);

  _templateObject2$x = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$17() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: normal;\n\n  ", "\n\n  ", "\n"]);

  _templateObject$17 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTitle = styled.div(_templateObject$17(), function (_ref) {
  var isPassed = _ref.isPassed;
  return isPassed && css(["cursor:pointer;"]);
}, function (_ref2) {
  var isHorizontal = _ref2.isHorizontal;
  return isHorizontal && css(["flex-direction:column;align-items:flex-start;"]);
});
var Flag = styled.div(_templateObject2$x(), function (props) {
  return stepFlagBackgroundColor(props);
}, function (props) {
  return stepFlagColor(props);
}, function (_ref3) {
  var transitionDuration = _ref3.transitionDuration;
  return transitionDuration + "ms";
});
var Label$1 = styled.span(_templateObject3$g(), function (props) {
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
  headerFadeColor: PropTypes.string,
  nextStepMethod: PropTypes.oneOf(["submit", "button"]),
  orientation: PropTypes.string,
  setCurrentStepIndex: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  submitButtonDisabled: PropTypes.bool,
  submitButtonLoading: PropTypes.bool,
  transitionDuration: PropTypes.number
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var WizardDefaultProps = {
  headerFadeColor: "#ffffff",
  nextStepMethod: "submit",
  orientation: "horizontal",
  transitionDuration: 250
};

function _templateObject5$2() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  position: relative;\n  min-height: 60px;\n\n  :last-child {\n    ", " {\n      ", ";\n    }\n  }\n\n  ", "\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$7() {
  var data = _taggedTemplateLiteralLoose(["\n  border-width: 0;\n  border-style: dashed;\n  border-color: ", ";\n  border-left-width: 2px;\n  transition: all ", "\n    ease-in-out;\n  position: absolute;\n  top: 0;\n  left: 15px;\n  bottom: 0;\n  ::before {\n    content: \"\";\n    width: 2px;\n    height: 100%;\n    display: inline-block;\n  }\n\n  ", "\n"]);

  _templateObject4$7 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$h() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject3$h = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$y() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject2$y = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$18() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$18 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$8 = styled.div(_templateObject$18(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StepsWrapper = styled.div(_templateObject2$y(), function (_ref) {
  var headerFadeColor = _ref.headerFadeColor,
      isHorizontal = _ref.isHorizontal;
  return isHorizontal && css(["position:relative;::before{content:\"\";display:inline-block;width:80px;height:100%;background:linear-gradient( 90deg,", " 0%,rgba(255,255,255,0) 100% );position:absolute;top:0;left:0;z-index:2;}::after{content:\"\";display:inline-block;width:80px;height:100%;background:linear-gradient( 270deg,", " 0%,rgba(255,255,255,0) 100% );position:absolute;top:0;right:0;z-index:2;}"], headerFadeColor, headerFadeColor);
});
var Steps = styled.div(_templateObject3$h(), function (_ref2) {
  var isHorizontal = _ref2.isHorizontal;
  return isHorizontal && css(["display:flex;align-items:center;justify-content:flex-start;white-space:nowrap;overflow-y:hidden;overflow-x:scroll;padding:0 64px;user-select:none;-ms-overflow-style:none;&&::-webkit-scrollbar{display:none;}&.active{cursor:grabbing;cursor:-webkit-grabbing;}"]);
});
var StepConnector = styled.div(_templateObject4$7(), function (props) {
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
      headerFadeColor = _ref7.headerFadeColor,
      nextStepMethod = _ref7.nextStepMethod,
      orientation = _ref7.orientation,
      setCurrentStepIndex = _ref7.setCurrentStepIndex,
      steps = _ref7.steps,
      submitButtonDisabled = _ref7.submitButtonDisabled,
      submitButtonLoading = _ref7.submitButtonLoading,
      transitionDuration = _ref7.transitionDuration,
      props = _objectWithoutPropertiesLoose(_ref7, ["currentStepContent", "currentStepIndex", "headerFadeColor", "nextStepMethod", "orientation", "setCurrentStepIndex", "steps", "submitButtonDisabled", "submitButtonLoading", "transitionDuration"]);

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
    stepCount: stepCount,
    submitButtonDisabled: submitButtonDisabled,
    submitButtonLoading: submitButtonLoading
  });
  return /*#__PURE__*/React.createElement(Wrapper$8, props, /*#__PURE__*/React.createElement(StepsWrapper, {
    headerFadeColor: headerFadeColor,
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

export { Alert, AppContainer, AuthLayout, Box, BoxBase, Button, ButtonBase, COLOR, COLOR_PROP_TYPES, CategoryItem, CategoryItemContentLoader, Checkbox, ChipBadge, Collapse, CollapseButton, DIMENSION, DIMENSION_PROP_TYPES, DISPLAY, DISPLAY_PROP_TYPES, DashboardLayout, DetailsTable, Divider, DotsSpinner, DownloadModule, Dropdown, ErrorTemplate, ExplorerLayout, FieldBase, FieldWrapper, Fieldset, FileManager, FilePond, FileUpload, Flex, FormError, FormLabel, FormRow, FreeBrandIconSet, FreeSolidIconSet, GlobalStyle, H1, H2, H3, H4, H5, H6, HeadingBase, History, Icon, Image, ImageModal, Input, KIT_COLORS, KIT_FONTS, KIT_ICON_SIZES, KIT_TYPOGRAPHY, Language, MarketPlaceItem, MarketPlaceItemContentLoader, Modal, NoItem, OutlineButton, PageLoading, PageProgressBar, PageTransition, Pagination, Paragraph, Radio, RadioBase, ReactSelect, RocksKitIcons, RocksKitTheme, RocksSpinner, SPACER, SPACER_FORMULA, SPACER_POSTFIX, SPACER_PROP_TYPES, SearchBar, Select, ShareModule, Stepper, THEME_COLORS, Tab, Text, TextArea, TextBase, TextButton, Thumbnail, ToggleSwitch, Wizard, getFormInputError, getFormRowErrors, handleScroll };
//# sourceMappingURL=rockskit.es.js.map
