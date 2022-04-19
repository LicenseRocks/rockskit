'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var styled = require('styled-components');
var Grid = require('@material-ui/core/Grid');
var freeBrandsSvgIcons = require('@fortawesome/free-brands-svg-icons');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var styles = require('@material-ui/core/styles');
var MuiButtonBase = require('@material-ui/core/ButtonBase');
var core = require('@material-ui/core');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var CssBaseline = require('@material-ui/core/CssBaseline');
var fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');
var notistack = require('notistack');
var Typography = require('@material-ui/core/Typography');
var MuiUseMediaQuery = require('@material-ui/core/useMediaQuery');
var RCL = require('react-content-loader');
var reactCollapse = require('react-collapse');
var DayPicker = require('react-day-picker');
var Dialog = require('@material-ui/core/Dialog');
var Menu = require('@material-ui/core/Menu');
var MenuItem = require('@material-ui/core/MenuItem');
var QRCode = require('qrcode.react');
var reactHookForm = require('react-hook-form');
var MuiPopover = require('@material-ui/core/Popover');
var copy = require('copy-to-clipboard');
var reactFilepond = require('react-filepond');
var AvatarEditor = require('react-avatar-editor');
var reactDropzone = require('react-dropzone');
var MuiSlider = require('@material-ui/core/Slider');
var axios = require('axios');
var AsyncSelect = require('react-select/async');
var ReactSelect$1 = require('react-select');
var flatMap = require('lodash/flatMap');
var makeAnimated = require('react-select/animated');
var useScrollTrigger = require('@material-ui/core/useScrollTrigger');
var Slide = require('@material-ui/core/Slide');
var MuiHidden = require('@material-ui/core/Hidden');
var Masonry = require('react-masonry-css');
var CircularProgress = require('@material-ui/core/CircularProgress');
var DialogActions = require('@material-ui/core/DialogActions');
var DialogContent = require('@material-ui/core/DialogContent');
var DialogTitle = require('@material-ui/core/DialogTitle');
var MuiContainer = require('@material-ui/core/Container');
var Drawer = require('@material-ui/core/Drawer');
var Fab = require('@material-ui/core/Fab');
var reactNprogress = require('@tanem/react-nprogress');
var reactTransitionGroup = require('react-transition-group');
var MuiPagination = require('@material-ui/lab/Pagination');
var PaginationItem = require('@material-ui/lab/PaginationItem');
var reactCodeBlocks = require('react-code-blocks');
var MuiTabs = require('@material-ui/core/Tabs');
var MuiTab = require('@material-ui/core/Tab');
var MuiTooltip = require('@material-ui/core/Tooltip');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var Grid__default = /*#__PURE__*/_interopDefaultLegacy(Grid);
var MuiButtonBase__default = /*#__PURE__*/_interopDefaultLegacy(MuiButtonBase);
var CssBaseline__default = /*#__PURE__*/_interopDefaultLegacy(CssBaseline);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var MuiUseMediaQuery__default = /*#__PURE__*/_interopDefaultLegacy(MuiUseMediaQuery);
var RCL__default = /*#__PURE__*/_interopDefaultLegacy(RCL);
var DayPicker__default = /*#__PURE__*/_interopDefaultLegacy(DayPicker);
var Dialog__default = /*#__PURE__*/_interopDefaultLegacy(Dialog);
var Menu__default = /*#__PURE__*/_interopDefaultLegacy(Menu);
var MenuItem__default = /*#__PURE__*/_interopDefaultLegacy(MenuItem);
var QRCode__default = /*#__PURE__*/_interopDefaultLegacy(QRCode);
var MuiPopover__default = /*#__PURE__*/_interopDefaultLegacy(MuiPopover);
var copy__default = /*#__PURE__*/_interopDefaultLegacy(copy);
var AvatarEditor__default = /*#__PURE__*/_interopDefaultLegacy(AvatarEditor);
var MuiSlider__default = /*#__PURE__*/_interopDefaultLegacy(MuiSlider);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var AsyncSelect__default = /*#__PURE__*/_interopDefaultLegacy(AsyncSelect);
var ReactSelect__default = /*#__PURE__*/_interopDefaultLegacy(ReactSelect$1);
var flatMap__default = /*#__PURE__*/_interopDefaultLegacy(flatMap);
var makeAnimated__default = /*#__PURE__*/_interopDefaultLegacy(makeAnimated);
var useScrollTrigger__default = /*#__PURE__*/_interopDefaultLegacy(useScrollTrigger);
var Slide__default = /*#__PURE__*/_interopDefaultLegacy(Slide);
var MuiHidden__default = /*#__PURE__*/_interopDefaultLegacy(MuiHidden);
var Masonry__default = /*#__PURE__*/_interopDefaultLegacy(Masonry);
var CircularProgress__default = /*#__PURE__*/_interopDefaultLegacy(CircularProgress);
var DialogActions__default = /*#__PURE__*/_interopDefaultLegacy(DialogActions);
var DialogContent__default = /*#__PURE__*/_interopDefaultLegacy(DialogContent);
var DialogTitle__default = /*#__PURE__*/_interopDefaultLegacy(DialogTitle);
var MuiContainer__default = /*#__PURE__*/_interopDefaultLegacy(MuiContainer);
var Drawer__default = /*#__PURE__*/_interopDefaultLegacy(Drawer);
var Fab__default = /*#__PURE__*/_interopDefaultLegacy(Fab);
var MuiPagination__default = /*#__PURE__*/_interopDefaultLegacy(MuiPagination);
var PaginationItem__default = /*#__PURE__*/_interopDefaultLegacy(PaginationItem);
var MuiTabs__default = /*#__PURE__*/_interopDefaultLegacy(MuiTabs);
var MuiTab__default = /*#__PURE__*/_interopDefaultLegacy(MuiTab);
var MuiTooltip__default = /*#__PURE__*/_interopDefaultLegacy(MuiTooltip);

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
  var data = _taggedTemplateLiteralLoose(["\n  html, body, #root, #__next {\n    min-height: 100%;\n    height: 100%;\n  }\n\n  input:-webkit-autofill,\n  input:-webkit-autofill:hover,\n  input:-webkit-autofill:focus,\n  input:-webkit-autofill:active  {\n      -webkit-box-shadow: 0 0 0 30px white inset !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyle = styled.createGlobalStyle(_templateObject());

var FreeBrandIconSet = {
  fabFacebookF: freeBrandsSvgIcons.faFacebookF,
  fabLinkedinIn: freeBrandsSvgIcons.faLinkedinIn,
  fabTelegramPlane: freeBrandsSvgIcons.faTelegramPlane,
  fabTwitter: freeBrandsSvgIcons.faTwitter,
  fabWhatsapp: freeBrandsSvgIcons.faWhatsapp,
  fabWindows: freeBrandsSvgIcons.faWindows
};

var FreeSolidIconSet = {
  faAngleDown: freeSolidSvgIcons.faAngleDown,
  faAngleUp: freeSolidSvgIcons.faAngleUp,
  faArrowLeft: freeSolidSvgIcons.faArrowLeft,
  faArrowRight: freeSolidSvgIcons.faArrowRight,
  faAt: freeSolidSvgIcons.faAt,
  faBars: freeSolidSvgIcons.faBars,
  faBox: freeSolidSvgIcons.faBox,
  faBoxes: freeSolidSvgIcons.faBoxes,
  faBuilding: freeSolidSvgIcons.faBuilding,
  faCalendar: freeSolidSvgIcons.faCalendar,
  faCheck: freeSolidSvgIcons.faCheck,
  faCheckCircle: freeSolidSvgIcons.faCheckCircle,
  faChevronDown: freeSolidSvgIcons.faChevronDown,
  faChevronLeft: freeSolidSvgIcons.faChevronLeft,
  faChevronRight: freeSolidSvgIcons.faChevronRight,
  faChevronUp: freeSolidSvgIcons.faChevronUp,
  faComments: freeSolidSvgIcons.faComments,
  faCopy: freeSolidSvgIcons.faCopy,
  faCode: freeSolidSvgIcons.faCode,
  faEllipsisH: freeSolidSvgIcons.faEllipsisH,
  faEnvelope: freeSolidSvgIcons.faEnvelope,
  faEuroSign: freeSolidSvgIcons.faEuroSign,
  faFile: freeSolidSvgIcons.faFile,
  faFilePdf: freeSolidSvgIcons.faFilePdf,
  faFilter: freeSolidSvgIcons.faFilter,
  faHashtag: freeSolidSvgIcons.faHashtag,
  faGlobe: freeSolidSvgIcons.faGlobe,
  faInfoCircle: freeSolidSvgIcons.faInfoCircle,
  faKey: freeSolidSvgIcons.faKey,
  faLink: freeSolidSvgIcons.faLink,
  faMapMarker: freeSolidSvgIcons.faMapMarker,
  faMinus: freeSolidSvgIcons.faMinus,
  faMoneyBill: freeSolidSvgIcons.faMoneyBill,
  faPencilAlt: freeSolidSvgIcons.faPencilAlt,
  faPhone: freeSolidSvgIcons.faPhone,
  faPlus: freeSolidSvgIcons.faPlus,
  faQuestion: freeSolidSvgIcons.faQuestion,
  faSadCry: freeSolidSvgIcons.faSadCry,
  faSearch: freeSolidSvgIcons.faSearch,
  faSearchPlus: freeSolidSvgIcons.faSearchPlus,
  faShareAlt: freeSolidSvgIcons.faShareAlt,
  faShoppingCart: freeSolidSvgIcons.faShoppingCart,
  faSignInAlt: freeSolidSvgIcons.faSignInAlt,
  faStore: freeSolidSvgIcons.faStore,
  faTachometerAlt: freeSolidSvgIcons.faTachometerAlt,
  faThLarge: freeSolidSvgIcons.faThLarge,
  faTimes: freeSolidSvgIcons.faTimes,
  faTrash: freeSolidSvgIcons.faTrash,
  faTruck: freeSolidSvgIcons.faTruck,
  faTv: freeSolidSvgIcons.faTv,
  faUser: freeSolidSvgIcons.faUser,
  faUserCircle: freeSolidSvgIcons.faUserCircle
};

var KIT_COLORS = {
  primary: {
    main: "#371FEB",
    light: "#DEDAFC",
    accent: "FFFB4D"
  },
  gray: {
    black: "#08042A",
    dark: "#4A485B",
    regular: "#DAD9DD",
    medium: "#9796A2",
    light: "#F7F7F8",
    semiLight: "#F1F1F4",
    white: "#FFFFFF"
  },
  alert: {
    darkRed: "#F15937",
    lightRed: "#FCDFD9",
    darkGreen: "#0EC811",
    lightGreen: "#D9FCD9",
    darkYellow: "#5C5800",
    lightYellow: "#FFFC8A"
  }
};

var KIT_FONTS = {
  heading: "Montserrat",
  regular: "Inter"
};

var KIT_ICON_SIZES = {
  lg: 20,
  md: 16,
  sm: 12
};

var KIT_TYPOGRAPHY = function KIT_TYPOGRAPHY(theme) {
  var _h, _h2, _h3;

  return {
    h1: (_h = {
      fontFamily: theme.typography.fonts.heading,
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "-0.03em"
    }, _h[theme.breakpoints.down("sm")] = {
      fontSize: "28px",
      letterSpacing: "-0.02em"
    }, _h),
    h2: (_h2 = {
      fontFamily: theme.typography.fonts.heading,
      fontWeight: 700,
      fontSize: "26px",
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "-0.02em"
    }, _h2[theme.breakpoints.down("sm")] = {
      fontSize: "20px",
      letterSpacing: "-0.01em"
    }, _h2),
    h3: (_h3 = {
      fontFamily: theme.typography.fonts.heading,
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "-0.01em"
    }, _h3[theme.breakpoints.down("sm")] = {
      fontSize: "16px",
      letterSpacing: "-0.01em"
    }, _h3),
    h4: {
      fontFamily: theme.typography.fonts.heading,
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "unset"
    },
    h5: {
      fontFamily: theme.typography.fonts.heading,
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "unset"
    },
    h6: {
      fontFamily: theme.typography.fonts.heading,
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "unset"
    },
    body1: {
      // Paragraph
      fontFamily: theme.typography.fonts.regular,
      fontSizeLg: "18px",
      fontSize: "16px",
      fontSizeSm: "14px",
      lineHeight: "160%",
      textTransform: "initial",
      letterSpacing: "-0.01em"
    },
    body2: {
      // Text
      fontFamily: theme.typography.fonts.regular,
      fontSizeLg: "16px",
      fontSize: "14px",
      fontSizeSm: "12px",
      lineHeight: "120%",
      textTransform: "initial",
      letterSpacing: "unset"
    },
    button: {
      fontFamily: theme.typography.fonts.regular,
      fontSizeLg: "16px",
      fontSizeMd: "16px",
      fontSizeSm: "12px",
      fontSizeXs: "10px",
      lineHeight: "120%",
      textTransform: "none",
      letterSpacing: "unset",
      fontWeight: "bold"
    }
  };
};

var RocksKitIcons = _extends({}, FreeBrandIconSet, FreeSolidIconSet);
var RocksKitTheme = function RocksKitTheme(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      colors = _ref.colors,
      fonts = _ref.fonts,
      loadingIndicator = _ref.loadingIndicator;

  var theme = styles.createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 1200
      }
    },
    defaultIconSet: "fa",
    typography: {
      fonts: {
        heading: (fonts == null ? void 0 : fonts.heading) || KIT_FONTS.heading,
        regular: (fonts == null ? void 0 : fonts.regular) || KIT_FONTS.regular
      }
    },
    loadingIndicator: loadingIndicator
  });
  theme.palette = _extends({}, theme.palette, {
    primary: {
      main: (colors == null ? void 0 : colors.primaryMain) || KIT_COLORS.primary.main,
      light: (colors == null ? void 0 : colors.primaryLight) || KIT_COLORS.primary.light
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
      default: (colors == null ? void 0 : colors.bgColor) || KIT_COLORS.gray.light
    }
  });
  var typography = KIT_TYPOGRAPHY(theme);
  theme.typography = _extends({}, theme.typography, {
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
    body1: typography.body1,
    // Paragraph
    body2: typography.body2,
    // Text
    button: typography.button
  });

  theme.spacing = function () {
    var amount = 4;

    for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
      nums[_key] = arguments[_key];
    }

    return nums.reduce(function (output, n) {
      return "" + output + n * amount + (n > 0 ? "px" : "") + " ";
    }, "");
  };

  theme.overrides.MuiButtonBase = {
    root: typography.button,
    disabled: {
      opacity: 0.3
    }
  };
  return theme;
};

var COLOR_PROP_TYPES = {
  colorPrimary: PropTypes__default['default'].bool,
  colorPrimaryLight: PropTypes__default['default'].bool,
  colorGrayLight: PropTypes__default['default'].bool,
  colorGraySemiLight: PropTypes__default['default'].bool,
  colorGrayRegular: PropTypes__default['default'].bool,
  colorGrayMedium: PropTypes__default['default'].bool,
  colorGrayDark: PropTypes__default['default'].bool,
  colorBlack: PropTypes__default['default'].bool,
  colorWhite: PropTypes__default['default'].bool,
  colorError: PropTypes__default['default'].bool,
  colorErrorLight: PropTypes__default['default'].bool,
  colorWarning: PropTypes__default['default'].bool,
  colorWarningLight: PropTypes__default['default'].bool,
  colorSuccess: PropTypes__default['default'].bool,
  colorSuccessLight: PropTypes__default['default'].bool
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
  h100: PropTypes__default['default'].bool,
  w100: PropTypes__default['default'].bool,
  h100vh: PropTypes__default['default'].bool,
  w100vw: PropTypes__default['default'].bool
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
  dBlock: PropTypes__default['default'].bool,
  dFlex: PropTypes__default['default'].bool,
  dInline: PropTypes__default['default'].bool,
  dInlineBlock: PropTypes__default['default'].bool,
  dInlineFlex: PropTypes__default['default'].bool,
  dNone: PropTypes__default['default'].bool
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
  m: PropTypes__default['default'].number,
  m0: PropTypes__default['default'].bool,
  mx: PropTypes__default['default'].number,
  my: PropTypes__default['default'].number,
  mt: PropTypes__default['default'].number,
  mb: PropTypes__default['default'].number,
  mr: PropTypes__default['default'].number,
  ml: PropTypes__default['default'].number,
  mAuto: PropTypes__default['default'].bool,
  p: PropTypes__default['default'].number,
  p0: PropTypes__default['default'].bool,
  px: PropTypes__default['default'].number,
  py: PropTypes__default['default'].number,
  pt: PropTypes__default['default'].number,
  pb: PropTypes__default['default'].number,
  pr: PropTypes__default['default'].number,
  pl: PropTypes__default['default'].number
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

var FlexPropTypes = _extends({
  alignItems: PropTypes__default['default'].oneOf(["flex-start", "center", "flex-end", "stretch", "baseline"]),
  container: PropTypes__default['default'].bool,
  item: PropTypes__default['default'].bool,
  justify: PropTypes__default['default'].oneOf(["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"])
}, SPACER_PROP_TYPES, DIMENSION_PROP_TYPES);
var FlexDefaultProps = {
  alignItems: "center",
  justify: "flex-start"
};

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFlex = styled__default['default'](Grid__default['default'])(_templateObject$1(), function (theme) {
  return DIMENSION(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var Flex = function Flex(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledFlex, props);
};
Flex.propTypes = FlexPropTypes;
Flex.defaultProps = FlexDefaultProps;

var IconPropTypes = _extends({
  color: PropTypes__default['default'].oneOf(THEME_COLORS),
  icon: PropTypes__default['default'].string.isRequired,
  onClick: PropTypes__default['default'].func,
  prefix: PropTypes__default['default'].string,
  rounded: PropTypes__default['default'].bool,
  size: PropTypes__default['default'].oneOf(Object.keys(KIT_ICON_SIZES))
}, COLOR_PROP_TYPES, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var IconDefaultProps = {
  color: "primary",
  rounded: false,
  size: "md"
};

var ButtonBasePropTypes = _extends({
  block: PropTypes__default['default'].bool,
  color: PropTypes__default['default'].oneOf(["primary", "secondary", "subtle"]),
  content: PropTypes__default['default'].string,
  children: PropTypes__default['default'].node,
  disabled: PropTypes__default['default'].bool,
  loading: PropTypes__default['default'].bool,
  endIcon: PropTypes__default['default'].string,
  href: PropTypes__default['default'].string,
  icon: PropTypes__default['default'].string,
  iconProps: IconPropTypes,
  noPadding: PropTypes__default['default'].bool,
  onClick: PropTypes__default['default'].func,
  size: PropTypes__default['default'].oneOf(["lg", "md", "sm", "xs"]),
  startIcon: PropTypes__default['default'].string,
  target: PropTypes__default['default'].string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ButtonBaseDefaultProps = {
  block: false,
  color: "primary",
  size: "md"
};

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    box-sizing: border-box;\n    text-transfrom: none !important;\n    border-radius: 24px;\n    ", "\n    min-width: 40px;\n    height: 40px;\n    transition: all 100ms ease-in-out;\n    width: ", ";\n\n    :hover {\n      opacity: 0.7;\n    }\n\n    :disabled {\n      opacity: 0.3;\n      cursor: not-allowed;\n      pointer-events: none;\n    }\n\n    ", "\n\n    ", "\n    ", "\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled__default['default'](MuiButtonBase__default['default'])(_templateObject$2(), function (_ref) {
  var noPadding = _ref.noPadding,
      theme = _ref.theme;
  return !noPadding && "padding: " + theme.spacing(4, 4) + ";";
}, function (_ref2) {
  var block = _ref2.block;
  return block ? "100%" : "initial";
}, function (_ref3) {
  var size = _ref3.size,
      theme = _ref3.theme;

  if (size === "xs") {
    return styled.css(["font-size:", ";padding:", ";height:24px;min-width:24px;border-radius:12px;"], theme.typography.button.fontSizeXs, theme.spacing(2, 4));
  }

  if (size === "sm") {
    return styled.css(["font-size:", ";padding:", ";height:32px;min-width:32px;border-radius:16px;"], theme.typography.button.fontSizeSm, theme.spacing(2, 4));
  }

  if (size === "lg") {
    return styled.css(["font-size:", ";padding:", ";height:48px;min-width:48px;border-radius:24px;"], theme.typography.button.fontSizeLg, theme.spacing(3, 6));
  }

  return styled.css(["font-size:", ";"], theme.typography.button.fontSizeMd);
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
  return /*#__PURE__*/React__default['default'].createElement(StyledButton, _extends({
    component: href ? "a" : "button",
    href: href,
    size: size
  }, props), loading ? /*#__PURE__*/React__default['default'].createElement(DotsSpinner, {
    color: colors == null ? void 0 : colors.color
  }) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, startIcon && /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: startIcon,
    size: iconSize,
    mr: 2
  }), icon && /*#__PURE__*/React__default['default'].createElement(Icon, _extends({
    icon: icon,
    size: iconSize
  }, iconProps)), content || children, endIcon && /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: endIcon,
    size: iconSize,
    ml: 2
  })));
};
ButtonBase.propTypes = ButtonBasePropTypes;
ButtonBase.defaultProps = ButtonBaseDefaultProps;

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    ", "\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton$1 = styled__default['default'](ButtonBase)(_templateObject$3(), function (_ref) {
  var colors = _ref.colors;
  return styled.css(["background-color:", ";color:", ";svg{color:", ";}"], colors.backgroundColor, colors.color, colors.color);
});

var colorMapper = function colorMapper(color, theme) {
  if (color === "secondary") return {
    backgroundColor: theme.palette.gray.dark,
    color: theme.palette.common.white
  };
  if (color === "subtle") return {
    backgroundColor: theme.palette.gray.regular,
    color: theme.palette.gray.dark
  };
  return {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  };
};

var Button = function Button(_ref2) {
  var color = _ref2.color,
      props = _objectWithoutPropertiesLoose(_ref2, ["color"]);

  var theme = styled.useTheme();
  var colors = colorMapper(color, theme);
  return /*#__PURE__*/React__default['default'].createElement(StyledButton$1, _extends({
    colors: colors
  }, props));
};
Button.propTypes = ButtonBasePropTypes;

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    ", "\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton$2 = styled__default['default'](ButtonBase)(_templateObject$4(), function (_ref) {
  var colors = _ref.colors;
  return styled.css(["border:2px solid ", ";color:", ";svg{color:", ";}:hover{background-color:", ";color:", ";opacity:1;}"], colors.borderColor, colors.color, colors.color, colors.backgroundColorHover, colors.colorHover);
});

var colorMapper$1 = function colorMapper(color, theme) {
  if (color === "secondary") return {
    backgroundColorHover: theme.palette.gray.semiLight,
    borderColor: theme.palette.gray.regular,
    color: theme.palette.gray.dark
  };
  if (color === "subtle") return {
    colorHover: theme.palette.gray.semiLight,
    backgroundColorHover: theme.palette.gray.black,
    borderColor: theme.palette.gray.black,
    color: theme.palette.gray.black
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

  var theme = styled.useTheme();
  var colors = colorMapper$1(color, theme);
  return /*#__PURE__*/React__default['default'].createElement(StyledButton$2, _extends({
    colors: colors
  }, props));
};
OutlineButton.propTypes = ButtonBasePropTypes;

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    ", "\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton$3 = styled__default['default'](ButtonBase)(_templateObject$5(), function (_ref) {
  var colors = _ref.colors;
  return styled.css(["color:", ";svg{color:", ";}"], colors.color, colors.color);
});

var colorMapper$2 = function colorMapper(color, theme) {
  if (color === "secondary") return {
    color: theme.palette.gray.dark
  };
  if (color === "subtle") return {
    color: theme.palette.gray.dark
  };
  return {
    color: theme.palette.primary.main
  };
};

var TextButton = function TextButton(_ref2) {
  var color = _ref2.color,
      props = _objectWithoutPropertiesLoose(_ref2, ["color"]);

  var theme = styled.useTheme();
  var colors = colorMapper$2(color, theme);
  return /*#__PURE__*/React__default['default'].createElement(StyledButton$3, _extends({
    colors: colors
  }, props));
};
TextButton.propTypes = ButtonBasePropTypes;

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    margin-right: 10px;\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledOutlineButton = styled__default['default'](OutlineButton).attrs(function () {
  return {
    size: "small"
  };
})(_templateObject$6());
var ItemActionButton = function ItemActionButton(_ref) {
  var _ref$button = _ref.button,
      onClick = _ref$button.onClick,
      title = _ref$button.title,
      _ref$button$type = _ref$button.type,
      type = _ref$button$type === void 0 ? "normal" : _ref$button$type,
      button = _objectWithoutPropertiesLoose(_ref$button, ["onClick", "title", "type"]);

  var handleClick = function handleClick(e) {
    e.stopPropagation();
    onClick();
  };

  var Button = function Button(props) {
    return type === "normal" ? /*#__PURE__*/React__default['default'].createElement(TextButton, props) : /*#__PURE__*/React__default['default'].createElement(StyledOutlineButton, props);
  };

  return /*#__PURE__*/React__default['default'].createElement(Button, _extends({
    key: title,
    onClick: handleClick
  }, button), title);
};
ItemActionButton.propTypes = {
  button: PropTypes__default['default'].PropTypes.shape({
    onClick: PropTypes__default['default'].func,
    type: PropTypes__default['default'].string,
    title: PropTypes__default['default'].string
  }).isRequired
};

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    font-weight: 500;\n    color: ", ";\n    ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["\n  ", ";\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Section = styled__default['default'](core.Grid).attrs(function (_ref) {
  var md = _ref.md,
      xs = _ref.xs;
  return {
    item: true,
    md: md || 3,
    xs: xs || 6
  };
})(_templateObject$7(), function (_ref2) {
  var align = _ref2.align;
  return align && "text-align: " + align;
});
var Link = styled__default['default'](core.Link).attrs(function () {
  return {
    underline: "none"
  };
})(_templateObject2(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.gray.regular;
}, function (_ref4) {
  var size = _ref4.size;
  return size && "font-size: " + size + "px";
});
var ItemContent = function ItemContent(_ref5) {
  var _ref5$item = _ref5.item,
      badge = _ref5$item.badge,
      badgeColor = _ref5$item.badgeColor,
      icon = _ref5$item.icon,
      iconSize = _ref5$item.iconSize,
      link = _ref5$item.link,
      linkSize = _ref5$item.linkSize,
      linkText = _ref5$item.linkText,
      mainText = _ref5$item.mainText,
      mainTextSize = _ref5$item.mainTextSize,
      skip = _ref5$item.skip,
      text = _ref5$item.text,
      textSize = _ref5$item.textSize,
      item = _objectWithoutPropertiesLoose(_ref5$item, ["badge", "badgeColor", "icon", "iconSize", "link", "linkSize", "linkText", "mainText", "mainTextSize", "skip", "text", "textSize"]);

  return /*#__PURE__*/React__default['default'].createElement(Section, item, skip && "", icon && /*#__PURE__*/React__default['default'].createElement(Icon, {
    dInline: true,
    color: "secondary",
    icon: icon,
    size: iconSize,
    mr: 2
  }), mainText && /*#__PURE__*/React__default['default'].createElement(Text, {
    content: mainText,
    dInline: true,
    fontWeight: "bold"
  }), text && /*#__PURE__*/React__default['default'].createElement(Text, {
    color: "textSecondary",
    dInline: true,
    size: "sm"
  }, text), link && /*#__PURE__*/React__default['default'].createElement(Link, {
    href: link,
    size: linkSize
  }, linkText), badge && /*#__PURE__*/React__default['default'].createElement(TinyBadge, {
    color: badgeColor,
    label: badge
  }));
};
ItemContent.propTypes = {
  item: PropTypes__default['default'].shape({
    badge: PropTypes__default['default'].string,
    badgeColor: PropTypes__default['default'].string,
    icon: PropTypes__default['default'].shape({}),
    iconSize: PropTypes__default['default'].number,
    link: PropTypes__default['default'].string,
    linkSize: PropTypes__default['default'].number,
    linkText: PropTypes__default['default'].string,
    mainText: PropTypes__default['default'].string,
    mainTextSize: PropTypes__default['default'].number,
    skip: PropTypes__default['default'].bool,
    text: PropTypes__default['default'].string,
    textSize: PropTypes__default['default'].number
  }).isRequired
};

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: ", ";\n  padding: ", ";\n  justify-content: ", ";\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n  ", "\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: ", "px;\n  border-radius: 8px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  margin-bottom: ", ";\n  background-color: transparent;\n  overflow: hidden;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledLineItem = styled__default['default'].div(_templateObject$8(), function (_ref) {
  var showItemAction = _ref.showItemAction;
  return showItemAction ? 130 : 110;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.gray.semiLight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(2);
});
var Content = styled__default['default'](Flex).attrs(function () {
  return {
    container: true,
    justify: "space-between",
    spacing: 2
  };
})(_templateObject2$1(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(4);
}, function (_ref5) {
  var hoverable = _ref5.hoverable;
  return hoverable && styled.css(["cursor:pointer;&:hover{transition:all 0.1s ease-in-out;background-color:", ";}"], function (_ref6) {
    var theme = _ref6.theme;
    return theme.palette.gray.semiLight;
  });
});
var ActionButtons = styled__default['default'].div(_templateObject3(), function (_ref7) {
  var show = _ref7.show;
  return show ? "flex" : "none";
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing(4);
}, function (_ref9) {
  var justifyEnd = _ref9.justifyEnd;
  return justifyEnd ? "flex-end" : "space-between";
});
var AdvancedLineItem = function AdvancedLineItem(_ref10) {
  var actionButtons = _ref10.actionButtons,
      contentItems = _ref10.contentItems,
      dataCy = _ref10.dataCy,
      extraContent = _ref10.extraContent,
      itemId = _ref10.itemId,
      hoverable = _ref10.hoverable,
      secondaryActionButton = _ref10.secondaryActionButton,
      Wrapper = _ref10.Wrapper;
  var content = /*#__PURE__*/React__default['default'].createElement(Content, {
    hoverable: hoverable
  }, contentItems.map(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement(ItemContent, {
      key: "item-" + itemId + "-" + idx,
      item: item
    });
  }));
  return /*#__PURE__*/React__default['default'].createElement(StyledLineItem, {
    "data-cy": dataCy,
    showItemAction: actionButtons.length > 0
  }, Wrapper ? /*#__PURE__*/React__default['default'].createElement(Wrapper, null, content) : content, /*#__PURE__*/React__default['default'].createElement(ActionButtons, {
    show: actionButtons.length || secondaryActionButton,
    justifyEnd: !actionButtons.length
  }, /*#__PURE__*/React__default['default'].createElement("div", null, actionButtons.filter(function (_ref11) {
    var _ref11$show = _ref11.show,
        show = _ref11$show === void 0 ? [true] : _ref11$show;
    return show.some(function (b) {
      return b;
    });
  }).map(function (button, idx) {
    return /*#__PURE__*/React__default['default'].createElement(ItemActionButton, {
      key: "item-" + itemId + "-" + idx,
      button: button
    });
  })), secondaryActionButton && /*#__PURE__*/React__default['default'].createElement(TextButton, _extends({
    content: secondaryActionButton.content,
    size: "sm"
  }, secondaryActionButton))), extraContent);
};
AdvancedLineItem.propTypes = {
  actionButtons: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({})),
  contentItems: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({})).isRequired,
  dataCy: PropTypes__default['default'].string,
  extraContent: PropTypes__default['default'].node,
  itemId: PropTypes__default['default'].number.isRequired,
  hoverable: PropTypes__default['default'].bool,
  secondaryActionButton: PropTypes__default['default'].shape({
    icon: PropTypes__default['default'].node,
    text: PropTypes__default['default'].node
  })
};
AdvancedLineItem.defaultProps = {
  actionButtons: [],
  dataCy: "lineItem",
  extraContent: null,
  link: null,
  secondaryActionButton: null
};

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n    ", ";\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  width: 40px;\n  height: 40px;\n  background-color: transparent;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  box-sizing: border-box;\n  position: relative;\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  box-sizing: border-box;\n  position: relative;\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var Rounded = styled__default['default'].div(_templateObject$9(), function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return styled.css(["border:solid 2px ", ";background-color:", ";"], theme.palette.gray.regular, theme.palette[color].light);
}, function (_ref2) {
  var onClick = _ref2.onClick;
  return onClick && styled.css(["cursor:pointer;transition:all 0.1s ease-in-out;:hover{opacity:0.7;}"]);
}, function (theme) {
  return COLOR(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var Squared = styled__default['default'].div(_templateObject2$2(), function (_ref3) {
  var color = _ref3.color,
      theme = _ref3.theme;
  return styled.css(["border:solid 1px ", ";"], theme.palette[color].light);
}, function (_ref4) {
  var onClick = _ref4.onClick;
  return onClick && styled.css(["cursor:pointer;transition:all 0.1s ease-in-out;:hover{opacity:0.7;}"]);
}, function (theme) {
  return COLOR(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var StyledIcon = styled__default['default'](function (_ref5) {
  var icon = _ref5.icon,
      prefix = _ref5.prefix,
      size = _ref5.size,
      props = _objectWithoutPropertiesLoose(_ref5, ["icon", "prefix", "size"]);

  return /*#__PURE__*/React__default['default'].createElement(reactFontawesome.FontAwesomeIcon, _extends({
    icon: [prefix, icon]
  }, props));
})(_templateObject3$1(), function (_ref6) {
  var size = _ref6.size;
  return KIT_ICON_SIZES[size];
}, function (_ref7) {
  var color = _ref7.color,
      theme = _ref7.theme;
  if (color === "input") return "color: " + theme.palette.gray.regular + ";";
  return "color: " + theme.palette[color].main + ";";
}, function (_ref8) {
  var onClick = _ref8.onClick;
  return onClick && styled.css(["cursor:pointer;transition:all 0.1s ease-in-out;:hover{opacity:0.7;}"]);
}, function (_ref9) {
  var disabled = _ref9.disabled;
  return disabled && styled.css(["cursor:not-allowed;pointer-events:none;opacity:0.3;"]);
}, function (_ref10) {
  var simple = _ref10.simple;
  return simple && styled.css(["", " ", " ", ""], function (theme) {
    return COLOR(theme);
  }, function (theme) {
    return DISPLAY(theme);
  }, function (theme) {
    return SPACER(theme);
  });
});
var Icon = function Icon(_ref11) {
  var className = _ref11.className,
      color = _ref11.color,
      onClick = _ref11.onClick,
      rounded = _ref11.rounded,
      squared = _ref11.squared,
      prefix = _ref11.prefix,
      props = _objectWithoutPropertiesLoose(_ref11, ["className", "color", "onClick", "rounded", "squared", "prefix"]);

  var theme = styled.useTheme();

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
  return Wrapper ? /*#__PURE__*/React__default['default'].createElement(Wrapper, _extends({
    className: className,
    color: color,
    onClick: onClick
  }, props), /*#__PURE__*/React__default['default'].createElement(StyledIcon, defaultProps)) : /*#__PURE__*/React__default['default'].createElement(StyledIcon, _extends({
    className: className,
    onClick: onClick
  }, defaultProps));
};
Icon.propTypes = IconPropTypes;
Icon.defaultProps = IconDefaultProps;

var AlertPropTypes = _extends({
  content: PropTypes__default['default'].node,
  children: PropTypes__default['default'].node,
  color: PropTypes__default['default'].oneOf(["info", "danger", "warning"]),
  rounded: PropTypes__default['default'].bool
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var AlertDefaultProps = {
  content: null,
  children: null,
  color: "info",
  rounded: true
};

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  background-color: ", ";\n  border: 2px solid ", ";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: grid;\n  place-items: center;\n\n  svg {\n    color: ", ";\n    font-size: 12px !important;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  background-color: ", ";\n  border: 1px solid ", ";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: grid;\n  place-items: center;\n\n  svg {\n    color: ", ";\n    font-size: 12px !important;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["\nmargin-right:8px;\nposition: relative;\ndisplay: inline-block;\n\nimg {\n  width: 40px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: 20px;\n  bord\n}\n  "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  button {\n    background-color: white !important;\n  }\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  box-sizing: border-box;\n  min-height: 40px;\n  padding: 8px;\n  font-size: 14px;\n  transition: all 100ms ease-in-out;\n  display: flex;\n  align-items: center;\n  ", "\n  background-color: ", ";\n  color: ", ";\n  svg {\n    color: ", ";\n  }\n\n  ", "\n  ", "\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var StyledMessage = styled__default['default'].div(_templateObject$a(), function (_ref) {
  var rounded = _ref.rounded;
  return rounded && "border-radius: 8px;";
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
var AlertContainer = styled__default['default'].div(_templateObject2$3());
var Avatar = styled__default['default'].div(_templateObject3$2());
var AcceptedStatus = styled__default['default'].div(_templateObject4(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.success.main;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.common.white;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.text.primary;
});
var RejectedStatus = styled__default['default'].div(_templateObject5(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.error.light;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.palette.common.white;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.palette.text.primary;
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

    case "missingApproval":
      return {
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.warning.main,
        iconColor: theme.palette.warning.main
      };

    case "approvedCollab":
      return {
        backgroundColor: theme.palette.success.main
      };

    case "rejectedCollab":
      return {
        backgroundColor: theme.palette.error.light
      };

    default:
      return {
        backgroundColor: theme.palette.gray.semiLight,
        color: theme.palette.text.primary,
        iconColor: theme.palette.primary.main
      };
  }
};

var Alert = function Alert(_ref11) {
  var content = _ref11.content,
      cocreator = _ref11.cocreator,
      children = _ref11.children,
      color = _ref11.color,
      props = _objectWithoutPropertiesLoose(_ref11, ["content", "cocreator", "children", "color"]);

  var theme = styled.useTheme();
  var colors = getColors(color, theme);
  return /*#__PURE__*/React__default['default'].createElement(StyledMessage, _extends({
    colors: colors
  }, props), content && /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: "info-circle",
    mr: 2
  }), content || children, (cocreator == null ? void 0 : cocreator.type) === "missingApproval" && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: "info-circle",
    mr: 2
  }), /*#__PURE__*/React__default['default'].createElement(Flex, null, /*#__PURE__*/React__default['default'].createElement(Text, {
    fontSize: "sm",
    fontWeight: "bold"
  }, cocreator == null ? void 0 : cocreator.title), /*#__PURE__*/React__default['default'].createElement(Text, {
    fontSize: "sm"
  }, cocreator == null ? void 0 : cocreator.description))), (cocreator == null ? void 0 : cocreator.type) === "approvedCollab" && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Avatar, null, /*#__PURE__*/React__default['default'].createElement(Image, {
    src: cocreator == null ? void 0 : cocreator.avatar
  }), /*#__PURE__*/React__default['default'].createElement(AcceptedStatus, null, /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: "check",
    size: "sm"
  }))), /*#__PURE__*/React__default['default'].createElement(AlertContainer, null, /*#__PURE__*/React__default['default'].createElement(Text, {
    fontSize: "sm",
    fontWeight: "bold"
  }, cocreator == null ? void 0 : cocreator.title, ", approved state ", cocreator == null ? void 0 : cocreator.date))), (cocreator == null ? void 0 : cocreator.type) === "rejectedCollab" && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Avatar, null, /*#__PURE__*/React__default['default'].createElement(Image, {
    src: cocreator == null ? void 0 : cocreator.avatar
  }), /*#__PURE__*/React__default['default'].createElement(RejectedStatus, null, /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: "times",
    size: "sm"
  }))), /*#__PURE__*/React__default['default'].createElement(AlertContainer, null, /*#__PURE__*/React__default['default'].createElement(Text, {
    fontSize: "sm",
    fontWeight: "bold"
  }, cocreator == null ? void 0 : cocreator.title, ", rejected state ", cocreator == null ? void 0 : cocreator.date))));
};
Alert.propTypes = AlertPropTypes;
Alert.defaultProps = AlertDefaultProps;

var AppContainerPropTypes = {
  appConfig: PropTypes__default['default'].shape({}),
  children: PropTypes__default['default'].node.isRequired,
  icons: PropTypes__default['default'].object,
  pageLoading: PropTypes__default['default'].bool,
  theme: PropTypes__default['default'].object.isRequired
};

var AppContainer = function AppContainer(_ref) {
  var appConfig = _ref.appConfig,
      children = _ref.children,
      icons = _ref.icons,
      pageLoading = _ref.pageLoading,
      pageProgressBar = _ref.pageProgressBar,
      pageProgressBarListener = _ref.pageProgressBarListener,
      theme = _ref.theme;
  if (icons) fontawesomeSvgCore.library.add(icons);
  return /*#__PURE__*/React__default['default'].createElement(AppContextProvider, {
    config: appConfig
  }, /*#__PURE__*/React__default['default'].createElement(styles.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default['default'].createElement(notistack.SnackbarProvider, {
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    content: function content(key, options) {
      return /*#__PURE__*/React__default['default'].createElement(Snackbar, _extends({
        id: key
      }, options));
    },
    maxSnack: 3
  }, /*#__PURE__*/React__default['default'].createElement(GlobalStyle, null), /*#__PURE__*/React__default['default'].createElement(CssBaseline__default['default'], null), pageProgressBar && /*#__PURE__*/React__default['default'].createElement(PageProgressBar, {
    listener: pageProgressBarListener
  }), pageLoading ? /*#__PURE__*/React__default['default'].createElement(PageLoading, {
    fullScreen: true
  }) : children))));
};
AppContainer.propTypes = AppContainerPropTypes;

var ChipBadgePropTypes = _extends({
  color: PropTypes__default['default'].oneOf(THEME_COLORS),
  label: PropTypes__default['default'].string,
  icon: PropTypes__default['default'].string.isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ChipBadgeDefaultProps = {
  color: "primary"
};

var HeadingBasePropTypes = _extends({
  align: PropTypes__default['default'].oneOf(["inherit", "left", "center", "right", "justify"]),
  children: PropTypes__default['default'].node,
  content: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(["initial", "inherit", "primary", "secondary", "textPrimary", "textSecondary", "error"]),
  display: PropTypes__default['default'].oneOf(["initial", "block", "inline"]),
  gutterBottom: PropTypes__default['default'].bool,
  noWrap: PropTypes__default['default'].bool
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);

function _templateObject$b() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var StyledHeading = styled__default['default'](Typography__default['default'])(_templateObject$b(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var HeadingBase = function HeadingBase(_ref) {
  var content = _ref.content,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["content", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledHeading, props, content || children);
};
HeadingBase.propTypes = HeadingBasePropTypes;

var H1 = function H1(props) {
  return /*#__PURE__*/React__default['default'].createElement(HeadingBase, _extends({
    variant: "h1"
  }, props));
};
H1.propTypes = HeadingBasePropTypes;

var H2 = function H2(props) {
  return /*#__PURE__*/React__default['default'].createElement(HeadingBase, _extends({
    variant: "h2"
  }, props));
};
H2.propTypes = HeadingBasePropTypes;

var H3 = function H3(props) {
  return /*#__PURE__*/React__default['default'].createElement(HeadingBase, _extends({
    variant: "h3"
  }, props));
};
H3.propTypes = HeadingBasePropTypes;

var H4 = function H4(props) {
  return /*#__PURE__*/React__default['default'].createElement(HeadingBase, _extends({
    variant: "h4"
  }, props));
};
H4.propTypes = HeadingBasePropTypes;

var H5 = function H5(props) {
  return /*#__PURE__*/React__default['default'].createElement(HeadingBase, _extends({
    variant: "h5"
  }, props));
};
H5.propTypes = HeadingBasePropTypes;

var H6 = function H6(props) {
  return /*#__PURE__*/React__default['default'].createElement(HeadingBase, _extends({
    variant: "h6"
  }, props));
};
H6.propTypes = HeadingBasePropTypes;

var TextBasePropTypes = _extends({
  align: PropTypes__default['default'].oneOf(["inherit", "left", "center", "right", "justify"]),
  children: PropTypes__default['default'].node,
  content: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(["initial", "inherit", "primary", "secondary", "textPrimary", "textSecondary", "error"]),
  display: PropTypes__default['default'].oneOf(["initial", "block", "inline"]),
  fontStyle: PropTypes__default['default'].oneOf(["normal", "italic"]),
  fontWeight: PropTypes__default['default'].oneOf(["light", "regular", "bold"]),
  fontSize: PropTypes__default['default'].oneOf(["sm", "md", "lg"]),
  gutterBottom: PropTypes__default['default'].bool,
  noWrap: PropTypes__default['default'].bool
}, COLOR_PROP_TYPES, DISPLAY_PROP_TYPES, SPACER_PROP_TYPES);
var TextBaseDefaultProps = {
  fontStyle: "normal",
  fontWeight: "regular",
  fontSize: "md"
};

function _templateObject$c() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    ", "\n\n    ", "\n\n  font-style: ", ";\n\n    ", "\n    ", "\n    ", "\n  }\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var StyledText = styled__default['default'](Typography__default['default'])(_templateObject$c(), function (_ref) {
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
  return COLOR(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var TextBase = function TextBase(_ref4) {
  var content = _ref4.content,
      children = _ref4.children,
      props = _objectWithoutPropertiesLoose(_ref4, ["content", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledText, props, content || children);
};
TextBase.propTypes = TextBasePropTypes;
TextBase.defaultProps = TextBaseDefaultProps;

function _templateObject$d() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    margin-bottom: ", ";\n  }\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var StyledParagraph = styled__default['default'](TextBase)(_templateObject$d(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var Paragraph = function Paragraph(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledParagraph, _extends({
    variant: "body1",
    paragraph: true
  }, props));
};
Paragraph.propTypes = TextBasePropTypes;

var Text = function Text(props) {
  return /*#__PURE__*/React__default['default'].createElement(TextBase, _extends({
    component: "div",
    variant: "body2"
  }, props));
};
Text.propTypes = TextBasePropTypes;

function _templateObject2$4() {
  var data = _taggedTemplateLiteralLoose(["\n  padding-left: ", ";\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 22px;\n  min-width: 32px;\n  min-height: 32px;\n  width: max-content;\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var StyledChip = styled__default['default'].div(_templateObject$e(), function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return styled.css(["padding:", ";background-color:", ";color:", ";"], theme.spacing(2), theme.palette[color].light, theme.palette[color].main);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledLabel = styled__default['default'](Text).attrs(function () {
  return {
    fontWeight: "bold"
  };
})(_templateObject2$4(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2);
});
var ChipBadge = function ChipBadge(_ref3) {
  var color = _ref3.color,
      icon = _ref3.icon,
      label = _ref3.label,
      props = _objectWithoutPropertiesLoose(_ref3, ["color", "icon", "label"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledChip, _extends({
    color: color
  }, props), /*#__PURE__*/React__default['default'].createElement(Icon, {
    color: color,
    icon: icon
  }), label && /*#__PURE__*/React__default['default'].createElement(StyledLabel, null, label));
};
ChipBadge.propTypes = ChipBadgePropTypes;
ChipBadge.defaultProps = ChipBadgeDefaultProps;

var ChipBadgePropTypes$1 = _extends({
  color: PropTypes__default['default'].oneOf(THEME_COLORS),
  label: PropTypes__default['default'].string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ChipBadgeDefaultProps$1 = {
  color: "secondary"
};

function _templateObject$f() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  height: 16px;\n  width: max-content;\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var StyledBadge = styled__default['default'].div(_templateObject$f(), function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return styled.css(["padding:", ";border:1px solid ", ";color:", ";"], theme.spacing(0, 2), theme.palette[color].light, theme.palette[color].main);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var TinyBadge = function TinyBadge(_ref2) {
  var color = _ref2.color,
      label = _ref2.label,
      props = _objectWithoutPropertiesLoose(_ref2, ["color", "label"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledBadge, _extends({
    color: color
  }, props), /*#__PURE__*/React__default['default'].createElement(Text, {
    fontWeight: "bold",
    fontSize: "sm"
  }, label));
};
TinyBadge.propTypes = ChipBadgePropTypes$1;
TinyBadge.defaultProps = ChipBadgeDefaultProps$1;

var BoxBasePropTypes = _extends({
  shadow: PropTypes__default['default'].oneOf(["none", "normal", "long"])
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var BoxBaseDefaultProps = {
  shadow: "normal"
};

function _templateObject$g() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  ", "\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 16px;\n  position: relative;\n  overflow: hidden;\n\n  box-shadow: ", ";\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var StyledBox = styled__default['default'].div(_templateObject$g(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var minHeight = _ref2.minHeight;
  return minHeight && "min-height: " + minHeight + "px;";
}, function (_ref3) {
  var shadow = _ref3.shadow;
  if (shadow === "long") return "0px 16px 56px rgba(41, 40, 57, 0.16)";
  if (shadow === "normal") return "0px 8px 32px rgba(41, 40, 57, 0.08)";
  return "none";
}, function (_ref4) {
  var transparentSm = _ref4.transparentSm,
      theme = _ref4.theme;
  return transparentSm && styled.css(["", "{box-shadow:none;background-color:transparent;border-radius:0;}"], theme.breakpoints.down("sm"));
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var BoxBase = function BoxBase(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledBox, props);
};
BoxBase.propTypes = BoxBasePropTypes;
BoxBase.defaultProps = BoxBaseDefaultProps;

function _templateObject$h() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n\n  ", "\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var StyledBoxFooter = styled__default['default'](Flex).attrs(function () {
  return {
    container: true,
    alignItems: "center",
    justify: "space-between"
  };
})(_templateObject$h(), function (_ref) {
  var contentPadding = _ref.contentPadding,
      padding = _ref.padding,
      theme = _ref.theme;
  return styled.css(["width:100%;box-sizing:border-box;background-color:", ";padding:", ";border-top:1px solid ", ";", "{padding:", ";}"], theme.palette.common.white, theme.spacing(4, padding, 4, contentPadding ? 20 : padding), theme.palette.gray.semiLight, theme.breakpoints.down("sm"), theme.spacing(padding, padding, 0, padding));
}, function (_ref2) {
  var padding = _ref2.padding,
      transparentSm = _ref2.transparentSm,
      theme = _ref2.theme;
  return transparentSm && styled.css(["", "{background-color:transparent;border-top:none;padding:", ";}"], theme.breakpoints.down("sm"), theme.spacing(padding, 0));
});
var BoxFooter = function BoxFooter(_ref3) {
  var action = _ref3.action,
      actionDisabled = _ref3.actionDisabled,
      actionLoading = _ref3.actionLoading,
      actionSize = _ref3.actionSize,
      actionTitle = _ref3.actionTitle,
      actionType = _ref3.actionType,
      renderAction = _ref3.renderAction,
      renderTitle = _ref3.renderTitle,
      props = _objectWithoutPropertiesLoose(_ref3, ["action", "actionDisabled", "actionLoading", "actionSize", "actionTitle", "actionType", "renderAction", "renderTitle"]);

  if (!renderTitle() && !renderAction() && !actionTitle) return null;
  return /*#__PURE__*/React__default['default'].createElement(StyledBoxFooter, props, /*#__PURE__*/React__default['default'].createElement(Flex, {
    item: true
  }, renderTitle()), /*#__PURE__*/React__default['default'].createElement(Flex, {
    item: true
  }, renderAction() || /*#__PURE__*/React__default['default'].createElement(Button, {
    content: actionTitle,
    disabled: actionDisabled,
    loading: actionLoading,
    onClick: action,
    size: actionSize,
    type: actionType
  })));
};
BoxFooter.propTypes = {
  action: PropTypes__default['default'].func,
  actionDisabled: PropTypes__default['default'].bool,
  actionLoading: PropTypes__default['default'].bool,
  actionSize: PropTypes__default['default'].string,
  actionTitle: PropTypes__default['default'].string.isRequired,
  actionType: PropTypes__default['default'].string,
  padding: PropTypes__default['default'].number.isRequired,
  renderAction: PropTypes__default['default'].func,
  renderTitle: PropTypes__default['default'].func
};
BoxFooter.defaultProps = {
  action: function action() {},
  actionDisabled: false,
  actionLoading: false,
  actionSize: "md",
  actionType: "submit",
  renderAction: function renderAction() {},
  renderTitle: function renderTitle() {}
};

/* eslint-disable global-require */
var useMediaQuery = MuiUseMediaQuery__default['default'];

function _templateObject3$3() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n\n  ", "\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  box-sizing: border-box;\n  background-color: ", ";\n  padding: ", ";\n\n  ", "\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$i() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n\n  ", "\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled__default['default'].div(_templateObject$i(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.gray.semiLight;
}, function (_ref3) {
  var transparentSm = _ref3.transparentSm,
      theme = _ref3.theme;
  return transparentSm && styled.css(["", "{background-color:transparent;border-bottom:none;}"], theme.breakpoints.down("sm"));
});
var StyledBoxHeader = styled__default['default'](Flex).attrs(function () {
  return {
    container: true,
    justify: "space-between",
    wrap: "nowrap"
  };
})(_templateObject2$5(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.common.white;
}, function (_ref5) {
  var padding = _ref5.padding,
      theme = _ref5.theme;
  return theme.spacing(padding);
}, function (_ref6) {
  var transparentSm = _ref6.transparentSm,
      theme = _ref6.theme;
  return transparentSm && styled.css(["", "{background-color:transparent;padding:", ";}"], theme.breakpoints.down("sm"), theme.spacing(0));
});
var Content$1 = styled__default['default'].div(_templateObject3$3(), function (_ref7) {
  var contentPadding = _ref7.contentPadding,
      padding = _ref7.padding,
      theme = _ref7.theme;
  return styled.css(["padding:", ";", "{padding:", ";}"], theme.spacing(0, contentPadding ? 20 : padding), theme.breakpoints.down("sm"), theme.spacing(0, padding));
}, function (_ref8) {
  var transparentSm = _ref8.transparentSm,
      theme = _ref8.theme;
  return transparentSm && styled.css(["", "{padding:", ";}"], theme.breakpoints.down("sm"), theme.spacing(8, 0, 0, 0));
});
var BoxHeader = function BoxHeader(_ref9) {
  var action = _ref9.action,
      actionIcon = _ref9.actionIcon,
      actionIconProps = _ref9.actionIconProps,
      actionIconSize = _ref9.actionIconSize,
      renderAction = _ref9.renderAction,
      renderTitle = _ref9.renderTitle,
      metaTitle = _ref9.metaTitle,
      metaTitleColor = _ref9.metaTitleColor,
      subTitle = _ref9.subTitle,
      subTitleColor = _ref9.subTitleColor,
      tabs = _ref9.tabs,
      tabsProps = _ref9.tabsProps,
      title = _ref9.title,
      titleIcon = _ref9.titleIcon,
      titleIconHiddenSm = _ref9.titleIconHiddenSm,
      titleIconProps = _ref9.titleIconProps,
      titleSize = _ref9.titleSize,
      transparentSm = _ref9.transparentSm,
      props = _objectWithoutPropertiesLoose(_ref9, ["action", "actionIcon", "actionIconProps", "actionIconSize", "renderAction", "renderTitle", "metaTitle", "metaTitleColor", "subTitle", "subTitleColor", "tabs", "tabsProps", "title", "titleIcon", "titleIconHiddenSm", "titleIconProps", "titleSize", "transparentSm"]);

  var isMobile = useMediaQuery(function (theme) {
    return theme.breakpoints.down("sm");
  });
  var showTitleIcon = isMobile ? !titleIconHiddenSm : !!titleIcon;
  if (!renderTitle() && !renderAction() && !title) return null;
  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
    transparentSm: transparentSm
  }, /*#__PURE__*/React__default['default'].createElement(StyledBoxHeader, _extends({
    transparentSm: transparentSm
  }, props), /*#__PURE__*/React__default['default'].createElement(Flex, {
    item: true
  }, renderTitle() || /*#__PURE__*/React__default['default'].createElement(Flex, {
    container: true
  }, showTitleIcon && /*#__PURE__*/React__default['default'].createElement(Icon, _extends({
    colorBlack: true,
    icon: titleIcon,
    mr: 2,
    size: "lg"
  }, titleIconProps)), /*#__PURE__*/React__default['default'].createElement("div", null, metaTitle && /*#__PURE__*/React__default['default'].createElement(Text, {
    content: metaTitle,
    color: metaTitleColor || "text",
    dBlock: true,
    gutterBottom: true,
    fontWeight: "normal",
    fontSize: "sm"
  }), titleSize === "sm" ? /*#__PURE__*/React__default['default'].createElement(H4, {
    content: title
  }) : /*#__PURE__*/React__default['default'].createElement(H3, {
    content: title
  }), subTitle && /*#__PURE__*/React__default['default'].createElement(Text, {
    content: subTitle,
    color: subTitleColor,
    dBlock: true,
    fontStyle: "italic",
    fontSize: "sm"
  })))), /*#__PURE__*/React__default['default'].createElement(Flex, {
    item: true
  }, renderAction() || actionIcon && /*#__PURE__*/React__default['default'].createElement(Icon, _extends({
    colorGrayMedium: true,
    icon: actionIcon,
    size: actionIconSize,
    onClick: action
  }, actionIconProps)))), tabs.length > 0 && /*#__PURE__*/React__default['default'].createElement(Content$1, _extends({
    transparentSm: transparentSm
  }, props), /*#__PURE__*/React__default['default'].createElement(Tab, _extends({
    tabs: tabs,
    mb: 0
  }, tabsProps))));
};
BoxHeader.propTypes = {
  action: PropTypes__default['default'].func,
  actionIcon: PropTypes__default['default'].string,
  actionIconProps: PropTypes__default['default'].shape({}),
  actionIconSize: PropTypes__default['default'].string,
  metaTitle: PropTypes__default['default'].string,
  metaTitleColor: PropTypes__default['default'].string,
  padding: PropTypes__default['default'].number.isRequired,
  renderAction: PropTypes__default['default'].func,
  renderTitle: PropTypes__default['default'].func,
  subTitle: PropTypes__default['default'].string,
  subTitleColor: PropTypes__default['default'].string,
  tabs: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({})),
  tabsProps: PropTypes__default['default'].shape({}),
  title: PropTypes__default['default'].string.isRequired,
  titleIcon: PropTypes__default['default'].string,
  titleIconHiddenSm: PropTypes__default['default'].bool,
  titleIconProps: PropTypes__default['default'].shape({}),
  titleSize: PropTypes__default['default'].string,
  transparentSm: PropTypes__default['default'].bool.isRequired
};
BoxHeader.defaultProps = {
  action: function action() {},
  actionIcon: "",
  actionIconProps: {},
  actionIconSize: "lg",
  metaTitle: "",
  metaTitleColor: "",
  renderAction: function renderAction() {},
  renderTitle: function renderTitle() {},
  subTitle: "",
  subTitleColor: "textSecondary",
  tabs: [],
  tabsProps: {},
  titleIcon: "",
  titleIconHiddenSm: false,
  titleIconProps: {},
  titleSize: "md"
};

var BoxPropTypes = _extends({
  children: PropTypes__default['default'].node.isRequired,
  footerAction: PropTypes__default['default'].func,
  footerActionLoading: PropTypes__default['default'].bool,
  footerActionDisabled: PropTypes__default['default'].bool,
  footerActionSize: PropTypes__default['default'].string,
  footerActionTitle: PropTypes__default['default'].string,
  footerActionType: PropTypes__default['default'].string,
  footerRenderAction: PropTypes__default['default'].func,
  footerRenderTitle: PropTypes__default['default'].func,
  headerAction: PropTypes__default['default'].func,
  headerActionIcon: PropTypes__default['default'].string,
  headerActionIconProps: PropTypes__default['default'].shape({}),
  headerActionIconSize: PropTypes__default['default'].string,
  headerMetaTitle: PropTypes__default['default'].string,
  headerMetaTitleColor: PropTypes__default['default'].string,
  headerRenderAction: PropTypes__default['default'].func,
  headerRenderTitle: PropTypes__default['default'].func,
  headerSubTitle: PropTypes__default['default'].string,
  headerSubTitleColor: PropTypes__default['default'].string,
  headerTitle: PropTypes__default['default'].string,
  headerTitleIcon: PropTypes__default['default'].string,
  headerTitleIconHiddenSm: PropTypes__default['default'].string,
  headerTitleIconProps: PropTypes__default['default'].shape({}),
  headerTitleSize: PropTypes__default['default'].string,
  loading: PropTypes__default['default'].bool,
  loadingMessage: PropTypes__default['default'].string,
  loadingProps: PropTypes__default['default'].shape({}),
  padding: PropTypes__default['default'].number,
  tabs: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({})),
  tabsProps: PropTypes__default['default'].shape({}),
  transition: PropTypes__default['default'].bool,
  transparentSm: PropTypes__default['default'].bool
}, BoxBasePropTypes);
var BoxDefaultProps = _extends({
  loadingProps: {},
  padding: 6,
  cocreator: {},
  transition: false,
  transparentSm: false
}, BoxBaseDefaultProps);

function _templateObject$j() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n\n  ", "\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var BoxContent = styled__default['default'].div(_templateObject$j(), function (_ref) {
  var contentPadding = _ref.contentPadding,
      padding = _ref.padding,
      theme = _ref.theme;
  return styled.css(["padding:", ";", "{padding:", ";}"], theme.spacing(padding, padding, padding, contentPadding ? 20 : padding), theme.breakpoints.down("sm"), theme.spacing(padding));
}, function (_ref2) {
  var padding = _ref2.padding,
      transparentSm = _ref2.transparentSm,
      theme = _ref2.theme;
  return transparentSm && styled.css(["", "{padding:", ";}"], theme.breakpoints.down("sm"), theme.spacing(padding, 0));
});
var Box = function Box(_ref3) {
  var alert = _ref3.alert,
      alertColor = _ref3.alertColor,
      children = _ref3.children,
      cocreator = _ref3.cocreator,
      contentPadding = _ref3.contentPadding,
      footerAction = _ref3.footerAction,
      footerActionLoading = _ref3.footerActionLoading,
      footerActionDisabled = _ref3.footerActionDisabled,
      footerActionSize = _ref3.footerActionSize,
      footerActionTitle = _ref3.footerActionTitle,
      footerActionType = _ref3.footerActionType,
      footerRenderAction = _ref3.footerRenderAction,
      footerRenderTitle = _ref3.footerRenderTitle,
      headerAction = _ref3.headerAction,
      headerActionIcon = _ref3.headerActionIcon,
      headerActionIconProps = _ref3.headerActionIconProps,
      headerActionIconSize = _ref3.headerActionIconSize,
      headerMetaTitle = _ref3.headerMetaTitle,
      headerMetaTitleColor = _ref3.headerMetaTitleColor,
      headerRenderAction = _ref3.headerRenderAction,
      headerRenderTitle = _ref3.headerRenderTitle,
      headerSubTitle = _ref3.headerSubTitle,
      headerSubTitleColor = _ref3.headerSubTitleColor,
      headerTitle = _ref3.headerTitle,
      headerTitleIcon = _ref3.headerTitleIcon,
      headerTitleIconHiddenSm = _ref3.headerTitleIconHiddenSm,
      headerTitleIconProps = _ref3.headerTitleIconProps,
      headerTitleSize = _ref3.headerTitleSize,
      loading = _ref3.loading,
      loadingMessage = _ref3.loadingMessage,
      loadingProps = _ref3.loadingProps,
      padding = _ref3.padding,
      tabs = _ref3.tabs,
      tabsProps = _ref3.tabsProps,
      transition = _ref3.transition,
      transparentSm = _ref3.transparentSm,
      props = _objectWithoutPropertiesLoose(_ref3, ["alert", "alertColor", "children", "cocreator", "contentPadding", "footerAction", "footerActionLoading", "footerActionDisabled", "footerActionSize", "footerActionTitle", "footerActionType", "footerRenderAction", "footerRenderTitle", "headerAction", "headerActionIcon", "headerActionIconProps", "headerActionIconSize", "headerMetaTitle", "headerMetaTitleColor", "headerRenderAction", "headerRenderTitle", "headerSubTitle", "headerSubTitleColor", "headerTitle", "headerTitleIcon", "headerTitleIconHiddenSm", "headerTitleIconProps", "headerTitleSize", "loading", "loadingMessage", "loadingProps", "padding", "tabs", "tabsProps", "transition", "transparentSm"]);

  var isMobile = useMediaQuery(function (theme) {
    return theme.breakpoints.down("sm");
  });
  var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, Object.keys(cocreator).length > 0 && /*#__PURE__*/React__default['default'].createElement(Alert, {
    cocreator: cocreator,
    color: cocreator == null ? void 0 : cocreator.type,
    rounded: false,
    mt: isMobile && transparentSm ? 6 : 0,
    p: 3
  }), alert && /*#__PURE__*/React__default['default'].createElement(Alert, {
    content: alert,
    color: alertColor,
    rounded: isMobile && transparentSm,
    mt: isMobile && transparentSm ? 6 : 0
  }), /*#__PURE__*/React__default['default'].createElement(BoxContent, {
    padding: padding,
    contentPadding: contentPadding,
    transparentSm: transparentSm
  }, children), /*#__PURE__*/React__default['default'].createElement(BoxFooter, {
    action: footerAction,
    actionDisabled: footerActionDisabled,
    actionLoading: footerActionLoading,
    actionSize: footerActionSize,
    actionTitle: footerActionTitle,
    actionType: footerActionType,
    contentPadding: contentPadding,
    padding: padding,
    renderAction: footerRenderAction,
    renderTitle: footerRenderTitle,
    transparentSm: transparentSm
  }));
  return /*#__PURE__*/React__default['default'].createElement(BoxBase, _extends({
    transparentSm: transparentSm
  }, props), loading && /*#__PURE__*/React__default['default'].createElement(PageLoading, _extends({
    message: loadingMessage,
    transparent: true,
    fullScreen: isMobile && transparentSm
  }, loadingProps)), /*#__PURE__*/React__default['default'].createElement(BoxHeader, {
    action: headerAction,
    actionIcon: headerActionIcon,
    actionIconProps: headerActionIconProps,
    actionIconSize: headerActionIconSize,
    contentPadding: contentPadding,
    padding: padding,
    metaTitle: headerMetaTitle,
    metaTitleColor: headerMetaTitleColor,
    renderAction: headerRenderAction,
    renderTitle: headerRenderTitle,
    subTitle: headerSubTitle,
    subTitleColor: headerSubTitleColor,
    tabs: tabs,
    tabsProps: tabsProps,
    title: headerTitle,
    titleIcon: headerTitleIcon,
    titleIconHiddenSm: headerTitleIconHiddenSm,
    titleIconProps: headerTitleIconProps,
    titleSize: headerTitleSize,
    transparentSm: transparentSm
  }), transition ? /*#__PURE__*/React__default['default'].createElement(PageTransition, null, content) : content);
};
Box.propTypes = BoxPropTypes;
Box.defaultProps = BoxDefaultProps;

var CategoryItemPropTypes = {
  checked: PropTypes__default['default'].bool.isRequired,
  dataCy: PropTypes__default['default'].string,
  description: PropTypes__default['default'].string,
  iconName: PropTypes__default['default'].string,
  iconImage: PropTypes__default['default'].string,
  id: PropTypes__default['default'].number.isRequired,
  onChange: PropTypes__default['default'].func.isRequired,
  subCategory: PropTypes__default['default'].bool,
  name: PropTypes__default['default'].string.isRequired
};
var CategoryItemDefaultProps = {
  dataCy: "categoryItem",
  iconName: null,
  iconImage: null,
  description: "",
  subCategory: false
};

function _templateObject3$4() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 24px;\n  height: 24px;\n  border-bottom-right-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  svg {\n    color: #ffffff;\n  }\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 32px;\n  height: 32px;\n  background-color: ", ";\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$k() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  border-radius: 8px;\n  padding: ", "px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 130px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ", ";\n  text-align: center;\n  cursor: pointer;\n  overflow: hidden;\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  ", "\n"]);

  _templateObject$k = function _templateObject() {
    return data;
  };

  return data;
}
var StyledCategoryItem = styled__default['default'].div(_templateObject$k(), function (_ref) {
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
  return checked && styled.css(["border-color:", ";"], function (_ref5) {
    var theme = _ref5.theme;
    return theme.palette.primary.main;
  });
});
var StyledIcon$1 = styled__default['default'].img(_templateObject2$6(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.primary.main;
});
var CheckIcon = styled__default['default'].div(_templateObject3$4(), function (_ref7) {
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

  return /*#__PURE__*/React__default['default'].createElement(StyledCategoryItem, _extends({
    checked: checked,
    "data-cy": dataCy,
    onClick: function onClick() {
      return onChange(id);
    }
  }, props), checked && /*#__PURE__*/React__default['default'].createElement(CheckIcon, null, /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: "check",
    size: "sm"
  })), iconName && /*#__PURE__*/React__default['default'].createElement(Icon, {
    colorGrayMedium: true,
    icon: iconName,
    size: "lg"
  }), iconImage && /*#__PURE__*/React__default['default'].createElement(StyledIcon$1, {
    src: iconImage,
    alt: name
  }), /*#__PURE__*/React__default['default'].createElement(Text, {
    color: subCategory ? "textPrimary" : "primary",
    fontWeight: "bold",
    noWrap: true,
    py: 2
  }, name), /*#__PURE__*/React__default['default'].createElement(Text, {
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
  var theme = styled.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(RCL__default['default'], {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: theme.palette.gray.light,
    foregroundColor: theme.palette.gray.regular,
    style: {
      // border: `4px solid ${theme.palette.gray.light}`,
      backgroundColor: theme.palette.gray.light,
      borderRadius: 8
    }
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: WIDTH / 2 - ICON_SIZE / 2,
    y: ICON_TOP,
    rx: 4,
    ry: 4,
    width: ICON_SIZE,
    height: ICON_SIZE
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: WIDTH / 2 - TITLE_WIDTH / 2,
    y: TITLE_TOP,
    rx: 0,
    ry: 0,
    width: TITLE_WIDTH,
    height: TITLE_HEIGHT
  }), !subCategory && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("rect", {
    x: WIDTH / 2 - DESC_WIDTH / 2,
    y: DESC_TOP,
    rx: 0,
    ry: 0,
    width: DESC_WIDTH,
    height: DESC_HEIGHT
  }), /*#__PURE__*/React__default['default'].createElement("rect", {
    x: WIDTH / 2 - DESC2_WIDTH / 2,
    y: DESC2_TOP,
    rx: 0,
    ry: 0,
    width: DESC2_WIDTH,
    height: DESC2_HEIGHT
  })));
};
CategoryItemContentLoader.propTypes = {
  subCategory: PropTypes__default['default'].bool
};
CategoryItemContentLoader.defaultProps = {
  subCategory: false
};

var CartButtonPropTypes = {
  count: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string])
};
var CartButtonDefaultProps = {
  count: "0"
};

function _templateObject$l() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    background-color: ", ";\n    border-radius: 44px;\n    padding: ", ";\n  }\n"]);

  _templateObject$l = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton$4 = styled__default['default'](MuiButtonBase__default['default'])(_templateObject$l(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.semiLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2);
});
var CartButton = function CartButton(_ref3) {
  var count = _ref3.count,
      props = _objectWithoutPropertiesLoose(_ref3, ["count"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledButton$4, props, /*#__PURE__*/React__default['default'].createElement(Icon, {
    colorGrayMedium: true,
    icon: "shopping-cart"
  }), /*#__PURE__*/React__default['default'].createElement(Indicator, {
    content: count,
    ml: 1
  }));
};
CartButton.propTypes = CartButtonPropTypes;
CartButton.defaultProps = CartButtonDefaultProps;

var CollapsePropTypes = {
  isOpened: PropTypes__default['default'].bool
};

function _templateObject$m() {
  var data = _taggedTemplateLiteralLoose(["\n  .ReactCollapse--collapse {\n    transition: height 200ms ease-in-out;\n  }\n"]);

  _templateObject$m = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$1 = styled__default['default'].div(_templateObject$m());
var Collapse = function Collapse(props) {
  return /*#__PURE__*/React__default['default'].createElement(Wrapper$1, null, /*#__PURE__*/React__default['default'].createElement(reactCollapse.Collapse, props));
};
Collapse.propTypes = CollapsePropTypes;

var CollapseButton = function CollapseButton(_ref) {
  var isOpened = _ref.isOpened,
      props = _objectWithoutPropertiesLoose(_ref, ["isOpened"]);

  return /*#__PURE__*/React__default['default'].createElement(Icon, _extends({
    icon: isOpened ? "chevron-up" : "chevron-down"
  }, props));
};
CollapseButton.propTypes = {
  isOpened: PropTypes__default['default'].bool.isRequired
};

var ImagePropTypes = _extends({
  alt: PropTypes__default['default'].string.isRequired,
  className: PropTypes__default['default'].any,
  cover: PropTypes__default['default'].bool,
  fluid: PropTypes__default['default'].bool,
  height: PropTypes__default['default'].number,
  onClick: PropTypes__default['default'].func,
  rounded: PropTypes__default['default'].bool,
  roundedCircle: PropTypes__default['default'].bool,
  src: PropTypes__default['default'].string.isRequired,
  style: PropTypes__default['default'].object,
  thumbnail: PropTypes__default['default'].bool,
  width: PropTypes__default['default'].number
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ImageDefaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};

function _templateObject$n() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$n = function _templateObject() {
    return data;
  };

  return data;
}
var Image = function Image(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/React__default['default'].createElement(StyledImg, _extends({
    itemProp: "contentUrl"
  }, props));
};
var StyledImg = styled__default['default'].img(_templateObject$n(), function (_ref2) {
  var width = _ref2.width;
  return width && "width: " + width + ";";
}, function (_ref3) {
  var height = _ref3.height;
  return height && "height: " + height + ";";
}, function (_ref4) {
  var cover = _ref4.cover;
  return cover && styled.css(["height:100%;object-fit:cover;"]);
}, function (_ref5) {
  var onClick = _ref5.onClick;
  return onClick && styled.css(["transition:all 100ms ease-in-out;cursor:pointer;:hover{opacity:0.7;}"]);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
Image.propTypes = ImagePropTypes;
Image.defaultProps = ImageDefaultProps;

function _templateObject4$1() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  outline: 4px solid white;\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$o() {
  var data = _taggedTemplateLiteralLoose(["\n  overflow: hidden;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.03);\n  }\n"]);

  _templateObject$o = function _templateObject() {
    return data;
  };

  return data;
}
var Box$1 = styled__default['default'](BoxBase)(_templateObject$o());
var StyledItem = styled__default['default'](Flex).attrs(function () {
  return {
    item: true
  };
})(_templateObject2$7(), function (_ref) {
  var height = _ref.height;
  return height || 116;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.gray.regular;
});
var StyledImage = styled__default['default'](Image)(_templateObject3$5());
var Content$2 = styled__default['default'].div(_templateObject4$1(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(4);
});
var CollectionItem = function CollectionItem(_ref4) {
  var details = _ref4.details,
      largeImageUrl = _ref4.largeImageUrl,
      name = _ref4.name,
      smallImagesUrls = _ref4.smallImagesUrls,
      props = _objectWithoutPropertiesLoose(_ref4, ["details", "largeImageUrl", "name", "smallImagesUrls"]);

  return /*#__PURE__*/React__default['default'].createElement(Box$1, props, /*#__PURE__*/React__default['default'].createElement(Flex, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/React__default['default'].createElement(StyledItem, {
    height: 230,
    xs: 12
  }, /*#__PURE__*/React__default['default'].createElement(StyledImage, {
    height: 230,
    src: largeImageUrl
  })), /*#__PURE__*/React__default['default'].createElement(StyledItem, {
    xs: 4
  }, smallImagesUrls[0] && /*#__PURE__*/React__default['default'].createElement(StyledImage, {
    src: smallImagesUrls[0]
  })), /*#__PURE__*/React__default['default'].createElement(StyledItem, {
    xs: 4
  }, smallImagesUrls[1] && /*#__PURE__*/React__default['default'].createElement(StyledImage, {
    src: smallImagesUrls[1]
  })), /*#__PURE__*/React__default['default'].createElement(StyledItem, {
    xs: 4
  }, smallImagesUrls[2] && /*#__PURE__*/React__default['default'].createElement(StyledImage, {
    src: smallImagesUrls[2]
  }))), /*#__PURE__*/React__default['default'].createElement(Content$2, null, /*#__PURE__*/React__default['default'].createElement(H3, {
    content: name,
    mb: 4,
    noWrap: true
  }), /*#__PURE__*/React__default['default'].createElement(DetailsTable, {
    justifyBetween: true,
    rows: details
  })));
};
CollectionItem.propTypes = {
  details: PropTypes__default['default'].arrayOf(PropTypes__default['default'].string),
  largeImageUrl: PropTypes__default['default'].string.isRequired,
  name: PropTypes__default['default'].string.isRequired,
  smallImagesUrls: PropTypes__default['default'].arrayOf(PropTypes__default['default'].string)
};
CollectionItem.defaultProps = {
  details: [],
  smallImagesUrls: []
};

var AppContext = /*#__PURE__*/React.createContext();

var AppContextProvider = function AppContextProvider(_ref) {
  var config = _ref.config,
      props = _objectWithoutPropertiesLoose(_ref, ["config"]);

  return /*#__PURE__*/React__default['default'].createElement(AppContext.Provider, _extends({
    value: config
  }, props));
};
AppContextProvider.propTypes = {
  config: PropTypes__default['default'].shape({})
};
AppContextProvider.defaultProps = {
  config: {}
};

var useAppContext = function useAppContext() {
  return React.useContext(AppContext);
};

var DetailsTablePropTypes = _extends({
  expandButtonTitle: PropTypes__default['default'].string,
  expandButtonProps: PropTypes__default['default'].shape({}),
  justifyBetween: PropTypes__default['default'].bool,
  labelFontSize: PropTypes__default['default'].string,
  labelTextTransform: PropTypes__default['default'].string,
  labelWidth: PropTypes__default['default'].number,
  rows: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    columnSm: PropTypes__default['default'].bool,
    divider: PropTypes__default['default'].bool,
    dividerSize: PropTypes__default['default'].number,
    expandable: PropTypes__default['default'].bool,
    icon: PropTypes__default['default'].string,
    iconProps: PropTypes__default['default'].shape({}),
    label: PropTypes__default['default'].string,
    labelHint: PropTypes__default['default'].bool,
    labelHintIcon: PropTypes__default['default'].string,
    labelHintContent: PropTypes__default['default'].string,
    renderLabel: PropTypes__default['default'].func,
    value: PropTypes__default['default'].node
  })),
  size: PropTypes__default['default'].oneOf(["sm", "md"])
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var DetailsTableDefaultProps = {
  expandButtonTitle: "Expandable items",
  expandButtonProps: {},
  labelFontSize: "md",
  labelTextTransform: "initial",
  labelWidth: 140,
  size: "md"
};

function _templateObject5$1() {
  var data = _taggedTemplateLiteralLoose(["\n  background: ", ";\n  margin-left: ", ";\n  border-radius: 100%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    color: ", ";\n    font-size: 10px;\n  }\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    text-transform: ", ";\n  }\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 0 ", "px;\n  max-width: ", "px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  padding-right: ", ";\n\n  ", " {\n    flex: 0 0 100%;\n    max-width: 100%;\n    margin-bottom: ", ";\n  }\n"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  ", "\n  min-height: ", ";\n  margin-bottom: ", ";\n\n  ", " {\n    ", "\n    margin-bottom: ", ";\n    flex-wrap: wrap;\n    align-items: flex-start;\n  }\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$p() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$p = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$2 = styled__default['default'].div(_templateObject$p(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Row = styled__default['default'].div(_templateObject2$8(), function (_ref) {
  var justifyBetween = _ref.justifyBetween;
  return justifyBetween && "justify-content: space-between;";
}, function (_ref2) {
  var size = _ref2.size;
  return size === "md" ? "32px" : "16px";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(2);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakpoints.down("sm");
}, function (_ref5) {
  var columnSm = _ref5.columnSm;
  return columnSm && "flex-direction: column;";
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(6);
});
var LabelWrapper = styled__default['default'].div(_templateObject3$6(), function (_ref7) {
  var labelWidth = _ref7.labelWidth;
  return labelWidth;
}, function (_ref8) {
  var labelWidth = _ref8.labelWidth;
  return labelWidth;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing(6);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.breakpoints.down("sm");
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing(2);
});
var Label = styled__default['default'](Text).attrs(function () {
  return {
    color: "textSecondary"
  };
})(_templateObject4$2(), function (_ref12) {
  var textTransform = _ref12.textTransform;
  return textTransform;
});
var Hint = styled__default['default'].div(_templateObject5$1(), function (_ref13) {
  var theme = _ref13.theme;
  return theme.palette.gray.semiLight;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.spacing(2);
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.palette.gray.medium;
});
var DetailsTable = function DetailsTable(_ref16) {
  var expandButtonTitle = _ref16.expandButtonTitle,
      expandButtonProps = _ref16.expandButtonProps,
      labelTextTransform = _ref16.labelTextTransform,
      labelFontSize = _ref16.labelFontSize,
      labelWidth = _ref16.labelWidth,
      labelWidthSm = _ref16.labelWidthSm,
      justifyBetween = _ref16.justifyBetween,
      rows = _ref16.rows,
      size = _ref16.size,
      props = _objectWithoutPropertiesLoose(_ref16, ["expandButtonTitle", "expandButtonProps", "labelTextTransform", "labelFontSize", "labelWidth", "labelWidthSm", "justifyBetween", "rows", "size"]);

  var _useState = React.useState(false),
      expanded = _useState[0],
      setExpanded = _useState[1];

  var showExpandButton = rows == null ? void 0 : rows.some(function (row) {
    return row.expandable;
  });

  var renderRow = function renderRow(_ref17) {
    var columnSm = _ref17.columnSm,
        divider = _ref17.divider,
        _ref17$dividerSize = _ref17.dividerSize,
        dividerSize = _ref17$dividerSize === void 0 ? 6 : _ref17$dividerSize,
        icon = _ref17.icon,
        iconProps = _ref17.iconProps,
        label = _ref17.label,
        labelHint = _ref17.labelHint,
        _ref17$labelHintIcon = _ref17.labelHintIcon,
        labelHintIcon = _ref17$labelHintIcon === void 0 ? "question" : _ref17$labelHintIcon,
        labelHintContent = _ref17.labelHintContent,
        _ref17$renderLabel = _ref17.renderLabel,
        renderLabel = _ref17$renderLabel === void 0 ? function () {} : _ref17$renderLabel,
        value = _ref17.value;
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Row, {
      columnSm: columnSm,
      key: label + ":" + value,
      justifyBetween: justifyBetween,
      size: size
    }, /*#__PURE__*/React__default['default'].createElement(LabelWrapper, {
      labelWidth: labelWidth
    }, renderLabel() || /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, icon && /*#__PURE__*/React__default['default'].createElement(Icon, _extends({
      icon: icon,
      mr: 2,
      colorGrayRegular: true
    }, iconProps)), /*#__PURE__*/React__default['default'].createElement(Label, {
      textTransform: labelTextTransform,
      content: label,
      fontSize: labelFontSize
    }), labelHint && /*#__PURE__*/React__default['default'].createElement(Tooltip, {
      content: labelHintContent
    }, /*#__PURE__*/React__default['default'].createElement(Hint, null, /*#__PURE__*/React__default['default'].createElement(Icon, {
      icon: labelHintIcon
    }))))), value || "-"), divider && /*#__PURE__*/React__default['default'].createElement(Divider, {
      py: dividerSize
    }));
  };

  return /*#__PURE__*/React__default['default'].createElement(Wrapper$2, props, rows.filter(function (row) {
    return !row.expandable;
  }).map(function (row) {
    return renderRow(row);
  }), showExpandButton && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(OutlineButton, _extends({
    color: "secondary",
    endIcon: expanded ? "chevron-up" : "chevron-down",
    onClick: function onClick() {
      return setExpanded(function (prev) {
        return !prev;
      });
    },
    size: "xs",
    mb: 4
  }, expandButtonProps), expandButtonTitle), expanded && rows.filter(function (row) {
    return row.expandable;
  }).map(function (row) {
    return renderRow(row);
  })));
};
DetailsTable.propTypes = DetailsTablePropTypes;
DetailsTable.defaultProps = DetailsTableDefaultProps;

var DatepickerPropTypes = {
  from: PropTypes__default['default'].string,
  selectRange: PropTypes__default['default'].bool,
  to: PropTypes__default['default'].string
};
var DatepickerDefaultProps = {
  from: null,
  selectRange: false,
  to: null
};

function _templateObject$q() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  background-color: ", " !important;\n\n  .Selectable\n    .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {\n    background-color: ", " !important;\n    color: ", ";\n  }\n  .Selectable .DayPicker-Day {\n    border-radius: ", " !important;\n  }\n  .Selectable .DayPicker-Day--start {\n    background-color: ", " !important;\n    color: ", ";\n    border-top-left-radius: 8px !important;\n    border-bottom-left-radius: 8px !important;\n  }\n  .Selectable .DayPicker-Day--end {\n    background-color: ", " !important;\n    color: ", ";\n    border-top-right-radius: 8px !important;\n    border-bottom-right-radius: 8px !important;\n  }\n"]);

  _templateObject$q = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled__default['default'].div(_templateObject$q(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.primary.light;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.text.primary;
}, function (_ref4) {
  var selectRange = _ref4.selectRange;
  return selectRange ? 0 : "8px";
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.primary.main;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.common.white;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.primary.main;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.common.white;
});
var Datepicker = function Datepicker(_ref9) {
  var from = _ref9.from,
      selectRange = _ref9.selectRange,
      to = _ref9.to,
      props = _objectWithoutPropertiesLoose(_ref9, ["from", "selectRange", "to"]);

  return /*#__PURE__*/React__default['default'].createElement(Container, {
    selectRange: selectRange
  }, /*#__PURE__*/React__default['default'].createElement(DayPicker__default['default'], _extends({
    className: "Selectable",
    initialMonth: from,
    selectedDays: [from].concat(selectRange ? [{
      from: from,
      to: to
    }] : []),
    modifiers: {
      start: from,
      end: to
    }
  }, props)));
};
Datepicker.propTypes = DatepickerPropTypes;
Datepicker.defaultProps = DatepickerDefaultProps;

var DividerPropTypes = _extends({
  className: PropTypes__default['default'].any,
  thickness: PropTypes__default['default'].number
}, SPACER_PROP_TYPES);
var DividerDefaultProps = {
  thickness: 1
};

function _templateObject$r() {
  var data = _taggedTemplateLiteralLoose(["\n  line-height: 1em;\n  position: relative;\n  outline: 0;\n  border: 0;\n  color: black;\n  text-align: center;\n\n  &:before {\n    content: \"\";\n    background-color: ", ";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: ", "px;\n  }\n  &:after {\n    content: \"", "\";\n    position: relative;\n    display: inline-block;\n    padding: ", ";\n    background-color: ", ";\n    color: ", ";\n    font-weight: 300;\n    font-size: 16px;\n    line-height: 160%;\n    font-style: italic;\n  }\n/*\n  ", "\n\n  ", "; */\n\n  ", "\n"]);

  _templateObject$r = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDivider = styled__default['default'].hr(_templateObject$r(), function (_ref) {
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
  var theme = _ref5.theme,
      labelColor = _ref5.labelColor;
  return labelColor ? labelColor : theme.palette.common.white;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.gray.dark;
}, function (_ref7) {
  var vertical = _ref7.vertical;
  return vertical && styled.css(["width:", "px;height:100%;"], function (_ref8) {
    var thickness = _ref8.thickness;
    return thickness;
  });
}, function (_ref9) {
  var flexItem = _ref9.flexItem;
  return flexItem && styled.css(["height:auto;align-self:stretch;"]);
}, function (props) {
  return SPACER(props);
});
var Divider = function Divider(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledDivider, props);
};
Divider.propTypes = DividerPropTypes;
Divider.defaultProps = DividerDefaultProps;

var DropdownPropTypes = _extends({
  anchorEl: PropTypes__default['default'].object,
  children: PropTypes__default['default'].node,
  items: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    label: PropTypes__default['default'].string
  })),
  onClose: PropTypes__default['default'].func,
  open: PropTypes__default['default'].bool.isRequired,
  responsive: PropTypes__default['default'].bool
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

function _templateObject3$7() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    .MuiDialog-paper {\n      position: relative;\n      background-color: ", ";\n    }\n  }\n"]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$9() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$s() {
  var data = _taggedTemplateLiteralLoose(["\n  .MuiMenu-paper {\n    border-radius: 12px;\n    background-color: ", ";\n    box-shadow: 0px 16px 56px rgba(41, 40, 57, 0.16);\n  }\n\n  ", "\n  ", "\n"]);

  _templateObject$s = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDropdown = styled__default['default'](Menu__default['default'])(_templateObject$s(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledItem$1 = styled__default['default'](MenuItem__default['default'])(_templateObject2$9());
var StyledDialog = styled__default['default'](Dialog__default['default']).attrs(function () {
  return {
    fullScreen: true,
    hideBackdrop: true
  };
})(_templateObject3$7(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.common.white;
});
var Dropdown = function Dropdown(_ref3) {
  var children = _ref3.children,
      items = _ref3.items,
      responsive = _ref3.responsive,
      props = _objectWithoutPropertiesLoose(_ref3, ["children", "items", "responsive"]);

  var theme = styled.useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (responsive && isMobile) return /*#__PURE__*/React__default['default'].createElement(StyledDialog, _extends({
    fullScreen: true,
    hideBackdrop: true
  }, props), children);
  return /*#__PURE__*/React__default['default'].createElement(StyledDropdown, props, children || items.map(function (_ref4) {
    var label = _ref4.label,
        _onClick = _ref4.onClick,
        value = _ref4.value,
        itemProps = _objectWithoutPropertiesLoose(_ref4, ["label", "onClick", "value"]);

    return /*#__PURE__*/React__default['default'].createElement(StyledItem$1, _extends({
      key: label,
      onClick: function onClick() {
        return _onClick(value);
      }
    }, itemProps), label);
  }));
};
Dropdown.propTypes = DropdownPropTypes;
Dropdown.defaultProps = DropdownDefaultProps;

function _templateObject$t() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n\n  && {\n    width: 40px;\n    height: 40px;\n    background-color: ", ";\n    svg {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject$t = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$3 = styled__default['default'].div(_templateObject$t(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.primary.light;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.primary.main;
});
var DownloadModuleButton = function DownloadModuleButton(_ref3) {
  var icon = _ref3.icon;
  return /*#__PURE__*/React__default['default'].createElement(Wrapper$3, null, /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: icon,
    size: "lg"
  }));
};
DownloadModuleButton.propTypes = {
  icon: PropTypes__default['default'].string.isRequired
};

var DownloadModulePropTypes = _extends({
  downloadPdfText: PropTypes__default['default'].string,
  downloadPdfUrl: PropTypes__default['default'].string,
  downloadQrCodeDesc: PropTypes__default['default'].string,
  downloadQrCodeText: PropTypes__default['default'].string,
  downloadQrCodeUrl: PropTypes__default['default'].string,
  qrCodeUrl: PropTypes__default['default'].string,
  qrCodeValue: PropTypes__default['default'].string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var DownloadModuleDefaultProps = {
  downloadPdfText: "Download as PDF",
  downloadQrCodeDesc: "Or just download the QR Code of license",
  downloadQrCodeText: "Download QR Code",
  qrCodeValue: "https://license.rocks"
};

function _templateObject$u() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  padding: ", ";\n  border-radius: 16px;\n  ", "\n  ", "\n"]);

  _templateObject$u = function _templateObject() {
    return data;
  };

  return data;
}
var Container$1 = styled__default['default'].div(_templateObject$u(), function (_ref) {
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

  return /*#__PURE__*/React__default['default'].createElement(Container$1, props, /*#__PURE__*/React__default['default'].createElement(Flex, {
    container: true,
    mb: 8
  }, /*#__PURE__*/React__default['default'].createElement(DownloadModuleButton, {
    icon: "file-pdf"
  }), /*#__PURE__*/React__default['default'].createElement(TextButton, {
    content: downloadPdfText,
    href: downloadPdfUrl,
    size: "sm"
  })), /*#__PURE__*/React__default['default'].createElement(Flex, {
    container: true,
    wrap: "nowrap"
  }, /*#__PURE__*/React__default['default'].createElement(QRCode__default['default'], {
    includeMargin: true,
    size: 76,
    value: qrCodeValue
  }), /*#__PURE__*/React__default['default'].createElement(Flex, {
    item: true
  }, /*#__PURE__*/React__default['default'].createElement(Text, {
    content: downloadQrCodeDesc,
    ml: 2
  }), /*#__PURE__*/React__default['default'].createElement(TextButton, {
    content: downloadQrCodeText,
    href: downloadQrCodeUrl,
    ml: 1,
    size: "sm"
  }))));
};
DownloadModule.propTypes = DownloadModulePropTypes;
DownloadModule.defaultProps = DownloadModuleDefaultProps;

var FileManagerPropTypes = _extends({
  data: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    label: PropTypes__default['default'].string,
    files: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
      id: PropTypes__default['default'].number,
      name: PropTypes__default['default'].string,
      date: PropTypes__default['default'].string,
      description: PropTypes__default['default'].string,
      previewUrl: PropTypes__default['default'].string,
      renderDate: PropTypes__default['default'].func,
      renderDescription: PropTypes__default['default'].func,
      renderName: PropTypes__default['default'].func,
      renderPreview: PropTypes__default['default'].func
    }))
  })),
  noItemsText: PropTypes__default['default'].string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FileManagerDefaultProps = {
  noItemsText: "No items yet"
};

const img = "data:image/svg+xml,%3csvg width='33' height='40' viewBox='0 0 33 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.37397 3.33126C1.37678 1.67614 2.72079 0.334236 4.37591 0.334036L24.5333 0.331592C24.8105 0.331558 25.0348 0.556224 25.0344 0.833397L25.0247 6.56026C25.0236 7.20172 25.5427 7.72166 26.1842 7.72158L31.4682 7.72094C31.7454 7.72091 31.9697 7.94558 31.9692 8.22275L31.921 36.6682C31.9182 38.3233 30.5742 39.6652 28.9191 39.6654L4.30932 39.6684C2.65419 39.6686 1.31472 38.327 1.31752 36.6719L1.37397 3.33126Z' fill='white' stroke='%23CECDD9' stroke-width='0.659601'/%3e%3cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='33' height='41'%3e%3cpath d='M1.41698 3.33054C1.42171 1.67541 2.76728 0.333546 4.42241 0.333387L24.5431 0.331456C24.8203 0.33143 25.0444 0.556101 25.0436 0.833274L25.0272 6.56069C25.0254 7.20215 25.5439 7.72211 26.1854 7.72205L31.4589 7.72154C31.7361 7.72151 31.9601 7.94618 31.9593 8.22336L31.8781 36.6713C31.8733 38.3264 30.5278 39.6683 28.8726 39.6684L4.31004 39.6708C2.65492 39.6709 1.31701 38.3293 1.32173 36.6742L1.41698 3.33054Z' fill='white' stroke='black' stroke-width='0.659601'/%3e%3c/mask%3e%3cg mask='url(%23mask0)'%3e%3cellipse rx='25.706' ry='25.7619' transform='matrix(1 -9.78625e-05 -0.00286006 0.999999 6.34329 49.0401)' fill='%23CECDD9'/%3e%3c/g%3e%3cpath d='M27.0942 5.49303L27.1027 0.497559C27.103 0.338688 27.3045 0.270214 27.4011 0.396184L31.2307 5.39119C31.3146 5.50058 31.2363 5.65887 31.0984 5.65888L27.2603 5.65935C27.1684 5.65936 27.0941 5.5849 27.0942 5.49303Z' stroke='%23CECDD9' stroke-width='0.659601'/%3e%3cpath d='M1.33511 10.7673L20.6233 10.7654C21.1301 10.7654 21.5403 11.1762 21.5394 11.683L21.5305 17.0158C21.5297 17.5227 21.1181 17.9336 20.6113 17.9336L1.32314 17.9355L1.33511 10.7673Z' fill='white' stroke='%23CECDD9' stroke-width='0.659601'/%3e%3cpath d='M10.8275 32.317L7.92595 32.3174L7.92078 35.3709L7.009 35.371L7.02071 28.4566L11.3042 28.4561L11.3029 29.2064L7.93122 29.2069L7.92721 31.5718L10.8288 31.5714L10.8275 32.317ZM13.2015 35.3702L12.323 35.3704L12.3317 30.2321L13.2102 30.232L13.2015 35.3702ZM12.2628 28.8692C12.263 28.7267 12.3059 28.6064 12.3916 28.5082C12.4804 28.4101 12.6103 28.361 12.7812 28.361C12.9522 28.361 13.0819 28.41 13.1704 28.5081C13.2589 28.6063 13.303 28.7266 13.3028 28.869C13.3025 29.0115 13.258 29.1302 13.1692 29.2252C13.0804 29.3202 12.9505 29.3677 12.7795 29.3677C12.6086 29.3678 12.4789 29.3203 12.3904 29.2253C12.3051 29.1303 12.2625 29.0116 12.2628 28.8692ZM15.5665 35.37L14.6879 35.3701L14.7003 28.0758L15.5788 28.0757L15.5665 35.37ZM19.109 35.4645C18.4125 35.4646 17.8461 35.2367 17.41 34.7809C16.9739 34.3219 16.7565 33.7093 16.7578 32.9431L16.7581 32.7817C16.7589 32.272 16.8563 31.8177 17.05 31.4187C17.247 31.0166 17.5198 30.7032 17.8684 30.4784C18.2202 30.2504 18.6003 30.1363 19.0088 30.1363C19.6768 30.1362 20.1956 30.3562 20.5653 30.7962C20.9349 31.2362 21.1191 31.8662 21.1177 32.6862L21.1171 33.0518L17.6361 33.0523C17.6479 33.5588 17.7945 33.9688 18.0757 34.2822C18.3601 34.5924 18.7208 34.7475 19.1577 34.7474C19.4679 34.7474 19.7308 34.684 19.9463 34.5574C20.1618 34.4307 20.3504 34.2629 20.5123 34.0539L21.0482 34.4718C20.6165 35.1335 19.9701 35.4644 19.109 35.4645ZM19.0075 30.8581C18.6529 30.8582 18.3551 30.988 18.1141 31.2476C17.873 31.5041 17.7236 31.865 17.6659 32.3304L20.2397 32.3301L20.2399 32.2636C20.2153 31.8173 20.0956 31.4722 19.8807 31.2284C19.6658 30.9815 19.3748 30.8581 19.0075 30.8581Z' fill='white'/%3e%3c/svg%3e";

function _templateObject5$2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n\n  ", "\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteralLoose(["\n  min-width: 0;\n  flex: 1;\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$8() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  width: 100%;\n  height: 48px;\n  margin-bottom: ", ";\n\n  ", " {\n    margin-bottom: ", ";\n  }\n"]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteralLoose(["\n  border: 1px solid ", ";\n  padding: ", ";\n  margin-bottom: ", ";\n  border-radius: 8px;\n\n  ", " {\n    background-color: ", ";\n  }\n\n  ", "\n  ", "\n"]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$v() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject$v = function _templateObject() {
    return data;
  };

  return data;
}
var Container$2 = styled__default['default'].div(_templateObject$v());
var Wrapper$4 = styled__default['default'].div(_templateObject2$a(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.semiLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(4);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(2);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakpoints.down("sm");
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.common.white;
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Row$1 = styled__default['default'].div(_templateObject3$8(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(2);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.breakpoints.down("sm");
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing(4);
});
var DetailsWrapper = styled__default['default'].div(_templateObject4$3());
var Item = styled__default['default'](Flex).attrs(function (_ref9) {
  var lg = _ref9.lg,
      md = _ref9.md,
      xs = _ref9.xs;
  return {
    item: true,
    xs: xs || 12
  };
})(_templateObject5$2(), function (_ref10) {
  var align = _ref10.align,
      theme = _ref10.theme;
  return align && styled.css(["", "{justify-content:", ";}"], theme.breakpoints.up("sm"), align);
});
var FileManager = function FileManager(_ref11) {
  var data = _ref11.data,
      noItemsText = _ref11.noItemsText;
  return /*#__PURE__*/React__default['default'].createElement(Container$2, null, data.map(function (_ref12) {
    var label = _ref12.label,
        files = _ref12.files;
    return /*#__PURE__*/React__default['default'].createElement(Wrapper$4, {
      key: label
    }, /*#__PURE__*/React__default['default'].createElement(Text, {
      content: label,
      fontWeight: "bold",
      mb: 2
    }), files.length > 0 ? files.map(function (_ref13) {
      var date = _ref13.date,
          description = _ref13.description,
          id = _ref13.id,
          name = _ref13.name,
          previewUrl = _ref13.previewUrl,
          _ref13$renderDate = _ref13.renderDate,
          renderDate = _ref13$renderDate === void 0 ? function () {} : _ref13$renderDate,
          _ref13$renderDescript = _ref13.renderDescription,
          renderDescription = _ref13$renderDescript === void 0 ? function () {} : _ref13$renderDescript,
          _ref13$renderName = _ref13.renderName,
          renderName = _ref13$renderName === void 0 ? function () {} : _ref13$renderName,
          _ref13$renderPreview = _ref13.renderPreview,
          renderPreview = _ref13$renderPreview === void 0 ? function () {} : _ref13$renderPreview;
      return /*#__PURE__*/React__default['default'].createElement(Row$1, {
        key: id
      }, renderPreview() || /*#__PURE__*/React__default['default'].createElement(Thumbnail, {
        imgSrc: previewUrl,
        hasPreview: true,
        mr: 4
      }), /*#__PURE__*/React__default['default'].createElement(DetailsWrapper, null, /*#__PURE__*/React__default['default'].createElement(Flex, {
        container: true
      }, /*#__PURE__*/React__default['default'].createElement(Item, {
        md: 6,
        lg: 6
      }, renderName() || /*#__PURE__*/React__default['default'].createElement(Text, {
        content: name,
        noWrap: true,
        fontWeight: "bold"
      })), /*#__PURE__*/React__default['default'].createElement(Item, {
        md: 2,
        lg: 2
      }, renderDate() || /*#__PURE__*/React__default['default'].createElement(Text, {
        content: date,
        color: "textSecondary",
        fontSize: "sm"
      })), /*#__PURE__*/React__default['default'].createElement(Item, {
        align: "flex-end",
        md: 4,
        lg: 4
      }, renderDescription() || /*#__PURE__*/React__default['default'].createElement(Text, {
        content: description,
        color: "textSecondary",
        fontSize: "sm",
        noWrap: true
      })))));
    }) : /*#__PURE__*/React__default['default'].createElement(Item, {
      xs: 12
    }, /*#__PURE__*/React__default['default'].createElement(Image, {
      src: img,
      mr: 4
    }), /*#__PURE__*/React__default['default'].createElement(Text, {
      content: noItemsText,
      color: "textSecondary",
      dInline: true,
      fontSize: "sm",
      noWrap: true
    })));
  }));
};
FileManager.propTypes = FileManagerPropTypes;
FileManager.defaultProps = FileManagerDefaultProps;

const img$1 = "data:image/svg+xml,%3csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.5938 0.625L5.375 8.84375L2.375 5.8125C2.21875 5.6875 1.96875 5.6875 1.84375 5.8125L0.9375 6.71875C0.8125 6.84375 0.8125 7.09375 0.9375 7.25L5.125 11.4062C5.28125 11.5625 5.5 11.5625 5.65625 11.4062L15.0312 2.03125C15.1562 1.90625 15.1562 1.65625 15.0312 1.5L14.125 0.625C14 0.46875 13.75 0.46875 13.5938 0.625Z' fill='white'/%3e%3c/svg%3e";

var RadioBasePropTypes = _extends({
  block: PropTypes__default['default'].bool,
  defaultValue: PropTypes__default['default'].oneOfType([PropTypes__default['default'].arrayOf(PropTypes__default['default'].string), PropTypes__default['default'].string]),
  hasError: PropTypes__default['default'].bool,
  name: PropTypes__default['default'].string,
  options: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    label: PropTypes__default['default'].node,
    value: PropTypes__default['default'].string
  })),
  register: PropTypes__default['default'].func.isRequired,
  stacked: PropTypes__default['default'].bool
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var RadioBaseDefaultProps = {
  block: true,
  defaultValue: "",
  hasError: false,
  name: "radio",
  stacked: true
};

function _templateObject2$b() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$w() {
  var data = _taggedTemplateLiteralLoose(["\n  display: none;\n\n  + label {\n    display: inline-flex;\n    align-items: center;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 120%;\n    margin: 0 32px 0 0;\n    cursor: pointer;\n    transition: all 0.1s ease-in-out;\n\n    a {\n      text-decoration: none;\n      color: ", ";\n    }\n\n    ", "\n\n    &::before {\n      content: \"\";\n      display: inline-block;\n      width: 24px;\n      min-width: 24px;\n      height: 24px;\n      border-radius: ", ";\n      background-color: ", ";\n      border: 1px solid ", ";\n      margin-right: 8px;\n      transition: background-color 0.1s ease-in-out;\n      ", "\n    }\n  }\n\n  &:checked + label::before {\n    background-color: ", ";\n    border-color: ", ";\n    background-image: url(\"", "\");\n    background-size: 16px 16px;\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n\n  &:disabled + label {\n    opacity: 0.3;\n\n    &,\n    span {\n      cursor: default;\n    }\n  }\n\n  ", "\n"]);

  _templateObject$w = function _templateObject() {
    return data;
  };

  return data;
}
var StyledInput = styled__default['default'].input(_templateObject$w(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.primary.main;
}, function (_ref2) {
  var stacked = _ref2.stacked;
  return stacked && styled.css(["display:flex;:not(:last-child){margin:0 0 24px 0;}"]);
}, function (_ref3) {
  var type = _ref3.type;
  return type === "radio" ? "50%" : "8px";
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.common.white;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.gray.regular;
}, function (_ref6) {
  var hasError = _ref6.hasError;
  return hasError && styled.css(["border-color:", ";"], function (_ref7) {
    var theme = _ref7.theme;
    return theme.palette.error.main;
  });
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.primary.main;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.palette.primary.main;
}, "" + img$1, function (_ref10) {
  var bordered = _ref10.bordered,
      theme = _ref10.theme;
  return bordered && styled.css(["+ label{margin:0;}+ label:first-of-type{margin:0 0 0 -1px;}+ label:last-of-type{margin:0 -1px 0 0;}&:checked + label{border:2px solid ", ";border-radius:12px;height:102%;}"], theme.palette.gray.dark);
});
var StyledLabel$1 = styled__default['default'].label(_templateObject2$b(), function (_ref11) {
  var bordered = _ref11.bordered;
  return bordered && styled.css(["flex:1;display:flex;align-items:center;justify-content:center;height:100%;"]);
});
var RadioBaseItem = function RadioBaseItem(_ref12) {
  var bordered = _ref12.bordered,
      defaultValue = _ref12.defaultValue,
      hasError = _ref12.hasError,
      icon = _ref12.icon,
      iconProps = _ref12.iconProps,
      label = _ref12.label,
      labelHtml = _ref12.labelHtml,
      name = _ref12.name,
      register = _ref12.register,
      stacked = _ref12.stacked,
      type = _ref12.type,
      value = _ref12.value,
      props = _objectWithoutPropertiesLoose(_ref12, ["bordered", "defaultValue", "hasError", "icon", "iconProps", "label", "labelHtml", "name", "register", "stacked", "type", "value"]);

  var id = name + "-" + value;
  var defaultChecked = type === "checkbox" ? defaultValue.includes(value) : defaultValue === value;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(StyledInput, _extends({
    bordered: bordered,
    defaultChecked: defaultChecked,
    hasError: hasError,
    id: id,
    name: name,
    ref: register,
    stacked: stacked,
    type: type,
    value: value
  }, props)), /*#__PURE__*/React__default['default'].createElement(StyledLabel$1, {
    bordered: bordered,
    htmlFor: id
  }, icon && /*#__PURE__*/React__default['default'].createElement(Icon, _extends({
    color: "secondary",
    mr: 2
  }, iconProps, {
    icon: icon
  })), labelHtml ? /*#__PURE__*/React__default['default'].createElement("span", {
    dangerouslySetInnerHTML: {
      __html: labelHtml
    }
  }) : label));
};
RadioBaseItem.propTypes = RadioBasePropTypes;
RadioBaseItem.defaultProps = RadioBaseDefaultProps;

var RadioBase = function RadioBase(_ref) {
  var options = _ref.options,
      props = _objectWithoutPropertiesLoose(_ref, ["options"]);

  return /*#__PURE__*/React__default['default'].createElement(Fieldset, null, options.map(function (opt) {
    return /*#__PURE__*/React__default['default'].createElement(RadioBaseItem, _extends({
      key: opt.value
    }, opt, props));
  }));
};
RadioBase.propTypes = RadioBasePropTypes;
RadioBase.defaultProps = RadioBaseDefaultProps;

function _templateObject$x() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  border: 1px solid\n    ", ";\n  border-radius: 12px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 100ms ease-in-out;\n\n  ", "\n  ", "\n"]);

  _templateObject$x = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$5 = styled__default['default'].div(_templateObject$x(), function (_ref) {
  var block = _ref.block;
  return block ? "100%" : "initial";
}, function (_ref2) {
  var hasError = _ref2.hasError,
      theme = _ref2.theme;
  return hasError ? theme.palette.error.main : theme.palette.gray.regular;
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var BorderedRadio = function BorderedRadio(_ref3) {
  var block = _ref3.block,
      hasError = _ref3.hasError,
      options = _ref3.options,
      props = _objectWithoutPropertiesLoose(_ref3, ["block", "hasError", "options"]);

  return /*#__PURE__*/React__default['default'].createElement(Wrapper$5, {
    block: block,
    hasError: hasError
  }, options.map(function (opt) {
    return /*#__PURE__*/React__default['default'].createElement(RadioBaseItem, _extends({
      key: opt.value,
      hasError: hasError
    }, props, opt, {
      bordered: true,
      type: "radio",
      stacked: false
    }));
  }));
};
BorderedRadio.propTypes = RadioBasePropTypes;
BorderedRadio.defaultProps = RadioBaseDefaultProps;

function _templateObject$y() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$y = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRadioBase = styled__default['default'](RadioBase)(_templateObject$y(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Checkbox = function Checkbox(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledRadioBase, _extends({
    type: "checkbox"
  }, props));
};
Checkbox.propTypes = RadioBasePropTypes;
Checkbox.defaultProps = RadioBaseDefaultProps;

function _templateObject2$c() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: ", ";\n  border-top: 1px solid ", ";\n  background-color: ", " !important;\n"]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$z() {
  var data = _taggedTemplateLiteralLoose(["\n  .MuiPopover-paper {\n    background-color: ", " !important;\n    margin-top: ", ";\n    padding: 0;\n    border-radius: 12px;\n    box-shadow: 0px 16px 56px rgba(41, 40, 57, 0.16);\n  }\n"]);

  _templateObject$z = function _templateObject() {
    return data;
  };

  return data;
}
var Popover = styled__default['default'](MuiPopover__default['default'])(_templateObject$z(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(5);
});
var BottomSection = styled__default['default'].div(_templateObject2$c(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(4);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.gray.light;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.common.white;
});
var FormDatepickerComponent = function FormDatepickerComponent(_ref6) {
  var cancelText = _ref6.cancelText,
      disabled = _ref6.disabled,
      datepickerProps = _ref6.datepickerProps,
      hasError = _ref6.hasError,
      onChange = _ref6.onChange,
      placeholder = _ref6.placeholder,
      selectRange = _ref6.selectRange,
      submitText = _ref6.submitText,
      value = _ref6.value;
  var currentValue = {
    start: (value == null ? void 0 : value.start) || value,
    end: (value == null ? void 0 : value.end) || null
  };

  var _useState = React.useState(),
      anchorEl = _useState[0],
      setAnchorEl = _useState[1];

  var _useState2 = React.useState({
    from: null,
    to: null
  }),
      date = _useState2[0],
      setDate = _useState2[1];

  var from = date.from,
      to = date.to;
  var fromFormatted = currentValue.start ? formatDateAndTime(currentValue.start, {
    showTime: false
  }) : "-";
  var toFormatted = currentValue.end ? formatDateAndTime(currentValue.end, {
    showTime: false
  }) : "-";
  React.useEffect(function () {
    setDate({
      from: currentValue.start,
      to: currentValue.end
    });
  }, [anchorEl]);

  var handleDayClick = function handleDayClick(day, _ref7) {
    var selected = _ref7.selected;

    if (selectRange) {
      var range = DayPicker.DateUtils.addDayToRange(day, date);
      setDate(range);
    } else {
      setDate({
        from: selected ? null : day,
        to: null
      });
    }
  };

  var handleClosePopover = function handleClosePopover() {
    setAnchorEl(null);
  };

  var handleSubmit = function handleSubmit() {
    if (selectRange) {
      onChange({
        start: from,
        end: to
      });
    } else {
      onChange(from);
    }

    handleClosePopover();
  };

  var inputVal;
  if (!selectRange && currentValue.start) inputVal = fromFormatted;else if (selectRange && currentValue.start && currentValue.end) inputVal = fromFormatted + " - " + toFormatted;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Input, {
    disabled: disabled,
    hasError: hasError,
    placeholder: placeholder,
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    readOnly: true,
    selectable: true,
    value: inputVal
  }), /*#__PURE__*/React__default['default'].createElement(Popover, {
    anchorEl: anchorEl,
    open: !!anchorEl,
    onClose: handleClosePopover,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "center"
    }
  }, /*#__PURE__*/React__default['default'].createElement(Datepicker, _extends({
    from: from,
    to: to,
    onDayClick: handleDayClick,
    selectRange: selectRange
  }, datepickerProps)), /*#__PURE__*/React__default['default'].createElement(BottomSection, null, /*#__PURE__*/React__default['default'].createElement(TextButton, {
    content: cancelText,
    onClick: handleClosePopover,
    size: "sm"
  }), /*#__PURE__*/React__default['default'].createElement(Button, {
    content: submitText,
    disabled: selectRange && (!from || !to) || !from,
    onClick: handleSubmit,
    size: "sm"
  }))));
};
FormDatepickerComponent.propTypes = {
  cancelText: PropTypes__default['default'].string,
  disabled: PropTypes__default['default'].bool,
  datepickerProps: PropTypes__default['default'].shape({}),
  hasError: PropTypes__default['default'].bool,
  onChange: PropTypes__default['default'].func.isRequired,
  placeholder: PropTypes__default['default'].string,
  selectRange: PropTypes__default['default'].bool,
  submitText: PropTypes__default['default'].string,
  value: PropTypes__default['default'].oneOfType([PropTypes__default['default'].shape({
    start: PropTypes__default['default'].string,
    end: PropTypes__default['default'].string
  }), PropTypes__default['default'].string])
};
FormDatepickerComponent.defaultProps = {
  cancelText: "Cancel",
  disabled: false,
  datepickerProps: {},
  hasError: false,
  placeholder: "Select dates",
  selectRange: false,
  submitText: "Submit",
  value: null
};

var FormDatepickerPropTypes = {
  control: PropTypes__default['default'].shape({}),
  defaultValue: PropTypes__default['default'].shape({}),
  isRequired: PropTypes__default['default'].bool,
  name: PropTypes__default['default'].name
};
var FormDatepickerDefaultProps = {};

var FormDatepicker = function FormDatepicker(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      isRequired = _ref.isRequired,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, ["control", "defaultValue", "isRequired", "name"]);

  return /*#__PURE__*/React__default['default'].createElement(reactHookForm.Controller, {
    as: /*#__PURE__*/React__default['default'].createElement(FormDatepickerComponent, props),
    control: control,
    defaultValue: defaultValue,
    name: name,
    rules: {
      required: isRequired
    }
  });
};
FormDatepicker.propTypes = FormDatepickerPropTypes;
FormDatepicker.defaultProps = FormDatepickerDefaultProps;

var FormErrorPropTypes = _extends({
  message: PropTypes__default['default'].node.isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FormErrorDefaultProps = {};

function _templateObject$A() {
  var data = _taggedTemplateLiteralLoose(["\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 120%;\n  color: ", ";\n  margin-top: ", ";\n\n  ", "\n  ", "\n"]);

  _templateObject$A = function _templateObject() {
    return data;
  };

  return data;
}
var Error = styled__default['default'].div(_templateObject$A(), function (_ref) {
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

  return /*#__PURE__*/React__default['default'].createElement(Error, props, message);
};
FormError.propTypes = FormErrorPropTypes;
FormError.defaultProps = FormErrorDefaultProps;

var FieldWrapperPropTypes = _extends({
  block: PropTypes__default['default'].bool,
  endIcon: PropTypes__default['default'].string,
  copyable: PropTypes__default['default'].bool,
  valueToCopy: PropTypes__default['default'].string,
  endIconColor: PropTypes__default['default'].oneOf(THEME_COLORS),
  endIconOnClick: PropTypes__default['default'].func,
  endIconPrefix: PropTypes__default['default'].string,
  fixedHeight: PropTypes__default['default'].bool,
  startIcon: PropTypes__default['default'].string,
  startIconColor: PropTypes__default['default'].oneOf(THEME_COLORS),
  startIconOnClick: PropTypes__default['default'].func,
  startIconPrefix: PropTypes__default['default'].string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FieldWrapperDefaultProps = {
  block: true,
  endIcon: "",
  copyable: false,
  valueToCopy: "",
  endIconColor: "input",
  fixedHeight: true,
  startIcon: "",
  startIconColor: "input"
};

function _templateObject$B() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  padding: ", ";\n  outline: none;\n  box-sizing: border-box;\n  transition: all 100ms ease-in-out;\n  ", "\n\n  &:focus-within {\n    border: 1px solid ", ";\n  }\n\n  h5 {\n    color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$B = function _templateObject() {
    return data;
  };

  return data;
}
var StyledWrapper = styled__default['default'].div(_templateObject$B(), function (_ref) {
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
  var theme = _ref7.theme;
  return theme.palette.gray.regular;
}, function (_ref8) {
  var hasError = _ref8.hasError;
  return hasError && styled.css(["border:1px solid ", ";"], function (_ref9) {
    var theme = _ref9.theme;
    return theme.palette.error.main;
  });
}, function (_ref10) {
  var disabled = _ref10.disabled;
  return disabled && styled.css(["opacity:0.3;cursor:not-allowed;pointer-events:none;"]);
}, function (_ref11) {
  var block = _ref11.block;
  return block && styled.css(["flex:1;"]);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var FieldWrapper = function FieldWrapper(_ref12) {
  var children = _ref12.children,
      endIcon = _ref12.endIcon,
      copyable = _ref12.copyable,
      valueToCopy = _ref12.valueToCopy,
      endIconColor = _ref12.endIconColor,
      endIconOnClick = _ref12.endIconOnClick,
      endIconPrefix = _ref12.endIconPrefix,
      language = _ref12.language,
      startIcon = _ref12.startIcon,
      startIconColor = _ref12.startIconColor,
      startIconOnClick = _ref12.startIconOnClick,
      startIconPrefix = _ref12.startIconPrefix,
      props = _objectWithoutPropertiesLoose(_ref12, ["children", "endIcon", "copyable", "valueToCopy", "endIconColor", "endIconOnClick", "endIconPrefix", "language", "startIcon", "startIconColor", "startIconOnClick", "startIconPrefix"]);

  var _React$useState = React__default['default'].useState(false),
      hasJustCopied = _React$useState[0],
      setHasJustCopied = _React$useState[1];

  React__default['default'].useEffect(function () {
    if (hasJustCopied) {
      var timeout = setTimeout(function () {
        setHasJustCopied(false);
      }, 600);
      return function () {
        clearTimeout(timeout);
      };
    }
  }, [hasJustCopied]);
  return /*#__PURE__*/React__default['default'].createElement(StyledWrapper, props, startIcon && /*#__PURE__*/React__default['default'].createElement(Icon, {
    color: startIconColor,
    icon: startIcon,
    onClick: startIconOnClick,
    prefix: startIconPrefix
  }), language && !startIcon && /*#__PURE__*/React__default['default'].createElement(H5, {
    content: language
  }), children, copyable ? !hasJustCopied ? /*#__PURE__*/React__default['default'].createElement(Icon, {
    color: endIconColor,
    icon: "copy",
    onClick: function onClick() {
      setHasJustCopied(true);
      copy__default['default'](valueToCopy);
    }
  }) : /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: "check",
    color: endIconColor
  }) : endIcon ? /*#__PURE__*/React__default['default'].createElement(Icon, {
    color: endIconColor,
    icon: endIcon,
    onClick: endIconOnClick,
    prefix: endIconPrefix
  }) : null);
};
FieldWrapper.propTypes = FieldWrapperPropTypes;
FieldWrapper.defaultProps = FieldWrapperDefaultProps;

var FieldBasePropTypes = _extends({}, FieldWrapperPropTypes, {
  disabled: PropTypes__default['default'].bool,
  disableScrollOnNumber: PropTypes__default['default'].bool,
  hasError: PropTypes__default['default'].bool,
  hasWrapper: PropTypes__default['default'].bool,
  readOnly: PropTypes__default['default'].bool,
  register: PropTypes__default['default'].func,
  type: PropTypes__default['default'].string
});
var FieldBaseDefaultProps = _extends({}, FieldWrapperDefaultProps, {
  disabled: false,
  disableScrollOnNumber: true,
  hasError: false,
  hasWrapper: true,
  readOnly: false,
  register: null,
  type: "text"
});

function _templateObject$C() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  font-weight: 600;\n  font-size: 16px;\n  font-family: inherit;\n  line-height: 120%;\n  padding: 8px;\n  color: ", ";\n  outline: none;\n  border: none;\n  height: 100%;\n  box-sizing: border-box;\n  transition: all 100ms ease-in-out;\n  background-color: transparent;\n\n  ::placeholder {\n    font-weight: normal;\n  }\n\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject$C = function _templateObject() {
    return data;
  };

  return data;
}
var StyledInput$1 = styled__default['default'](
/*#__PURE__*/
// eslint-disable-next-line react/prop-types
React.forwardRef(function (_ref, ref) {
  var Component = _ref.component,
      props = _objectWithoutPropertiesLoose(_ref, ["component"]);

  return /*#__PURE__*/React__default['default'].createElement(Component, _extends({
    ref: ref
  }, props));
}))(_templateObject$C(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.text.primary;
}, function (_ref3) {
  var component = _ref3.component;
  return component === "input" && styled.css(["text-overflow:ellipsis;overflow:hidden;white-space:nowrap;&:read-only{cursor:", ";}"], function (_ref4) {
    var selectable = _ref4.selectable;
    return !selectable && "not-allowed";
  });
}, function (_ref5) {
  var hasError = _ref5.hasError;
  return hasError && styled.css(["::placeholder{color:", ";}color:", ";"], function (_ref6) {
    var theme = _ref6.theme;
    return theme.palette.error.main;
  }, function (_ref7) {
    var theme = _ref7.theme;
    return theme.palette.error.main;
  });
}, function (_ref8) {
  var block = _ref8.block;
  return block && styled.css(["width:100%;"]);
}, function (_ref9) {
  var selectable = _ref9.selectable;
  return selectable && styled.css(["user-select:all;"]);
});
var FieldBase = function FieldBase(_ref10) {
  var block = _ref10.block,
      className = _ref10.className,
      copyable = _ref10.copyable,
      valueToCopy = _ref10.valueToCopy,
      disableScrollOnNumber = _ref10.disableScrollOnNumber,
      endIcon = _ref10.endIcon,
      endIconColor = _ref10.endIconColor,
      endIconOnClick = _ref10.endIconOnClick,
      endIconPrefix = _ref10.endIconPrefix,
      fixedHeight = _ref10.fixedHeight,
      hasError = _ref10.hasError,
      hasWrapper = _ref10.hasWrapper,
      register = _ref10.register,
      startIcon = _ref10.startIcon,
      startIconColor = _ref10.startIconColor,
      startIconOnClick = _ref10.startIconOnClick,
      startIconPrefix = _ref10.startIconPrefix,
      language = _ref10.language,
      props = _objectWithoutPropertiesLoose(_ref10, ["block", "className", "copyable", "valueToCopy", "disableScrollOnNumber", "endIcon", "endIconColor", "endIconOnClick", "endIconPrefix", "fixedHeight", "hasError", "hasWrapper", "register", "startIcon", "startIconColor", "startIconOnClick", "startIconPrefix", "language"]);

  var input = function input() {
    return /*#__PURE__*/React__default['default'].createElement(StyledInput$1, _extends({
      block: block,
      className: hasWrapper ? "" : className,
      hasError: hasError,
      ref: register,
      onWheel: props.type === "number" && disableScrollOnNumber ? function (event) {
        return event.currentTarget.blur();
      } : function () {}
    }, props));
  };

  if (!hasWrapper) return input();
  return /*#__PURE__*/React__default['default'].createElement(FieldWrapper, {
    block: block,
    className: className,
    copyable: copyable,
    valueToCopy: valueToCopy,
    endIcon: endIcon,
    endIconColor: endIconColor,
    endIconOnClick: endIconOnClick,
    endIconPrefix: endIconPrefix,
    fixedHeight: fixedHeight,
    hasError: hasError,
    startIcon: startIcon,
    startIconColor: startIconColor,
    startIconOnClick: startIconOnClick,
    startIconPrefix: startIconPrefix,
    language: language
  }, input());
};
FieldBase.propTypes = FieldBasePropTypes;
FieldBase.defaultProps = FieldBaseDefaultProps;

function _templateObject$D() {
  var data = _taggedTemplateLiteralLoose(["\n  border: none;\n  padding: 0%;\n  margin: 0;\n  width: 100%;\n  flex: 1;\n"]);

  _templateObject$D = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFieldset = styled__default['default'].fieldset(_templateObject$D());
var Fieldset = function Fieldset(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement(StyledFieldset, null, children);
};
Fieldset.propTypes = {
  children: PropTypes__default['default'].node.isRequired
};
Fieldset.defaultProps = {};

function _templateObject3$9() {
  var data = _taggedTemplateLiteralLoose(["\n  &.filepond--root {\n    font-weight: unset;\n    font-family: unset;\n    font-size: unset;\n    overflow: hidden;\n  }\n\n  .filepond--drop-label {\n    color: unset;\n  }\n\n  && {\n    .filepond--panel,\n    .filepond--panel-root,\n    .filepond--drip,\n    .filepond--drop-label {\n      background-color: transparent !important;\n    }\n  }\n"]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$d() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 16px;\n  border-style: dashed;\n  border-width: 2px;\n  cursor: pointer;\n  min-height: 125px;\n  outline: none;\n  transition: all 100ms ease-in-out;\n  color: ", ";\n  margin-bottom: ", ";\n  overflow: hidden;\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$E() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject$E = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$6 = styled__default['default'].div(_templateObject$E());
var Container$3 = styled__default['default'].div(_templateObject2$d(), function (_ref) {
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
  return disabled && styled.css(["opacity:0.3;cursor:not-allowed;pointer-events:none;"]);
}, function (_ref7) {
  var hasError = _ref7.hasError;
  return hasError && styled.css(["border-color:", ";background-color:", ";"], function (_ref8) {
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
var StyledFilePond = styled__default['default'](reactFilepond.FilePond)(_templateObject3$9());
var FilePondComponent = function FilePondComponent(_ref10) {
  var disabled = _ref10.disabled,
      hasError = _ref10.hasError,
      onChange = _ref10.onChange,
      value = _ref10.value,
      props = _objectWithoutPropertiesLoose(_ref10, ["disabled", "hasError", "onChange", "value"]);

  return /*#__PURE__*/React__default['default'].createElement(Wrapper$6, null, /*#__PURE__*/React__default['default'].createElement(Container$3, {
    disabled: disabled,
    hasError: hasError
  }, /*#__PURE__*/React__default['default'].createElement(StyledFilePond, _extends({
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
  }, props))));
};
FilePondComponent.propTypes = {
  accept: PropTypes__default['default'].string,
  disabled: PropTypes__default['default'].bool,
  hasError: PropTypes__default['default'].bool,
  multiple: PropTypes__default['default'].bool,
  onChange: PropTypes__default['default'].func,
  value: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape)
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
  allowRemove: PropTypes__default['default'].bool,
  allowRevert: PropTypes__default['default'].bool,
  allowMultiple: PropTypes__default['default'].bool,
  control: PropTypes__default['default'].shape({}).isRequired,
  defaultValue: PropTypes__default['default'].arrayOf(PropTypes__default['default'].object),
  isRequired: PropTypes__default['default'].string,
  name: PropTypes__default['default'].string
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

  return /*#__PURE__*/React__default['default'].createElement(reactHookForm.Controller, {
    as: /*#__PURE__*/React__default['default'].createElement(FilePondComponent, _extends({
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

function _templateObject$F() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject$F = function _templateObject() {
    return data;
  };

  return data;
}
var EditorWrapper = styled__default['default'].div(_templateObject$F());
var CropModal = function CropModal(_ref) {
  var imgFile = _ref.imgFile,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit,
      size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, ["imgFile", "isOpen", "onClose", "onSubmit", "size"]);

  var _useState = React.useState(1),
      scale = _useState[0],
      setScale = _useState[1];

  var editorRef = /*#__PURE__*/React.createRef();

  var handleSubmit = function handleSubmit() {
    var img = editorRef.current.getImageScaledToCanvas();
    img.toBlob(function (blob) {
      if (blob) {
        onSubmit(new File([blob], imgFile.name, blob));
        onClose();
      }
    });
  };

  return /*#__PURE__*/React__default['default'].createElement(Modal, _extends({
    action: handleSubmit,
    actionTitle: "Save Changes",
    isOpen: isOpen,
    onClose: onClose,
    maxWidth: size,
    padding: true,
    title: "Crop Image"
  }, props), /*#__PURE__*/React__default['default'].createElement(EditorWrapper, null, /*#__PURE__*/React__default['default'].createElement(AvatarEditor__default['default'], {
    ref: editorRef,
    image: imgFile,
    width: size === "lg" ? 1920 : 400,
    height: 400,
    border: 20,
    color: [0, 0, 0, 0.6] // RGBA
    ,
    scale: scale,
    rotate: 0
  })), /*#__PURE__*/React__default['default'].createElement(FormRow, {
    errors: {},
    label: "Zoom",
    fields: []
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    name: "scale",
    type: "range",
    onChange: function onChange(e) {
      return setScale(parseFloat(e.target.value));
    },
    min: "1",
    max: "2",
    step: "0.01",
    defaultValue: "1"
  })));
};
CropModal.propTypes = {
  imgFile: PropTypes__default['default'].shape({
    name: PropTypes__default['default'].string
  }).isRequired,
  isOpen: PropTypes__default['default'].bool.isRequired,
  onClose: PropTypes__default['default'].func.isRequired,
  onSubmit: PropTypes__default['default'].func.isRequired,
  size: PropTypes__default['default'].string
};
CropModal.defaultProps = {
  size: "md"
};

var Input = function Input(props) {
  return /*#__PURE__*/React__default['default'].createElement(FieldBase, _extends({
    component: "input"
  }, props));
};
Input.propTypes = FieldBasePropTypes;
Input.defaultProps = FieldBaseDefaultProps;

function _templateObject3$a() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: ", ";\n\n  img {\n    border-radius: 8px;\n    object-fit: cover;\n  }\n\n  && {\n    h4 {\n      text-transform: uppercase;\n    }\n  }\n"]);

  _templateObject3$a = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$e() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject2$e = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$G() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: ", ";\n  background-color: ", ";\n  color: ", ";\n  font-size: 12px;\n  margin-bottom: ", ";\n  border-radius: 8px;\n\n  .details {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]);

  _templateObject$G = function _templateObject() {
    return data;
  };

  return data;
}
var Item$1 = styled__default['default'].div(_templateObject$G(), function (_ref) {
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
var ActionIcon = styled__default['default'](Icon)(_templateObject2$e(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.common.white;
});
var PreviewWrapper = styled__default['default'].div(_templateObject3$a(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.gray.regular;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing(2);
});

function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}

var UploaderPreviewItem = function UploaderPreviewItem(_ref8) {
  var file = _ref8.file,
      fileNameEditable = _ref8.fileNameEditable,
      onRemoveClick = _ref8.onRemoveClick,
      onEdit = _ref8.onEdit;
  var name = file.altName || file.fileName || file.name;
  var fileExt = name.split(".").pop();

  var _useState = React.useState(false),
      editMode = _useState[0],
      setEditMode = _useState[1];

  var _useState2 = React.useState(name.split(".").shift()),
      altName = _useState2[0],
      setAltName = _useState2[1];

  var handleEdit = function handleEdit() {
    onEdit(file, altName + "." + fileExt);
    setEditMode(false);
  };

  React.useEffect(function () {
    if (editMode) {
      setAltName(name.split(".").shift());
    }
  }, [editMode]);
  return /*#__PURE__*/React__default['default'].createElement(Item$1, {
    key: file.name
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "details"
  }, /*#__PURE__*/React__default['default'].createElement(PreviewWrapper, null, file.preview ? /*#__PURE__*/React__default['default'].createElement(Image, {
    alt: name,
    height: "100%",
    src: file.preview,
    width: "100%"
  }) : /*#__PURE__*/React__default['default'].createElement(H4, {
    content: fileExt,
    color: "textSecondary",
    noWrap: true
  })), /*#__PURE__*/React__default['default'].createElement("div", null, editMode ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "details"
  }, /*#__PURE__*/React__default['default'].createElement(Input, {
    onChange: function onChange(e) {
      return setAltName(e.target.value);
    },
    mb: 2,
    value: altName
  }), /*#__PURE__*/React__default['default'].createElement(ActionIcon, {
    disabled: !altName,
    icon: "check",
    onClick: handleEdit,
    mx: 2
  }), /*#__PURE__*/React__default['default'].createElement(ActionIcon, {
    icon: "times",
    onClick: function onClick() {
      return setEditMode(false);
    }
  })) : /*#__PURE__*/React__default['default'].createElement("b", null, name), (file == null ? void 0 : file.size) && /*#__PURE__*/React__default['default'].createElement("div", null, bytesToSize(file.size)))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "details"
  }, fileNameEditable && !editMode && /*#__PURE__*/React__default['default'].createElement(ActionIcon, {
    icon: "pencil-alt",
    onClick: function onClick() {
      return setEditMode(true);
    },
    mr: 2
  }), onRemoveClick && /*#__PURE__*/React__default['default'].createElement(ActionIcon, {
    icon: "trash",
    onClick: function onClick() {
      return onRemoveClick(file);
    }
  })));
};
UploaderPreviewItem.propTypes = {
  file: PropTypes__default['default'].shape({
    altName: PropTypes__default['default'].string,
    name: PropTypes__default['default'].string,
    preview: PropTypes__default['default'].string,
    size: PropTypes__default['default'].string
  }).isRequired,
  fileNameEditable: PropTypes__default['default'].bool.isRequired,
  onRemoveClick: PropTypes__default['default'].func.isRequired,
  onEdit: PropTypes__default['default'].func.isRequired
};

var UploaderPreview = function UploaderPreview(_ref) {
  var files = _ref.files,
      props = _objectWithoutPropertiesLoose(_ref, ["files"]);

  return Array.from(files).map(function (file) {
    return /*#__PURE__*/React__default['default'].createElement(UploaderPreviewItem, _extends({
      key: file.name,
      file: file
    }, props));
  });
};
UploaderPreview.propTypes = {
  files: PropTypes__default['default'].arrayOf(PropTypes__default['default'].object)
};
UploaderPreview.defaultProps = {
  files: []
};

function _templateObject2$f() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 16px;\n  border-style: dashed;\n  border-width: 2px;\n  cursor: pointer;\n  min-height: 125px;\n  outline: none;\n  transition: all 100ms ease-in-out;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n  margin-bottom: 8px;\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject2$f = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$H() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n\n  ", "\n  ", "\n"]);

  _templateObject$H = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContainer = styled__default['default'].div(_templateObject$H(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var DropzoneArea = styled__default['default'].div(_templateObject2$f(), function (_ref) {
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
  return hasError && styled.css(["border-color:", ";background-color:", ";"], function (_ref6) {
    var theme = _ref6.theme;
    return theme.palette.error.main;
  }, function (_ref7) {
    var theme = _ref7.theme;
    return theme.palette.error.light;
  });
}, function (_ref8) {
  var sizeError = _ref8.sizeError;
  return sizeError && styled.css(["border-color:", ";background-color:", ";"], function (_ref9) {
    var theme = _ref9.theme;
    return theme.palette.error.main;
  }, function (_ref10) {
    var theme = _ref10.theme;
    return theme.palette.error.light;
  });
}, function (_ref11) {
  var disabled = _ref11.disabled;
  return disabled && styled.css(["opacity:0.3;cursor:not-allowed;pointer-events:none;"]);
}, function (_ref12) {
  var dragActive = _ref12.dragActive,
      theme = _ref12.theme;
  return dragActive && styled.css(["border-color:", ";"], theme.palette.gray.medium);
});
var Dropzone = function Dropzone(_ref13) {
  var crop = _ref13.crop,
      cropProps = _ref13.cropProps,
      disabled = _ref13.disabled,
      defaultValue = _ref13.defaultValue,
      fileNameEditable = _ref13.fileNameEditable,
      hasError = _ref13.hasError,
      multiple = _ref13.multiple,
      onChange = _ref13.onChange,
      value = _ref13.value,
      props = _objectWithoutPropertiesLoose(_ref13, ["crop", "cropProps", "disabled", "defaultValue", "fileNameEditable", "hasError", "multiple", "onChange", "value"]);

  var _useState = React.useState(),
      cropFile = _useState[0],
      setCropFile = _useState[1];

  var _useState2 = React.useState(false),
      sizeError = _useState2[0],
      setSizeError = _useState2[1];

  var setFiles = function setFiles(files) {
    var accepted = files.map(function (file) {
      return Object.assign(file, {
        preview: file.type.includes("image") ? URL.createObjectURL(file) : "",
        altName: null
      });
    });
    if (multiple) onChange([].concat(value, accepted));else onChange([].concat(accepted));
  };

  var editFile = function editFile(file, altName) {
    onChange(value.map(function (f) {
      if (f.preview === file.preview) {
        Object.assign(file, {
          altName: altName
        });
      }

      return f;
    }));
  };

  var handleCrop = function handleCrop(file) {
    setFiles([file]);
    setCropFile();
    setSizeError(false);
  };

  var _useDropzone = reactDropzone.useDropzone(_extends({
    disabled: disabled,
    multiple: multiple,
    onDrop: function onDrop(acceptedFiles) {
      if (crop && !multiple) {
        setCropFile(acceptedFiles[0]);
      } else {
        setFiles(acceptedFiles);
        setSizeError(false);
      }
    },
    onDropRejected: function onDropRejected() {
      setSizeError(true);
    }
  }, props)),
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

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(StyledContainer, props, /*#__PURE__*/React__default['default'].createElement(DropzoneArea, _extends({
    dragActive: isDragActive,
    dragAccept: isDragAccept,
    dragReject: isDragReject,
    disabled: disabled,
    hasError: hasError,
    sizeError: sizeError
  }, getRootProps()), /*#__PURE__*/React__default['default'].createElement("input", getInputProps()), isDragAccept && /*#__PURE__*/React__default['default'].createElement("p", null, "Accepted"), isDragReject && /*#__PURE__*/React__default['default'].createElement("p", null, "Rejected"), isDragActive ? /*#__PURE__*/React__default['default'].createElement("p", null, "Drop here") : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("p", null, "Drop, or click to select"), multiple ? /*#__PURE__*/React__default['default'].createElement("p", null, "Accepts multiple files") : /*#__PURE__*/React__default['default'].createElement("p", null, "Single file only"))), /*#__PURE__*/React__default['default'].createElement(UploaderPreview, {
    files: value,
    fileNameEditable: fileNameEditable,
    onRemoveClick: removeFile,
    onEdit: editFile
  }), sizeError === true && /*#__PURE__*/React__default['default'].createElement(FormError, {
    message: "Uploading size limit is " + parseFloat((props.maxSize / 1024 / 1024).toFixed(2)) + " MB, please attach smaller file"
  })), /*#__PURE__*/React__default['default'].createElement(CropModal, _extends({
    isOpen: !!cropFile,
    onClose: function onClose() {
      return setCropFile();
    },
    imgFile: cropFile,
    onSubmit: handleCrop
  }, cropProps)));
};
Dropzone.propTypes = {
  accept: PropTypes__default['default'].string,
  crop: PropTypes__default['default'].bool,
  cropProps: PropTypes__default['default'].shape({}),
  defaultValue: PropTypes__default['default'].arrayOf(PropTypes__default['default'].object),
  disabled: PropTypes__default['default'].bool,
  fileNameEditable: PropTypes__default['default'].bool,
  hasError: PropTypes__default['default'].bool,
  multiple: PropTypes__default['default'].bool,
  onChange: PropTypes__default['default'].func,
  value: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape)
};
Dropzone.defaultProps = {
  accept: "image/*",
  crop: false,
  cropProps: {},
  defaultValue: [],
  disabled: false,
  fileNameEditable: false,
  hasError: false,
  multiple: true,
  onChange: function onChange() {},
  value: []
};

var FileUploadPropTypes$1 = _extends({
  control: PropTypes__default['default'].shape({}).isRequired,
  defaultValue: PropTypes__default['default'].arrayOf(PropTypes__default['default'].object),
  isRequired: PropTypes__default['default'].string,
  name: PropTypes__default['default'].string
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

  return /*#__PURE__*/React__default['default'].createElement(reactHookForm.Controller, {
    as: /*#__PURE__*/React__default['default'].createElement(Dropzone, props),
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

function _templateObject$I() {
  var data = _taggedTemplateLiteralLoose(["\n  border: none;\n  outline: none;\n"]);

  _templateObject$I = function _templateObject() {
    return data;
  };

  return data;
}
var StyledForm = styled__default['default'].form(_templateObject$I());
var Form = function Form(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledForm, props, children);
};
Form.propTypes = {
  children: PropTypes__default['default'].node.isRequired
};
Form.defaultProps = {};

function _templateObject$J() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: 14px;\n  line-height: 120%;\n  color: ", ";\n"]);

  _templateObject$J = function _templateObject() {
    return data;
  };

  return data;
}
var StyledLabel$2 = styled__default['default'].label(_templateObject$J(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.medium;
});
var FormLabel = function FormLabel(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledLabel$2, props);
};
FormLabel.propTypes = {};
FormLabel.defaultProps = {};

var renderOptions = function renderOptions(options) {
  return options.map(function (opt) {
    return /*#__PURE__*/React__default['default'].createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  });
};

var Select = function Select(_ref) {
  var options = _ref.options,
      props = _objectWithoutPropertiesLoose(_ref, ["options"]);

  return /*#__PURE__*/React__default['default'].createElement(FieldBase, _extends({
    component: "select"
  }, props), renderOptions(options));
};
Select.propTypes = FieldBasePropTypes;
Select.defaultProps = FieldBaseDefaultProps;

var PriceFieldPropTypes = _extends({
  currencies: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    label: PropTypes__default['default'].string,
    value: PropTypes__default['default'].string,
    sign: PropTypes__default['default'].string
  })),
  inputProps: PropTypes__default['default'].shape({}),
  selectProps: PropTypes__default['default'].shape({})
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var PriceFieldDefaultProps = {
  currencies: [{
    label: "EUR (€)",
    value: "eur",
    sign: "€"
  }, {
    label: "USD ($)",
    value: "usd",
    sign: "$"
  }, {
    label: "GBP (£)",
    value: "gbp",
    sign: "£"
  }],
  inputProps: {
    placeholder: "Price"
  },
  name: "price",
  selectProps: {
    name: "currency"
  },
  startIcon: "money-bill"
};

function _templateObject$K() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    flex: 0 0 30%;\n    border-left: 1px solid ", ";\n  }\n"]);

  _templateObject$K = function _templateObject() {
    return data;
  };

  return data;
}
var StyledSelect = styled__default['default'](Select)(_templateObject$K(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.regular;
});
var PriceField = function PriceField(_ref2) {
  var currencies = _ref2.currencies,
      defaultValue = _ref2.defaultValue,
      hasError = _ref2.hasError,
      hasWrapper = _ref2.hasWrapper,
      inputProps = _ref2.inputProps,
      name = _ref2.name,
      register = _ref2.register,
      selectProps = _ref2.selectProps,
      props = _objectWithoutPropertiesLoose(_ref2, ["currencies", "defaultValue", "hasError", "hasWrapper", "inputProps", "name", "register", "selectProps"]);

  return /*#__PURE__*/React__default['default'].createElement(FieldWrapper, _extends({
    hasError: hasError
  }, props), /*#__PURE__*/React__default['default'].createElement(Input, _extends({
    defaultValue: defaultValue,
    hasError: hasError,
    hasWrapper: false,
    name: name,
    register: register,
    step: "0.01",
    type: "number"
  }, inputProps)), /*#__PURE__*/React__default['default'].createElement(StyledSelect, _extends({
    hasWrapper: false,
    options: currencies,
    register: register
  }, selectProps)));
};
PriceField.propTypes = PriceFieldPropTypes;
PriceField.defaultProps = PriceFieldDefaultProps;

function _templateObject$L() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$L = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRadioBase$1 = styled__default['default'](RadioBase)(_templateObject$L(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Radio = function Radio(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledRadioBase$1, _extends({
    type: "radio"
  }, props));
};
Radio.propTypes = RadioBasePropTypes;
Radio.defaultProps = RadioBaseDefaultProps;

var Thumb = function Thumb(_ref) {
  var renderValue = _ref.renderValue,
      renderValueText = _ref.renderValueText,
      props = _objectWithoutPropertiesLoose(_ref, ["renderValue", "renderValueText"]);

  var currentVal = props["aria-valuenow"] || "0";
  return /*#__PURE__*/React__default['default'].createElement("span", props, renderValue(currentVal) || /*#__PURE__*/React__default['default'].createElement(Text, {
    content: renderValueText(currentVal) || String(currentVal),
    fontSize: "sm",
    fontWeight: "bold"
  }));
};
Thumb.propTypes = {
  renderValue: PropTypes__default['default'].func,
  renderValueText: PropTypes__default['default'].func
};
Thumb.defaultProps = {
  renderValue: function renderValue() {},
  renderValueText: function renderValueText() {}
};

function _templateObject$M() {
  var data = _taggedTemplateLiteralLoose(["\n  .MuiSlider-rail {\n    background: ", ";\n  }\n\n  .MuiSlider-thumb {\n    background: ", ";\n    color: ", ";\n    padding: ", ";\n    width: auto;\n    min-width: 28px;\n    height: 28px;\n    border: 0.5px solid rgba(0, 0, 0, 0.04);\n    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.16),\n      0px 3px 1px rgba(0, 0, 0, 0.1);\n    border-radius: 20px;\n    text-align: center;\n    margin-top: -13px;\n  }\n\n  ", "\n  ", "\n"]);

  _templateObject$M = function _templateObject() {
    return data;
  };

  return data;
}
var StyledSlider = styled__default['default'](MuiSlider__default['default'])(_templateObject$M(), function (_ref) {
  var hasError = _ref.hasError,
      theme = _ref.theme;
  return hasError ? theme.palette.error.main : theme.palette.gray.regular;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.common.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.text.primary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(2);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Slider = function Slider(_ref5) {
  var _onChange = _ref5.onChange,
      value = _ref5.value,
      props = _objectWithoutPropertiesLoose(_ref5, ["onChange", "value"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledSlider, _extends({
    onChange: function onChange(_, val) {
      return _onChange(val);
    },
    ThumbComponent: Thumb,
    value: value || 0
  }, props));
};
Slider.propTypes = {
  renderValue: PropTypes__default['default'].func,
  renderValueText: PropTypes__default['default'].func,
  onChange: PropTypes__default['default'].func.isRequired,
  value: PropTypes__default['default'].oneOfType([PropTypes__default['default'].array, PropTypes__default['default'].number]).isRequired
};
Slider.defaultProps = {
  renderValue: function renderValue() {},
  renderValueText: function renderValueText() {}
};

var RangeSliderPropTypes = _extends({
  defaultValue: PropTypes__default['default'].oneOfType([PropTypes__default['default'].array, PropTypes__default['default'].number]),
  isRequired: PropTypes__default['default'].oneOfType([PropTypes__default['default'].bool, PropTypes__default['default'].string])
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var RangeSliderDefaultProps = {
  defaultValue: 0,
  isRequired: false
};

var RangeSlider = function RangeSlider(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      isRequired = _ref.isRequired,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, ["control", "defaultValue", "isRequired", "name"]);

  return /*#__PURE__*/React__default['default'].createElement(reactHookForm.Controller, {
    as: /*#__PURE__*/React__default['default'].createElement(Slider, _extends({
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
RangeSlider.propTypes = RangeSliderPropTypes;
RangeSlider.defaultProps = RangeSliderDefaultProps;

var Option = function Option(props) {
  var isSelected = props.isSelected,
      label = props.label;
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(ReactSelect$1.components.Option, props, /*#__PURE__*/React__default['default'].createElement("input", {
    type: "checkbox",
    checked: isSelected,
    onChange: function onChange() {
      return null;
    }
  }), /*#__PURE__*/React__default['default'].createElement("label", {
    htmlFor: label
  }, label)));
};
var allOption = {
  label: "Select all",
  value: "*"
};
var ValueContainer = function ValueContainer(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["children"]);

  var getValue = props.getValue;
  var currentValues = getValue();
  var toBeRendered = children;

  if (currentValues.some(function (val) {
    return val.value === allOption.value;
  })) {
    toBeRendered = [[children[0][0]], children[1]];
  }

  return /*#__PURE__*/React__default['default'].createElement(ReactSelect$1.components.ValueContainer, props, toBeRendered);
};
var MultiValue = function MultiValue(props) {
  var data = props.data;
  var labelToBeDisplayed = data.label;

  if (data.value === allOption.value) {
    labelToBeDisplayed = "All is selected";
  }

  return /*#__PURE__*/React__default['default'].createElement(ReactSelect$1.components.MultiValue, props, /*#__PURE__*/React__default['default'].createElement("span", null, labelToBeDisplayed));
};
var animatedComponents = makeAnimated__default['default']();

var CustomSelect = function CustomSelect(props) {
  var allOption = props.allOption,
      allowSelectAll = props.allowSelectAll,
      isGrouped = props.isGrouped,
      _onChange = props.onChange,
      rawOpts = props.options; // Handle grouped options

  var options = [];
  if (isGrouped) options = flatMap__default['default'](rawOpts, function (opt) {
    return opt.options;
  });else options = rawOpts;

  if (allowSelectAll) {
    return /*#__PURE__*/React__default['default'].createElement(ReactSelect__default['default'], _extends({}, props, {
      components: {
        Option: Option,
        MultiValue: MultiValue,
        ValueContainer: ValueContainer,
        animatedComponents: animatedComponents
      },
      closeMenuOnSelect: false,
      hideSelectedOptions: false,
      isMulti: true,
      options: [allOption].concat(rawOpts),
      onChange: function onChange(selected, event) {
        if (selected !== null && selected.length > 0) {
          if (selected[selected.length - 1].value === allOption.value) {
            return _onChange([allOption].concat(options));
          }

          var result = [];

          if (selected.length === options.length) {
            if (selected.includes(allOption)) {
              result = selected.filter(function (option) {
                return option.value !== allOption.value;
              });
            } else if (event.action === "select-option") {
              result = [allOption].concat(options);
            }

            return _onChange(result);
          }
        }

        return _onChange(selected);
      }
    }));
  }

  return /*#__PURE__*/React__default['default'].createElement(ReactSelect__default['default'], props);
};
CustomSelect.propTypes = {
  allowSelectAll: PropTypes__default['default'].bool,
  allOption: PropTypes__default['default'].shape({
    label: PropTypes__default['default'].string,
    value: PropTypes__default['default'].string
  }),
  isGrouped: PropTypes__default['default'].bool,
  onChange: PropTypes__default['default'].func.isRequired,
  options: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({})).isRequired,
  value: PropTypes__default['default'].oneOfType([PropTypes__default['default'].array, PropTypes__default['default'].object]).isRequired
};
CustomSelect.defaultProps = {
  allowSelectAll: false,
  allOption: {
    label: "Select all",
    value: "*"
  },
  isGrouped: false
};

var ReactSelectPropTypes = _extends({
  async: PropTypes__default['default'].bool,
  defaultValue: PropTypes__default['default'].oneOfType([PropTypes__default['default'].array, PropTypes__default['default'].object]),
  endpoint: PropTypes__default['default'].string,
  endpointQueryFlag: PropTypes__default['default'].string,
  isClearable: PropTypes__default['default'].bool,
  isDisabled: PropTypes__default['default'].bool,
  isRequired: PropTypes__default['default'].oneOfType([PropTypes__default['default'].bool, PropTypes__default['default'].string])
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ReactSelectDefaultProps = {
  defaultValue: undefined,
  endpointQueryFlag: "q",
  isRequired: false
};

function _templateObject$N() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n\n  .react-select__control {\n    border-radius: 12px;\n    color: ", ";\n    padding: ", ";\n    height: 40px;\n    box-sizing: border-box;\n    box-shadow: none;\n    border-color: ", ";\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 120%;\n  }\n\n  .react-select__control--is-focused {\n    border-color: ", ";\n  }\n\n  .react-select__menu {\n    border-radius: 12px;\n  }\n\n  .react-select__option {\n    font-weight: 300;\n    font-size: 14px;\n    line-height: 160%;\n    padding: ", ";\n  }\n\n  .react-select__option--is-focused {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  .react-select__option:hover,\n  .react-select__option--is-selected {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$N = function _templateObject() {
    return data;
  };

  return data;
}
var ReactSelectWrapper = styled__default['default'].div(_templateObject$N(), function (_ref) {
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
  return hasError && styled.css([".react-select__control{border-color:", ";}"], function (_ref11) {
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
    axios__default['default'].get("" + endpoint + (endpointQueryFlag ? "?" + endpointQueryFlag + "=" + inputValue : "")).then(function (_ref13) {
      var data = _ref13.data;
      return callback(data.filter(function (item) {
        return item.label.toLowerCase().includes(inputValue);
      }));
    });
  };

  var Component = /*#__PURE__*/React.forwardRef(function (data, ref) {
    return async ? /*#__PURE__*/React__default['default'].createElement(AsyncSelect__default['default'], _extends({
      defaultOptions: defaultOptions,
      loadOptions: endpoint ? loadOptionsfromEndpoint : loadOptions,
      cacheOptions: cacheOptions,
      ref: ref
    }, data)) : /*#__PURE__*/React__default['default'].createElement(CustomSelect, _extends({
      ref: ref
    }, data));
  });
  var As = /*#__PURE__*/React__default['default'].createElement(Component, _extends({
    options: options,
    selectedOption: selectedOption,
    classNamePrefix: "react-select"
  }, props));
  return /*#__PURE__*/React__default['default'].createElement(ReactSelectWrapper, _extends({
    hasError: hasError
  }, props), /*#__PURE__*/React__default['default'].createElement(reactHookForm.Controller, {
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
  children: PropTypes__default['default'].node.isRequired,
  errors: PropTypes__default['default'].arrayOf(PropTypes__default['default'].node).isRequired,
  fields: PropTypes__default['default'].arrayOf(PropTypes__default['default'].string).isRequired,
  label: PropTypes__default['default'].node,
  labelAlign: PropTypes__default['default'].oneOf(["start", "center"]),
  labelGutter: PropTypes__default['default'].bool,
  show: PropTypes__default['default'].bool.isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FormRowDefaultProps = {
  label: "",
  labelAlign: "center",
  labelGutter: false,
  show: true
};

function _templateObject5$3() {
  var data = _taggedTemplateLiteralLoose(["\n  background: #f0f0f4;\n  border-radius: 100%;\n  width: 20px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 8px;\n  vertical-align: middle;\n  svg {\n    color: #8685a6;\n    font-size: 10px;\n  }\n"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  & > * {\n    :not(:last-child) {\n      margin-right: ", ";\n    }\n  }\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$b() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n"]);

  _templateObject3$b = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$g() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 0 30%;\n  ", " {\n    flex: 100%;\n    margin-bottom: ", ";\n    padding-top: 0;\n  }\n\n  ", "\n"]);

  _templateObject2$g = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$O() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  min-height: 40px;\n  margin-bottom: ", ";\n  ", ";\n  ", " {\n    flex-wrap: wrap;\n  }\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$O = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRow = styled__default['default'].div(_templateObject$O(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
}, function (_ref2) {
  var show = _ref2.show;
  return !show && "display: none";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.breakpoints.down("sm");
}, function (_ref4) {
  var labelAlign = _ref4.labelAlign;
  return labelAlign === "center" && styled.css(["align-items:center;"]);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledLabel$3 = styled__default['default'](FormLabel)(_templateObject2$g(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.breakpoints.down("sm");
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(2);
}, function (_ref7) {
  var labelAlign = _ref7.labelAlign,
      labelGutter = _ref7.labelGutter,
      theme = _ref7.theme;
  return labelAlign === "start" && labelGutter && styled.css(["padding-top:", ";"], theme.spacing(3));
});
var FieldsAndErrorsWrapper = styled__default['default'].div(_templateObject3$b());
var Fields = styled__default['default'].div(_templateObject4$4(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing(4);
});
var Hint$1 = styled__default['default'].span(_templateObject5$3());
var FormRow = function FormRow(_ref9) {
  var children = _ref9.children,
      errors = _ref9.errors,
      fields = _ref9.fields,
      hint = _ref9.hint,
      label = _ref9.label,
      labelAlign = _ref9.labelAlign,
      labelGutter = _ref9.labelGutter,
      show = _ref9.show,
      props = _objectWithoutPropertiesLoose(_ref9, ["children", "errors", "fields", "hint", "label", "labelAlign", "labelGutter", "show"]);

  var rowErrors = Array.isArray(errors) ? errors : getFormRowErrors(errors, fields);
  var validChildren = React.Children.toArray(children).filter(Boolean);
  return /*#__PURE__*/React__default['default'].createElement(StyledRow, _extends({
    labelAlign: labelAlign,
    show: show
  }, props), label && /*#__PURE__*/React__default['default'].createElement(StyledLabel$3, {
    labelAlign: labelAlign,
    labelGutter: labelGutter
  }, label, hint && /*#__PURE__*/React__default['default'].createElement(Tooltip, {
    content: hint
  }, /*#__PURE__*/React__default['default'].createElement(Hint$1, null, /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: "question"
  })), " ")), validChildren.length > 0 && /*#__PURE__*/React__default['default'].createElement(FieldsAndErrorsWrapper, {
    fullWidth: !label
  }, /*#__PURE__*/React__default['default'].createElement(Fields, null, children), rowErrors.map(function (err) {
    return /*#__PURE__*/React__default['default'].createElement(FormError, {
      key: err,
      message: err
    });
  })));
};
FormRow.propTypes = FormRowPropTypes;
FormRow.defaultProps = FormRowDefaultProps;

var StepperPropTypes = {
  control: PropTypes__default['default'].object,
  label: PropTypes__default['default'].string,
  min: PropTypes__default['default'].number,
  max: PropTypes__default['default'].number,
  name: PropTypes__default['default'].string,
  onChange: PropTypes__default['default'].func,
  size: PropTypes__default['default'].oneOf(["sm", "normal"]),
  value: PropTypes__default['default'].number
};
var StepperDefaultProps = {
  label: "Days",
  min: 1,
  max: 100,
  name: "stepper",
  size: "normal",
  value: 1
};

function _templateObject$P() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n\n  user-select: none;\n\n  input {\n    border: none;\n    width: 40px;\n    outline: none;\n    font-weight: 600;\n    font-size: 16px;\n    text-align: center;\n  }\n\n  span {\n    font-size: 12px;\n    font-style: italic;\n  }\n"]);

  _templateObject$P = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$7 = styled__default['default'].div(_templateObject$P(), function (_ref) {
  var size = _ref.size;
  return size === "sm" && styled.css(["flex-direction:column;"]);
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

  return /*#__PURE__*/React__default['default'].createElement(FieldWrapper, _extends({
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
  }, props), /*#__PURE__*/React__default['default'].createElement(Wrapper$7, {
    size: size
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    onChange: onChange,
    value: value
  }), /*#__PURE__*/React__default['default'].createElement("span", null, label)));
};
StepperComponent.propTypes = StepperPropTypes;
StepperComponent.defaultProps = StepperDefaultProps;

var Stepper = function Stepper(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      isRequired = _ref.isRequired,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, ["control", "defaultValue", "isRequired", "name"]);

  return /*#__PURE__*/React__default['default'].createElement(reactHookForm.Controller, {
    render: function render(events) {
      return /*#__PURE__*/React__default['default'].createElement(StepperComponent, _extends({
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
  autoFocus: PropTypes__default['default'].bool,
  cols: PropTypes__default['default'].number,
  dir: PropTypes__default['default'].oneOf(["ltr", "rtl"]),
  rows: PropTypes__default['default'].number,
  spellCheck: PropTypes__default['default'].bool,
  tabIndex: PropTypes__default['default'].number,
  wrap: PropTypes__default['default'].oneOf(["soft", "hard"])
});
var TextAreaDefaultProps = _extends({}, FieldBaseDefaultProps, {
  rows: 5
});

var TextArea = function TextArea(props) {
  return /*#__PURE__*/React__default['default'].createElement(FieldBase, _extends({}, props, {
    component: "textarea",
    fixedHeight: false
  }));
};
TextArea.propTypes = TextAreaPropTypes;
TextArea.defaultProps = TextAreaDefaultProps;

function _templateObject2$h() {
  var data = _taggedTemplateLiteralLoose(["\n  background: #fff;\n  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);\n  left: 2px;\n  position: absolute;\n  top: 2px;\n  transition: left 0.2s, transform 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: ", ";\n  text-transform: uppercase;\n  user-select: none;\n\n  ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject2$h = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$Q() {
  var data = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  background-color: ", ";\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  transition: background-color 0.2s;\n\n  ", "\n\n    ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject$Q = function _templateObject() {
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

  return /*#__PURE__*/React__default['default'].createElement(StyledSwitchContainer, _extends({
    disabled: disabled,
    onClick: handleToggle,
    size: size,
    toggled: toggled
  }, props), /*#__PURE__*/React__default['default'].createElement(StyledSwitch, {
    size: size,
    toggled: toggled
  }, toggled ? "Yes" : "No"));
};

var StyledSwitchContainer = styled__default['default'].div(_templateObject$Q(), function (_ref2) {
  var theme = _ref2.theme,
      toggled = _ref2.toggled;
  return toggled ? theme.palette.primary.main : theme.palette.gray.regular;
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled && styled.css(["opacity:0.3;cursor:not-allowed;pointer-events:none;"]);
}, function (_ref4) {
  var hasError = _ref4.hasError;
  return hasError && styled.css(["border:1px solid ", ";"], function (_ref5) {
    var theme = _ref5.theme;
    return theme.palette.error.main;
  });
}, function (_ref6) {
  var size = _ref6.size;
  return size === "sm" && styled.css(["border-radius:40px;height:20px;width:40px;"]);
}, function (_ref7) {
  var size = _ref7.size;
  return size === "md" && styled.css(["border-radius:35px;height:32px;width:56px;"]);
}, function (_ref8) {
  var size = _ref8.size;
  return size === "lg" && styled.css(["border-radius:100px;height:50px;width:100px;"]);
});
var StyledSwitch = styled__default['default'].span(_templateObject2$h(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.palette.gray.medium;
}, function (_ref10) {
  var theme = _ref10.theme,
      toggled = _ref10.toggled;
  return toggled && styled.css(["left:calc(100% - 2px);transform:translateX(-100%);color:", ";"], theme.palette.primary.main);
}, function (_ref11) {
  var size = _ref11.size;
  return size === "sm" && styled.css(["border-radius:16px;height:16px;width:16px;"]);
}, function (_ref12) {
  var size = _ref12.size;
  return size === "md" && styled.css(["border-radius:37px;height:28px;width:28px;"]);
}, function (_ref13) {
  var size = _ref13.size;
  return size === "lg" && styled.css(["border-radius:46px;height:46px;width:46px;"]);
});
Switch.propTypes = {
  disabled: PropTypes.bool,
  handleToggle: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  toggled: PropTypes.bool
};
Switch.defaultProps = {
  disabled: false,
  handleToggle: null,
  size: "md",
  toggled: false
};

function _templateObject$R() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  position: relative;\n\n  ", "\n  ", "\n"]);

  _templateObject$R = function _templateObject() {
    return data;
  };

  return data;
}
var StyledToggle = styled__default['default'].div(_templateObject$R(), function (theme) {
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

  return /*#__PURE__*/React__default['default'].createElement(StyledToggle, null, /*#__PURE__*/React__default['default'].createElement(Switch, _extends({
    disabled: disabled,
    handleToggle: !disabled ? handleToggle : undefined,
    size: size,
    toggled: value
  }, props)));
};
Toggle.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  value: PropTypes.bool
};
Toggle.defaultProps = {
  disabled: false,
  onChange: null,
  size: "md",
  value: false
};

var ToggleSwitchPropTypes = _extends({
  control: PropTypes__default['default'].shape({}).isRequired,
  defaultValue: PropTypes__default['default'].bool,
  isRequired: PropTypes__default['default'].string,
  name: PropTypes__default['default'].string
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

  return /*#__PURE__*/React__default['default'].createElement(reactHookForm.Controller, {
    render: function render(events) {
      return /*#__PURE__*/React__default['default'].createElement(Toggle, _extends({
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

var HideOnScrollPropTypes = {
  children: PropTypes__default['default'].element.isRequired,
  threshold: PropTypes__default['default'].number
};
var HideOnScrollDefaultProps = {
  threshold: 100
};

var HideOnScroll = function HideOnScroll(_ref) {
  var children = _ref.children,
      threshold = _ref.threshold;
  var trigger = useScrollTrigger__default['default']({
    threshold: threshold
  });
  return /*#__PURE__*/React__default['default'].createElement(Slide__default['default'], {
    appear: false,
    direction: "down",
    in: !trigger
  }, children);
};
HideOnScroll.propTypes = HideOnScrollPropTypes;
HideOnScroll.defaultProps = HideOnScrollDefaultProps;

function _templateObject$S() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$S = function _templateObject() {
    return data;
  };

  return data;
}
var StyledHidden = styled__default['default'](MuiHidden__default['default'])(_templateObject$S(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Hidden = function Hidden(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledHidden, props);
};

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n\n  ", " {\n    padding: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-left: ", ";\n  color: ", ";\n\n  ", " {\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n"]);

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

function _templateObject5$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n\n  ", " {\n    margin-bottom: ", ";\n  }\n\n  ", "\n"]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$5() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$c() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n\n  ", " {\n    align-items: flex-start;\n  }\n"]);

  _templateObject3$c = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$i() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  min-height: 40px;\n  padding-bottom: ", ";\n\n  :last-child {\n    ", " {\n      border-left-width: 0;\n    }\n  }\n"]);

  _templateObject2$i = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$T() {
  var data = _taggedTemplateLiteralLoose(["\n  border-width: 0;\n  border-style: solid;\n  border-color: ", ";\n  border-left-width: 1px;\n  transition: all 0.1ms ease-in-out;\n  position: absolute;\n  bottom: 0;\n  left: 15px;\n  top: 0;\n  ::before {\n    content: \"\";\n    width: 1px;\n    height: 100%;\n    display: inline-block;\n  }\n"]);

  _templateObject$T = function _templateObject() {
    return data;
  };

  return data;
}
var ItemConnector = styled__default['default'].div(_templateObject$T(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.regular;
});
var Container$4 = styled__default['default'].div(_templateObject2$i(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(4);
}, ItemConnector);
var RowWrapper = styled__default['default'].div(_templateObject3$c(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.breakpoints.down("md");
});
var RowDetails = styled__default['default'](Grid__default['default']).attrs(function () {
  return {
    container: true
  };
})(_templateObject4$5());
var Item$2 = styled__default['default'](Grid__default['default']).attrs(function (_ref4) {
  var lg = _ref4.lg;
  return {
    item: true,
    xs: 12,
    lg: lg || 3
  };
})(_templateObject5$4(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.breakpoints.down("sm");
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(1);
}, function (_ref7) {
  var align = _ref7.align,
      theme = _ref7.theme;
  return align && styled.css(["", "{justify-content:", ";}"], theme.breakpoints.up("sm"), align);
});
var StyledIcon$2 = styled__default['default'](Icon)(_templateObject6(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing(2);
});
var StyledCollapseButton = styled__default['default'](CollapseButton)(_templateObject7(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing(4);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.palette.text.primary;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.breakpoints.down("sm");
});
var Content$3 = styled__default['default'].div(_templateObject8(), function (_ref12) {
  var theme = _ref12.theme;
  return theme.spacing(4, 10);
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.breakpoints.down("sm");
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.spacing(2, 4, 4, 10);
});
var HistoryItem = function HistoryItem(_ref15) {
  var _ref15$data = _ref15.data,
      collapsible = _ref15$data.collapsible,
      collapseContent = _ref15$data.collapseContent,
      description = _ref15$data.description,
      icon = _ref15$data.icon,
      iconColor = _ref15$data.iconColor,
      moreInfo = _ref15$data.moreInfo,
      title = _ref15$data.title;

  var _useState = React.useState(false),
      collapseOpen = _useState[0],
      setCollapseOpen = _useState[1];

  return /*#__PURE__*/React__default['default'].createElement(Container$4, {
    "data-cy": "historyItem"
  }, /*#__PURE__*/React__default['default'].createElement(ItemConnector, null), /*#__PURE__*/React__default['default'].createElement(RowWrapper, null, /*#__PURE__*/React__default['default'].createElement(StyledIcon$2, {
    rounded: true,
    color: iconColor,
    icon: icon
  }), /*#__PURE__*/React__default['default'].createElement(RowDetails, null, /*#__PURE__*/React__default['default'].createElement(Item$2, {
    lg: 5
  }, /*#__PURE__*/React__default['default'].createElement(Text, {
    fontWeight: "bold"
  }, title)), /*#__PURE__*/React__default['default'].createElement(Item$2, {
    lg: 4
  }, /*#__PURE__*/React__default['default'].createElement(Text, {
    color: "textSecondary",
    noWrap: true
  }, description)), /*#__PURE__*/React__default['default'].createElement(Item$2, {
    align: "flex-end"
  }, /*#__PURE__*/React__default['default'].createElement(Text, {
    color: "textSecondary",
    fontStyle: "italic"
  }, moreInfo), collapsible && /*#__PURE__*/React__default['default'].createElement(StyledCollapseButton, {
    isOpened: collapseOpen,
    onClick: function onClick() {
      return setCollapseOpen(function (prev) {
        return !prev;
      });
    }
  })))), collapsible && /*#__PURE__*/React__default['default'].createElement(Collapse, {
    isOpened: collapseOpen
  }, /*#__PURE__*/React__default['default'].createElement(Content$3, null, collapseContent)));
};
HistoryItem.propTypes = {
  data: PropTypes__default['default'].shape({
    collapsible: PropTypes__default['default'].bool,
    collapseContent: PropTypes__default['default'].node,
    id: PropTypes__default['default'].number.isRequired,
    description: PropTypes__default['default'].string,
    moreInfo: PropTypes__default['default'].string.isRequired,
    title: PropTypes__default['default'].string.isRequired,
    icon: PropTypes__default['default'].string.isRequired,
    iconColor: PropTypes__default['default'].string
  }).isRequired
};

var HistoryPropTypes = _extends({
  rows: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    id: PropTypes__default['default'].number.isRequired,
    description: PropTypes__default['default'].string,
    moreInfo: PropTypes__default['default'].string.isRequired,
    title: PropTypes__default['default'].string.isRequired,
    icon: PropTypes__default['default'].string.isRequired,
    iconColor: PropTypes__default['default'].string
  })).isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);

function _templateObject$U() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$U = function _templateObject() {
    return data;
  };

  return data;
}
var Container$5 = styled__default['default'].div(_templateObject$U(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var History = function History(_ref) {
  var rows = _ref.rows,
      props = _objectWithoutPropertiesLoose(_ref, ["rows"]);

  return /*#__PURE__*/React__default['default'].createElement(Container$5, props, rows.map(function (h) {
    return /*#__PURE__*/React__default['default'].createElement(HistoryItem, {
      key: h.id,
      data: h
    });
  }));
};
History.propTypes = HistoryPropTypes;

var HistoryTreePropTypes = _extends({
  activeNodeId: PropTypes__default['default'].number,
  data: PropTypes__default['default'].array.isRequired,
  onNodeClick: PropTypes__default['default'].func
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var HistoryTreeDefaultProps = {
  activeNodeId: null,
  onNodeClick: function onNodeClick() {}
};

function _templateObject7$1() {
  var data = _taggedTemplateLiteralLoose(["\n  max-width: 80px;\n  width: 80px;\n"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$5() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  height: ", "px;\n\n  :last-child {\n    ", ", ", " {\n      ::after {\n        content: none;\n      }\n    }\n  }\n"]);

  _templateObject5$5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$6() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  ::before,\n  ::after {\n    content: \"\";\n    height: ", "px;\n    width: ", "px;\n    position: absolute;\n    left: ", "px;\n    border-left: 2px dashed ", ";\n  }\n\n  ::before {\n    top: -", "px;\n  }\n\n  ::after {\n    content: \"\";\n    top: ", "px;\n  }\n\n  :last-child {\n    ::before {\n      width: ", "px;\n      border-right: 2px dashed ", ";\n      border-top: 2px dashed ", ";\n      border-left: none;\n      top: -", "px;\n      left: -", "px;\n      border-top-right-radius: 48px;\n    }\n  }\n\n  :first-child {\n    ", " {\n      ::after {\n        content: \"\";\n      }\n    }\n  }\n\n  :hover {\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n\n    ", " {\n      background-color: ", ";\n    }\n    ", " {\n      opacity: 1;\n    }\n  }\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$d() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  background-color: ", ";\n  width: ", "px;\n  height: ", "px;\n  border-radius: 12px;\n  margin-right: ", ";\n\n  ::after {\n    content: none;\n    width: ", "px;\n    height: ", "px;\n    position: absolute;\n    left: ", "px;\n    top: ", "px;\n    border-left: 2px dashed #cecdd9;\n    border-bottom: 2px dashed #cecdd9;\n    border-bottom-left-radius: 48px;\n  }\n"]);

  _templateObject3$d = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$j() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  bottom: ", "px;\n  left: -50%;\n  opacity: 0;\n  text-align: center;\n  transition: all 0.2s ease-in-out;\n"]);

  _templateObject2$j = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$V() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$V = function _templateObject() {
    return data;
  };

  return data;
}
var NODE_SIZE = 20;
var NODE_CONNECTOR_HEIGHT = 28;
var ROW_HEIGHT = NODE_SIZE + 2 * NODE_CONNECTOR_HEIGHT;
var Wrapper$8 = styled__default['default'].div(_templateObject$V(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Label$1 = styled__default['default'].div(_templateObject2$j(), NODE_SIZE + 8);
var Node = styled__default['default'].div(_templateObject3$d(), function (_ref) {
  var active = _ref.active,
      theme = _ref.theme;
  return active ? theme.palette.primary.main : theme.palette.gray.regular;
}, NODE_SIZE, NODE_SIZE, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(10);
}, NODE_SIZE * 2 + 2, NODE_CONNECTOR_HEIGHT, NODE_SIZE / 2 - 1, NODE_SIZE);
var NodeWrapper = styled__default['default'].div(_templateObject4$6(), NODE_CONNECTOR_HEIGHT, NODE_CONNECTOR_HEIGHT, NODE_SIZE / 2 - 1, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.gray.regular;
}, NODE_CONNECTOR_HEIGHT, NODE_SIZE, NODE_CONNECTOR_HEIGHT, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.gray.regular;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.gray.regular;
}, NODE_CONNECTOR_HEIGHT + 2, NODE_CONNECTOR_HEIGHT / 2 + 2, Node, Node, function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.gray.medium;
}, Label$1);
var Row$2 = styled__default['default'].div(_templateObject5$5(), ROW_HEIGHT, NodeWrapper, Node);
var Nodes = styled__default['default'].div(_templateObject6$1());
var Description = styled__default['default'].div(_templateObject7$1());
var HistoryTree = function HistoryTree(_ref7) {
  var activeNodeId = _ref7.activeNodeId,
      data = _ref7.data,
      onNodeClick = _ref7.onNodeClick,
      props = _objectWithoutPropertiesLoose(_ref7, ["activeNodeId", "data", "onNodeClick"]);

  return /*#__PURE__*/React__default['default'].createElement(Wrapper$8, props, data.map(function (row) {
    var _row$nodes;

    return /*#__PURE__*/React__default['default'].createElement(Row$2, {
      key: row.key
    }, /*#__PURE__*/React__default['default'].createElement(Description, null, /*#__PURE__*/React__default['default'].createElement(Text, {
      content: row.description,
      color: "textSecondary",
      fontSize: "sm",
      noWrap: true,
      pr: 1
    })), /*#__PURE__*/React__default['default'].createElement(Nodes, null, (_row$nodes = row.nodes) == null ? void 0 : _row$nodes.map(function (node) {
      var isActive = activeNodeId === node.id;
      return /*#__PURE__*/React__default['default'].createElement(NodeWrapper, {
        key: node.id,
        onClick: function onClick(e) {
          return onNodeClick(e, node);
        }
      }, /*#__PURE__*/React__default['default'].createElement(Label$1, null, /*#__PURE__*/React__default['default'].createElement(Text, {
        content: node.label,
        color: "textSecondary",
        fontSize: "sm",
        fontWeight: "bold"
      })), /*#__PURE__*/React__default['default'].createElement(Node, {
        active: isActive
      }));
    })));
  }));
};
HistoryTree.propTypes = HistoryTreePropTypes;
HistoryTree.defaultProps = HistoryTreeDefaultProps;

var IndicatorPropTypes = _extends({
  color: PropTypes__default['default'].string,
  content: PropTypes__default['default'].node,
  children: PropTypes__default['default'].node
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var IndicatorDefaultProps = {
  color: "primary"
};

function _templateObject$W() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    background-color: ", ";\n    color: ", ";\n    border-radius: 100%;\n    min-height: 20px;\n    min-width: 20px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    ", "\n    ", "\n  }\n"]);

  _templateObject$W = function _templateObject() {
    return data;
  };

  return data;
}
var StyledIndicator = styled__default['default'].div(_templateObject$W(), function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return theme.palette[color].main;
}, function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return theme.palette.common.white;
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Indicator = function Indicator(_ref3) {
  var content = _ref3.content,
      children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["content", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledIndicator, props, content || children);
};
Indicator.propTypes = IndicatorPropTypes;
Indicator.defaultProps = IndicatorDefaultProps;

function _templateObject$X() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$X = function _templateObject() {
    return data;
  };

  return data;
}
var Container$6 = styled__default['default'].div(_templateObject$X(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Inspector = function Inspector(_ref) {
  var rows = _ref.rows,
      props = _objectWithoutPropertiesLoose(_ref, ["rows"]);

  return /*#__PURE__*/React__default['default'].createElement(Container$6, props, rows.map(function (row) {
    return /*#__PURE__*/React__default['default'].createElement(InspectorItem, {
      key: row.id,
      data: row
    });
  }));
};
Inspector.propTypes = InspectorPropTypes;

function _templateObject6$2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: ", ";\n\n  div {\n    max-width: 80%;\n  }\n\n  ", " {\n    padding: ", ";\n  }\n"]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$6() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 33px !important;\n  height: 33px !important;\n  padding: ", ";\n  color: ", ";\n  background-color: ", ";\n  border-radius: 0px 8px 8px 0px;\n  ", " {\n    padding: ", ";\n  }\n"]);

  _templateObject5$6 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$7() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 33px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  margin: ", ";\n  padding: ", ";\n  background-color: ", ";\n  color: ", ";\n  transition: all 100ms ease-in-out;\n  ", " {\n    h5 {\n      font-size: ", ";\n    }\n  }\n"]);

  _templateObject4$7 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$e() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 90px;\n  height: 33px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  border-radius: 8px 0px 0px 8px;\n\n  div {\n    text-transform: capitalize !important;\n  }\n\n  ", " {\n    width: 65px;\n  }\n"]);

  _templateObject3$e = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$k() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n\n  ", " {\n    align-items: flex-start;\n  }\n"]);

  _templateObject2$k = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$Y() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  min-height: 41px;\n  padding: ", ";\n"]);

  _templateObject$Y = function _templateObject() {
    return data;
  };

  return data;
}
var Container$7 = styled__default['default'].div(_templateObject$Y(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(1, 0);
});
var RowWrapper$1 = styled__default['default'].div(_templateObject2$k(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.down("md");
});
var StyledStatus = styled__default['default'].div(_templateObject3$e(), function (_ref3) {
  var color = _ref3.color;
  return color.backgroundColor;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakpoints.down("sm");
});
var StyledMessage$1 = styled__default['default'].div(_templateObject4$7(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(0, 1);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(2, 2, 2, 4);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.gray.semiLight;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.text.primary;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.breakpoints.down("sm");
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.typography.h6;
});
var StyledCollapseButton$1 = styled__default['default'](CollapseButton)(_templateObject5$6(), function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing(2);
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.palette.text.primary;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.palette.gray.regular;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.breakpoints.down("sm");
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.spacing(3);
});
var Content$4 = styled__default['default'].div(_templateObject6$2(), function (_ref16) {
  var theme = _ref16.theme;
  return theme.spacing(4, 12, 4, 28);
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.breakpoints.down("sm");
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.spacing(2, 4, 4, 2);
});
var InspectorItem = function InspectorItem(_ref19) {
  var _ref19$data = _ref19.data,
      collapsible = _ref19$data.collapsible,
      collapseContent = _ref19$data.collapseContent,
      status = _ref19$data.status,
      buttonFunction = _ref19$data.buttonFunction,
      buttonContent = _ref19$data.buttonContent,
      title = _ref19$data.title;

  var _useState = React.useState(false),
      collapseOpen = _useState[0],
      setCollapseOpen = _useState[1];

  var theme = styled.useTheme();

  var getColor = function getColor(status, theme) {
    switch (status) {
      case "require":
        return {
          backgroundColor: theme.palette.error.main
        };

      case "optional":
        return {
          backgroundColor: theme.palette.warning.light
        };

      case "passed":
        return {
          backgroundColor: theme.palette.success.main
        };

      default:
        return {
          backgroundColor: theme.palette.warning.light
        };
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(Container$7, null, /*#__PURE__*/React__default['default'].createElement(RowWrapper$1, null, /*#__PURE__*/React__default['default'].createElement(StyledStatus, {
    color: getColor(status, theme)
  }, /*#__PURE__*/React__default['default'].createElement(Text, {
    content: status
  })), /*#__PURE__*/React__default['default'].createElement(StyledMessage$1, null, /*#__PURE__*/React__default['default'].createElement(H5, null, title)), collapsible && /*#__PURE__*/React__default['default'].createElement(StyledCollapseButton$1, {
    isOpened: collapseOpen,
    onClick: function onClick() {
      return setCollapseOpen(function (prev) {
        return !prev;
      });
    }
  })), collapsible && /*#__PURE__*/React__default['default'].createElement(Collapse, {
    isOpened: collapseOpen
  }, /*#__PURE__*/React__default['default'].createElement(Content$4, null, /*#__PURE__*/React__default['default'].createElement(Text, {
    fontSize: "sm",
    content: collapseContent
  }), /*#__PURE__*/React__default['default'].createElement(Button, {
    onClick: buttonFunction,
    size: "sm",
    content: buttonContent
  }))));
};
InspectorItem.propTypes = {
  data: PropTypes__default['default'].shape({
    collapsible: PropTypes__default['default'].bool,
    collapseContent: PropTypes__default['default'].node,
    id: PropTypes__default['default'].number.isRequired,
    title: PropTypes__default['default'].string.isRequired,
    status: PropTypes__default['default'].string.isRequired,
    buttonFunction: PropTypes__default['default'].func.isRequired,
    buttonContent: PropTypes__default['default'].string.isRequired
  }).isRequired
};

var InspectorPropTypes = _extends({
  rows: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    id: PropTypes__default['default'].number.isRequired,
    title: PropTypes__default['default'].string.isRequired,
    status: PropTypes__default['default'].string.isRequired,
    buttonFunction: PropTypes__default['default'].func.isRequired,
    buttonContent: PropTypes__default['default'].string.isRequired
  })).isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var InspectorDefaultProps = {};

var ItemSelectPropTypes = _extends({
  async: PropTypes__default['default'].bool,
  endpoint: PropTypes__default['default'].string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ItemSelectDefaultProps = {};

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  height: 60px;\n  width: 100%;\n  padding-left: ", ";\n  padding-top: ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 148px;\n  height: 130px;\n  object-fit: cover;\n  z-index: 2;\n  border-radius: 12px;\n  margin-left: 10px;\n  margin-right: 10px;\n"]);

  _templateObject8$1 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 14px !important;\n  height: 14px !important;\n  margin-right: 10px;\n  margin-left: ", ";\n  margin-top: ", ";\n  cursor: pointer;\n"]);

  _templateObject7$2 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n"]);

  _templateObject6$3 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$7() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 168px;\n  min-height: 200px !important;\n  border-radius: 12px;\n  box-shadow: rgba(41, 40, 57, 0.08) 0px 8px 32px;\n  cursor: pointer;\n  margin: ", ";\n  background-color: ", ";\n"]);

  _templateObject5$7 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$8() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  bottom: 40px;\n  color: ", ";\n"]);

  _templateObject4$8 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$f() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: 28px !important;\n  color: ", " !important;\n"]);

  _templateObject3$f = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$l() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 169px;\n  min-height: 200px !important;\n  border-radius: 12px;\n  border: 3px solid ", ";\n  cursor: pointer;\n  margin: ", ";\n\n  display: grid !important;\n  place-items: center;\n"]);

  _templateObject2$l = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$Z() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background-color: ", ";\n  border-radius: 16px;\n  padding: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  ", "\n"]);

  _templateObject$Z = function _templateObject() {
    return data;
  };

  return data;
}
var Container$8 = styled__default['default'].div(_templateObject$Z(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.semiLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(4);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(4);
}, function (_ref5) {
  var maxWidth = _ref5.maxWidth,
      items = _ref5.items;
  return maxWidth && items === 0 && styled.css(["max-width:", "px !important;"], maxWidth);
});
var SelectItem = styled__default['default'].div(_templateObject2$l(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.gray.regular;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing(2);
});
var AddIcon = styled__default['default'](Icon)(_templateObject3$f(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.gray.medium;
});
var Description$1 = styled__default['default'](Text)(_templateObject4$8(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.palette.gray.medium;
});
var Item$3 = styled__default['default'].div(_templateObject5$7(), function (_ref10) {
  var theme = _ref10.theme;
  return theme.spacing(2);
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.palette.common.white;
});
var HeaderRow = styled__default['default'].div(_templateObject6$3());
var Close = styled__default['default'](Icon)(_templateObject7$2(), function (_ref12) {
  var theme = _ref12.theme;
  return theme.spacing(2);
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.spacing(2);
});
var StyledImage$1 = styled__default['default'](Image)(_templateObject8$1());
var Title = styled__default['default'](H6)(_templateObject9(), function (_ref14) {
  var theme = _ref14.theme;
  return theme.spacing(3);
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.spacing(2);
});

var SelectNftCard = function SelectNftCard(_ref16) {
  var onClick = _ref16.onClick;
  return /*#__PURE__*/React__default['default'].createElement(SelectItem, {
    onClick: onClick
  }, /*#__PURE__*/React__default['default'].createElement(AddIcon, {
    icon: "plus"
  }), /*#__PURE__*/React__default['default'].createElement(Description$1, {
    content: "select"
  }));
};

var Card = function Card(_ref17) {
  var id = _ref17.id,
      coverSrc = _ref17.coverSrc,
      title = _ref17.title,
      onClick = _ref17.onClick,
      isRemovable = _ref17.isRemovable,
      onRemove = _ref17.onRemove;
  return /*#__PURE__*/React__default['default'].createElement(Item$3, {
    onClick: onClick
  }, /*#__PURE__*/React__default['default'].createElement(HeaderRow, null, /*#__PURE__*/React__default['default'].createElement(Title, {
    content: title
  }), isRemovable && /*#__PURE__*/React__default['default'].createElement(Close, {
    onClick: function onClick() {
      return onRemove(id);
    },
    color: "secondary",
    icon: "times"
  })), /*#__PURE__*/React__default['default'].createElement(StyledImage$1, {
    src: coverSrc
  }));
};

var ItemsPreview = function ItemsPreview(_ref18) {
  var items = _ref18.items,
      onRemove = _ref18.onRemove,
      action = _ref18.action,
      maxWidth = _ref18.maxWidth;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Container$8, {
    maxWidth: maxWidth,
    items: items == null ? void 0 : items.length
  }, items == null ? void 0 : items.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement(Card, {
      key: item.id,
      id: item.id,
      title: item.title,
      coverSrc: item.coverSrc,
      isRemovable: true,
      onRemove: onRemove
    });
  }), /*#__PURE__*/React__default['default'].createElement(SelectNftCard, {
    onClick: action
  })));
};

function _templateObject6$4() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  z-index: 1;\n"]);

  _templateObject6$4 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$8() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    justify-content: ", ";\n  }\n"]);

  _templateObject5$8 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$9() {
  var data = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n  background-color: white;\n  && {\n    color: ", ";\n  }\n"]);

  _templateObject4$9 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$g() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    font-size: 16px;\n    font-weight: 500;\n    color: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: ", "px;\n  }\n"]);

  _templateObject3$g = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$m() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    display: flex;\n    flex-direction: column;\n    padding: ", ";\n    &:first-child {\n      padding-top: 0;\n    }\n  }\n"]);

  _templateObject2$m = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$_() {
  var data = _taggedTemplateLiteralLoose(["\n  .MuiDialog-paper {\n    flex: 1;\n    position: relative;\n    background-color: ", ";\n\n    border-radius: 16px !important;\n  }\n"]);

  _templateObject$_ = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDialog$1 = styled__default['default'](Dialog__default['default'])(_templateObject$_(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
});
var ContentWrapper = styled__default['default'](DialogContent__default['default']).attrs(function () {
  return {
    dividers: true
  };
})(_templateObject2$m(), function (_ref2) {
  var padding = _ref2.padding,
      theme = _ref2.theme;
  return padding ? theme.spacing(4) : 0;
});
var Title$1 = styled__default['default'](DialogTitle__default['default']).attrs(function () {
  return {
    disableTypography: true
  };
})(_templateObject3$g(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.darkIndigo;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(3, 5);
});
var CloseModalIcon = styled__default['default'](Icon).attrs(function () {
  return {
    size: "lg"
  };
})(_templateObject4$9(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.secondary.dark;
});
var Actions = styled__default['default'](DialogActions__default['default'])(_templateObject5$8(), function (_ref6) {
  var hasDesc = _ref6.hasDesc;
  return hasDesc ? "space-between" : "flex-end";
});
var LoadingWrapper = styled__default['default'].div(_templateObject6$4(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.secondary.dark;
});
var Modal = function Modal(_ref8) {
  var action = _ref8.action,
      actionDescription = _ref8.actionDescription,
      actionLoading = _ref8.actionLoading,
      actionTitle = _ref8.actionTitle,
      cancelButton = _ref8.cancelButton,
      dataCy = _ref8.dataCy,
      fullScreen = _ref8.fullScreen,
      isOpen = _ref8.isOpen,
      loading = _ref8.loading,
      onClose = _ref8.onClose,
      children = _ref8.children,
      maxWidth = _ref8.maxWidth,
      title = _ref8.title,
      disabled = _ref8.disabled,
      padding = _ref8.padding,
      props = _objectWithoutPropertiesLoose(_ref8, ["action", "actionDescription", "actionLoading", "actionTitle", "cancelButton", "dataCy", "fullScreen", "isOpen", "loading", "onClose", "children", "maxWidth", "title", "disabled", "padding"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledDialog$1, _extends({
    "data-cy": dataCy,
    fullScreen: typeof fullScreen !== "undefined" ? fullScreen : typeof window !== "undefined" && window.screen.width < 768,
    onClose: onClose,
    open: isOpen,
    maxWidth: maxWidth
  }, props), loading && /*#__PURE__*/React__default['default'].createElement(LoadingWrapper, null, /*#__PURE__*/React__default['default'].createElement(CircularProgress__default['default'], {
    size: 60
  })), title && /*#__PURE__*/React__default['default'].createElement(Title$1, null, /*#__PURE__*/React__default['default'].createElement(H3, {
    content: title
  }), /*#__PURE__*/React__default['default'].createElement(CloseModalIcon, {
    icon: "times",
    onClick: onClose
  })), /*#__PURE__*/React__default['default'].createElement(ContentWrapper, {
    padding: padding
  }, children), action && /*#__PURE__*/React__default['default'].createElement(Actions, {
    hasDesc: !!actionDescription
  }, cancelButton && /*#__PURE__*/React__default['default'].createElement(TextButton, {
    onClick: onClose,
    color: "secondary",
    content: "Cancel"
  }), /*#__PURE__*/React__default['default'].createElement("div", null, actionDescription), /*#__PURE__*/React__default['default'].createElement(Button, {
    disabled: disabled,
    loading: actionLoading,
    onClick: action
  }, actionTitle)));
};
Modal.propTypes = {
  action: PropTypes__default['default'].func,
  actionDescription: PropTypes__default['default'].node,
  actionLoading: PropTypes__default['default'].bool,
  actionTitle: PropTypes__default['default'].string,
  cancelButton: PropTypes__default['default'].bool,
  dataCy: PropTypes__default['default'].string,
  fullScreen: PropTypes__default['default'].bool,
  isOpen: PropTypes__default['default'].bool.isRequired,
  loading: PropTypes__default['default'].bool,
  onClose: PropTypes__default['default'].func.isRequired,
  children: PropTypes__default['default'].oneOfType([PropTypes__default['default'].any]).isRequired,
  maxWidth: PropTypes__default['default'].string,
  title: PropTypes__default['default'].string,
  disabled: PropTypes__default['default'].bool,
  padding: PropTypes__default['default'].bool
};
Modal.defaultProps = {
  action: undefined,
  actionDescription: null,
  actionLoading: false,
  actionTitle: "Save",
  cancelButton: false,
  dataCy: "modal",
  fullScreen: undefined,
  loading: false,
  maxWidth: "md",
  title: "",
  disabled: false,
  padding: false
};

function _templateObject6$5() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 24px !important;\n  height: 24px !important;\n  border-radius: 100%;\n  background-color: ", ";\n  margin-right: 10px;\n  margin-left: ", ";\n  margin-top: ", ";\n  display: grid;\n  place-items: center;\n\n  svg {\n    color: ", " !important;\n  }\n\n  ", "\n"]);

  _templateObject6$5 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$9() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 14px !important;\n  height: 14px !important;\n  margin-right: 10px;\n  margin-left: ", ";\n  margin-top: ", ";\n  cursor: pointer;\n"]);

  _templateObject5$9 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$a() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n"]);

  _templateObject4$a = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$h() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 148px;\n  height: 130px;\n  object-fit: cover;\n  z-index: 2;\n  border-radius: 12px;\n  margin-left: 10px;\n  margin-right: 10px;\n"]);

  _templateObject3$h = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$n() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  height: 60px;\n  width: 100%;\n  padding-left: ", ";\n  padding-top: ", ";\n"]);

  _templateObject2$n = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$$() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 168px;\n  min-height: 200px !important;\n  border-radius: 12px;\n  box-shadow: rgba(41, 40, 57, 0.08) 0px 8px 32px;\n  cursor: pointer;\n  margin: ", ";\n  background-color: ", ";\n"]);

  _templateObject$$ = function _templateObject() {
    return data;
  };

  return data;
}
var CardItem = styled__default['default'].div(_templateObject$$(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.common.white;
});
var CardTitle = styled__default['default'](H6)(_templateObject2$n(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(3);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(2);
});
var CardStyledImage = styled__default['default'](Image)(_templateObject3$h());
var CardHeaderRow = styled__default['default'].div(_templateObject4$a());
var CardClose = styled__default['default'](Icon)(_templateObject5$9(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(2);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(2);
});
var CardSelectCircle = styled__default['default'].div(_templateObject6$5(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.gray.regular;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing(2);
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing(2);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.palette.common.white;
}, function (_ref11) {
  var checked = _ref11.checked;
  return checked && styled.css(["background-color:", ";"], function (_ref12) {
    var theme = _ref12.theme;
    return theme.palette.primary.main;
  });
});
var SelectItemCard = function SelectItemCard(_ref13) {
  var id = _ref13.id,
      coverSrc = _ref13.coverSrc,
      title = _ref13.title,
      checked = _ref13.checked,
      onClick = _ref13.onClick,
      isRemovable = _ref13.isRemovable,
      onRemove = _ref13.onRemove;
  return /*#__PURE__*/React__default['default'].createElement(CardItem, {
    onClick: onClick
  }, /*#__PURE__*/React__default['default'].createElement(CardHeaderRow, null, /*#__PURE__*/React__default['default'].createElement(CardTitle, {
    content: title
  }), /*#__PURE__*/React__default['default'].createElement(CardSelectCircle, {
    checked: checked
  }, checked && /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: "check"
  })), isRemovable && /*#__PURE__*/React__default['default'].createElement(CardClose, {
    onClick: function onClick() {
      return onRemove(id);
    },
    color: "secondary",
    icon: "times"
  })), /*#__PURE__*/React__default['default'].createElement(CardStyledImage, {
    src: coverSrc
  }));
};

function _templateObject2$o() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  background-color: ", ";\n  padding: ", ";\n\n  overflow-y: scroll;\n  height: 530px;\n\n  .nft-masonry-grid {\n    display: flex;\n    width: auto;\n\n    &:first-child {\n      margin-left: -", ";\n    }\n  }\n\n  .nft-masonry-grid_column {\n    padding-left: ", "; /* gutter size */\n    min-width: 180px !important;\n  }\n\n  /* Style your items */\n  .nft-masonry-grid_column > a,\n  .nft-masonry-grid_column > div {\n    display: block;\n    margin-bottom: ", ";\n  }\n"]);

  _templateObject2$o = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$10() {
  var data = _taggedTemplateLiteralLoose(["\n  .MuiDialog-paper {\n    min-height: 640px !important;\n  }\n  .MuiDialogTitle-root {\n    padding-bottom: ", ";\n  }\n  .MuiDialogContent-root {\n    border-top: none !important;\n  }\n"]);

  _templateObject$10 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledModal = styled__default['default'](Modal)(_templateObject$10(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
});
var GridWrapper = styled__default['default'].div(_templateObject2$o(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.gray.semiLight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(4, 6);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(4);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(2);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(4);
});
var SelectItemsModal = function SelectItemsModal(_ref7) {
  var action = _ref7.action,
      isOpen = _ref7.isOpen,
      onClose = _ref7.onClose,
      handleSelectItems = _ref7.handleSelectItems,
      selectedItems = _ref7.selectedItems,
      options = _ref7.options;

  var _useState = React.useState(false),
      openModal = _useState[0],
      setOpenModal = _useState[1];

  var isChecked = function isChecked(option) {
    var checkStatus = selectedItems == null ? void 0 : selectedItems.some(function (item) {
      return Number(item.id) === option.id;
    });
    return checkStatus;
  };

  return /*#__PURE__*/React__default['default'].createElement(StyledModal, {
    cancelButton: true,
    action: onClose,
    actionTitle: "add",
    title: "select Merch Items",
    isOpen: isOpen,
    onClose: onClose
  }, /*#__PURE__*/React__default['default'].createElement(GridWrapper, null, /*#__PURE__*/React__default['default'].createElement(Masonry__default['default'], {
    breakpointCols: {
      default: 4,
      1265: 4,
      950: 3,
      650: 2,
      513: 1
    },
    className: "nft-masonry-grid",
    columnClassName: "nft-masonry-grid_column"
  }, options == null ? void 0 : options.map(function (option) {
    return /*#__PURE__*/React__default['default'].createElement(SelectItemCard, {
      checked: isChecked(option),
      onClick: function onClick() {
        if (!(selectedItems == null ? void 0 : selectedItems.some(function (item) {
          return item.id === option.id;
        }))) {
          handleSelectItems([].concat(selectedItems, [{
            id: option.id,
            coverSrc: option.coverSrc,
            title: option.title
          }]));
        } else if (selectedItems == null ? void 0 : selectedItems.some(function (item) {
          return item.id === option.id;
        })) {
          handleSelectItems(selectedItems == null ? void 0 : selectedItems.filter(function (item) {
            return item.id !== option.id;
          }));
        }
      },
      key: option.id,
      id: option.id,
      title: option.title,
      coverSrc: option.coverSrc
    });
  }))));
};

var ItemSelect = function ItemSelect(_ref) {
  var register = _ref.register,
      control = _ref.control,
      setValue = _ref.setValue,
      options = _ref.options,
      maxWidth = _ref.maxWidth;

  var _useState = React.useState(false),
      openModal = _useState[0],
      setOpenModal = _useState[1];

  var _useState2 = React.useState([]),
      selectedItems = _useState2[0],
      setSelectedItems = _useState2[1];

  React.useEffect(function () {
    setValue("selectedItems", selectedItems == null ? void 0 : selectedItems.map(function (item) {
      return item == null ? void 0 : item.id;
    }));
  }, [selectedItems]);

  var removeSelectedItem = function removeSelectedItem(id) {
    setSelectedItems(selectedItems == null ? void 0 : selectedItems.filter(function (item) {
      return item.id !== id;
    }));
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(reactHookForm.Controller, {
    as: /*#__PURE__*/React__default['default'].createElement(ItemsPreview, {
      action: function action() {
        return setOpenModal(true);
      },
      items: selectedItems,
      onRemove: removeSelectedItem,
      maxWidth: maxWidth
    }),
    register: register,
    control: control,
    name: "selectedItems"
  }), /*#__PURE__*/React__default['default'].createElement(SelectItemsModal, {
    action: function action() {
      return setOpenModal(true);
    },
    isOpen: openModal,
    onClose: function onClose() {
      return setOpenModal(false);
    },
    handleSelectItems: function handleSelectItems(props) {
      return setSelectedItems(props);
    },
    selectedItems: selectedItems,
    options: options
  }));
};
ItemSelect.propTypes = ItemSelectPropTypes;
ItemSelect.defaultProps = ItemSelectDefaultProps;

var LanguagePropTypes = _extends({
  languages: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    value: PropTypes__default['default'].string,
    label: PropTypes__default['default'].string
  })),
  onChange: PropTypes__default['default'].func.isRequired,
  value: PropTypes__default['default'].string.isRequired
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

  var _useState = React.useState(null),
      anchorEl = _useState[0],
      setAnchorEl = _useState[1];

  var handleClick = function handleClick(val) {
    onChange(val);
    setAnchorEl(null);
  };

  var current = languages.find(function (l) {
    return l.value === value;
  });
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(TextButton, _extends({
    content: current == null ? void 0 : current.label,
    color: "subtle",
    endIcon: "chevron-down",
    onClick: function onClick(_ref2) {
      var currentTarget = _ref2.currentTarget;
      return setAnchorEl(currentTarget);
    },
    startIcon: "globe"
  }, props)), /*#__PURE__*/React__default['default'].createElement(Dropdown, {
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

const img$2 = "data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.20827 41.2468C9.85226 41.2468 12.484 44.0937 12.484 47.415C12.484 50.8719 9.85226 53.4477 6.20827 53.4477C2.56429 53.4477 0 50.8719 0 47.415C0 44.0937 2.56429 41.2468 6.20827 41.2468ZM35.9092 6C49.4054 6 60 16.5063 60 29.7916C60 43.0092 49.4054 53.4477 35.9092 53.4477C22.413 53.4477 11.8184 43.0092 11.8184 29.7916C11.8184 16.5063 22.413 6 35.9092 6ZM35.9092 43.2125C43.2647 43.2125 48.8656 37.5188 48.8656 29.7916C48.8656 21.9966 43.2647 16.2351 35.9092 16.2351C28.5538 16.2351 22.9528 21.9966 22.9528 29.7916C22.9528 37.5188 28.5538 43.2125 35.9092 43.2125Z' fill='%23AC00FC'/%3e%3c/svg%3e";

var AuthLayoutHeaderPropTypes = {
  backButtonOnClick: PropTypes__default['default'].func,
  headerLeft: PropTypes__default['default'].node,
  headerRight: PropTypes__default['default'].node,
  logoAction: PropTypes__default['default'].func,
  logoSrc: PropTypes__default['default'].string,
  renderLogo: PropTypes__default['default'].func
};
var AuthLayoutHeaderDefaultProps = {
  renderLogo: function renderLogo() {}
};

function _templateObject3$i() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 48px;\n  height: 48px;\n"]);

  _templateObject3$i = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$p() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1%;\n"]);

  _templateObject2$p = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$11() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 0 120px;\n  ", " {\n    flex: 0 0 96px;\n  }\n"]);

  _templateObject$11 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledHeader = styled__default['default'](Flex).attrs(function () {
  return {
    container: true,
    alignItems: "center",
    justify: "space-between"
  };
})(_templateObject$11(), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.down("md");
});
var Item$4 = styled__default['default'](Flex).attrs(function () {
  return {
    container: true,
    item: true
  };
})(_templateObject2$p());
var StyledLogo = styled__default['default'](Image).attrs(function () {
  return {
    alt: "Logo"
  };
})(_templateObject3$i());
var AuthLayoutHeader = function AuthLayoutHeader(_ref2) {
  var backButtonOnClick = _ref2.backButtonOnClick,
      headerLeft = _ref2.headerLeft,
      headerRight = _ref2.headerRight,
      logoAction = _ref2.logoAction,
      logoSrc = _ref2.logoSrc,
      renderLogo = _ref2.renderLogo,
      props = _objectWithoutPropertiesLoose(_ref2, ["backButtonOnClick", "headerLeft", "headerRight", "logoAction", "logoSrc", "renderLogo"]);

  var backButton = /*#__PURE__*/React__default['default'].createElement(TextButton, {
    color: "secondary",
    onClick: backButtonOnClick,
    size: "sm"
  }, "Back");
  return /*#__PURE__*/React__default['default'].createElement(StyledHeader, props, /*#__PURE__*/React__default['default'].createElement(Item$4, null, headerLeft || backButton), /*#__PURE__*/React__default['default'].createElement(Item$4, {
    justify: "center"
  }, renderLogo() || /*#__PURE__*/React__default['default'].createElement(StyledLogo, {
    src: logoSrc || img$2,
    onClick: logoAction
  })), /*#__PURE__*/React__default['default'].createElement(Item$4, {
    justify: "flex-end"
  }, headerRight));
};
AuthLayoutHeader.propTypes = AuthLayoutHeaderPropTypes;
AuthLayoutHeader.defaultProps = AuthLayoutHeaderDefaultProps;

var AuthLayoutPropTypes = {
  children: PropTypes__default['default'].node.isRequired,
  content: PropTypes__default['default'].node.isRequired,
  headerBackButtonOnClick: PropTypes__default['default'].func,
  headerLeft: PropTypes__default['default'].node,
  headerLogoAction: PropTypes__default['default'].func,
  headerLogoSrc: PropTypes__default['default'].string,
  headerRight: PropTypes__default['default'].node,
  headerRenderLogo: PropTypes__default['default'].func,
  loading: PropTypes__default['default'].bool
};

function _templateObject2$q() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  width: 100%;\n  padding: ", ";\n"]);

  _templateObject2$q = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$12() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100%;\n"]);

  _templateObject$12 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContainer$1 = styled__default['default'](MuiContainer__default['default']).attrs(function () {
  return {
    maxWidth: "xs"
  };
})(_templateObject$12());
var Content$5 = styled__default['default'].div(_templateObject2$q(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(10, 0);
});
var AuthLayout = function AuthLayout(_ref2) {
  var children = _ref2.children,
      content = _ref2.content,
      headerLeft = _ref2.headerLeft,
      headerBackButtonOnClick = _ref2.headerBackButtonOnClick,
      headerLogoAction = _ref2.headerLogoAction,
      headerLogoSrc = _ref2.headerLogoSrc,
      headerRight = _ref2.headerRight,
      headerRenderLogo = _ref2.headerRenderLogo,
      loading = _ref2.loading,
      props = _objectWithoutPropertiesLoose(_ref2, ["children", "content", "headerLeft", "headerBackButtonOnClick", "headerLogoAction", "headerLogoSrc", "headerRight", "headerRenderLogo", "loading"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledContainer$1, props, loading && /*#__PURE__*/React__default['default'].createElement(PageLoading, {
    fullScreen: true
  }), /*#__PURE__*/React__default['default'].createElement(Flex, {
    container: true,
    direction: "column",
    mAuto: true,
    h100: true,
    wrap: "nowrap"
  }, /*#__PURE__*/React__default['default'].createElement(AuthLayoutHeader, {
    backButtonOnClick: headerBackButtonOnClick,
    headerLeft: headerLeft,
    headerRight: headerRight,
    logoAction: headerLogoAction,
    logoSrc: headerLogoSrc,
    renderLogo: headerRenderLogo
  }), /*#__PURE__*/React__default['default'].createElement(Content$5, null, children || content)));
};
AuthLayout.propTypes = AuthLayoutPropTypes;
AuthLayout.defaultProps = {};

var CreatorsHubFooterPropTypes = {
  bottomContent: PropTypes__default['default'].node,
  content: PropTypes__default['default'].node,
  navCols: PropTypes__default['default'].array
};
var CreatorsHubFooterDefaultProps = {};

function _templateObject4$b() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: 12px;\n  line-height: 120%;\n  :not(:last-child) {\n    margin-bottom: ", ";\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n"]);

  _templateObject4$b = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$j() {
  var data = _taggedTemplateLiteralLoose(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]);

  _templateObject3$j = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$r() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-top: ", ";\n\n  ", " {\n    margin-top: ", ";\n  }\n"]);

  _templateObject2$r = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$13() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  background-color: ", ";\n  padding: ", ";\n\n  ", " {\n    padding: ", ";\n  }\n\n  ", "\n  ", "\n"]);

  _templateObject$13 = function _templateObject() {
    return data;
  };

  return data;
}
var Footer = styled__default['default'].div(_templateObject$13(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(16, 0);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.breakpoints.down("md");
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(8, 0);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var BottomSection$1 = styled__default['default'].div(_templateObject2$r(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(16);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.breakpoints.down("md");
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing(8);
});
var Col = styled__default['default'].ul(_templateObject3$j());
var ColItem = styled__default['default'].li(_templateObject4$b(), function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing(2);
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.palette.primary.main;
});

var renderCol = function renderCol(_ref10) {
  var title = _ref10.title,
      items = _ref10.items;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(H4, {
    content: title,
    mb: 4
  }), /*#__PURE__*/React__default['default'].createElement(Col, null, items == null ? void 0 : items.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement(ColItem, {
      key: item.key
    }, item.render());
  })));
};

var CreatorsHubFooter = function CreatorsHubFooter(_ref11) {
  var bottomContent = _ref11.bottomContent,
      content = _ref11.content,
      navCols = _ref11.navCols,
      props = _objectWithoutPropertiesLoose(_ref11, ["bottomContent", "content", "navCols"]);

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Footer, props, /*#__PURE__*/React__default['default'].createElement(Flex, {
    container: true,
    alignItems: "flex-start",
    spacing: 8
  }, content && /*#__PURE__*/React__default['default'].createElement(Flex, {
    item: true,
    xs: 12,
    md: 6,
    lg: 3
  }, content), navCols == null ? void 0 : navCols.map(function (col) {
    return /*#__PURE__*/React__default['default'].createElement(Flex, {
      item: true,
      xs: 12,
      md: 6,
      lg: 3,
      key: col.title
    }, renderCol(col));
  })), bottomContent && /*#__PURE__*/React__default['default'].createElement(BottomSection$1, null, bottomContent)));
};
CreatorsHubFooter.propTypes = CreatorsHubFooterPropTypes;
CreatorsHubFooter.defaultProps = CreatorsHubFooterDefaultProps;

var CreatorsHubHeaderPropTypes = {
  fixed: PropTypes__default['default'].bool,
  logoAction: PropTypes__default['default'].func,
  logoSrc: PropTypes__default['default'].string,
  primaryNavItems: PropTypes__default['default'].array,
  primaryWhite: PropTypes__default['default'].bool,
  renderLogo: PropTypes__default['default'].func,
  secondary: PropTypes__default['default'].bool,
  secondaryHasBorder: PropTypes__default['default'].bool,
  secondaryHideOnScroll: PropTypes__default['default'].bool,
  secondaryNavItems: PropTypes__default['default'].array,
  secondaryRenderRight: PropTypes__default['default'].func
};
var CreatorsHubHeaderDefaultProps = {
  renderLogo: function renderLogo() {},
  secondaryRenderRight: function secondaryRenderRight() {}
};

function _templateObject5$a() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  font-size: 12px;\n  line-height: 120%;\n  :not(:first-child) {\n    margin-left: ", ";\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n"]);

  _templateObject5$a = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$c() {
  var data = _taggedTemplateLiteralLoose(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]);

  _templateObject4$c = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$k() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject3$k = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$s() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    background-color: ", ";\n    border: none;\n\n    svg {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject2$s = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$14() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  padding: ", ";\n  height: 80px;\n  max-height: 80px;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: space-between;\n\n  ", " {\n    height: ", ";\n    max-height: ", ";\n  }\n\n  ", "\n"]);

  _templateObject$14 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledHeader$1 = styled__default['default'].div(_templateObject$14(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4, 0);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.down("sm");
}, function (_ref3) {
  var headerSmHeight = _ref3.headerSmHeight;
  return headerSmHeight;
}, function (_ref4) {
  var headerSmHeight = _ref4.headerSmHeight;
  return headerSmHeight;
}, function (_ref5) {
  var primaryWhite = _ref5.primaryWhite;
  return primaryWhite && styled.css(["background-color:", ";"], function (_ref6) {
    var theme = _ref6.theme;
    return theme.palette.common.white;
  });
});
var MenuIconButton = styled__default['default'](Icon).attrs(function () {
  return {
    squared: true,
    mr: 4
  };
})(_templateObject2$s(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.gray.semiLight;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.gray.medium;
});
var LogoContainer = styled__default['default'].div(_templateObject3$k());
var PrimaryList = styled__default['default'].ul(_templateObject4$c());
var PrimaryListItem = styled__default['default'].li(_templateObject5$a(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing(6);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.palette.text.primary;
});
var PrimaryHeader = function PrimaryHeader(_ref11) {
  var drawerOpen = _ref11.drawerOpen,
      logoSrc = _ref11.logoSrc,
      logoAction = _ref11.logoAction,
      primaryNavItems = _ref11.primaryNavItems,
      renderLogo = _ref11.renderLogo,
      setDrawerOpen = _ref11.setDrawerOpen,
      props = _objectWithoutPropertiesLoose(_ref11, ["drawerOpen", "logoSrc", "logoAction", "primaryNavItems", "renderLogo", "setDrawerOpen"]);

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(StyledHeader$1, props, /*#__PURE__*/React__default['default'].createElement(LogoContainer, null, /*#__PURE__*/React__default['default'].createElement(Hidden, {
    implementation: "js",
    mdUp: true
  }, /*#__PURE__*/React__default['default'].createElement(MenuIconButton, {
    icon: drawerOpen ? "times" : "bars",
    onClick: function onClick() {
      return setDrawerOpen(function (prev) {
        return !prev;
      });
    }
  })), renderLogo() || /*#__PURE__*/React__default['default'].createElement(Image, {
    alt: "Logo",
    height: "100%",
    onClick: logoAction,
    src: logoSrc || img$2
  })), /*#__PURE__*/React__default['default'].createElement(PrimaryList, null, primaryNavItems == null ? void 0 : primaryNavItems.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement(Hidden, {
      implementation: "js",
      smDown: !item.showSm,
      key: item.key
    }, /*#__PURE__*/React__default['default'].createElement(PrimaryListItem, {
      key: item.key
    }, item.render()));
  }))));
};
PrimaryHeader.propTypes = CreatorsHubHeaderPropTypes;
PrimaryHeader.defaultProps = CreatorsHubHeaderDefaultProps;

function _templateObject3$l() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 32px;\n  width: 100%;\n  font-weight: 600;\n  color: ", ";\n  padding-left: ", ";\n  :not(:last-child) {\n    margin-bottom: ", ";\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n\n  ", "\n"]);

  _templateObject3$l = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$t() {
  var data = _taggedTemplateLiteralLoose(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]);

  _templateObject2$t = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$15() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100vw;\n  height: 100vh;\n  && {\n    top: ", " !important;\n  }\n\n  .MuiPaper-root {\n    box-shadow: none;\n    width: 100%;\n    height: 100%;\n    top: ", " !important;\n    background-color: ", ";\n    padding: ", ";\n  }\n"]);

  _templateObject$15 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDrawer = styled__default['default'](Drawer__default['default'])(_templateObject$15(), function (_ref) {
  var offsetTop = _ref.offsetTop;
  return offsetTop;
}, function (_ref2) {
  var offsetTop = _ref2.offsetTop;
  return offsetTop;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.common.white;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(4, 0);
});
var List = styled__default['default'].ul(_templateObject2$t());
var ListItem = styled__default['default'].li(_templateObject3$l(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.text.secondary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(6);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing(4);
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.text.secondary;
}, function (_ref9) {
  var active = _ref9.active;
  return active && styled.css(["color:", ";a{text-decoration:none;color:", ";}::before{content:\"\";position:absolute;top:0;left:0;width:3px;height:100%;border-radius:11px;background-color:", ";}"], function (_ref10) {
    var theme = _ref10.theme;
    return theme.palette.text.primary;
  }, function (_ref11) {
    var theme = _ref11.theme;
    return theme.palette.text.primary;
  }, function (_ref12) {
    var theme = _ref12.theme;
    return theme.palette.primary.main;
  });
});
var HeaderDrawer = function HeaderDrawer(_ref13) {
  var navItems = _ref13.navItems,
      props = _objectWithoutPropertiesLoose(_ref13, ["navItems"]);

  return /*#__PURE__*/React__default['default'].createElement(Hidden, {
    implementation: "js",
    mdUp: true
  }, /*#__PURE__*/React__default['default'].createElement(StyledDrawer, _extends({
    ModalProps: {
      hideBackdrop: true
    }
  }, props), /*#__PURE__*/React__default['default'].createElement(List, null, navItems == null ? void 0 : navItems.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement(ListItem, {
      active: item.active,
      key: item.key
    }, item.render());
  }))));
};
HeaderDrawer.propTypes = CreatorsHubHeaderPropTypes;
HeaderDrawer.defaultProps = CreatorsHubHeaderDefaultProps;

function _templateObject$16() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$16 = function _templateObject() {
    return data;
  };

  return data;
}
var Header = styled__default['default'].div(_templateObject$16(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var MainHeader = function MainHeader(_ref) {
  var fixed = _ref.fixed,
      heightSm = _ref.heightSm,
      logoSrc = _ref.logoSrc,
      logoAction = _ref.logoAction,
      primaryNavItems = _ref.primaryNavItems,
      primaryWhite = _ref.primaryWhite,
      renderLogo = _ref.renderLogo,
      secondary = _ref.secondary,
      secondaryHideOnScroll = _ref.secondaryHideOnScroll,
      secondaryNavItems = _ref.secondaryNavItems,
      secondaryRenderRight = _ref.secondaryRenderRight,
      smNavItems = _ref.smNavItems,
      props = _objectWithoutPropertiesLoose(_ref, ["fixed", "heightSm", "logoSrc", "logoAction", "primaryNavItems", "primaryWhite", "renderLogo", "secondary", "secondaryHideOnScroll", "secondaryNavItems", "secondaryRenderRight", "smNavItems"]);

  var _useState = React.useState(false),
      drawerOpen = _useState[0],
      setDrawerOpen = _useState[1];

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Header, props, /*#__PURE__*/React__default['default'].createElement(PrimaryHeader, {
    drawerOpen: drawerOpen,
    headerSmHeight: heightSm + "px",
    logoSrc: logoSrc,
    logoAction: logoAction,
    primaryNavItems: primaryNavItems,
    primaryWhite: primaryWhite,
    renderLogo: renderLogo,
    setDrawerOpen: setDrawerOpen
  })), /*#__PURE__*/React__default['default'].createElement(HeaderDrawer, {
    navItems: smNavItems || secondaryNavItems || primaryNavItems,
    open: drawerOpen,
    onClose: function onClose() {
      return setDrawerOpen(false);
    },
    offsetTop: heightSm + "px"
  }));
};
MainHeader.propTypes = CreatorsHubHeaderPropTypes;
MainHeader.defaultProps = CreatorsHubHeaderDefaultProps;

function _templateObject4$d() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  ", " {\n    flex: 1;\n    justify-content: space-between;\n  }\n"]);

  _templateObject4$d = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$m() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  color: ", ";\n  font-weight: 600;\n  height: 100%;\n  :not(:last-child) {\n    margin-right: ", ";\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n\n  ", "\n"]);

  _templateObject3$m = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$u() {
  var data = _taggedTemplateLiteralLoose(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  height: 100%;\n"]);

  _templateObject2$u = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$17() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  height: 80px;\n  max-height: 80px;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: space-between;\n  background-color: ", ";\n\n  ", "\n\n  ", " {\n    height: 64px;\n    max-height: 64px;\n  }\n"]);

  _templateObject$17 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledHeader$2 = styled__default['default'].div(_templateObject$17(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var secondaryHasBorder = _ref2.secondaryHasBorder;
  return secondaryHasBorder && styled.css(["border-top:1px solid ", ";"], function (_ref3) {
    var theme = _ref3.theme;
    return theme.palette.gray.semiLight;
  });
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakpoints.down("sm");
});
var SecondaryList = styled__default['default'].ul(_templateObject2$u());
var SecondaryListItem = styled__default['default'].li(_templateObject3$m(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.text.secondary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(8);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.text.secondary;
}, function (_ref8) {
  var active = _ref8.active;
  return active && styled.css(["color:", ";a{text-decoration:none;color:", ";}::before{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:3px;border-radius:11px;background-color:", ";}"], function (_ref9) {
    var theme = _ref9.theme;
    return theme.palette.text.primary;
  }, function (_ref10) {
    var theme = _ref10.theme;
    return theme.palette.text.primary;
  }, function (_ref11) {
    var theme = _ref11.theme;
    return theme.palette.primary.main;
  });
});
var SecondaryRight = styled__default['default'].div(_templateObject4$d(), function (_ref12) {
  var theme = _ref12.theme;
  return theme.breakpoints.down("sm");
});
var SecondaryHeader = function SecondaryHeader(_ref13) {
  var secondaryHideOnScroll = _ref13.secondaryHideOnScroll,
      secondaryNavItems = _ref13.secondaryNavItems,
      secondaryRenderRight = _ref13.secondaryRenderRight,
      props = _objectWithoutPropertiesLoose(_ref13, ["secondaryHideOnScroll", "secondaryNavItems", "secondaryRenderRight"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledHeader$2, props, /*#__PURE__*/React__default['default'].createElement(Hidden, {
    implementation: "js",
    smDown: true
  }, /*#__PURE__*/React__default['default'].createElement(SecondaryList, null, secondaryNavItems == null ? void 0 : secondaryNavItems.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement(SecondaryListItem, {
      active: item == null ? void 0 : item.active
    }, item.render());
  }))), /*#__PURE__*/React__default['default'].createElement(SecondaryRight, null, secondaryRenderRight()));
};
SecondaryHeader.propTypes = CreatorsHubHeaderPropTypes;
SecondaryHeader.defaultProps = CreatorsHubHeaderDefaultProps;

var CreatorsHubAuthLayoutPropTypes = {
  children: PropTypes__default['default'].node,
  headerProps: PropTypes__default['default'].shape(CreatorsHubHeaderPropTypes),
  loading: PropTypes__default['default'].bool
};
var CreatorsHubAuthLayoutDefaultProps = {};

function _templateObject3$n() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject3$n = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$v() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    flex: 1;\n  }\n"]);

  _templateObject2$v = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$18() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n  }\n\n  ", " {\n    padding: ", ";\n  }\n\n  ", "\n  ", "\n"]);

  _templateObject$18 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContainer$2 = styled__default['default'](MuiContainer__default['default']).attrs(function () {
  return {
    maxWidth: "lg"
  };
})(_templateObject$18(), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.down("sm");
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(0, 4);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var InnerContainer = styled__default['default'](MuiContainer__default['default']).attrs(function () {
  return {
    maxWidth: "xs"
  };
})(_templateObject2$v());
var Content$6 = styled__default['default'].div(_templateObject3$n());
var CreatorsHubAuthLayout = function CreatorsHubAuthLayout(_ref3) {
  var children = _ref3.children,
      headerProps = _ref3.headerProps,
      loading = _ref3.loading,
      props = _objectWithoutPropertiesLoose(_ref3, ["children", "headerProps", "loading"]);

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, loading && /*#__PURE__*/React__default['default'].createElement(PageLoading, {
    fullScreen: true
  }), /*#__PURE__*/React__default['default'].createElement(StyledContainer$2, props, /*#__PURE__*/React__default['default'].createElement(MainHeader, headerProps), /*#__PURE__*/React__default['default'].createElement(InnerContainer, null, /*#__PURE__*/React__default['default'].createElement(Content$6, null, children))));
};
CreatorsHubAuthLayout.propTypes = CreatorsHubAuthLayoutPropTypes;
CreatorsHubAuthLayout.defaultProps = CreatorsHubAuthLayoutDefaultProps;

var CreatorsHubMainLayoutPropTypes = {
  children: PropTypes__default['default'].node,
  footer: PropTypes__default['default'].bool,
  footerProps: PropTypes__default['default'].shape(CreatorsHubFooterPropTypes),
  headerProps: PropTypes__default['default'].shape(CreatorsHubHeaderPropTypes),
  loading: PropTypes__default['default'].bool,
  renderFooter: PropTypes__default['default'].func,
  renderHeader: PropTypes__default['default'].func,
  sidebar: PropTypes__default['default'].node
};
var CreatorsHubMainLayoutDefaultProps = {
  renderFooter: function renderFooter() {},
  renderHeader: function renderHeader() {}
};

function _templateObject5$b() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background-color: ", ";\n  padding: ", ";\n\n  ", " {\n    padding: ", ";\n  }\n"]);

  _templateObject5$b = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$e() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100%;\n  padding: ", ";\n\n  ", " {\n    min-height: 500px;\n    padding: ", ";\n  }\n"]);

  _templateObject4$e = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$o() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject3$o = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$w() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject2$w = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$19() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n\n  ", "\n\n  ", "\n\n  ", " {\n    padding: ", ";\n  }\n"]);

  _templateObject$19 = function _templateObject() {
    return data;
  };

  return data;
}
var PRIMARY_HEADER_HEIGHT = 80;
var PRIMARY_HEADER_HEIGHT_SM = 72;
var TOTAL_HEADER_HEIGHT = 160;
var TOTAL_HEADER_HEIGHT_SM = 136;
var FluidContainer = styled__default['default'](MuiContainer__default['default']).attrs(function () {
  return {
    maxWidth: false
  };
})(_templateObject$19(), function (_ref) {
  var zIndex = _ref.zIndex;
  return zIndex && "z-index: " + zIndex + ";";
}, function (_ref2) {
  var white = _ref2.white;
  return white && styled.css(["background-color:", ";"], function (_ref3) {
    var theme = _ref3.theme;
    return theme.palette.common.white;
  });
}, function (_ref4) {
  var offsetTop = _ref4.offsetTop,
      offsetTopSm = _ref4.offsetTopSm,
      sticky = _ref4.sticky;
  return sticky && styled.css(["position:fixed;top:", ";right:0;left:0;width:100%;", "{top:", ";}"], offsetTop ? offsetTop + "px" : 0, function (_ref5) {
    var theme = _ref5.theme;
    return theme.breakpoints.down("sm");
  }, offsetTopSm ? offsetTopSm + "px" : 0);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.breakpoints.down("sm");
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing(0, 4);
});
var Container$9 = styled__default['default'](MuiContainer__default['default']).attrs(function () {
  return {
    maxWidth: "lg"
  };
})(_templateObject2$w());
var Content$7 = styled__default['default'].div(_templateObject3$o(), function (_ref8) {
  var headerFixed = _ref8.headerFixed,
      theme = _ref8.theme;
  return headerFixed && styled.css(["padding-top:", ";", "{padding-top:", ";}"], theme.spacing(TOTAL_HEADER_HEIGHT_SM / 4), theme.breakpoints.up("md"), theme.spacing(TOTAL_HEADER_HEIGHT / 4));
});
var MainContent = styled__default['default'](Flex).attrs(function () {
  return {
    container: true,
    alignItems: "flex-start"
  };
})(_templateObject4$e(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing(10, 0);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.breakpoints.up("md");
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing(12, 0);
});
var Heading = styled__default['default'].div(_templateObject5$b(), function (_ref12) {
  var theme = _ref12.theme;
  return theme.palette.gray.semiLight;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.spacing(20, 0);
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.breakpoints.down("sm");
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.spacing(10, 0);
});
var CreatorsHubMainLayout = function CreatorsHubMainLayout(_ref16) {
  var children = _ref16.children,
      footer = _ref16.footer,
      footerProps = _ref16.footerProps,
      headerFixed = _ref16.headerFixed,
      headerProps = _ref16.headerProps,
      loading = _ref16.loading,
      renderFooter = _ref16.renderFooter,
      renderHeader = _ref16.renderHeader,
      renderHeading = _ref16.renderHeading,
      sidebar = _ref16.sidebar;

  var renderSecondaryHeader = function renderSecondaryHeader() {
    return /*#__PURE__*/React__default['default'].createElement(FluidContainer, {
      sticky: headerFixed,
      offsetTop: PRIMARY_HEADER_HEIGHT,
      offsetTopSm: PRIMARY_HEADER_HEIGHT_SM,
      white: true,
      zIndex: 98
    }, /*#__PURE__*/React__default['default'].createElement(Container$9, null, /*#__PURE__*/React__default['default'].createElement(SecondaryHeader, {
      fixed: headerProps.fixed,
      secondaryHasBorder: headerProps.secondaryHasBorder,
      secondaryHideOnScroll: headerProps.secondaryHideOnScroll,
      secondaryNavItems: headerProps.secondaryNavItems,
      secondaryRenderRight: headerProps.secondaryRenderRight
    })));
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, loading && /*#__PURE__*/React__default['default'].createElement(PageLoading, {
    fullScreen: true
  }), /*#__PURE__*/React__default['default'].createElement(FluidContainer, {
    sticky: headerFixed,
    white: true,
    zIndex: 99
  }, /*#__PURE__*/React__default['default'].createElement(Container$9, null, renderHeader() || /*#__PURE__*/React__default['default'].createElement(MainHeader, _extends({
    fixed: headerFixed,
    height: PRIMARY_HEADER_HEIGHT,
    heightSm: PRIMARY_HEADER_HEIGHT_SM
  }, headerProps)))), headerProps.secondary && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, headerProps.secondaryHideOnScroll ? /*#__PURE__*/React__default['default'].createElement(HideOnScroll, {
    threshold: PRIMARY_HEADER_HEIGHT_SM - 8
  }, renderSecondaryHeader()) : renderSecondaryHeader()), /*#__PURE__*/React__default['default'].createElement(Content$7, {
    headerFixed: headerFixed
  }, renderHeading && /*#__PURE__*/React__default['default'].createElement(Heading, null, renderHeading()), /*#__PURE__*/React__default['default'].createElement(FluidContainer, null, /*#__PURE__*/React__default['default'].createElement(Container$9, null, /*#__PURE__*/React__default['default'].createElement(MainContent, {
    spacing: sidebar ? 8 : false
  }, /*#__PURE__*/React__default['default'].createElement(Flex, {
    item: true,
    xs: 12,
    md: sidebar ? 10 : 12
  }, children), sidebar && /*#__PURE__*/React__default['default'].createElement(Flex, {
    item: true,
    xs: 12,
    md: 2
  }, sidebar))))), (footer || renderFooter) && /*#__PURE__*/React__default['default'].createElement(FluidContainer, {
    white: true
  }, /*#__PURE__*/React__default['default'].createElement(Container$9, null, renderFooter() || /*#__PURE__*/React__default['default'].createElement(CreatorsHubFooter, footerProps))));
};
CreatorsHubMainLayout.propTypes = CreatorsHubMainLayoutPropTypes;
CreatorsHubMainLayout.defaultProps = CreatorsHubMainLayoutDefaultProps;

var DashboardLayoutHeaderPropTypes = {
  backButtonOnClick: PropTypes__default['default'].func,
  headerLeft: PropTypes__default['default'].node,
  headerRight: PropTypes__default['default'].node,
  logoAction: PropTypes__default['default'].func,
  logoSrc: PropTypes__default['default'].string,
  renderLogo: PropTypes__default['default'].func
};
var DashboardLayoutHeaderDefaultProps = {
  renderLogo: function renderLogo() {}
};

function _templateObject3$p() {
  var data = _taggedTemplateLiteralLoose(["\n  ", " {\n    order: 2;\n  }\n"]);

  _templateObject3$p = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$x() {
  var data = _taggedTemplateLiteralLoose(["\n  ", " {\n    order: 1;\n  }\n\n  img {\n    width: 48px;\n    height: 48px;\n  }\n"]);

  _templateObject2$x = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1a() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 0 120px;\n  ", " {\n    flex: 0 0 96px;\n  }\n"]);

  _templateObject$1a = function _templateObject() {
    return data;
  };

  return data;
}
var StyledHeader$3 = styled__default['default'](Flex).attrs(function () {
  return {
    container: true,
    alignItems: "center",
    justify: "space-between"
  };
})(_templateObject$1a(), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.down("md");
});
var LogoContainer$1 = styled__default['default'](Flex).attrs(function () {
  return {
    container: true,
    item: true,
    md: 2,
    xs: 4,
    justify: "center"
  };
})(_templateObject2$x(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.down("sm");
});
var HeaderRight = styled__default['default'](Flex).attrs(function () {
  return {
    container: true,
    item: true,
    md: 2,
    xs: 4,
    justify: "flex-end"
  };
})(_templateObject3$p(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.breakpoints.down("sm");
});
var DashboardLayoutHeader = function DashboardLayoutHeader(_ref4) {
  var backButtonOnClick = _ref4.backButtonOnClick,
      headerLeft = _ref4.headerLeft,
      headerRight = _ref4.headerRight,
      logoAction = _ref4.logoAction,
      logoSrc = _ref4.logoSrc,
      renderLogo = _ref4.renderLogo,
      props = _objectWithoutPropertiesLoose(_ref4, ["backButtonOnClick", "headerLeft", "headerRight", "logoAction", "logoSrc", "renderLogo"]);

  var backButton = /*#__PURE__*/React__default['default'].createElement(TextButton, {
    color: "secondary",
    onClick: backButtonOnClick,
    px: 0,
    size: "sm"
  }, "Back");
  return /*#__PURE__*/React__default['default'].createElement(StyledHeader$3, props, /*#__PURE__*/React__default['default'].createElement(LogoContainer$1, null, renderLogo() || /*#__PURE__*/React__default['default'].createElement(Image, {
    alt: "Logo",
    onClick: logoAction,
    src: logoSrc || img$2
  })), /*#__PURE__*/React__default['default'].createElement(Flex, {
    item: true,
    md: 6,
    xs: 4
  }, headerLeft || backButton), /*#__PURE__*/React__default['default'].createElement(HeaderRight, null, headerRight), /*#__PURE__*/React__default['default'].createElement(Hidden, {
    smDown: true,
    implementation: "js"
  }, /*#__PURE__*/React__default['default'].createElement(Flex, {
    item: true,
    md: 2
  })));
};
DashboardLayoutHeader.propTypes = DashboardLayoutHeaderPropTypes;
DashboardLayoutHeader.defaultProps = DashboardLayoutHeaderDefaultProps;

var DashboardLayoutPropTypes = {
  children: PropTypes__default['default'].node.isRequired,
  content: PropTypes__default['default'].node.isRequired,
  headerBackButtonOnClick: PropTypes__default['default'].func,
  headerLeft: PropTypes__default['default'].node,
  headerLogoAction: PropTypes__default['default'].func,
  headerLogoSrc: PropTypes__default['default'].string,
  headerRight: PropTypes__default['default'].node,
  headerRenderLogo: PropTypes__default['default'].func,
  loading: PropTypes__default['default'].bool,
  navigationItems: PropTypes__default['default'].array
};
var DashboardLayoutDefaultProps = {
  navigationItems: []
};

function _templateObject4$f() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    justify-content: center;\n    align-items: center;\n    min-width: 40px;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-color: #fff;\n    margin-right: ", ";\n    svg {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject4$f = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$q() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    box-shadow: initial;\n    max-height: unset;\n    height: 100%;\n  }\n"]);

  _templateObject3$q = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$y() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    color: ", ";\n    flex-direction: row;\n    margin-top: ", ";\n    height: 40px;\n    padding: 0;\n    cursor: pointer;\n\n    span {\n      font-size: 14px;\n    }\n\n    .MuiListItemText-root {\n      margin: 0;\n      .MuiTypography-root {\n        font-size: 16px;\n      }\n    }\n\n    &.Mui-selected {\n      background: none;\n      color: ", ";\n\n      .MuiTypography-root {\n        font-weight: 600;\n      }\n\n      svg {\n        color: ", ";\n      }\n    }\n\n    &.MuiListItem-root:hover {\n      color: ", ";\n      background: none;\n\n      svg {\n        color: ", ";\n      }\n    }\n\n    &:first-child {\n      margin-top: 0;\n    }\n  }\n"]);

  _templateObject2$y = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1b() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    color: ", ";\n    display: flex;\n    padding: 0;\n    margin: 0;\n    padding-left: ", ";\n    margin-bottom: 2px;\n    cursor: pointer;\n\n    &.Mui-selected {\n      background: none;\n      color: ", ";\n\n      span {\n        font-weight: bold;\n      }\n\n      &:hover {\n        background: inherit;\n      }\n    }\n\n    div {\n      margin: 0;\n      span {\n        font-size: 14px;\n      }\n    }\n  }\n"]);

  _templateObject$1b = function _templateObject() {
    return data;
  };

  return data;
}
var NestedListItem = styled__default['default'](core.ListItem)(_templateObject$1b(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.text.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(12);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.text.primary;
});
var ImprovedListItem = styled__default['default'](core.ListItem)(_templateObject2$y(), function (_ref4) {
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
var ImprovedList = styled__default['default'](core.List)(_templateObject3$q());
var ImprovedListItemIcon = styled__default['default'](core.ListItemIcon)(_templateObject4$f(), function (_ref10) {
  var theme = _ref10.theme;
  return theme.spacing(2);
}, function (_ref11) {
  var thm = _ref11.theme;
  return thm.palette.text.secondary;
});
var NavigationMenu = function NavigationMenu(_ref12) {
  var items = _ref12.items;
  return /*#__PURE__*/React__default['default'].createElement(ImprovedList, {
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
      return /*#__PURE__*/React__default['default'].createElement(ImprovedListItem, _extends({
        component: component,
        selected: selected
      }, dataCy ? {
        "data-cy": dataCy
      } : {}, props), /*#__PURE__*/React__default['default'].createElement(ImprovedListItemIcon, null, /*#__PURE__*/React__default['default'].createElement(Icon, {
        icon: icon
      })), /*#__PURE__*/React__default['default'].createElement(core.ListItemText, {
        primary: title
      }), additional);
    };

    var nestedItem = function nestedItem(n) {
      return /*#__PURE__*/React__default['default'].createElement(NestedListItem, _extends({
        component: n.component || "a",
        key: n.title
      }, n), /*#__PURE__*/React__default['default'].createElement(core.ListItemText, {
        primary: n.title
      }));
    };

    var listItem = function listItem() {
      return Wrapper ? /*#__PURE__*/React__default['default'].createElement(Wrapper, null, item()) : item();
    };

    var nestedListItem = function nestedListItem(_ref14) {
      var WrapperComponent = _ref14.WrapperComponent,
          nested = _objectWithoutPropertiesLoose(_ref14, ["WrapperComponent"]);

      return WrapperComponent ? /*#__PURE__*/React__default['default'].createElement(WrapperComponent, null, nestedItem(nested)) : nestedItem(nested);
    };

    return /*#__PURE__*/React__default['default'].createElement(React.Fragment, {
      key: title
    }, listItem(), showNested && nestedItems.map(function (n) {
      return nestedListItem(n);
    }));
  }));
};
NavigationMenu.propTypes = {
  items: PropTypes__default['default'].arrayOf(PropTypes__default['default'].any).isRequired
};

var UserMenu = function UserMenu(_ref) {
  var menuItems = _ref.menuItems,
      _onClick = _ref.onClick,
      props = _objectWithoutPropertiesLoose(_ref, ["menuItems", "onClick"]);

  var _useState = React.useState(null),
      anchorEl = _useState[0],
      setAnchorEl = _useState[1];

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(TextButton, _extends({
    block: true,
    content: "John Seller",
    color: "subtle",
    endIcon: "chevron-down",
    startIcon: "user-circle",
    onClick: function onClick(_ref2) {
      var currentTarget = _ref2.currentTarget;
      return setAnchorEl(currentTarget);
    },
    size: "sm"
  }, props)), /*#__PURE__*/React__default['default'].createElement(Dropdown, {
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
  menuItems: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape)
};
UserMenu.defaultProps = {
  menuItems: [{
    value: "/dashboard/profile",
    label: "Profile"
  }]
};

var DashboardLayoutNavigationPropTypes = {
  navigationItems: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape).isRequired,
  userMenuItems: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape)
};
var DashboardLayoutNavigationDefaultProps = {
  userMenuItems: []
};

function _templateObject4$g() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n  height: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  background-color: ", ";\n"]);

  _templateObject4$g = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$r() {
  var data = _taggedTemplateLiteralLoose(["\n  color: #fff;\n"]);

  _templateObject3$r = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$z() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    position: fixed;\n    bottom: ", ";\n    right: ", ";\n    z-index: 10;\n  }\n"]);

  _templateObject2$z = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1c() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: ", ";\n  height: 100%;\n"]);

  _templateObject$1c = function _templateObject() {
    return data;
  };

  return data;
}
var MainNav = styled__default['default'].div(_templateObject$1c(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(0, 4, 0, 4);
});
var StyledFab = styled__default['default'](Fab__default['default']).attrs(function () {
  return {
    color: "primary",
    size: "small"
  };
})(_templateObject2$z(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(4);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(4);
});
var NavIcon = styled__default['default'](Icon).attrs(function () {
  return {
    icon: "bars",
    size: "lg"
  };
})(_templateObject3$r());
var DrawerWrapper = styled__default['default'].div(_templateObject4$g(), function (_ref4) {
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

  var _useState = React.useState(false),
      mobileOpen = _useState[0],
      setMobileOpen = _useState[1];

  var renderMainNav = function renderMainNav() {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(NavigationMenu, {
      items: navigationItems
    }), userMenuItems.length > 0 && /*#__PURE__*/React__default['default'].createElement(UserMenu, {
      menuItems: userMenuItems,
      onClick: userMenuOnClick
    }));
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Hidden, {
    smUp: true,
    implementation: "js"
  }, /*#__PURE__*/React__default['default'].createElement(StyledFab, {
    "aria-label": "toggleNavigation",
    onClick: function onClick() {
      return setMobileOpen(true);
    }
  }, /*#__PURE__*/React__default['default'].createElement(NavIcon, null))), /*#__PURE__*/React__default['default'].createElement(Hidden, {
    smUp: true,
    implementation: "js"
  }, /*#__PURE__*/React__default['default'].createElement(Drawer__default['default'], {
    variant: "temporary",
    anchor: "left",
    open: mobileOpen,
    onClose: function onClose() {
      return setMobileOpen(false);
    },
    ModalProps: {
      keepMounted: true
    }
  }, /*#__PURE__*/React__default['default'].createElement(DrawerWrapper, null, renderMainNav()))), /*#__PURE__*/React__default['default'].createElement(Hidden, {
    smDown: true,
    implementation: "js"
  }, /*#__PURE__*/React__default['default'].createElement(MainNav, null, renderMainNav())));
};
DashboardLayoutNavigation.propTypes = DashboardLayoutNavigationPropTypes;
DashboardLayoutNavigation.defaultProps = DashboardLayoutNavigationDefaultProps;

var DashboardLayoutFooterPropTypes = {
  content: PropTypes__default['default'].node
};

function _templateObject$1d() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  height: 70px;\n  width: 100%;\n  text-align: center;\n  padding-top: ", ";\n"]);

  _templateObject$1d = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFooter = styled__default['default'].div(_templateObject$1d(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var DashboardLayoutFooter = function DashboardLayoutFooter(_ref2) {
  var content = _ref2.content,
      props = _objectWithoutPropertiesLoose(_ref2, ["content"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledFooter, props, content);
};
DashboardLayoutFooter.propTypes = DashboardLayoutFooterPropTypes;

function _templateObject4$h() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n\n  ", " {\n    padding: ", ";\n    height: 100%;\n  }\n"]);

  _templateObject4$h = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$s() {
  var data = _taggedTemplateLiteralLoose(["\n  ", " {\n    height: 100%;\n  }\n\n  ", " {\n    order: 2;\n  }\n"]);

  _templateObject3$s = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$A() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  width: 100%;\n"]);

  _templateObject2$A = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1e() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100%;\n"]);

  _templateObject$1e = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContainer$3 = styled__default['default'](MuiContainer__default['default']).attrs(function () {
  return {
    maxWidth: "lg"
  };
})(_templateObject$1e());
var Content$8 = styled__default['default'].div(_templateObject2$A());
var NavigationContainer = styled__default['default'](Flex).attrs(function () {
  return {
    item: true,
    md: 2,
    xs: 4
  };
})(_templateObject3$s(), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.up("md");
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.down("sm");
});
var SidebarContainer = styled__default['default'](Flex).attrs(function () {
  return {
    item: true,
    md: 2,
    xs: 12
  };
})(_templateObject4$h(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(8, 0);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakpoints.up("md");
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(0, 4);
});
var poweredBy = /*#__PURE__*/React__default['default'].createElement(Text, {
  color: "textSecondary",
  fontStyle: "italic"
}, "Powered by", /*#__PURE__*/React__default['default'].createElement(Text, {
  color: "textPrimary",
  fontWeight: "bold",
  dInline: true
}, " ", "license.rocks"));
var DashboardLayout = function DashboardLayout(_ref6) {
  var children = _ref6.children,
      content = _ref6.content,
      footerContent = _ref6.footerContent,
      headerLeft = _ref6.headerLeft,
      headerBackButtonOnClick = _ref6.headerBackButtonOnClick,
      headerLogoAction = _ref6.headerLogoAction,
      headerLogoSrc = _ref6.headerLogoSrc,
      headerRight = _ref6.headerRight,
      headerRenderLogo = _ref6.headerRenderLogo,
      navigationItems = _ref6.navigationItems,
      loading = _ref6.loading,
      sidebar = _ref6.sidebar,
      userMenuItems = _ref6.userMenuItems,
      userMenuOnClick = _ref6.userMenuOnClick,
      props = _objectWithoutPropertiesLoose(_ref6, ["children", "content", "footerContent", "headerLeft", "headerBackButtonOnClick", "headerLogoAction", "headerLogoSrc", "headerRight", "headerRenderLogo", "navigationItems", "loading", "sidebar", "userMenuItems", "userMenuOnClick"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledContainer$3, props, loading && /*#__PURE__*/React__default['default'].createElement(PageLoading, {
    fullScreen: true
  }), /*#__PURE__*/React__default['default'].createElement(Flex, {
    container: true,
    direction: "column",
    alignItems: "flex-start",
    justify: "flex-start",
    xs: 12,
    h100: true,
    wrap: "nowrap"
  }, /*#__PURE__*/React__default['default'].createElement(DashboardLayoutHeader, {
    backButtonOnClick: headerBackButtonOnClick,
    headerLeft: headerLeft,
    headerRight: headerRight,
    logoAction: headerLogoAction,
    logoSrc: headerLogoSrc,
    renderLogo: headerRenderLogo
  }), /*#__PURE__*/React__default['default'].createElement(Flex, {
    item: true,
    container: true,
    alignItems: "flex-start",
    justify: "flex-start",
    xs: 12
  }, /*#__PURE__*/React__default['default'].createElement(NavigationContainer, null, /*#__PURE__*/React__default['default'].createElement(DashboardLayoutNavigation, {
    navigationItems: navigationItems,
    userMenuItems: userMenuItems,
    userMenuOnClick: userMenuOnClick
  })), /*#__PURE__*/React__default['default'].createElement(Flex, {
    item: true,
    md: 8,
    xs: 12
  }, /*#__PURE__*/React__default['default'].createElement(Content$8, null, children || content)), /*#__PURE__*/React__default['default'].createElement(SidebarContainer, null, sidebar)), /*#__PURE__*/React__default['default'].createElement(Flex, {
    container: true,
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default['default'].createElement(DashboardLayoutFooter, {
    content: footerContent || poweredBy
  }))));
};
DashboardLayout.propTypes = DashboardLayoutPropTypes;
DashboardLayout.defaultProps = DashboardLayoutDefaultProps;

var ExplorerLayoutFooterPropTypes = {
  children: PropTypes__default['default'].node
};

function _templateObject$1f() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  height: 80px;\n  text-align: center;\n  padding-top: ", ";\n"]);

  _templateObject$1f = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFooter$1 = styled__default['default'].div(_templateObject$1f(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var ExplorerLayoutFooter = function ExplorerLayoutFooter(_ref2) {
  var action = _ref2.action,
      props = _objectWithoutPropertiesLoose(_ref2, ["action"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledFooter$1, props);
};
ExplorerLayoutFooter.propTypes = ExplorerLayoutFooterPropTypes;

const img$3 = "data:image/svg+xml,%3csvg width='194' height='60' viewBox='0 0 194 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M86.0961 52.0601C88.0083 52.0601 89.3892 53.5534 89.3892 55.2955C89.3892 57.1088 88.0083 58.4599 86.0961 58.4599C84.184 58.4599 82.8384 57.1088 82.8384 55.2955C82.8384 53.5534 84.184 52.0601 86.0961 52.0601Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M103.965 40.1848C104.461 40.1848 104.815 40.2204 105.24 40.327L104.992 46.0158H103.965C99.9993 46.0158 97.8393 48.0779 97.8393 52.7V58.2821H92.1737V40.4337H97.8393V43.8469C99.114 41.7136 101.062 40.1848 103.965 40.1848Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M120.118 33.9272C127.2 33.9272 132.76 39.4382 132.76 46.4069C132.76 53.34 127.2 58.8155 120.118 58.8155C113.037 58.8155 107.477 53.34 107.477 46.4069C107.477 39.4382 113.037 33.9272 120.118 33.9272ZM120.118 53.4467C123.978 53.4467 126.917 50.4601 126.917 46.4069C126.917 42.3181 123.978 39.2959 120.118 39.2959C116.259 39.2959 113.32 42.3181 113.32 46.4069C113.32 50.4601 116.259 53.4467 120.118 53.4467Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M144.587 53.8378C146.392 53.8378 147.844 52.8778 148.446 50.709L153.651 51.8467C152.766 56.0777 149.013 58.8154 144.587 58.8154C139.275 58.8154 134.884 55.0111 134.884 49.3579C134.884 43.7403 139.275 39.9003 144.587 39.9003C148.907 39.9003 152.66 42.5669 153.651 46.7624L148.34 48.0424C147.844 45.8735 146.392 44.878 144.587 44.878C142.037 44.878 140.337 46.7624 140.337 49.3579C140.337 51.9889 142.037 53.8378 144.587 53.8378Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M175.992 58.2821H168.733L162.961 51.8467H161.934V58.2821H156.269V32.6828H161.934V46.5135H162.713L168.343 40.4337H175.177L167.387 48.9312L175.992 58.2821Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M176.087 53.6483L181.611 52.5105C181.859 54.0394 183.24 54.6083 184.762 54.6083C186.25 54.6083 187.064 53.9683 187.064 53.1861C187.064 52.5817 186.604 52.1194 185.294 51.8706L181.682 51.1595C178.389 50.555 176.512 48.7773 176.512 45.9685C176.512 42.3064 179.663 39.9242 184.16 39.9242C188.587 39.9242 191.526 41.9508 192.234 45.0441L187.064 46.0752C186.887 44.973 185.825 43.9774 184.09 43.9774C182.567 43.9774 182.071 44.7241 182.071 45.3641C182.071 45.8618 182.284 46.3596 183.417 46.6085L187.595 47.4618C190.959 48.1729 192.517 50.1995 192.517 52.8305C192.517 56.7771 189.118 58.8393 184.444 58.8393C180.265 58.8393 176.689 57.3104 176.087 53.6483Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M79.4906 27.4174H73.825V1.81807H79.4906V27.4174Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M88.9289 27.4174H83.2634V9.569H88.9289V27.4174Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M86.0961 1.07143C88.0083 1.07143 89.3892 2.56472 89.3892 4.3069C89.3892 6.12019 88.0083 7.47127 86.0961 7.47127C84.184 7.47127 82.8384 6.12019 82.8384 4.3069C82.8384 2.56472 84.184 1.07143 86.0961 1.07143Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M101.853 22.9731C103.659 22.9731 105.111 22.0131 105.713 19.8443L110.918 20.982C110.033 25.213 106.28 27.9507 101.853 27.9507C96.542 27.9507 92.1512 24.1464 92.1512 18.4932C92.1512 12.8756 96.542 9.03566 101.853 9.03566C106.173 9.03566 109.927 11.7023 110.918 15.8977L105.607 17.1777C105.111 15.0088 103.659 14.0133 101.853 14.0133C99.3039 14.0133 97.6043 15.8977 97.6043 18.4932C97.6043 21.1242 99.3039 22.9731 101.853 22.9731Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M131.601 18.4932V19.9509H118.57C119.03 22.0842 120.482 23.3997 122.394 23.3997C123.704 23.3997 125.227 23.0798 126.183 21.3376L131.211 22.3687C129.689 26.1375 126.466 27.9507 122.394 27.9507C117.26 27.9507 113.011 24.1464 113.011 18.4932C113.011 12.8756 117.26 9.03566 122.43 9.03566C127.458 9.03566 131.495 12.6622 131.601 18.4932ZM122.43 13.6578C120.836 13.6578 119.207 14.6533 118.676 16.4666H126.006C125.475 14.5466 124.059 13.6578 122.43 13.6578Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M145.659 9.03566C149.801 9.03566 152.563 11.9867 152.563 16.4666V27.4174H146.933V17.6754C146.933 15.5777 145.694 14.1555 143.888 14.1555C141.657 14.1555 140.205 15.6844 140.205 19.1332V27.4174H134.54V9.56898H140.205V11.2756C141.551 9.85342 143.428 9.03566 145.659 9.03566Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M155.219 22.7598L160.743 21.622C160.991 23.1509 162.372 23.7197 163.895 23.7197C165.382 23.7197 166.196 23.0798 166.196 22.2975C166.196 21.6931 165.736 21.2309 164.426 20.982L160.814 20.2709C157.521 19.6665 155.644 17.8888 155.644 15.08C155.644 11.4178 158.796 9.03566 163.293 9.03566C167.719 9.03566 170.658 11.0623 171.366 14.1555L166.196 15.1866C166.019 14.0844 164.957 13.0889 163.222 13.0889C161.699 13.0889 161.203 13.8355 161.203 14.4755C161.203 14.9733 161.416 15.4711 162.549 15.7199L166.727 16.5732C170.091 17.2843 171.649 19.311 171.649 21.942C171.649 25.8886 168.25 27.9507 163.576 27.9507C159.397 27.9507 155.821 26.4219 155.219 22.7598Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M192.403 18.4932V19.9509H179.372C179.832 22.0842 181.284 23.3997 183.196 23.3997C184.506 23.3997 186.029 23.0798 186.985 21.3376L192.013 22.3687C190.49 26.1375 187.268 27.9507 183.196 27.9507C178.062 27.9507 173.812 24.1464 173.812 18.4932C173.812 12.8756 178.062 9.03566 183.231 9.03566C188.26 9.03566 192.296 12.6622 192.403 18.4932ZM183.231 13.6578C181.638 13.6578 180.009 14.6533 179.478 16.4666H186.808C186.277 14.5466 184.86 13.6578 183.231 13.6578Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.58723 46.6197C11.4115 46.6197 14.1734 49.6063 14.1734 53.0907C14.1734 56.7172 11.4115 59.4194 7.58723 59.4194C3.76298 59.4194 1.07184 56.7172 1.07184 53.0907C1.07184 49.6063 3.76298 46.6197 7.58723 46.6197ZM38.7574 9.64285C52.9213 9.64285 64.04 20.6648 64.04 34.6022C64.04 48.4685 52.9213 59.4194 38.7574 59.4194C24.5936 59.4194 13.4749 48.4685 13.4749 34.6022C13.4749 20.6648 24.5936 9.64285 38.7574 9.64285ZM38.7574 48.6819C46.4768 48.6819 52.3548 42.7087 52.3548 34.6022C52.3548 26.4247 46.4768 20.3804 38.7574 20.3804C31.0381 20.3804 25.1601 26.4247 25.1601 34.6022C25.1601 42.7087 31.0381 48.6819 38.7574 48.6819Z' fill='%23AC00FC'/%3e%3c/svg%3e";

var ExplorerLayoutHeaderPropTypes = {
  headerRight: PropTypes__default['default'].node,
  logoAction: PropTypes__default['default'].func
};

function _templateObject2$B() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 155px;\n  ", " {\n    width: 103px;\n  }\n"]);

  _templateObject2$B = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1g() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 128px;\n  ", " {\n    height: 96px;\n  }\n"]);

  _templateObject$1g = function _templateObject() {
    return data;
  };

  return data;
}
var StyledHeader$4 = styled__default['default'](Grid__default['default']).attrs(function () {
  return {
    container: true,
    alignItems: "center"
  };
})(_templateObject$1g(), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.down("md");
});
var StyledLogo$1 = styled__default['default'](Image).attrs(function () {
  return {
    alt: "Logo",
    src: img$3
  };
})(_templateObject2$B(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.down("md");
});
var ExplorerLayoutHeader = function ExplorerLayoutHeader(_ref3) {
  var headerRight = _ref3.headerRight,
      logoAction = _ref3.logoAction,
      props = _objectWithoutPropertiesLoose(_ref3, ["headerRight", "logoAction"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledHeader$4, props, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    lg: 9,
    xs: 6
  }, /*#__PURE__*/React__default['default'].createElement(StyledLogo$1, {
    onClick: logoAction
  })), /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    container: true,
    item: true,
    justify: "flex-end",
    lg: 3,
    xs: 6
  }, headerRight));
};
ExplorerLayoutHeader.propTypes = ExplorerLayoutHeaderPropTypes;

var ExplorerLayoutPropTypes = {
  ads: PropTypes__default['default'].node,
  content: PropTypes__default['default'].node.isRequired,
  extraContent: PropTypes__default['default'].node,
  extraSidebar: PropTypes__default['default'].node,
  footerContent: PropTypes__default['default'].node,
  headerLogoAction: PropTypes__default['default'].func,
  headerRight: PropTypes__default['default'].node,
  loading: PropTypes__default['default'].bool,
  sidebar: PropTypes__default['default'].node
};

function _templateObject$1h() {
  var data = _taggedTemplateLiteralLoose(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n  ", " {\n    padding-top: ", ";\n  }\n  ", " {\n    padding-right: ", ";\n  }\n"]);

  _templateObject$1h = function _templateObject() {
    return data;
  };

  return data;
}
var Content$9 = styled__default['default'](Grid__default['default']).attrs(function () {
  return {
    container: true
  };
})(_templateObject$1h(), function (_ref) {
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
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.breakpoints.up("md");
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(6);
});
var poweredBy$1 = /*#__PURE__*/React__default['default'].createElement(Text, {
  color: "textSecondary",
  fontStyle: "italic"
}, "Powered by", /*#__PURE__*/React__default['default'].createElement(Text, {
  color: "textPrimary",
  fontWeight: "bold"
}, " ", "license.rocks"));
var ExplorerLayout = function ExplorerLayout(_ref7) {
  var ads = _ref7.ads,
      content = _ref7.content,
      extraContent = _ref7.extraContent,
      extraSidebar = _ref7.extraSidebar,
      footerContent = _ref7.footerContent,
      headerLogoAction = _ref7.headerLogoAction,
      headerRight = _ref7.headerRight,
      loading = _ref7.loading,
      sidebar = _ref7.sidebar,
      props = _objectWithoutPropertiesLoose(_ref7, ["ads", "content", "extraContent", "extraSidebar", "footerContent", "headerLogoAction", "headerRight", "loading", "sidebar"]);

  if (loading) return /*#__PURE__*/React__default['default'].createElement(PageLoading, {
    fullScreen: true
  });
  return /*#__PURE__*/React__default['default'].createElement(MuiContainer__default['default'], _extends({
    maxWidth: "lg"
  }, props), /*#__PURE__*/React__default['default'].createElement(ExplorerLayoutHeader, {
    logoAction: headerLogoAction,
    headerRight: headerRight
  }), /*#__PURE__*/React__default['default'].createElement(Content$9, null, /*#__PURE__*/React__default['default'].createElement(Hidden, {
    mdDown: true
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    lg: 9
  }, content, extraContent), /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    lg: 3
  }, sidebar, extraSidebar, ads)), /*#__PURE__*/React__default['default'].createElement(Hidden, {
    lgUp: true
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    xs: 12
  }, content), /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    container: true,
    alignItems: "center",
    justify: "space-between",
    spacing: 4
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    md: 6,
    xs: 12
  }, sidebar), /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    md: 6,
    xs: 12
  }, extraSidebar)), /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    item: true,
    xs: 12
  }, extraContent, ads))), footerContent && /*#__PURE__*/React__default['default'].createElement(ExplorerLayoutFooter, null, footerContent || poweredBy$1));
};
ExplorerLayout.propTypes = ExplorerLayoutPropTypes;
ExplorerLayout.defaultProps = {
  footerContent: poweredBy$1
};

var LinkPropTypes = {
  block: PropTypes__default['default'].bool,
  children: PropTypes__default['default'].node.isRequired,
  className: PropTypes__default['default'].string,
  Component: PropTypes__default['default'].element.isRequired,
  href: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].object]).isRequired,
  passHref: PropTypes__default['default'].bool
};
var LinkDefaultProps = {
  passHref: true
};

function _templateObject$1i() {
  var data = _taggedTemplateLiteralLoose(["\n  color: initial;\n  text-decoration: none;\n\n  ", "\n\n  ", "\n  ", "\n"]);

  _templateObject$1i = function _templateObject() {
    return data;
  };

  return data;
}
var StyledLink = styled__default['default'].a(_templateObject$1i(), function (_ref) {
  var block = _ref.block;
  return block && "display: block;";
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Link$1 = function Link(_ref2) {
  var block = _ref2.block,
      className = _ref2.className,
      children = _ref2.children,
      Component = _ref2.Component,
      href = _ref2.href,
      props = _objectWithoutPropertiesLoose(_ref2, ["block", "className", "children", "Component", "href"]);

  return /*#__PURE__*/React__default['default'].createElement(Component, _extends({
    href: href
  }, props), /*#__PURE__*/React__default['default'].createElement(StyledLink, {
    block: block,
    className: className,
    href: (href == null ? void 0 : href.pathname) || href
  }, children));
};
Link$1.propTypes = LinkPropTypes;
Link$1.defaultProps = LinkDefaultProps;

var MarketPlaceItemPropTypes = {
  action: PropTypes__default['default'].func,
  actionTitle: PropTypes__default['default'].string,
  badges: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    label: PropTypes__default['default'].string,
    color: PropTypes__default['default'].string
  })),
  coverSrc: PropTypes__default['default'].string,
  coverPlaceholderSrc: PropTypes__default['default'].string,
  details: PropTypes__default['default'].array,
  hoverEffect: PropTypes__default['default'].bool,
  iconColor: PropTypes__default['default'].string,
  iconName: PropTypes__default['default'].string,
  iconPrefix: PropTypes__default['default'].string,
  megaTitle: PropTypes__default['default'].string,
  price: PropTypes__default['default'].string,
  priceLabel: PropTypes__default['default'].string,
  subTitle: PropTypes__default['default'].string,
  title: PropTypes__default['default'].string,
  type: PropTypes__default['default'].oneOf("legacy", "modern", "modernHorizontal")
};
var MarketPlaceItemDefaultProps = {
  actionTitle: "More info",
  badges: [],
  details: [],
  hoverEffect: true,
  type: "modern"
};

const img$4 = "data:image/svg+xml,%3csvg width='92' height='109' viewBox='0 0 92 109' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M32 2.00015C36 3.00015 36 10.0002 36 10.0002C36 10.0002 37.2536 109.627 34 108C33.7765 107.888 22.7735 108 22 108C14 108 22 3.00015 22 3.00015C24 2.00015 28 1.00015 32 2.00015Z' fill='white' stroke='%23F0F0F4' stroke-width='1.5' stroke-linejoin='round'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M27 8.11923C27 4.39928 30.3502 1.57581 34.0163 2.20593L84.3551 10.8579C88.1942 11.5178 91 14.8469 91 18.7423V100C91 104.418 87.4183 108 83 108H33C29.6863 108 27 105.314 27 102V8.11923Z' fill='white' stroke='%23F0F0F4' stroke-width='1.5' stroke-linejoin='round'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M27 10.0534C27 5.75785 22.6182 2.85385 18.6622 4.52755L5.88288 9.93417C2.92312 11.1864 1 14.0882 1 17.3019V100C1 104.418 4.58172 108 9 108H21C24.3137 108 27 105.314 27 102V10.0534Z' fill='white' stroke='%23F0F0F4' stroke-width='1.5' stroke-linejoin='round'/%3e%3c/svg%3e";

function _templateObject2$C() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: 24px;\n  margin-left: ", ";\n"]);

  _templateObject2$C = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1j() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-top: -", ";\n  margin-bottom: ", ";\n  position: relative;\n  background-image: url(\"", "\");\n  background-size: 90px 108px;\n  background-repeat: no-repeat;\n  width: 90px;\n  height: 108px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject$1j = function _templateObject() {
    return data;
  };

  return data;
}
var LicenseBoxWrapper = styled__default['default'].div(_templateObject$1j(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(10);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2);
}, "" + img$4);
var StyledIcon$3 = styled__default['default'](Icon)(_templateObject2$C(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(6);
});
var LicenseBox = function LicenseBox(_ref4) {
  var iconName = _ref4.iconName,
      iconPrefix = _ref4.iconPrefix,
      iconColor = _ref4.iconColor,
      props = _objectWithoutPropertiesLoose(_ref4, ["iconName", "iconPrefix", "iconColor"]);

  return /*#__PURE__*/React__default['default'].createElement(LicenseBoxWrapper, props, /*#__PURE__*/React__default['default'].createElement(StyledIcon$3, {
    color: iconColor,
    icon: iconName,
    prefix: iconPrefix
  }));
};
LicenseBox.propTypes = {
  iconName: PropTypes__default['default'].string,
  iconPrefix: PropTypes__default['default'].string,
  iconColor: PropTypes__default['default'].string
};
LicenseBox.defaultProps = {
  iconName: "th-large",
  iconPrefix: "fas",
  iconColor: "primary"
};

function _templateObject2$D() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  padding: ", ";\n  box-sizing: border-box;\n  ", "\n"]);

  _templateObject2$D = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1k() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: 8px;\n  overflow: initial;\n  min-height: 240px;\n  text-align: center;\n  margin-top: ", ";\n  width: 100%;\n"]);

  _templateObject$1k = function _templateObject() {
    return data;
  };

  return data;
}
var StyledMarketPlaceItem = styled__default['default'](BoxBase)(_templateObject$1k(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(10);
});
var Content$a = styled__default['default'].div(_templateObject2$D(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2, 4, 4, 4);
}, function (_ref3) {
  var initialTextAlign = _ref3.initialTextAlign;
  return initialTextAlign && "text-align: initial;";
});
var LegacyItem = function LegacyItem(_ref4) {
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

  var actionButton = /*#__PURE__*/React__default['default'].createElement(Button, {
    block: true,
    content: actionTitle,
    color: "subtle",
    onClick: action
  });
  return /*#__PURE__*/React__default['default'].createElement(StyledMarketPlaceItem, _extends({
    "data-cy": dataCy
  }, props), /*#__PURE__*/React__default['default'].createElement(LicenseBox, {
    iconName: iconName,
    iconPrefix: iconPrefix,
    iconColor: iconColor
  }), /*#__PURE__*/React__default['default'].createElement(Content$a, null, /*#__PURE__*/React__default['default'].createElement(Text, {
    content: megaTitle,
    color: "textSecondary",
    noWrap: true
  }), /*#__PURE__*/React__default['default'].createElement(H3, {
    content: title,
    noWrap: true
  }), /*#__PURE__*/React__default['default'].createElement(Text, {
    content: subTitle,
    color: "textSecondary",
    fontSize: "sm",
    fontStyle: "italic",
    noWrap: true
  })), /*#__PURE__*/React__default['default'].createElement(Divider, null), /*#__PURE__*/React__default['default'].createElement(Content$a, {
    initialTextAlign: true
  }, /*#__PURE__*/React__default['default'].createElement(DetailsTable, {
    justifyBetween: true,
    rows: details
  }), ActionWrapper ? /*#__PURE__*/React__default['default'].createElement(ActionWrapper, null, actionButton) : actionButton));
};
LegacyItem.propTypes = MarketPlaceItemPropTypes;
LegacyItem.defaultProps = MarketPlaceItemDefaultProps;

function _templateObject$1l() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  object-fit: contain;\n  z-index: 2;\n"]);

  _templateObject$1l = function _templateObject() {
    return data;
  };

  return data;
}
var StyledImage$2 = styled__default['default'](Image)(_templateObject$1l());
var Cover = function Cover(_ref) {
  var imgSrc = _ref.imgSrc,
      placeholderSrc = _ref.placeholderSrc,
      props = _objectWithoutPropertiesLoose(_ref, ["imgSrc", "placeholderSrc"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledImage$2, _extends({
    src: imgSrc || placeholderSrc
  }, props));
};
Cover.propTypes = {
  imgSrc: PropTypes__default['default'].string,
  placeholderSrc: PropTypes__default['default'].string
};
Cover.defaultProps = {
  imgSrc: "",
  placeholderSrc: ""
};

function _templateObject4$i() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 16px;\n  background-color: ", ";\n  z-index: 1;\n"]);

  _templateObject4$i = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$t() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-top: ", ";\n"]);

  _templateObject3$t = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$E() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  width: 100%;\n  padding: ", ";\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  z-index: 1;\n"]);

  _templateObject2$E = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1m() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: 8px;\n  overflow: hidden;\n  min-height: 112px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  transition: all 200ms ease-in-out;\n\n  ", "\n"]);

  _templateObject$1m = function _templateObject() {
    return data;
  };

  return data;
}
var StyledMarketPlaceItem$1 = styled__default['default'](BoxBase)(_templateObject$1m(), function (_ref) {
  var hoverEffect = _ref.hoverEffect;
  return hoverEffect && styled.css(["&:hover{transform:scale(1.03);}"]);
});
var Content$b = styled__default['default'].div(_templateObject2$E(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(4);
});
var Badges = styled__default['default'].div(_templateObject3$t(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(4);
});
var Highlight = styled__default['default'].div(_templateObject4$i(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.primary.main;
});
var ModernItem = function ModernItem(_ref5) {
  var badges = _ref5.badges,
      coverSrc = _ref5.coverSrc,
      coverPlaceholderSrc = _ref5.coverPlaceholderSrc,
      dataCy = _ref5.dataCy,
      details = _ref5.details,
      highlight = _ref5.highlight,
      megaTitle = _ref5.megaTitle,
      subTitle = _ref5.subTitle,
      title = _ref5.title,
      Wrapper = _ref5.Wrapper,
      props = _objectWithoutPropertiesLoose(_ref5, ["badges", "coverSrc", "coverPlaceholderSrc", "dataCy", "details", "highlight", "megaTitle", "subTitle", "title", "Wrapper"]);

  var Item = function Item() {
    return /*#__PURE__*/React__default['default'].createElement(StyledMarketPlaceItem$1, _extends({
      "data-cy": dataCy
    }, props), /*#__PURE__*/React__default['default'].createElement(Cover, {
      imgSrc: coverSrc,
      placeholderSrc: coverPlaceholderSrc
    }), highlight && /*#__PURE__*/React__default['default'].createElement(Highlight, null, /*#__PURE__*/React__default['default'].createElement(Text, {
      colorWhite: true,
      content: highlight,
      fontWeight: "bold",
      fontSize: "sm"
    })), /*#__PURE__*/React__default['default'].createElement(Content$b, null, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(H3, {
      content: title,
      noWrap: true
    }), /*#__PURE__*/React__default['default'].createElement(Text, {
      content: megaTitle,
      color: "textSecondary",
      fontSize: "sm",
      fontStyle: "italic",
      noWrap: true
    }), /*#__PURE__*/React__default['default'].createElement(Text, {
      content: subTitle,
      color: "textSecondary",
      fontSize: "sm",
      fontStyle: "italic",
      noWrap: true
    })), /*#__PURE__*/React__default['default'].createElement(Badges, null, badges.map(function (badge) {
      return /*#__PURE__*/React__default['default'].createElement(TinyBadge, _extends({}, badge, {
        mr: 1,
        mb: 1
      }));
    })), /*#__PURE__*/React__default['default'].createElement(DetailsTable, {
      justifyBetween: true,
      labelFontSize: "sm",
      mt: 4,
      size: "sm",
      rows: details
    })));
  };

  return Wrapper ? /*#__PURE__*/React__default['default'].createElement(Wrapper, null, /*#__PURE__*/React__default['default'].createElement(Item, null)) : /*#__PURE__*/React__default['default'].createElement(Item, null);
};
ModernItem.propTypes = MarketPlaceItemPropTypes;
ModernItem.defaultProps = MarketPlaceItemDefaultProps;

function _templateObject3$u() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100%;\n  width: 100%;\n  object-fit: contain;\n  z-index: 2;\n"]);

  _templateObject3$u = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$F() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-image: url(", ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 100%;\n  height: 100%;\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  z-index: 1;\n"]);

  _templateObject2$F = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1n() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 140px;\n  width: 140px;\n  height: 140px;\n"]);

  _templateObject$1n = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$9 = styled__default['default'].div(_templateObject$1n());
var BGImage = styled__default['default'].div(_templateObject2$F(), function (_ref) {
  var imgSrc = _ref.imgSrc;
  return imgSrc;
});
var StyledImage$3 = styled__default['default'](Image)(_templateObject3$u());
var Cover$1 = function Cover(_ref2) {
  var imgSrc = _ref2.imgSrc,
      placeholderSrc = _ref2.placeholderSrc,
      props = _objectWithoutPropertiesLoose(_ref2, ["imgSrc", "placeholderSrc"]);

  return /*#__PURE__*/React__default['default'].createElement(Wrapper$9, props, /*#__PURE__*/React__default['default'].createElement(BGImage, {
    imgSrc: imgSrc || placeholderSrc
  }), /*#__PURE__*/React__default['default'].createElement(StyledImage$3, {
    src: imgSrc || placeholderSrc
  }));
};
Cover$1.propTypes = {
  imgSrc: PropTypes__default['default'].string,
  placeholderSrc: PropTypes__default['default'].string
};
Cover$1.defaultProps = {
  imgSrc: "",
  placeholderSrc: ""
};

function _templateObject3$v() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: flex-end;\n  background-color: ", ";\n  padding: ", ";\n  height: 36px;\n  border-radius: 8px;\n  margin-top: -16px;\n  z-index: 1;\n"]);

  _templateObject3$v = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$G() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  padding: ", ";\n  box-sizing: border-box;\n  z-index: 1;\n"]);

  _templateObject2$G = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1o() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: 8px;\n  height: 140px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  transition: all 200ms ease-in-out;\n\n  :not(:last-child) {\n    margin-bottom: ", ";\n  }\n\n  ", "\n"]);

  _templateObject$1o = function _templateObject() {
    return data;
  };

  return data;
}
var StyledMarketPlaceItem$2 = styled__default['default'](BoxBase)(_templateObject$1o(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
}, function (_ref2) {
  var hoverEffect = _ref2.hoverEffect;
  return hoverEffect && styled.css(["&:hover{transform:scale(1.02);}"]);
});
var Content$c = styled__default['default'](Flex).attrs(function () {
  return {
    container: true,
    alignItems: "flex-start",
    justify: "space-between"
  };
})(_templateObject2$G(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(4);
});
var Highlight$1 = styled__default['default'].div(_templateObject3$v(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.primary.light;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(0, 0, 1, 4);
});
var ModernHorizontalItem = function ModernHorizontalItem(_ref6) {
  var ActionWrapper = _ref6.ActionWrapper,
      action = _ref6.action,
      actionTitle = _ref6.actionTitle,
      badges = _ref6.badges,
      coverSrc = _ref6.coverSrc,
      coverPlaceholderSrc = _ref6.coverPlaceholderSrc,
      dataCy = _ref6.dataCy,
      details = _ref6.details,
      highlight = _ref6.highlight,
      megaTitle = _ref6.megaTitle,
      price = _ref6.price,
      priceLabel = _ref6.priceLabel,
      subTitle = _ref6.subTitle,
      title = _ref6.title,
      Wrapper = _ref6.Wrapper,
      props = _objectWithoutPropertiesLoose(_ref6, ["ActionWrapper", "action", "actionTitle", "badges", "coverSrc", "coverPlaceholderSrc", "dataCy", "details", "highlight", "megaTitle", "price", "priceLabel", "subTitle", "title", "Wrapper"]);

  var actionButton = /*#__PURE__*/React__default['default'].createElement(Button, {
    block: true,
    content: actionTitle,
    color: "subtle",
    onClick: action
  });

  var Item = function Item() {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(StyledMarketPlaceItem$2, _extends({
      "data-cy": dataCy
    }, props), /*#__PURE__*/React__default['default'].createElement(Cover$1, {
      imgSrc: coverSrc,
      placeholderSrc: coverPlaceholderSrc
    }), /*#__PURE__*/React__default['default'].createElement(Content$c, null, /*#__PURE__*/React__default['default'].createElement(Flex, {
      item: true,
      xs: 12,
      md: 7,
      lg: 8,
      pl: 4
    }, /*#__PURE__*/React__default['default'].createElement(H3, {
      content: title,
      noWrap: true
    }), /*#__PURE__*/React__default['default'].createElement(Text, {
      content: megaTitle,
      color: "textSecondary",
      fontSize: "sm",
      fontStyle: "italic",
      noWrap: true
    }), /*#__PURE__*/React__default['default'].createElement(Text, {
      content: subTitle,
      color: "textSecondary",
      fontSize: "sm",
      fontStyle: "italic",
      noWrap: true
    }), /*#__PURE__*/React__default['default'].createElement(Hidden, {
      smDown: true
    }, /*#__PURE__*/React__default['default'].createElement(DetailsTable, {
      labelFontSize: "sm",
      mt: 4,
      size: "sm",
      rows: details
    }))), /*#__PURE__*/React__default['default'].createElement(Hidden, {
      smDown: true
    }, /*#__PURE__*/React__default['default'].createElement(Flex, {
      item: true
    }, badges.map(function (badge) {
      return /*#__PURE__*/React__default['default'].createElement(TinyBadge, _extends({}, badge, {
        dBlock: true,
        mb: 1
      }));
    }))), /*#__PURE__*/React__default['default'].createElement(Flex, {
      item: true,
      lg: 2,
      md: 3,
      xs: 11,
      container: true,
      justify: "space-between",
      alignItems: "flex-start",
      h100: true
    }, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(Text, {
      content: priceLabel,
      fontStyle: "italic",
      fontSize: "sm",
      mb: 2
    }), /*#__PURE__*/React__default['default'].createElement(H3, {
      content: price,
      color: "primary",
      noWrap: true
    })), ActionWrapper ? /*#__PURE__*/React__default['default'].createElement(ActionWrapper, null, actionButton) : actionButton))), highlight && /*#__PURE__*/React__default['default'].createElement(Highlight$1, null, /*#__PURE__*/React__default['default'].createElement(Text, {
      color: "primary",
      content: highlight,
      fontWeight: "bold",
      fontSize: "sm"
    })));
  };

  return Wrapper ? /*#__PURE__*/React__default['default'].createElement(Wrapper, null, /*#__PURE__*/React__default['default'].createElement(Item, null)) : /*#__PURE__*/React__default['default'].createElement(Item, null);
};
ModernHorizontalItem.propTypes = MarketPlaceItemPropTypes;
ModernHorizontalItem.defaultProps = MarketPlaceItemDefaultProps;

var MarketPlaceItem = function MarketPlaceItem(_ref) {
  var type = _ref.type,
      props = _objectWithoutPropertiesLoose(_ref, ["type"]);

  if (type === "legacy") return /*#__PURE__*/React__default['default'].createElement(LegacyItem, props);
  if (type === "modernHorizontal") return /*#__PURE__*/React__default['default'].createElement(ModernHorizontalItem, props);
  return /*#__PURE__*/React__default['default'].createElement(ModernItem, props);
};
MarketPlaceItem.propTypes = MarketPlaceItemPropTypes;
MarketPlaceItem.defaultProps = MarketPlaceItemDefaultProps;

var MINI_SHARE_MODULE_SHARE_OPTIONS = ["twitter", "facebook", "linkedin"];

var ShareModulePropTypes = _extends({
  iconProps: PropTypes__default['default'].shape(ButtonBasePropTypes),
  orientation: PropTypes__default['default'].oneOf(["vertical", "horizontal"]),
  shareOptions: PropTypes__default['default'].arrayOf(PropTypes__default['default'].oneOf(MINI_SHARE_MODULE_SHARE_OPTIONS)),
  url: PropTypes__default['default'].string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ShareModuleDefaultProps = {
  orientation: "vertical",
  shareOptions: MINI_SHARE_MODULE_SHARE_OPTIONS,
  url: "#"
};

function _templateObject3$w() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  align-items: center;\n  flex-direction: ", ";\n\n  a {\n    display: block;\n    cursor: pointer;\n\n    svg {\n      color: ", ";\n      transition: all 0.1s ease-in-out;\n    }\n\n    :hover {\n      svg {\n        color: ", ";\n      }\n    }\n\n    :not(:last-child) {\n      ", "\n    }\n  }\n"]);

  _templateObject3$w = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$H() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    min-width: ", "px;\n    max-width: ", "px;\n    height: ", "px;\n  }\n\n  ", "\n  ", "\n"]);

  _templateObject2$H = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1p() {
  var data = _taggedTemplateLiteralLoose(["\n  .MuiPopover-paper {\n    border-radius: 8px;\n    background-color: ", ";\n    box-shadow: 0px 16px 56px rgba(41, 40, 57, 0.16);\n    padding: ", ";\n    margin-top: ", "px;\n  }\n"]);

  _templateObject$1p = function _templateObject() {
    return data;
  };

  return data;
}
var BUTTON_SIZE = 32;
var StyledPopover = styled__default['default'](MuiPopover__default['default'])(_templateObject$1p(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2);
}, BUTTON_SIZE + 8);
var StyledButton$5 = styled__default['default'](Button)(_templateObject2$H(), BUTTON_SIZE, BUTTON_SIZE, BUTTON_SIZE, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Container$a = styled__default['default'].div(_templateObject3$w(), function (_ref3) {
  var orientation = _ref3.orientation;
  return orientation === "vertical" ? "column" : "row";
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.text.secondary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.text.primary;
}, function (_ref6) {
  var orientation = _ref6.orientation,
      theme = _ref6.theme;
  if (orientation === "vertical") return styled.css(["margin-bottom:", ";"], theme.spacing(2));
  return styled.css(["margin-right:", ";"], theme.spacing(2));
});
var MiniShareModule = function MiniShareModule(_ref7) {
  var iconProps = _ref7.iconProps,
      orientation = _ref7.orientation,
      shareOptions = _ref7.shareOptions,
      url = _ref7.url,
      props = _objectWithoutPropertiesLoose(_ref7, ["iconProps", "orientation", "shareOptions", "url"]);

  var _useState = React.useState(null),
      anchorEl = _useState[0],
      setAnchorEl = _useState[1];

  var encodedUrl = encodeURIComponent(url);

  var handlePopoverOpen = function handlePopoverOpen(event) {
    setAnchorEl(event.currentTarget);
  };

  var handlePopoverClose = function handlePopoverClose() {
    setAnchorEl(null);
  };

  var renderIcon = function renderIcon(icon, href) {
    return /*#__PURE__*/React__default['default'].createElement("a", {
      href: href,
      rel: "noreferrer",
      target: "_blank"
    }, /*#__PURE__*/React__default['default'].createElement(Icon, _extends({
      icon: icon,
      prefix: "fab"
    }, iconProps)));
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(StyledButton$5, _extends({
    icon: "share-alt",
    onClick: handlePopoverOpen,
    size: "sm"
  }, props)), /*#__PURE__*/React__default['default'].createElement(StyledPopover, {
    id: "share-module-popover",
    open: !!anchorEl,
    anchorEl: anchorEl,
    onClose: handlePopoverClose
  }, /*#__PURE__*/React__default['default'].createElement(Container$a, {
    orientation: orientation
  }, shareOptions.includes("twitter") && renderIcon("twitter", "https://twitter.com/intent/tweet?url=" + encodedUrl), shareOptions.includes("facebook") && renderIcon("facebook-f", "https://www.facebook.com/sharer.php?u=" + encodedUrl), shareOptions.includes("linkedin") && renderIcon("linkedin-in", "https://www.linkedin.com/sharing/share-offsite/?url=" + encodedUrl))));
};
MiniShareModule.propTypes = ShareModulePropTypes;
MiniShareModule.defaultProps = ShareModuleDefaultProps;

var NoItemPropTypes = _extends({
  buttonAction: PropTypes__default['default'].func,
  buttonHref: PropTypes__default['default'].string,
  buttonText: PropTypes__default['default'].string,
  dataCy: PropTypes__default['default'].string,
  text: PropTypes__default['default'].string
}, COLOR_PROP_TYPES, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var NoItemDefaultProps = {
  buttonAction: null,
  buttonHref: null,
  buttonText: "",
  dataCy: "noItem",
  text: "Nothing yet..."
};

function _templateObject2$I() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: 32px;\n"]);

  _templateObject2$I = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1q() {
  var data = _taggedTemplateLiteralLoose(["\n  text-align: center;\n\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$1q = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$a = styled__default['default'].div(_templateObject$1q(), function (theme) {
  return COLOR(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var StyledIcon$4 = styled__default['default'](Icon).attrs(function () {
  return {
    colorGrayRegular: true,
    icon: "sad-cry"
  };
})(_templateObject2$I());
var NoItem = function NoItem(_ref) {
  var buttonAction = _ref.buttonAction,
      buttonHref = _ref.buttonHref,
      buttonText = _ref.buttonText,
      dataCy = _ref.dataCy,
      text = _ref.text,
      props = _objectWithoutPropertiesLoose(_ref, ["buttonAction", "buttonHref", "buttonText", "dataCy", "text"]);

  return /*#__PURE__*/React__default['default'].createElement(Wrapper$a, _extends({
    "data-cy": dataCy
  }, props), /*#__PURE__*/React__default['default'].createElement(StyledIcon$4, null), /*#__PURE__*/React__default['default'].createElement(Text, {
    fontWeight: "bold",
    my: 2
  }, text), buttonText && /*#__PURE__*/React__default['default'].createElement(Button, {
    color: "subtle",
    href: buttonHref,
    onClick: buttonAction,
    size: "xs"
  }, buttonText));
};
NoItem.propTypes = NoItemPropTypes;
NoItem.defaultProps = NoItemDefaultProps;

var PageFigurePropTypes = _extends({
  content: PropTypes__default['default'].node,
  children: PropTypes__default['default'].node
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var PageFigureDefaultProps = {};

function _templateObject$1r() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100vw;\n  margin-left: calc((100% - 100vw) / 2);\n\n  ", "\n  ", "\n"]);

  _templateObject$1r = function _templateObject() {
    return data;
  };

  return data;
}
var StyledPageFigure = styled__default['default'].div(_templateObject$1r(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var PageFigure = function PageFigure(_ref) {
  var content = _ref.content,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["content", "children"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledPageFigure, props, content || children);
};
PageFigure.propTypes = PageFigurePropTypes;
PageFigure.defaultProps = PageFigureDefaultProps;

var PageLoadingPropTypes = {
  fullScreen: PropTypes__default['default'].bool,
  message: PropTypes__default['default'].string,
  transparent: PropTypes__default['default'].bool
};
var PageLoadingDefaultProps = {};

function _templateObject$1s() {
  var data = _taggedTemplateLiteralLoose(["\n  position: ", ";\n  top: 0;\n  right: 0;\n  left: 0;\n  min-width: ", ";\n  min-height: ", ";\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: ", ";\n\n  img {\n    max-width: 25%;\n  }\n"]);

  _templateObject$1s = function _templateObject() {
    return data;
  };

  return data;
}
var StyledLoading = styled__default['default'].div(_templateObject$1s(), function (_ref) {
  var fullScreen = _ref.fullScreen;
  return fullScreen ? "fixed" : "absolute";
}, function (_ref2) {
  var fullScreen = _ref2.fullScreen;
  return fullScreen ? "100vw" : "100%";
}, function (_ref3) {
  var fullScreen = _ref3.fullScreen;
  return fullScreen ? "100vh" : "100%";
}, function (_ref4) {
  var transparent = _ref4.transparent,
      theme = _ref4.theme;
  return transparent ? "rgba(0, 0, 0, 0.3)" : theme.palette.common.white;
}, function (_ref5) {
  var fullScreen = _ref5.fullScreen;
  return fullScreen ? 9999 : 99;
});
var PageLoading = function PageLoading(_ref6) {
  var message = _ref6.message,
      props = _objectWithoutPropertiesLoose(_ref6, ["message"]);

  var _useTheme = styled.useTheme(),
      loadingIndicator = _useTheme.loadingIndicator;

  var msg = message;
  var Spinner = RocksSpinner;

  if (loadingIndicator !== undefined) {
    if (loadingIndicator === "") {
      Spinner = function Spinner() {
        return null;
      };

      msg = "Loading...";
    } else Spinner = function Spinner() {
      return /*#__PURE__*/React__default['default'].createElement("img", {
        alt: "Loading...",
        src: loadingIndicator
      });
    };
  }

  return /*#__PURE__*/React__default['default'].createElement(StyledLoading, props, /*#__PURE__*/React__default['default'].createElement(Spinner, null), msg && /*#__PURE__*/React__default['default'].createElement(Text, {
    color: "primary",
    content: msg,
    fontWeight: "bold",
    mt: 4
  }));
};
PageLoading.propTypes = PageLoadingPropTypes;
PageLoading.defaultProps = PageLoadingDefaultProps;

var pageMetaPropTypes = {
  children: PropTypes__default['default'].node,
  description: PropTypes__default['default'].string.isRequired,
  imgSrc: PropTypes__default['default'].string.isRequired,
  title: PropTypes__default['default'].string.isRequired,
  url: PropTypes__default['default'].string.isRequired,
  Wrapper: PropTypes__default['default'].node
};
var pageMetaDefaultProps = {};

var PageMeta = function PageMeta(_ref) {
  var children = _ref.children,
      description = _ref.description,
      imgSrc = _ref.imgSrc,
      title = _ref.title,
      url = _ref.url,
      Wrapper = _ref.Wrapper;
  var meta = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("title", null, title), /*#__PURE__*/React__default['default'].createElement("meta", {
    name: "title",
    content: title,
    key: "metaTitle"
  }), /*#__PURE__*/React__default['default'].createElement("meta", {
    name: "description",
    content: description,
    key: "metaDesc"
  }), /*#__PURE__*/React__default['default'].createElement("meta", {
    property: "og:type",
    content: "website",
    key: "ogType"
  }), /*#__PURE__*/React__default['default'].createElement("meta", {
    property: "og:url",
    content: url,
    key: "ogUrl"
  }), /*#__PURE__*/React__default['default'].createElement("meta", {
    property: "og:title",
    content: title,
    key: "ogTitle"
  }), /*#__PURE__*/React__default['default'].createElement("meta", {
    property: "og:description",
    content: description,
    key: "ogDesc"
  }), /*#__PURE__*/React__default['default'].createElement("meta", {
    property: "og:image",
    content: imgSrc,
    key: "ogImage"
  }), /*#__PURE__*/React__default['default'].createElement("meta", {
    property: "twitter:card",
    content: "summary_large_image",
    key: "twCard"
  }), /*#__PURE__*/React__default['default'].createElement("meta", {
    property: "twitter:url",
    content: url,
    key: "twUrl"
  }), /*#__PURE__*/React__default['default'].createElement("meta", {
    property: "twitter:title",
    content: title,
    key: "twTitle"
  }), /*#__PURE__*/React__default['default'].createElement("meta", {
    property: "twitter:description",
    content: description,
    key: "twDesc"
  }), /*#__PURE__*/React__default['default'].createElement("meta", {
    property: "twitter:image",
    content: imgSrc,
    key: "twImage"
  }), children);
  return Wrapper ? /*#__PURE__*/React__default['default'].createElement(Wrapper, null, meta) : meta;
};
PageMeta.propTypes = pageMetaPropTypes;
PageMeta.defaultProps = pageMetaDefaultProps;

var Container$b = function Container(_ref) {
  var children = _ref.children,
      isFinished = _ref.isFinished,
      animationDuration = _ref.animationDuration;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      opacity: isFinished ? 0 : 1,
      pointerEvents: "none",
      transition: "opacity " + animationDuration + "ms linear"
    }
  }, children);
};
Container$b.propTypes = {
  animationDuration: PropTypes__default['default'].number.isRequired,
  children: PropTypes__default['default'].node.isRequired,
  isFinished: PropTypes__default['default'].bool.isRequired
};

function _templateObject2$J() {
  var data = _taggedTemplateLiteralLoose(["\n  box-shadow: ", ";\n  display: block;\n  height: 100%;\n  opacity: 1;\n  position: absolute;\n  right: 0;\n  transform: rotate(3deg) translate(0px, -4px);\n  width: 100;\n"]);

  _templateObject2$J = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1t() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  height: 2px;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1031;\n"]);

  _templateObject$1t = function _templateObject() {
    return data;
  };

  return data;
}
var StyledBar = styled__default['default'].div(_templateObject$1t(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.primary.main;
});
var InnerBar = styled__default['default'].div(_templateObject2$J(), function (_ref2) {
  var theme = _ref2.theme;
  return "0 0 10px " + theme.palette.primary.main + ", 0 0 5px  " + theme.palette.primary.main;
});
var Bar = function Bar(_ref3) {
  var animationDuration = _ref3.animationDuration,
      progress = _ref3.progress;
  return /*#__PURE__*/React__default['default'].createElement(StyledBar, {
    style: {
      marginLeft: (-1 + progress) * 100 + "%",
      transition: "margin-left " + animationDuration + "ms linear"
    }
  }, /*#__PURE__*/React__default['default'].createElement(InnerBar, null));
};
Bar.propTypes = {
  animationDuration: PropTypes__default['default'].number.isRequired,
  progress: PropTypes__default['default'].number.isRequired
};

var Progress = function Progress(_ref) {
  var isAnimating = _ref.isAnimating;

  var _useNProgress = reactNprogress.useNProgress({
    isAnimating: isAnimating
  }),
      animationDuration = _useNProgress.animationDuration,
      isFinished = _useNProgress.isFinished,
      progress = _useNProgress.progress;

  return /*#__PURE__*/React__default['default'].createElement(Container$b, {
    animationDuration: animationDuration,
    isFinished: isFinished
  }, /*#__PURE__*/React__default['default'].createElement(Bar, {
    animationDuration: animationDuration,
    progress: progress
  }));
};

var PageProgressBarPropTypes = {
  isAnimating: PropTypes__default['default'].bool,
  instanceKey: PropTypes__default['default'].string,
  listener: PropTypes__default['default'].func
};
var PageProgressBarDefaultProps = {
  isAnimating: false,
  instanceKey: null
};

var PageProgressBar = function PageProgressBar(_ref) {
  var isAnimating = _ref.isAnimating,
      instanceKey = _ref.instanceKey,
      listener = _ref.listener;

  var _useState = React.useState(false),
      isRouteChanging = _useState[0],
      setIsRouteChanging = _useState[1];

  var _useState2 = React.useState(new Date().getTime()),
      loadingKey = _useState2[0],
      setLoadingKey = _useState2[1];

  var routeChangeStartHandler = function routeChangeStartHandler() {
    setIsRouteChanging(true);
    setLoadingKey(new Date().getTime());
  };

  var routeChangeEndHandler = function routeChangeEndHandler() {
    setIsRouteChanging(false);
  };

  React.useEffect(function () {
    if (listener) {
      listener(routeChangeStartHandler, routeChangeEndHandler);
    }
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(Progress, {
    isAnimating: isRouteChanging || isAnimating
  });
};
PageProgressBar.propTypes = PageProgressBarPropTypes;
PageProgressBar.defaultProps = PageProgressBarDefaultProps;

function _templateObject$1u() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: auto;\n  transition: filter ", "ms ease-in-out;\n\n  ", ";\n"]);

  _templateObject$1u = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContent = styled__default['default'].div(_templateObject$1u(), function (_ref) {
  var duration = _ref.duration;
  return duration / 2;
}, function (_ref2) {
  var state = _ref2.state;

  switch (state) {
    case "entering":
    case "exited":
      return styled.css(["-webkit-filter:blur(0.75rem);filter:blur(0.75rem);pointer-events:none;"]);

    default:
      return styled.css(["-webkit-filter:blur(0);filter:blur(0);"]);
  }
});
var duration = 200;
var PageTransition = function PageTransition(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, ["children"]);

  var _useState = React.useState(false),
      mounted = _useState[0],
      setMounted = _useState[1];

  React.useEffect(function () {
    setMounted(true);
    return function () {
      setMounted(false);
    };
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
    in: mounted,
    timeout: duration,
    unmountOnExit: true
  }, function (state) {
    return /*#__PURE__*/React__default['default'].createElement(StyledContent, _extends({
      duration: duration,
      state: state
    }, props), children);
  });
};
PageTransition.propTypes = {
  children: PropTypes__default['default'].node.isRequired
};
PageTransition.defaultProps = {};

var PaginationPropTypes = {
  currentPage: PropTypes__default['default'].number,
  itemProps: PropTypes__default['default'].shape({}),
  nextText: PropTypes__default['default'].string,
  pageCount: PropTypes__default['default'].number,
  prevText: PropTypes__default['default'].string
};
var PaginationDefaultProps = {
  nextText: "Next",
  prevText: "Prev"
};

function _templateObject2$K() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    width: 24px;\n    min-width: 24px;\n    height: 24px;\n    background: ", ";\n    border-radius: 8px;\n    padding: 0;\n\n    ", "\n  }\n"]);

  _templateObject2$K = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1v() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  ", "\n  ", "\n"]);

  _templateObject$1v = function _templateObject() {
    return data;
  };

  return data;
}
var StyledPagination = styled__default['default'](MuiPagination__default['default'])(_templateObject$1v(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledPaginationItem = styled__default['default'](PaginationItem__default['default'])(_templateObject2$K(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.semiLight;
}, function (_ref2) {
  var selected = _ref2.selected,
      theme = _ref2.theme;
  return selected && styled.css(["background:", ";font-weight:600;"], theme.palette.gray.regular);
});

var prevButton = function prevButton(prevText, disabled, item) {
  return /*#__PURE__*/React__default['default'].createElement(OutlineButton, _extends({}, item, {
    content: prevText,
    color: "secondary",
    disabled: disabled,
    mr: 6,
    size: "sm",
    startIcon: "chevron-left"
  }));
};

var nextButton = function nextButton(nextText, disabled, item) {
  return /*#__PURE__*/React__default['default'].createElement(OutlineButton, _extends({}, item, {
    content: nextText,
    color: "secondary",
    disabled: disabled,
    endIcon: "chevron-right",
    ml: 6,
    size: "sm"
  }));
};

var Pagination = function Pagination(_ref3) {
  var currentPage = _ref3.currentPage,
      itemProps = _ref3.itemProps,
      ItemWrapper = _ref3.ItemWrapper,
      nextText = _ref3.nextText,
      pageCount = _ref3.pageCount,
      prevText = _ref3.prevText,
      props = _objectWithoutPropertiesLoose(_ref3, ["currentPage", "itemProps", "ItemWrapper", "nextText", "pageCount", "prevText"]);

  var _renderItem = function renderItem(item) {
    if (item.type === "previous") return prevButton(prevText, currentPage === 1, item);
    if (item.type === "next") return nextButton(nextText, currentPage === pageCount, item);
    return /*#__PURE__*/React__default['default'].createElement(StyledPaginationItem, _extends({}, item, itemProps));
  };

  return /*#__PURE__*/React__default['default'].createElement(StyledPagination, _extends({
    page: currentPage,
    count: pageCount,
    renderItem: function renderItem(item) {
      return ItemWrapper ? /*#__PURE__*/React__default['default'].createElement(ItemWrapper, {
        page: item.page
      }, _renderItem(item)) : _renderItem(item);
    }
  }, props));
};
Pagination.propTypes = PaginationPropTypes;
Pagination.defaultProps = PaginationDefaultProps;

var ProfilePropTypes = _extends({
  coverSrc: PropTypes__default['default'].string,
  description: PropTypes__default['default'].string,
  location: PropTypes__default['default'].string,
  name: PropTypes__default['default'].string,
  shareOnClick: PropTypes__default['default'].func,
  shareUrl: PropTypes__default['default'].string,
  socialLinks: PropTypes__default['default'].array
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ProfileDefaultProps = {
  socialLinks: []
};

function _templateObject4$j() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n  background-color: ", ";\n  color: ", ";\n\n  svg {\n    color: ", ";\n  }\n\n  :hover {\n    opacity: 0.7;\n  }\n\n  ", "\n"]);

  _templateObject4$j = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$x() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 32px;\n"]);

  _templateObject3$x = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$L() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 120px;\n  height: 120px;\n  margin-bottom: ", ";\n"]);

  _templateObject2$L = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1w() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  ", "\n  ", "\n"]);

  _templateObject$1w = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$b = styled__default['default'].div(_templateObject$1w(), function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var AvatarWrapper = styled__default['default'].div(_templateObject2$L(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(6);
});
var Avatar$1 = styled__default['default'](Image).attrs(function () {
  return {
    mb: 6
  };
})(_templateObject3$x());
var Social = styled__default['default'].a(_templateObject4$j(), function (_ref2) {
  var colorPrimary = _ref2.colorPrimary,
      theme = _ref2.theme;
  return colorPrimary ? theme.palette.primary.main : theme.palette.common.white;
}, function (_ref3) {
  var colorPrimary = _ref3.colorPrimary,
      theme = _ref3.theme;
  return colorPrimary ? theme.palette.common.white : theme.palette.text.primary;
}, function (_ref4) {
  var colorPrimary = _ref4.colorPrimary,
      theme = _ref4.theme;
  return colorPrimary ? theme.palette.common.white : theme.palette.text.primary;
}, function (_ref5) {
  var fixed = _ref5.fixed,
      offset = _ref5.offset;
  return fixed && styled.css(["position:absolute;top:", "px;right:", "px;"], offset, offset);
});
var Profile = function Profile(_ref6) {
  var coverSrc = _ref6.coverSrc,
      description = _ref6.description,
      location = _ref6.location,
      name = _ref6.name,
      shareOnClick = _ref6.shareOnClick,
      shareUrl = _ref6.shareUrl,
      socialLinks = _ref6.socialLinks,
      props = _objectWithoutPropertiesLoose(_ref6, ["coverSrc", "description", "location", "name", "shareOnClick", "shareUrl", "socialLinks"]);

  return /*#__PURE__*/React__default['default'].createElement(Wrapper$b, props, /*#__PURE__*/React__default['default'].createElement(AvatarWrapper, null, /*#__PURE__*/React__default['default'].createElement(Avatar$1, {
    src: coverSrc,
    alt: name
  }), (shareOnClick || shareUrl) && /*#__PURE__*/React__default['default'].createElement(Social, {
    as: shareOnClick ? "button" : "a",
    colorPrimary: true,
    fixed: true,
    href: shareUrl,
    onClick: shareOnClick,
    offset: -16,
    target: "_blank"
  }, /*#__PURE__*/React__default['default'].createElement(Icon, {
    icon: "share-alt"
  }))), /*#__PURE__*/React__default['default'].createElement(H1, {
    content: name,
    mb: 2
  }), /*#__PURE__*/React__default['default'].createElement(Text, {
    color: "textSecondary",
    content: location,
    fontSize: "sm",
    fontStyle: "static",
    mb: 6
  }), /*#__PURE__*/React__default['default'].createElement(Paragraph, {
    color: "textSecondary",
    content: description,
    fontWeight: "light"
  }), socialLinks.length > 0 && /*#__PURE__*/React__default['default'].createElement(Flex, {
    container: true,
    justify: "center",
    spacing: 2
  }, socialLinks.map(function (_ref7) {
    var icon = _ref7.icon,
        iconPrefix = _ref7.iconPrefix,
        url = _ref7.url;
    return /*#__PURE__*/React__default['default'].createElement(Flex, {
      item: true,
      key: "icon"
    }, /*#__PURE__*/React__default['default'].createElement(Social, {
      href: url,
      target: "_blank"
    }, /*#__PURE__*/React__default['default'].createElement(Icon, {
      icon: icon,
      prefix: iconPrefix || "fab"
    })));
  })));
};
Profile.propTypes = ProfilePropTypes;
Profile.defaultProps = ProfileDefaultProps;

var SearchBarPropTypes = _extends({
  filterButtonText: PropTypes__default['default'].string,
  filterItems: PropTypes__default['default'].array,
  noBorderRadius: PropTypes__default['default'].bool,
  onChange: PropTypes__default['default'].func,
  onSubmit: PropTypes__default['default'].func,
  placeholder: PropTypes__default['default'].string,
  showFilter: PropTypes__default['default'].nool,
  value: PropTypes__default['default'].string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var SearchBarDefaultProps = {
  filterButtonText: "Filter",
  filterItems: [],
  placeholder: "Type and press Enter"
};

function _templateObject2$M() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    ", "\n    background-color: ", ";\n    height: 100%;\n    border: none;\n    outline: none;\n  }\n"]);

  _templateObject2$M = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1x() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: transparent;\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n\n  ", "\n  ", "\n"]);

  _templateObject$1x = function _templateObject() {
    return data;
  };

  return data;
}
var StyledSearchBar = styled__default['default'].form(_templateObject$1x(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var SearchInput = styled__default['default'](FieldBase).attrs(function () {
  return {
    component: "input"
  };
})(_templateObject2$M(), function (_ref) {
  var noBorderRadius = _ref.noBorderRadius;
  return "border-radius: " + (noBorderRadius ? "unset" : "12px") + ";";
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.gray.semiLight;
});
var SearchBar = function SearchBar(_ref3) {
  var inputProps = _ref3.inputProps,
      noBorderRadius = _ref3.noBorderRadius,
      onChange = _ref3.onChange,
      onSubmit = _ref3.onSubmit,
      placeholder = _ref3.placeholder,
      showSearchIconEnd = _ref3.showSearchIconEnd,
      value = _ref3.value,
      props = _objectWithoutPropertiesLoose(_ref3, ["inputProps", "noBorderRadius", "onChange", "onSubmit", "placeholder", "showSearchIconEnd", "value"]);

  var _useState = React.useState(value),
      inputValue = _useState[0],
      setInputValue = _useState[1];

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

  var endIcon = null;
  if (inputValue) endIcon = "times";else if (showSearchIconEnd) endIcon = "search";
  var endIconColor = "input";
  if (endIcon === "search") endIconColor = "secondary";
  var startIcon = null;
  if (!showSearchIconEnd) startIcon = "search";
  return /*#__PURE__*/React__default['default'].createElement(StyledSearchBar, _extends({
    onSubmit: handleSubmit
  }, props), /*#__PURE__*/React__default['default'].createElement(SearchInput, _extends({
    endIcon: endIcon,
    endIconColor: endIconColor,
    endIconOnClick: inputValue ? handleClear : undefined,
    noBorderRadius: noBorderRadius,
    onChange: handleChange,
    placeholder: placeholder,
    startIcon: startIcon,
    startIconColor: "secondary",
    value: inputValue
  }, inputProps)));
};
SearchBar.propTypes = SearchBarPropTypes;
SearchBar.defaultProps = SearchBarDefaultProps;

function _templateObject$1y() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n\n  && {\n    background-color: ", ";\n    margin-right: ", ";\n    svg {\n      color: ", ";\n    }\n\n    :hover {\n      background-color: ", ";\n\n      svg {\n        color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject$1y = function _templateObject() {
    return data;
  };

  return data;
}
var Button$1 = styled__default['default'](ButtonBase)(_templateObject$1y(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.semiLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.text.primary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.primary.light;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.primary.main;
});
var ShareModuleButton = function ShareModuleButton(_ref6) {
  var buttonProps = _ref6.buttonProps,
      href = _ref6.href,
      icon = _ref6.icon,
      iconPrefix = _ref6.iconPrefix,
      onClick = _ref6.onClick;
  return /*#__PURE__*/React__default['default'].createElement(Button$1, _extends({
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
  buttonProps: PropTypes__default['default'].shape({}),
  href: PropTypes__default['default'].string,
  icon: PropTypes__default['default'].string.isRequired,
  iconPrefix: PropTypes__default['default'].string,
  onClick: PropTypes__default['default'].func
};
ShareModuleButton.defaultProps = {
  buttonProps: {},
  href: null,
  iconPrefix: "fab",
  onClick: null
};

var SHARE_MODULE_SHARE_OPTIONS = ["twitter", "facebook", "telegram", "whatsapp", "email", "embed", "navigator"];

var ShareModulePropTypes$1 = _extends({
  buttonProps: PropTypes__default['default'].shape(ButtonBasePropTypes),
  copyText: PropTypes__default['default'].string,
  shareOptions: PropTypes__default['default'].arrayOf(PropTypes__default['default'].oneOf(SHARE_MODULE_SHARE_OPTIONS)),
  url: PropTypes__default['default'].string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ShareModuleDefaultProps$1 = {
  copyText: "Or copy the link",
  shareOptions: SHARE_MODULE_SHARE_OPTIONS,
  url: "#"
};

function _templateObject5$c() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    ", "\n  }\n"]);

  _templateObject5$c = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$k() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject4$k = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$y() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n  background-color: ", ";\n  span {\n    border-radius: 0px !important;\n    background-color: ", " !important;\n\n    .token {\n      color: ", " !important;\n    }\n\n    .attr-value {\n      font-weight: 700 !important;\n      color: ", " !important;\n    }\n  }\n"]);

  _templateObject3$y = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$N() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: ", ";\n"]);

  _templateObject2$N = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1z() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$1z = function _templateObject() {
    return data;
  };

  return data;
}
var Container$c = styled__default['default'].div(_templateObject$1z(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var ButtonsWrapper = styled__default['default'].div(_templateObject2$N(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var CodeContainer = styled__default['default'].div(_templateObject3$y(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(6);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.gray.semiLight;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.gray.semiLight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.gray.dark;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.common.black;
});
var StyledCodeBlock = styled__default['default'](reactCodeBlocks.CodeBlock)(_templateObject4$k());
var StyledText$1 = styled__default['default'](Text).attrs(function () {
  return {
    component: "div",
    color: "textSecondary",
    fontSize: "sm",
    fontStyle: "italic"
  };
})(_templateObject5$c(), function (_ref7) {
  var spacing = _ref7.theme.spacing;
  return styled.css(["margin:", ";"], spacing(2, 0));
});
var ShareModule = function ShareModule(_ref8) {
  var _navigator;

  var buttonProps = _ref8.buttonProps,
      copyText = _ref8.copyText,
      shareOptions = _ref8.shareOptions,
      url = _ref8.url,
      nftId = _ref8.nftId,
      appUrl = _ref8.appUrl,
      props = _objectWithoutPropertiesLoose(_ref8, ["buttonProps", "copyText", "shareOptions", "url", "nftId", "appUrl"]);

  var _useState = React.useState(false),
      open = _useState[0],
      setOpen = _useState[1];

  var theme = styled.useTheme();
  var matches = useMediaQuery(theme.breakpoints.down("md"));
  var encodedUrl = encodeURIComponent(url);
  var canUseNavigator = typeof window !== "undefined" && ((_navigator = navigator) == null ? void 0 : _navigator.share);
  var codeSnippets = "<div\n   id=\"item\"\n   data-item-type=\"NFT\"\n   data-item-id=\"" + nftId + "\"\n   data-app-url=\"" + appUrl + "\"\n   class=\"nft-item\"\n ></div>\n\n <link\n   href=\"https://licenserocks.github.io/creators-hub-widgets/main.css\"\n   rel=\"stylesheet\"\n />\n <script \n   src=\"https://licenserocks.github.io/creators-hub-widgets/main.js\">\n </script>";

  var defaultProps = _extends({
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    fullWidth: true
  }, props);

  return /*#__PURE__*/React__default['default'].createElement(Container$c, props, /*#__PURE__*/React__default['default'].createElement(Modal, _extends({
    cancelButton: true,
    action: function action() {
      return copy__default['default'](codeSnippets);
    },
    actionTitle: "Copy code",
    title: "Get NFT embed code"
  }, defaultProps), /*#__PURE__*/React__default['default'].createElement(CodeContainer, null, " ", /*#__PURE__*/React__default['default'].createElement(StyledCodeBlock, {
    language: "jsx",
    text: codeSnippets,
    theme: reactCodeBlocks.obsidian,
    wrapLines: true,
    showLineNumbers: false,
    codeBlock: true
  }))), /*#__PURE__*/React__default['default'].createElement(ButtonsWrapper, null, shareOptions.includes("twitter") && /*#__PURE__*/React__default['default'].createElement(ShareModuleButton, {
    icon: "twitter",
    href: "https://twitter.com/intent/tweet?url=" + encodedUrl,
    buttonProps: buttonProps
  }), shareOptions.includes("facebook") && /*#__PURE__*/React__default['default'].createElement(ShareModuleButton, {
    icon: "facebook-f",
    href: "https://www.facebook.com/sharer.php?u=" + encodedUrl,
    buttonProps: buttonProps
  }), shareOptions.includes("telegram") && matches && /*#__PURE__*/React__default['default'].createElement(ShareModuleButton, {
    icon: "telegram-plane",
    href: "tg://msg?text=" + encodedUrl,
    buttonProps: buttonProps
  }), shareOptions.includes("whatsapp") && matches && /*#__PURE__*/React__default['default'].createElement(ShareModuleButton, {
    icon: "whatsapp",
    href: "whatsapp://send?" + encodedUrl,
    buttonProps: buttonProps
  }), shareOptions.includes("embed") && /*#__PURE__*/React__default['default'].createElement(ShareModuleButton, {
    icon: "code",
    iconPrefix: theme.defaultIconSet,
    onClick: function onClick() {
      return setOpen(true);
    },
    buttonProps: buttonProps
  }), shareOptions.includes("email") && /*#__PURE__*/React__default['default'].createElement(ShareModuleButton, {
    icon: "envelope",
    iconPrefix: theme.defaultIconSet,
    href: "mailto:?body=" + encodedUrl,
    buttonProps: buttonProps
  }), shareOptions.includes("navigator") && canUseNavigator && /*#__PURE__*/React__default['default'].createElement(ShareModuleButton, {
    icon: "ellipsis-h",
    iconPrefix: theme.defaultIconSet,
    onClick: function onClick() {
      var _navigator2;

      return (_navigator2 = navigator) == null ? void 0 : _navigator2.share({
        url: encodedUrl
      });
    },
    buttonProps: buttonProps
  })), /*#__PURE__*/React__default['default'].createElement(StyledText$1, {
    content: copyText
  }), /*#__PURE__*/React__default['default'].createElement(Input, {
    copyable: true,
    valueToCopy: url,
    endIconColor: "secondary",
    readOnly: true,
    selectable: true,
    startIcon: "link",
    value: url
  }));
};
ShareModule.propTypes = ShareModulePropTypes$1;
ShareModule.defaultProps = ShareModuleDefaultProps$1;

// import PropTypes from "prop-types";
var SnackbarPropTypes = {};
var SnackbarDefaultProps = {
  variant: "default"
};

function _templateObject5$d() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject5$d = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$l() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject4$l = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$z() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: ", ";\n  right: ", ";\n  color: ", ";\n"]);

  _templateObject3$z = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$O() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 100%;\n  border-radius: 16px;\n  background-color: ", ";\n  color: ", ";\n  padding: ", ";\n"]);

  _templateObject2$O = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1A() {
  var data = _taggedTemplateLiteralLoose(["\n  ", " {\n    width: 25%;\n    max-width: fit-content;\n  }\n"]);

  _templateObject$1A = function _templateObject() {
    return data;
  };

  return data;
}
var StyledSnackbarContent = styled__default['default'](notistack.SnackbarContent)(_templateObject$1A(), function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.up("md");
});
var Wrapper$c = styled__default['default'].div(_templateObject2$O(), function (_ref2) {
  var theme = _ref2.theme,
      variant = _ref2.variant;
  return theme.palette[variant].light;
}, function (_ref3) {
  var theme = _ref3.theme,
      variant = _ref3.variant;
  return theme.palette[variant].main;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(4);
});
var CloseIcon = styled__default['default'](Icon).attrs(function () {
  return {
    icon: "times",
    size: "sm"
  };
})(_templateObject3$z(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(3);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(3);
}, function (_ref7) {
  var theme = _ref7.theme,
      variant = _ref7.variant;
  return theme.palette[variant].main;
});
var IconWrapper = styled__default['default'].div(_templateObject4$l());
var StyledIcon$5 = styled__default['default'](Icon)(_templateObject5$d(), function (_ref8) {
  var theme = _ref8.theme,
      variant = _ref8.variant;
  return theme.palette[variant].main;
});

var mapVariantToColor = function mapVariantToColor(variant) {
  switch (variant) {
    case "default":
    case "info":
      return "primary";

    default:
      return variant;
  }
};

var mapVariantToIcon = function mapVariantToIcon(variant) {
  switch (variant) {
    case "success":
      return "check-circle";

    default:
      return "info-circle";
  }
};

var Snackbar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useSnackbar = notistack.useSnackbar(),
      closeSnackbar = _useSnackbar.closeSnackbar;

  var variant = mapVariantToColor(props.variant);
  var icon = mapVariantToIcon(props.variant);

  var handleDismiss = function handleDismiss() {
    closeSnackbar(props.id);
  };

  return /*#__PURE__*/React__default['default'].createElement(StyledSnackbarContent, {
    ref: ref
  }, /*#__PURE__*/React__default['default'].createElement(Wrapper$c, {
    variant: variant
  }, /*#__PURE__*/React__default['default'].createElement(CloseIcon, {
    onClick: handleDismiss,
    variant: variant
  }), /*#__PURE__*/React__default['default'].createElement(Flex, {
    container: true,
    alignItems: "center"
  }, /*#__PURE__*/React__default['default'].createElement(Flex, {
    item: true,
    xs: 2
  }, /*#__PURE__*/React__default['default'].createElement(IconWrapper, {
    variant: variant
  }, /*#__PURE__*/React__default['default'].createElement(StyledIcon$5, {
    icon: icon,
    variant: variant
  }))), /*#__PURE__*/React__default['default'].createElement(Flex, {
    item: true,
    xs: 10
  }, /*#__PURE__*/React__default['default'].createElement(Text, {
    content: props.message,
    fontWeight: "bold"
  })))));
});
Snackbar.propTypes = SnackbarPropTypes;
Snackbar.defaultProps = SnackbarDefaultProps;

var DotsSpinnerPropTypes = _extends({
  size: PropTypes__default['default'].number
}, COLOR_PROP_TYPES, DISPLAY_PROP_TYPES, DIMENSION_PROP_TYPES, SPACER_PROP_TYPES);
var DotsSpinnerDefaultProps = {
  size: 60
};

function _templateObject$1B() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > div {\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n    animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  }\n\n  .bounce1 {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n  }\n\n  .bounce2 {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n  }\n\n  @-webkit-keyframes sk-bouncedelay {\n    0%, 80%, 100% { -webkit-transform: scale(0) }\n    40% { -webkit-transform: scale(1.0) }\n  }\n\n  @keyframes sk-bouncedelay {\n    0%, 80%, 100% {\n      -webkit-transform: scale(0);\n      transform: scale(0);\n    } 40% {\n      -webkit-transform: scale(1.0);\n      transform: scale(1.0);\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$1B = function _templateObject() {
    return data;
  };

  return data;
}
var StyledDotsSpinner = styled__default['default'].div(_templateObject$1B(), function (_ref) {
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
  return /*#__PURE__*/React__default['default'].createElement(StyledDotsSpinner, props, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "bounce1"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "bounce2"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "bounce3"
  }));
};
DotsSpinner.propTypes = DotsSpinnerPropTypes;
DotsSpinner.defaultProps = DotsSpinnerDefaultProps;

var RocksSpinnerPropTypes = _extends({
  size: PropTypes__default['default'].number
}, COLOR_PROP_TYPES, DISPLAY_PROP_TYPES, DIMENSION_PROP_TYPES, SPACER_PROP_TYPES);
var RocksSpinnerDefaultProps = {
  size: 60
};

function _templateObject$1C() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", "px;\n  height: ", "px;\n  position: relative;\n\n  .dot {\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n    border-radius: 100%;\n    position: absolute;\n    bottom: 5px;\n    left: 0;\n\n    -webkit-animation: bounce 2.0s infinite ease-in-out;\n    animation: bounce 2.0s infinite ease-in-out;\n  }\n\n  .circle {\n    width: ", "px;\n    height: ", "px;\n    border: ", "px solid ", ";\n    border-radius: 100%;\n    position: absolute;\n    top: 5px;\n    right: 0;\n\n    -webkit-animation: bounce 2.0s infinite ease-in-out;\n    animation: bounce 2.0s infinite ease-in-out;\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s;\n  }\n\n  @-webkit-keyframes bounce {\n    0%, 100% { -webkit-transform: scale(0.0) }\n    50% { -webkit-transform: scale(1.0) }\n  }\n\n  @keyframes bounce {\n    0%, 100% {\n      transform: scale(0.0);\n      -webkit-transform: scale(0.0);\n    } 50% {\n      transform: scale(1.0);\n      -webkit-transform: scale(1.0);\n    }\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$1C = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRocksSpinner = styled__default['default'].div(_templateObject$1C(), function (_ref) {
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
  return /*#__PURE__*/React__default['default'].createElement(StyledRocksSpinner, props, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "dot"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "circle"
  }));
};
RocksSpinner.propTypes = RocksSpinnerPropTypes;
RocksSpinner.defaultProps = RocksSpinnerDefaultProps;

var TabPropTypes = _extends({
  currentTab: PropTypes__default['default'].number.isRequired,
  onChange: PropTypes__default['default'].func.isRequired,
  tabs: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({
    index: PropTypes__default['default'].number.isRequired,
    label: PropTypes__default['default'].string.isRequired,
    disabled: PropTypes__default['default'].bool,
    showTab: PropTypes__default['default'].bbol
  })).isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);

function _templateObject3$A() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    text-transform: initial;\n  }\n"]);

  _templateObject3$A = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$P() {
  var data = _taggedTemplateLiteralLoose(["\n  && {\n    min-height: fit-content;\n\n    .MuiTab-root {\n      min-height: 24px;\n    }\n  }\n\n  .MuiTabs-indicator {\n    display: none;\n  }\n\n  button {\n    min-width: fit-content;\n    margin-right: ", ";\n    padding: 0;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 120%;\n\n    &.Mui-selected {\n      font-weight: 600;\n    }\n  }\n\n  .Mui-selected {\n    &::after {\n      content: \"\";\n      position: absolute;\n      width: 100%;\n      left: 0;\n      bottom: 0;\n      height: 2px;\n      background-color: ", ";\n      border-radius: 2px 2px 0 0;\n    }\n  }\n"]);

  _templateObject2$P = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1D() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-bottom: ", ";\n  ", "\n  ", "\n"]);

  _templateObject$1D = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$d = styled__default['default'].div(_templateObject$1D(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledTabs = styled__default['default'](MuiTabs__default['default'])(_templateObject2$P(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(5);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.main;
});
var StyledTab = styled__default['default'](MuiTab__default['default'])(_templateObject3$A());
var Tab = function Tab(_ref4) {
  var tabs = _ref4.tabs,
      currentTab = _ref4.currentTab,
      _onChange = _ref4.onChange,
      props = _objectWithoutPropertiesLoose(_ref4, ["tabs", "currentTab", "onChange"]);

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Wrapper$d, props, /*#__PURE__*/React__default['default'].createElement(StyledTabs, {
    value: currentTab,
    onChange: function onChange(e, newTab) {
      return _onChange(newTab);
    },
    indicatorColor: "primary",
    variant: "scrollable"
  }, tabs.filter(function (t) {
    return typeof t.showTab === "boolean" ? t.showTab : true;
  }).map(function (t) {
    return /*#__PURE__*/React__default['default'].createElement(StyledTab, {
      disabled: t.disabled,
      value: t.index,
      disableRipple: true,
      label: t.label,
      key: t.index
    });
  }))));
};
Tab.propTypes = TabPropTypes;

var TablePropTypes = _extends({
  columns: PropTypes__default['default'].array.isRequired,
  noDataProps: PropTypes__default['default'].shape(),
  rows: PropTypes__default['default'].array.isRequired,
  rowsBottomBorderSm: PropTypes__default['default'].bool,
  rowsSize: PropTypes__default['default'].string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var TableDefaultProps = {
  columns: [],
  rows: [],
  rowsBottomBorderSm: false,
  rowsSize: "lg"
};

function _templateObject$1E() {
  var data = _taggedTemplateLiteralLoose(["\n  height: ", "px;\n  border-bottom: 1px solid ", ";\n  background-color: ", ";\n\n  ", "\n"]);

  _templateObject$1E = function _templateObject() {
    return data;
  };

  return data;
}
var Row$3 = styled__default['default'].tr(_templateObject$1E(), function (_ref) {
  var size = _ref.size;
  return size === "sm" ? 32 : 64;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.gray.semiLight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.common.white;
}, function (_ref4) {
  var hasData = _ref4.hasData,
      theme = _ref4.theme;
  return hasData && styled.css(["", "{height:unset;display:block;border-bottom:0;margin-bottom:", ";padding:", ";border-radius:8px;}"], theme.breakpoints.down("sm"), theme.spacing(2), theme.spacing(4));
});

function _templateObject$1F() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject$1F = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTd = styled__default['default'].td(_templateObject$1F(), function (_ref) {
  var align = _ref.align,
      displaySm = _ref.displaySm,
      hiddenLabelSm = _ref.hiddenLabelSm,
      flexSm = _ref.flexSm,
      rowsBottomBorderSm = _ref.rowsBottomBorderSm,
      theme = _ref.theme;
  return styled.css(["", " ", "{display:", ";margin-bottom:", ";", " ", " ", " ", " ", ":last-child{border-bottom:0;margin-bottom:0;}}"], align && "text-align: " + align + ";", theme.breakpoints.down("sm"), function (_ref2) {
    var hiddenSm = _ref2.hiddenSm;
    return hiddenSm ? "none" : "block";
  }, theme.spacing(4), rowsBottomBorderSm && styled.css(["border-bottom:1px solid ", ";"], theme.palette.gray.semiLight), displaySm === "inline" && "text-align: right;", hiddenLabelSm && "text-align: left;", !hiddenLabelSm && styled.css(["::before{content:attr(data-label);", " color:", ";padding-bottom:", ";display:block;font-weight:normal;font-size:12px;line-height:120%;}"], displaySm === "inline" && "float: left;", theme.palette.text.secondary, theme.spacing(2)), flexSm && styled.css(["display:flex;align-items:center;justify-content:space-around;"]));
});

var getContentByColType = function getContentByColType(content, col) {
  switch (col == null ? void 0 : col.type) {
    case "text":
      return /*#__PURE__*/React__default['default'].createElement(Text, {
        color: "textSecondary",
        content: content,
        fontWeight: "bold"
      });

    case "action":
      return content.map(function (act) {
        return /*#__PURE__*/React__default['default'].createElement(Icon, _extends({
          icon: act.icon,
          color: "secondary",
          mx: 4
        }, act));
      });

    case "icon":
      return /*#__PURE__*/React__default['default'].createElement(Icon, _extends({
        icon: content.icon,
        color: "secondary",
        size: "lg"
      }, content));

    default:
      return content;
  }
};

var Rows = function Rows(_ref3) {
  var columns = _ref3.columns,
      rows = _ref3.rows,
      rowsBottomBorderSm = _ref3.rowsBottomBorderSm,
      rowsSize = _ref3.rowsSize;
  return rows.map(function (row) {
    return /*#__PURE__*/React__default['default'].createElement(Row$3, {
      hasData: rows.length > 0,
      size: rowsSize
    }, Object.keys(row).map(function (td) {
      var col = columns.find(function (c) {
        return c.key === td;
      });
      var content = row[td];
      return /*#__PURE__*/React__default['default'].createElement(StyledTd, {
        "data-label": (col == null ? void 0 : col.label) || "",
        align: col == null ? void 0 : col.tdAlign,
        displaySm: (col == null ? void 0 : col.displaySm) || "block",
        flexSm: col == null ? void 0 : col.flexSm,
        hiddenSm: col == null ? void 0 : col.hiddenSm,
        hiddenLabelSm: col == null ? void 0 : col.hiddenLabelSm,
        rowsBottomBorderSm: rowsBottomBorderSm,
        style: (col == null ? void 0 : col.style) || {}
      }, getContentByColType(content, col));
    }));
  });
};

function _templateObject$1G() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject$1G = function _templateObject() {
    return data;
  };

  return data;
}
var StyledThead = styled__default['default'].thead(_templateObject$1G(), function (_ref) {
  var hasData = _ref.hasData,
      theme = _ref.theme;
  return hasData && styled.css(["", "{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;}"], theme.breakpoints.down("sm"));
});
var Heading$1 = function Heading(_ref2) {
  var columns = _ref2.columns,
      hasData = _ref2.hasData;
  return columns.length > 0 && /*#__PURE__*/React__default['default'].createElement(StyledThead, {
    hasData: hasData
  }, /*#__PURE__*/React__default['default'].createElement(Row$3, {
    size: "sm",
    hasData: hasData
  }, columns.map(function (_ref3) {
    var _ref3$label = _ref3.label,
        label = _ref3$label === void 0 ? "" : _ref3$label,
        _ref3$render = _ref3.render,
        render = _ref3$render === void 0 ? function () {} : _ref3$render;
    return /*#__PURE__*/React__default['default'].createElement("th", null, render() || label && /*#__PURE__*/React__default['default'].createElement(Text, {
      align: "left",
      color: "textSecondary",
      content: label,
      fontSize: "sm",
      fontStyle: "italic",
      fontWeight: "normal"
    }));
  })));
};
Heading$1.propTypes = {
  columns: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape()).isRequired,
  hasData: PropTypes__default['default'].bool.isRequired
};

function _templateObject$1H() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n"]);

  _templateObject$1H = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTr = styled__default['default'].tr(_templateObject$1H(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
});
var NoData = function NoData(_ref2) {
  var columnsCount = _ref2.columnsCount,
      props = _objectWithoutPropertiesLoose(_ref2, ["columnsCount"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledTr, null, /*#__PURE__*/React__default['default'].createElement("td", {
    colSpan: columnsCount
  }, /*#__PURE__*/React__default['default'].createElement(NoItem, _extends({
    my: 4
  }, props))));
};
NoData.propTypes = {
  columnsCount: PropTypes__default['default'].number.isRequired
};

function _templateObject2$Q() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject2$Q = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1I() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  ", "\n"]);

  _templateObject$1I = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTable = styled__default['default'].table(_templateObject$1I(), function (_ref) {
  var hasData = _ref.hasData,
      theme = _ref.theme;
  return hasData && styled.css(["", "{display:block;}"], theme.breakpoints.down("sm"));
});
var StyledTbody = styled__default['default'].tbody(_templateObject2$Q(), function (_ref2) {
  var hasData = _ref2.hasData,
      theme = _ref2.theme;
  return hasData && styled.css(["", "{display:block;}"], theme.breakpoints.down("sm"));
});
var Table = function Table(_ref3) {
  var columns = _ref3.columns,
      rows = _ref3.rows,
      noDataProps = _ref3.noDataProps,
      rowsBottomBorderSm = _ref3.rowsBottomBorderSm,
      rowsSize = _ref3.rowsSize,
      props = _objectWithoutPropertiesLoose(_ref3, ["columns", "rows", "noDataProps", "rowsBottomBorderSm", "rowsSize"]);

  var hasData = rows.length > 0;
  return /*#__PURE__*/React__default['default'].createElement(StyledTable, _extends({
    hasData: hasData
  }, props), /*#__PURE__*/React__default['default'].createElement(Heading$1, {
    columns: columns,
    hasData: hasData
  }), /*#__PURE__*/React__default['default'].createElement(StyledTbody, {
    hasData: hasData
  }, rows.length > 0 ? /*#__PURE__*/React__default['default'].createElement(Rows, {
    columns: columns,
    rows: rows,
    rowsBottomBorderSm: rowsBottomBorderSm,
    rowsSize: rowsSize
  }) : /*#__PURE__*/React__default['default'].createElement(NoData, _extends({
    columnsCount: columns.length
  }, noDataProps))));
};
Table.propTypes = TablePropTypes;
Table.defaultProps = TableDefaultProps;

var ErrorTemplatePropTypes = {
  action: PropTypes__default['default'].node,
  image: PropTypes__default['default'].string,
  statusCode: PropTypes__default['default'].number,
  subTitle: PropTypes__default['default'].string,
  title: PropTypes__default['default'].string
};
var ErrorTemplateDefaultProps = {
  title: "oops!"
};

const img$5 = "data:image/svg+xml,%3csvg width='754' height='278' viewBox='0 0 754 278' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='362.6' y='0.6' width='148.8' height='262.8' rx='7.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 18H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 35H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 130H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 246H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 113H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 229H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='374.5' cy='9.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='374.5' cy='26.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='374.5' cy='121.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='374.5' cy='237.5' r='2.9' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='384.5' cy='9.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='384.5' cy='26.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='384.5' cy='121.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='384.5' cy='237.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='394.5' cy='9.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='394.5' cy='26.5' r='2.9' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='394.5' cy='121.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='394.5' cy='237.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='42.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='55.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='68.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='81.6' width='25.8' height='6.8' rx='1.4' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='94.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='138.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='151.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='164.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='177.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='190.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='203.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='216.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='251.6' width='25.8' height='6.8' rx='1.4' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='42.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='55.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='68.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='81.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='94.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='138.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='151.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='164.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='177.6' width='93.8' height='6.8' rx='1.4' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='190.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='203.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='216.6' width='93.8' height='6.8' rx='1.4' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='251.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M481 263.5H753' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M1 263.5H125' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M362.5 88L359.555 90.5946C348.028 100.749 341.175 115.184 340.668 130.538C339.78 157.441 338.5 200.408 338.5 224.5C338.5 272.5 221.5 279.5 216.5 259C211.667 239.186 278.643 243.548 261.5 232.5C239 218 165.5 270.5 165.5 270.5' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M362 67.5C362 67.5 336.736 73.9914 324.5 103.5C310.29 137.77 313 122 307.5 175.5C303.437 215.024 192.792 166.527 206 204C215.998 232.366 272 197 276.5 235' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M100.333 119.992L100.822 108.763H136.951V91.3081H83.2449L81.7802 136.47H109.854C113.272 136.47 116.079 137.447 118.276 139.278C120.473 141.109 121.572 143.55 121.572 146.601C121.572 150.019 120.473 152.704 118.276 154.779C116.079 156.854 113.272 157.831 109.854 157.831C106.192 157.831 103.141 156.61 100.699 154.169C98.2583 151.728 96.9156 148.066 96.9156 143.062L77.8743 146.845C78.1184 155.756 81.1699 162.713 87.1508 167.596C93.1318 172.478 100.577 174.919 109.488 174.919C118.764 174.919 126.332 172.356 131.947 166.985C137.562 161.737 140.491 154.901 140.491 146.357C140.491 138.301 137.928 131.954 132.801 127.194C127.675 122.433 120.595 119.992 111.685 119.992H100.333Z' fill='%23292839'/%3e%3cpath d='M184.311 89.4771C173.447 89.4771 164.781 93.505 158.19 101.317C151.599 109.129 148.303 119.504 148.303 132.198C148.303 145.014 151.599 155.389 158.19 163.201C164.781 171.013 173.447 174.919 184.311 174.919C195.052 174.919 203.84 171.013 210.431 163.201C217.023 155.389 220.44 145.014 220.44 132.198C220.44 119.504 217.023 109.129 210.431 101.317C203.84 93.505 195.052 89.4771 184.311 89.4771ZM184.311 157.22C179.428 157.22 175.644 155.023 172.837 150.507C169.908 145.991 168.565 139.888 168.565 132.198C168.565 124.63 169.908 118.527 172.837 114.011C175.644 109.495 179.428 107.176 184.311 107.176C189.071 107.176 192.855 109.495 195.784 114.011C198.714 118.527 200.178 124.63 200.178 132.198C200.178 139.888 198.714 145.991 195.784 150.507C192.855 155.023 189.071 157.22 184.311 157.22Z' fill='%23292839'/%3e%3cpath d='M264.87 89.4771C254.007 89.4771 245.341 93.505 238.749 101.317C232.158 109.129 228.863 119.504 228.863 132.198C228.863 145.014 232.158 155.389 238.749 163.201C245.341 171.013 254.007 174.919 264.87 174.919C275.612 174.919 284.4 171.013 290.991 163.201C297.582 155.389 301 145.014 301 132.198C301 119.504 297.582 109.129 290.991 101.317C284.4 93.505 275.612 89.4771 264.87 89.4771ZM264.87 157.22C259.988 157.22 256.204 155.023 253.397 150.507C250.467 145.991 249.125 139.888 249.125 132.198C249.125 124.63 250.467 118.527 253.397 114.011C256.204 109.495 259.988 107.176 264.87 107.176C269.631 107.176 273.414 109.495 276.344 114.011C279.273 118.527 280.738 124.63 280.738 132.198C280.738 139.888 279.273 145.991 276.344 150.507C273.414 155.023 269.631 157.22 264.87 157.22Z' fill='%23292839'/%3e%3cpath d='M583.315 257.926C581.583 251.511 579.526 243.568 579.526 242.289H567.099L529.885 259.387C529.213 259.695 528.783 260.367 528.783 261.107C528.783 262.152 529.63 263 530.676 263H579.441C582.086 263 584.004 260.479 583.315 257.926Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M568.135 242.289V226.5H582.633L579.526 242.289H568.135Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M722.2 224.328L706.901 225.719L709.674 248.83C709.874 250.497 709.006 252.109 707.505 252.86L694.5 259.363C693.85 259.688 693.439 260.353 693.439 261.08C693.439 262.14 694.298 263 695.359 263H713.569C715.764 263 717.706 261.577 718.368 259.483L727.421 230.814C728.497 227.408 725.757 224.005 722.2 224.328Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M707 225.5L696.545 224V237.111L708.5 238L707 225.5Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M565 142.5C582.118 142.253 603.5 126 603.5 126L585.895 107.36L571.241 122.162C571.241 122.162 527.015 108.5 523 103C518.986 97.4996 514.98 70.5301 513 73.4999C510 77.9998 512 102 512 102C512 102 505.612 97.5001 503.5 97.5001C500.5 97.5001 510 114 517 115.5C533.898 119.121 551.472 142.695 565 142.5Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M638.553 46.4229L645 66.5L638.553 78.5257L626 70.5L628.198 50.5652C628.198 50.5652 616.902 55.7267 615 50.5652C612.265 43.1423 624.5 19.5 624.5 19.5L646.838 29.8538L638.553 46.4229Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M673.098 68.0838C677.803 79.4239 688.459 104.185 697.5 118.5C700.974 124 667.156 131.018 663 127C650.413 114.832 621.984 123.198 621.984 123.198C621.984 123.198 597 134 597 127C597 113.767 575.288 110.043 585 104C591.924 99.6918 602.704 82.6073 609.683 70.647C612.585 65.6747 622.021 65.1518 627.741 65.8043C629.563 66.0122 631.642 65.9536 634 65.5001C643 62.0989 643 58.5 643 58.5L664.239 61.2638C668.2 61.7793 671.567 64.3944 673.098 68.0838Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='581' y='57' width='118' height='73'%3e%3cpath d='M673.098 68.0838C677.803 79.4239 688.459 104.185 697.5 118.5C700.974 124 667.156 131.018 663 127C650.413 114.832 621.984 123.198 621.984 123.198C621.984 123.198 597 134 597 127C597 113.767 575.288 110.043 585 104C591.924 99.6918 602.704 82.6073 609.683 70.647C612.585 65.6747 622.021 65.1518 627.741 65.8043C629.563 66.0122 631.642 65.9536 634 65.5001C643 62.0989 643 58.5 643 58.5L664.239 61.2638C668.2 61.7793 671.567 64.3944 673.098 68.0838Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3c/mask%3e%3cg mask='url(%23mask0)'%3e%3cpath d='M682.5 112.5C680 95.9999 667.5 80.6989 667.5 60.4999C667.5 45.5 706 125.5 706 125.5L667.5 130.5C667.5 130.5 683.774 120.911 682.5 112.5Z' fill='%23FFE94E'/%3e%3c/g%3e%3cpath d='M673.098 68.0838C677.803 79.4239 688.459 104.185 697.5 118.5C700.974 124 667.156 131.018 663 127C650.413 114.832 621.984 123.198 621.984 123.198C621.984 123.198 597 134 597 127C597 113.767 575.288 110.043 585 104C591.924 99.6918 602.704 82.6073 609.683 70.647C612.585 65.6747 622.021 65.1518 627.741 65.8043C629.563 66.0122 631.642 65.9536 634 65.5001C643 62.0989 643 58.5 643 58.5L664.239 61.2638C668.2 61.7793 671.567 64.3944 673.098 68.0838Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M558 140.5C575 128.855 627.162 143.909 627.162 143.909L613.5 67.5C613.5 67.5 615.885 66.4615 617.5 66C621.984 64.7188 623.484 65.5 623.484 65.5L626.052 85.5398C626.687 90.4921 630.902 94.2017 635.895 94.2017C640.489 94.2017 644.483 91.0479 645.548 86.5786L652 59.5L660.5 61L652.437 89.1218C651.491 92.4208 651.631 95.9364 652.836 99.1497L669.621 143.909L690 148C690 148 700.512 168.848 698.617 182.5C695.91 202 647.874 222.613 647.874 222.613C647.874 222.613 690 218 698.617 218C702.12 218 698.48 222.534 698.617 228C698.748 233.262 702.802 239.447 698.617 240.217C683.5 243 603 270.5 592.5 240.217C587.289 225.189 627.162 187.403 627.162 187.403L588.846 167.727C588.846 167.727 591.142 212 587 228.826C586.145 232.298 580.565 227.624 575.5 228C569.68 228.432 562.352 232.542 563 228C566.472 203.674 544.393 149.82 558 140.5Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cmask id='mask1' mask-type='alpha' maskUnits='userSpaceOnUse' x='552' y='58' width='150' height='197'%3e%3cpath d='M558 140.5C575 128.855 627.162 143.909 627.162 143.909L613.5 67.5C613.5 67.5 615.885 66.4615 617.5 66C621.984 64.7188 623.484 65.5 623.484 65.5L626.052 85.5398C626.687 90.4921 630.902 94.2017 635.895 94.2017C640.489 94.2017 644.483 91.0479 645.548 86.5786L652 59.5L660.5 61L652.437 89.1218C651.491 92.4208 651.631 95.9364 652.836 99.1497L669.621 143.909L690 148C690 148 700.512 168.848 698.617 182.5C695.91 202 647.874 222.613 647.874 222.613C647.874 222.613 690 218 698.617 218C702.12 218 698.48 222.534 698.617 228C698.748 233.262 702.802 239.447 698.617 240.217C683.5 243 603 270.5 592.5 240.217C587.289 225.189 627.162 187.403 627.162 187.403L588.846 167.727C588.846 167.727 591.142 212 587 228.826C586.145 232.298 580.565 227.624 575.5 228C569.68 228.432 562.352 232.542 563 228C566.472 203.674 544.393 149.82 558 140.5Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3c/mask%3e%3cg mask='url(%23mask1)'%3e%3cpath d='M560.5 148C565.444 141.078 579 136.5 579 136.5L545.5 139L557.5 232C557.5 232 571.818 237.58 577 232C583.5 225 550.5 162 560.5 148Z' fill='%23FFE94E'/%3e%3c/g%3e%3cpath d='M558 140.5C575 128.855 627.162 143.909 627.162 143.909L613.5 67.5C613.5 67.5 615.885 66.4615 617.5 66C621.984 64.7188 623.484 65.5 623.484 65.5L626.052 85.5398C626.687 90.4921 630.902 94.2017 635.895 94.2017C640.489 94.2017 644.483 91.0479 645.548 86.5786L652 59.5L660.5 61L652.437 89.1218C651.491 92.4208 651.631 95.9364 652.836 99.1497L669.621 143.909L690 148C690 148 700.512 168.848 698.617 182.5C695.91 202 647.874 222.613 647.874 222.613C647.874 222.613 690 218 698.617 218C702.12 218 698.48 222.534 698.617 228C698.748 233.262 702.802 239.447 698.617 240.217C683.5 243 603 270.5 592.5 240.217C587.289 225.189 627.162 187.403 627.162 187.403L588.846 167.727C588.846 167.727 591.142 212 587 228.826C586.145 232.298 580.565 227.624 575.5 228C569.68 228.432 562.352 232.542 563 228C566.472 203.674 544.393 149.82 558 140.5Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M617.49 176.842L600.673 144.526C600.673 144.526 603.99 141.022 604.001 138.247C604.017 134.041 596.44 130.576 596.44 130.576L598.349 138.994L593.278 141.124L588.603 133.868C588.603 133.868 585.75 141.729 588.788 144.637C590.904 146.662 596.063 146.462 596.063 146.462L606.953 181.196C607.962 184.414 611.521 186.066 614.63 184.76C617.715 183.464 619.035 179.81 617.49 176.842Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='612.116' cy='178.224' r='2.4' transform='rotate(-22.7849 612.116 178.224)' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M688.5 150C695.5 141 694.5 123 694.5 123C694.5 123 686.477 126.026 680.5 127C675.682 127.785 667.5 128.5 667.5 128.5C667.5 128.5 672.571 139.977 667.5 142C653.308 147.662 615.771 154.265 615.771 154.265L609.123 152.271C606.816 151.578 604.315 152.121 602.502 153.707L599.082 156.699C597.895 157.738 597.429 159.378 597.893 160.886L600.404 169.046C600.92 170.724 602.471 171.87 604.227 171.87H607.963C609.658 171.87 611.296 171.254 612.572 170.138L618.878 164.621C618.878 164.621 673.745 168.971 688.5 150Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M646 36C656.532 29.4174 647.873 18.4624 647.873 18.4624L636.536 21.6798L635.5 31C635.5 31 637.527 29.1519 639.589 29.8537C642.746 30.9284 638 36 638 36L638.5 46.5C638.5 46.5 642 38.5 646 36Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M628.198 25.7115C635.773 25.2999 645.544 21.5959 648.567 20.3827C649.085 20.175 649.314 19.5886 649.07 19.0872C647.491 15.8504 641.779 5.10812 635.447 5.00003C628.49 4.88127 620.949 15.3558 620.949 15.3558L605.328 17.0914C604.369 17.1979 604.122 18.4229 604.98 18.8626C609.831 21.3459 620.312 26.1399 628.198 25.7115Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M627 187.5C627 187.5 641.5 175.5 651.5 170.5' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M627 143.5C627 143.5 628.219 148.681 629 152' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle r='18.4782' transform='matrix(-1 0 0 1 32.5218 188.609)' fill='%23AC00FC'/%3e%3ccircle r='7.06521' transform='matrix(-1 0 0 1 12.1087 211.717)' fill='%23AC00FC'/%3e%3cpath d='M77.4958 212.052L73.6516 215.96L78.8837 214.325C79.8437 214.025 80.1656 212.828 79.4856 212.087C78.9545 211.508 78.0468 211.492 77.4958 212.052Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M70.9662 199.06L73.6414 203.845L69.0272 200.885C68.1806 200.342 68.1863 199.103 69.038 198.568C69.7032 198.15 70.5828 198.374 70.9662 199.06Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M73.8248 208.507L74.2248 215.399L77.1198 209.132C77.6509 207.982 76.8056 206.67 75.5388 206.678C74.5494 206.685 73.7674 207.519 73.8248 208.507Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M75.443 196.611L73.2363 203.153L72.1001 196.343C71.8916 195.093 73.0535 194.051 74.273 194.394C75.2255 194.662 75.7593 195.673 75.443 196.611Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M68.9865 210.981L74.0283 215.697L71.8038 209.161C71.3956 207.962 69.8788 207.595 68.9671 208.474C68.2551 209.161 68.2639 210.305 68.9865 210.981Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M79.4563 200.275L73.3476 203.491L77.2198 197.776C77.9303 196.727 79.4902 196.773 80.1371 197.862C80.6424 198.713 80.3318 199.813 79.4563 200.275Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M67.0023 214.265L73.702 215.932L68.5783 211.305C67.6382 210.456 66.1343 210.873 65.7659 212.085C65.4781 213.031 66.0422 214.026 67.0023 214.265Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M80.5022 203.967L73.6001 203.805L79.7643 200.695C80.8953 200.125 82.2356 200.924 82.2707 202.191C82.2982 203.18 81.4914 203.99 80.5022 203.967Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M83.7305 191.275L74.6702 191.062L82.7619 186.98C84.2466 186.231 86.0059 187.281 86.0521 188.943C86.0881 190.242 85.029 191.305 83.7305 191.275Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M87.472 183.047L79.6183 181.984L87.0136 179.134C88.2285 178.666 89.5643 179.445 89.7561 180.732C89.9557 182.072 88.8143 183.229 87.472 183.047Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M92.4057 172.154L83.1148 177.484L88.7227 168.358C89.7099 166.752 91.9897 166.607 93.1727 168.075C94.2254 169.381 93.861 171.319 92.4057 172.154Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M75.0625 176.089L80.1558 182.161L78.6152 174.387C78.3621 173.11 76.9907 172.396 75.7996 172.922C74.5603 173.468 74.1919 175.051 75.0625 176.089Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M69.1468 186.852L74.0091 191.143L71.7423 185.067C71.3264 183.952 69.8922 183.649 69.0603 184.499C68.4105 185.164 68.45 186.237 69.1468 186.852Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M66.7748 249.77C62.1128 240.027 71.2202 224.914 72.7014 219.56C75.8325 208.241 70.0764 200.287 74.8714 189.566C77.341 184.045 83.5825 176.76 83.5825 176.76' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M32.7615 148.545C33.056 149.332 31.3225 150.616 31.3225 150.616C31.3225 150.616 29.8335 148.812 29.8736 147.451C29.9166 145.99 31.7505 144.072 31.7505 144.072C31.7505 144.072 32.0202 146.563 32.7615 148.545Z' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M37.61 148.498C37.1166 151.159 39.4303 155.185 39.4303 155.185C39.4303 155.185 42.3814 154.115 43.1426 152.494C43.9486 150.778 42.5406 149.555 42.6679 147.663C42.8196 145.407 44.182 142.075 44.182 142.075C44.182 142.075 38.2642 144.969 37.61 148.498Z' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M28.3674 163.858C31.1105 163.945 34.421 167.428 34.421 167.428C34.421 167.428 31.1248 167.864 28.1886 168.528C25.6298 169.107 20.769 170.909 19.5621 171.362C19.4784 171.394 19.4039 171.302 19.4569 171.23C20.4085 169.935 25.1202 163.756 28.3674 163.858Z' fill='%23292839' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M45.1446 173.28C39.441 167.162 28.3695 166.327 28.3695 166.327' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M51.4429 163.271C50.7271 166.177 47.3526 169.751 47.3526 169.751C47.3526 169.751 45.1083 165.841 45.2387 163.13C45.4159 159.447 50.1129 155.167 50.4466 154.867C50.4562 154.859 50.4689 154.862 50.473 154.874C50.5989 155.252 52.204 160.182 51.4429 163.271Z' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M48.1089 178.887C48.1089 178.887 45.846 168.549 48.6291 161.747' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M39.1011 163.284C39.1011 163.284 38.417 154.797 41.2002 147.995' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.5544 227.538C60.0576 215.51 60.1207 208.246 55.5807 196.593C51.1276 185.163 48.3216 178.819 42.3507 168.104C38.3513 160.927 34.9697 158.662 31.2167 150.252' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.998 231.001C63.7872 215.761 58.9938 207.826 57.1333 192.538C55.3368 177.777 57.3175 171.51 56.2431 154.47' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.6575 228.881C61.7154 222.365 56.9491 209.554 54.8751 206.151C47.136 193.453 41.6946 189.766 31.974 175.729' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M60.8658 183.843C58.8859 189.558 56.9396 188.649 56.9396 188.649C56.9396 188.649 56.4615 187.39 57.4633 185.907C58.2838 184.692 60.0947 183.931 60.7231 183.695C60.8138 183.661 60.8975 183.752 60.8658 183.843Z' fill='%23292839' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M46.5555 201.643C51.6517 204.899 52.6155 202.98 52.6155 202.98C52.6155 202.98 52.2101 201.695 50.5048 201.153C49.1079 200.708 47.2151 201.234 46.5759 201.438C46.4836 201.468 46.4739 201.59 46.5555 201.643Z' fill='%23292839' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M60.4308 173.536C58.7275 181.119 56.5246 179.733 56.5246 179.733C56.5246 179.733 56.5242 178.329 57.4987 176.407C58.2735 174.88 59.7076 173.793 60.2631 173.412C60.3484 173.353 60.4535 173.435 60.4308 173.536Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M40.5068 193.285C46.5443 198.179 47.4135 195.726 47.4135 195.726C47.4135 195.726 46.5435 194.624 44.5878 193.721C43.033 193.003 41.2339 193.039 40.5615 193.084C40.4583 193.091 40.4264 193.22 40.5068 193.285Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M59.5935 165.378C59.8612 170.928 56.448 171.418 56.448 171.418C56.448 171.418 56.4476 170.014 57.4221 168.093C58.1716 166.615 59.0443 165.661 59.4075 165.3C59.4767 165.231 59.5888 165.28 59.5935 165.378Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M36.1058 186.365C39.3362 190.886 42.3182 189.154 42.3182 189.154C42.3182 189.154 41.4482 188.053 39.4925 187.149C37.9884 186.455 36.7124 186.247 36.2032 186.189C36.1062 186.177 36.049 186.286 36.1058 186.365Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M61.1354 155.991C60.1071 159.796 56.4691 161.537 56.4691 161.537C56.4691 161.537 56.7106 160.23 57.4432 158.212C58.0715 156.481 60.3696 155.963 61.0111 155.85C61.0924 155.836 61.1569 155.911 61.1354 155.991Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M29.0771 179.955C32.2432 182.304 36.177 181.415 36.177 181.415C36.177 181.415 35.1771 180.539 33.3513 179.41C31.7854 178.441 29.6607 179.459 29.0876 179.768C29.0149 179.807 29.0108 179.906 29.0771 179.955Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M60.4417 148.79C59.7487 152.645 56.3124 154.697 56.3124 154.697C56.3124 154.697 57.3492 153.647 57.8934 151.57C58.3354 149.883 59.7641 148.961 60.2849 148.674C60.3666 148.629 60.4582 148.698 60.4417 148.79Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M25.1574 173.875C28.0913 176.471 32.0596 175.95 32.0596 175.95C32.0596 175.95 30.5951 175.769 28.8808 174.477C27.4882 173.428 25.7953 173.59 25.2088 173.687C25.1168 173.703 25.0875 173.813 25.1574 173.875Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M54.1191 150.845C54.4501 153.528 56.6517 154.999 56.6517 154.999C56.6517 154.999 55.9959 154.245 55.7158 152.778C55.4997 151.645 54.6534 150.985 54.2781 150.742C54.2007 150.692 54.1078 150.754 54.1191 150.845Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M31.392 171.569C32.7954 173.879 31.9796 176.398 31.9796 176.398C31.9796 176.398 32.0274 175.4 31.3372 174.075C30.8047 173.053 31.0592 172.009 31.2032 171.586C31.2329 171.499 31.3441 171.49 31.392 171.569Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.834 184.176C54.7874 189.9 56.7378 189 56.7378 189C56.7378 189 57.2218 187.744 56.2269 186.256C55.4121 185.037 53.6047 184.268 52.9774 184.029C52.8868 183.995 52.8027 184.085 52.834 184.176Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M53.0644 196.925C55.08 202.627 52.9918 203.13 52.9918 203.13C52.9918 203.13 51.8329 202.444 51.6913 200.66C51.5754 199.199 52.5164 197.474 52.8607 196.898C52.9104 196.815 53.0321 196.833 53.0644 196.925Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.9888 173.107C53.185 177.253 56.3412 180.15 56.3412 180.15C56.3412 180.15 56.9593 177.933 55.9644 176.446C55.164 175.249 53.7194 173.617 53.1855 173.026C53.1131 172.945 52.9837 172.999 52.9888 173.107Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M46.0811 188.335C48.4977 191.71 47.8173 195.94 47.8173 195.94C47.8173 195.94 45.9577 194.583 45.8161 192.799C45.7022 191.364 45.8244 189.188 45.8765 188.393C45.8836 188.285 46.0183 188.247 46.0811 188.335Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.9125 164.791C53.1139 168.918 56.3702 171.416 56.3702 171.416C56.3702 171.416 56.8827 169.618 55.8878 168.13C55.0874 166.933 53.6428 165.302 53.1089 164.71C53.0365 164.63 52.9072 164.684 52.9125 164.791Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M40.9852 181.764C43.3855 185.127 42.3788 189.105 42.3788 189.105C42.3788 189.105 40.8619 188.012 40.7203 186.228C40.6063 184.793 40.7286 182.617 40.7807 181.822C40.7877 181.714 40.9225 181.676 40.9852 181.764Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.3887 155.297C53.275 162.843 56.3913 161.535 56.3913 161.535C56.3913 161.535 56.9038 159.737 55.9089 158.249C55.0857 157.018 53.1945 155.627 52.5666 155.183C52.4847 155.125 52.377 155.198 52.3887 155.297Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M35.511 173.989C39.4935 180.46 36.2375 181.365 36.2375 181.365C36.2375 181.365 34.7205 180.272 34.5789 178.488C34.4618 177.012 35.0829 174.747 35.3007 174.01C35.3291 173.914 35.4584 173.904 35.511 173.989Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M64.9741 220.394C64.9741 220.394 65.6176 217.779 68.61 214.634' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.9751 208.44C65.9751 208.44 66.6186 205.825 69.611 202.68' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M67.1085 197.073C67.1085 197.073 71.8626 193.529 75.6874 185.875' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M70.4279 176.262C70.4279 176.262 75.011 170.597 80.7123 167.147' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.1953 212.691C65.1953 212.691 63.4852 207.869 63.0184 203.553' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M69.802 252.405C67.0322 236.057 62.7503 228.527 65.4639 211.642C67.7035 197.705 66.7438 177.712 76.3824 161.645' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3ccircle cx='70.3712' cy='214.236' r='0.602053' transform='rotate(-12.7384 70.3712 214.236)' fill='%23292839'/%3e%3ccircle cx='71.3718' cy='202.282' r='0.602053' transform='rotate(-12.7384 71.3718 202.282)' fill='%23292839'/%3e%3ccircle cx='76.8621' cy='185.61' r='0.602053' transform='rotate(-12.7384 76.8621 185.61)' fill='%23292839'/%3e%3ccircle cx='81.6317' cy='168.483' r='0.602053' transform='rotate(-12.7384 81.6317 168.483)' fill='%23292839'/%3e%3ccircle cx='75.7639' cy='188.944' r='0.602053' transform='rotate(-12.7384 75.7639 188.944)' fill='%23292839'/%3e%3ccircle cx='79.5482' cy='170.188' r='0.602053' transform='rotate(-12.7384 79.5482 170.188)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 61.5762 202.309)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 61.9308 200.35)' fill='%23292839'/%3e%3ccircle cx='71.6959' cy='210.541' r='0.90308' transform='rotate(-12.7384 71.6959 210.541)' fill='%23292839'/%3e%3ccircle cx='69.5747' cy='210.712' r='0.602053' transform='rotate(-12.7384 69.5747 210.712)' fill='%23292839'/%3e%3ccircle cx='71.8672' cy='212.663' r='0.602053' transform='rotate(-12.7384 71.8672 212.663)' fill='%23292839'/%3e%3ccircle cx='71.5612' cy='200.387' r='0.602053' transform='rotate(-12.7384 71.5612 200.387)' fill='%23292839'/%3e%3ccircle cx='77.2782' cy='183.355' r='0.90308' transform='rotate(-12.7384 77.2782 183.355)' fill='%23292839'/%3e%3ccircle cx='82.5022' cy='165.508' r='0.90308' transform='rotate(-12.7384 82.5022 165.508)' fill='%23292839'/%3e%3ccircle r='0.923111' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 61.355 198.476)' fill='%23292839'/%3e%3ccircle cx='68.799' cy='212.74' r='0.602053' transform='rotate(-12.7384 68.799 212.74)' fill='%23292839'/%3e%3ccircle cx='69.7995' cy='200.785' r='0.602053' transform='rotate(-12.7384 69.7995 200.785)' fill='%23292839'/%3e%3ccircle cx='75.2892' cy='184.113' r='0.602053' transform='rotate(-12.7384 75.2892 184.113)' fill='%23292839'/%3e%3ccircle cx='80.2477' cy='165.092' r='0.602053' transform='rotate(-12.7384 80.2477 165.092)' fill='%23292839'/%3e%3ccircle cx='72.4296' cy='187.846' r='0.602053' transform='rotate(-12.7384 72.4296 187.846)' fill='%23292839'/%3e%3ccircle cx='78.1648' cy='166.798' r='0.602053' transform='rotate(-12.7384 78.1648 166.798)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 63.6043 201.534)' fill='%23292839'/%3e%3cpath d='M67.596 190.544C67.596 190.544 65.8859 185.723 65.419 181.407' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M71.7813 171.327C71.7813 171.327 72.0603 167.662 71.5935 163.345' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 63.9774 180.162)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 70.2195 163.293)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.169376 -0.985551 -0.985551 0.169376 75.2809 159.892)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 64.3317 178.204)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 70.5063 160.142)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.169376 -0.985551 -0.985551 0.169376 77.3679 158.032)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 66.0049 179.388)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 72.1794 161.327)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 72.8338 163.936)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.169376 -0.985551 -0.985551 0.169376 77.9856 161.227)' fill='%23292839'/%3e%3cpath d='M93.7851 269.759C91.339 268.229 88.6876 268.363 88.6876 268.363C88.6876 268.363 41.9135 265.557 53.6962 272.55C57.5411 274.832 60.3812 275.595 64.7552 276.475C73.2447 278.185 73.3087 275.167 83.6765 275.167C88.219 275.167 97.6464 272.175 93.7851 269.759Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M77.5852 239.047L75.1459 232.774C74.6305 231.449 73.3544 230.576 71.9325 230.576H61.2102C59.8764 230.576 58.6621 231.345 58.0926 232.551L54.924 239.261C54.1579 240.883 52.7795 242.135 51.2235 243.028C47.3851 245.231 40.3588 250.592 39.0872 260.795C37.3205 274.97 50.8299 273.336 65.0714 274.446C78.805 275.517 92.4131 271.382 92.9828 266.714C94.6311 253.207 85.8078 245.967 81.247 243.172C79.6437 242.189 78.2668 240.8 77.5852 239.047Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M81.2607 243.087C81.2607 243.087 66.5086 248.174 50.739 243.087' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M85.2173 245.87C85.2173 245.87 67.3316 252.66 47.913 245.348' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M619 115C618.057 112.643 618 96.5 618 96.5L623.5 123C623.5 123 617.684 125.449 618 124.5C619 121.5 621 120 619 115Z' fill='%23292839'/%3e%3c/svg%3e";

const img$6 = "data:image/svg+xml,%3csvg width='881' height='421' viewBox='0 0 881 421' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='33.5' cy='301.5' r='23.5' fill='%23FFE94E'/%3e%3ccircle cx='7' cy='326' r='7' fill='%23FFE94E'/%3e%3cpath d='M29 385.5H229' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M95.1285 392.315C93.2079 391.114 91.1262 391.219 91.1262 391.219C91.1262 391.219 54.4023 389.016 63.6534 394.507C66.6721 396.298 68.902 396.897 72.3362 397.588C79.0015 398.931 79.0518 396.561 87.1919 396.561C90.7583 396.561 98.1601 394.212 95.1285 392.315Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M66.0752 394.391H81.6397C84.4768 394.391 87.1176 392.898 88.3377 390.337C89.7743 387.321 91.4741 383.127 91.8314 379.555C92.3141 374.728 91.2101 368.443 90.7858 366.286C90.7017 365.859 90.2916 365.586 89.8634 365.665C87.3704 366.125 79.3233 367.526 73.7873 367.526C68.2473 367.526 60.1924 366.123 57.7058 365.664C57.2799 365.586 56.8716 365.853 56.7846 366.277C56.3309 368.488 55.119 375.069 55.7433 379.555C56.2256 383.021 57.869 387.15 59.254 390.172C60.4675 392.819 63.1631 394.391 66.0752 394.391Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M75.3913 281.717C78.8713 297.3 79.401 316.602 69.7775 320.612C53.8001 327.269 48.5256 281.717 48.5256 281.717C48.5256 281.717 45.3179 240.416 54.1393 242.421C58.8828 243.499 58.8254 248.473 60.956 252.846C68.5746 268.484 72.7653 269.958 75.3913 281.717Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M53.3375 246.029C53.3375 246.029 74.1883 307.379 72.5844 367.526' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M100.653 303.369C89.8313 311.717 78.5991 332.641 88.6234 337.452C91.8314 338.992 101.71 321.819 110.677 312.191C120.426 301.723 141.954 293.827 136.741 286.528C134.736 283.721 114.687 292.543 100.653 303.369Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M79.802 366.723C79.802 366.723 83.0098 322.616 134.736 289.335' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M90.6281 279.311C90.164 291.147 88.6232 306.978 78.1978 306.978C64.1636 306.978 64.1635 291.949 64.1636 280.112C64.1637 263.672 72.9854 234 79.8017 234C87.8215 234 91.4301 258.861 90.6281 279.311Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M79.401 240.416C79.401 240.416 76.9952 327.027 72.9854 367.526' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M102.658 299.761C101.455 313.661 93.4356 329.625 83.4112 327.027C71.7915 324.015 78.1553 302.166 80.2033 297.756C85.4167 286.528 95.4405 259.662 105.465 262.469C115.489 265.276 103.861 285.86 102.658 299.761Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M81.7528 310.046C82.2744 308.008 82.7297 307.631 84.0129 307.632C85.2961 307.633 82.8127 315.96 81.7915 315.317C80.7704 314.674 81.2624 311.963 81.7528 310.046Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M74.2842 282.549C74.8353 283.909 74.6358 284.342 73.5564 284.987C72.477 285.633 70.5218 279.899 71.6923 279.731C72.8629 279.562 73.7659 281.27 74.2842 282.549Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M104.663 265.677C104.663 265.677 78.1981 329.032 75.7923 367.125' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M68.1736 295.751C69.953 307.098 74.8563 319.625 64.1637 323.819C52.0045 328.588 48.8104 309.38 43.7138 297.355C37.1007 281.751 31.6848 255.653 40.1052 255.653C44.405 255.653 44.9367 258.491 47.3227 262.068C51.8696 268.885 65.5955 279.31 68.1736 295.751Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.7675 301.084C53.3187 302.444 53.1191 302.877 52.0398 303.522C50.9604 304.168 49.0052 298.434 50.1757 298.266C51.3462 298.097 52.2493 299.805 52.7675 301.084Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M40.5062 259.262C40.5062 259.262 65.3668 311.389 73.7874 367.526' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M58.9512 323.418C67.3947 339.039 60.1547 342.264 57.3475 341.462C54.5404 340.66 48.9347 328.735 42.5114 321.413C34.1061 311.832 16.2075 304.973 18.4527 299.359C20.0563 295.349 50.9316 308.582 58.9512 323.418Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M20.4573 302.166C20.4573 302.166 58.5502 318.606 67.3717 367.125' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M90.6284 365.521C90.6284 365.521 73.7873 360.308 56.9463 365.521' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3ccircle cx='727' cy='114' r='90' fill='%23AC00FC'/%3e%3ccircle cx='815.5' cy='217.5' r='23.5' fill='%23AC00FC'/%3e%3cpath d='M698.52 181.119C698.52 181.119 664.348 203.198 643.292 188.807C631.046 180.439 621.548 177.008 619.006 162.395C616.764 149.513 628.208 132.707 628.208 132.707L634.527 156.209C635.44 159.607 639.902 160.397 641.927 157.52C642.636 156.513 642.861 155.244 642.541 154.054L638.043 137.323C636.29 130.806 638.658 123.877 644.032 119.795L667.258 102.156L667.504 135.032C667.504 135.032 671.787 109.442 684.009 100.516C695.558 92.0818 717.14 95.905 717.14 95.905C717.14 95.905 728.968 115.318 721.037 126.367C713.793 136.46 691.39 138.636 691.39 138.636C691.39 138.636 698.024 143.109 702.898 144.135C708.807 145.379 718.306 142.857 718.306 142.857L711.83 159.914C709.209 166.819 702.342 171.161 694.981 170.568L666.415 168.267C666.415 168.267 661.257 170.38 662.512 175.046C663.948 180.389 698.52 181.119 698.52 181.119Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M622 210C622 210 661.925 138.68 713.153 100.054' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M657.425 158.53C657.425 158.53 649.371 142.056 653.591 126.942' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M664.875 147.725C664.875 147.725 674.88 157.978 695.067 154.104' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M347.065 165.829C347.065 165.829 340.452 192.96 323.165 195.725C313.111 197.332 306.758 200.104 298.594 194.02C291.397 188.657 289.171 174.88 289.171 174.88L303.412 183.612C305.47 184.875 308.067 183.163 307.719 180.774C307.597 179.937 307.11 179.198 306.389 178.756L296.251 172.539C292.302 170.118 290.212 165.546 290.965 160.976L294.217 141.222L309.855 157.493C309.855 157.493 299.913 142.717 301.793 132.5C303.569 122.845 316.131 114.566 316.131 114.566C316.131 114.566 331.189 118.66 332.45 127.911C333.602 136.36 323.462 148.017 323.462 148.017C323.462 148.017 328.88 147.116 331.794 145.327C335.326 143.159 338.871 137.419 338.871 137.419L343.693 148.977C345.645 153.656 344.271 159.061 340.322 162.24L324.997 174.574C324.997 174.574 323.423 178.061 326.251 179.795C329.488 181.78 347.065 165.829 347.065 165.829Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M322.553 216.337C322.553 216.337 308.796 161.945 316.102 118.516' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M315.92 173.963C315.92 173.963 304.131 169.552 299.102 160.027' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M314.535 165.061C314.535 165.061 324.361 165.45 332.595 153.993' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M713.681 108.382C704.114 134.908 711.569 181.455 711.569 181.455C711.569 181.455 751.039 155.099 761.381 126.58C770.871 100.411 762.887 55 762.887 55C762.887 55 724.085 79.5329 713.681 108.382Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M763.035 55.3499C763.035 55.3499 765.62 126.851 711.717 181.805' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M763.035 55.3499C763.035 55.3499 711.354 104.828 711.717 181.805' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M762.887 55L711.919 181.308' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M420 269.117C429.313 288.84 458.889 310.166 458.889 310.166C458.889 310.166 465.994 274.148 456.012 252.913C446.852 233.427 417.61 213.012 417.61 213.012C417.61 213.012 409.871 247.667 420 269.117Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M417.882 213.122C417.882 213.122 458.474 250.738 459.162 310.276' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M417.882 213.122C417.882 213.122 416.782 268.453 459.162 310.276' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M417.61 213.012L458.999 309.894' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M549.555 97.5645C555.604 108.276 566.737 108.601 571.902 119.765C583.236 144.262 542.763 182.44 542.763 182.44C542.763 182.44 508.209 181.372 502.047 165.249C497.581 153.563 510.966 145.906 507.954 133.764C504.194 118.602 482.325 120.95 479.578 105.572C476.925 90.7227 494.814 85.2492 495.018 70.166C495.182 58.0263 483.333 52.4 485.728 40.4978C487.504 31.6737 493.525 28.7997 498.039 21.0119C502.128 13.9568 507.878 2.59478 507.878 2.59478C507.878 2.59478 514.436 24.8129 525.303 33.297C532.963 39.2774 541.064 36.2967 548.315 42.7675C564.285 57.02 539.03 78.9258 549.555 97.5645Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M507.523 2.24229C501.332 37.044 523.27 121.251 543.02 186.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M511.256 62.3345C511.256 62.3345 496.398 59.5548 485.742 44.7404' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M517.727 94.8402C517.727 94.8402 502.17 94.8912 489.408 84.3264' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M527.39 130.518C527.39 130.518 515.385 135.507 505.462 128.468' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M538.835 170.786C538.835 170.786 517.986 174.036 502.047 165.249' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M508.589 45.1928C508.589 45.1928 517.193 40.0409 521.756 29.7727' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M514.845 78.5861C514.845 78.5861 543.771 58.6921 546.542 41.0052' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M522.027 112.504C522.027 112.504 539.698 110.324 548.13 94.0332' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M533.257 151.147C533.257 151.147 552.196 148.114 572.619 122.591' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M584.578 115.586C580.088 123.537 571.825 123.778 567.991 132.065C559.578 150.248 589.62 178.586 589.62 178.586C589.62 178.586 615.268 177.793 619.841 165.826C623.156 157.152 613.221 151.468 615.457 142.455C618.248 131.201 634.481 132.944 636.52 121.53C638.489 110.508 625.211 106.445 625.059 95.2493C624.937 86.2385 633.733 82.0623 631.954 73.2278C630.636 66.6779 626.167 64.5447 622.817 58.7642C619.782 53.5274 615.514 45.0938 615.514 45.0938C615.514 45.0938 610.646 61.5855 602.58 67.8829C596.894 72.3219 590.88 70.1094 585.499 74.9125C573.645 85.4916 592.39 101.751 584.578 115.586Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M615.777 44.8323C620.843 73.3132 600.53 146.372 584.994 196' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M613.006 89.4366C613.006 89.4366 624.035 87.3733 631.944 76.3772' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M608.203 113.564C608.203 113.564 619.75 113.602 629.223 105.76' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M601.031 140.046C601.031 140.046 609.941 143.75 617.306 138.525' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M592.535 169.936C592.535 169.936 608.01 172.348 619.841 165.826' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M614.986 76.7129C614.986 76.7129 608.599 72.8888 605.212 65.2672' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M610.342 101.499C610.342 101.499 588.871 86.7329 586.815 73.6046' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M605.011 126.675C605.011 126.675 591.895 125.058 585.636 112.965' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M596.676 155.359C596.676 155.359 582.618 153.108 567.459 134.163' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M612.759 248.799C607.602 254.452 600.808 253.1 596.124 259.15C585.847 272.424 605.073 301.196 605.073 301.196C605.073 301.196 626.168 305.353 632.145 296.437C636.478 289.974 629.429 283.471 632.943 276.529C637.331 267.861 650.262 272.325 654.065 263.385C657.739 254.752 647.656 248.947 649.629 239.775C651.218 232.393 659.184 230.63 659.387 223.082C659.537 217.486 656.287 214.906 654.634 209.557C653.136 204.712 651.231 197.025 651.231 197.025C651.231 197.025 644.165 209.581 636.398 213.213C630.923 215.773 626.426 212.84 621.131 215.754C609.468 222.173 621.731 238.964 612.759 248.799Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M575.437 351.867C575.437 351.867 649.606 235.028 651.494 196.86' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M640.875 232.769C640.875 232.769 650.269 233.15 658.788 225.652' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M632.432 251.574C632.432 251.574 641.855 253.768 651.061 249.139' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M621.613 271.858C621.613 271.858 628.196 276.552 635.19 273.665' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M609.074 294.677C609.074 294.677 621.261 299.547 632.145 296.437' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M644.876 222.749C644.876 222.749 640.376 218.429 639.038 211.57' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M636.439 242.122C636.439 242.122 621.671 226.039 622.451 214.932' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M627.369 261.684C627.369 261.684 616.96 257.905 614.114 246.857' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M615.187 283.548C615.187 283.548 604.128 279.076 595.297 260.763' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M417.435 199.867C433.924 200.072 455.047 179.655 455.047 179.655C455.047 179.655 464.972 177.188 469.913 173.243C476.938 167.633 478.53 161.766 481.209 153.185C487.039 134.508 472.777 103.799 472.777 103.799C472.777 103.799 460.74 115.65 457.42 125.481C455.434 131.358 455.441 139.842 455.712 145.262C455.854 148.111 453.714 150.637 450.866 150.804C448.348 150.951 446.126 149.19 445.802 146.688C445.194 141.992 444.47 134.466 445.154 128.969C446.012 122.072 450.486 113.105 454.976 105.553C460.207 96.7547 459.003 85.2044 451.228 78.5471L425.684 56.676L420.238 93.8202C419.949 95.7906 418.316 97.2872 416.328 97.4036C413.764 97.5536 411.636 95.3916 411.683 92.8236C411.84 84.1856 411.016 66.3045 402.21 58.0492C389.575 46.2049 361.925 56.2499 361.925 56.2499C361.925 56.2499 356.056 82.8551 364.267 96.293C373.083 110.719 386.434 117.003 393.24 119.395C395.546 120.205 397.024 122.663 396.388 125.022C395.778 127.283 393.451 128.622 391.19 128.013L361.498 120.009L375.296 156.34C377.807 162.951 384.317 167.167 391.377 166.754L422.231 164.949C423.156 164.895 424.053 165.279 424.651 165.987C426.162 167.774 425.086 170.524 422.763 170.811L385.523 175.41C385.523 175.41 399.85 199.649 417.435 199.867Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M482.5 233.5C482.5 233.5 420.5 103.5 373.834 65.469' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M425.108 128.582C425.108 128.582 440.382 107.153 436.044 84.3677' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M435.115 145.526C435.115 145.526 402.081 154.471 384.496 144.982' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M451.342 174.628C451.342 174.628 422.299 191.854 406.299 183.775' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M449.054 169.753C449.054 169.753 473.251 155.315 471.499 125.367' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M432.09 306.936V306.336H431.49H407.461V159.328V158.728H406.861H350.78H350.446L350.27 159.012L253.252 315.606L253.162 315.752V315.922V350.203V350.803H253.762H350.18V401.625V402.225H350.78H406.861H407.461V401.625V350.803H431.49H432.09V350.203V306.936ZM350.18 234.496V306.336H308.224L347.796 238.357L347.8 238.35L350.18 234.496Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M494.952 172.941L494.95 172.943C477.349 188.056 465.783 211.826 460.184 244.154L452.631 287.77C447.069 319.882 450.033 346.111 461.616 366.39C473.211 386.69 492.408 399.136 519.116 403.761C545.605 408.349 567.696 403.11 585.314 387.983C603.025 372.888 614.645 349.128 620.244 316.799L627.77 273.347C633.35 241.126 630.396 214.843 618.812 194.563C607.218 174.264 588.076 161.827 561.476 157.22C534.879 152.614 512.678 157.834 494.952 172.941ZM572.521 217.11L572.522 217.113C575.5 226.166 575.545 239.226 572.578 256.357L562.356 315.383C559.279 332.497 554.819 344.602 549.034 351.796C546.16 355.326 542.872 357.752 539.171 359.104C535.469 360.456 531.32 360.745 526.704 359.946C521.924 359.118 517.996 357.401 514.893 354.815C511.791 352.231 509.485 348.753 507.984 344.357C504.99 335.418 504.989 322.089 508.071 304.297L518.634 243.305C521.72 227.438 526.055 216.036 531.591 209.018C534.398 205.537 537.649 203.148 541.343 201.824C545.04 200.498 549.216 200.226 553.888 201.035C558.664 201.863 562.583 203.618 565.671 206.283C568.758 208.947 571.046 212.546 572.521 217.11Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M805.85 385.409L794.678 335.83L818.119 330.548L818.705 330.416L818.573 329.831L809.061 287.622L808.929 287.037L808.344 287.168L784.903 292.451L752.586 149.039L752.454 148.454L751.869 148.585L697.16 160.914L696.834 160.987L696.725 161.303L636.503 335.394L636.448 335.555L636.485 335.722L644.021 369.164L644.153 369.75L644.738 369.618L738.809 348.42L747.917 385.683L748.029 386.14L748.5 386.14L805.265 386.14L806.015 386.14L805.85 385.409ZM713.231 234.96L729.023 305.043L688.093 314.266L711.753 239.25L711.756 239.243L713.231 234.96Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M292 385.5H880' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3crect x='285' y='386' width='587' height='24' fill='white'/%3e%3cpath d='M195.095 101.784V99.0328C195.095 98.558 194.71 98.1731 194.235 98.1731C193.76 98.1731 193.375 98.558 193.375 99.0328V101.784C193.375 102.259 193.76 102.644 194.235 102.644C194.71 102.644 195.095 102.259 195.095 101.784Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M291.005 95.7656L197.126 97.8289V102.987L291.005 104.706C291.005 104.706 292.042 101.878 292 100C291.962 98.3018 291.005 95.7656 291.005 95.7656Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M225.014 99.0395L225.614 96.0355C225.835 94.9315 225.131 93.857 224.023 93.6597C222.424 93.3749 220.168 93.0341 218.447 93.0148C216.241 92.9902 212.432 93.4748 210.215 93.7883C209.21 93.9304 208.474 94.7933 208.474 95.8079V98.128C208.474 99.2849 209.425 100.216 210.582 100.201C212.613 100.175 215.633 100.155 217.415 100.236C219.048 100.311 221.2 100.528 222.729 100.699C223.806 100.819 224.801 100.101 225.014 99.0395Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M221.886 107.114C220.247 110.348 221.886 115.711 221.886 115.711L212.945 117.086C212.945 117.086 216.384 108.145 212.945 107.114C209.887 106.196 206.755 103.331 206.755 103.331L224.293 103.675C224.293 103.675 222.578 105.748 221.886 107.114Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M252.835 96.4534H249.052C249.052 96.4534 251.142 100.587 250.772 103.331C250.426 105.891 248.714 106.811 247.677 109.177C244.863 115.594 243.894 126.715 243.894 126.715L237.36 121.557C237.36 121.557 241.569 113.356 241.143 107.801C240.792 103.225 236.51 101.359 237.016 96.7973C237.36 93.7024 247.677 90.9513 250.772 92.6707C252.243 93.4879 252.835 96.4534 252.835 96.4534Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M222.23 147.692C226.012 140.126 226.356 123.276 225.325 115.367C224.921 112.272 221.725 115.515 218.447 115.367C214.731 115.199 212.601 111.24 211.225 115.367C209.562 120.357 209.85 147.692 209.85 147.692L175.118 135.312L178.557 147.692C178.557 147.692 214.294 163.563 222.23 147.692Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M195.483 378.817L192.5 366.5H185.5L184.785 376.333L189.649 380.482L195.483 378.817Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M162.815 378.817L159.5 366.5L153.196 367.532L152.116 376.333L156.98 380.482L162.815 378.817Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M183.343 384.265L184.785 376.333C184.785 376.333 188.434 377.624 190.753 378.091C192.627 378.468 194.312 378.189 196.047 377.66C197.169 377.317 198.39 377.445 199.364 378.098L209.14 384.653C209.744 385.058 209.457 386 208.731 386H184.79C183.872 386 183.179 385.168 183.343 384.265Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M150.674 384.265L152.116 376.333C152.116 376.333 155.765 377.624 158.084 378.091C159.958 378.468 161.644 378.189 163.379 377.66C164.501 377.317 165.721 377.445 166.696 378.098L176.472 384.653C177.076 385.058 176.789 386 176.062 386H152.122C151.204 386 150.51 385.168 150.674 384.265Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M207.443 301.062C207.443 285.201 192.312 218.531 192.312 218.531L161.019 214.06C161.019 214.06 162.319 236.936 168.241 256.701C174.677 278.186 185.778 296.931 185.778 303.125C185.778 310.304 178.816 350.131 183 367.5C183.649 370.193 186.575 367.564 190 367.5C193.441 367.435 197.38 369.923 198 367.5C201.036 355.631 207.443 313.743 207.443 301.062Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='160' y='213' width='49' height='157'%3e%3cpath d='M207.443 301.062C207.443 285.201 192.312 218.531 192.312 218.531L161.019 214.06C161.019 214.06 162.319 236.936 168.241 256.701C174.677 278.186 185.778 296.931 185.778 303.125C185.778 310.304 178.816 350.131 183 367.5C183.649 370.193 186.575 367.564 190 367.5C193.441 367.435 197.38 369.923 198 367.5C201.036 355.631 207.443 313.743 207.443 301.062Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3c/mask%3e%3cg mask='url(%23mask0)'%3e%3cpath d='M196 359C196 342 207.5 297 207.5 297C207.5 297 214 360.5 202 371.5C195.465 377.49 179.5 371.5 179.5 368.5C179.5 363.56 196 365.206 196 359Z' fill='%23FFE94E'/%3e%3c/g%3e%3cpath d='M207.443 301.062C207.443 285.201 192.312 218.531 192.312 218.531L161.019 214.06C161.019 214.06 162.319 236.936 168.241 256.701C174.677 278.186 185.778 296.931 185.778 303.125C185.778 310.304 178.816 350.131 183 367.5C183.649 370.193 186.575 367.564 190 367.5C193.441 367.435 197.38 369.923 198 367.5C201.036 355.631 207.443 313.743 207.443 301.062Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M176.5 273.5L187 221L181.5 220L174.5 275.5L176.5 273.5Z' fill='%23292839'/%3e%3cpath d='M177.181 264.61C178.54 243.124 183.371 214.404 183.371 214.404H155.22C155.22 214.404 149.13 227.985 146.92 237.196C140.261 264.956 153.454 294.528 153.454 305.188C153.454 310.003 145.5 356 150.5 368C151.609 370.661 154.544 367.852 157.5 368C160.839 368.167 164.205 370.951 165 368C169.058 352.943 176.023 319.975 177.181 308.627C177.989 300.718 176.107 281.594 177.181 264.61Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M171.679 118.118L172.711 130.498L165.489 134.968L160.331 130.498L165.489 115.711L160.331 91.9832L186.81 94.3903C186.81 94.3903 189.905 113.304 179.245 121.901C175.497 124.923 171.679 118.118 171.679 118.118Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M148.639 180.016C148.511 159.631 158.956 126.715 158.956 126.715C158.956 126.715 161.466 130.097 164.458 131.185C168.241 132.561 172.711 130.498 172.711 130.498C172.711 130.498 183.549 141.297 186.466 150.786C190.294 163.238 185.226 171.175 186.466 184.143C188.023 200.426 197.377 216.67 194.719 218.531C184.747 225.511 164.802 213.372 156.893 216.467C143.752 221.609 148.728 194.127 148.639 180.016Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cmask id='mask1' mask-type='alpha' maskUnits='userSpaceOnUse' x='147' y='125' width='49' height='97'%3e%3cpath d='M148.639 180.016C148.511 159.631 158.956 126.715 158.956 126.715C158.956 126.715 161.466 130.097 164.458 131.185C168.241 132.561 172.711 130.498 172.711 130.498C172.711 130.498 183.549 141.297 186.466 150.786C190.294 163.238 185.226 171.175 186.466 184.143C188.023 200.426 197.377 216.67 194.719 218.531C184.747 225.511 164.802 213.372 156.893 216.467C143.752 221.609 148.728 194.127 148.639 180.016Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3c/mask%3e%3cg mask='url(%23mask1)'%3e%3cpath d='M161.5 170C165.112 153.39 162.5 129.5 162.5 129.5L141.5 157L147 209C147 209 158.196 185.192 161.5 170Z' fill='%23FFE94E'/%3e%3c/g%3e%3cpath d='M148.639 180.016C148.511 159.631 158.956 126.715 158.956 126.715C158.956 126.715 161.466 130.097 164.458 131.185C168.241 132.561 172.711 130.498 172.711 130.498C172.711 130.498 183.549 141.297 186.466 150.786C190.294 163.238 185.226 171.175 186.466 184.143C188.023 200.426 197.377 216.67 194.719 218.531C184.747 225.511 164.802 213.372 156.893 216.467C143.752 221.609 148.728 194.127 148.639 180.016Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M177.525 80.979C184.372 83.561 190.812 86.4 191.28 93.7025C191.892 103.244 169.96 105.738 169.96 105.738C169.96 105.738 165.855 102.21 163.77 103.675C161.215 105.471 167.209 110.896 167.209 110.896C167.209 110.896 164.873 119.542 162.738 125.683C159.658 134.547 161.047 138.316 160.675 147.692C160.16 160.677 157.157 168.253 150.359 179.328C141.031 194.525 124.912 214.116 115.283 208.558C107.03 203.794 118.583 184.275 117.69 166.949C116.915 151.908 103.565 141.093 112.188 128.778C118.345 119.985 128.504 120.428 138.667 112.96C153.507 102.054 160.294 74.4809 177.525 80.979Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M217.071 162.822C206.325 171.419 163.082 162.822 163.082 162.822L169.616 138.407C169.616 138.407 199.877 149.28 211.569 144.597C217.071 142.393 229.107 124.996 235.641 118.118C237.347 116.322 238.522 119.728 241.143 121.557C244.093 123.615 248.708 122.588 246.645 126.715C243.999 132.007 234.265 149.067 217.071 162.822Z' fill='white' stroke='white' stroke-width='1.2'/%3e%3cpath d='M175 164.5C175 164.5 206.325 171.419 217.071 162.822C234.265 149.067 243.999 132.007 246.645 126.715C248.708 122.588 244.093 123.615 241.143 121.557C238.522 119.728 237.347 116.322 235.641 118.118C229.107 124.996 217.071 142.393 211.569 144.597C199.877 149.28 169.616 138.407 169.616 138.407' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M265 96.5V104' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M268 96.5V104' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M290.5 96C290.5 96 287.5 100 290.5 104.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M169.5 114.5L172 118.5L172.5 130.5L169.5 114.5Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M185 171C184.643 167.428 176.5 165 176.5 165L187 167L186 175.5L186.5 184C186.5 184 185.5 176 185 171Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3c/svg%3e";

function _templateObject2$R() {
  var data = _taggedTemplateLiteralLoose(["\n  max-width: 750px;\n  width: 100%;\n"]);

  _templateObject2$R = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1J() {
  var data = _taggedTemplateLiteralLoose(["\n  text-align: center;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: ", ";\n"]);

  _templateObject$1J = function _templateObject() {
    return data;
  };

  return data;
}
var ErrorWrapper = styled__default['default'].div(_templateObject$1J(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
});
var StyledImage$4 = styled__default['default'](Image)(_templateObject2$R());

var getImg = function getImg(image, statusCode) {
  switch (statusCode) {
    case 500:
      return img$5;

    case 404:
      return img$6;

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
  return /*#__PURE__*/React__default['default'].createElement(ErrorWrapper, null, imgSrc && /*#__PURE__*/React__default['default'].createElement(StyledImage$4, {
    src: imgSrc,
    alt: title,
    mb: 12
  }), /*#__PURE__*/React__default['default'].createElement(H1, {
    content: title,
    mb: 2
  }), subTitle && /*#__PURE__*/React__default['default'].createElement(Text, {
    content: subTitle,
    color: "textSecondary",
    mb: 6
  }), action);
};
ErrorTemplate.propTypes = ErrorTemplatePropTypes;
ErrorTemplate.defaultProps = ErrorTemplateDefaultProps;

function _templateObject2$S() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  max-width: 100%;\n  user-select: none;\n  object-fit: cover;\n"]);

  _templateObject2$S = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1K() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-radius: 100%;\n  && {\n    margin: ", ";\n  }\n"]);

  _templateObject$1K = function _templateObject() {
    return data;
  };

  return data;
}
var CloseModalIcon$1 = styled__default['default'](Icon).attrs(function () {
  return {
    size: "lg"
  };
})(_templateObject$1K(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
});
var StyledImg$1 = styled__default['default'](Image)(_templateObject2$S());
var ImageModal = function ImageModal(_ref2) {
  var isOpen = _ref2.isOpen,
      onClose = _ref2.onClose,
      imgSrc = _ref2.imgSrc;
  return /*#__PURE__*/React__default['default'].createElement(Modal, {
    onClose: onClose,
    isOpen: isOpen,
    maxWidth: "sm"
  }, /*#__PURE__*/React__default['default'].createElement(CloseModalIcon$1, {
    color: "secondary",
    icon: "times",
    onClick: onClose
  }), /*#__PURE__*/React__default['default'].createElement(StyledImg$1, {
    src: imgSrc,
    alt: "Attachment preview"
  }));
};
ImageModal.propTypes = {
  isOpen: PropTypes__default['default'].bool.isRequired,
  onClose: PropTypes__default['default'].func.isRequired,
  imgSrc: PropTypes__default['default'].string
};
ImageModal.defaultProps = {
  imgSrc: ""
};

var ThumbnailPropTypes = _extends({
  hasPreview: PropTypes__default['default'].bool,
  imgSrc: PropTypes__default['default'].string,
  onClick: PropTypes__default['default'].func
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ThumbnailDefaultProps = {
  hasPreview: false,
  onClick: function onClick() {},
  imgSrc: ""
};

function _templateObject3$B() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject3$B = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$T() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.1s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  :hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"]);

  _templateObject2$T = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1L() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  height: 48px;\n  width: 48px;\n  text-align: center;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"]);

  _templateObject$1L = function _templateObject() {
    return data;
  };

  return data;
}
var Container$d = styled__default['default'].div(_templateObject$1L(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var IconWrapper$1 = styled__default['default'].div(_templateObject2$T());
var StyledIcon$6 = styled__default['default'](Icon)(_templateObject3$B(), function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return !color && theme.palette.common.white;
});
var Thumbnail = function Thumbnail(_ref3) {
  var hasPreview = _ref3.hasPreview,
      imgSrc = _ref3.imgSrc,
      onClick = _ref3.onClick,
      props = _objectWithoutPropertiesLoose(_ref3, ["hasPreview", "imgSrc", "onClick"]);

  var _useState = React.useState(false),
      loadError = _useState[0],
      setLoadError = _useState[1];

  var _useState2 = React.useState(false),
      previewOpen = _useState2[0],
      setPreviewOpen = _useState2[1];

  var handleClick = function handleClick() {
    if (hasPreview) setPreviewOpen(true);else onClick();
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Container$d, _extends({
    onClick: handleClick
  }, props), loadError ? /*#__PURE__*/React__default['default'].createElement(StyledIcon$6, {
    color: "secondary",
    icon: "file",
    size: "lg"
  }) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(IconWrapper$1, null, /*#__PURE__*/React__default['default'].createElement(StyledIcon$6, {
    icon: "search-plus"
  })), /*#__PURE__*/React__default['default'].createElement(Image, {
    cover: true,
    src: imgSrc,
    alt: "Thumbnail",
    onError: function onError() {
      return setLoadError(true);
    },
    width: "48px"
  }))), hasPreview && /*#__PURE__*/React__default['default'].createElement(ImageModal, {
    imgSrc: imgSrc,
    isOpen: previewOpen,
    onClose: function onClose() {
      return setPreviewOpen(false);
    }
  }));
};
Thumbnail.propTypes = ThumbnailPropTypes;
Thumbnail.defaultProps = ThumbnailDefaultProps;

var TooltipPropTypes = {
  arrow: PropTypes__default['default'].bool,
  children: PropTypes__default['default'].node.isRequired,
  content: PropTypes__default['default'].node,
  contentProps: PropTypes__default['default'].shape({}),
  interactive: PropTypes__default['default'].bool,
  placement: PropTypes__default['default'].string,
  renderContent: PropTypes__default['default'].func
};
var TooltipDefaultProps = {
  arrow: true,
  interactive: true,
  placement: "top",
  renderContent: function renderContent() {}
};

function _templateObject$1M() {
  var data = _taggedTemplateLiteralLoose(["\n  & .MuiTooltip-tooltip {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  & .MuiTooltip-arrow {\n    color: ", ";\n  }\n"]);

  _templateObject$1M = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTooltip = styled__default['default'](function (props) {
  return /*#__PURE__*/React__default['default'].createElement(MuiTooltip__default['default'], _extends({
    classes: {
      popper: props.className,
      tooltip: "tooltip"
    }
  }, props));
})(_templateObject$1M(), function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.dark;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.common.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.gray.dark;
});
var Tooltip = function Tooltip(_ref4) {
  var children = _ref4.children,
      content = _ref4.content,
      contentProps = _ref4.contentProps,
      renderContent = _ref4.renderContent,
      props = _objectWithoutPropertiesLoose(_ref4, ["children", "content", "contentProps", "renderContent"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledTooltip, _extends({
    title: renderContent() || /*#__PURE__*/React__default['default'].createElement(Text, _extends({
      fontStyle: "italic",
      size: "sm"
    }, contentProps), content)
  }, props), /*#__PURE__*/React__default['default'].createElement("span", null, children));
};
Tooltip.propTypes = TooltipPropTypes;
Tooltip.defaultProps = TooltipDefaultProps;

var convertHexToRGBA = function convertHexToRGBA(hexCode, opacity) {
  var hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = "" + hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);
  return "rgba(" + r + "," + g + "," + b + "," + opacity + ")";
};

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

var formatPrice = function formatPrice(price, locale, currency) {
  if (price === void 0) {
    price = 0;
  }

  if (locale === void 0) {
    locale = "de-DE";
  }

  if (currency === void 0) {
    currency = "EUR";
  }

  return price.toLocaleString(locale, {
    style: "currency",
    currency: currency
  });
};
var formatDateAndTime = function formatDateAndTime(date, options, locale) {
  if (locale === void 0) {
    locale = "en-US";
  }

  var defaultOptions = _extends({
    showDate: true,
    showTime: true
  }, options);

  var dateOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  };
  var timeOptions = {
    hour12: false,
    hour: "numeric",
    minute: "2-digit"
  };
  return new Date(date).toLocaleString(locale, _extends({}, defaultOptions.showTime ? timeOptions : {}, defaultOptions.showDate ? dateOptions : {}));
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

function _templateObject2$U() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 16px;\n  background-color: ", ";\n"]);

  _templateObject2$U = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1N() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  flex: 1;\n\n  padding: ", ";\n  }\n\n  ", " {\n    padding: ", ";\n  }\n"]);

  _templateObject$1N = function _templateObject() {
    return data;
  };

  return data;
}
var StyledContent$1 = styled__default['default'].div(_templateObject$1N(), function (_ref) {
  var isHorizontal = _ref.isHorizontal,
      theme = _ref.theme;
  return !isHorizontal ? theme.spacing(6, 6, 6, 10) : theme.spacing(0);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.down("sm");
}, function (_ref3) {
  var isHorizontal = _ref3.isHorizontal,
      theme = _ref3.theme;
  return theme.spacing(4, 4, 4, isHorizontal ? 4 : 8);
});
var ActionWrapper = styled__default['default'].div(_templateObject2$U(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.common.white;
});
var WizardStepContent = function WizardStepContent(_ref5) {
  var children = _ref5.children,
      content = _ref5.content,
      currentStep = _ref5.currentStep,
      handleNext = _ref5.handleNext,
      handlePrev = _ref5.handlePrev,
      isFirstStep = _ref5.isFirstStep,
      isLastStep = _ref5.isLastStep,
      isHorizontal = _ref5.isHorizontal,
      nextStepMethod = _ref5.nextStepMethod,
      renderActionButtons = _ref5.renderActionButtons,
      stepCount = _ref5.stepCount,
      submitButtonDisabled = _ref5.submitButtonDisabled,
      onFinishDisabled = _ref5.onFinishDisabled,
      submitButtonLoading = _ref5.submitButtonLoading,
      showNavigationButtons = _ref5.showNavigationButtons,
      props = _objectWithoutPropertiesLoose(_ref5, ["children", "content", "currentStep", "handleNext", "handlePrev", "isFirstStep", "isLastStep", "isHorizontal", "nextStepMethod", "renderActionButtons", "stepCount", "submitButtonDisabled", "onFinishDisabled", "submitButtonLoading", "showNavigationButtons"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledContent$1, _extends({
    isHorizontal: isHorizontal
  }, props), children || content, showNavigationButtons && /*#__PURE__*/React__default['default'].createElement(ActionWrapper, null, isHorizontal && /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(OutlineButton, {
    color: "secondary",
    disabled: isFirstStep,
    icon: "arrow-left",
    iconProps: {
      color: "secondary"
    },
    noPadding: true,
    onClick: handlePrev
  }), /*#__PURE__*/React__default['default'].createElement(Text, {
    color: "textSecondary",
    dInline: true,
    fontStyle: "italic",
    ml: 2
  }, currentStep + " of " + stepCount + " steps")), /*#__PURE__*/React__default['default'].createElement("div", null, isLastStep && renderActionButtons(), !onFinishDisabled && /*#__PURE__*/React__default['default'].createElement(Button, {
    content: isLastStep ? "Finish" : "Next",
    disabled: submitButtonDisabled,
    loading: submitButtonLoading,
    onClick: nextStepMethod === "button" ? handleNext : undefined,
    type: nextStepMethod
  }), !isLastStep && onFinishDisabled && /*#__PURE__*/React__default['default'].createElement(Button, {
    content: isLastStep ? "Finish" : "Next",
    disabled: submitButtonDisabled,
    loading: submitButtonLoading,
    onClick: nextStepMethod === "button" ? handleNext : undefined,
    type: nextStepMethod
  }))));
};
WizardStepContent.propTypes = {
  children: PropTypes__default['default'].node,
  content: PropTypes__default['default'].node,
  currentStep: PropTypes__default['default'].number.isRequired,
  handleNext: PropTypes__default['default'].func.isRequired,
  handlePrev: PropTypes__default['default'].func.isRequired,
  isFirstStep: PropTypes__default['default'].bool.isRequired,
  isHorizontal: PropTypes__default['default'].bool.isRequired,
  isLastStep: PropTypes__default['default'].bool.isRequired,
  nextStepMethod: PropTypes__default['default'].string.isRequired,
  renderActionButtons: PropTypes__default['default'].func,
  stepCount: PropTypes__default['default'].number.isRequired,
  submitButtonDisabled: PropTypes__default['default'].bool,
  submitButtonLoading: PropTypes__default['default'].bool,
  onFinishDisabled: PropTypes__default['default'].bool,
  showNavigationButtons: PropTypes__default['default'].bool
};
WizardStepContent.defaultProps = {
  children: null,
  content: null,
  renderActionButtons: function renderActionButtons() {},
  submitButtonDisabled: false,
  submitButtonLoading: false,
  showNavigationButtons: true,
  onFinishDisabled: false
};

var stepBorderAndTitleColor = function stepBorderAndTitleColor(_ref) {
  var isActive = _ref.isActive,
      isPassed = _ref.isPassed,
      theme = _ref.theme;
  if (isActive) return theme.palette.primary.main;
  if (isPassed) return theme.palette.primary.main;
  return theme.palette.gray.medium;
};
var stepFlagColor = function stepFlagColor(_ref2) {
  var isActive = _ref2.isActive,
      isPassed = _ref2.isPassed,
      theme = _ref2.theme;
  if (isActive) return theme.palette.primary.main;
  if (isPassed) return theme.palette.common.white;
  return theme.palette.gray.medium;
};
var stepFlagBackgroundColor = function stepFlagBackgroundColor(_ref3) {
  var isActive = _ref3.isActive,
      isPassed = _ref3.isPassed,
      theme = _ref3.theme;
  if (isActive) return theme.palette.common.white;
  if (isPassed) return theme.palette.primary.main;
  return theme.palette.common.white;
};
var stepConnectorColor = function stepConnectorColor(_ref4) {
  var isActive = _ref4.isActive,
      isPassed = _ref4.isPassed,
      theme = _ref4.theme;
  if (isActive) return theme.palette.gray.medium;
  if (isPassed) return theme.palette.primary.main;
  return theme.palette.gray.medium;
};

function _templateObject4$m() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  text-align: right;\n"]);

  _templateObject4$m = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$C() {
  var data = _taggedTemplateLiteralLoose(["\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 120%;\n  color: ", ";\n  padding-left: 8px;\n  transition: all ", "\n    ease-in-out;\n  ", "\n"]);

  _templateObject3$C = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$V() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid ", ";\n  background-color: ", ";\n  color: ", ";\n  border-radius: 100%;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 120%;\n  z-index: 1;\n  transition: all ", "\n    ease-in-out;\n"]);

  _templateObject2$V = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1O() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: normal;\n\n  ", "\n\n  ", "\n\n    ", "\n"]);

  _templateObject$1O = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTitle = styled__default['default'].div(_templateObject$1O(), function (_ref) {
  var isPassed = _ref.isPassed;
  return isPassed && styled.css(["cursor:pointer;"]);
}, function (_ref2) {
  var isHorizontal = _ref2.isHorizontal;
  return isHorizontal && styled.css(["flex-direction:column;align-items:flex-start;"]);
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled && styled.css(["cursor:not-allowed;"]);
});
var Flag = styled__default['default'].div(_templateObject2$V(), function (props) {
  return stepBorderAndTitleColor(props);
}, function (props) {
  return stepFlagBackgroundColor(props);
}, function (props) {
  return stepFlagColor(props);
}, function (_ref4) {
  var transitionDuration = _ref4.transitionDuration;
  return transitionDuration + "ms";
});
var Label$2 = styled__default['default'].span(_templateObject3$C(), function (props) {
  return stepBorderAndTitleColor(props);
}, function (_ref5) {
  var transitionDuration = _ref5.transitionDuration;
  return transitionDuration + "ms";
}, function (_ref6) {
  var isHorizontal = _ref6.isHorizontal;
  return isHorizontal && styled.css(["font-size:12px;padding:4px 4px 0 0;"]);
});
var RightTitle = styled__default['default'].div(_templateObject4$m());
var WizardStepTitle = function WizardStepTitle(_ref7) {
  var disabled = _ref7.disabled,
      isActive = _ref7.isActive,
      isHorizontal = _ref7.isHorizontal,
      isPassed = _ref7.isPassed,
      label = _ref7.label,
      flag = _ref7.flag,
      onClick = _ref7.onClick,
      rightTitle = _ref7.rightTitle,
      transitionDuration = _ref7.transitionDuration;
  return /*#__PURE__*/React__default['default'].createElement(StyledTitle, {
    disabled: disabled,
    onClick: onClick,
    isHorizontal: isHorizontal,
    isPassed: isPassed
  }, /*#__PURE__*/React__default['default'].createElement(Flag, {
    isActive: isActive,
    isPassed: isPassed,
    transitionDuration: transitionDuration
  }, flag), /*#__PURE__*/React__default['default'].createElement(Label$2, {
    isActive: isActive,
    isHorizontal: isHorizontal,
    isPassed: isPassed,
    transitionDuration: transitionDuration
  }, label), rightTitle && !isHorizontal && /*#__PURE__*/React__default['default'].createElement(RightTitle, null, rightTitle));
};
WizardStepTitle.propTypes = {
  disabled: PropTypes__default['default'].bool.isRequired,
  isActive: PropTypes__default['default'].bool.isRequired,
  isHorizontal: PropTypes__default['default'].bool.isRequired,
  isPassed: PropTypes__default['default'].bool.isRequired,
  label: PropTypes__default['default'].node.isRequired,
  flag: PropTypes__default['default'].node.isRequired,
  onClick: PropTypes__default['default'].func,
  transitionDuration: PropTypes__default['default'].number.isRequired
};
WizardStepTitle.defaultProps = {
  onClick: function onClick() {}
};

var WizardPropTypes = _extends({
  currentStepContent: PropTypes__default['default'].node.isRequired,
  currentStepIndex: PropTypes__default['default'].number.isRequired,
  headerFadeColor: PropTypes__default['default'].string,
  nextStepMethod: PropTypes__default['default'].oneOf(["submit", "button"]),
  orientation: PropTypes__default['default'].string,
  setCurrentStepIndex: PropTypes__default['default'].func.isRequired,
  steps: PropTypes__default['default'].arrayOf(PropTypes__default['default'].string).isRequired,
  submitButtonDisabled: PropTypes__default['default'].bool,
  submitButtonLoading: PropTypes__default['default'].bool,
  transitionDuration: PropTypes__default['default'].number
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var WizardDefaultProps = {
  headerFadeColor: "#ffffff",
  nextStepMethod: "submit",
  orientation: "horizontal",
  transitionDuration: 250
};

function _templateObject5$e() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  position: relative;\n  min-height: 60px;\n\n  :last-child {\n    ", " {\n      ", ";\n    }\n  }\n\n  ", "\n"]);

  _templateObject5$e = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$n() {
  var data = _taggedTemplateLiteralLoose(["\n  border-width: 0;\n  border-style: dashed;\n  border-color: ", ";\n  border-left-width: 2px;\n  transition: all ", "\n    ease-in-out;\n  position: absolute;\n  top: 0;\n  left: 15px;\n  bottom: 0;\n  ::before {\n    content: \"\";\n    width: 2px;\n    height: 100%;\n    display: inline-block;\n  }\n\n  ", "\n"]);

  _templateObject4$n = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$D() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject3$D = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$W() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: ", ";\n  ", "\n\n  && {\n    ", "\n  }\n"]);

  _templateObject2$W = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1P() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$1P = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$e = styled__default['default'].div(_templateObject$1P(), function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StepsWrapper = styled__default['default'].div(_templateObject2$W(), function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
}, function (_ref2) {
  var headerFadeColor = _ref2.headerFadeColor,
      isHorizontal = _ref2.isHorizontal,
      theme = _ref2.theme;
  return isHorizontal && styled.css(["position:relative;::before{content:\"\";display:inline-block;width:64px;height:100%;background:linear-gradient( 90deg,", " 0%,rgba(255,255,255,0) 100% );position:absolute;top:0;left:0;z-index:2;}::after{content:\"\";display:inline-block;width:64px;height:100%;background:linear-gradient( 270deg,", " 0%,rgba(255,255,255,0) 100% );position:absolute;top:0;right:0;z-index:2;}", "{::before{width:32px;}::after{content:\"\";width:32px;}}"], headerFadeColor, headerFadeColor, theme.breakpoints.down("sm"));
}, function (_ref3) {
  var backgroundStyle = _ref3.backgroundStyle;
  return backgroundStyle === "primary" && styled.css(["background-color:", ";position:relative;::before{content:none;}::after{content:none;}"], function (_ref4) {
    var theme = _ref4.theme;
    return theme.palette.common.white;
  });
});
var Steps = styled__default['default'].div(_templateObject3$D(), function (_ref5) {
  var isHorizontal = _ref5.isHorizontal,
      theme = _ref5.theme;
  return isHorizontal && styled.css(["display:flex;align-items:center;justify-content:flex-start;white-space:nowrap;overflow-y:hidden;overflow-x:scroll;padding:0 64px;user-select:none;-ms-overflow-style:none;&&::-webkit-scrollbar{display:none;}&.active{cursor:grabbing;cursor:-webkit-grabbing;}", "{padding:0 32px;}"], theme.breakpoints.down("sm"));
});
var StepConnector = styled__default['default'].div(_templateObject4$n(), function (props) {
  return stepConnectorColor(props);
}, function (_ref6) {
  var transitionDuration = _ref6.transitionDuration;
  return transitionDuration + "ms";
}, function (_ref7) {
  var isHorizontal = _ref7.isHorizontal;
  return isHorizontal && styled.css(["width:100%;border-left-width:0;border-top-width:2px;top:15px;left:8px;::before{content:\"\";width:100%;height:2px;display:inline-block;}"]);
});
var Step = styled__default['default'].div(_templateObject5$e(), StepConnector, function (_ref8) {
  var isActive = _ref8.isActive,
      isHorizontal = _ref8.isHorizontal;
  return (!isActive || isHorizontal) && "border: none";
}, function (_ref9) {
  var isHorizontal = _ref9.isHorizontal;
  return isHorizontal && styled.css(["width:100px;min-width:100px;"]);
});
var Wizard = function Wizard(_ref10) {
  var _steps$currentStepInd;

  var currentStepContent = _ref10.currentStepContent,
      currentStepIndex = _ref10.currentStepIndex,
      headerFadeColor = _ref10.headerFadeColor,
      nextStepMethod = _ref10.nextStepMethod,
      orientation = _ref10.orientation,
      onFinishDisabled = _ref10.onFinishDisabled,
      renderActionButtons = _ref10.renderActionButtons,
      setCurrentStepIndex = _ref10.setCurrentStepIndex,
      steps = _ref10.steps,
      submitButtonDisabled = _ref10.submitButtonDisabled,
      submitButtonLoading = _ref10.submitButtonLoading,
      showNavigationButtons = _ref10.showNavigationButtons,
      transitionDuration = _ref10.transitionDuration,
      backgroundStyle = _ref10.backgroundStyle,
      props = _objectWithoutPropertiesLoose(_ref10, ["currentStepContent", "currentStepIndex", "headerFadeColor", "nextStepMethod", "orientation", "onFinishDisabled", "renderActionButtons", "setCurrentStepIndex", "steps", "submitButtonDisabled", "submitButtonLoading", "showNavigationButtons", "transitionDuration", "backgroundStyle"]);

  var stepRef = React.useRef(null);
  var wrapperRef = /*#__PURE__*/React.createRef();
  var isHorizontal = orientation === "horizontal";
  var stepCount = steps.length;
  var isLastStep = currentStepIndex === stepCount - 1;
  var isFirstStep = currentStepIndex === 0;
  React.useEffect(function () {
    if (isHorizontal) {
      handleScroll(wrapperRef.current);
    }
  }, []);
  React.useEffect(function () {
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

  var content = /*#__PURE__*/React__default['default'].createElement(WizardStepContent, {
    content: ((_steps$currentStepInd = steps[currentStepIndex]) == null ? void 0 : _steps$currentStepInd.content) || currentStepContent,
    currentStep: currentStepIndex + 1,
    isHorizontal: isHorizontal,
    isLastStep: isLastStep,
    isFirstStep: isFirstStep,
    handleNext: handleNext,
    handlePrev: handlePrev,
    nextStepMethod: nextStepMethod,
    renderActionButtons: renderActionButtons,
    stepCount: stepCount,
    submitButtonDisabled: submitButtonDisabled,
    submitButtonLoading: submitButtonLoading,
    showNavigationButtons: showNavigationButtons,
    transitionDuration: transitionDuration,
    onFinishDisabled: onFinishDisabled
  });
  return /*#__PURE__*/React__default['default'].createElement(Wrapper$e, props, /*#__PURE__*/React__default['default'].createElement(StepsWrapper, {
    headerFadeColor: headerFadeColor,
    isHorizontal: isHorizontal,
    backgroundStyle: backgroundStyle
  }, /*#__PURE__*/React__default['default'].createElement(Steps, {
    isHorizontal: isHorizontal,
    ref: wrapperRef
  }, steps.map(function (step, idx) {
    var isActive = idx === currentStepIndex;
    var isPassed = idx < currentStepIndex;
    var stepKey = "step-" + idx;
    return /*#__PURE__*/React__default['default'].createElement(Step, {
      isActive: isActive,
      isHorizontal: isHorizontal,
      isPassed: isPassed,
      key: stepKey,
      ref: isActive ? stepRef : null
    }, /*#__PURE__*/React__default['default'].createElement(WizardStepTitle, {
      disabled: step == null ? void 0 : step.flagDisabled,
      label: step.title,
      flag: idx + 1,
      isActive: isActive,
      isHorizontal: isHorizontal,
      isPassed: isPassed,
      onClick: (step == null ? void 0 : step.onClick) || function () {
        return handleStepClick(isPassed, idx);
      },
      rightTitle: step == null ? void 0 : step.rightTitle,
      transitionDuration: transitionDuration
    }), !isHorizontal && isActive && content, /*#__PURE__*/React__default['default'].createElement(StepConnector, {
      isActive: isActive,
      isHorizontal: isHorizontal,
      isPassed: isPassed,
      transitionDuration: transitionDuration
    }));
  }))), isHorizontal && content);
};
Wizard.propTypes = WizardPropTypes;
Wizard.defaultProps = WizardDefaultProps;

exports.AdvancedLineItem = AdvancedLineItem;
exports.Alert = Alert;
exports.AppContainer = AppContainer;
exports.AppContext = AppContext;
exports.AppContextProvider = AppContextProvider;
exports.AuthLayout = AuthLayout;
exports.BorderedRadio = BorderedRadio;
exports.Box = Box;
exports.BoxBase = BoxBase;
exports.Button = Button;
exports.ButtonBase = ButtonBase;
exports.COLOR = COLOR;
exports.COLOR_PROP_TYPES = COLOR_PROP_TYPES;
exports.CartButton = CartButton;
exports.CategoryItem = CategoryItem;
exports.CategoryItemContentLoader = CategoryItemContentLoader;
exports.Checkbox = Checkbox;
exports.ChipBadge = ChipBadge;
exports.Collapse = Collapse;
exports.CollapseButton = CollapseButton;
exports.CollectionItem = CollectionItem;
exports.CreatorsHubAuthLayout = CreatorsHubAuthLayout;
exports.CreatorsHubMainLayout = CreatorsHubMainLayout;
exports.CropModal = CropModal;
exports.DIMENSION = DIMENSION;
exports.DIMENSION_PROP_TYPES = DIMENSION_PROP_TYPES;
exports.DISPLAY = DISPLAY;
exports.DISPLAY_PROP_TYPES = DISPLAY_PROP_TYPES;
exports.DashboardLayout = DashboardLayout;
exports.Datepicker = Datepicker;
exports.DetailsTable = DetailsTable;
exports.Divider = Divider;
exports.DotsSpinner = DotsSpinner;
exports.DownloadModule = DownloadModule;
exports.Dropdown = Dropdown;
exports.ErrorTemplate = ErrorTemplate;
exports.ExplorerLayout = ExplorerLayout;
exports.FieldBase = FieldBase;
exports.FieldWrapper = FieldWrapper;
exports.Fieldset = Fieldset;
exports.FileManager = FileManager;
exports.FilePond = FilePond;
exports.FileUpload = FileUpload;
exports.Flex = Flex;
exports.Form = Form;
exports.FormDatepicker = FormDatepicker;
exports.FormError = FormError;
exports.FormLabel = FormLabel;
exports.FormRow = FormRow;
exports.FreeBrandIconSet = FreeBrandIconSet;
exports.FreeSolidIconSet = FreeSolidIconSet;
exports.GlobalStyle = GlobalStyle;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.H6 = H6;
exports.HeadingBase = HeadingBase;
exports.Hidden = Hidden;
exports.HideOnScroll = HideOnScroll;
exports.History = History;
exports.HistoryTree = HistoryTree;
exports.Icon = Icon;
exports.Image = Image;
exports.ImageModal = ImageModal;
exports.Indicator = Indicator;
exports.Input = Input;
exports.Inspector = Inspector;
exports.InspectorDefaultProps = InspectorDefaultProps;
exports.InspectorItem = InspectorItem;
exports.InspectorPropTypes = InspectorPropTypes;
exports.ItemSelect = ItemSelect;
exports.KIT_COLORS = KIT_COLORS;
exports.KIT_FONTS = KIT_FONTS;
exports.KIT_ICON_SIZES = KIT_ICON_SIZES;
exports.KIT_TYPOGRAPHY = KIT_TYPOGRAPHY;
exports.Language = Language;
exports.Link = Link$1;
exports.MINI_SHARE_MODULE_SHARE_OPTIONS = MINI_SHARE_MODULE_SHARE_OPTIONS;
exports.MarketPlaceItem = MarketPlaceItem;
exports.MiniShareModule = MiniShareModule;
exports.Modal = Modal;
exports.NoItem = NoItem;
exports.OutlineButton = OutlineButton;
exports.PageFigure = PageFigure;
exports.PageLoading = PageLoading;
exports.PageMeta = PageMeta;
exports.PageProgressBar = PageProgressBar;
exports.PageTransition = PageTransition;
exports.Pagination = Pagination;
exports.Paragraph = Paragraph;
exports.PriceField = PriceField;
exports.Profile = Profile;
exports.Radio = Radio;
exports.RadioBase = RadioBase;
exports.RangeSlider = RangeSlider;
exports.ReactSelect = ReactSelect;
exports.RocksKitIcons = RocksKitIcons;
exports.RocksKitTheme = RocksKitTheme;
exports.RocksSpinner = RocksSpinner;
exports.SPACER = SPACER;
exports.SPACER_FORMULA = SPACER_FORMULA;
exports.SPACER_POSTFIX = SPACER_POSTFIX;
exports.SPACER_PROP_TYPES = SPACER_PROP_TYPES;
exports.SearchBar = SearchBar;
exports.Select = Select;
exports.ShareModule = ShareModule;
exports.ShareModuleDefaultProps = ShareModuleDefaultProps;
exports.ShareModulePropTypes = ShareModulePropTypes;
exports.Snackbar = Snackbar;
exports.Stepper = Stepper;
exports.THEME_COLORS = THEME_COLORS;
exports.Tab = Tab;
exports.Table = Table;
exports.Text = Text;
exports.TextArea = TextArea;
exports.TextBase = TextBase;
exports.TextButton = TextButton;
exports.Thumbnail = Thumbnail;
exports.TinyBadge = TinyBadge;
exports.Toggle = Toggle;
exports.ToggleSwitch = ToggleSwitch;
exports.Tooltip = Tooltip;
exports.Wizard = Wizard;
exports.convertHexToRGBA = convertHexToRGBA;
exports.formatDateAndTime = formatDateAndTime;
exports.formatPrice = formatPrice;
exports.getFormInputError = getFormInputError;
exports.getFormRowErrors = getFormRowErrors;
exports.handleScroll = handleScroll;
exports.useAppContext = useAppContext;
exports.useMediaQuery = useMediaQuery;
//# sourceMappingURL=rockskit.common.js.map
