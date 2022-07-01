import PropTypes, { bool, func, oneOf, number } from 'prop-types';
import styled, { createGlobalStyle, css, useTheme, ThemeProvider as ThemeProvider$1 } from 'styled-components';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { library } from '@fortawesome/fontawesome-svg-core';
import { SnackbarProvider, SnackbarContent, useSnackbar } from 'notistack';
import { faFacebookF, faLinkedinIn, faTelegramPlane, faTwitter, faWhatsapp, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleUp, faArrowLeft, faArrowRight, faAt, faBars, faBox, faBoxes, faBuilding, faCalendar, faCheck, faCheckCircle, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faComments, faCopy, faCode, faEllipsisH, faEnvelope, faEuroSign, faFile, faFilePdf, faFilter, faHashtag, faGlobe, faInfoCircle, faKey, faLink, faMapMarker, faMinus, faMoneyBill, faPencilAlt, faPhone, faPlus, faQuestion, faSadCry, faSearch, faSearchPlus, faShareAlt, faShoppingCart, faSignInAlt, faStore, faTachometerAlt, faThLarge, faTimes, faTrash, faTruck, faTv, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faFileArrowUp } from '@fortawesome/pro-regular-svg-icons';
import MuiButtonBase from '@material-ui/core/ButtonBase';
import RCL from 'react-content-loader';
import { Collapse as Collapse$1 } from 'react-collapse';
import DayPicker, { DateUtils } from 'react-day-picker';
import Dialog from '@material-ui/core/Dialog';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import QRCode from 'qrcode.react';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Controller } from 'react-hook-form';
import MuiPopover from '@material-ui/core/Popover';
import copy from 'copy-to-clipboard';
import { FilePond as FilePond$1 } from 'react-filepond';
import AvatarEditor from 'react-avatar-editor';
import { useDropzone } from 'react-dropzone';
import VideoThumbnail from 'react-video-thumbnail';
import MuiSlider from '@material-ui/core/Slider';
import axios from 'axios';
import AsyncSelect from 'react-select/async';
import ReactSelect$1, { components } from 'react-select';
import flatMap from 'lodash/flatMap';
import makeAnimated from 'react-select/animated';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import MuiHidden from '@material-ui/core/Hidden';
import MuiUseMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Masonry from 'react-masonry-css';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiContainer from '@material-ui/core/Container';
import { useNProgress } from '@tanem/react-nprogress';
import { Transition } from 'react-transition-group';
import MuiPagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { CodeBlock, obsidian } from 'react-code-blocks';
import MuiTabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';
import MuiTooltip from '@material-ui/core/Tooltip';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import { Grid as Grid$1, Link as Link$2, ListItem as ListItem$1, List as List$1, ListItemIcon, ListItemText } from '@material-ui/core';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};var Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};var Component=E;var Fragment=p;
var Profiler=r;var PureComponent=G;var StrictMode=q;var Suspense=w;var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
var cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};var createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};var createElement=M;var createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};var createRef=function(){return {current:null}};
var forwardRef=function(a){return {$$typeof:v,render:a}};var isValidElement=O;var lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};var memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};var startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};var unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
var useCallback=function(a,b){return U.current.useCallback(a,b)};var useContext=function(a){return U.current.useContext(a)};var useDebugValue=function(){};var useDeferredValue=function(a){return U.current.useDeferredValue(a)};var useEffect=function(a,b){return U.current.useEffect(a,b)};var useId=function(){return U.current.useId()};var useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
var useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};var useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};var useMemo=function(a,b){return U.current.useMemo(a,b)};var useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};var useRef=function(a){return U.current.useRef(a)};var useState=function(a){return U.current.useState(a)};var useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
var useTransition=function(){return U.current.useTransition()};var version="18.2.0";

var react_production_min = {
	Children: Children,
	Component: Component,
	Fragment: Fragment,
	Profiler: Profiler,
	PureComponent: PureComponent,
	StrictMode: StrictMode,
	Suspense: Suspense,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	cloneElement: cloneElement,
	createContext: createContext,
	createElement: createElement,
	createFactory: createFactory,
	createRef: createRef,
	forwardRef: forwardRef,
	isValidElement: isValidElement,
	lazy: lazy,
	memo: memo,
	startTransition: startTransition,
	unstable_act: unstable_act,
	useCallback: useCallback,
	useContext: useContext,
	useDebugValue: useDebugValue,
	useDeferredValue: useDeferredValue,
	useEffect: useEffect,
	useId: useId,
	useImperativeHandle: useImperativeHandle,
	useInsertionEffect: useInsertionEffect,
	useLayoutEffect: useLayoutEffect,
	useMemo: useMemo,
	useReducer: useReducer,
	useRef: useRef,
	useState: useState,
	useSyncExternalStore: useSyncExternalStore,
	useTransition: useTransition,
	version: version
};

var react_development = createCommonjsModule(function (module, exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var ReactVersion = '18.2.0';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: null
};

var ReactCurrentActQueue = {
  current: null,
  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
  isBatchingLegacy: false,
  didScheduleLegacyUpdate: false
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}
function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var assign = Object.assign;

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (element === null || element === undefined) {
    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
  }

  var propName; // Original props are copied

  var props = assign({}, element.props); // Reserved names are extracted

  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    {
      checkKeyStringCoercion(element.key);
    }

    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        {
          // The `if` statement here prevents auto-disabling of the safe
          // coercion ESLint rule, so we must manually disable it below.
          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
            checkKeyStringCoercion(mappedChild.key);
          }
        }

        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        // eslint-disable-next-line react-internal/safe-string-coercion
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      // eslint-disable-next-line react-internal/safe-string-coercion
      var childrenString = String(children);
      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    throw new Error('React.Children.only expected to receive a single React element child.');
  }

  return children;
}

function createContext(defaultValue) {
  // TODO: Second argument used to be an optional `calculateChangedBits`
  // function. Warn to reserve for future use?
  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null,
    // Add these to use same hidden class in VM as ServerContext
    _defaultValue: null,
    _globalName: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.
    // This might throw either because it's missing or throws. If so, we treat it
    // as still uninitialized and try again next time. Which is the same as what
    // happens if the ctor or any wrappers processing the ctor throws. This might
    // end up fixing it if the resolution was a concurrency bug.

    thenable.then(function (moduleObject) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = moduleObject;
      }
    }, function (error) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });

    if (payload._status === Uninitialized) {
      // In case, we're still uninitialized, then we're waiting for the thenable
      // to resolve. Set it as pending in the meantime.
      var pending = payload;
      pending._status = Pending;
      pending._result = thenable;
    }
  }

  if (payload._status === Resolved) {
    var moduleObject = payload._result;

    {
      if (moduleObject === undefined) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
      }
    }

    {
      if (!('default' in moduleObject)) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
      }
    }

    return moduleObject.default;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: Uninitialized,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.forwardRef((props, ref) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!render.name && !render.displayName) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.memo((props) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!type.name && !type.displayName) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  {
    if (dispatcher === null) {
      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
    }
  } // Will result in a null access error if accessed outside render phase. We
  // intentionally don't throw our own error because this is in a hot path.
  // Also helps ensure this is inlined.


  return dispatcher;
}
function useContext(Context) {
  var dispatcher = resolveDispatcher();

  {
    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useInsertionEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useInsertionEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}
function useTransition() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition();
}
function useDeferredValue(value) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value);
}
function useId() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useId();
}
function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

function startTransition(scope, options) {
  var prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = {};
  var currentTransition = ReactCurrentBatchConfig.transition;

  {
    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
  }

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.transition = prevTransition;

    {
      if (prevTransition === null && currentTransition._updatedFibers) {
        var updatedFibersCount = currentTransition._updatedFibers.size;

        if (updatedFibersCount > 10) {
          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
        }

        currentTransition._updatedFibers.clear();
      }
    }
  }
}

var didWarnAboutMessageChannel = false;
var enqueueTaskImpl = null;
function enqueueTask(task) {
  if (enqueueTaskImpl === null) {
    try {
      // read require off the module object to get around the bundlers.
      // we don't want them to detect a require and bundle a Node polyfill.
      var requireString = ('require' + Math.random()).slice(0, 7);
      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
      // version of setImmediate, bypassing fake timers if any.

      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
    } catch (_err) {
      // we're in a browser
      // we can't use regular timers because they may still be faked
      // so we try MessageChannel+postMessage instead
      enqueueTaskImpl = function (callback) {
        {
          if (didWarnAboutMessageChannel === false) {
            didWarnAboutMessageChannel = true;

            if (typeof MessageChannel === 'undefined') {
              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
            }
          }
        }

        var channel = new MessageChannel();
        channel.port1.onmessage = callback;
        channel.port2.postMessage(undefined);
      };
    }
  }

  return enqueueTaskImpl(task);
}

var actScopeDepth = 0;
var didWarnNoAwaitAct = false;
function act(callback) {
  {
    // `act` calls can be nested, so we track the depth. This represents the
    // number of `act` scopes on the stack.
    var prevActScopeDepth = actScopeDepth;
    actScopeDepth++;

    if (ReactCurrentActQueue.current === null) {
      // This is the outermost `act` scope. Initialize the queue. The reconciler
      // will detect the queue and use it instead of Scheduler.
      ReactCurrentActQueue.current = [];
    }

    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
    var result;

    try {
      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
      // set to `true` while the given callback is executed, not for updates
      // triggered during an async event, because this is how the legacy
      // implementation of `act` behaved.
      ReactCurrentActQueue.isBatchingLegacy = true;
      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
      // which flushed updates immediately after the scope function exits, even
      // if it's an async function.

      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
        var queue = ReactCurrentActQueue.current;

        if (queue !== null) {
          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
          flushActQueue(queue);
        }
      }
    } catch (error) {
      popActScope(prevActScopeDepth);
      throw error;
    } finally {
      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
    }

    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
      // for it to resolve before exiting the current scope.

      var wasAwaited = false;
      var thenable = {
        then: function (resolve, reject) {
          wasAwaited = true;
          thenableResult.then(function (returnValue) {
            popActScope(prevActScopeDepth);

            if (actScopeDepth === 0) {
              // We've exited the outermost act scope. Recursively flush the
              // queue until there's no remaining work.
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }, function (error) {
            // The callback threw an error.
            popActScope(prevActScopeDepth);
            reject(error);
          });
        }
      };

      {
        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
          // eslint-disable-next-line no-undef
          Promise.resolve().then(function () {}).then(function () {
            if (!wasAwaited) {
              didWarnNoAwaitAct = true;

              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
            }
          });
        }
      }

      return thenable;
    } else {
      var returnValue = result; // The callback is not an async function. Exit the current scope
      // immediately, without awaiting.

      popActScope(prevActScopeDepth);

      if (actScopeDepth === 0) {
        // Exiting the outermost act scope. Flush the queue.
        var _queue = ReactCurrentActQueue.current;

        if (_queue !== null) {
          flushActQueue(_queue);
          ReactCurrentActQueue.current = null;
        } // Return a thenable. If the user awaits it, we'll flush again in
        // case additional work was scheduled by a microtask.


        var _thenable = {
          then: function (resolve, reject) {
            // Confirm we haven't re-entered another `act` scope, in case
            // the user does something weird like await the thenable
            // multiple times.
            if (ReactCurrentActQueue.current === null) {
              // Recursively flush the queue until there's no remaining work.
              ReactCurrentActQueue.current = [];
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }
        };
        return _thenable;
      } else {
        // Since we're inside a nested `act` scope, the returned thenable
        // immediately resolves. The outer scope will flush the queue.
        var _thenable2 = {
          then: function (resolve, reject) {
            resolve(returnValue);
          }
        };
        return _thenable2;
      }
    }
  }
}

function popActScope(prevActScopeDepth) {
  {
    if (prevActScopeDepth !== actScopeDepth - 1) {
      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
    }

    actScopeDepth = prevActScopeDepth;
  }
}

function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
  {
    var queue = ReactCurrentActQueue.current;

    if (queue !== null) {
      try {
        flushActQueue(queue);
        enqueueTask(function () {
          if (queue.length === 0) {
            // No additional work was scheduled. Finish.
            ReactCurrentActQueue.current = null;
            resolve(returnValue);
          } else {
            // Keep flushing work until there's none left.
            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
          }
        });
      } catch (error) {
        reject(error);
      }
    } else {
      resolve(returnValue);
    }
  }
}

var isFlushing = false;

function flushActQueue(queue) {
  {
    if (!isFlushing) {
      // Prevent re-entrance.
      isFlushing = true;
      var i = 0;

      try {
        for (; i < queue.length; i++) {
          var callback = queue[i];

          do {
            callback = callback(true);
          } while (callback !== null);
        }

        queue.length = 0;
      } catch (error) {
        // If something throws, leave the remaining callbacks on the queue.
        queue = queue.slice(i + 1);
        throw error;
      } finally {
        isFlushing = false;
      }
    }
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.startTransition = startTransition;
exports.unstable_act = act;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useDeferredValue = useDeferredValue;
exports.useEffect = useEffect;
exports.useId = useId;
exports.useImperativeHandle = useImperativeHandle;
exports.useInsertionEffect = useInsertionEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.useSyncExternalStore = useSyncExternalStore;
exports.useTransition = useTransition;
exports.version = ReactVersion;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}
});

var react = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = react_production_min;
} else {
  module.exports = react_development;
}
});

var GlobalStyle = createGlobalStyle(["html,body,#root,#__next{min-height:100%;height:100%;}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{-webkit-box-shadow:0 0 0 30px white inset !important;}"]);

var FreeBrandIconSet = {
  fabFacebookF: faFacebookF,
  fabLinkedinIn: faLinkedinIn,
  fabTelegramPlane: faTelegramPlane,
  fabTwitter: faTwitter,
  fabWhatsapp: faWhatsapp,
  fabWindows: faWindows
};

var FreeSolidIconSet = {
  faAngleDown: faAngleDown,
  faAngleUp: faAngleUp,
  faArrowLeft: faArrowLeft,
  faArrowRight: faArrowRight,
  faAt: faAt,
  faBars: faBars,
  faBox: faBox,
  faBoxes: faBoxes,
  faBuilding: faBuilding,
  faCalendar: faCalendar,
  faCheck: faCheck,
  faCheckCircle: faCheckCircle,
  faChevronDown: faChevronDown,
  faChevronLeft: faChevronLeft,
  faChevronRight: faChevronRight,
  faChevronUp: faChevronUp,
  faComments: faComments,
  faCopy: faCopy,
  faCode: faCode,
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
  faMoneyBill: faMoneyBill,
  faPencilAlt: faPencilAlt,
  faPhone: faPhone,
  faPlus: faPlus,
  faQuestion: faQuestion,
  faSadCry: faSadCry,
  faSearch: faSearch,
  faSearchPlus: faSearchPlus,
  faShareAlt: faShareAlt,
  faShoppingCart: faShoppingCart,
  faSignInAlt: faSignInAlt,
  faStore: faStore,
  faTachometerAlt: faTachometerAlt,
  faThLarge: faThLarge,
  faTimes: faTimes,
  faTrash: faTrash,
  faTruck: faTruck,
  faTv: faTv,
  faUser: faUser,
  faUserCircle: faUserCircle,
  farFileArrowUp: faFileArrowUp
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
    lightYellow: "#FFFC8A",
    yellow: "#FFFB4D"
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

  var theme = createMuiTheme({
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
      main: (colors == null ? void 0 : colors.elementsThirdColor) || KIT_COLORS.gray.dark,
      light: (colors == null ? void 0 : colors.elementsSecondaryColor) || KIT_COLORS.gray.semiLight,
      dark: (colors == null ? void 0 : colors.basicFontsColor) || KIT_COLORS.gray.black
    },
    text: {
      primary: (colors == null ? void 0 : colors.basicFontsColor) || KIT_COLORS.gray.black,
      secondary: (colors == null ? void 0 : colors.secondaryFontColor) || KIT_COLORS.gray.medium
    },
    black: {
      main: (colors == null ? void 0 : colors.basicFontsColor) || KIT_COLORS.gray.black
    },
    white: {
      main: KIT_COLORS.gray.white
    },
    darkYellow: {
      main: KIT_COLORS.alert.darkYellow
    },
    gray: {
      black: (colors == null ? void 0 : colors.basicFontsColor) || KIT_COLORS.gray.black,
      dark: (colors == null ? void 0 : colors.elementsThirdColor) || KIT_COLORS.gray.dark,
      regular: (colors == null ? void 0 : colors.secondaryComponentsColor) || KIT_COLORS.gray.regular,
      medium: (colors == null ? void 0 : colors.secondaryFontColor) || KIT_COLORS.gray.medium,
      light: (colors == null ? void 0 : colors.elementsPrimaryColor) || KIT_COLORS.gray.light,
      semiLight: (colors == null ? void 0 : colors.elementsSecondaryColor) || KIT_COLORS.gray.semiLight,
      main: (colors == null ? void 0 : colors.elementsSecondaryColor) || KIT_COLORS.gray.semiLight,
      white: KIT_COLORS.gray.white
    },
    success: {
      main: KIT_COLORS.alert.darkGreen,
      light: KIT_COLORS.alert.lightGreen
    },
    warning: {
      main: KIT_COLORS.alert.yellow,
      dark: KIT_COLORS.alert.darkYellow,
      light: KIT_COLORS.alert.lightYellow
    },
    error: {
      main: KIT_COLORS.alert.darkRed,
      light: KIT_COLORS.alert.lightRed
    },
    common: {
      white: (colors == null ? void 0 : colors.componentsColor) || KIT_COLORS.gray.white,
      black: KIT_COLORS.gray.black,
      yellow: KIT_COLORS.alert.yellow
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

var THEME_COLORS = ["primary", "black", "white", "gray", "darkYellow", "secondary", "success", "error", "warning"];

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

var StyledFlex = styled(Grid).withConfig({
  displayName: "Flex__StyledFlex",
  componentId: "sc-1db77mn-0"
})(["", " ", " ", ""], function (theme) {
  return DIMENSION(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var Flex = function Flex(props) {
  return /*#__PURE__*/react.createElement(StyledFlex, props);
};
Flex.propTypes = FlexPropTypes;
Flex.defaultProps = FlexDefaultProps;

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
  size: PropTypes.oneOf(["lg", "md", "sm", "xs"]),
  startIcon: PropTypes.string,
  target: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ButtonBaseDefaultProps = {
  block: false,
  color: "primary",
  size: "md"
};

var _excluded$1B = ["colors", "content", "children", "loading", "endIcon", "href", "icon", "iconProps", "size", "startIcon"];
var StyledButton$5 = styled(MuiButtonBase).withConfig({
  displayName: "Base__StyledButton",
  componentId: "sc-1vgypdg-0"
})(["&&{box-sizing:border-box;text-transfrom:none !important;border-radius:24px;", " min-width:40px;height:40px;transition:all 100ms ease-in-out;width:", ";:hover{opacity:0.7;}:disabled{opacity:0.3;cursor:not-allowed;pointer-events:none;}", " ", " ", "}"], function (_ref) {
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
    return css(["font-size:", ";padding:", ";height:24px;min-width:24px;border-radius:12px;"], theme.typography.button.fontSizeXs, theme.spacing(2, 4));
  }

  if (size === "sm") {
    return css(["font-size:", ";padding:", ";height:32px;min-width:32px;border-radius:16px;"], theme.typography.button.fontSizeSm, theme.spacing(2, 4));
  }

  if (size === "lg") {
    return css(["font-size:", ";padding:", ";height:48px;min-width:48px;border-radius:24px;"], theme.typography.button.fontSizeLg, theme.spacing(3, 6));
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
      props = _objectWithoutPropertiesLoose(_ref4, _excluded$1B);

  var iconSize = getIconSize(size);
  return /*#__PURE__*/react.createElement(StyledButton$5, _extends({
    component: href ? "a" : "button",
    href: href,
    size: size
  }, props), loading ? /*#__PURE__*/react.createElement(DotsSpinner, {
    color: colors == null ? void 0 : colors.color
  }) : /*#__PURE__*/react.createElement(react.Fragment, null, startIcon && /*#__PURE__*/react.createElement(Icon, {
    icon: startIcon,
    size: iconSize,
    mr: 2
  }), icon && /*#__PURE__*/react.createElement(Icon, _extends({
    icon: icon,
    size: iconSize
  }, iconProps)), content || children, endIcon && /*#__PURE__*/react.createElement(Icon, {
    icon: endIcon,
    size: iconSize,
    ml: 2
  })));
};
ButtonBase.propTypes = ButtonBasePropTypes;
ButtonBase.defaultProps = ButtonBaseDefaultProps;

var _excluded$1A = ["color"];
var StyledButton$4 = styled(ButtonBase).withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-rmizea-0"
})(["&&{", "}"], function (_ref) {
  var colors = _ref.colors;
  return css(["background-color:", ";color:", ";svg{color:", ";}"], colors.backgroundColor, colors.color, colors.color);
});

var colorMapper$2 = function colorMapper(color, theme) {
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

var Button$1 = function Button(_ref2) {
  var color = _ref2.color,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded$1A);

  var theme = useTheme();
  var colors = colorMapper$2(color, theme);
  return /*#__PURE__*/react.createElement(StyledButton$4, _extends({
    colors: colors
  }, props));
};
Button$1.propTypes = ButtonBasePropTypes;

var _excluded$1z = ["color"];
var StyledButton$3 = styled(ButtonBase).withConfig({
  displayName: "OutlineButton__StyledButton",
  componentId: "sc-c22pyk-0"
})(["&&{", "}"], function (_ref) {
  var colors = _ref.colors;
  return css(["border:2px solid ", ";color:", ";svg{color:", ";}:hover{background-color:", ";color:", ";opacity:1;}"], colors.borderColor, colors.color, colors.color, colors.backgroundColorHover, colors.colorHover);
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
      props = _objectWithoutPropertiesLoose(_ref2, _excluded$1z);

  var theme = useTheme();
  var colors = colorMapper$1(color, theme);
  return /*#__PURE__*/react.createElement(StyledButton$3, _extends({
    colors: colors
  }, props));
};
OutlineButton.propTypes = ButtonBasePropTypes;

var _excluded$1y = ["color"];
var StyledButton$2 = styled(ButtonBase).withConfig({
  displayName: "TextButton__StyledButton",
  componentId: "sc-rbrc68-0"
})(["&&{", "}"], function (_ref) {
  var colors = _ref.colors;
  return css(["color:", ";svg{color:", ";}"], colors.color, colors.color);
});

var colorMapper = function colorMapper(color, theme) {
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
      props = _objectWithoutPropertiesLoose(_ref2, _excluded$1y);

  var theme = useTheme();
  var colors = colorMapper(color, theme);
  return /*#__PURE__*/react.createElement(StyledButton$2, _extends({
    colors: colors
  }, props));
};
TextButton.propTypes = ButtonBasePropTypes;

var _excluded$1x = ["onClick", "title", "type"];
var StyledOutlineButton = styled(OutlineButton).attrs(function () {
  return {
    size: "small"
  };
}).withConfig({
  displayName: "ItemActionButton__StyledOutlineButton",
  componentId: "sc-1lilbl7-0"
})(["&&{margin-right:10px;}"]);
var ItemActionButton = function ItemActionButton(_ref) {
  var _ref$button = _ref.button,
      onClick = _ref$button.onClick,
      title = _ref$button.title,
      _ref$button$type = _ref$button.type,
      type = _ref$button$type === void 0 ? "normal" : _ref$button$type,
      button = _objectWithoutPropertiesLoose(_ref$button, _excluded$1x);

  var handleClick = function handleClick(e) {
    e.stopPropagation();
    onClick();
  };

  var Button = function Button(props) {
    return type === "normal" ? /*#__PURE__*/react.createElement(TextButton, props) : /*#__PURE__*/react.createElement(StyledOutlineButton, props);
  };

  return /*#__PURE__*/react.createElement(Button, _extends({
    key: title,
    onClick: handleClick
  }, button), title);
};
ItemActionButton.propTypes = {
  button: PropTypes.PropTypes.shape({
    onClick: PropTypes.func,
    type: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

var _excluded$1w = ["badge", "badgeColor", "icon", "iconSize", "link", "linkSize", "linkText", "mainText", "mainTextSize", "skip", "text", "textSize"];
var Section = styled(Grid$1).attrs(function (_ref) {
  var md = _ref.md,
      xs = _ref.xs;
  return {
    item: true,
    md: md || 3,
    xs: xs || 6
  };
}).withConfig({
  displayName: "ItemContent__Section",
  componentId: "sc-1hna056-0"
})(["", ";"], function (_ref2) {
  var align = _ref2.align;
  return align && "text-align: " + align;
});
var Link$1 = styled(Link$2).attrs(function () {
  return {
    underline: "none"
  };
}).withConfig({
  displayName: "ItemContent__Link",
  componentId: "sc-1hna056-1"
})(["&&{font-weight:500;color:", ";", ";}"], function (_ref3) {
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
      mainText = _ref5$item.mainText;
      _ref5$item.mainTextSize;
      var skip = _ref5$item.skip,
      text = _ref5$item.text;
      _ref5$item.textSize;
      var item = _objectWithoutPropertiesLoose(_ref5$item, _excluded$1w);

  return /*#__PURE__*/react.createElement(Section, item, skip && "", icon && /*#__PURE__*/react.createElement(Icon, {
    dInline: true,
    color: "secondary",
    icon: icon,
    size: iconSize,
    mr: 2
  }), mainText && /*#__PURE__*/react.createElement(Text, {
    content: mainText,
    dInline: true,
    fontWeight: "bold"
  }), text && /*#__PURE__*/react.createElement(Text, {
    color: "textSecondary",
    dInline: true,
    size: "sm"
  }, text), link && /*#__PURE__*/react.createElement(Link$1, {
    href: link,
    size: linkSize
  }, linkText), badge && /*#__PURE__*/react.createElement(TinyBadge, {
    color: badgeColor,
    label: badge
  }));
};
ItemContent.propTypes = {
  item: PropTypes.shape({
    badge: PropTypes.string,
    badgeColor: PropTypes.string,
    icon: PropTypes.shape({}),
    iconSize: PropTypes.number,
    link: PropTypes.string,
    linkSize: PropTypes.number,
    linkText: PropTypes.string,
    mainText: PropTypes.string,
    mainTextSize: PropTypes.number,
    skip: PropTypes.bool,
    text: PropTypes.string,
    textSize: PropTypes.number
  }).isRequired
};

var StyledLineItem = styled.div.withConfig({
  displayName: "AdvancedLineItem__StyledLineItem",
  componentId: "sc-our4qk-0"
})(["display:flex;flex-direction:column;justify-content:space-between;min-height:", "px;border-radius:8px;border:1px solid ", ";box-sizing:border-box;margin-bottom:", ";background-color:transparent;overflow:hidden;"], function (_ref) {
  var showItemAction = _ref.showItemAction;
  return showItemAction ? 130 : 110;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.gray.semiLight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(2);
});
var Content$c = styled(Flex).attrs(function () {
  return {
    container: true,
    justify: "space-between",
    spacing: 2
  };
}).withConfig({
  displayName: "AdvancedLineItem__Content",
  componentId: "sc-our4qk-1"
})(["padding:", ";", ""], function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(4);
}, function (_ref5) {
  var hoverable = _ref5.hoverable;
  return hoverable && css(["cursor:pointer;&:hover{transition:all 0.1s ease-in-out;background-color:", ";}"], function (_ref6) {
    var theme = _ref6.theme;
    return theme.palette.gray.semiLight;
  });
});
var ActionButtons = styled.div.withConfig({
  displayName: "AdvancedLineItem__ActionButtons",
  componentId: "sc-our4qk-2"
})(["display:", ";padding:", ";justify-content:", ";align-items:center;"], function (_ref7) {
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
  var content = /*#__PURE__*/react.createElement(Content$c, {
    hoverable: hoverable
  }, contentItems.map(function (item, idx) {
    return /*#__PURE__*/react.createElement(ItemContent, {
      key: "item-" + itemId + "-" + idx,
      item: item
    });
  }));
  return /*#__PURE__*/react.createElement(StyledLineItem, {
    "data-cy": dataCy,
    showItemAction: actionButtons.length > 0
  }, Wrapper ? /*#__PURE__*/react.createElement(Wrapper, null, content) : content, /*#__PURE__*/react.createElement(ActionButtons, {
    show: actionButtons.length || secondaryActionButton,
    justifyEnd: !actionButtons.length
  }, /*#__PURE__*/react.createElement("div", null, actionButtons.filter(function (_ref11) {
    var _ref11$show = _ref11.show,
        show = _ref11$show === void 0 ? [true] : _ref11$show;
    return show.some(function (b) {
      return b;
    });
  }).map(function (button, idx) {
    return /*#__PURE__*/react.createElement(ItemActionButton, {
      key: "item-" + itemId + "-" + idx,
      button: button
    });
  })), secondaryActionButton && /*#__PURE__*/react.createElement(TextButton, _extends({
    content: secondaryActionButton.content,
    size: "sm"
  }, secondaryActionButton))), extraContent);
};
AdvancedLineItem.propTypes = {
  actionButtons: PropTypes.arrayOf(PropTypes.shape({})),
  contentItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dataCy: PropTypes.string,
  extraContent: PropTypes.node,
  itemId: PropTypes.number.isRequired,
  hoverable: PropTypes.bool,
  secondaryActionButton: PropTypes.shape({
    icon: PropTypes.node,
    text: PropTypes.node
  })
};
AdvancedLineItem.defaultProps = {
  actionButtons: [],
  dataCy: "lineItem",
  extraContent: null,
  link: null,
  secondaryActionButton: null
};

var _excluded$1v = ["icon", "prefix", "size"],
    _excluded2$3 = ["className", "color", "onClick", "rounded", "squared", "prefix"];
var Rounded = styled.div.withConfig({
  displayName: "Icon__Rounded",
  componentId: "sc-naquj8-0"
})(["", " width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;border-radius:100%;box-sizing:border-box;position:relative;", " ", " ", " ", ""], function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return css(["border:solid 2px ", ";background-color:", ";"], theme.palette.gray.regular, theme.palette[color].light);
}, function (_ref2) {
  var onClick = _ref2.onClick;
  return onClick && css(["cursor:pointer;transition:all 0.1s ease-in-out;:hover{opacity:0.7;}"]);
}, function (theme) {
  return COLOR(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var Squared = styled.div.withConfig({
  displayName: "Icon__Squared",
  componentId: "sc-naquj8-1"
})(["", " width:40px;height:40px;background-color:transparent;display:inline-flex;align-items:center;justify-content:center;border-radius:8px;box-sizing:border-box;position:relative;", " ", " ", " ", ""], function (_ref3) {
  var color = _ref3.color,
      theme = _ref3.theme;
  return css(["border:solid 1px ", ";"], theme.palette[color].light);
}, function (_ref4) {
  var onClick = _ref4.onClick;
  return onClick && css(["cursor:pointer;transition:all 0.1s ease-in-out;:hover{opacity:0.7;}"]);
}, function (theme) {
  return COLOR(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var StyledIcon$8 = styled(function (_ref5) {
  var icon = _ref5.icon,
      prefix = _ref5.prefix;
      _ref5.size;
      var props = _objectWithoutPropertiesLoose(_ref5, _excluded$1v);

  return /*#__PURE__*/react.createElement(FontAwesomeIcon, _extends({
    icon: [prefix, icon]
  }, props));
}).withConfig({
  displayName: "Icon__StyledIcon",
  componentId: "sc-naquj8-2"
})(["font-size:", "px;", " ", " ", " ", ";"], function (_ref6) {
  var size = _ref6.size;
  return KIT_ICON_SIZES[size];
}, function (_ref7) {
  var color = _ref7.color,
      theme = _ref7.theme;
  if (color === "input") return "color: " + theme.palette.gray.regular + ";";
  return "color: " + theme.palette[color].main + ";";
}, function (_ref8) {
  var onClick = _ref8.onClick;
  return onClick && css(["cursor:pointer;transition:all 0.1s ease-in-out;:hover{opacity:0.7;}"]);
}, function (_ref9) {
  var disabled = _ref9.disabled;
  return disabled && css(["cursor:not-allowed;pointer-events:none;opacity:0.3;"]);
}, function (_ref10) {
  var simple = _ref10.simple;
  return simple && css(["", " ", " ", ""], function (theme) {
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
      props = _objectWithoutPropertiesLoose(_ref11, _excluded2$3);

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
  return Wrapper ? /*#__PURE__*/react.createElement(Wrapper, _extends({
    className: className,
    color: color,
    onClick: onClick
  }, props), /*#__PURE__*/react.createElement(StyledIcon$8, defaultProps)) : /*#__PURE__*/react.createElement(StyledIcon$8, _extends({
    className: className,
    onClick: onClick
  }, defaultProps));
};
Icon.propTypes = IconPropTypes;
Icon.defaultProps = IconDefaultProps;

var AlertPropTypes = _extends({
  content: PropTypes.node,
  children: PropTypes.node,
  color: PropTypes.oneOf(["info", "danger", "warning"]),
  rounded: PropTypes.bool
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var AlertDefaultProps = {
  content: null,
  children: null,
  color: "info",
  rounded: true
};

var _excluded$1u = ["content", "cocreator", "children", "color"];
var StyledMessage$1 = styled.div.withConfig({
  displayName: "Alert__StyledMessage",
  componentId: "sc-1q2nixr-0"
})(["width:100%;box-sizing:border-box;min-height:40px;padding:8px;font-size:14px;transition:all 100ms ease-in-out;display:flex;align-items:center;", " background-color:", ";color:", ";svg{color:", ";}", " ", ""], function (_ref) {
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
var AlertContainer = styled.div.withConfig({
  displayName: "Alert__AlertContainer",
  componentId: "sc-1q2nixr-1"
})(["width:100%;display:flex;justify-content:space-between;align-items:center;button{background-color:white !important;}"]);
var Avatar$1 = styled.div.withConfig({
  displayName: "Alert__Avatar",
  componentId: "sc-1q2nixr-2"
})(["margin-right:8px;position:relative;display:inline-block;img{width:40px;height:40px;object-fit:cover;border-radius:20px;bord}"]);
var AcceptedStatus = styled.div.withConfig({
  displayName: "Alert__AcceptedStatus",
  componentId: "sc-1q2nixr-3"
})(["width:18px;height:18px;border-radius:9px;background-color:", ";border:1px solid ", ";position:absolute;bottom:0;right:0;display:grid;place-items:center;svg{color:", ";font-size:12px !important;}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.success.main;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.common.white;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.text.primary;
});
var RejectedStatus = styled.div.withConfig({
  displayName: "Alert__RejectedStatus",
  componentId: "sc-1q2nixr-4"
})(["width:18px;height:18px;border-radius:9px;background-color:", ";border:2px solid ", ";position:absolute;bottom:0;right:0;display:grid;place-items:center;svg{color:", ";font-size:12px !important;}"], function (_ref8) {
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
      props = _objectWithoutPropertiesLoose(_ref11, _excluded$1u);

  var theme = useTheme();
  var colors = getColors(color, theme);
  return /*#__PURE__*/react.createElement(StyledMessage$1, _extends({
    colors: colors
  }, props), content && /*#__PURE__*/react.createElement(Icon, {
    icon: "info-circle",
    mr: 2
  }), content || children, (cocreator == null ? void 0 : cocreator.type) === "missingApproval" && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Icon, {
    icon: "info-circle",
    mr: 2
  }), /*#__PURE__*/react.createElement(Flex, null, /*#__PURE__*/react.createElement(Text, {
    fontSize: "sm",
    fontWeight: "bold"
  }, cocreator == null ? void 0 : cocreator.title), /*#__PURE__*/react.createElement(Text, {
    fontSize: "sm"
  }, cocreator == null ? void 0 : cocreator.description))), (cocreator == null ? void 0 : cocreator.type) === "approvedCollab" && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Avatar$1, null, /*#__PURE__*/react.createElement(Image, {
    src: cocreator == null ? void 0 : cocreator.avatar
  }), /*#__PURE__*/react.createElement(AcceptedStatus, null, /*#__PURE__*/react.createElement(Icon, {
    icon: "check",
    size: "sm"
  }))), /*#__PURE__*/react.createElement(AlertContainer, null, /*#__PURE__*/react.createElement(Text, {
    fontSize: "sm",
    fontWeight: "bold"
  }, cocreator == null ? void 0 : cocreator.title, ", approved state ", cocreator == null ? void 0 : cocreator.date))), (cocreator == null ? void 0 : cocreator.type) === "rejectedCollab" && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Avatar$1, null, /*#__PURE__*/react.createElement(Image, {
    src: cocreator == null ? void 0 : cocreator.avatar
  }), /*#__PURE__*/react.createElement(RejectedStatus, null, /*#__PURE__*/react.createElement(Icon, {
    icon: "times",
    size: "sm"
  }))), /*#__PURE__*/react.createElement(AlertContainer, null, /*#__PURE__*/react.createElement(Text, {
    fontSize: "sm",
    fontWeight: "bold"
  }, cocreator == null ? void 0 : cocreator.title, ", rejected state ", cocreator == null ? void 0 : cocreator.date))));
};
Alert.propTypes = AlertPropTypes;
Alert.defaultProps = AlertDefaultProps;

var AppContainerPropTypes = {
  appConfig: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  icons: PropTypes.object,
  pageLoading: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

var AppContainer = function AppContainer(_ref) {
  var appConfig = _ref.appConfig,
      children = _ref.children,
      icons = _ref.icons,
      pageLoading = _ref.pageLoading,
      pageProgressBar = _ref.pageProgressBar,
      pageProgressBarListener = _ref.pageProgressBarListener,
      theme = _ref.theme;
  if (icons) library.add(icons);
  return /*#__PURE__*/react.createElement(AppContextProvider, {
    config: appConfig
  }, /*#__PURE__*/react.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/react.createElement(ThemeProvider$1, {
    theme: theme
  }, /*#__PURE__*/react.createElement(SnackbarProvider, {
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    content: function content(key, options) {
      return /*#__PURE__*/react.createElement(Snackbar, _extends({
        id: key
      }, options));
    },
    maxSnack: 3
  }, /*#__PURE__*/react.createElement(GlobalStyle, null), /*#__PURE__*/react.createElement(CssBaseline, null), pageProgressBar && /*#__PURE__*/react.createElement(PageProgressBar, {
    listener: pageProgressBarListener
  }), pageLoading ? /*#__PURE__*/react.createElement(PageLoading, {
    fullScreen: true
  }) : children))));
};
AppContainer.propTypes = AppContainerPropTypes;

var ChipBadgePropTypes$1 = _extends({
  color: PropTypes.oneOf(THEME_COLORS),
  label: PropTypes.string,
  icon: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ChipBadgeDefaultProps$1 = {
  color: "black"
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

var _excluded$1t = ["content", "children"];
var StyledHeading = styled(Typography).withConfig({
  displayName: "Base__StyledHeading",
  componentId: "sc-1hr75b8-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var HeadingBase = function HeadingBase(_ref) {
  var content = _ref.content,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1t);

  return /*#__PURE__*/react.createElement(StyledHeading, props, content || children);
};
HeadingBase.propTypes = HeadingBasePropTypes;

var H1 = function H1(props) {
  return /*#__PURE__*/react.createElement(HeadingBase, _extends({
    variant: "h1"
  }, props));
};
H1.propTypes = HeadingBasePropTypes;

var H2 = function H2(props) {
  return /*#__PURE__*/react.createElement(HeadingBase, _extends({
    variant: "h2"
  }, props));
};
H2.propTypes = HeadingBasePropTypes;

var H3 = function H3(props) {
  return /*#__PURE__*/react.createElement(HeadingBase, _extends({
    variant: "h3"
  }, props));
};
H3.propTypes = HeadingBasePropTypes;

var H4 = function H4(props) {
  return /*#__PURE__*/react.createElement(HeadingBase, _extends({
    variant: "h4"
  }, props));
};
H4.propTypes = HeadingBasePropTypes;

var H5 = function H5(props) {
  return /*#__PURE__*/react.createElement(HeadingBase, _extends({
    variant: "h5"
  }, props));
};
H5.propTypes = HeadingBasePropTypes;

var H6 = function H6(props) {
  return /*#__PURE__*/react.createElement(HeadingBase, _extends({
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
}, COLOR_PROP_TYPES, DISPLAY_PROP_TYPES, SPACER_PROP_TYPES);
var TextBaseDefaultProps = {
  fontStyle: "normal",
  fontWeight: "regular",
  fontSize: "md"
};

var _excluded$1s = ["content", "children"];
var StyledText$2 = styled(Typography).withConfig({
  displayName: "Base__StyledText",
  componentId: "sc-17vyex8-0"
})(["&&{", " ", " font-style:", ";", " ", " ", "}"], function (_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref4, _excluded$1s);

  return /*#__PURE__*/react.createElement(StyledText$2, props, content || children);
};
TextBase.propTypes = TextBasePropTypes;
TextBase.defaultProps = TextBaseDefaultProps;

var StyledParagraph = styled(TextBase).withConfig({
  displayName: "Paragraph__StyledParagraph",
  componentId: "sc-jsbo80-0"
})(["&&{margin-bottom:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var Paragraph = function Paragraph(props) {
  return /*#__PURE__*/react.createElement(StyledParagraph, _extends({
    variant: "body1",
    paragraph: true
  }, props));
};
Paragraph.propTypes = TextBasePropTypes;

var Text = function Text(props) {
  return /*#__PURE__*/react.createElement(TextBase, _extends({
    component: "div",
    variant: "body2"
  }, props));
};
Text.propTypes = TextBasePropTypes;

var _excluded$1r = ["color", "icon", "label"];
var StyledChip = styled.div.withConfig({
  displayName: "Chip__StyledChip",
  componentId: "sc-2e49ss-0"
})(["box-sizing:border-box;display:flex;align-items:center;justify-content:center;border-radius:22px;min-width:32px;min-height:32px;width:max-content;", " ", " ", " ", ""], function (_ref) {
  var color = _ref.color,
      theme = _ref.theme,
      textColor = _ref.textColor;
  return css(["padding:", ";background-color:", ";color:", ";"], theme.spacing(2, 3), theme.palette[color].main, theme.palette[textColor].main);
}, function (_ref2) {
  var color = _ref2.color;
  return ["primary", "secondary"].includes(color) && css(["svg{mix-blend-mode:exclusion;filter:invert(1);}"]);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledLabel$4 = styled(Text).attrs(function () {
  return {
    fontWeight: "bold"
  };
}).withConfig({
  displayName: "Chip__StyledLabel",
  componentId: "sc-2e49ss-1"
})(["", ""], function (_ref3) {
  var labelColor = _ref3.labelColor;
  return ["primary", "secondary"].includes(labelColor) && css(["mix-blend-mode:exclusion;filter:invert(1);"]);
});
var StyledIcon$7 = styled(Icon).withConfig({
  displayName: "Chip__StyledIcon",
  componentId: "sc-2e49ss-2"
})(["margin-right:", ";"], function (_ref4) {
  var theme = _ref4.theme,
      icon = _ref4.icon;
  return icon && theme.spacing(2);
});
var ChipBadge = function ChipBadge(_ref5) {
  var color = _ref5.color,
      icon = _ref5.icon,
      label = _ref5.label,
      props = _objectWithoutPropertiesLoose(_ref5, _excluded$1r);

  var contentColor = ["success", "black", "error", "darkYellow"].includes(color) ? "white" : "black";
  console.log("🎉 color: ", color);
  return /*#__PURE__*/react.createElement(StyledChip, _extends({
    color: color,
    textColor: contentColor
  }, props), icon && /*#__PURE__*/react.createElement(StyledIcon$7, {
    color: contentColor,
    icon: icon
  }), label && /*#__PURE__*/react.createElement(StyledLabel$4, {
    icon: icon,
    labelColor: color,
    color: "initial"
  }, label));
};
ChipBadge.propTypes = ChipBadgePropTypes$1;
ChipBadge.defaultProps = ChipBadgeDefaultProps$1;

var ChipBadgePropTypes = _extends({
  color: PropTypes.oneOf(THEME_COLORS),
  label: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ChipBadgeDefaultProps = {
  color: "black"
};

var _excluded$1q = ["color", "label"];
var StyledBadge = styled.div.withConfig({
  displayName: "Tiny__StyledBadge",
  componentId: "sc-s2p0yz-0"
})(["box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;font-weight:bold;border:none;border-radius:", ";height:", ";width:", ";padding:", ";", " ", " ", ""], function (_ref) {
  var isShort = _ref.isShort;
  return isShort ? "50%" : "16px";
}, function (_ref2) {
  var isShort = _ref2.isShort;
  return isShort ? "24px" : "16px";
}, function (_ref3) {
  var isShort = _ref3.isShort;
  return isShort ? "24px" : "max-content";
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(0, 2);
}, function (_ref5) {
  var backgroundColor = _ref5.backgroundColor,
      color = _ref5.color,
      theme = _ref5.theme;
  return css(["background-color:", ";color:", ";"], theme.palette[backgroundColor].main, theme.palette[color].main);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledText$1 = styled(Text).withConfig({
  displayName: "Tiny__StyledText",
  componentId: "sc-s2p0yz-1"
})(["", ""], function (_ref6) {
  var color = _ref6.color;
  return color === "primary" && css(["mix-blend-mode:exclusion;filter:invert(1);"]);
});
var TinyBadge = function TinyBadge(_ref7) {
  var color = _ref7.color,
      label = _ref7.label,
      props = _objectWithoutPropertiesLoose(_ref7, _excluded$1q);

  var contentColor = ["success", "black", "error", "darkYellow"].includes(color) ? "white" : "black";
  return /*#__PURE__*/react.createElement(StyledBadge, _extends({
    color: contentColor,
    backgroundColor: color,
    isShort: label.length === 1
  }, props), /*#__PURE__*/react.createElement(StyledText$1, {
    color: "initial",
    fontWeight: "bold",
    fontSize: "sm"
  }, label));
};
TinyBadge.propTypes = ChipBadgePropTypes;
TinyBadge.defaultProps = ChipBadgeDefaultProps;

var BoxBasePropTypes = _extends({
  shadow: PropTypes.oneOf(["none", "normal", "long"])
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var BoxBaseDefaultProps = {
  shadow: "normal"
};

var StyledBox = styled.div.withConfig({
  displayName: "Base__StyledBox",
  componentId: "sc-mw8136-0"
})(["background-color:", ";", " width:100%;box-sizing:border-box;border-radius:16px;position:relative;overflow:hidden;box-shadow:", ";", " ", " ", ""], function (_ref) {
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
  return transparentSm && css(["", "{box-shadow:none;background-color:transparent;border-radius:0;}"], theme.breakpoints.down("sm"));
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var BoxBase = function BoxBase(props) {
  return /*#__PURE__*/react.createElement(StyledBox, props);
};
BoxBase.propTypes = BoxBasePropTypes;
BoxBase.defaultProps = BoxBaseDefaultProps;

var _excluded$1p = ["action", "actionDisabled", "actionLoading", "actionSize", "actionTitle", "actionType", "renderAction", "renderTitle"];
var StyledBoxFooter = styled(Flex).attrs(function () {
  return {
    container: true,
    alignItems: "center",
    justify: "space-between"
  };
}).withConfig({
  displayName: "Footer__StyledBoxFooter",
  componentId: "sc-g18bcy-0"
})(["", " ", ""], function (_ref) {
  var contentPadding = _ref.contentPadding,
      padding = _ref.padding,
      theme = _ref.theme;
  return css(["width:100%;box-sizing:border-box;background-color:", ";padding:", ";border-top:1px solid ", ";", "{padding:", ";}"], theme.palette.common.white, theme.spacing(4, padding, 4, contentPadding ? 20 : padding), theme.palette.gray.semiLight, theme.breakpoints.down("sm"), theme.spacing(padding, padding, 0, padding));
}, function (_ref2) {
  var padding = _ref2.padding,
      transparentSm = _ref2.transparentSm,
      theme = _ref2.theme;
  return transparentSm && css(["", "{background-color:transparent;border-top:none;padding:", ";}"], theme.breakpoints.down("sm"), theme.spacing(padding, 0));
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
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$1p);

  if (!renderTitle() && !renderAction() && !actionTitle) return null;
  return /*#__PURE__*/react.createElement(StyledBoxFooter, props, /*#__PURE__*/react.createElement(Flex, {
    item: true
  }, renderTitle()), /*#__PURE__*/react.createElement(Flex, {
    item: true
  }, renderAction() || /*#__PURE__*/react.createElement(Button$1, {
    content: actionTitle,
    disabled: actionDisabled,
    loading: actionLoading,
    onClick: action,
    size: actionSize,
    type: actionType
  })));
};
BoxFooter.propTypes = {
  action: PropTypes.func,
  actionDisabled: PropTypes.bool,
  actionLoading: PropTypes.bool,
  actionSize: PropTypes.string,
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
  actionSize: "md",
  actionType: "submit",
  renderAction: function renderAction() {},
  renderTitle: function renderTitle() {}
};

/* eslint-disable global-require */
var useMediaQuery = MuiUseMediaQuery;

var _excluded$1o = ["action", "actionIcon", "actionIconProps", "actionIconSize", "renderAction", "renderTitle", "metaTitle", "metaTitleColor", "subTitle", "subTitleColor", "tabs", "tabsProps", "title", "titleIcon", "titleIconHiddenSm", "titleIconProps", "titleSize", "transparentSm"];
var Wrapper$e = styled.div.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-sf2nje-0"
})(["box-sizing:border-box;background-color:", ";border-bottom:1px solid ", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.gray.semiLight;
}, function (_ref3) {
  var transparentSm = _ref3.transparentSm,
      theme = _ref3.theme;
  return transparentSm && css(["", "{background-color:transparent;border-bottom:none;}"], theme.breakpoints.down("sm"));
});
var StyledBoxHeader = styled(Flex).attrs(function () {
  return {
    container: true,
    justify: "space-between",
    wrap: "nowrap"
  };
}).withConfig({
  displayName: "Header__StyledBoxHeader",
  componentId: "sc-sf2nje-1"
})(["width:100%;box-sizing:border-box;background-color:", ";padding:", ";", ""], function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.common.white;
}, function (_ref5) {
  var padding = _ref5.padding,
      theme = _ref5.theme;
  return theme.spacing(padding);
}, function (_ref6) {
  var transparentSm = _ref6.transparentSm,
      theme = _ref6.theme;
  return transparentSm && css(["", "{background-color:transparent;padding:", ";}"], theme.breakpoints.down("sm"), theme.spacing(0));
});
var Content$b = styled.div.withConfig({
  displayName: "Header__Content",
  componentId: "sc-sf2nje-2"
})(["", " ", ""], function (_ref7) {
  var contentPadding = _ref7.contentPadding,
      padding = _ref7.padding,
      theme = _ref7.theme;
  return css(["padding:", ";", "{padding:", ";}"], theme.spacing(0, contentPadding ? 20 : padding), theme.breakpoints.down("sm"), theme.spacing(0, padding));
}, function (_ref8) {
  var transparentSm = _ref8.transparentSm,
      theme = _ref8.theme;
  return transparentSm && css(["", "{padding:", ";}"], theme.breakpoints.down("sm"), theme.spacing(8, 0, 0, 0));
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
      props = _objectWithoutPropertiesLoose(_ref9, _excluded$1o);

  var isMobile = useMediaQuery(function (theme) {
    return theme.breakpoints.down("sm");
  });
  var showTitleIcon = isMobile ? !titleIconHiddenSm : !!titleIcon;
  if (!renderTitle() && !renderAction() && !title) return null;
  return /*#__PURE__*/react.createElement(Wrapper$e, {
    transparentSm: transparentSm
  }, /*#__PURE__*/react.createElement(StyledBoxHeader, _extends({
    transparentSm: transparentSm
  }, props), /*#__PURE__*/react.createElement(Flex, {
    item: true
  }, renderTitle() || /*#__PURE__*/react.createElement(Flex, {
    container: true
  }, showTitleIcon && /*#__PURE__*/react.createElement(Icon, _extends({
    colorBlack: true,
    icon: titleIcon,
    mr: 2,
    size: "lg"
  }, titleIconProps)), /*#__PURE__*/react.createElement("div", null, metaTitle && /*#__PURE__*/react.createElement(Text, {
    content: metaTitle,
    color: metaTitleColor || "text",
    dBlock: true,
    gutterBottom: true,
    fontWeight: "normal",
    fontSize: "sm"
  }), titleSize === "sm" ? /*#__PURE__*/react.createElement(H4, {
    content: title
  }) : /*#__PURE__*/react.createElement(H3, {
    content: title
  }), subTitle && /*#__PURE__*/react.createElement(Text, {
    content: subTitle,
    color: subTitleColor,
    dBlock: true,
    fontStyle: "italic",
    fontSize: "sm"
  })))), /*#__PURE__*/react.createElement(Flex, {
    item: true
  }, renderAction() || actionIcon && /*#__PURE__*/react.createElement(Icon, _extends({
    colorGrayMedium: true,
    icon: actionIcon,
    size: actionIconSize,
    onClick: action
  }, actionIconProps)))), tabs.length > 0 && /*#__PURE__*/react.createElement(Content$b, _extends({
    transparentSm: transparentSm
  }, props), /*#__PURE__*/react.createElement(Tab, _extends({
    tabs: tabs,
    mb: 0
  }, tabsProps))));
};
BoxHeader.propTypes = {
  action: PropTypes.func,
  actionIcon: PropTypes.string,
  actionIconProps: PropTypes.shape({}),
  actionIconSize: PropTypes.string,
  metaTitle: PropTypes.string,
  metaTitleColor: PropTypes.string,
  padding: PropTypes.number.isRequired,
  renderAction: PropTypes.func,
  renderTitle: PropTypes.func,
  subTitle: PropTypes.string,
  subTitleColor: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({})),
  tabsProps: PropTypes.shape({}),
  title: PropTypes.string.isRequired,
  titleIcon: PropTypes.string,
  titleIconHiddenSm: PropTypes.bool,
  titleIconProps: PropTypes.shape({}),
  titleSize: PropTypes.string,
  transparentSm: PropTypes.bool.isRequired
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
  children: PropTypes.node.isRequired,
  footerAction: PropTypes.func,
  footerActionLoading: PropTypes.bool,
  footerActionDisabled: PropTypes.bool,
  footerActionSize: PropTypes.string,
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
  headerTitleIconHiddenSm: PropTypes.string,
  headerTitleIconProps: PropTypes.shape({}),
  headerTitleSize: PropTypes.string,
  loading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  loadingProps: PropTypes.shape({}),
  padding: PropTypes.number,
  tabs: PropTypes.arrayOf(PropTypes.shape({})),
  tabsProps: PropTypes.shape({}),
  transition: PropTypes.bool,
  transparentSm: PropTypes.bool
}, BoxBasePropTypes);
var BoxDefaultProps = _extends({
  loadingProps: {},
  padding: 6,
  cocreator: {},
  transition: false,
  transparentSm: false
}, BoxBaseDefaultProps);

var _excluded$1n = ["alert", "alertColor", "children", "cocreator", "contentPadding", "footerAction", "footerActionLoading", "footerActionDisabled", "footerActionSize", "footerActionTitle", "footerActionType", "footerRenderAction", "footerRenderTitle", "headerAction", "headerActionIcon", "headerActionIconProps", "headerActionIconSize", "headerMetaTitle", "headerMetaTitleColor", "headerRenderAction", "headerRenderTitle", "headerSubTitle", "headerSubTitleColor", "headerTitle", "headerTitleIcon", "headerTitleIconHiddenSm", "headerTitleIconProps", "headerTitleSize", "loading", "loadingMessage", "loadingProps", "padding", "tabs", "tabsProps", "transition", "transparentSm"];
var BoxContent = styled.div.withConfig({
  displayName: "Box__BoxContent",
  componentId: "sc-1d03rz8-0"
})(["", " ", ""], function (_ref) {
  var contentPadding = _ref.contentPadding,
      padding = _ref.padding,
      theme = _ref.theme;
  return css(["padding:", ";", "{padding:", ";}"], theme.spacing(padding, padding, padding, contentPadding ? 20 : padding), theme.breakpoints.down("sm"), theme.spacing(padding));
}, function (_ref2) {
  var padding = _ref2.padding,
      transparentSm = _ref2.transparentSm,
      theme = _ref2.theme;
  return transparentSm && css(["", "{padding:", ";}"], theme.breakpoints.down("sm"), theme.spacing(padding, 0));
});
var Box$1 = function Box(_ref3) {
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
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$1n);

  var isMobile = useMediaQuery(function (theme) {
    return theme.breakpoints.down("sm");
  });
  var content = /*#__PURE__*/react.createElement(react.Fragment, null, Object.keys(cocreator).length > 0 && /*#__PURE__*/react.createElement(Alert, {
    cocreator: cocreator,
    color: cocreator == null ? void 0 : cocreator.type,
    rounded: false,
    mt: isMobile && transparentSm ? 6 : 0,
    p: 3
  }), alert && /*#__PURE__*/react.createElement(Alert, {
    content: alert,
    color: alertColor,
    rounded: isMobile && transparentSm,
    mt: isMobile && transparentSm ? 6 : 0
  }), /*#__PURE__*/react.createElement(BoxContent, {
    padding: padding,
    contentPadding: contentPadding,
    transparentSm: transparentSm
  }, children), /*#__PURE__*/react.createElement(BoxFooter, {
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
  return /*#__PURE__*/react.createElement(BoxBase, _extends({
    transparentSm: transparentSm
  }, props), loading && /*#__PURE__*/react.createElement(PageLoading, _extends({
    message: loadingMessage,
    transparent: true,
    fullScreen: isMobile && transparentSm
  }, loadingProps)), /*#__PURE__*/react.createElement(BoxHeader, {
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
  }), transition ? /*#__PURE__*/react.createElement(PageTransition, null, content) : content);
};
Box$1.propTypes = BoxPropTypes;
Box$1.defaultProps = BoxDefaultProps;

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

var _excluded$1m = ["checked", "dataCy", "description", "iconName", "iconImage", "id", "onChange", "subCategory", "name"];
var StyledCategoryItem = styled.div.withConfig({
  displayName: "CategoryItem__StyledCategoryItem",
  componentId: "sc-xowe4q-0"
})(["position:relative;border-radius:8px;padding:", "px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;flex-direction:column;height:130px;border-width:1px;border-style:solid;border-color:", ";text-align:center;cursor:pointer;overflow:hidden;&:hover{border-color:", ";}", ""], function (_ref) {
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
var StyledIcon$6 = styled.img.withConfig({
  displayName: "CategoryItem__StyledIcon",
  componentId: "sc-xowe4q-1"
})(["width:32px;height:32px;background-color:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.primary.main;
});
var CheckIcon = styled.div.withConfig({
  displayName: "CategoryItem__CheckIcon",
  componentId: "sc-xowe4q-2"
})(["position:absolute;top:0;left:0;width:24px;height:24px;border-bottom-right-radius:4px;display:flex;align-items:center;justify-content:center;background-color:", ";svg{color:#ffffff;}"], function (_ref7) {
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
      props = _objectWithoutPropertiesLoose(_ref8, _excluded$1m);

  return /*#__PURE__*/react.createElement(StyledCategoryItem, _extends({
    checked: checked,
    "data-cy": dataCy,
    onClick: function onClick() {
      return onChange(id);
    }
  }, props), checked && /*#__PURE__*/react.createElement(CheckIcon, null, /*#__PURE__*/react.createElement(Icon, {
    icon: "check",
    size: "sm"
  })), iconName && /*#__PURE__*/react.createElement(Icon, {
    colorGrayMedium: true,
    icon: iconName,
    size: "lg"
  }), iconImage && /*#__PURE__*/react.createElement(StyledIcon$6, {
    src: iconImage,
    alt: name
  }), /*#__PURE__*/react.createElement(Text, {
    color: subCategory ? "textPrimary" : "primary",
    fontWeight: "bold",
    noWrap: true,
    py: 2
  }, name), /*#__PURE__*/react.createElement(Text, {
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
  return /*#__PURE__*/react.createElement(RCL, {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: theme.palette.gray.light,
    foregroundColor: theme.palette.gray.regular,
    style: {
      // border: `4px solid ${theme.palette.gray.light}`,
      backgroundColor: theme.palette.gray.light,
      borderRadius: 8
    }
  }, /*#__PURE__*/react.createElement("rect", {
    x: WIDTH / 2 - ICON_SIZE / 2,
    y: ICON_TOP,
    rx: 4,
    ry: 4,
    width: ICON_SIZE,
    height: ICON_SIZE
  }), /*#__PURE__*/react.createElement("rect", {
    x: WIDTH / 2 - TITLE_WIDTH / 2,
    y: TITLE_TOP,
    rx: 0,
    ry: 0,
    width: TITLE_WIDTH,
    height: TITLE_HEIGHT
  }), !subCategory && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("rect", {
    x: WIDTH / 2 - DESC_WIDTH / 2,
    y: DESC_TOP,
    rx: 0,
    ry: 0,
    width: DESC_WIDTH,
    height: DESC_HEIGHT
  }), /*#__PURE__*/react.createElement("rect", {
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

var CartButtonPropTypes = {
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
var CartButtonDefaultProps = {
  count: "0"
};

var _excluded$1l = ["count"];
var StyledButton$1 = styled(MuiButtonBase).withConfig({
  displayName: "CartButton__StyledButton",
  componentId: "sc-199jgxq-0"
})(["&&{background-color:", ";border-radius:44px;padding:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.semiLight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2);
});
var CartButton = function CartButton(_ref3) {
  var count = _ref3.count,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$1l);

  return /*#__PURE__*/react.createElement(StyledButton$1, props, /*#__PURE__*/react.createElement(Icon, {
    colorGrayMedium: true,
    icon: "shopping-cart"
  }), /*#__PURE__*/react.createElement(Indicator, {
    content: count,
    ml: 1
  }));
};
CartButton.propTypes = CartButtonPropTypes;
CartButton.defaultProps = CartButtonDefaultProps;

var CollapsePropTypes = {
  isOpened: PropTypes.bool
};

var Wrapper$d = styled.div.withConfig({
  displayName: "Collapse__Wrapper",
  componentId: "sc-u544hd-0"
})([".ReactCollapse--collapse{transition:height 200ms ease-in-out;}"]);
var Collapse = function Collapse(props) {
  return /*#__PURE__*/react.createElement(Wrapper$d, null, /*#__PURE__*/react.createElement(Collapse$1, props));
};
Collapse.propTypes = CollapsePropTypes;

var _excluded$1k = ["isOpened"];
var CollapseButton = function CollapseButton(_ref) {
  var isOpened = _ref.isOpened,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1k);

  return /*#__PURE__*/react.createElement(Icon, _extends({
    icon: isOpened ? "chevron-up" : "chevron-down"
  }, props));
};
CollapseButton.propTypes = {
  isOpened: PropTypes.bool.isRequired
};

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

var Image = function Image(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/react.createElement(StyledImg$1, _extends({
    itemProp: "contentUrl"
  }, props));
};
var StyledImg$1 = styled.img.withConfig({
  displayName: "Image__StyledImg",
  componentId: "sc-1oqfb7n-0"
})(["", " ", " ", " ", " ", " ", ""], function (_ref2) {
  var width = _ref2.width;
  return width && "width: " + width + ";";
}, function (_ref3) {
  var height = _ref3.height;
  return height && "height: " + height + ";";
}, function (_ref4) {
  var cover = _ref4.cover;
  return cover && css(["height:100%;object-fit:cover;"]);
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

var _excluded$1j = ["details", "largeImageUrl", "name", "smallImagesUrls"];
var Box = styled(BoxBase).withConfig({
  displayName: "CollectionItem__Box",
  componentId: "sc-1tzb5sa-0"
})(["overflow:hidden;transition:all 0.2s ease-in-out;cursor:pointer;:hover{transform:scale(1.03);}"]);
var StyledItem$1 = styled(Flex).attrs(function () {
  return {
    item: true
  };
}).withConfig({
  displayName: "CollectionItem__StyledItem",
  componentId: "sc-1tzb5sa-1"
})(["width:100%;height:", "px;background-color:", ";outline:4px solid white;"], function (_ref) {
  var height = _ref.height;
  return height || 116;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.gray.regular;
});
var StyledImage$4 = styled(Image).withConfig({
  displayName: "CollectionItem__StyledImage",
  componentId: "sc-1tzb5sa-2"
})(["width:100%;height:100%;object-fit:cover;"]);
var Content$a = styled.div.withConfig({
  displayName: "CollectionItem__Content",
  componentId: "sc-1tzb5sa-3"
})(["padding:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(4);
});
var CollectionItem = function CollectionItem(_ref4) {
  var details = _ref4.details,
      largeImageUrl = _ref4.largeImageUrl,
      name = _ref4.name,
      smallImagesUrls = _ref4.smallImagesUrls,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded$1j);

  return /*#__PURE__*/react.createElement(Box, props, /*#__PURE__*/react.createElement(Flex, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(StyledItem$1, {
    height: 230,
    xs: 12
  }, /*#__PURE__*/react.createElement(StyledImage$4, {
    height: 230,
    src: largeImageUrl
  })), /*#__PURE__*/react.createElement(StyledItem$1, {
    xs: 4
  }, smallImagesUrls[0] && /*#__PURE__*/react.createElement(StyledImage$4, {
    src: smallImagesUrls[0]
  })), /*#__PURE__*/react.createElement(StyledItem$1, {
    xs: 4
  }, smallImagesUrls[1] && /*#__PURE__*/react.createElement(StyledImage$4, {
    src: smallImagesUrls[1]
  })), /*#__PURE__*/react.createElement(StyledItem$1, {
    xs: 4
  }, smallImagesUrls[2] && /*#__PURE__*/react.createElement(StyledImage$4, {
    src: smallImagesUrls[2]
  }))), /*#__PURE__*/react.createElement(Content$a, null, /*#__PURE__*/react.createElement(H3, {
    content: name,
    mb: 4,
    noWrap: true
  }), /*#__PURE__*/react.createElement(DetailsTable, {
    justifyBetween: true,
    rows: details
  })));
};
CollectionItem.propTypes = {
  details: PropTypes.arrayOf(PropTypes.string),
  largeImageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  smallImagesUrls: PropTypes.arrayOf(PropTypes.string)
};
CollectionItem.defaultProps = {
  details: [],
  smallImagesUrls: []
};

var AppContext = /*#__PURE__*/react.createContext();

var _excluded$1i = ["config"];
var AppContextProvider = function AppContextProvider(_ref) {
  var config = _ref.config,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1i);

  return /*#__PURE__*/react.createElement(AppContext.Provider, _extends({
    value: config
  }, props));
};
AppContextProvider.propTypes = {
  config: PropTypes.shape({})
};
AppContextProvider.defaultProps = {
  config: {}
};

var useAppContext = function useAppContext() {
  return react.useContext(AppContext);
};

var DetailsTablePropTypes = _extends({
  expandButtonTitle: PropTypes.string,
  expandButtonProps: PropTypes.shape({}),
  justifyBetween: PropTypes.bool,
  labelFontSize: PropTypes.string,
  labelTextTransform: PropTypes.string,
  labelWidth: PropTypes.number,
  rows: PropTypes.arrayOf(PropTypes.shape({
    columnSm: PropTypes.bool,
    divider: PropTypes.bool,
    dividerSize: PropTypes.number,
    expandable: PropTypes.bool,
    icon: PropTypes.string,
    iconProps: PropTypes.shape({}),
    label: PropTypes.string,
    labelHint: PropTypes.bool,
    labelHintIcon: PropTypes.string,
    labelHintContent: PropTypes.string,
    renderLabel: PropTypes.func,
    value: PropTypes.node
  })),
  size: PropTypes.oneOf(["sm", "md"])
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var DetailsTableDefaultProps = {
  expandButtonTitle: "Expandable items",
  expandButtonProps: {},
  labelFontSize: "md",
  labelTextTransform: "initial",
  labelWidth: 140,
  size: "md"
};

var _excluded$1h = ["expandButtonTitle", "expandButtonProps", "labelTextTransform", "labelFontSize", "labelWidth", "labelWidthSm", "justifyBetween", "rows", "size"];
var Wrapper$c = styled.div.withConfig({
  displayName: "DetailsTable__Wrapper",
  componentId: "sc-41caw8-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Row$3 = styled.div.withConfig({
  displayName: "DetailsTable__Row",
  componentId: "sc-41caw8-1"
})(["display:flex;align-items:center;", " min-height:", ";margin-bottom:", ";", "{", " margin-bottom:", ";flex-wrap:wrap;align-items:flex-start;}"], function (_ref) {
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
var LabelWrapper = styled.div.withConfig({
  displayName: "DetailsTable__LabelWrapper",
  componentId: "sc-41caw8-2"
})(["flex:0 0 ", "px;max-width:", "px;display:flex;align-items:center;height:100%;padding-right:", ";", "{flex:0 0 100%;max-width:100%;margin-bottom:", ";}"], function (_ref7) {
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
var Label$2 = styled(Text).attrs(function () {
  return {
    color: "textSecondary"
  };
}).withConfig({
  displayName: "DetailsTable__Label",
  componentId: "sc-41caw8-3"
})(["&&{text-transform:", ";}"], function (_ref12) {
  var textTransform = _ref12.textTransform;
  return textTransform;
});
var Hint$1 = styled.div.withConfig({
  displayName: "DetailsTable__Hint",
  componentId: "sc-41caw8-4"
})(["background:", ";margin-left:", ";border-radius:100%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;svg{color:", ";font-size:10px;}"], function (_ref13) {
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
      labelWidth = _ref16.labelWidth;
      _ref16.labelWidthSm;
      var justifyBetween = _ref16.justifyBetween,
      rows = _ref16.rows,
      size = _ref16.size,
      props = _objectWithoutPropertiesLoose(_ref16, _excluded$1h);

  var _useState = react.useState(false),
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
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Row$3, {
      columnSm: columnSm,
      key: label + ":" + value,
      justifyBetween: justifyBetween,
      size: size
    }, /*#__PURE__*/react.createElement(LabelWrapper, {
      labelWidth: labelWidth
    }, renderLabel() || /*#__PURE__*/react.createElement(react.Fragment, null, icon && /*#__PURE__*/react.createElement(Icon, _extends({
      icon: icon,
      mr: 2,
      colorGrayRegular: true
    }, iconProps)), /*#__PURE__*/react.createElement(Label$2, {
      textTransform: labelTextTransform,
      content: label,
      fontSize: labelFontSize
    }), labelHint && /*#__PURE__*/react.createElement(Tooltip, {
      content: labelHintContent
    }, /*#__PURE__*/react.createElement(Hint$1, null, /*#__PURE__*/react.createElement(Icon, {
      icon: labelHintIcon
    }))))), value || "-"), divider && /*#__PURE__*/react.createElement(Divider, {
      py: dividerSize
    }));
  };

  return /*#__PURE__*/react.createElement(Wrapper$c, props, rows.filter(function (row) {
    return !row.expandable;
  }).map(function (row) {
    return renderRow(row);
  }), showExpandButton && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(OutlineButton, _extends({
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
  from: PropTypes.string,
  selectRange: PropTypes.bool,
  to: PropTypes.string
};
var DatepickerDefaultProps = {
  from: null,
  selectRange: false,
  to: null
};

var _excluded$1g = ["from", "selectRange", "to"];
var Container$d = styled.div.withConfig({
  displayName: "Datepicker__Container",
  componentId: "sc-1s1s47f-0"
})(["display:flex;background-color:", " !important;.Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside){background-color:", " !important;color:", ";}.Selectable .DayPicker-Day{border-radius:", " !important;}.Selectable .DayPicker-Day--start{background-color:", " !important;color:", ";border-top-left-radius:8px !important;border-bottom-left-radius:8px !important;}.Selectable .DayPicker-Day--end{background-color:", " !important;color:", ";border-top-right-radius:8px !important;border-bottom-right-radius:8px !important;}"], function (_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref9, _excluded$1g);

  return /*#__PURE__*/react.createElement(Container$d, {
    selectRange: selectRange
  }, /*#__PURE__*/react.createElement(DayPicker, _extends({
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
  className: PropTypes.any,
  thickness: PropTypes.number
}, SPACER_PROP_TYPES);
var DividerDefaultProps = {
  thickness: 1
};

var StyledDivider = styled.hr.withConfig({
  displayName: "Divider__StyledDivider",
  componentId: "sc-1wqczuk-0"
})(["line-height:1em;position:relative;outline:0;border:0;color:black;text-align:center;&:before{content:\"\";background-color:", ";position:absolute;left:0;top:50%;width:100%;height:", "px;}&:after{content:\"", "\";position:relative;display:inline-block;padding:", ";background-color:", ";color:", ";font-weight:300;font-size:16px;line-height:160%;font-style:italic;}", ""], function (_ref) {
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
}, function (props) {
  return SPACER(props);
});
var Divider = function Divider(props) {
  return /*#__PURE__*/react.createElement(StyledDivider, props);
};
Divider.propTypes = DividerPropTypes;
Divider.defaultProps = DividerDefaultProps;

var DropdownPropTypes = _extends({
  anchorEl: PropTypes.object,
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string
  })),
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  responsive: PropTypes.bool
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

var _excluded$1f = ["children", "items", "responsive"],
    _excluded2$2 = ["label", "onClick", "value"];
var StyledDropdown = styled(Menu).withConfig({
  displayName: "Dropdown__StyledDropdown",
  componentId: "sc-1hslh2d-0"
})([".MuiMenu-paper{border-radius:12px;background-color:", ";box-shadow:0px 16px 56px rgba(41,40,57,0.16);}", " ", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledItem = styled(MenuItem).withConfig({
  displayName: "Dropdown__StyledItem",
  componentId: "sc-1hslh2d-1"
})([""]);
var StyledDialog$1 = styled(Dialog).attrs(function () {
  return {
    fullScreen: true,
    hideBackdrop: true
  };
}).withConfig({
  displayName: "Dropdown__StyledDialog",
  componentId: "sc-1hslh2d-2"
})(["&&{.MuiDialog-paper{position:relative;background-color:", ";}}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.common.white;
});
var Dropdown = function Dropdown(_ref3) {
  var children = _ref3.children,
      items = _ref3.items,
      responsive = _ref3.responsive,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$1f);

  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (responsive && isMobile) return /*#__PURE__*/react.createElement(StyledDialog$1, _extends({
    fullScreen: true,
    hideBackdrop: true
  }, props), children);
  return /*#__PURE__*/react.createElement(StyledDropdown, props, children || items.map(function (_ref4) {
    var label = _ref4.label,
        _onClick = _ref4.onClick,
        value = _ref4.value,
        itemProps = _objectWithoutPropertiesLoose(_ref4, _excluded2$2);

    return /*#__PURE__*/react.createElement(StyledItem, _extends({
      key: label,
      onClick: function onClick() {
        return _onClick(value);
      }
    }, itemProps), label);
  }));
};
Dropdown.propTypes = DropdownPropTypes;
Dropdown.defaultProps = DropdownDefaultProps;

var Wrapper$b = styled.div.withConfig({
  displayName: "Button__Wrapper",
  componentId: "sc-1yl0nkz-0"
})(["display:inline-flex;align-items:center;justify-content:center;border-radius:12px;&&{width:40px;height:40px;background-color:", ";svg{color:", ";}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.primary.light;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.primary.main;
});
var DownloadModuleButton = function DownloadModuleButton(_ref3) {
  var icon = _ref3.icon;
  return /*#__PURE__*/react.createElement(Wrapper$b, null, /*#__PURE__*/react.createElement(Icon, {
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

var _excluded$1e = ["downloadPdfText", "downloadPdfUrl", "downloadQrCodeDesc", "downloadQrCodeText", "downloadQrCodeUrl", "qrCodeUrl", "qrCodeValue"];
var Container$c = styled.div.withConfig({
  displayName: "DownloadModule__Container",
  componentId: "sc-lhoe08-0"
})(["background-color:", ";padding:", ";border-radius:16px;", " ", ""], function (_ref) {
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
      downloadQrCodeUrl = _ref3.downloadQrCodeUrl;
      _ref3.qrCodeUrl;
      var qrCodeValue = _ref3.qrCodeValue,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$1e);

  return /*#__PURE__*/react.createElement(Container$c, props, /*#__PURE__*/react.createElement(Flex, {
    container: true,
    mb: 8
  }, /*#__PURE__*/react.createElement(DownloadModuleButton, {
    icon: "file-pdf"
  }), /*#__PURE__*/react.createElement(TextButton, {
    content: downloadPdfText,
    href: downloadPdfUrl,
    size: "sm"
  })), /*#__PURE__*/react.createElement(Flex, {
    container: true,
    wrap: "nowrap"
  }, /*#__PURE__*/react.createElement(QRCode, {
    includeMargin: true,
    size: 76,
    value: qrCodeValue
  }), /*#__PURE__*/react.createElement(Flex, {
    item: true
  }, /*#__PURE__*/react.createElement(Text, {
    content: downloadQrCodeDesc,
    ml: 2
  }), /*#__PURE__*/react.createElement(TextButton, {
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
      previewUrl: PropTypes.string,
      renderDate: PropTypes.func,
      renderDescription: PropTypes.func,
      renderName: PropTypes.func,
      renderPreview: PropTypes.func
    }))
  })),
  noItemsText: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FileManagerDefaultProps = {
  noItemsText: "No items yet"
};

var img$6 = "data:image/svg+xml,%3csvg width='33' height='40' viewBox='0 0 33 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.37397 3.33126C1.37678 1.67614 2.72079 0.334236 4.37591 0.334036L24.5333 0.331592C24.8105 0.331558 25.0348 0.556224 25.0344 0.833397L25.0247 6.56026C25.0236 7.20172 25.5427 7.72166 26.1842 7.72158L31.4682 7.72094C31.7454 7.72091 31.9697 7.94558 31.9692 8.22275L31.921 36.6682C31.9182 38.3233 30.5742 39.6652 28.9191 39.6654L4.30932 39.6684C2.65419 39.6686 1.31472 38.327 1.31752 36.6719L1.37397 3.33126Z' fill='white' stroke='%23CECDD9' stroke-width='0.659601'/%3e%3cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='33' height='41'%3e%3cpath d='M1.41698 3.33054C1.42171 1.67541 2.76728 0.333546 4.42241 0.333387L24.5431 0.331456C24.8203 0.33143 25.0444 0.556101 25.0436 0.833274L25.0272 6.56069C25.0254 7.20215 25.5439 7.72211 26.1854 7.72205L31.4589 7.72154C31.7361 7.72151 31.9601 7.94618 31.9593 8.22336L31.8781 36.6713C31.8733 38.3264 30.5278 39.6683 28.8726 39.6684L4.31004 39.6708C2.65492 39.6709 1.31701 38.3293 1.32173 36.6742L1.41698 3.33054Z' fill='white' stroke='black' stroke-width='0.659601'/%3e%3c/mask%3e%3cg mask='url(%23mask0)'%3e%3cellipse rx='25.706' ry='25.7619' transform='matrix(1 -9.78625e-05 -0.00286006 0.999999 6.34329 49.0401)' fill='%23CECDD9'/%3e%3c/g%3e%3cpath d='M27.0942 5.49303L27.1027 0.497559C27.103 0.338688 27.3045 0.270214 27.4011 0.396184L31.2307 5.39119C31.3146 5.50058 31.2363 5.65887 31.0984 5.65888L27.2603 5.65935C27.1684 5.65936 27.0941 5.5849 27.0942 5.49303Z' stroke='%23CECDD9' stroke-width='0.659601'/%3e%3cpath d='M1.33511 10.7673L20.6233 10.7654C21.1301 10.7654 21.5403 11.1762 21.5394 11.683L21.5305 17.0158C21.5297 17.5227 21.1181 17.9336 20.6113 17.9336L1.32314 17.9355L1.33511 10.7673Z' fill='white' stroke='%23CECDD9' stroke-width='0.659601'/%3e%3cpath d='M10.8275 32.317L7.92595 32.3174L7.92078 35.3709L7.009 35.371L7.02071 28.4566L11.3042 28.4561L11.3029 29.2064L7.93122 29.2069L7.92721 31.5718L10.8288 31.5714L10.8275 32.317ZM13.2015 35.3702L12.323 35.3704L12.3317 30.2321L13.2102 30.232L13.2015 35.3702ZM12.2628 28.8692C12.263 28.7267 12.3059 28.6064 12.3916 28.5082C12.4804 28.4101 12.6103 28.361 12.7812 28.361C12.9522 28.361 13.0819 28.41 13.1704 28.5081C13.2589 28.6063 13.303 28.7266 13.3028 28.869C13.3025 29.0115 13.258 29.1302 13.1692 29.2252C13.0804 29.3202 12.9505 29.3677 12.7795 29.3677C12.6086 29.3678 12.4789 29.3203 12.3904 29.2253C12.3051 29.1303 12.2625 29.0116 12.2628 28.8692ZM15.5665 35.37L14.6879 35.3701L14.7003 28.0758L15.5788 28.0757L15.5665 35.37ZM19.109 35.4645C18.4125 35.4646 17.8461 35.2367 17.41 34.7809C16.9739 34.3219 16.7565 33.7093 16.7578 32.9431L16.7581 32.7817C16.7589 32.272 16.8563 31.8177 17.05 31.4187C17.247 31.0166 17.5198 30.7032 17.8684 30.4784C18.2202 30.2504 18.6003 30.1363 19.0088 30.1363C19.6768 30.1362 20.1956 30.3562 20.5653 30.7962C20.9349 31.2362 21.1191 31.8662 21.1177 32.6862L21.1171 33.0518L17.6361 33.0523C17.6479 33.5588 17.7945 33.9688 18.0757 34.2822C18.3601 34.5924 18.7208 34.7475 19.1577 34.7474C19.4679 34.7474 19.7308 34.684 19.9463 34.5574C20.1618 34.4307 20.3504 34.2629 20.5123 34.0539L21.0482 34.4718C20.6165 35.1335 19.9701 35.4644 19.109 35.4645ZM19.0075 30.8581C18.6529 30.8582 18.3551 30.988 18.1141 31.2476C17.873 31.5041 17.7236 31.865 17.6659 32.3304L20.2397 32.3301L20.2399 32.2636C20.2153 31.8173 20.0956 31.4722 19.8807 31.2284C19.6658 30.9815 19.3748 30.8581 19.0075 30.8581Z' fill='white'/%3e%3c/svg%3e";

var Container$b = styled.div.withConfig({
  displayName: "FileManager__Container",
  componentId: "sc-iqc9f7-0"
})([""]);
var Wrapper$a = styled.div.withConfig({
  displayName: "FileManager__Wrapper",
  componentId: "sc-iqc9f7-1"
})(["border:1px solid ", ";padding:", ";margin-bottom:", ";border-radius:8px;", "{background-color:", ";}", " ", ""], function (_ref) {
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
var Row$2 = styled.div.withConfig({
  displayName: "FileManager__Row",
  componentId: "sc-iqc9f7-2"
})(["display:flex;align-items:center;flex-wrap:nowrap;width:100%;height:48px;margin-bottom:", ";", "{margin-bottom:", ";}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(2);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.breakpoints.down("sm");
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing(4);
});
var DetailsWrapper = styled.div.withConfig({
  displayName: "FileManager__DetailsWrapper",
  componentId: "sc-iqc9f7-3"
})(["min-width:0;flex:1;"]);
var Item$4 = styled(Flex).attrs(function (_ref9) {
  _ref9.lg;
      _ref9.md;
      var xs = _ref9.xs;
  return {
    item: true,
    xs: xs || 12
  };
}).withConfig({
  displayName: "FileManager__Item",
  componentId: "sc-iqc9f7-4"
})(["display:flex;align-items:center;", ""], function (_ref10) {
  var align = _ref10.align,
      theme = _ref10.theme;
  return align && css(["", "{justify-content:", ";}"], theme.breakpoints.up("sm"), align);
});
var FileManager = function FileManager(_ref11) {
  var data = _ref11.data,
      noItemsText = _ref11.noItemsText;
  return /*#__PURE__*/react.createElement(Container$b, null, data.map(function (_ref12) {
    var label = _ref12.label,
        files = _ref12.files;
    return /*#__PURE__*/react.createElement(Wrapper$a, {
      key: label
    }, /*#__PURE__*/react.createElement(Text, {
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
      return /*#__PURE__*/react.createElement(Row$2, {
        key: id
      }, renderPreview() || /*#__PURE__*/react.createElement(Thumbnail, {
        imgSrc: previewUrl,
        hasPreview: true,
        mr: 4
      }), /*#__PURE__*/react.createElement(DetailsWrapper, null, /*#__PURE__*/react.createElement(Flex, {
        container: true
      }, /*#__PURE__*/react.createElement(Item$4, {
        md: 6,
        lg: 6
      }, renderName() || /*#__PURE__*/react.createElement(Text, {
        content: name,
        noWrap: true,
        fontWeight: "bold"
      })), /*#__PURE__*/react.createElement(Item$4, {
        md: 2,
        lg: 2
      }, renderDate() || /*#__PURE__*/react.createElement(Text, {
        content: date,
        color: "textSecondary",
        fontSize: "sm"
      })), /*#__PURE__*/react.createElement(Item$4, {
        align: "flex-end",
        md: 4,
        lg: 4
      }, renderDescription() || /*#__PURE__*/react.createElement(Text, {
        content: description,
        color: "textSecondary",
        fontSize: "sm",
        noWrap: true
      })))));
    }) : /*#__PURE__*/react.createElement(Item$4, {
      xs: 12
    }, /*#__PURE__*/react.createElement(Image, {
      src: img$6,
      mr: 4
    }), /*#__PURE__*/react.createElement(Text, {
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

var img$5 = "data:image/svg+xml,%3csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.5938 0.625L5.375 8.84375L2.375 5.8125C2.21875 5.6875 1.96875 5.6875 1.84375 5.8125L0.9375 6.71875C0.8125 6.84375 0.8125 7.09375 0.9375 7.25L5.125 11.4062C5.28125 11.5625 5.5 11.5625 5.65625 11.4062L15.0312 2.03125C15.1562 1.90625 15.1562 1.65625 15.0312 1.5L14.125 0.625C14 0.46875 13.75 0.46875 13.5938 0.625Z' fill='white'/%3e%3c/svg%3e";

var RadioBasePropTypes = _extends({
  block: PropTypes.bool,
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
  block: true,
  defaultValue: "",
  hasError: false,
  name: "radio",
  stacked: true
};

var _excluded$1d = ["bordered", "defaultValue", "hasError", "icon", "iconProps", "label", "labelHtml", "name", "register", "stacked", "type", "value"];
var StyledInput$2 = styled.input.withConfig({
  displayName: "Item__StyledInput",
  componentId: "sc-lk2kwt-0"
})(["display:none;+ label{display:inline-flex;align-items:center;font-weight:600;font-size:14px;line-height:120%;margin:0 32px 0 0;cursor:pointer;transition:all 0.1s ease-in-out;a{text-decoration:none;color:", ";}", " &::before{content:\"\";display:inline-block;width:24px;min-width:24px;height:24px;border-radius:", ";background-color:", ";border:1px solid ", ";margin-right:8px;transition:background-color 0.1s ease-in-out;", "}}&:checked + label::before{background-color:", ";border-color:", ";background-image:url(\"", "\");background-size:16px 16px;background-repeat:no-repeat;background-position:center;}&:disabled + label{opacity:0.3;&,span{cursor:default;}}", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.primary.main;
}, function (_ref2) {
  var stacked = _ref2.stacked;
  return stacked && css(["display:flex;:not(:last-child){margin:0 0 24px 0;}"]);
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
  return hasError && css(["border-color:", ";"], function (_ref7) {
    var theme = _ref7.theme;
    return theme.palette.error.main;
  });
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.primary.main;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.palette.primary.main;
}, "" + img$5, function (_ref10) {
  var bordered = _ref10.bordered,
      theme = _ref10.theme;
  return bordered && css(["+ label{margin:0;}+ label:first-of-type{margin:0 0 0 -1px;}+ label:last-of-type{margin:0 -1px 0 0;}&:checked + label{border:2px solid ", ";border-radius:12px;height:102%;}"], theme.palette.gray.dark);
});
var StyledLabel$3 = styled.label.withConfig({
  displayName: "Item__StyledLabel",
  componentId: "sc-lk2kwt-1"
})(["", ""], function (_ref11) {
  var bordered = _ref11.bordered;
  return bordered && css(["flex:1;display:flex;align-items:center;justify-content:center;height:100%;"]);
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
      props = _objectWithoutPropertiesLoose(_ref12, _excluded$1d);

  var id = name + "-" + value;
  var defaultChecked = type === "checkbox" ? defaultValue.includes(value) : defaultValue === value;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(StyledInput$2, _extends({
    bordered: bordered,
    defaultChecked: defaultChecked,
    hasError: hasError,
    id: id,
    name: name,
    ref: register,
    stacked: stacked,
    type: type,
    value: value
  }, props)), /*#__PURE__*/react.createElement(StyledLabel$3, {
    bordered: bordered,
    htmlFor: id
  }, icon && /*#__PURE__*/react.createElement(Icon, _extends({
    color: "secondary",
    mr: 2
  }, iconProps, {
    icon: icon
  })), labelHtml ? /*#__PURE__*/react.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: labelHtml
    }
  }) : label));
};
RadioBaseItem.propTypes = RadioBasePropTypes;
RadioBaseItem.defaultProps = RadioBaseDefaultProps;

var _excluded$1c = ["options"];
var RadioBase = function RadioBase(_ref) {
  var options = _ref.options,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1c);

  return /*#__PURE__*/react.createElement(Fieldset, null, options.map(function (opt) {
    return /*#__PURE__*/react.createElement(RadioBaseItem, _extends({
      key: opt.value
    }, opt, props));
  }));
};
RadioBase.propTypes = RadioBasePropTypes;
RadioBase.defaultProps = RadioBaseDefaultProps;

var _excluded$1b = ["block", "hasError", "options"];
var Wrapper$9 = styled.div.withConfig({
  displayName: "BorderedRadio__Wrapper",
  componentId: "sc-1o0tnsl-0"
})(["width:", ";border:1px solid ", ";border-radius:12px;height:40px;display:flex;align-items:center;justify-content:center;transition:all 100ms ease-in-out;", " ", ""], function (_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$1b);

  return /*#__PURE__*/react.createElement(Wrapper$9, {
    block: block,
    hasError: hasError
  }, options.map(function (opt) {
    return /*#__PURE__*/react.createElement(RadioBaseItem, _extends({
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

var StyledRadioBase$1 = styled(RadioBase).withConfig({
  displayName: "Checkbox__StyledRadioBase",
  componentId: "sc-w3jfx2-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Checkbox = function Checkbox(props) {
  return /*#__PURE__*/react.createElement(StyledRadioBase$1, _extends({
    type: "checkbox"
  }, props));
};
Checkbox.propTypes = RadioBasePropTypes;
Checkbox.defaultProps = RadioBaseDefaultProps;

var Popover = styled(MuiPopover).withConfig({
  displayName: "Component__Popover",
  componentId: "sc-oix04g-0"
})([".MuiPopover-paper{background-color:", " !important;margin-top:", ";padding:0;border-radius:12px;box-shadow:0px 16px 56px rgba(41,40,57,0.16);}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(5);
});
var BottomSection$1 = styled.div.withConfig({
  displayName: "Component__BottomSection",
  componentId: "sc-oix04g-1"
})(["width:100%;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;padding:", ";border-top:1px solid ", ";background-color:", " !important;"], function (_ref3) {
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

  var _useState = react.useState(),
      anchorEl = _useState[0],
      setAnchorEl = _useState[1];

  var _useState2 = react.useState({
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
  react.useEffect(function () {
    setDate({
      from: currentValue.start,
      to: currentValue.end
    });
  }, [anchorEl]);

  var handleDayClick = function handleDayClick(day, _ref7) {
    var selected = _ref7.selected;

    if (selectRange) {
      var range = DateUtils.addDayToRange(day, date);
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
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Input, {
    disabled: disabled,
    hasError: hasError,
    placeholder: placeholder,
    onClick: function onClick(e) {
      return setAnchorEl(e.currentTarget);
    },
    readOnly: true,
    selectable: true,
    value: inputVal
  }), /*#__PURE__*/react.createElement(Popover, {
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
  }, /*#__PURE__*/react.createElement(Datepicker, _extends({
    from: from,
    to: to,
    onDayClick: handleDayClick,
    selectRange: selectRange
  }, datepickerProps)), /*#__PURE__*/react.createElement(BottomSection$1, null, /*#__PURE__*/react.createElement(TextButton, {
    content: cancelText,
    onClick: handleClosePopover,
    size: "sm"
  }), /*#__PURE__*/react.createElement(Button$1, {
    content: submitText,
    disabled: selectRange && (!from || !to) || !from,
    onClick: handleSubmit,
    size: "sm"
  }))));
};
FormDatepickerComponent.propTypes = {
  cancelText: PropTypes.string,
  disabled: PropTypes.bool,
  datepickerProps: PropTypes.shape({}),
  hasError: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  selectRange: PropTypes.bool,
  submitText: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string
  }), PropTypes.string])
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
  control: PropTypes.shape({}),
  defaultValue: PropTypes.shape({}),
  isRequired: PropTypes.bool,
  name: PropTypes.name
};
var FormDatepickerDefaultProps = {};

var _excluded$1a = ["control", "defaultValue", "isRequired", "name"];
var FormDatepicker = function FormDatepicker(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      isRequired = _ref.isRequired,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1a);

  return /*#__PURE__*/react.createElement(Controller, {
    as: /*#__PURE__*/react.createElement(FormDatepickerComponent, props),
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
  message: PropTypes.node.isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FormErrorDefaultProps = {};

var _excluded$19 = ["message"];
var Error$1 = styled.div.withConfig({
  displayName: "Error",
  componentId: "sc-fbul9h-0"
})(["font-weight:600;font-size:12px;line-height:120%;color:", ";margin-top:", ";", " ", ""], function (_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$19);

  return /*#__PURE__*/react.createElement(Error$1, props, message);
};
FormError.propTypes = FormErrorPropTypes;
FormError.defaultProps = FormErrorDefaultProps;

var FieldWrapperPropTypes = _extends({
  block: PropTypes.bool,
  endIcon: PropTypes.string,
  copyable: PropTypes.bool,
  valueToCopy: PropTypes.string,
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
  copyable: false,
  valueToCopy: "",
  endIconColor: "input",
  fixedHeight: true,
  startIcon: "",
  startIconColor: "input"
};

var _excluded$18 = ["children", "endIcon", "copyable", "valueToCopy", "endIconColor", "endIconOnClick", "endIconPrefix", "language", "startIcon", "startIconColor", "startIconOnClick", "startIconPrefix"];
var StyledWrapper = styled.div.withConfig({
  displayName: "FieldWrapper__StyledWrapper",
  componentId: "sc-tbw1oa-0"
})(["display:flex;align-items:center;justify-content:space-between;border-radius:", ";background-color:", ";border:1px solid ", ";padding:", ";outline:none;box-sizing:border-box;transition:all 100ms ease-in-out;", " &:focus-within{border:1px solid ", ";}h5{color:", ";}", " ", " ", " ", " ", ""], function (_ref) {
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
  return hasError && css(["border:1px solid ", ";"], function (_ref9) {
    var theme = _ref9.theme;
    return theme.palette.error.main;
  });
}, function (_ref10) {
  var disabled = _ref10.disabled;
  return disabled && css(["opacity:0.3;cursor:not-allowed;pointer-events:none;"]);
}, function (_ref11) {
  var block = _ref11.block;
  return block && css(["flex:1;"]);
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
      props = _objectWithoutPropertiesLoose(_ref12, _excluded$18);

  var _React$useState = react.useState(false),
      hasJustCopied = _React$useState[0],
      setHasJustCopied = _React$useState[1];

  react.useEffect(function () {
    if (hasJustCopied) {
      var timeout = setTimeout(function () {
        setHasJustCopied(false);
      }, 600);
      return function () {
        clearTimeout(timeout);
      };
    }
  }, [hasJustCopied]);
  return /*#__PURE__*/react.createElement(StyledWrapper, props, startIcon && /*#__PURE__*/react.createElement(Icon, {
    color: startIconColor,
    icon: startIcon,
    onClick: startIconOnClick,
    prefix: startIconPrefix
  }), language && !startIcon && /*#__PURE__*/react.createElement(H5, {
    content: language
  }), children, copyable ? !hasJustCopied ? /*#__PURE__*/react.createElement(Icon, {
    color: endIconColor,
    icon: "copy",
    onClick: function onClick() {
      setHasJustCopied(true);
      copy(valueToCopy);
    }
  }) : /*#__PURE__*/react.createElement(Icon, {
    icon: "check",
    color: endIconColor
  }) : endIcon ? /*#__PURE__*/react.createElement(Icon, {
    color: endIconColor,
    icon: endIcon,
    onClick: endIconOnClick,
    prefix: endIconPrefix
  }) : null);
};
FieldWrapper.propTypes = FieldWrapperPropTypes;
FieldWrapper.defaultProps = FieldWrapperDefaultProps;

var FieldBasePropTypes = _extends({}, FieldWrapperPropTypes, {
  disabled: PropTypes.bool,
  disableScrollOnNumber: PropTypes.bool,
  hasError: PropTypes.bool,
  hasWrapper: PropTypes.bool,
  readOnly: PropTypes.bool,
  register: PropTypes.func,
  type: PropTypes.string
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

var _excluded$17 = ["component"],
    _excluded2$1 = ["block", "className", "copyable", "valueToCopy", "disableScrollOnNumber", "endIcon", "endIconColor", "endIconOnClick", "endIconPrefix", "fixedHeight", "hasError", "hasWrapper", "register", "startIcon", "startIconColor", "startIconOnClick", "startIconPrefix", "language"];
var StyledInput$1 = styled(
/*#__PURE__*/
// eslint-disable-next-line react/prop-types
react.forwardRef(function (_ref, ref) {
  var Component = _ref.component,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$17);

  return /*#__PURE__*/react.createElement(Component, _extends({
    ref: ref
  }, props));
})).withConfig({
  displayName: "FieldBase__StyledInput",
  componentId: "sc-l785gg-0"
})(["flex:1;font-weight:600;font-size:16px;font-family:inherit;line-height:120%;padding:8px;color:", ";outline:none;border:none;height:100%;box-sizing:border-box;transition:all 100ms ease-in-out;background-color:transparent;::placeholder{font-weight:normal;}&:disabled{opacity:0.3;cursor:not-allowed;pointer-events:none;}", " ", " ", " ", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.text.primary;
}, function (_ref3) {
  var component = _ref3.component;
  return component === "input" && css(["text-overflow:ellipsis;overflow:hidden;white-space:nowrap;&:read-only{cursor:", ";}"], function (_ref4) {
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
      props = _objectWithoutPropertiesLoose(_ref10, _excluded2$1);

  var input = function input() {
    return /*#__PURE__*/react.createElement(StyledInput$1, _extends({
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
  return /*#__PURE__*/react.createElement(FieldWrapper, {
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

var StyledFieldset = styled.fieldset.withConfig({
  displayName: "Fieldset__StyledFieldset",
  componentId: "sc-1qv5ut9-0"
})(["border:none;padding:0%;margin:0;width:100%;flex:1;"]);
var Fieldset = function Fieldset(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react.createElement(StyledFieldset, null, children);
};
Fieldset.propTypes = {
  children: PropTypes.node.isRequired
};
Fieldset.defaultProps = {};

var _excluded$16 = ["disabled", "hasError", "onChange", "value"];
var Wrapper$8 = styled.div.withConfig({
  displayName: "Component__Wrapper",
  componentId: "sc-76gmmy-0"
})(["flex:1;width:100%;height:100%;"]);
var Container$a = styled.div.withConfig({
  displayName: "Component__Container",
  componentId: "sc-76gmmy-1"
})(["width:100%;height:100%;background-color:", ";border-color:", ";border-radius:16px;border-style:dashed;border-width:2px;cursor:pointer;min-height:125px;outline:none;transition:all 100ms ease-in-out;color:", ";margin-bottom:", ";overflow:hidden;&:hover{border-color:", ";}", " ", " ", " ", ""], function (_ref) {
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
var StyledFilePond = styled(FilePond$1).withConfig({
  displayName: "Component__StyledFilePond",
  componentId: "sc-76gmmy-2"
})(["&.filepond--root{font-weight:unset;font-family:unset;font-size:unset;overflow:hidden;}.filepond--drop-label{color:unset;}&&{.filepond--panel,.filepond--panel-root,.filepond--drip,.filepond--drop-label{background-color:transparent !important;}}"]);
var FilePondComponent = function FilePondComponent(_ref10) {
  var disabled = _ref10.disabled,
      hasError = _ref10.hasError,
      onChange = _ref10.onChange,
      value = _ref10.value,
      props = _objectWithoutPropertiesLoose(_ref10, _excluded$16);

  return /*#__PURE__*/react.createElement(Wrapper$8, null, /*#__PURE__*/react.createElement(Container$a, {
    disabled: disabled,
    hasError: hasError
  }, /*#__PURE__*/react.createElement(StyledFilePond, _extends({
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

var FileUploadPropTypes$1 = _extends({
  allowRemove: PropTypes.bool,
  allowRevert: PropTypes.bool,
  allowMultiple: PropTypes.bool,
  control: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.arrayOf(PropTypes.object),
  isRequired: PropTypes.string,
  name: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FileUploadDefaultProps$1 = {
  allowRemove: false,
  allowRevert: false,
  allowMultiple: true,
  defaultValue: undefined,
  name: "fileUpload"
};

var _excluded$15 = ["control", "defaultValue", "isRequired", "name"];
var FilePond = function FilePond(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      isRequired = _ref.isRequired,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$15);

  return /*#__PURE__*/react.createElement(Controller, {
    as: /*#__PURE__*/react.createElement(FilePondComponent, _extends({
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
FilePond.propTypes = FileUploadPropTypes$1;
FilePond.defaultProps = FileUploadDefaultProps$1;

var _excluded$14 = ["imgFile", "isOpen", "onClose", "onSubmit", "size"];
var EditorWrapper = styled.div.withConfig({
  displayName: "CropModal__EditorWrapper",
  componentId: "sc-1m4psoy-0"
})(["display:flex;flex-direction:column;align-items:center;"]);
var CropModal = function CropModal(_ref) {
  var imgFile = _ref.imgFile,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit,
      size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$14);

  var _useState = react.useState(1),
      scale = _useState[0],
      setScale = _useState[1];

  var editorRef = /*#__PURE__*/react.createRef();

  var handleSubmit = function handleSubmit() {
    var img = editorRef.current.getImageScaledToCanvas();
    img.toBlob(function (blob) {
      if (blob) {
        onSubmit(new File([blob], imgFile.name, blob));
        onClose();
      }
    });
  };

  return /*#__PURE__*/react.createElement(Modal, _extends({
    action: handleSubmit,
    actionTitle: "Save Changes",
    isOpen: isOpen,
    onClose: onClose,
    maxWidth: size,
    padding: true,
    title: "Crop Image"
  }, props), /*#__PURE__*/react.createElement(EditorWrapper, null, /*#__PURE__*/react.createElement(AvatarEditor, {
    ref: editorRef,
    image: imgFile,
    width: size === "lg" ? 1920 : 400,
    height: 400,
    border: 20,
    color: [0, 0, 0, 0.6] // RGBA
    ,
    scale: scale,
    rotate: 0
  })), /*#__PURE__*/react.createElement(FormRow, {
    errors: {},
    label: "Zoom",
    fields: []
  }, /*#__PURE__*/react.createElement("input", {
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
  imgFile: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  size: PropTypes.string
};
CropModal.defaultProps = {
  size: "md"
};

var Input = function Input(props) {
  return /*#__PURE__*/react.createElement(FieldBase, _extends({
    component: "input"
  }, props));
};
Input.propTypes = FieldBasePropTypes;
Input.defaultProps = FieldBaseDefaultProps;

/* eslint-disable no-restricted-properties */
var Item$3 = styled.div.withConfig({
  displayName: "PreviewItem__Item",
  componentId: "sc-gt2dk6-0"
})(["display:flex;align-items:center;justify-content:space-between;padding:", ";background-color:", ";color:", ";font-size:12px;margin-bottom:", ";border-radius:8px;.details{display:flex;align-items:center;justify-content:space-between;.react-thumbnail-generator{border-radius:8px;object-fit:cover;width:48px;height:48px;margin-right:", ";}}"], function (_ref) {
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
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(2);
});
var ActionIcon = styled(Icon).withConfig({
  displayName: "PreviewItem__ActionIcon",
  componentId: "sc-gt2dk6-1"
})(["color:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.common.white;
});
var PreviewWrapper = styled.div.withConfig({
  displayName: "PreviewItem__PreviewWrapper",
  componentId: "sc-gt2dk6-2"
})(["position:relative;width:48px;height:48px;border-radius:8px;background-color:", ";display:flex;align-items:center;justify-content:center;margin-right:", ";img{border-radius:8px;object-fit:cover;}&&{h4{text-transform:uppercase;}}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.gray.regular;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing(2);
});

function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}

var UploaderPreviewItem = function UploaderPreviewItem(_ref9) {
  var file = _ref9.file,
      fileNameEditable = _ref9.fileNameEditable,
      onRemoveClick = _ref9.onRemoveClick,
      onEdit = _ref9.onEdit;
  var name = file.altName || file.fileName || file.name;
  var fileExt = name.split(".").pop();

  var _useState = react.useState(false),
      editMode = _useState[0],
      setEditMode = _useState[1];

  var _useState2 = react.useState(name.split(".").shift()),
      altName = _useState2[0],
      setAltName = _useState2[1];

  var handleEdit = function handleEdit() {
    onEdit(file, altName + "." + fileExt);
    setEditMode(false);
  };

  react.useEffect(function () {
    if (editMode) {
      setAltName(name.split(".").shift());
    }
  }, [editMode]);
  return /*#__PURE__*/react.createElement(Item$3, {
    key: file.name
  }, /*#__PURE__*/react.createElement("div", {
    className: "details"
  }, file.type.startsWith("image") ? /*#__PURE__*/react.createElement(PreviewWrapper, null, file.preview ? /*#__PURE__*/react.createElement(Image, {
    alt: name,
    height: "100%",
    src: file.preview,
    width: "100%"
  }) : /*#__PURE__*/react.createElement(H4, {
    content: fileExt,
    color: "textSecondary",
    noWrap: true
  })) : null, file.type.startsWith("video") ? /*#__PURE__*/react.createElement(VideoThumbnail, {
    videoUrl: file.preview,
    width: 48,
    height: 48
  }) : null, /*#__PURE__*/react.createElement("div", null, editMode ? /*#__PURE__*/react.createElement("div", {
    className: "details"
  }, /*#__PURE__*/react.createElement(Input, {
    onChange: function onChange(e) {
      return setAltName(e.target.value);
    },
    mb: 2,
    value: altName
  }), /*#__PURE__*/react.createElement(ActionIcon, {
    disabled: !altName,
    icon: "check",
    onClick: handleEdit,
    mx: 2
  }), /*#__PURE__*/react.createElement(ActionIcon, {
    icon: "times",
    onClick: function onClick() {
      return setEditMode(false);
    }
  })) : /*#__PURE__*/react.createElement("b", null, name), (file == null ? void 0 : file.size) && /*#__PURE__*/react.createElement("div", null, bytesToSize(file.size)))), /*#__PURE__*/react.createElement("div", {
    className: "details"
  }, fileNameEditable && !editMode && /*#__PURE__*/react.createElement(ActionIcon, {
    icon: "pencil-alt",
    onClick: function onClick() {
      return setEditMode(true);
    },
    mr: 2
  }), onRemoveClick && /*#__PURE__*/react.createElement(ActionIcon, {
    icon: "trash",
    onClick: function onClick() {
      return onRemoveClick(file);
    }
  })));
};
UploaderPreviewItem.propTypes = {
  file: PropTypes.shape({
    altName: PropTypes.string,
    name: PropTypes.string,
    preview: PropTypes.string,
    size: PropTypes.string
  }).isRequired,
  fileNameEditable: PropTypes.bool.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

var _excluded$13 = ["files"];
var UploaderPreview = function UploaderPreview(_ref) {
  var files = _ref.files,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$13);

  return Array.from(files).map(function (file) {
    return /*#__PURE__*/react.createElement(UploaderPreviewItem, _extends({
      key: file.name,
      file: file
    }, props));
  });
};
UploaderPreview.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object)
};
UploaderPreview.defaultProps = {
  files: []
};

var _excluded$12 = ["crop", "cropProps", "disabled", "defaultValue", "fileNameEditable", "hasError", "multiple", "onChange", "value"];
var StyledContainer$3 = styled.div.withConfig({
  displayName: "Dropzone__StyledContainer",
  componentId: "sc-1yejosv-0"
})(["width:100%;height:100%;", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var DropzoneArea = styled.div.withConfig({
  displayName: "Dropzone__DropzoneArea",
  componentId: "sc-1yejosv-1"
})(["background-color:", ";border-color:", ";border-radius:16px;border-style:dashed;border-width:2px;cursor:pointer;min-height:125px;outline:none;transition:all 100ms ease-in-out;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:", ";margin-bottom:8px;padding-top:", ";padding-bottom:", ";span{color:", ";font-weight:bold;}p{margin:0;}p:not(:last-child){padding-top:", ";padding-bottom:", ";}&:hover{border-color:", ";}", " ", " ", " ", ""], function (_ref) {
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
  return theme.spacing(9);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(6);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.primary.main;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing(4);
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing(4);
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.palette.gray.medium;
}, function (_ref10) {
  var hasError = _ref10.hasError;
  return hasError && css(["border-color:", ";background-color:", ";"], function (_ref11) {
    var theme = _ref11.theme;
    return theme.palette.error.main;
  }, function (_ref12) {
    var theme = _ref12.theme;
    return theme.palette.error.light;
  });
}, function (_ref13) {
  var sizeError = _ref13.sizeError;
  return sizeError && css(["border-color:", ";background-color:", ";"], function (_ref14) {
    var theme = _ref14.theme;
    return theme.palette.error.main;
  }, function (_ref15) {
    var theme = _ref15.theme;
    return theme.palette.error.light;
  });
}, function (_ref16) {
  var disabled = _ref16.disabled;
  return disabled && css(["opacity:0.3;cursor:not-allowed;pointer-events:none;"]);
}, function (_ref17) {
  var dragActive = _ref17.dragActive,
      theme = _ref17.theme;
  return dragActive && css(["border-color:", ";"], theme.palette.gray.medium);
});
var StyledIcon$5 = styled(Icon).withConfig({
  displayName: "Dropzone__StyledIcon",
  componentId: "sc-1yejosv-2"
})(["color:", ";"], function (_ref18) {
  var theme = _ref18.theme;
  return theme.palette.gray.medium;
});
var Dropzone = function Dropzone(_ref19) {
  var crop = _ref19.crop,
      cropProps = _ref19.cropProps,
      disabled = _ref19.disabled;
      _ref19.defaultValue;
      var fileNameEditable = _ref19.fileNameEditable,
      hasError = _ref19.hasError,
      multiple = _ref19.multiple,
      onChange = _ref19.onChange,
      value = _ref19.value,
      props = _objectWithoutPropertiesLoose(_ref19, _excluded$12);

  var _useState = react.useState(),
      cropFile = _useState[0],
      setCropFile = _useState[1];

  var _useState2 = react.useState(false),
      sizeError = _useState2[0],
      setSizeError = _useState2[1];

  var setFiles = function setFiles(files) {
    var accepted = files.map(function (file) {
      return Object.assign(file, {
        preview: file.type.includes("image") || file.type.includes("video") ? URL.createObjectURL(file) : "",
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

  var _useDropzone = useDropzone(_extends({
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

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(StyledContainer$3, props, /*#__PURE__*/react.createElement(DropzoneArea, _extends({
    dragActive: isDragActive,
    dragAccept: isDragAccept,
    dragReject: isDragReject,
    disabled: disabled,
    hasError: hasError,
    sizeError: sizeError
  }, getRootProps()), /*#__PURE__*/react.createElement("input", getInputProps()), isDragAccept && /*#__PURE__*/react.createElement("p", null, "Accepted"), isDragReject && /*#__PURE__*/react.createElement("p", null, "Rejected"), /*#__PURE__*/react.createElement(StyledIcon$5, {
    icon: "file-arrow-up",
    prefix: "far",
    size: "lg"
  }), isDragActive ? /*#__PURE__*/react.createElement("p", null, "Drop your files here") : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("p", null, "Drop your files here", /*#__PURE__*/react.createElement("span", null, " or select from computer")), multiple ? /*#__PURE__*/react.createElement("p", null, "Add up to 20MB, supports multiple file formats") : /*#__PURE__*/react.createElement("p", null, "Single file only, supports multiple file formats"))), /*#__PURE__*/react.createElement(UploaderPreview, {
    files: value,
    fileNameEditable: fileNameEditable,
    onRemoveClick: removeFile,
    onEdit: editFile
  }), sizeError === true && /*#__PURE__*/react.createElement(FormError, {
    message: "Uploading size limit is " + parseFloat((props.maxSize / 1024 / 1024).toFixed(2)) + " MB, please attach smaller file"
  })), /*#__PURE__*/react.createElement(CropModal, _extends({
    isOpen: !!cropFile,
    onClose: function onClose() {
      return setCropFile();
    },
    imgFile: cropFile,
    onSubmit: handleCrop
  }, cropProps)));
};
Dropzone.propTypes = {
  accept: PropTypes.string,
  crop: PropTypes.bool,
  cropProps: PropTypes.shape({}),
  defaultValue: PropTypes.arrayOf(PropTypes.object),
  disabled: PropTypes.bool,
  fileNameEditable: PropTypes.bool,
  hasError: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.shape)
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

var _excluded$11 = ["control", "defaultValue", "isRequired", "name"];
var FileUpload = function FileUpload(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      isRequired = _ref.isRequired,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$11);

  return /*#__PURE__*/react.createElement(Controller, {
    as: /*#__PURE__*/react.createElement(Dropzone, props),
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

var _excluded$10 = ["children"];
var StyledForm = styled.form.withConfig({
  displayName: "Form__StyledForm",
  componentId: "sc-1aby0l8-0"
})(["border:none;outline:none;"]);
var Form = function Form(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$10);

  return /*#__PURE__*/react.createElement(StyledForm, props, children);
};
Form.propTypes = {
  children: PropTypes.node.isRequired
};
Form.defaultProps = {};

var StyledLabel$2 = styled.label.withConfig({
  displayName: "Label__StyledLabel",
  componentId: "sc-m2ki9p-0"
})(["font-size:14px;line-height:120%;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.medium;
});
var FormLabel = function FormLabel(props) {
  return /*#__PURE__*/react.createElement(StyledLabel$2, props);
};
FormLabel.propTypes = {};
FormLabel.defaultProps = {};

var _excluded$$ = ["options"];

var renderOptions = function renderOptions(options) {
  return options.map(function (opt) {
    return /*#__PURE__*/react.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  });
};

var Select = function Select(_ref) {
  var options = _ref.options,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$$);

  return /*#__PURE__*/react.createElement(FieldBase, _extends({
    component: "select"
  }, props), renderOptions(options));
};
Select.propTypes = FieldBasePropTypes;
Select.defaultProps = FieldBaseDefaultProps;

var PriceFieldPropTypes = _extends({
  currencies: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    sign: PropTypes.string
  })),
  inputProps: PropTypes.shape({}),
  selectProps: PropTypes.shape({})
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

var _excluded$_ = ["currencies", "defaultValue", "hasError", "hasWrapper", "inputProps", "name", "register", "selectProps"];
var StyledSelect = styled(Select).withConfig({
  displayName: "Price__StyledSelect",
  componentId: "sc-3ss78-0"
})(["&&{flex:0 0 30%;border-left:1px solid ", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.regular;
});
var PriceField = function PriceField(_ref2) {
  var currencies = _ref2.currencies,
      defaultValue = _ref2.defaultValue,
      hasError = _ref2.hasError;
      _ref2.hasWrapper;
      var inputProps = _ref2.inputProps,
      name = _ref2.name,
      register = _ref2.register,
      selectProps = _ref2.selectProps,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded$_);

  return /*#__PURE__*/react.createElement(FieldWrapper, _extends({
    hasError: hasError
  }, props), /*#__PURE__*/react.createElement(Input, _extends({
    defaultValue: defaultValue,
    hasError: hasError,
    hasWrapper: false,
    name: name,
    register: register,
    step: "0.01",
    type: "number"
  }, inputProps)), /*#__PURE__*/react.createElement(StyledSelect, _extends({
    hasWrapper: false,
    options: currencies,
    register: register
  }, selectProps)));
};
PriceField.propTypes = PriceFieldPropTypes;
PriceField.defaultProps = PriceFieldDefaultProps;

var StyledRadioBase = styled(RadioBase).withConfig({
  displayName: "Radio__StyledRadioBase",
  componentId: "sc-1bzwanc-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Radio = function Radio(props) {
  return /*#__PURE__*/react.createElement(StyledRadioBase, _extends({
    type: "radio"
  }, props));
};
Radio.propTypes = RadioBasePropTypes;
Radio.defaultProps = RadioBaseDefaultProps;

var _excluded$Z = ["renderValue", "renderValueText"];
var Thumb = function Thumb(_ref) {
  var renderValue = _ref.renderValue,
      renderValueText = _ref.renderValueText,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$Z);

  var currentVal = props["aria-valuenow"] || "0";
  return /*#__PURE__*/react.createElement("span", props, renderValue(currentVal) || /*#__PURE__*/react.createElement(Text, {
    content: renderValueText(currentVal) || String(currentVal),
    fontSize: "sm",
    fontWeight: "bold"
  }));
};
Thumb.propTypes = {
  renderValue: PropTypes.func,
  renderValueText: PropTypes.func
};
Thumb.defaultProps = {
  renderValue: function renderValue() {},
  renderValueText: function renderValueText() {}
};

var _excluded$Y = ["onChange", "value"];
var StyledSlider = styled(MuiSlider).withConfig({
  displayName: "Slider__StyledSlider",
  componentId: "sc-b53yre-0"
})([".MuiSlider-rail{background:", ";}.MuiSlider-thumb{background:", ";color:", ";padding:", ";width:auto;min-width:28px;height:28px;border:0.5px solid rgba(0,0,0,0.04);box-shadow:0px 3px 8px rgba(0,0,0,0.15),0px 1px 1px rgba(0,0,0,0.16),0px 3px 1px rgba(0,0,0,0.1);border-radius:20px;text-align:center;margin-top:-13px;}", " ", ""], function (_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref5, _excluded$Y);

  return /*#__PURE__*/react.createElement(StyledSlider, _extends({
    onChange: function onChange(_, val) {
      return _onChange(val);
    },
    ThumbComponent: Thumb,
    value: value || 0
  }, props));
};
Slider.propTypes = {
  renderValue: PropTypes.func,
  renderValueText: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number]).isRequired
};
Slider.defaultProps = {
  renderValue: function renderValue() {},
  renderValueText: function renderValueText() {}
};

var RangeSliderPropTypes = _extends({
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  isRequired: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var RangeSliderDefaultProps = {
  defaultValue: 0,
  isRequired: false
};

var _excluded$X = ["control", "defaultValue", "isRequired", "name"];
var RangeSlider = function RangeSlider(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      isRequired = _ref.isRequired,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$X);

  return /*#__PURE__*/react.createElement(Controller, {
    as: /*#__PURE__*/react.createElement(Slider, _extends({
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

var _excluded$W = ["children"];
var Option = function Option(props) {
  var isSelected = props.isSelected,
      label = props.label;
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(components.Option, props, /*#__PURE__*/react.createElement("input", {
    type: "checkbox",
    checked: isSelected,
    onChange: function onChange() {
      return null;
    }
  }), /*#__PURE__*/react.createElement("label", {
    htmlFor: label
  }, label)));
};
var allOption = {
  label: "Select all",
  value: "*"
};
var ValueContainer = function ValueContainer(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$W);

  var getValue = props.getValue;
  var currentValues = getValue();
  var toBeRendered = children;

  if (currentValues.some(function (val) {
    return val.value === allOption.value;
  })) {
    toBeRendered = [[children[0][0]], children[1]];
  }

  return /*#__PURE__*/react.createElement(components.ValueContainer, props, toBeRendered);
};
var MultiValue = function MultiValue(props) {
  var data = props.data;
  var labelToBeDisplayed = data.label;

  if (data.value === allOption.value) {
    labelToBeDisplayed = "All is selected";
  }

  return /*#__PURE__*/react.createElement(components.MultiValue, props, /*#__PURE__*/react.createElement("span", null, labelToBeDisplayed));
};
var animatedComponents = makeAnimated();

var CustomSelect = function CustomSelect(props) {
  var allOption = props.allOption,
      allowSelectAll = props.allowSelectAll,
      isGrouped = props.isGrouped,
      _onChange = props.onChange,
      rawOpts = props.options; // Handle grouped options

  var options = [];
  if (isGrouped) options = flatMap(rawOpts, function (opt) {
    return opt.options;
  });else options = rawOpts;

  if (allowSelectAll) {
    return /*#__PURE__*/react.createElement(ReactSelect$1, _extends({}, props, {
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

  return /*#__PURE__*/react.createElement(ReactSelect$1, props);
};
CustomSelect.propTypes = {
  allowSelectAll: PropTypes.bool,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  }),
  isGrouped: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
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

var _excluded$V = ["async", "cacheOptions", "control", "defaultOptions", "defaultValue", "endpoint", "endpointQueryFlag", "hasError", "loadOptions", "isRequired", "name", "options", "selectedOption"];
var ReactSelectWrapper = styled.div.withConfig({
  displayName: "ReactSelect__ReactSelectWrapper",
  componentId: "sc-xq5gfv-0"
})(["flex:1;.react-select__control{border-radius:12px;color:", ";padding:", ";height:40px;box-sizing:border-box;box-shadow:none;border-color:", ";font-weight:600;font-size:14px;line-height:120%;}.react-select__control--is-focused{border-color:", ";}.react-select__menu{border-radius:12px;}.react-select__option{font-weight:300;font-size:14px;line-height:160%;padding:", ";}.react-select__option--is-focused{background-color:", ";color:", ";}.react-select__option:hover,.react-select__option--is-selected{color:", ";background-color:", ";}", " ", " ", ""], function (_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref12, _excluded$V);

  var loadOptionsfromEndpoint = function loadOptionsfromEndpoint(inputValue, callback) {
    axios.get("" + endpoint + (endpointQueryFlag ? "?" + endpointQueryFlag + "=" + inputValue : "")).then(function (_ref13) {
      var data = _ref13.data;
      return callback(data.filter(function (item) {
        return item.label.toLowerCase().includes(inputValue);
      }));
    });
  };

  var Component = /*#__PURE__*/react.forwardRef(function (data, ref) {
    return async ? /*#__PURE__*/react.createElement(AsyncSelect, _extends({
      defaultOptions: defaultOptions,
      loadOptions: endpoint ? loadOptionsfromEndpoint : loadOptions,
      cacheOptions: cacheOptions,
      ref: ref
    }, data)) : /*#__PURE__*/react.createElement(CustomSelect, _extends({
      ref: ref
    }, data));
  });
  var As = /*#__PURE__*/react.createElement(Component, _extends({
    options: options,
    selectedOption: selectedOption,
    classNamePrefix: "react-select"
  }, props));
  return /*#__PURE__*/react.createElement(ReactSelectWrapper, _extends({
    hasError: hasError
  }, props), /*#__PURE__*/react.createElement(Controller, {
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
  labelAlign: PropTypes.oneOf(["start", "center"]),
  labelGutter: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  labelColor: PropTypes.oneOf(["dark", "light"]),
  direction: PropTypes.oneOf(["column", "row"])
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var FormRowDefaultProps = {
  label: "",
  labelAlign: "center",
  labelGutter: false,
  show: true,
  labelColor: "light",
  direction: "row"
};

var _excluded$U = ["children", "errors", "fields", "hint", "label", "labelAlign", "labelGutter", "show", "labelColor", "direction"];
var StyledRow = styled.div.withConfig({
  displayName: "Row__StyledRow",
  componentId: "sc-1ir0fqh-0"
})(["display:flex;min-height:40px;margin-bottom:", ";", ";", "{flex-wrap:wrap;}", " ", " ", " ", ""], function (_ref) {
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
  return labelAlign === "center" && css(["align-items:center;"]);
}, function (_ref5) {
  var direction = _ref5.direction;
  return direction === "column" && css(["flex-direction:column;align-items:start;"]);
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledLabel$1 = styled(FormLabel).withConfig({
  displayName: "Row__StyledLabel",
  componentId: "sc-1ir0fqh-1"
})(["flex:0 0 30%;", " ", " ", "{flex:100%;margin-bottom:", ";padding-top:0;}", ""], function (_ref6) {
  var direction = _ref6.direction;
  return direction === "column" && css(["margin-bottom:", ";"], function (_ref7) {
    var theme = _ref7.theme;
    return theme.spacing(3);
  });
}, function (_ref8) {
  var labelColor = _ref8.labelColor;
  return labelColor === "dark" && css(["color:", ";"], function (_ref9) {
    var theme = _ref9.theme;
    return theme.palette.gray.black;
  });
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.breakpoints.down("sm");
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing(2);
}, function (_ref12) {
  var labelAlign = _ref12.labelAlign,
      labelGutter = _ref12.labelGutter,
      theme = _ref12.theme;
  return labelAlign === "start" && labelGutter && css(["padding-top:", ";"], theme.spacing(3));
});
var FieldsAndErrorsWrapper = styled.div.withConfig({
  displayName: "Row__FieldsAndErrorsWrapper",
  componentId: "sc-1ir0fqh-2"
})(["flex:1;", ""], function (_ref13) {
  var direction = _ref13.direction;
  return direction === "column" && css(["width:100%;"]);
});
var Fields = styled.div.withConfig({
  displayName: "Row__Fields",
  componentId: "sc-1ir0fqh-3"
})(["display:flex;align-items:center;width:100%;& > *{:not(:last-child){margin-right:", ";}}"], function (_ref14) {
  var theme = _ref14.theme;
  return theme.spacing(4);
});
var Hint = styled.span.withConfig({
  displayName: "Row__Hint",
  componentId: "sc-1ir0fqh-4"
})(["background:#f0f0f4;border-radius:100%;width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;margin-left:8px;vertical-align:middle;svg{color:#8685a6;font-size:10px;}"]);
var FormRow = function FormRow(_ref15) {
  var children = _ref15.children,
      errors = _ref15.errors,
      fields = _ref15.fields,
      hint = _ref15.hint,
      label = _ref15.label,
      labelAlign = _ref15.labelAlign,
      labelGutter = _ref15.labelGutter,
      show = _ref15.show,
      labelColor = _ref15.labelColor,
      direction = _ref15.direction,
      props = _objectWithoutPropertiesLoose(_ref15, _excluded$U);

  var rowErrors = Array.isArray(errors) ? errors : getFormRowErrors(errors, fields);
  var validChildren = react.Children.toArray(children).filter(Boolean);
  return /*#__PURE__*/react.createElement(StyledRow, _extends({
    labelAlign: labelAlign,
    show: show,
    direction: direction
  }, props), label && /*#__PURE__*/react.createElement(StyledLabel$1, {
    labelAlign: labelAlign,
    labelGutter: labelGutter,
    direction: direction,
    labelColor: labelColor
  }, label, hint && /*#__PURE__*/react.createElement(Tooltip, {
    content: hint
  }, /*#__PURE__*/react.createElement(Hint, null, /*#__PURE__*/react.createElement(Icon, {
    icon: "question"
  })), " ")), validChildren.length > 0 && /*#__PURE__*/react.createElement(FieldsAndErrorsWrapper, {
    direction: direction,
    fullWidth: !label
  }, /*#__PURE__*/react.createElement(Fields, null, children), rowErrors.map(function (err) {
    return /*#__PURE__*/react.createElement(FormError, {
      key: err,
      message: err
    });
  })));
};
FormRow.propTypes = FormRowPropTypes;
FormRow.defaultProps = FormRowDefaultProps;

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

var _excluded$T = ["label", "value", "onChange", "min", "max", "size"];
var Wrapper$7 = styled.div.withConfig({
  displayName: "Component__Wrapper",
  componentId: "sc-1apjhkv-0"
})(["display:flex;justify-content:center;align-items:center;", " user-select:none;input{border:none;width:40px;outline:none;font-weight:600;font-size:16px;text-align:center;}span{font-size:12px;font-style:italic;}"], function (_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref2, _excluded$T);

  var handleChange = function handleChange(type) {
    var newVal = type === "sub" ? value - 1 : value + 1;
    if (newVal < min || newVal > max) return;
    onChange(newVal);
  };

  return /*#__PURE__*/react.createElement(FieldWrapper, _extends({
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
  }, props), /*#__PURE__*/react.createElement(Wrapper$7, {
    size: size
  }, /*#__PURE__*/react.createElement("input", {
    onChange: onChange,
    value: value
  }), /*#__PURE__*/react.createElement("span", null, label)));
};
StepperComponent.propTypes = StepperPropTypes;
StepperComponent.defaultProps = StepperDefaultProps;

var _excluded$S = ["control", "defaultValue", "isRequired", "name"];
var Stepper = function Stepper(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      isRequired = _ref.isRequired,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$S);

  return /*#__PURE__*/react.createElement(Controller, {
    render: function render(events) {
      return /*#__PURE__*/react.createElement(StepperComponent, _extends({
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
  return /*#__PURE__*/react.createElement(FieldBase, _extends({}, props, {
    component: "textarea",
    fixedHeight: false
  }));
};
TextArea.propTypes = TextAreaPropTypes;
TextArea.defaultProps = TextAreaDefaultProps;

var _excluded$R = ["disabled", "handleToggle", "size", "toggled"];

var Switch = function Switch(_ref) {
  var disabled = _ref.disabled,
      handleToggle = _ref.handleToggle,
      size = _ref.size,
      toggled = _ref.toggled,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$R);

  return /*#__PURE__*/react.createElement(StyledSwitchContainer$1, _extends({
    disabled: disabled,
    onClick: handleToggle,
    size: size,
    toggled: toggled
  }, props), /*#__PURE__*/react.createElement(StyledSwitch$1, {
    size: size,
    toggled: toggled
  }, toggled ? "Yes" : "No"));
};

var StyledSwitchContainer$1 = styled.div.withConfig({
  displayName: "Switch__StyledSwitchContainer",
  componentId: "sc-44pphp-0"
})(["align-items:center;background-color:", ";cursor:pointer;display:flex;justify-content:space-between;position:relative;transition:background-color 0.2s;", " ", " ", " ", " ", ""], function (_ref2) {
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
var StyledSwitch$1 = styled.span.withConfig({
  displayName: "Switch__StyledSwitch",
  componentId: "sc-44pphp-1"
})(["background:#fff;box-shadow:0 0 2px 0 rgba(10,10,10,0.29);left:2px;position:absolute;top:2px;transition:left 0.2s,transform 0.2s;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:10px;color:", ";text-transform:uppercase;user-select:none;", ";", " ", " ", ""], function (_ref9) {
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

var _excluded$Q = ["disabled", "onChange", "size", "value"];
var StyledToggle$1 = styled.div.withConfig({
  displayName: "Toggle__StyledToggle",
  componentId: "sc-68gvde-0"
})(["display:inline-block;position:relative;", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Toggle = function Toggle(_ref) {
  var disabled = _ref.disabled,
      onChange = _ref.onChange,
      size = _ref.size,
      value = _ref.value,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$Q);

  var handleToggle = function handleToggle() {
    onChange(!value);
  };

  return /*#__PURE__*/react.createElement(StyledToggle$1, null, /*#__PURE__*/react.createElement(Switch, _extends({
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

var _excluded$P = ["control", "defaultValue", "isRequired", "name"];
var ToggleSwitch = function ToggleSwitch(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      isRequired = _ref.isRequired,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$P);

  return /*#__PURE__*/react.createElement(Controller, {
    render: function render(events) {
      return /*#__PURE__*/react.createElement(Toggle, _extends({
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

var _excluded$O = ["hasError", "iconProps", "name", "register", "options", "price", "icon", "value", "title", "description"];
var StyledInput = styled.input.withConfig({
  displayName: "BaseItem__StyledInput",
  componentId: "sc-1uvtn0l-0"
})(["display:none;&:focus + label{border:2px solid ", ";}+ label{display:inline-flex;align-items:center;width:100%;height:100%;margin:0 32px 0 0;padding:", ";border:2px solid ", ";border-radius:12px;font-weight:600;font-size:14px;line-height:120%;cursor:pointer;transition:all 0.1s ease-in-out;a{text-decoration:none;color:", ";}&::before{content:\"\";display:inline-block;width:24px;min-width:24px;height:24px;border-radius:", ";background-color:", ";border:1px solid ", ";margin-right:8px;transition:background-color 0.1s ease-in-out;", "}}&:focus + label::before,&:checked + label::before{background-color:", ";border-color:", ";border-width:7px;background-size:16px 16px;background-repeat:no-repeat;background-position:center;}&:disabled + label{opacity:0.3;&,span{cursor:default;}}&:checked + label{border-color:", ";border-radius:12px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.regular;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(4);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.gray.semiLight;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.primary.main;
}, function (_ref5) {
  var type = _ref5.type;
  return type === "radio" ? "50%" : "8px";
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.common.white;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.gray.regular;
}, function (_ref8) {
  var hasError = _ref8.hasError;
  return hasError && css(["border-color:", ";"], function (_ref9) {
    var theme = _ref9.theme;
    return theme.palette.error.main;
  });
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.palette.gray.white;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.palette.primary.main;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.palette.primary.main;
});
var StyledLabel = styled.label.withConfig({
  displayName: "BaseItem__StyledLabel",
  componentId: "sc-1uvtn0l-1"
})([".title{margin-bottom:", ";}.flex-center{display:flex;align-items:center;margin-left:", ";}.flex-column{display:flex;flex-direction:column;margin-left:", ";}.text-light{font-weight:400;}"], function (_ref13) {
  var theme = _ref13.theme;
  return theme.spacing(1);
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.spacing(4);
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.spacing(3);
});
var RadioEnhancedBaseItem = function RadioEnhancedBaseItem(_ref16) {
  var hasError = _ref16.hasError,
      iconProps = _ref16.iconProps,
      name = _ref16.name,
      register = _ref16.register;
      _ref16.options;
      var price = _ref16.price,
      icon = _ref16.icon,
      value = _ref16.value,
      title = _ref16.title,
      description = _ref16.description,
      props = _objectWithoutPropertiesLoose(_ref16, _excluded$O);

  var id = name + "-" + value;
  return /*#__PURE__*/react.createElement("div", {
    className: "radio-wrapper"
  }, /*#__PURE__*/react.createElement(StyledInput, _extends({
    hasError: hasError,
    id: id,
    name: name,
    ref: register,
    value: value,
    defaultValue: value
  }, props)), /*#__PURE__*/react.createElement(StyledLabel, {
    htmlFor: id
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex-center"
  }, /*#__PURE__*/react.createElement(Icon, _extends({
    color: "secondary",
    mr: 2
  }, iconProps, {
    icon: icon
  })), /*#__PURE__*/react.createElement("div", {
    className: "flex-column"
  }, /*#__PURE__*/react.createElement("span", {
    className: "title"
  }, title), /*#__PURE__*/react.createElement("span", {
    className: "text-light"
  }, description), /*#__PURE__*/react.createElement("span", null, price)))));
};
RadioEnhancedBaseItem.propTypes = _extends({
  hasError: PropTypes.bool,
  icon: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  value: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
RadioEnhancedBaseItem.defaultProps = {
  hasError: false,
  icon: "check-circle",
  name: "radioEnhanced",
  register: null,
  title: "Radio Enhanced",
  price: "Free",
  description: "Radio Enhanced Description"
};

var RadioEnhancedPropTypes = _extends({
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    icon: PropTypes.string
  })).isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var RadioEnhancedDefaultProps = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: "value",
    title: "Title",
    description: "Description",
    price: "Free",
    icon: "tv"
  }))
};

var _excluded$N = ["options"];

var RadioEnhancedBase = function RadioEnhancedBase(_ref) {
  var options = _ref.options,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$N);

  return /*#__PURE__*/react.createElement(Fieldset, null, options.map(function (opt) {
    return /*#__PURE__*/react.createElement(RadioEnhancedBaseItem, _extends({
      key: opt.value
    }, opt, props));
  }));
};

RadioEnhancedBase.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    icon: PropTypes.string
  })).isRequired
};
var StyledRadioEnhancedBase = styled(RadioEnhancedBase).withConfig({
  displayName: "RadioEnhanced__StyledRadioEnhancedBase",
  componentId: "sc-8u2fvq-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var RadioEnhanced = function RadioEnhanced(props) {
  return /*#__PURE__*/react.createElement(StyledRadioEnhancedBase, _extends({
    type: "radio"
  }, props));
};
RadioEnhanced.propTypes = RadioEnhancedPropTypes;
RadioEnhanced.defaultProps = RadioEnhancedDefaultProps;

var _excluded$M = ["disabled", "handleToggle", "toggled", "leftValue", "leftValueWidth", "leftValueSideMargin", "rightValue", "rightValueWidth", "rightValueSideMargin", "totalWidth"];

var TabsSwitch$1 = function TabsSwitch(_ref) {
  var disabled = _ref.disabled,
      handleToggle = _ref.handleToggle,
      toggled = _ref.toggled,
      leftValue = _ref.leftValue,
      leftValueWidth = _ref.leftValueWidth,
      leftValueSideMargin = _ref.leftValueSideMargin,
      rightValue = _ref.rightValue,
      rightValueWidth = _ref.rightValueWidth,
      rightValueSideMargin = _ref.rightValueSideMargin,
      totalWidth = _ref.totalWidth,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$M);

  return /*#__PURE__*/react.createElement(StyledSwitchContainer, _extends({
    disabled: disabled,
    onClick: handleToggle,
    toggled: toggled,
    leftValueWidth: leftValueWidth,
    rightValueWidth: rightValueWidth,
    leftValueSideMargin: leftValueSideMargin,
    rightValueSideMargin: rightValueSideMargin,
    totalWidth: totalWidth
  }, props), /*#__PURE__*/react.createElement("div", {
    className: "labels"
  }, /*#__PURE__*/react.createElement("span", null, leftValue), /*#__PURE__*/react.createElement("span", null, rightValue)), /*#__PURE__*/react.createElement(StyledSwitch, {
    leftValueWidth: leftValueWidth,
    rightValueWidth: rightValueWidth,
    toggled: toggled
  }));
};

var StyledSwitchContainer = styled.div.withConfig({
  displayName: "Switch__StyledSwitchContainer",
  componentId: "sc-10cvkyv-0"
})(["align-items:center;background-color:", ";border-radius:20px;border:2px solid ", ";cursor:pointer;display:flex;justify-content:space-between;position:relative;transition:background-color 0.2s;height:40px;width:", ";.labels{position:relative;z-index:1;display:flex;justify-content:space-between;width:100%;span{font-weight:bold;transition:color 0.3s ease-out;}span:first-child{width:", ";color:", ";margin-left:", ";}span:last-child{width:", ";color:", ";margin-right:", ";}}", " ", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.gray.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.gray.regular;
}, function (_ref4) {
  var totalWidth = _ref4.totalWidth;
  return totalWidth && totalWidth + "px";
}, function (_ref5) {
  var leftValueWidth = _ref5.leftValueWidth;
  return leftValueWidth && leftValueWidth + "px";
}, function (_ref6) {
  var theme = _ref6.theme,
      toggled = _ref6.toggled;
  return toggled ? theme.palette.gray.black : theme.palette.gray.white;
}, function (_ref7) {
  var leftValueSideMargin = _ref7.leftValueSideMargin;
  return leftValueSideMargin && leftValueSideMargin + "px";
}, function (_ref8) {
  var rightValueWidth = _ref8.rightValueWidth;
  return rightValueWidth && rightValueWidth + "px";
}, function (_ref9) {
  var theme = _ref9.theme,
      toggled = _ref9.toggled;
  return toggled ? theme.palette.gray.white : theme.palette.gray.black;
}, function (_ref10) {
  var rightValueSideMargin = _ref10.rightValueSideMargin;
  return rightValueSideMargin && rightValueSideMargin + "px";
}, function (_ref11) {
  var disabled = _ref11.disabled;
  return disabled && css(["opacity:0.3;cursor:not-allowed;pointer-events:none;"]);
}, function (_ref12) {
  var hasError = _ref12.hasError;
  return hasError && css(["border:1px solid ", ";"], function (_ref13) {
    var theme = _ref13.theme;
    return theme.palette.error.main;
  });
});
var StyledSwitch = styled.span.withConfig({
  displayName: "Switch__StyledSwitch",
  componentId: "sc-10cvkyv-1"
})(["background:", ";box-shadow:0 0 2px 0 rgba(10,10,10,0.29);left:2px;position:absolute;top:2px;transition:left 0.2s,transform 0.2s;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:10px;color:", ";text-transform:uppercase;user-select:none;border-radius:20px;height:90%;width:", ";", ";"], function (_ref14) {
  var theme = _ref14.theme;
  return theme.palette.gray.black;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.palette.gray.medium;
}, function (_ref16) {
  var leftValueWidth = _ref16.leftValueWidth;
  return leftValueWidth + 16 + "px";
}, function (_ref17) {
  var theme = _ref17.theme,
      toggled = _ref17.toggled,
      rightValueWidth = _ref17.rightValueWidth;
  return toggled && css(["left:calc(100% - 2px);transform:translateX(-100%);color:", ";width:", "px;"], theme.palette.primary.main, rightValueWidth + 16);
});
TabsSwitch$1.propTypes = {
  disabled: bool,
  handleToggle: func,
  leftValue: number.isRequired,
  leftValueWidth: number.isRequired,
  leftValueSideMargin: number.isRequired,
  rightValue: number.isRequired,
  rightValueWidth: number.isRequired,
  rightValueSideMargin: number.isRequired,
  totalWidth: number.isRequired,
  toggled: bool
};
TabsSwitch$1.defaultProps = {
  disabled: false,
  handleToggle: null,
  toggled: false
};

var _excluded$L = ["disabled", "onChange", "value"];
var StyledToggle = styled.div.withConfig({
  displayName: "TabsToggle__StyledToggle",
  componentId: "sc-1m9nhul-0"
})(["display:inline-block;position:relative;", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var TabsToggle = function TabsToggle(_ref) {
  var disabled = _ref.disabled,
      onChange = _ref.onChange,
      value = _ref.value,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$L);

  var handleToggle = function handleToggle() {
    onChange(!value);
  };

  return /*#__PURE__*/react.createElement(StyledToggle, null, /*#__PURE__*/react.createElement(TabsSwitch$1, _extends({
    disabled: disabled,
    handleToggle: !disabled ? handleToggle : undefined,
    toggled: value
  }, props)));
};
TabsToggle.propTypes = {
  disabled: bool,
  onChange: func,
  value: bool
};
TabsToggle.defaultProps = {
  disabled: false,
  onChange: null,
  value: false
};

var TabsSwitchPropTypes = _extends({
  control: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.bool,
  isRequired: PropTypes.string,
  name: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var TabsSwitchDefaultProps = {
  defaultValue: undefined,
  isRequired: "",
  name: "toggleSwitch"
};

var _excluded$K = ["control", "defaultValue", "isRequired", "name"];
var TabsSwitch = function TabsSwitch(_ref) {
  var control = _ref.control,
      defaultValue = _ref.defaultValue,
      isRequired = _ref.isRequired,
      name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$K);

  return /*#__PURE__*/react.createElement(Controller, {
    render: function render(events) {
      return /*#__PURE__*/react.createElement(TabsToggle, _extends({
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
TabsSwitch.propTypes = TabsSwitchPropTypes;
TabsSwitch.defaultProps = TabsSwitchDefaultProps;

var HideOnScrollPropTypes = {
  children: PropTypes.element.isRequired,
  threshold: PropTypes.number
};
var HideOnScrollDefaultProps = {
  threshold: 100
};

var HideOnScroll = function HideOnScroll(_ref) {
  var children = _ref.children,
      threshold = _ref.threshold;
  var trigger = useScrollTrigger({
    threshold: threshold
  });
  return /*#__PURE__*/react.createElement(Slide, {
    appear: false,
    direction: "down",
    in: !trigger
  }, children);
};
HideOnScroll.propTypes = HideOnScrollPropTypes;
HideOnScroll.defaultProps = HideOnScrollDefaultProps;

var StyledHidden = styled(MuiHidden).withConfig({
  displayName: "Hidden__StyledHidden",
  componentId: "sc-11wrtkb-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Hidden = function Hidden(props) {
  return /*#__PURE__*/react.createElement(StyledHidden, props);
};

var ItemConnector = styled.div.withConfig({
  displayName: "Item__ItemConnector",
  componentId: "sc-1awk8nq-0"
})(["border-width:0;border-style:solid;border-color:", ";border-left-width:1px;transition:all 0.1ms ease-in-out;position:absolute;bottom:0;left:15px;top:0;::before{content:\"\";width:1px;height:100%;display:inline-block;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.regular;
});
var Container$9 = styled.div.withConfig({
  displayName: "Item__Container",
  componentId: "sc-1awk8nq-1"
})(["position:relative;min-height:40px;padding-bottom:", ";:last-child{", "{border-left-width:0;}}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(4);
}, ItemConnector);
var RowWrapper$1 = styled.div.withConfig({
  displayName: "Item__RowWrapper",
  componentId: "sc-1awk8nq-2"
})(["display:flex;align-items:center;", "{align-items:flex-start;}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.breakpoints.down("md");
});
var RowDetails = styled(Grid).attrs(function () {
  return {
    container: true
  };
}).withConfig({
  displayName: "Item__RowDetails",
  componentId: "sc-1awk8nq-3"
})(["width:100%;height:100%;"]);
var Item$2 = styled(Grid).attrs(function (_ref4) {
  var lg = _ref4.lg;
  return {
    item: true,
    xs: 12,
    lg: lg || 3
  };
}).withConfig({
  displayName: "Item",
  componentId: "sc-1awk8nq-4"
})(["display:flex;align-items:center;", "{margin-bottom:", ";}", ""], function (_ref5) {
  var theme = _ref5.theme;
  return theme.breakpoints.down("sm");
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(1);
}, function (_ref7) {
  var align = _ref7.align,
      theme = _ref7.theme;
  return align && css(["", "{justify-content:", ";}"], theme.breakpoints.up("sm"), align);
});
var StyledIcon$4 = styled(Icon).withConfig({
  displayName: "Item__StyledIcon",
  componentId: "sc-1awk8nq-5"
})(["margin-right:", ";flex-shrink:0;"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing(2);
});
var StyledCollapseButton$1 = styled(CollapseButton).withConfig({
  displayName: "Item__StyledCollapseButton",
  componentId: "sc-1awk8nq-6"
})(["margin-left:", ";color:", ";", "{position:absolute;top:0;right:0;}"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing(4);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.palette.text.primary;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.breakpoints.down("sm");
});
var Content$9 = styled.div.withConfig({
  displayName: "Item__Content",
  componentId: "sc-1awk8nq-7"
})(["padding:", ";", "{padding:", ";}"], function (_ref12) {
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

  var _useState = react.useState(false),
      collapseOpen = _useState[0],
      setCollapseOpen = _useState[1];

  return /*#__PURE__*/react.createElement(Container$9, {
    "data-cy": "historyItem"
  }, /*#__PURE__*/react.createElement(ItemConnector, null), /*#__PURE__*/react.createElement(RowWrapper$1, null, /*#__PURE__*/react.createElement(StyledIcon$4, {
    rounded: true,
    color: iconColor,
    icon: icon
  }), /*#__PURE__*/react.createElement(RowDetails, null, /*#__PURE__*/react.createElement(Item$2, {
    lg: 5
  }, /*#__PURE__*/react.createElement(Text, {
    fontWeight: "bold"
  }, title)), /*#__PURE__*/react.createElement(Item$2, {
    lg: 4
  }, /*#__PURE__*/react.createElement(Text, {
    color: "textSecondary",
    noWrap: true
  }, description)), /*#__PURE__*/react.createElement(Item$2, {
    align: "flex-end"
  }, /*#__PURE__*/react.createElement(Text, {
    color: "textSecondary",
    fontStyle: "italic"
  }, moreInfo), collapsible && /*#__PURE__*/react.createElement(StyledCollapseButton$1, {
    isOpened: collapseOpen,
    onClick: function onClick() {
      return setCollapseOpen(function (prev) {
        return !prev;
      });
    }
  })))), collapsible && /*#__PURE__*/react.createElement(Collapse, {
    isOpened: collapseOpen
  }, /*#__PURE__*/react.createElement(Content$9, null, collapseContent)));
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

var _excluded$J = ["rows"];
var Container$8 = styled.div.withConfig({
  displayName: "History__Container",
  componentId: "sc-1u2gi2m-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var History = function History(_ref) {
  var rows = _ref.rows,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$J);

  return /*#__PURE__*/react.createElement(Container$8, props, rows.map(function (h) {
    return /*#__PURE__*/react.createElement(HistoryItem, {
      key: h.id,
      data: h
    });
  }));
};
History.propTypes = HistoryPropTypes;

var HistoryTreePropTypes = _extends({
  activeNodeId: PropTypes.number,
  data: PropTypes.array.isRequired,
  onNodeClick: PropTypes.func
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var HistoryTreeDefaultProps = {
  activeNodeId: null,
  onNodeClick: function onNodeClick() {}
};

var _excluded$I = ["activeNodeId", "data", "onNodeClick"];
var NODE_SIZE = 20;
var NODE_CONNECTOR_HEIGHT = 28;
var ROW_HEIGHT = NODE_SIZE + 2 * NODE_CONNECTOR_HEIGHT;
var Wrapper$6 = styled.div.withConfig({
  displayName: "HistoryTree__Wrapper",
  componentId: "sc-1go3l90-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Label$1 = styled.div.withConfig({
  displayName: "HistoryTree__Label",
  componentId: "sc-1go3l90-1"
})(["position:absolute;bottom:", "px;left:-50%;opacity:0;text-align:center;transition:all 0.2s ease-in-out;"], NODE_SIZE + 8);
var Node = styled.div.withConfig({
  displayName: "HistoryTree__Node",
  componentId: "sc-1go3l90-2"
})(["position:relative;background-color:", ";width:", "px;height:", "px;border-radius:12px;margin-right:", ";::after{content:none;width:", "px;height:", "px;position:absolute;left:", "px;top:", "px;border-left:2px dashed #cecdd9;border-bottom:2px dashed #cecdd9;border-bottom-left-radius:48px;}"], function (_ref) {
  var active = _ref.active,
      theme = _ref.theme;
  return active ? theme.palette.primary.main : theme.palette.gray.regular;
}, NODE_SIZE, NODE_SIZE, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(10);
}, NODE_SIZE * 2 + 2, NODE_CONNECTOR_HEIGHT, NODE_SIZE / 2 - 1, NODE_SIZE);
var NodeWrapper = styled.div.withConfig({
  displayName: "HistoryTree__NodeWrapper",
  componentId: "sc-1go3l90-3"
})(["position:relative;width:100%;height:100%;::before,::after{content:\"\";height:", "px;width:", "px;position:absolute;left:", "px;border-left:2px dashed ", ";}::before{top:-", "px;}::after{content:\"\";top:", "px;}:last-child{::before{width:", "px;border-right:2px dashed ", ";border-top:2px dashed ", ";border-left:none;top:-", "px;left:-", "px;border-top-right-radius:48px;}}:first-child{", "{::after{content:\"\";}}}:hover{cursor:pointer;transition:all 0.2s ease-in-out;", "{background-color:", ";}", "{opacity:1;}}"], NODE_CONNECTOR_HEIGHT, NODE_CONNECTOR_HEIGHT, NODE_SIZE / 2 - 1, function (_ref3) {
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
var Row$1 = styled.div.withConfig({
  displayName: "HistoryTree__Row",
  componentId: "sc-1go3l90-4"
})(["display:flex;align-items:center;height:", "px;:last-child{", ",", "{::after{content:none;}}}"], ROW_HEIGHT, NodeWrapper, Node);
var Nodes = styled.div.withConfig({
  displayName: "HistoryTree__Nodes",
  componentId: "sc-1go3l90-5"
})(["display:flex;align-items:center;"]);
var Description$1 = styled.div.withConfig({
  displayName: "HistoryTree__Description",
  componentId: "sc-1go3l90-6"
})(["max-width:80px;width:80px;"]);
var HistoryTree = function HistoryTree(_ref7) {
  var activeNodeId = _ref7.activeNodeId,
      data = _ref7.data,
      onNodeClick = _ref7.onNodeClick,
      props = _objectWithoutPropertiesLoose(_ref7, _excluded$I);

  return /*#__PURE__*/react.createElement(Wrapper$6, props, data.map(function (row) {
    var _row$nodes;

    return /*#__PURE__*/react.createElement(Row$1, {
      key: row.key
    }, /*#__PURE__*/react.createElement(Description$1, null, /*#__PURE__*/react.createElement(Text, {
      content: row.description,
      color: "textSecondary",
      fontSize: "sm",
      noWrap: true,
      pr: 1
    })), /*#__PURE__*/react.createElement(Nodes, null, (_row$nodes = row.nodes) == null ? void 0 : _row$nodes.map(function (node) {
      var isActive = activeNodeId === node.id;
      return /*#__PURE__*/react.createElement(NodeWrapper, {
        key: node.id,
        onClick: function onClick(e) {
          return onNodeClick(e, node);
        }
      }, /*#__PURE__*/react.createElement(Label$1, null, /*#__PURE__*/react.createElement(Text, {
        content: node.label,
        color: "textSecondary",
        fontSize: "sm",
        fontWeight: "bold"
      })), /*#__PURE__*/react.createElement(Node, {
        active: isActive
      }));
    })));
  }));
};
HistoryTree.propTypes = HistoryTreePropTypes;
HistoryTree.defaultProps = HistoryTreeDefaultProps;

var IndicatorPropTypes = _extends({
  color: PropTypes.string,
  content: PropTypes.node,
  children: PropTypes.node
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var IndicatorDefaultProps = {
  color: "primary"
};

var _excluded$H = ["content", "children"];
var StyledIndicator = styled.div.withConfig({
  displayName: "Indicator__StyledIndicator",
  componentId: "sc-n41y77-0"
})(["&&{background-color:", ";color:", ";border-radius:100%;min-height:20px;min-width:20px;display:inline-flex;align-items:center;justify-content:center;", " ", "}"], function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return theme.palette[color].main;
}, function (_ref2) {
  _ref2.color;
      var theme = _ref2.theme;
  return theme.palette.common.white;
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Indicator = function Indicator(_ref3) {
  var content = _ref3.content,
      children = _ref3.children,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$H);

  return /*#__PURE__*/react.createElement(StyledIndicator, props, content || children);
};
Indicator.propTypes = IndicatorPropTypes;
Indicator.defaultProps = IndicatorDefaultProps;

var _excluded$G = ["rows"];
var Container$7 = styled.div.withConfig({
  displayName: "Inspector__Container",
  componentId: "sc-zw3vqo-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Inspector = function Inspector(_ref) {
  var rows = _ref.rows,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$G);

  return /*#__PURE__*/react.createElement(Container$7, props, rows.map(function (row) {
    return /*#__PURE__*/react.createElement(InspectorItem, {
      key: row.id,
      data: row
    });
  }));
};
Inspector.propTypes = InspectorPropTypes;

var Container$6 = styled.div.withConfig({
  displayName: "Item__Container",
  componentId: "sc-1mr01kl-0"
})(["position:relative;min-height:41px;padding:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(1, 0);
});
var RowWrapper = styled.div.withConfig({
  displayName: "Item__RowWrapper",
  componentId: "sc-1mr01kl-1"
})(["display:flex;align-items:center;", "{align-items:flex-start;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.down("md");
});
var StyledStatus = styled.div.withConfig({
  displayName: "Item__StyledStatus",
  componentId: "sc-1mr01kl-2"
})(["width:90px;height:33px;display:flex;align-items:center;justify-content:center;background-color:", ";border-radius:8px 0px 0px 8px;div{text-transform:capitalize !important;}", "{width:65px;}"], function (_ref3) {
  var color = _ref3.color;
  return color.backgroundColor;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakpoints.down("sm");
});
var StyledMessage = styled.div.withConfig({
  displayName: "Item__StyledMessage",
  componentId: "sc-1mr01kl-3"
})(["height:33px;flex:1;display:flex;align-items:center;margin:", ";padding:", ";background-color:", ";color:", ";transition:all 100ms ease-in-out;", "{h5{font-size:", ";}}"], function (_ref5) {
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
var StyledCollapseButton = styled(CollapseButton).withConfig({
  displayName: "Item__StyledCollapseButton",
  componentId: "sc-1mr01kl-4"
})(["width:33px !important;height:33px !important;padding:", ";color:", ";background-color:", ";border-radius:0px 8px 8px 0px;", "{padding:", ";}"], function (_ref11) {
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
var Content$8 = styled.div.withConfig({
  displayName: "Item__Content",
  componentId: "sc-1mr01kl-5"
})(["display:flex;align-items:center;justify-content:space-between;padding:", ";div{max-width:80%;}", "{padding:", ";}"], function (_ref16) {
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

  var _useState = react.useState(false),
      collapseOpen = _useState[0],
      setCollapseOpen = _useState[1];

  var theme = useTheme();

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

  return /*#__PURE__*/react.createElement(Container$6, null, /*#__PURE__*/react.createElement(RowWrapper, null, /*#__PURE__*/react.createElement(StyledStatus, {
    color: getColor(status, theme)
  }, /*#__PURE__*/react.createElement(Text, {
    content: status
  })), /*#__PURE__*/react.createElement(StyledMessage, null, /*#__PURE__*/react.createElement(H5, null, title)), collapsible && /*#__PURE__*/react.createElement(StyledCollapseButton, {
    isOpened: collapseOpen,
    onClick: function onClick() {
      return setCollapseOpen(function (prev) {
        return !prev;
      });
    }
  })), collapsible && /*#__PURE__*/react.createElement(Collapse, {
    isOpened: collapseOpen
  }, /*#__PURE__*/react.createElement(Content$8, null, /*#__PURE__*/react.createElement(Text, {
    fontSize: "sm",
    content: collapseContent
  }), /*#__PURE__*/react.createElement(Button$1, {
    onClick: buttonFunction,
    size: "sm",
    content: buttonContent
  }))));
};
InspectorItem.propTypes = {
  data: PropTypes.shape({
    collapsible: PropTypes.bool,
    collapseContent: PropTypes.node,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func.isRequired,
    buttonContent: PropTypes.string.isRequired
  }).isRequired
};

var InspectorPropTypes = _extends({
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func.isRequired,
    buttonContent: PropTypes.string.isRequired
  })).isRequired
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var InspectorDefaultProps = {};

var ItemSelectPropTypes = _extends({
  async: PropTypes.bool,
  endpoint: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ItemSelectDefaultProps = {};

var Container$5 = styled.div.withConfig({
  displayName: "itemsPreview__Container",
  componentId: "sc-1mt253a-0"
})(["display:flex;flex-direction:row;flex-wrap:wrap;background-color:", ";border-radius:16px;padding:", ";margin-top:", ";margin-bottom:", ";", ""], function (_ref) {
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
  return maxWidth && items === 0 && css(["max-width:", "px !important;"], maxWidth);
});
var SelectItem = styled.div.withConfig({
  displayName: "itemsPreview__SelectItem",
  componentId: "sc-1mt253a-1"
})(["position:relative;width:169px;min-height:200px !important;border-radius:12px;border:3px solid ", ";cursor:pointer;margin:", ";display:grid !important;place-items:center;"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.gray.regular;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing(2);
});
var AddIcon = styled(Icon).withConfig({
  displayName: "itemsPreview__AddIcon",
  componentId: "sc-1mt253a-2"
})(["font-size:28px !important;color:", " !important;"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.gray.medium;
});
var Description = styled(Text).withConfig({
  displayName: "itemsPreview__Description",
  componentId: "sc-1mt253a-3"
})(["position:absolute;bottom:40px;color:", ";"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.palette.gray.medium;
});
var Item$1 = styled.div.withConfig({
  displayName: "itemsPreview__Item",
  componentId: "sc-1mt253a-4"
})(["width:168px;min-height:200px !important;border-radius:12px;box-shadow:rgba(41,40,57,0.08) 0px 8px 32px;cursor:pointer;margin:", ";background-color:", ";"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.spacing(2);
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.palette.common.white;
});
var HeaderRow = styled.div.withConfig({
  displayName: "itemsPreview__HeaderRow",
  componentId: "sc-1mt253a-5"
})(["display:flex;"]);
var Close = styled(Icon).withConfig({
  displayName: "itemsPreview__Close",
  componentId: "sc-1mt253a-6"
})(["width:14px !important;height:14px !important;margin-right:10px;margin-left:", ";margin-top:", ";cursor:pointer;"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.spacing(2);
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.spacing(2);
});
var StyledImage$3 = styled(Image).withConfig({
  displayName: "itemsPreview__StyledImage",
  componentId: "sc-1mt253a-7"
})(["width:148px;height:130px;object-fit:cover;z-index:2;border-radius:12px;margin-left:10px;margin-right:10px;mask-image:radial-gradient( circle at left center,transparent 20px,black 21px,black 55%,transparent 0 ),radial-gradient( circle at right center,transparent 20px,black 21px,black 55%,transparent 0 ),linear-gradient( to top,transparent 0px,black 0px,black 25%,transparent 0 ),linear-gradient( to bottom,transparent 0px,black 0px,black 25%,transparent 0 );"]);
var Title$1 = styled(H6).withConfig({
  displayName: "itemsPreview__Title",
  componentId: "sc-1mt253a-8"
})(["flex:1;height:60px;width:100%;padding-left:", ";padding-top:", ";"], function (_ref14) {
  var theme = _ref14.theme;
  return theme.spacing(3);
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.spacing(2);
});

var SelectNftCard = function SelectNftCard(_ref16) {
  var onClick = _ref16.onClick;
  return /*#__PURE__*/react.createElement(SelectItem, {
    onClick: onClick
  }, /*#__PURE__*/react.createElement(AddIcon, {
    icon: "plus"
  }), /*#__PURE__*/react.createElement(Description, {
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
  return /*#__PURE__*/react.createElement(Item$1, {
    onClick: onClick
  }, /*#__PURE__*/react.createElement(HeaderRow, null, /*#__PURE__*/react.createElement(Title$1, {
    content: title
  }), isRemovable && /*#__PURE__*/react.createElement(Close, {
    onClick: function onClick() {
      return onRemove(id);
    },
    color: "secondary",
    icon: "times"
  })), coverSrc && /*#__PURE__*/react.createElement(StyledImage$3, {
    src: coverSrc
  }));
};

var ItemsPreview = function ItemsPreview(_ref18) {
  var items = _ref18.items,
      onRemove = _ref18.onRemove,
      action = _ref18.action,
      maxWidth = _ref18.maxWidth;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Container$5, {
    maxWidth: maxWidth,
    items: items == null ? void 0 : items.length
  }, items == null ? void 0 : items.map(function (item) {
    return /*#__PURE__*/react.createElement(Card, {
      key: item.id,
      id: item.id,
      title: item.title,
      coverSrc: item.coverSrc,
      isRemovable: true,
      onRemove: onRemove
    });
  }), /*#__PURE__*/react.createElement(SelectNftCard, {
    onClick: action
  })));
};

var _excluded$F = ["action", "actionDescription", "actionLoading", "actionTitle", "cancelButton", "dataCy", "fullScreen", "isOpen", "loading", "onClose", "children", "maxWidth", "title", "disabled", "padding"];
var StyledDialog = styled(Dialog).withConfig({
  displayName: "Modal__StyledDialog",
  componentId: "sc-pqwu3e-0"
})([".MuiDialog-paper{flex:1;position:relative;background-color:", ";border-radius:16px !important;}[class*=\"MuiPaper-root\"]{background-color:", " !important;border-radius:16px !important;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.common.white;
});
var ContentWrapper = styled(DialogContent).attrs(function () {
  return {
    dividers: true
  };
}).withConfig({
  displayName: "Modal__ContentWrapper",
  componentId: "sc-pqwu3e-1"
})(["&&{display:flex;flex-direction:column;padding:", ";&:first-child{padding-top:0;}}"], function (_ref3) {
  var padding = _ref3.padding,
      theme = _ref3.theme;
  return padding ? theme.spacing(4) : 0;
});
var Title = styled(DialogTitle).attrs(function () {
  return {
    disableTypography: true
  };
}).withConfig({
  displayName: "Modal__Title",
  componentId: "sc-pqwu3e-2"
})(["&&{font-size:16px;font-weight:500;color:", ";display:flex;align-items:center;justify-content:space-between;padding:", "px;}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.darkIndigo;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(3, 5);
});
var CloseModalIcon$1 = styled(Icon).attrs(function () {
  return {
    size: "lg"
  };
}).withConfig({
  displayName: "Modal__CloseModalIcon",
  componentId: "sc-pqwu3e-3"
})(["cursor:pointer;background-color:white;&&{color:", ";}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.secondary.dark;
});
var Actions = styled(DialogActions).withConfig({
  displayName: "Modal__Actions",
  componentId: "sc-pqwu3e-4"
})(["&&{justify-content:", ";}"], function (_ref7) {
  var hasDesc = _ref7.hasDesc;
  return hasDesc ? "space-between" : "flex-end";
});
var LoadingWrapper = styled.div.withConfig({
  displayName: "Modal__LoadingWrapper",
  componentId: "sc-pqwu3e-5"
})(["position:absolute;top:0;right:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:", ";z-index:1;"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.secondary.dark;
});
var Modal = function Modal(_ref9) {
  var action = _ref9.action,
      actionDescription = _ref9.actionDescription,
      actionLoading = _ref9.actionLoading,
      actionTitle = _ref9.actionTitle,
      cancelButton = _ref9.cancelButton,
      dataCy = _ref9.dataCy,
      fullScreen = _ref9.fullScreen,
      isOpen = _ref9.isOpen,
      loading = _ref9.loading,
      onClose = _ref9.onClose,
      children = _ref9.children,
      maxWidth = _ref9.maxWidth,
      title = _ref9.title,
      disabled = _ref9.disabled,
      padding = _ref9.padding,
      props = _objectWithoutPropertiesLoose(_ref9, _excluded$F);

  return /*#__PURE__*/react.createElement(StyledDialog, _extends({
    "data-cy": dataCy,
    fullScreen: typeof fullScreen !== "undefined" ? fullScreen : typeof window !== "undefined" && window.screen.width < 768,
    onClose: onClose,
    open: isOpen,
    maxWidth: maxWidth
  }, props), loading && /*#__PURE__*/react.createElement(LoadingWrapper, null, /*#__PURE__*/react.createElement(CircularProgress, {
    size: 60
  })), title && /*#__PURE__*/react.createElement(Title, null, /*#__PURE__*/react.createElement(H3, {
    content: title
  }), /*#__PURE__*/react.createElement(CloseModalIcon$1, {
    icon: "times",
    onClick: onClose
  })), /*#__PURE__*/react.createElement(ContentWrapper, {
    padding: padding
  }, children), action && /*#__PURE__*/react.createElement(Actions, {
    hasDesc: !!actionDescription
  }, cancelButton && /*#__PURE__*/react.createElement(TextButton, {
    onClick: onClose,
    color: "secondary",
    content: "Cancel"
  }), /*#__PURE__*/react.createElement("div", null, actionDescription), /*#__PURE__*/react.createElement(Button$1, {
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
  cancelButton: PropTypes.bool,
  dataCy: PropTypes.string,
  fullScreen: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  maxWidth: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  padding: PropTypes.bool
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

var CardItem = styled.div.withConfig({
  displayName: "card__CardItem",
  componentId: "sc-162ez-0"
})(["width:168px;min-height:200px !important;border-radius:12px;box-shadow:rgba(41,40,57,0.08) 0px 8px 32px;cursor:pointer;margin:", ";background-color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.common.white;
});
var CardTitle = styled(H6).withConfig({
  displayName: "card__CardTitle",
  componentId: "sc-162ez-1"
})(["flex:1;height:60px;width:100%;padding-left:", ";padding-top:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(3);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing(2);
});
var CardStyledImage = styled(Image).withConfig({
  displayName: "card__CardStyledImage",
  componentId: "sc-162ez-2"
})(["width:148px;height:130px;object-fit:cover;z-index:2;border-radius:12px;margin-left:10px;margin-right:10px;mask-image:radial-gradient( circle at left center,transparent 20px,black 21px,black 55%,transparent 0 ),radial-gradient( circle at right center,transparent 20px,black 21px,black 55%,transparent 0 ),linear-gradient( to top,transparent 0px,black 0px,black 25%,transparent 0 ),linear-gradient( to bottom,transparent 0px,black 0px,black 25%,transparent 0 );"]);
var CardHeaderRow = styled.div.withConfig({
  displayName: "card__CardHeaderRow",
  componentId: "sc-162ez-3"
})(["display:flex;"]);
var CardClose = styled(Icon).withConfig({
  displayName: "card__CardClose",
  componentId: "sc-162ez-4"
})(["width:14px !important;height:14px !important;margin-right:10px;margin-left:", ";margin-top:", ";cursor:pointer;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(2);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(2);
});
var CardSelectCircle = styled.div.withConfig({
  displayName: "card__CardSelectCircle",
  componentId: "sc-162ez-5"
})(["width:24px !important;height:24px !important;border-radius:100%;background-color:", ";margin-right:10px;margin-left:", ";margin-top:", ";display:grid;place-items:center;svg{color:", " !important;}", ""], function (_ref7) {
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
  return checked && css(["background-color:", ";"], function (_ref12) {
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
  return /*#__PURE__*/react.createElement(CardItem, {
    onClick: onClick
  }, /*#__PURE__*/react.createElement(CardHeaderRow, null, /*#__PURE__*/react.createElement(CardTitle, {
    content: title
  }), /*#__PURE__*/react.createElement(CardSelectCircle, {
    checked: checked
  }, checked && /*#__PURE__*/react.createElement(Icon, {
    icon: "check"
  })), isRemovable && /*#__PURE__*/react.createElement(CardClose, {
    onClick: function onClick() {
      return onRemove(id);
    },
    color: "secondary",
    icon: "times"
  })), coverSrc && /*#__PURE__*/react.createElement(CardStyledImage, {
    src: coverSrc
  }));
};

var StyledModal = styled(Modal).withConfig({
  displayName: "modal__StyledModal",
  componentId: "sc-1fwp23y-0"
})([".MuiDialog-paper{min-height:640px !important;}.MuiDialogTitle-root{padding-bottom:", ";}.MuiDialogContent-root{border-top:none !important;background-color:", " !important;}[class*=\"MuiPaper-root\"]{background-color:", " !important;border-radius:16px !important;min-width:768px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.common.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.common.white;
});
var GridWrapper = styled.div.withConfig({
  displayName: "modal__GridWrapper",
  componentId: "sc-1fwp23y-1"
})(["width:100%;background-color:", ";padding:", ";overflow-y:scroll;height:530px;.nft-masonry-grid{display:flex;width:auto;&:first-child{margin-left:-", ";}}.nft-masonry-grid_column{padding-left:", ";min-width:180px !important;}.nft-masonry-grid_column > a,.nft-masonry-grid_column > div{display:block;margin-bottom:", ";}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.gray.semiLight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(4, 6);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing(4);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing(2);
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing(4);
});
var SelectItemsModal = function SelectItemsModal(_ref9) {
  _ref9.action;
      var isOpen = _ref9.isOpen,
      onClose = _ref9.onClose,
      handleSelectItems = _ref9.handleSelectItems,
      selectedItems = _ref9.selectedItems,
      options = _ref9.options;

  var _useState = react.useState(false);
      _useState[0];
      _useState[1];

  var isChecked = function isChecked(option) {
    var checkStatus = selectedItems == null ? void 0 : selectedItems.some(function (item) {
      return Number(item.id) === option.id;
    });
    return checkStatus;
  };

  return /*#__PURE__*/react.createElement(StyledModal, {
    cancelButton: true,
    action: onClose,
    actionTitle: "add",
    title: "select Merch Items",
    isOpen: isOpen,
    onClose: onClose,
    className: "modal_select"
  }, /*#__PURE__*/react.createElement(GridWrapper, null, /*#__PURE__*/react.createElement(Masonry, {
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
    return /*#__PURE__*/react.createElement(SelectItemCard, {
      checked: isChecked(option),
      onClick: function onClick() {
        if (!(selectedItems != null && selectedItems.some(function (item) {
          return item.id === option.id;
        }))) {
          handleSelectItems([].concat(selectedItems, [{
            id: option.id,
            coverSrc: option.coverSrc,
            title: option.title
          }]));
        } else if (selectedItems != null && selectedItems.some(function (item) {
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
  _ref.async;
      _ref.cacheOptions;
      var register = _ref.register,
      control = _ref.control,
      setValue = _ref.setValue,
      options = _ref.options,
      maxWidth = _ref.maxWidth,
      endpoint = _ref.endpoint;
      _ref.endpointQueryFlag;

  var _useState = react.useState(false),
      openModal = _useState[0],
      setOpenModal = _useState[1];

  var _useState2 = react.useState([]),
      selectedItems = _useState2[0],
      setSelectedItems = _useState2[1];

  var _useState3 = react.useState([]),
      endpointOptions = _useState3[0],
      setEndpointOptions = _useState3[1];

  react.useEffect(function () {
    if (endpoint) {
      loadOptionsfromEndpoint();
    }
  }, [endpoint]);

  var loadOptionsfromEndpoint = function loadOptionsfromEndpoint() {
    axios.get("" + endpoint).then(function (resp) {
      setEndpointOptions(resp == null ? void 0 : resp.data);
    }).catch(function (err) {
      console.log(err);
    });
  };

  react.useEffect(function () {
    setValue("selectedItems", selectedItems == null ? void 0 : selectedItems.map(function (item) {
      return item == null ? void 0 : item.id;
    }));
  }, [selectedItems]);

  var removeSelectedItem = function removeSelectedItem(id) {
    setSelectedItems(selectedItems == null ? void 0 : selectedItems.filter(function (item) {
      return item.id !== id;
    }));
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Controller, {
    as: /*#__PURE__*/react.createElement(ItemsPreview, {
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
  }), /*#__PURE__*/react.createElement(SelectItemsModal, {
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
    options: endpoint ? endpointOptions : options
  }));
};
ItemSelect.propTypes = ItemSelectPropTypes;
ItemSelect.defaultProps = ItemSelectDefaultProps;

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

var _excluded$E = ["value", "languages", "onChange"];
var Language = function Language(_ref) {
  var value = _ref.value,
      languages = _ref.languages,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$E);

  var _useState = react.useState(null),
      anchorEl = _useState[0],
      setAnchorEl = _useState[1];

  var handleClick = function handleClick(val) {
    onChange(val);
    setAnchorEl(null);
  };

  var current = languages.find(function (l) {
    return l.value === value;
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(TextButton, _extends({
    content: current == null ? void 0 : current.label,
    color: "subtle",
    endIcon: "chevron-down",
    onClick: function onClick(_ref2) {
      var currentTarget = _ref2.currentTarget;
      return setAnchorEl(currentTarget);
    },
    startIcon: "globe"
  }, props)), /*#__PURE__*/react.createElement(Dropdown, {
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

var img$4 = "data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.20827 41.2468C9.85226 41.2468 12.484 44.0937 12.484 47.415C12.484 50.8719 9.85226 53.4477 6.20827 53.4477C2.56429 53.4477 0 50.8719 0 47.415C0 44.0937 2.56429 41.2468 6.20827 41.2468ZM35.9092 6C49.4054 6 60 16.5063 60 29.7916C60 43.0092 49.4054 53.4477 35.9092 53.4477C22.413 53.4477 11.8184 43.0092 11.8184 29.7916C11.8184 16.5063 22.413 6 35.9092 6ZM35.9092 43.2125C43.2647 43.2125 48.8656 37.5188 48.8656 29.7916C48.8656 21.9966 43.2647 16.2351 35.9092 16.2351C28.5538 16.2351 22.9528 21.9966 22.9528 29.7916C22.9528 37.5188 28.5538 43.2125 35.9092 43.2125Z' fill='%23AC00FC'/%3e%3c/svg%3e";

var AuthLayoutHeaderPropTypes = {
  backButtonOnClick: PropTypes.func,
  headerLeft: PropTypes.node,
  headerRight: PropTypes.node,
  logoAction: PropTypes.func,
  logoSrc: PropTypes.string,
  renderLogo: PropTypes.func
};
var AuthLayoutHeaderDefaultProps = {
  renderLogo: function renderLogo() {}
};

var _excluded$D = ["backButtonOnClick", "headerLeft", "headerRight", "logoAction", "logoSrc", "renderLogo"];
var StyledHeader$4 = styled(Flex).attrs(function () {
  return {
    container: true,
    alignItems: "center",
    justify: "space-between"
  };
}).withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1p39ban-0"
})(["flex:0 0 120px;", "{flex:0 0 96px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.down("md");
});
var Item = styled(Flex).attrs(function () {
  return {
    container: true,
    item: true
  };
}).withConfig({
  displayName: "Header__Item",
  componentId: "sc-1p39ban-1"
})(["flex:1%;"]);
var StyledLogo$1 = styled(Image).attrs(function () {
  return {
    alt: "Logo"
  };
}).withConfig({
  displayName: "Header__StyledLogo",
  componentId: "sc-1p39ban-2"
})(["width:48px;height:48px;"]);
var AuthLayoutHeader = function AuthLayoutHeader(_ref2) {
  var backButtonOnClick = _ref2.backButtonOnClick,
      headerLeft = _ref2.headerLeft,
      headerRight = _ref2.headerRight,
      logoAction = _ref2.logoAction,
      logoSrc = _ref2.logoSrc,
      renderLogo = _ref2.renderLogo,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded$D);

  var backButton = /*#__PURE__*/react.createElement(TextButton, {
    color: "secondary",
    onClick: backButtonOnClick,
    size: "sm"
  }, "Back");
  return /*#__PURE__*/react.createElement(StyledHeader$4, props, /*#__PURE__*/react.createElement(Item, null, headerLeft || backButton), /*#__PURE__*/react.createElement(Item, {
    justify: "center"
  }, renderLogo() || /*#__PURE__*/react.createElement(StyledLogo$1, {
    src: logoSrc || img$4,
    onClick: logoAction
  })), /*#__PURE__*/react.createElement(Item, {
    justify: "flex-end"
  }, headerRight));
};
AuthLayoutHeader.propTypes = AuthLayoutHeaderPropTypes;
AuthLayoutHeader.defaultProps = AuthLayoutHeaderDefaultProps;

var AuthLayoutPropTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  headerBackButtonOnClick: PropTypes.func,
  headerLeft: PropTypes.node,
  headerLogoAction: PropTypes.func,
  headerLogoSrc: PropTypes.string,
  headerRight: PropTypes.node,
  headerRenderLogo: PropTypes.func,
  loading: PropTypes.bool
};

var _excluded$C = ["children", "content", "headerLeft", "headerBackButtonOnClick", "headerLogoAction", "headerLogoSrc", "headerRight", "headerRenderLogo", "loading"];
var StyledContainer$2 = styled(MuiContainer).attrs(function () {
  return {
    maxWidth: "xs"
  };
}).withConfig({
  displayName: "Auth__StyledContainer",
  componentId: "sc-11vk9ot-0"
})(["height:100%;"]);
var Content$7 = styled.div.withConfig({
  displayName: "Auth__Content",
  componentId: "sc-11vk9ot-1"
})(["flex:1;width:100%;padding:", ";"], function (_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref2, _excluded$C);

  return /*#__PURE__*/react.createElement(StyledContainer$2, props, loading && /*#__PURE__*/react.createElement(PageLoading, {
    fullScreen: true
  }), /*#__PURE__*/react.createElement(Flex, {
    container: true,
    direction: "column",
    mAuto: true,
    h100: true,
    wrap: "nowrap"
  }, /*#__PURE__*/react.createElement(AuthLayoutHeader, {
    backButtonOnClick: headerBackButtonOnClick,
    headerLeft: headerLeft,
    headerRight: headerRight,
    logoAction: headerLogoAction,
    logoSrc: headerLogoSrc,
    renderLogo: headerRenderLogo
  }), /*#__PURE__*/react.createElement(Content$7, null, children || content)));
};
AuthLayout.propTypes = AuthLayoutPropTypes;
AuthLayout.defaultProps = {};

var CreatorsHubFooterPropTypes = {
  bottomContent: PropTypes.node,
  content: PropTypes.node,
  navCols: PropTypes.array
};
var CreatorsHubFooterDefaultProps = {};

var _excluded$B = ["bottomContent", "content", "navCols"];
var Footer = styled.div.withConfig({
  displayName: "Footer",
  componentId: "sc-vpynnn-0"
})(["width:100%;background-color:", ";padding:", ";", "{padding:", ";}", " ", ""], function (_ref) {
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
var BottomSection = styled.div.withConfig({
  displayName: "Footer__BottomSection",
  componentId: "sc-vpynnn-1"
})(["margin-top:", ";", "{margin-top:", ";}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(16);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.breakpoints.down("md");
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing(8);
});
var Col = styled.ul.withConfig({
  displayName: "Footer__Col",
  componentId: "sc-vpynnn-2"
})(["list-style:none;padding:0;margin:0;"]);
var ColItem = styled.li.withConfig({
  displayName: "Footer__ColItem",
  componentId: "sc-vpynnn-3"
})(["font-size:12px;line-height:120%;:not(:last-child){margin-bottom:", ";}a{text-decoration:none;color:", ";}"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing(2);
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.palette.primary.main;
});

var renderCol = function renderCol(_ref10) {
  var title = _ref10.title,
      items = _ref10.items;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(H4, {
    content: title,
    mb: 4
  }), /*#__PURE__*/react.createElement(Col, null, items == null ? void 0 : items.map(function (item) {
    return /*#__PURE__*/react.createElement(ColItem, {
      key: item.key
    }, item.render());
  })));
};

var CreatorsHubFooter = function CreatorsHubFooter(_ref11) {
  var bottomContent = _ref11.bottomContent,
      content = _ref11.content,
      navCols = _ref11.navCols,
      props = _objectWithoutPropertiesLoose(_ref11, _excluded$B);

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Footer, props, /*#__PURE__*/react.createElement(Flex, {
    container: true,
    alignItems: "flex-start",
    spacing: 8
  }, content && /*#__PURE__*/react.createElement(Flex, {
    item: true,
    xs: 12,
    md: 6,
    lg: 3
  }, content), navCols == null ? void 0 : navCols.map(function (col) {
    return /*#__PURE__*/react.createElement(Flex, {
      item: true,
      xs: 12,
      md: 6,
      lg: 3,
      key: col.title
    }, renderCol(col));
  })), bottomContent && /*#__PURE__*/react.createElement(BottomSection, null, bottomContent)));
};
CreatorsHubFooter.propTypes = CreatorsHubFooterPropTypes;
CreatorsHubFooter.defaultProps = CreatorsHubFooterDefaultProps;

var CreatorsHubHeaderPropTypes = {
  fixed: PropTypes.bool,
  logoAction: PropTypes.func,
  logoSrc: PropTypes.string,
  primaryNavItems: PropTypes.array,
  primaryWhite: PropTypes.bool,
  renderLogo: PropTypes.func,
  secondary: PropTypes.bool,
  secondaryHasBorder: PropTypes.bool,
  secondaryHideOnScroll: PropTypes.bool,
  secondaryNavItems: PropTypes.array,
  secondaryRenderRight: PropTypes.func
};
var CreatorsHubHeaderDefaultProps = {
  renderLogo: function renderLogo() {},
  secondaryRenderRight: function secondaryRenderRight() {}
};

var _excluded$A = ["drawerOpen", "logoSrc", "logoAction", "primaryNavItems", "renderLogo", "setDrawerOpen"];
var StyledHeader$3 = styled.div.withConfig({
  displayName: "Primary__StyledHeader",
  componentId: "sc-ton3vv-0"
})(["width:100%;display:flex;padding:", ";height:80px;max-height:80px;box-sizing:border-box;align-items:center;justify-content:space-between;", "{height:", ";max-height:", ";}", ""], function (_ref) {
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
  return primaryWhite && css(["background-color:", ";"], function (_ref6) {
    var theme = _ref6.theme;
    return theme.palette.common.white;
  });
});
var MenuIconButton = styled(Icon).attrs(function () {
  return {
    squared: true,
    mr: 4
  };
}).withConfig({
  displayName: "Primary__MenuIconButton",
  componentId: "sc-ton3vv-1"
})(["&&{background-color:", ";border:none;svg{color:", ";}}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.gray.semiLight;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.palette.gray.medium;
});
var LogoContainer$1 = styled.div.withConfig({
  displayName: "Primary__LogoContainer",
  componentId: "sc-ton3vv-2"
})(["display:flex;align-items:center;"]);
var PrimaryList = styled.ul.withConfig({
  displayName: "Primary__PrimaryList",
  componentId: "sc-ton3vv-3"
})(["list-style:none;padding:0;margin:0;"]);
var PrimaryListItem = styled.li.withConfig({
  displayName: "Primary__PrimaryListItem",
  componentId: "sc-ton3vv-4"
})(["display:inline-block;font-size:12px;line-height:120%;:not(:first-child){margin-left:", ";}a{text-decoration:none;color:", ";}"], function (_ref9) {
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
      props = _objectWithoutPropertiesLoose(_ref11, _excluded$A);

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(StyledHeader$3, props, /*#__PURE__*/react.createElement(LogoContainer$1, null, /*#__PURE__*/react.createElement(Hidden, {
    implementation: "js",
    mdUp: true
  }, /*#__PURE__*/react.createElement(MenuIconButton, {
    icon: drawerOpen ? "times" : "bars",
    onClick: function onClick() {
      return setDrawerOpen(function (prev) {
        return !prev;
      });
    }
  })), renderLogo() || /*#__PURE__*/react.createElement(Image, {
    alt: "Logo",
    height: "100%",
    onClick: logoAction,
    src: logoSrc || img$4
  })), /*#__PURE__*/react.createElement(PrimaryList, null, primaryNavItems == null ? void 0 : primaryNavItems.map(function (item) {
    return /*#__PURE__*/react.createElement(Hidden, {
      implementation: "js",
      smDown: !item.showSm,
      key: item.key
    }, /*#__PURE__*/react.createElement(PrimaryListItem, {
      key: item.key
    }, item.render()));
  }))));
};
PrimaryHeader.propTypes = CreatorsHubHeaderPropTypes;
PrimaryHeader.defaultProps = CreatorsHubHeaderDefaultProps;

var _excluded$z = ["navItems"];
var StyledDrawer = styled(Drawer).withConfig({
  displayName: "Drawer__StyledDrawer",
  componentId: "sc-1n0twmf-0"
})(["width:100vw;height:100vh;&&{top:", " !important;}.MuiPaper-root{box-shadow:none;width:100%;height:100%;top:", " !important;background-color:", ";padding:", ";}"], function (_ref) {
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
var List = styled.ul.withConfig({
  displayName: "Drawer__List",
  componentId: "sc-1n0twmf-1"
})(["list-style:none;padding:0;margin:0;"]);
var ListItem = styled.li.withConfig({
  displayName: "Drawer__ListItem",
  componentId: "sc-1n0twmf-2"
})(["position:relative;display:flex;align-items:center;height:32px;width:100%;font-weight:600;color:", ";padding-left:", ";:not(:last-child){margin-bottom:", ";}a{text-decoration:none;color:", ";}", ""], function (_ref5) {
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
  return active && css(["color:", ";a{text-decoration:none;color:", ";}::before{content:\"\";position:absolute;top:0;left:0;width:3px;height:100%;border-radius:11px;background-color:", ";}"], function (_ref10) {
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
      props = _objectWithoutPropertiesLoose(_ref13, _excluded$z);

  return /*#__PURE__*/react.createElement(Hidden, {
    implementation: "js",
    mdUp: true
  }, /*#__PURE__*/react.createElement(StyledDrawer, _extends({
    ModalProps: {
      hideBackdrop: true
    }
  }, props), /*#__PURE__*/react.createElement(List, null, navItems == null ? void 0 : navItems.map(function (item) {
    return /*#__PURE__*/react.createElement(ListItem, {
      active: item.active,
      key: item.key
    }, item.render());
  }))));
};
HeaderDrawer.propTypes = CreatorsHubHeaderPropTypes;
HeaderDrawer.defaultProps = CreatorsHubHeaderDefaultProps;

var _excluded$y = ["fixed", "heightSm", "logoSrc", "logoAction", "primaryNavItems", "primaryWhite", "renderLogo", "secondary", "secondaryHideOnScroll", "secondaryNavItems", "secondaryRenderRight", "smNavItems"];
var Header = styled.div.withConfig({
  displayName: "Header",
  componentId: "sc-1hpkor0-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var MainHeader = function MainHeader(_ref) {
  _ref.fixed;
      var heightSm = _ref.heightSm,
      logoSrc = _ref.logoSrc,
      logoAction = _ref.logoAction,
      primaryNavItems = _ref.primaryNavItems,
      primaryWhite = _ref.primaryWhite,
      renderLogo = _ref.renderLogo;
      _ref.secondary;
      _ref.secondaryHideOnScroll;
      var secondaryNavItems = _ref.secondaryNavItems;
      _ref.secondaryRenderRight;
      var smNavItems = _ref.smNavItems,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$y);

  var _useState = react.useState(false),
      drawerOpen = _useState[0],
      setDrawerOpen = _useState[1];

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Header, props, /*#__PURE__*/react.createElement(PrimaryHeader, {
    drawerOpen: drawerOpen,
    headerSmHeight: heightSm + "px",
    logoSrc: logoSrc,
    logoAction: logoAction,
    primaryNavItems: primaryNavItems,
    primaryWhite: primaryWhite,
    renderLogo: renderLogo,
    setDrawerOpen: setDrawerOpen
  })), /*#__PURE__*/react.createElement(HeaderDrawer, {
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

var _excluded$x = ["secondaryHideOnScroll", "secondaryNavItems", "secondaryRenderRight"];
var StyledHeader$2 = styled.div.withConfig({
  displayName: "Secondary__StyledHeader",
  componentId: "sc-17k8qal-0"
})(["width:100%;display:flex;height:80px;max-height:80px;box-sizing:border-box;align-items:center;justify-content:space-between;background-color:", ";", " ", "{height:64px;max-height:64px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var secondaryHasBorder = _ref2.secondaryHasBorder;
  return secondaryHasBorder && css(["border-top:1px solid ", ";"], function (_ref3) {
    var theme = _ref3.theme;
    return theme.palette.gray.semiLight;
  });
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakpoints.down("sm");
});
var SecondaryList = styled.ul.withConfig({
  displayName: "Secondary__SecondaryList",
  componentId: "sc-17k8qal-1"
})(["list-style:none;padding:0;margin:0;height:100%;"]);
var SecondaryListItem = styled.li.withConfig({
  displayName: "Secondary__SecondaryListItem",
  componentId: "sc-17k8qal-2"
})(["position:relative;display:inline-flex;align-items:center;color:", ";font-weight:600;height:100%;:not(:last-child){margin-right:", ";}a{text-decoration:none;color:", ";}", ""], function (_ref5) {
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
  return active && css(["color:", ";a{text-decoration:none;color:", ";}::before{content:\"\";position:absolute;bottom:0;left:0;width:100%;height:3px;border-radius:11px;background-color:", ";}"], function (_ref9) {
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
var SecondaryRight = styled.div.withConfig({
  displayName: "Secondary__SecondaryRight",
  componentId: "sc-17k8qal-3"
})(["display:flex;align-items:center;", "{flex:1;justify-content:space-between;}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.breakpoints.down("sm");
});
var SecondaryHeader = function SecondaryHeader(_ref13) {
  _ref13.secondaryHideOnScroll;
      var secondaryNavItems = _ref13.secondaryNavItems,
      secondaryRenderRight = _ref13.secondaryRenderRight,
      props = _objectWithoutPropertiesLoose(_ref13, _excluded$x);

  return /*#__PURE__*/react.createElement(StyledHeader$2, props, /*#__PURE__*/react.createElement(Hidden, {
    implementation: "js",
    smDown: true
  }, /*#__PURE__*/react.createElement(SecondaryList, null, secondaryNavItems == null ? void 0 : secondaryNavItems.map(function (item) {
    return /*#__PURE__*/react.createElement(SecondaryListItem, {
      active: item == null ? void 0 : item.active
    }, item.render());
  }))), /*#__PURE__*/react.createElement(SecondaryRight, null, secondaryRenderRight()));
};
SecondaryHeader.propTypes = CreatorsHubHeaderPropTypes;
SecondaryHeader.defaultProps = CreatorsHubHeaderDefaultProps;

var CreatorsHubAuthLayoutPropTypes = {
  children: PropTypes.node,
  headerProps: PropTypes.shape(CreatorsHubHeaderPropTypes),
  loading: PropTypes.bool
};
var CreatorsHubAuthLayoutDefaultProps = {};

var _excluded$w = ["children", "headerProps", "loading"];
var StyledContainer$1 = styled(MuiContainer).attrs(function () {
  return {
    maxWidth: "lg"
  };
}).withConfig({
  displayName: "Auth__StyledContainer",
  componentId: "sc-1wmfbd0-0"
})(["&&{display:flex;flex-direction:column;height:100%;}", "{padding:", ";}", " ", ""], function (_ref) {
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
var InnerContainer = styled(MuiContainer).attrs(function () {
  return {
    maxWidth: "xs"
  };
}).withConfig({
  displayName: "Auth__InnerContainer",
  componentId: "sc-1wmfbd0-1"
})(["&&{flex:1;}"]);
var Content$6 = styled.div.withConfig({
  displayName: "Auth__Content",
  componentId: "sc-1wmfbd0-2"
})(["height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
var CreatorsHubAuthLayout = function CreatorsHubAuthLayout(_ref3) {
  var children = _ref3.children,
      headerProps = _ref3.headerProps,
      loading = _ref3.loading,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$w);

  return /*#__PURE__*/react.createElement(react.Fragment, null, loading && /*#__PURE__*/react.createElement(PageLoading, {
    fullScreen: true
  }), /*#__PURE__*/react.createElement(StyledContainer$1, props, /*#__PURE__*/react.createElement(MainHeader, headerProps), /*#__PURE__*/react.createElement(InnerContainer, null, /*#__PURE__*/react.createElement(Content$6, null, children))));
};
CreatorsHubAuthLayout.propTypes = CreatorsHubAuthLayoutPropTypes;
CreatorsHubAuthLayout.defaultProps = CreatorsHubAuthLayoutDefaultProps;

var CreatorsHubMainLayoutPropTypes = {
  children: PropTypes.node,
  footer: PropTypes.bool,
  footerProps: PropTypes.shape(CreatorsHubFooterPropTypes),
  headerProps: PropTypes.shape(CreatorsHubHeaderPropTypes),
  loading: PropTypes.bool,
  renderFooter: PropTypes.func,
  renderHeader: PropTypes.func,
  sidebar: PropTypes.node
};
var CreatorsHubMainLayoutDefaultProps = {
  renderFooter: function renderFooter() {},
  renderHeader: function renderHeader() {}
};

var PRIMARY_HEADER_HEIGHT = 80;
var PRIMARY_HEADER_HEIGHT_SM = 72;
var TOTAL_HEADER_HEIGHT = 160;
var TOTAL_HEADER_HEIGHT_SM = 136;
var FluidContainer = styled(MuiContainer).attrs(function () {
  return {
    maxWidth: false
  };
}).withConfig({
  displayName: "Main__FluidContainer",
  componentId: "sc-1maeuko-0"
})(["", " ", " ", " ", "{padding:", ";}"], function (_ref) {
  var zIndex = _ref.zIndex;
  return zIndex && "z-index: " + zIndex + ";";
}, function (_ref2) {
  var white = _ref2.white;
  return white && css(["background-color:", ";"], function (_ref3) {
    var theme = _ref3.theme;
    return theme.palette.common.white;
  });
}, function (_ref4) {
  var offsetTop = _ref4.offsetTop,
      offsetTopSm = _ref4.offsetTopSm,
      sticky = _ref4.sticky;
  return sticky && css(["position:fixed;top:", ";right:0;left:0;width:100%;", "{top:", ";}"], offsetTop ? offsetTop + "px" : 0, function (_ref5) {
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
var Container$4 = styled(MuiContainer).attrs(function () {
  return {
    maxWidth: "lg"
  };
}).withConfig({
  displayName: "Main__Container",
  componentId: "sc-1maeuko-1"
})([""]);
var Content$5 = styled.div.withConfig({
  displayName: "Main__Content",
  componentId: "sc-1maeuko-2"
})(["", ""], function (_ref8) {
  var headerFixed = _ref8.headerFixed,
      theme = _ref8.theme;
  return headerFixed && css(["padding-top:", ";", "{padding-top:", ";}"], theme.spacing(TOTAL_HEADER_HEIGHT_SM / 4), theme.breakpoints.up("md"), theme.spacing(TOTAL_HEADER_HEIGHT / 4));
});
var MainContent = styled(Flex).attrs(function () {
  return {
    container: true,
    alignItems: "flex-start"
  };
}).withConfig({
  displayName: "Main__MainContent",
  componentId: "sc-1maeuko-3"
})(["height:100%;padding:", ";", "{min-height:500px;padding:", ";}"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing(10, 0);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.breakpoints.up("md");
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing(12, 0);
});
var Heading$1 = styled.div.withConfig({
  displayName: "Main__Heading",
  componentId: "sc-1maeuko-4"
})(["display:flex;flex-direction:column;align-items:center;text-align:center;background-color:", ";padding:", ";", "{padding:", ";}"], function (_ref12) {
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
    return /*#__PURE__*/react.createElement(FluidContainer, {
      sticky: headerFixed,
      offsetTop: PRIMARY_HEADER_HEIGHT,
      offsetTopSm: PRIMARY_HEADER_HEIGHT_SM,
      white: true,
      zIndex: 98
    }, /*#__PURE__*/react.createElement(Container$4, null, /*#__PURE__*/react.createElement(SecondaryHeader, {
      fixed: headerProps.fixed,
      secondaryHasBorder: headerProps.secondaryHasBorder,
      secondaryHideOnScroll: headerProps.secondaryHideOnScroll,
      secondaryNavItems: headerProps.secondaryNavItems,
      secondaryRenderRight: headerProps.secondaryRenderRight
    })));
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, loading && /*#__PURE__*/react.createElement(PageLoading, {
    fullScreen: true
  }), /*#__PURE__*/react.createElement(FluidContainer, {
    sticky: headerFixed,
    white: true,
    zIndex: 99
  }, /*#__PURE__*/react.createElement(Container$4, null, renderHeader() || /*#__PURE__*/react.createElement(MainHeader, _extends({
    fixed: headerFixed,
    height: PRIMARY_HEADER_HEIGHT,
    heightSm: PRIMARY_HEADER_HEIGHT_SM
  }, headerProps)))), headerProps.secondary && /*#__PURE__*/react.createElement(react.Fragment, null, headerProps.secondaryHideOnScroll ? /*#__PURE__*/react.createElement(HideOnScroll, {
    threshold: PRIMARY_HEADER_HEIGHT_SM - 8
  }, renderSecondaryHeader()) : renderSecondaryHeader()), /*#__PURE__*/react.createElement(Content$5, {
    headerFixed: headerFixed
  }, renderHeading && /*#__PURE__*/react.createElement(Heading$1, null, renderHeading()), /*#__PURE__*/react.createElement(FluidContainer, null, /*#__PURE__*/react.createElement(Container$4, null, /*#__PURE__*/react.createElement(MainContent, {
    spacing: sidebar ? 8 : false
  }, /*#__PURE__*/react.createElement(Flex, {
    item: true,
    xs: 12,
    md: sidebar ? 10 : 12
  }, children), sidebar && /*#__PURE__*/react.createElement(Flex, {
    item: true,
    xs: 12,
    md: 2
  }, sidebar))))), (footer || renderFooter) && /*#__PURE__*/react.createElement(FluidContainer, {
    white: true
  }, /*#__PURE__*/react.createElement(Container$4, null, renderFooter() || /*#__PURE__*/react.createElement(CreatorsHubFooter, footerProps))));
};
CreatorsHubMainLayout.propTypes = CreatorsHubMainLayoutPropTypes;
CreatorsHubMainLayout.defaultProps = CreatorsHubMainLayoutDefaultProps;

var DashboardLayoutHeaderPropTypes = {
  backButtonOnClick: PropTypes.func,
  headerLeft: PropTypes.node,
  headerRight: PropTypes.node,
  logoAction: PropTypes.func,
  logoSrc: PropTypes.string,
  renderLogo: PropTypes.func
};
var DashboardLayoutHeaderDefaultProps = {
  renderLogo: function renderLogo() {}
};

var _excluded$v = ["backButtonOnClick", "headerLeft", "headerRight", "logoAction", "logoSrc", "renderLogo"];
var StyledHeader$1 = styled(Flex).attrs(function () {
  return {
    container: true,
    alignItems: "center",
    justify: "space-between"
  };
}).withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-sd436m-0"
})(["flex:0 0 120px;", "{flex:0 0 96px;}"], function (_ref) {
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
}).withConfig({
  displayName: "Header__LogoContainer",
  componentId: "sc-sd436m-1"
})(["", "{order:1;}img{width:48px;height:48px;}"], function (_ref2) {
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
}).withConfig({
  displayName: "Header__HeaderRight",
  componentId: "sc-sd436m-2"
})(["", "{order:2;}"], function (_ref3) {
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
      props = _objectWithoutPropertiesLoose(_ref4, _excluded$v);

  var backButton = /*#__PURE__*/react.createElement(TextButton, {
    color: "secondary",
    onClick: backButtonOnClick,
    px: 0,
    size: "sm"
  }, "Back");
  return /*#__PURE__*/react.createElement(StyledHeader$1, props, /*#__PURE__*/react.createElement(LogoContainer, null, renderLogo() || /*#__PURE__*/react.createElement(Image, {
    alt: "Logo",
    onClick: logoAction,
    src: logoSrc || img$4
  })), /*#__PURE__*/react.createElement(Flex, {
    item: true,
    md: 6,
    xs: 4
  }, headerLeft || backButton), /*#__PURE__*/react.createElement(HeaderRight, null, headerRight), /*#__PURE__*/react.createElement(Hidden, {
    smDown: true,
    implementation: "js"
  }, /*#__PURE__*/react.createElement(Flex, {
    item: true,
    md: 2
  })));
};
DashboardLayoutHeader.propTypes = DashboardLayoutHeaderPropTypes;
DashboardLayoutHeader.defaultProps = DashboardLayoutHeaderDefaultProps;

var DashboardLayoutPropTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  headerBackButtonOnClick: PropTypes.func,
  headerLeft: PropTypes.node,
  headerLogoAction: PropTypes.func,
  headerLogoSrc: PropTypes.string,
  headerRight: PropTypes.node,
  headerRenderLogo: PropTypes.func,
  loading: PropTypes.bool,
  navigationItems: PropTypes.array
};
var DashboardLayoutDefaultProps = {
  navigationItems: []
};

var _excluded$u = ["component", "selected", "title", "icon", "additional", "dataCy", "nestedItems", "WrapperComponent"],
    _excluded2 = ["WrapperComponent"];
var NestedListItem = styled(ListItem$1).withConfig({
  displayName: "NavigationMenu__NestedListItem",
  componentId: "sc-12sxu0v-0"
})(["&&{color:", ";display:flex;padding:0;margin:0;padding-left:", ";margin-bottom:2px;cursor:pointer;&.Mui-selected{background:none;color:", ";span{font-weight:bold;}&:hover{background:inherit;}}div{margin:0;span{font-size:14px;}}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.text.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(12);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.text.primary;
});
var ImprovedListItem = styled(ListItem$1).withConfig({
  displayName: "NavigationMenu__ImprovedListItem",
  componentId: "sc-12sxu0v-1"
})(["&&{color:", ";flex-direction:row;margin-top:", ";height:40px;padding:0;cursor:pointer;span{font-size:14px;}.MuiListItemText-root{margin:0;.MuiTypography-root{font-size:16px;}}&.Mui-selected{background:none;color:", ";.MuiTypography-root{font-weight:600;}svg{color:", ";}}&.MuiListItem-root:hover{color:", ";background:none;svg{color:", ";}}&:first-child{margin-top:0;}}"], function (_ref4) {
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
var ImprovedList = styled(List$1).withConfig({
  displayName: "NavigationMenu__ImprovedList",
  componentId: "sc-12sxu0v-2"
})(["&&{display:flex;flex-direction:column;padding:0;box-shadow:initial;max-height:unset;height:100%;}"]);
var ImprovedListItemIcon = styled(ListItemIcon).withConfig({
  displayName: "NavigationMenu__ImprovedListItemIcon",
  componentId: "sc-12sxu0v-3"
})(["&&{justify-content:center;align-items:center;min-width:40px;width:40px;height:40px;border-radius:50%;background-color:#fff;margin-right:", ";svg{color:", ";}}"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.spacing(2);
}, function (_ref11) {
  var thm = _ref11.theme;
  return thm.palette.text.secondary;
});
var NavigationMenu = function NavigationMenu(_ref12) {
  var items = _ref12.items;
  return /*#__PURE__*/react.createElement(ImprovedList, {
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
        props = _objectWithoutPropertiesLoose(_ref13, _excluded$u);

    var showNested = nestedItems.length > 0 && selected;

    var item = function item() {
      return /*#__PURE__*/react.createElement(ImprovedListItem, _extends({
        component: component,
        selected: selected
      }, dataCy ? {
        "data-cy": dataCy
      } : {}, props), /*#__PURE__*/react.createElement(ImprovedListItemIcon, null, /*#__PURE__*/react.createElement(Icon, {
        icon: icon
      })), /*#__PURE__*/react.createElement(ListItemText, {
        primary: title
      }), additional);
    };

    var nestedItem = function nestedItem(n) {
      return /*#__PURE__*/react.createElement(NestedListItem, _extends({
        component: n.component || "a",
        key: n.title
      }, n), /*#__PURE__*/react.createElement(ListItemText, {
        primary: n.title
      }));
    };

    var listItem = function listItem() {
      return Wrapper ? /*#__PURE__*/react.createElement(Wrapper, null, item()) : item();
    };

    var nestedListItem = function nestedListItem(_ref14) {
      var WrapperComponent = _ref14.WrapperComponent,
          nested = _objectWithoutPropertiesLoose(_ref14, _excluded2);

      return WrapperComponent ? /*#__PURE__*/react.createElement(WrapperComponent, null, nestedItem(nested)) : nestedItem(nested);
    };

    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: title
    }, listItem(), showNested && nestedItems.map(function (n) {
      return nestedListItem(n);
    }));
  }));
};
NavigationMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired
};

var _excluded$t = ["menuItems", "onClick"];
var UserMenu = function UserMenu(_ref) {
  var menuItems = _ref.menuItems,
      _onClick = _ref.onClick,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$t);

  var _useState = react.useState(null),
      anchorEl = _useState[0],
      setAnchorEl = _useState[1];

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(TextButton, _extends({
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
  }, props)), /*#__PURE__*/react.createElement(Dropdown, {
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
  navigationItems: PropTypes.arrayOf(PropTypes.shape).isRequired,
  userMenuItems: PropTypes.arrayOf(PropTypes.shape)
};
var DashboardLayoutNavigationDefaultProps = {
  userMenuItems: []
};

var MainNav = styled.div.withConfig({
  displayName: "Navigation__MainNav",
  componentId: "sc-kj8or-0"
})(["display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;padding:", ";height:100%;"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(0, 4, 0, 4);
});
var StyledFab = styled(Fab).attrs(function () {
  return {
    color: "primary",
    size: "small"
  };
}).withConfig({
  displayName: "Navigation__StyledFab",
  componentId: "sc-kj8or-1"
})(["&&{position:fixed;bottom:", ";right:", ";z-index:10;}"], function (_ref2) {
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
}).withConfig({
  displayName: "Navigation__NavIcon",
  componentId: "sc-kj8or-2"
})(["color:#fff;"]);
var DrawerWrapper = styled.div.withConfig({
  displayName: "Navigation__DrawerWrapper",
  componentId: "sc-kj8or-3"
})(["padding:", ";height:100%;box-sizing:border-box;overflow:hidden;background-color:", ";"], function (_ref4) {
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

  var _useState = react.useState(false),
      mobileOpen = _useState[0],
      setMobileOpen = _useState[1];

  var renderMainNav = function renderMainNav() {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(NavigationMenu, {
      items: navigationItems
    }), userMenuItems.length > 0 && /*#__PURE__*/react.createElement(UserMenu, {
      menuItems: userMenuItems,
      onClick: userMenuOnClick
    }));
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Hidden, {
    smUp: true,
    implementation: "js"
  }, /*#__PURE__*/react.createElement(StyledFab, {
    "aria-label": "toggleNavigation",
    onClick: function onClick() {
      return setMobileOpen(true);
    }
  }, /*#__PURE__*/react.createElement(NavIcon, null))), /*#__PURE__*/react.createElement(Hidden, {
    smUp: true,
    implementation: "js"
  }, /*#__PURE__*/react.createElement(Drawer, {
    variant: "temporary",
    anchor: "left",
    open: mobileOpen,
    onClose: function onClose() {
      return setMobileOpen(false);
    },
    ModalProps: {
      keepMounted: true
    }
  }, /*#__PURE__*/react.createElement(DrawerWrapper, null, renderMainNav()))), /*#__PURE__*/react.createElement(Hidden, {
    smDown: true,
    implementation: "js"
  }, /*#__PURE__*/react.createElement(MainNav, null, renderMainNav())));
};
DashboardLayoutNavigation.propTypes = DashboardLayoutNavigationPropTypes;
DashboardLayoutNavigation.defaultProps = DashboardLayoutNavigationDefaultProps;

var DashboardLayoutFooterPropTypes = {
  content: PropTypes.node
};

var _excluded$s = ["content"];
var StyledFooter$1 = styled.div.withConfig({
  displayName: "Footer__StyledFooter",
  componentId: "sc-1d58k3u-0"
})(["box-sizing:border-box;height:70px;width:100%;text-align:center;padding-top:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var DashboardLayoutFooter = function DashboardLayoutFooter(_ref2) {
  var content = _ref2.content,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded$s);

  return /*#__PURE__*/react.createElement(StyledFooter$1, props, content);
};
DashboardLayoutFooter.propTypes = DashboardLayoutFooterPropTypes;

var _excluded$r = ["children", "content", "footerContent", "headerLeft", "headerBackButtonOnClick", "headerLogoAction", "headerLogoSrc", "headerRight", "headerRenderLogo", "navigationItems", "loading", "sidebar", "userMenuItems", "userMenuOnClick"];
var StyledContainer = styled(MuiContainer).attrs(function () {
  return {
    maxWidth: "lg"
  };
}).withConfig({
  displayName: "Dashboard__StyledContainer",
  componentId: "sc-1rqa7ed-0"
})(["height:100%;"]);
var Content$4 = styled.div.withConfig({
  displayName: "Dashboard__Content",
  componentId: "sc-1rqa7ed-1"
})(["flex:1;width:100%;"]);
var NavigationContainer = styled(Flex).attrs(function () {
  return {
    item: true,
    md: 2,
    xs: 4
  };
}).withConfig({
  displayName: "Dashboard__NavigationContainer",
  componentId: "sc-1rqa7ed-2"
})(["", "{height:100%;}", "{order:2;}"], function (_ref) {
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
}).withConfig({
  displayName: "Dashboard__SidebarContainer",
  componentId: "sc-1rqa7ed-3"
})(["padding:", ";", "{padding:", ";height:100%;}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(8, 0);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakpoints.up("md");
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing(0, 4);
});
var poweredBy$1 = /*#__PURE__*/react.createElement(Text, {
  color: "textSecondary",
  fontStyle: "italic"
}, "Powered by", /*#__PURE__*/react.createElement(Text, {
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
      props = _objectWithoutPropertiesLoose(_ref6, _excluded$r);

  return /*#__PURE__*/react.createElement(StyledContainer, props, loading && /*#__PURE__*/react.createElement(PageLoading, {
    fullScreen: true
  }), /*#__PURE__*/react.createElement(Flex, {
    container: true,
    direction: "column",
    alignItems: "flex-start",
    justify: "flex-start",
    xs: 12,
    h100: true,
    wrap: "nowrap"
  }, /*#__PURE__*/react.createElement(DashboardLayoutHeader, {
    backButtonOnClick: headerBackButtonOnClick,
    headerLeft: headerLeft,
    headerRight: headerRight,
    logoAction: headerLogoAction,
    logoSrc: headerLogoSrc,
    renderLogo: headerRenderLogo
  }), /*#__PURE__*/react.createElement(Flex, {
    item: true,
    container: true,
    alignItems: "flex-start",
    justify: "flex-start",
    xs: 12
  }, /*#__PURE__*/react.createElement(NavigationContainer, null, /*#__PURE__*/react.createElement(DashboardLayoutNavigation, {
    navigationItems: navigationItems,
    userMenuItems: userMenuItems,
    userMenuOnClick: userMenuOnClick
  })), /*#__PURE__*/react.createElement(Flex, {
    item: true,
    md: 8,
    xs: 12
  }, /*#__PURE__*/react.createElement(Content$4, null, children || content)), /*#__PURE__*/react.createElement(SidebarContainer, null, sidebar)), /*#__PURE__*/react.createElement(Flex, {
    container: true,
    item: true,
    xs: 12
  }, /*#__PURE__*/react.createElement(DashboardLayoutFooter, {
    content: footerContent || poweredBy$1
  }))));
};
DashboardLayout.propTypes = DashboardLayoutPropTypes;
DashboardLayout.defaultProps = DashboardLayoutDefaultProps;

var ExplorerLayoutFooterPropTypes = {
  children: PropTypes.node
};

var _excluded$q = ["action"];
var StyledFooter = styled.div.withConfig({
  displayName: "Footer__StyledFooter",
  componentId: "sc-5p9du5-0"
})(["box-sizing:border-box;height:80px;text-align:center;padding-top:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var ExplorerLayoutFooter = function ExplorerLayoutFooter(_ref2) {
  _ref2.action;
      var props = _objectWithoutPropertiesLoose(_ref2, _excluded$q);

  return /*#__PURE__*/react.createElement(StyledFooter, props);
};
ExplorerLayoutFooter.propTypes = ExplorerLayoutFooterPropTypes;

var img$3 = "data:image/svg+xml,%3csvg width='194' height='60' viewBox='0 0 194 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M86.0961 52.0601C88.0083 52.0601 89.3892 53.5534 89.3892 55.2955C89.3892 57.1088 88.0083 58.4599 86.0961 58.4599C84.184 58.4599 82.8384 57.1088 82.8384 55.2955C82.8384 53.5534 84.184 52.0601 86.0961 52.0601Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M103.965 40.1848C104.461 40.1848 104.815 40.2204 105.24 40.327L104.992 46.0158H103.965C99.9993 46.0158 97.8393 48.0779 97.8393 52.7V58.2821H92.1737V40.4337H97.8393V43.8469C99.114 41.7136 101.062 40.1848 103.965 40.1848Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M120.118 33.9272C127.2 33.9272 132.76 39.4382 132.76 46.4069C132.76 53.34 127.2 58.8155 120.118 58.8155C113.037 58.8155 107.477 53.34 107.477 46.4069C107.477 39.4382 113.037 33.9272 120.118 33.9272ZM120.118 53.4467C123.978 53.4467 126.917 50.4601 126.917 46.4069C126.917 42.3181 123.978 39.2959 120.118 39.2959C116.259 39.2959 113.32 42.3181 113.32 46.4069C113.32 50.4601 116.259 53.4467 120.118 53.4467Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M144.587 53.8378C146.392 53.8378 147.844 52.8778 148.446 50.709L153.651 51.8467C152.766 56.0777 149.013 58.8154 144.587 58.8154C139.275 58.8154 134.884 55.0111 134.884 49.3579C134.884 43.7403 139.275 39.9003 144.587 39.9003C148.907 39.9003 152.66 42.5669 153.651 46.7624L148.34 48.0424C147.844 45.8735 146.392 44.878 144.587 44.878C142.037 44.878 140.337 46.7624 140.337 49.3579C140.337 51.9889 142.037 53.8378 144.587 53.8378Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M175.992 58.2821H168.733L162.961 51.8467H161.934V58.2821H156.269V32.6828H161.934V46.5135H162.713L168.343 40.4337H175.177L167.387 48.9312L175.992 58.2821Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M176.087 53.6483L181.611 52.5105C181.859 54.0394 183.24 54.6083 184.762 54.6083C186.25 54.6083 187.064 53.9683 187.064 53.1861C187.064 52.5817 186.604 52.1194 185.294 51.8706L181.682 51.1595C178.389 50.555 176.512 48.7773 176.512 45.9685C176.512 42.3064 179.663 39.9242 184.16 39.9242C188.587 39.9242 191.526 41.9508 192.234 45.0441L187.064 46.0752C186.887 44.973 185.825 43.9774 184.09 43.9774C182.567 43.9774 182.071 44.7241 182.071 45.3641C182.071 45.8618 182.284 46.3596 183.417 46.6085L187.595 47.4618C190.959 48.1729 192.517 50.1995 192.517 52.8305C192.517 56.7771 189.118 58.8393 184.444 58.8393C180.265 58.8393 176.689 57.3104 176.087 53.6483Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M79.4906 27.4174H73.825V1.81807H79.4906V27.4174Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M88.9289 27.4174H83.2634V9.569H88.9289V27.4174Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M86.0961 1.07143C88.0083 1.07143 89.3892 2.56472 89.3892 4.3069C89.3892 6.12019 88.0083 7.47127 86.0961 7.47127C84.184 7.47127 82.8384 6.12019 82.8384 4.3069C82.8384 2.56472 84.184 1.07143 86.0961 1.07143Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M101.853 22.9731C103.659 22.9731 105.111 22.0131 105.713 19.8443L110.918 20.982C110.033 25.213 106.28 27.9507 101.853 27.9507C96.542 27.9507 92.1512 24.1464 92.1512 18.4932C92.1512 12.8756 96.542 9.03566 101.853 9.03566C106.173 9.03566 109.927 11.7023 110.918 15.8977L105.607 17.1777C105.111 15.0088 103.659 14.0133 101.853 14.0133C99.3039 14.0133 97.6043 15.8977 97.6043 18.4932C97.6043 21.1242 99.3039 22.9731 101.853 22.9731Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M131.601 18.4932V19.9509H118.57C119.03 22.0842 120.482 23.3997 122.394 23.3997C123.704 23.3997 125.227 23.0798 126.183 21.3376L131.211 22.3687C129.689 26.1375 126.466 27.9507 122.394 27.9507C117.26 27.9507 113.011 24.1464 113.011 18.4932C113.011 12.8756 117.26 9.03566 122.43 9.03566C127.458 9.03566 131.495 12.6622 131.601 18.4932ZM122.43 13.6578C120.836 13.6578 119.207 14.6533 118.676 16.4666H126.006C125.475 14.5466 124.059 13.6578 122.43 13.6578Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M145.659 9.03566C149.801 9.03566 152.563 11.9867 152.563 16.4666V27.4174H146.933V17.6754C146.933 15.5777 145.694 14.1555 143.888 14.1555C141.657 14.1555 140.205 15.6844 140.205 19.1332V27.4174H134.54V9.56898H140.205V11.2756C141.551 9.85342 143.428 9.03566 145.659 9.03566Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M155.219 22.7598L160.743 21.622C160.991 23.1509 162.372 23.7197 163.895 23.7197C165.382 23.7197 166.196 23.0798 166.196 22.2975C166.196 21.6931 165.736 21.2309 164.426 20.982L160.814 20.2709C157.521 19.6665 155.644 17.8888 155.644 15.08C155.644 11.4178 158.796 9.03566 163.293 9.03566C167.719 9.03566 170.658 11.0623 171.366 14.1555L166.196 15.1866C166.019 14.0844 164.957 13.0889 163.222 13.0889C161.699 13.0889 161.203 13.8355 161.203 14.4755C161.203 14.9733 161.416 15.4711 162.549 15.7199L166.727 16.5732C170.091 17.2843 171.649 19.311 171.649 21.942C171.649 25.8886 168.25 27.9507 163.576 27.9507C159.397 27.9507 155.821 26.4219 155.219 22.7598Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M192.403 18.4932V19.9509H179.372C179.832 22.0842 181.284 23.3997 183.196 23.3997C184.506 23.3997 186.029 23.0798 186.985 21.3376L192.013 22.3687C190.49 26.1375 187.268 27.9507 183.196 27.9507C178.062 27.9507 173.812 24.1464 173.812 18.4932C173.812 12.8756 178.062 9.03566 183.231 9.03566C188.26 9.03566 192.296 12.6622 192.403 18.4932ZM183.231 13.6578C181.638 13.6578 180.009 14.6533 179.478 16.4666H186.808C186.277 14.5466 184.86 13.6578 183.231 13.6578Z' fill='%23AC00FC'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.58723 46.6197C11.4115 46.6197 14.1734 49.6063 14.1734 53.0907C14.1734 56.7172 11.4115 59.4194 7.58723 59.4194C3.76298 59.4194 1.07184 56.7172 1.07184 53.0907C1.07184 49.6063 3.76298 46.6197 7.58723 46.6197ZM38.7574 9.64285C52.9213 9.64285 64.04 20.6648 64.04 34.6022C64.04 48.4685 52.9213 59.4194 38.7574 59.4194C24.5936 59.4194 13.4749 48.4685 13.4749 34.6022C13.4749 20.6648 24.5936 9.64285 38.7574 9.64285ZM38.7574 48.6819C46.4768 48.6819 52.3548 42.7087 52.3548 34.6022C52.3548 26.4247 46.4768 20.3804 38.7574 20.3804C31.0381 20.3804 25.1601 26.4247 25.1601 34.6022C25.1601 42.7087 31.0381 48.6819 38.7574 48.6819Z' fill='%23AC00FC'/%3e%3c/svg%3e";

var ExplorerLayoutHeaderPropTypes = {
  headerRight: PropTypes.node,
  logoAction: PropTypes.func
};

var _excluded$p = ["headerRight", "logoAction"];
var StyledHeader = styled(Grid).attrs(function () {
  return {
    container: true,
    alignItems: "center"
  };
}).withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1amm62j-0"
})(["height:128px;", "{height:96px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.down("md");
});
var StyledLogo = styled(Image).attrs(function () {
  return {
    alt: "Logo",
    src: img$3
  };
}).withConfig({
  displayName: "Header__StyledLogo",
  componentId: "sc-1amm62j-1"
})(["width:155px;", "{width:103px;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.down("md");
});
var ExplorerLayoutHeader = function ExplorerLayoutHeader(_ref3) {
  var headerRight = _ref3.headerRight,
      logoAction = _ref3.logoAction,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$p);

  return /*#__PURE__*/react.createElement(StyledHeader, props, /*#__PURE__*/react.createElement(Grid, {
    item: true,
    lg: 9,
    xs: 6
  }, /*#__PURE__*/react.createElement(StyledLogo, {
    onClick: logoAction
  })), /*#__PURE__*/react.createElement(Grid, {
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

var _excluded$o = ["ads", "content", "extraContent", "extraSidebar", "footerContent", "headerLogoAction", "headerRight", "loading", "sidebar"];
var Content$3 = styled(Grid).attrs(function () {
  return {
    container: true
  };
}).withConfig({
  displayName: "Explorer__Content",
  componentId: "sc-9py360-0"
})(["padding-top:", ";padding-bottom:", ";", "{padding-top:", ";}", "{padding-right:", ";}"], function (_ref) {
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
var poweredBy = /*#__PURE__*/react.createElement(Text, {
  color: "textSecondary",
  fontStyle: "italic"
}, "Powered by", /*#__PURE__*/react.createElement(Text, {
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
      props = _objectWithoutPropertiesLoose(_ref7, _excluded$o);

  if (loading) return /*#__PURE__*/react.createElement(PageLoading, {
    fullScreen: true
  });
  return /*#__PURE__*/react.createElement(MuiContainer, _extends({
    maxWidth: "lg"
  }, props), /*#__PURE__*/react.createElement(ExplorerLayoutHeader, {
    logoAction: headerLogoAction,
    headerRight: headerRight
  }), /*#__PURE__*/react.createElement(Content$3, null, /*#__PURE__*/react.createElement(Hidden, {
    mdDown: true
  }, /*#__PURE__*/react.createElement(Grid, {
    item: true,
    lg: 9
  }, content, extraContent), /*#__PURE__*/react.createElement(Grid, {
    item: true,
    lg: 3
  }, sidebar, extraSidebar, ads)), /*#__PURE__*/react.createElement(Hidden, {
    lgUp: true
  }, /*#__PURE__*/react.createElement(Grid, {
    item: true,
    xs: 12
  }, content), /*#__PURE__*/react.createElement(Grid, {
    container: true,
    alignItems: "center",
    justify: "space-between",
    spacing: 4
  }, /*#__PURE__*/react.createElement(Grid, {
    item: true,
    md: 6,
    xs: 12
  }, sidebar), /*#__PURE__*/react.createElement(Grid, {
    item: true,
    md: 6,
    xs: 12
  }, extraSidebar)), /*#__PURE__*/react.createElement(Grid, {
    item: true,
    xs: 12
  }, extraContent, ads))), footerContent && /*#__PURE__*/react.createElement(ExplorerLayoutFooter, null, footerContent || poweredBy));
};
ExplorerLayout.propTypes = ExplorerLayoutPropTypes;
ExplorerLayout.defaultProps = {
  footerContent: poweredBy
};

var LinkPropTypes = {
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  Component: PropTypes.element.isRequired,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  passHref: PropTypes.bool
};
var LinkDefaultProps = {
  passHref: true
};

var _excluded$n = ["block", "className", "children", "Component", "href"];
var StyledLink = styled.a.withConfig({
  displayName: "Link__StyledLink",
  componentId: "sc-9lvaa8-0"
})(["color:initial;text-decoration:none;", " ", " ", ""], function (_ref) {
  var block = _ref.block;
  return block && "display: block;";
}, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Link = function Link(_ref2) {
  var block = _ref2.block,
      className = _ref2.className,
      children = _ref2.children,
      Component = _ref2.Component,
      href = _ref2.href,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded$n);

  return /*#__PURE__*/react.createElement(Component, _extends({
    href: href
  }, props), /*#__PURE__*/react.createElement(StyledLink, {
    block: block,
    className: className,
    href: (href == null ? void 0 : href.pathname) || href
  }, children));
};
Link.propTypes = LinkPropTypes;
Link.defaultProps = LinkDefaultProps;

var MarketPlaceItemPropTypes = {
  action: PropTypes.func,
  actionTitle: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string
  })),
  coverSrc: PropTypes.string,
  coverPlaceholderSrc: PropTypes.string,
  details: PropTypes.array,
  hoverEffect: PropTypes.bool,
  iconColor: PropTypes.string,
  iconName: PropTypes.string,
  iconPrefix: PropTypes.string,
  megaTitle: PropTypes.string,
  price: PropTypes.string,
  priceLabel: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf("legacy", "modern", "modernHorizontal")
};
var MarketPlaceItemDefaultProps = {
  actionTitle: "More info",
  badges: [],
  details: [],
  hoverEffect: true,
  type: "modern"
};

var img$2 = "data:image/svg+xml,%3csvg width='92' height='109' viewBox='0 0 92 109' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M32 2.00015C36 3.00015 36 10.0002 36 10.0002C36 10.0002 37.2536 109.627 34 108C33.7765 107.888 22.7735 108 22 108C14 108 22 3.00015 22 3.00015C24 2.00015 28 1.00015 32 2.00015Z' fill='white' stroke='%23F0F0F4' stroke-width='1.5' stroke-linejoin='round'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M27 8.11923C27 4.39928 30.3502 1.57581 34.0163 2.20593L84.3551 10.8579C88.1942 11.5178 91 14.8469 91 18.7423V100C91 104.418 87.4183 108 83 108H33C29.6863 108 27 105.314 27 102V8.11923Z' fill='white' stroke='%23F0F0F4' stroke-width='1.5' stroke-linejoin='round'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M27 10.0534C27 5.75785 22.6182 2.85385 18.6622 4.52755L5.88288 9.93417C2.92312 11.1864 1 14.0882 1 17.3019V100C1 104.418 4.58172 108 9 108H21C24.3137 108 27 105.314 27 102V10.0534Z' fill='white' stroke='%23F0F0F4' stroke-width='1.5' stroke-linejoin='round'/%3e%3c/svg%3e";

var _excluded$m = ["iconName", "iconPrefix", "iconColor"];
var LicenseBoxWrapper = styled.div.withConfig({
  displayName: "LicenseBox__LicenseBoxWrapper",
  componentId: "sc-6tcqye-0"
})(["margin-top:-", ";margin-bottom:", ";position:relative;background-image:url(\"", "\");background-size:90px 108px;background-repeat:no-repeat;width:90px;height:108px;display:inline-flex;align-items:center;justify-content:center;"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(10);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2);
}, "" + img$2);
var StyledIcon$3 = styled(Icon).withConfig({
  displayName: "LicenseBox__StyledIcon",
  componentId: "sc-6tcqye-1"
})(["font-size:24px;margin-left:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(6);
});
var LicenseBox = function LicenseBox(_ref4) {
  var iconName = _ref4.iconName,
      iconPrefix = _ref4.iconPrefix,
      iconColor = _ref4.iconColor,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded$m);

  return /*#__PURE__*/react.createElement(LicenseBoxWrapper, props, /*#__PURE__*/react.createElement(StyledIcon$3, {
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

var _excluded$l = ["ActionWrapper", "action", "actionTitle", "dataCy", "details", "iconName", "iconPrefix", "iconColor", "megaTitle", "subTitle", "title"];
var StyledMarketPlaceItem$2 = styled(BoxBase).withConfig({
  displayName: "Legacy__StyledMarketPlaceItem",
  componentId: "sc-v1aqdk-0"
})(["border-radius:8px;overflow:initial;min-height:240px;text-align:center;margin-top:", ";width:100%;"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(10);
});
var Content$2 = styled.div.withConfig({
  displayName: "Legacy__Content",
  componentId: "sc-v1aqdk-1"
})(["width:100%;padding:", ";box-sizing:border-box;", ""], function (_ref2) {
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
      props = _objectWithoutPropertiesLoose(_ref4, _excluded$l);

  var actionButton = /*#__PURE__*/react.createElement(Button$1, {
    block: true,
    content: actionTitle,
    color: "subtle",
    onClick: action
  });
  return /*#__PURE__*/react.createElement(StyledMarketPlaceItem$2, _extends({
    "data-cy": dataCy
  }, props), /*#__PURE__*/react.createElement(LicenseBox, {
    iconName: iconName,
    iconPrefix: iconPrefix,
    iconColor: iconColor
  }), /*#__PURE__*/react.createElement(Content$2, null, /*#__PURE__*/react.createElement(Text, {
    content: megaTitle,
    color: "textSecondary",
    noWrap: true
  }), /*#__PURE__*/react.createElement(H3, {
    content: title,
    noWrap: true
  }), /*#__PURE__*/react.createElement(Text, {
    content: subTitle,
    color: "textSecondary",
    fontSize: "sm",
    fontStyle: "italic",
    noWrap: true
  })), /*#__PURE__*/react.createElement(Divider, null), /*#__PURE__*/react.createElement(Content$2, {
    initialTextAlign: true
  }, /*#__PURE__*/react.createElement(DetailsTable, {
    justifyBetween: true,
    rows: details
  }), ActionWrapper ? /*#__PURE__*/react.createElement(ActionWrapper, null, actionButton) : actionButton));
};
LegacyItem.propTypes = MarketPlaceItemPropTypes;
LegacyItem.defaultProps = MarketPlaceItemDefaultProps;

var _excluded$k = ["imgSrc", "placeholderSrc"];
var StyledImage$2 = styled(Image).withConfig({
  displayName: "Cover__StyledImage",
  componentId: "sc-hgvfqd-0"
})(["width:100%;object-fit:contain;z-index:2;"]);
var Cover$1 = function Cover(_ref) {
  var imgSrc = _ref.imgSrc,
      placeholderSrc = _ref.placeholderSrc,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$k);

  return /*#__PURE__*/react.createElement(StyledImage$2, _extends({
    src: imgSrc || placeholderSrc
  }, props));
};
Cover$1.propTypes = {
  imgSrc: PropTypes.string,
  placeholderSrc: PropTypes.string
};
Cover$1.defaultProps = {
  imgSrc: "",
  placeholderSrc: ""
};

var _excluded$j = ["badges", "coverSrc", "coverPlaceholderSrc", "dataCy", "details", "highlight", "megaTitle", "subTitle", "title", "Wrapper"];
var StyledMarketPlaceItem$1 = styled(BoxBase).withConfig({
  displayName: "Modern__StyledMarketPlaceItem",
  componentId: "sc-1olkxan-0"
})(["border-radius:8px;overflow:hidden;min-height:112px;width:100%;display:flex;flex-direction:column;transition:all 200ms ease-in-out;", ""], function (_ref) {
  var hoverEffect = _ref.hoverEffect;
  return hoverEffect && css(["&:hover{transform:scale(1.03);}"]);
});
var Content$1 = styled.div.withConfig({
  displayName: "Modern__Content",
  componentId: "sc-1olkxan-1"
})(["flex:1;width:100%;padding:", ";box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;z-index:1;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(4);
});
var Badges = styled.div.withConfig({
  displayName: "Modern__Badges",
  componentId: "sc-1olkxan-2"
})(["margin-top:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(4);
});
var Highlight$1 = styled.div.withConfig({
  displayName: "Modern__Highlight",
  componentId: "sc-1olkxan-3"
})(["display:flex;justify-content:center;align-items:center;height:16px;background-color:", ";z-index:1;"], function (_ref4) {
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
      props = _objectWithoutPropertiesLoose(_ref5, _excluded$j);

  var Item = function Item() {
    return /*#__PURE__*/react.createElement(StyledMarketPlaceItem$1, _extends({
      "data-cy": dataCy
    }, props), /*#__PURE__*/react.createElement(Cover$1, {
      imgSrc: coverSrc,
      placeholderSrc: coverPlaceholderSrc
    }), highlight && /*#__PURE__*/react.createElement(Highlight$1, null, /*#__PURE__*/react.createElement(Text, {
      colorWhite: true,
      content: highlight,
      fontWeight: "bold",
      fontSize: "sm"
    })), /*#__PURE__*/react.createElement(Content$1, null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(H3, {
      content: title,
      noWrap: true
    }), /*#__PURE__*/react.createElement(Text, {
      content: megaTitle,
      color: "textSecondary",
      fontSize: "sm",
      fontStyle: "italic",
      noWrap: true
    }), /*#__PURE__*/react.createElement(Text, {
      content: subTitle,
      color: "textSecondary",
      fontSize: "sm",
      fontStyle: "italic",
      noWrap: true
    })), /*#__PURE__*/react.createElement(Badges, null, badges.map(function (badge) {
      return /*#__PURE__*/react.createElement(TinyBadge, _extends({}, badge, {
        mr: 1,
        mb: 1
      }));
    })), /*#__PURE__*/react.createElement(DetailsTable, {
      justifyBetween: true,
      labelFontSize: "sm",
      mt: 4,
      size: "sm",
      rows: details
    })));
  };

  return Wrapper ? /*#__PURE__*/react.createElement(Wrapper, null, /*#__PURE__*/react.createElement(Item, null)) : /*#__PURE__*/react.createElement(Item, null);
};
ModernItem.propTypes = MarketPlaceItemPropTypes;
ModernItem.defaultProps = MarketPlaceItemDefaultProps;

var _excluded$i = ["imgSrc", "placeholderSrc"];
var Wrapper$5 = styled.div.withConfig({
  displayName: "Cover__Wrapper",
  componentId: "sc-1p24m3b-0"
})(["position:relative;display:flex;align-items:center;justify-content:center;min-width:140px;width:140px;height:140px;"]);
var BGImage = styled.div.withConfig({
  displayName: "Cover__BGImage",
  componentId: "sc-1p24m3b-1"
})(["position:absolute;top:0;right:0;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center;width:100%;height:100%;filter:blur(8px);-webkit-filter:blur(8px);z-index:1;"], function (_ref) {
  var imgSrc = _ref.imgSrc;
  return imgSrc;
});
var StyledImage$1 = styled(Image).withConfig({
  displayName: "Cover__StyledImage",
  componentId: "sc-1p24m3b-2"
})(["height:100%;width:100%;object-fit:contain;z-index:2;"]);
var Cover = function Cover(_ref2) {
  var imgSrc = _ref2.imgSrc,
      placeholderSrc = _ref2.placeholderSrc,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded$i);

  return /*#__PURE__*/react.createElement(Wrapper$5, props, /*#__PURE__*/react.createElement(BGImage, {
    imgSrc: imgSrc || placeholderSrc
  }), /*#__PURE__*/react.createElement(StyledImage$1, {
    src: imgSrc || placeholderSrc
  }));
};
Cover.propTypes = {
  imgSrc: PropTypes.string,
  placeholderSrc: PropTypes.string
};
Cover.defaultProps = {
  imgSrc: "",
  placeholderSrc: ""
};

var _excluded$h = ["ActionWrapper", "action", "actionTitle", "badges", "coverSrc", "coverPlaceholderSrc", "dataCy", "details", "highlight", "megaTitle", "price", "priceLabel", "subTitle", "title", "Wrapper"];
var StyledMarketPlaceItem = styled(BoxBase).withConfig({
  displayName: "ModernHorizontal__StyledMarketPlaceItem",
  componentId: "sc-3m7a7f-0"
})(["border-radius:8px;height:140px;width:100%;display:flex;align-items:center;transition:all 200ms ease-in-out;:not(:last-child){margin-bottom:", ";}", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
}, function (_ref2) {
  var hoverEffect = _ref2.hoverEffect;
  return hoverEffect && css(["&:hover{transform:scale(1.02);}"]);
});
var Content = styled(Flex).attrs(function () {
  return {
    container: true,
    alignItems: "flex-start",
    justify: "space-between"
  };
}).withConfig({
  displayName: "ModernHorizontal__Content",
  componentId: "sc-3m7a7f-1"
})(["width:100%;height:100%;padding:", ";box-sizing:border-box;z-index:1;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing(4);
});
var Highlight = styled.div.withConfig({
  displayName: "ModernHorizontal__Highlight",
  componentId: "sc-3m7a7f-2"
})(["display:flex;align-items:flex-end;background-color:", ";padding:", ";height:36px;border-radius:8px;margin-top:-16px;z-index:1;"], function (_ref4) {
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
      props = _objectWithoutPropertiesLoose(_ref6, _excluded$h);

  var actionButton = /*#__PURE__*/react.createElement(Button$1, {
    block: true,
    content: actionTitle,
    color: "subtle",
    onClick: action
  });

  var Item = function Item() {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(StyledMarketPlaceItem, _extends({
      "data-cy": dataCy
    }, props), /*#__PURE__*/react.createElement(Cover, {
      imgSrc: coverSrc,
      placeholderSrc: coverPlaceholderSrc
    }), /*#__PURE__*/react.createElement(Content, null, /*#__PURE__*/react.createElement(Flex, {
      item: true,
      xs: 12,
      md: 7,
      lg: 8,
      pl: 4
    }, /*#__PURE__*/react.createElement(H3, {
      content: title,
      noWrap: true
    }), /*#__PURE__*/react.createElement(Text, {
      content: megaTitle,
      color: "textSecondary",
      fontSize: "sm",
      fontStyle: "italic",
      noWrap: true
    }), /*#__PURE__*/react.createElement(Text, {
      content: subTitle,
      color: "textSecondary",
      fontSize: "sm",
      fontStyle: "italic",
      noWrap: true
    }), /*#__PURE__*/react.createElement(Hidden, {
      smDown: true
    }, /*#__PURE__*/react.createElement(DetailsTable, {
      labelFontSize: "sm",
      mt: 4,
      size: "sm",
      rows: details
    }))), /*#__PURE__*/react.createElement(Hidden, {
      smDown: true
    }, /*#__PURE__*/react.createElement(Flex, {
      item: true
    }, badges.map(function (badge) {
      return /*#__PURE__*/react.createElement(TinyBadge, _extends({}, badge, {
        dBlock: true,
        mb: 1
      }));
    }))), /*#__PURE__*/react.createElement(Flex, {
      item: true,
      lg: 2,
      md: 3,
      xs: 11,
      container: true,
      justify: "space-between",
      alignItems: "flex-start",
      h100: true
    }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Text, {
      content: priceLabel,
      fontStyle: "italic",
      fontSize: "sm",
      mb: 2
    }), /*#__PURE__*/react.createElement(H3, {
      content: price,
      color: "primary",
      noWrap: true
    })), ActionWrapper ? /*#__PURE__*/react.createElement(ActionWrapper, null, actionButton) : actionButton))), highlight && /*#__PURE__*/react.createElement(Highlight, null, /*#__PURE__*/react.createElement(Text, {
      color: "primary",
      content: highlight,
      fontWeight: "bold",
      fontSize: "sm"
    })));
  };

  return Wrapper ? /*#__PURE__*/react.createElement(Wrapper, null, /*#__PURE__*/react.createElement(Item, null)) : /*#__PURE__*/react.createElement(Item, null);
};
ModernHorizontalItem.propTypes = MarketPlaceItemPropTypes;
ModernHorizontalItem.defaultProps = MarketPlaceItemDefaultProps;

var _excluded$g = ["type"];
var MarketPlaceItem = function MarketPlaceItem(_ref) {
  var type = _ref.type,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$g);

  if (type === "legacy") return /*#__PURE__*/react.createElement(LegacyItem, props);
  if (type === "modernHorizontal") return /*#__PURE__*/react.createElement(ModernHorizontalItem, props);
  return /*#__PURE__*/react.createElement(ModernItem, props);
};
MarketPlaceItem.propTypes = MarketPlaceItemPropTypes;
MarketPlaceItem.defaultProps = MarketPlaceItemDefaultProps;

var MINI_SHARE_MODULE_SHARE_OPTIONS = ["twitter", "facebook", "linkedin"];

var ShareModulePropTypes$1 = _extends({
  iconProps: PropTypes.shape(ButtonBasePropTypes),
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  shareOptions: PropTypes.arrayOf(PropTypes.oneOf(MINI_SHARE_MODULE_SHARE_OPTIONS)),
  url: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ShareModuleDefaultProps$1 = {
  orientation: "vertical",
  shareOptions: MINI_SHARE_MODULE_SHARE_OPTIONS,
  url: "#"
};

var _excluded$f = ["iconProps", "orientation", "shareOptions", "url"];
var BUTTON_SIZE = 32;
var StyledPopover = styled(MuiPopover).withConfig({
  displayName: "MiniShareModule__StyledPopover",
  componentId: "sc-dq8hyk-0"
})([".MuiPopover-paper{border-radius:8px;background-color:", ";box-shadow:0px 16px 56px rgba(41,40,57,0.16);padding:", ";margin-top:", "px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(2);
}, BUTTON_SIZE + 8);
var StyledButton = styled(Button$1).withConfig({
  displayName: "MiniShareModule__StyledButton",
  componentId: "sc-dq8hyk-1"
})(["&&{min-width:", "px;max-width:", "px;height:", "px;}", " ", ""], BUTTON_SIZE, BUTTON_SIZE, BUTTON_SIZE, function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var Container$3 = styled.div.withConfig({
  displayName: "MiniShareModule__Container",
  componentId: "sc-dq8hyk-2"
})(["display:inline-flex;align-items:center;flex-direction:", ";a{display:block;cursor:pointer;svg{color:", ";transition:all 0.1s ease-in-out;}:hover{svg{color:", ";}}:not(:last-child){", "}}"], function (_ref3) {
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
  if (orientation === "vertical") return css(["margin-bottom:", ";"], theme.spacing(2));
  return css(["margin-right:", ";"], theme.spacing(2));
});
var MiniShareModule = function MiniShareModule(_ref7) {
  var iconProps = _ref7.iconProps,
      orientation = _ref7.orientation,
      shareOptions = _ref7.shareOptions,
      url = _ref7.url,
      props = _objectWithoutPropertiesLoose(_ref7, _excluded$f);

  var _useState = react.useState(null),
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
    return /*#__PURE__*/react.createElement("a", {
      href: href,
      rel: "noreferrer",
      target: "_blank"
    }, /*#__PURE__*/react.createElement(Icon, _extends({
      icon: icon,
      prefix: "fab"
    }, iconProps)));
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(StyledButton, _extends({
    icon: "share-alt",
    onClick: handlePopoverOpen,
    size: "sm"
  }, props)), /*#__PURE__*/react.createElement(StyledPopover, {
    id: "share-module-popover",
    open: !!anchorEl,
    anchorEl: anchorEl,
    onClose: handlePopoverClose
  }, /*#__PURE__*/react.createElement(Container$3, {
    orientation: orientation
  }, shareOptions.includes("twitter") && renderIcon("twitter", "https://twitter.com/intent/tweet?url=" + encodedUrl), shareOptions.includes("facebook") && renderIcon("facebook-f", "https://www.facebook.com/sharer.php?u=" + encodedUrl), shareOptions.includes("linkedin") && renderIcon("linkedin-in", "https://www.linkedin.com/sharing/share-offsite/?url=" + encodedUrl))));
};
MiniShareModule.propTypes = ShareModulePropTypes$1;
MiniShareModule.defaultProps = ShareModuleDefaultProps$1;

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

var _excluded$e = ["buttonAction", "buttonHref", "buttonText", "dataCy", "text"];
var Wrapper$4 = styled.div.withConfig({
  displayName: "NoItem__Wrapper",
  componentId: "sc-1jez7tn-0"
})(["text-align:center;", " ", " ", ""], function (theme) {
  return COLOR(theme);
}, function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var StyledIcon$2 = styled(Icon).attrs(function () {
  return {
    colorGrayRegular: true,
    icon: "sad-cry"
  };
}).withConfig({
  displayName: "NoItem__StyledIcon",
  componentId: "sc-1jez7tn-1"
})(["font-size:32px;"]);
var NoItem = function NoItem(_ref) {
  var buttonAction = _ref.buttonAction,
      buttonHref = _ref.buttonHref,
      buttonText = _ref.buttonText,
      dataCy = _ref.dataCy,
      text = _ref.text,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$e);

  return /*#__PURE__*/react.createElement(Wrapper$4, _extends({
    "data-cy": dataCy
  }, props), /*#__PURE__*/react.createElement(StyledIcon$2, null), /*#__PURE__*/react.createElement(Text, {
    fontWeight: "bold",
    my: 2
  }, text), buttonText && /*#__PURE__*/react.createElement(Button$1, {
    color: "subtle",
    href: buttonHref,
    onClick: buttonAction,
    size: "xs"
  }, buttonText));
};
NoItem.propTypes = NoItemPropTypes;
NoItem.defaultProps = NoItemDefaultProps;

var PageFigurePropTypes = _extends({
  content: PropTypes.node,
  children: PropTypes.node
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var PageFigureDefaultProps = {};

var _excluded$d = ["content", "children"];
var StyledPageFigure = styled.div.withConfig({
  displayName: "PageFigure__StyledPageFigure",
  componentId: "sc-1a8ool8-0"
})(["width:100vw;margin-left:calc((100% - 100vw) / 2);", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var PageFigure = function PageFigure(_ref) {
  var content = _ref.content,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$d);

  return /*#__PURE__*/react.createElement(StyledPageFigure, props, content || children);
};
PageFigure.propTypes = PageFigurePropTypes;
PageFigure.defaultProps = PageFigureDefaultProps;

var PageLoadingPropTypes = {
  fullScreen: PropTypes.bool,
  message: PropTypes.string,
  transparent: PropTypes.bool
};
var PageLoadingDefaultProps = {};

var _excluded$c = ["message"];
var StyledLoading = styled.div.withConfig({
  displayName: "PageLoading__StyledLoading",
  componentId: "sc-8xofl-0"
})(["position:", ";top:0;right:0;left:0;min-width:", ";min-height:", ";width:100%;height:100%;background-color:", ";display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:", ";img{max-width:25%;}"], function (_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref6, _excluded$c);

  var _useTheme = useTheme(),
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
      return /*#__PURE__*/react.createElement("img", {
        alt: "Loading...",
        src: loadingIndicator
      });
    };
  }

  return /*#__PURE__*/react.createElement(StyledLoading, props, /*#__PURE__*/react.createElement(Spinner, null), msg && /*#__PURE__*/react.createElement(Text, {
    color: "primary",
    content: msg,
    fontWeight: "bold",
    mt: 4
  }));
};
PageLoading.propTypes = PageLoadingPropTypes;
PageLoading.defaultProps = PageLoadingDefaultProps;

var pageMetaPropTypes = {
  children: PropTypes.node,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  Wrapper: PropTypes.node
};
var pageMetaDefaultProps = {};

var PageMeta = function PageMeta(_ref) {
  var children = _ref.children,
      description = _ref.description,
      imgSrc = _ref.imgSrc,
      title = _ref.title,
      url = _ref.url,
      Wrapper = _ref.Wrapper;
  var meta = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("title", null, title), /*#__PURE__*/react.createElement("meta", {
    name: "title",
    content: title,
    key: "metaTitle"
  }), /*#__PURE__*/react.createElement("meta", {
    name: "description",
    content: description,
    key: "metaDesc"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:type",
    content: "website",
    key: "ogType"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:url",
    content: url,
    key: "ogUrl"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:title",
    content: title,
    key: "ogTitle"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:description",
    content: description,
    key: "ogDesc"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "og:image",
    content: imgSrc,
    key: "ogImage"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "twitter:card",
    content: "summary_large_image",
    key: "twCard"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "twitter:url",
    content: url,
    key: "twUrl"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "twitter:title",
    content: title,
    key: "twTitle"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "twitter:description",
    content: description,
    key: "twDesc"
  }), /*#__PURE__*/react.createElement("meta", {
    property: "twitter:image",
    content: imgSrc,
    key: "twImage"
  }), children);
  return Wrapper ? /*#__PURE__*/react.createElement(Wrapper, null, meta) : meta;
};
PageMeta.propTypes = pageMetaPropTypes;
PageMeta.defaultProps = pageMetaDefaultProps;

var Container$2 = function Container(_ref) {
  var children = _ref.children,
      isFinished = _ref.isFinished,
      animationDuration = _ref.animationDuration;
  return /*#__PURE__*/react.createElement("div", {
    style: {
      opacity: isFinished ? 0 : 1,
      pointerEvents: "none",
      transition: "opacity " + animationDuration + "ms linear"
    }
  }, children);
};
Container$2.propTypes = {
  animationDuration: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  isFinished: PropTypes.bool.isRequired
};

var StyledBar = styled.div.withConfig({
  displayName: "Bar__StyledBar",
  componentId: "sc-rv1zwu-0"
})(["background-color:", ";height:2px;left:0;position:fixed;top:0;width:100%;z-index:1031;"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.primary.main;
});
var InnerBar = styled.div.withConfig({
  displayName: "Bar__InnerBar",
  componentId: "sc-rv1zwu-1"
})(["box-shadow:", ";display:block;height:100%;opacity:1;position:absolute;right:0;transform:rotate(3deg) translate(0px,-4px);width:100;"], function (_ref2) {
  var theme = _ref2.theme;
  return "0 0 10px " + theme.palette.primary.main + ", 0 0 5px  " + theme.palette.primary.main;
});
var Bar = function Bar(_ref3) {
  var animationDuration = _ref3.animationDuration,
      progress = _ref3.progress;
  return /*#__PURE__*/react.createElement(StyledBar, {
    style: {
      marginLeft: (-1 + progress) * 100 + "%",
      transition: "margin-left " + animationDuration + "ms linear"
    }
  }, /*#__PURE__*/react.createElement(InnerBar, null));
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

  return /*#__PURE__*/react.createElement(Container$2, {
    animationDuration: animationDuration,
    isFinished: isFinished
  }, /*#__PURE__*/react.createElement(Bar, {
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
  var isAnimating = _ref.isAnimating;
      _ref.instanceKey;
      var listener = _ref.listener;

  var _useState = react.useState(false),
      isRouteChanging = _useState[0],
      setIsRouteChanging = _useState[1];

  var _useState2 = react.useState(new Date().getTime());
      _useState2[0];
      var setLoadingKey = _useState2[1];

  var routeChangeStartHandler = function routeChangeStartHandler() {
    setIsRouteChanging(true);
    setLoadingKey(new Date().getTime());
  };

  var routeChangeEndHandler = function routeChangeEndHandler() {
    setIsRouteChanging(false);
  };

  react.useEffect(function () {
    if (listener) {
      listener(routeChangeStartHandler, routeChangeEndHandler);
    }
  }, []);
  return /*#__PURE__*/react.createElement(Progress, {
    isAnimating: isRouteChanging || isAnimating
  });
};
PageProgressBar.propTypes = PageProgressBarPropTypes;
PageProgressBar.defaultProps = PageProgressBarDefaultProps;

var _excluded$b = ["children"];
var StyledContent$1 = styled.div.withConfig({
  displayName: "PageTransition__StyledContent",
  componentId: "sc-eln28z-0"
})(["width:100%;height:auto;transition:filter ", "ms ease-in-out;", ";"], function (_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$b);

  var _useState = react.useState(false),
      mounted = _useState[0],
      setMounted = _useState[1];

  react.useEffect(function () {
    setMounted(true);
    return function () {
      setMounted(false);
    };
  }, []);
  return /*#__PURE__*/react.createElement(Transition, {
    in: mounted,
    timeout: duration,
    unmountOnExit: true
  }, function (state) {
    return /*#__PURE__*/react.createElement(StyledContent$1, _extends({
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

var _excluded$a = ["currentPage", "itemProps", "ItemWrapper", "nextText", "pageCount", "prevText"];
var StyledPagination = styled(MuiPagination).withConfig({
  displayName: "Pagination__StyledPagination",
  componentId: "sc-1ho9rhv-0"
})(["display:flex;align-items:center;justify-content:center;", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StyledPaginationItem = styled(PaginationItem).withConfig({
  displayName: "Pagination__StyledPaginationItem",
  componentId: "sc-1ho9rhv-1"
})(["&&{width:24px;min-width:24px;height:24px;background:", ";border-radius:8px;padding:0;", "}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.gray.semiLight;
}, function (_ref2) {
  var selected = _ref2.selected,
      theme = _ref2.theme;
  return selected && css(["background:", ";font-weight:600;"], theme.palette.gray.regular);
});

var prevButton = function prevButton(prevText, disabled, item) {
  return /*#__PURE__*/react.createElement(OutlineButton, _extends({}, item, {
    content: prevText,
    color: "secondary",
    disabled: disabled,
    mr: 6,
    size: "sm",
    startIcon: "chevron-left"
  }));
};

var nextButton = function nextButton(nextText, disabled, item) {
  return /*#__PURE__*/react.createElement(OutlineButton, _extends({}, item, {
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
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$a);

  var _renderItem = function renderItem(item) {
    if (item.type === "previous") return prevButton(prevText, currentPage === 1, item);
    if (item.type === "next") return nextButton(nextText, currentPage === pageCount, item);
    return /*#__PURE__*/react.createElement(StyledPaginationItem, _extends({}, item, itemProps));
  };

  return /*#__PURE__*/react.createElement(StyledPagination, _extends({
    page: currentPage,
    count: pageCount,
    renderItem: function renderItem(item) {
      return ItemWrapper ? /*#__PURE__*/react.createElement(ItemWrapper, {
        page: item.page
      }, _renderItem(item)) : _renderItem(item);
    }
  }, props));
};
Pagination.propTypes = PaginationPropTypes;
Pagination.defaultProps = PaginationDefaultProps;

var ProfilePropTypes = _extends({
  coverSrc: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  shareOnClick: PropTypes.func,
  shareUrl: PropTypes.string,
  socialLinks: PropTypes.array
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var ProfileDefaultProps = {
  socialLinks: []
};

var _excluded$9 = ["coverSrc", "description", "location", "name", "shareOnClick", "shareUrl", "socialLinks"];
var Wrapper$3 = styled.div.withConfig({
  displayName: "Profile__Wrapper",
  componentId: "sc-kdr8z7-0"
})(["display:flex;flex-direction:column;align-items:center;text-align:center;", " ", ""], function (theme) {
  return DISPLAY(theme);
}, function (theme) {
  return SPACER(theme);
});
var AvatarWrapper = styled.div.withConfig({
  displayName: "Profile__AvatarWrapper",
  componentId: "sc-kdr8z7-1"
})(["position:relative;width:120px;height:120px;margin-bottom:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(6);
});
var Avatar = styled(Image).attrs(function () {
  return {
    mb: 6
  };
}).withConfig({
  displayName: "Profile__Avatar",
  componentId: "sc-kdr8z7-2"
})(["width:100%;height:100%;object-fit:cover;border-radius:32px;"]);
var Social = styled.a.withConfig({
  displayName: "Profile__Social",
  componentId: "sc-kdr8z7-3"
})(["display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:8px;outline:none;border:none;cursor:pointer;transition:all 0.1s ease-in-out;background-color:", ";color:", ";svg{color:", ";}:hover{opacity:0.7;}", ""], function (_ref2) {
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
  return fixed && css(["position:absolute;top:", "px;right:", "px;"], offset, offset);
});
var Profile = function Profile(_ref6) {
  var coverSrc = _ref6.coverSrc,
      description = _ref6.description,
      location = _ref6.location,
      name = _ref6.name,
      shareOnClick = _ref6.shareOnClick,
      shareUrl = _ref6.shareUrl,
      socialLinks = _ref6.socialLinks,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded$9);

  return /*#__PURE__*/react.createElement(Wrapper$3, props, /*#__PURE__*/react.createElement(AvatarWrapper, null, /*#__PURE__*/react.createElement(Avatar, {
    src: coverSrc,
    alt: name
  }), (shareOnClick || shareUrl) && /*#__PURE__*/react.createElement(Social, {
    as: shareOnClick ? "button" : "a",
    colorPrimary: true,
    fixed: true,
    href: shareUrl,
    onClick: shareOnClick,
    offset: -16,
    target: "_blank"
  }, /*#__PURE__*/react.createElement(Icon, {
    icon: "share-alt"
  }))), /*#__PURE__*/react.createElement(H1, {
    content: name,
    mb: 2
  }), /*#__PURE__*/react.createElement(Text, {
    color: "textSecondary",
    content: location,
    fontSize: "sm",
    fontStyle: "static",
    mb: 6
  }), /*#__PURE__*/react.createElement(Paragraph, {
    color: "textSecondary",
    content: description,
    fontWeight: "light"
  }), socialLinks.length > 0 && /*#__PURE__*/react.createElement(Flex, {
    container: true,
    justify: "center",
    spacing: 2
  }, socialLinks.map(function (_ref7) {
    var icon = _ref7.icon,
        iconPrefix = _ref7.iconPrefix,
        url = _ref7.url;
    return /*#__PURE__*/react.createElement(Flex, {
      item: true,
      key: "icon"
    }, /*#__PURE__*/react.createElement(Social, {
      href: url,
      target: "_blank"
    }, /*#__PURE__*/react.createElement(Icon, {
      icon: icon,
      prefix: iconPrefix || "fab"
    })));
  })));
};
Profile.propTypes = ProfilePropTypes;
Profile.defaultProps = ProfileDefaultProps;

var SearchBarPropTypes = _extends({
  filterButtonText: PropTypes.string,
  filterItems: PropTypes.array,
  noBorderRadius: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  showFilter: PropTypes.nool,
  value: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var SearchBarDefaultProps = {
  filterButtonText: "Filter",
  filterItems: [],
  placeholder: "Type and press Enter"
};

var _excluded$8 = ["inputProps", "noBorderRadius", "onChange", "onSubmit", "placeholder", "showSearchIconEnd", "value"];
var StyledSearchBar = styled.form.withConfig({
  displayName: "SearchBar__StyledSearchBar",
  componentId: "sc-5s11x8-0"
})(["background-color:transparent;width:100%;height:40px;display:flex;align-items:center;justify-content:center;overflow:hidden;", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var SearchInput = styled(FieldBase).attrs(function () {
  return {
    component: "input"
  };
}).withConfig({
  displayName: "SearchBar__SearchInput",
  componentId: "sc-5s11x8-1"
})(["&&{", " background-color:", ";height:100%;border:none;outline:none;}"], function (_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$8);

  var _useState = react.useState(value),
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
  return /*#__PURE__*/react.createElement(StyledSearchBar, _extends({
    onSubmit: handleSubmit
  }, props), /*#__PURE__*/react.createElement(SearchInput, _extends({
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

var Button = styled(ButtonBase).withConfig({
  displayName: "Button",
  componentId: "sc-k7mzaq-0"
})(["display:flex;align-items:center;&&{background-color:", ";margin-right:", ";svg{color:", ";}:hover{background-color:", ";svg{color:", ";}}}"], function (_ref) {
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
  return /*#__PURE__*/react.createElement(Button, _extends({
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

var SHARE_MODULE_SHARE_OPTIONS = ["twitter", "facebook", "telegram", "whatsapp", "email", "embed", "navigator"];

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

var _excluded$7 = ["buttonProps", "copyText", "shareOptions", "url", "nftId", "appUrl"];
var Container$1 = styled.div.withConfig({
  displayName: "ShareModule__Container",
  componentId: "sc-1jmukyt-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var ButtonsWrapper = styled.div.withConfig({
  displayName: "ShareModule__ButtonsWrapper",
  componentId: "sc-1jmukyt-1"
})(["display:flex;flex-wrap:wrap;align-items:center;margin-bottom:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(2);
});
var CodeContainer = styled.div.withConfig({
  displayName: "ShareModule__CodeContainer",
  componentId: "sc-1jmukyt-2"
})(["padding:", ";background-color:", ";span{border-radius:0px !important;background-color:", " !important;.token{color:", " !important;}.attr-value{font-weight:700 !important;color:", " !important;}}"], function (_ref2) {
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
var StyledCodeBlock = styled(CodeBlock).withConfig({
  displayName: "ShareModule__StyledCodeBlock",
  componentId: "sc-1jmukyt-3"
})([""]);
var StyledText = styled(Text).attrs(function () {
  return {
    component: "div",
    color: "textSecondary",
    fontSize: "sm",
    fontStyle: "italic"
  };
}).withConfig({
  displayName: "ShareModule__StyledText",
  componentId: "sc-1jmukyt-4"
})(["&&{", "}"], function (_ref7) {
  var spacing = _ref7.theme.spacing;
  return css(["margin:", ";"], spacing(2, 0));
});
var ShareModule = function ShareModule(_ref8) {
  var _navigator;

  var buttonProps = _ref8.buttonProps,
      copyText = _ref8.copyText,
      shareOptions = _ref8.shareOptions,
      url = _ref8.url,
      nftId = _ref8.nftId,
      appUrl = _ref8.appUrl,
      props = _objectWithoutPropertiesLoose(_ref8, _excluded$7);

  var _useState = react.useState(false),
      open = _useState[0],
      setOpen = _useState[1];

  var theme = useTheme();
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

  return /*#__PURE__*/react.createElement(Container$1, props, /*#__PURE__*/react.createElement(Modal, _extends({
    cancelButton: true,
    action: function action() {
      return copy(codeSnippets);
    },
    actionTitle: "Copy code",
    title: "Get NFT embed code"
  }, defaultProps), /*#__PURE__*/react.createElement(CodeContainer, null, " ", /*#__PURE__*/react.createElement(StyledCodeBlock, {
    language: "jsx",
    text: codeSnippets,
    theme: obsidian,
    wrapLines: true,
    showLineNumbers: false,
    codeBlock: true
  }))), /*#__PURE__*/react.createElement(ButtonsWrapper, null, shareOptions.includes("twitter") && /*#__PURE__*/react.createElement(ShareModuleButton, {
    icon: "twitter",
    href: "https://twitter.com/intent/tweet?url=" + encodedUrl,
    buttonProps: buttonProps
  }), shareOptions.includes("facebook") && /*#__PURE__*/react.createElement(ShareModuleButton, {
    icon: "facebook-f",
    href: "https://www.facebook.com/sharer.php?u=" + encodedUrl,
    buttonProps: buttonProps
  }), shareOptions.includes("telegram") && matches && /*#__PURE__*/react.createElement(ShareModuleButton, {
    icon: "telegram-plane",
    href: "tg://msg?text=" + encodedUrl,
    buttonProps: buttonProps
  }), shareOptions.includes("whatsapp") && matches && /*#__PURE__*/react.createElement(ShareModuleButton, {
    icon: "whatsapp",
    href: "whatsapp://send?" + encodedUrl,
    buttonProps: buttonProps
  }), shareOptions.includes("embed") && /*#__PURE__*/react.createElement(ShareModuleButton, {
    icon: "code",
    iconPrefix: theme.defaultIconSet,
    onClick: function onClick() {
      return setOpen(true);
    },
    buttonProps: buttonProps
  }), shareOptions.includes("email") && /*#__PURE__*/react.createElement(ShareModuleButton, {
    icon: "envelope",
    iconPrefix: theme.defaultIconSet,
    href: "mailto:?body=" + encodedUrl,
    buttonProps: buttonProps
  }), shareOptions.includes("navigator") && canUseNavigator && /*#__PURE__*/react.createElement(ShareModuleButton, {
    icon: "ellipsis-h",
    iconPrefix: theme.defaultIconSet,
    onClick: function onClick() {
      var _navigator2;

      return (_navigator2 = navigator) == null ? void 0 : _navigator2.share({
        url: encodedUrl
      });
    },
    buttonProps: buttonProps
  })), /*#__PURE__*/react.createElement(StyledText, {
    content: copyText
  }), /*#__PURE__*/react.createElement(Input, {
    copyable: true,
    valueToCopy: url,
    endIconColor: "secondary",
    readOnly: true,
    selectable: true,
    startIcon: "link",
    value: url
  }));
};
ShareModule.propTypes = ShareModulePropTypes;
ShareModule.defaultProps = ShareModuleDefaultProps;

// import PropTypes from "prop-types";
var SnackbarPropTypes = {};
var SnackbarDefaultProps = {
  variant: "default"
};

var StyledSnackbarContent = styled(SnackbarContent).withConfig({
  displayName: "Snackbar__StyledSnackbarContent",
  componentId: "sc-nwbmms-0"
})(["", "{width:25%;max-width:fit-content;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.up("md");
});
var Wrapper$2 = styled.div.withConfig({
  displayName: "Snackbar__Wrapper",
  componentId: "sc-nwbmms-1"
})(["position:relative;width:100%;border-radius:16px;background-color:", ";color:", ";padding:", ";"], function (_ref2) {
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
var CloseIcon = styled(Icon).attrs(function () {
  return {
    icon: "times",
    size: "sm"
  };
}).withConfig({
  displayName: "Snackbar__CloseIcon",
  componentId: "sc-nwbmms-2"
})(["position:absolute;top:", ";right:", ";color:", ";"], function (_ref5) {
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
var IconWrapper$1 = styled.div.withConfig({
  displayName: "Snackbar__IconWrapper",
  componentId: "sc-nwbmms-3"
})(["width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;"]);
var StyledIcon$1 = styled(Icon).withConfig({
  displayName: "Snackbar__StyledIcon",
  componentId: "sc-nwbmms-4"
})(["color:", ";"], function (_ref8) {
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

var Snackbar = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _useSnackbar = useSnackbar(),
      closeSnackbar = _useSnackbar.closeSnackbar;

  var variant = mapVariantToColor(props.variant);
  var icon = mapVariantToIcon(props.variant);

  var handleDismiss = function handleDismiss() {
    closeSnackbar(props.id);
  };

  return /*#__PURE__*/react.createElement(StyledSnackbarContent, {
    ref: ref
  }, /*#__PURE__*/react.createElement(Wrapper$2, {
    variant: variant
  }, /*#__PURE__*/react.createElement(CloseIcon, {
    onClick: handleDismiss,
    variant: variant
  }), /*#__PURE__*/react.createElement(Flex, {
    container: true,
    alignItems: "center"
  }, /*#__PURE__*/react.createElement(Flex, {
    item: true,
    xs: 2
  }, /*#__PURE__*/react.createElement(IconWrapper$1, {
    variant: variant
  }, /*#__PURE__*/react.createElement(StyledIcon$1, {
    icon: icon,
    variant: variant
  }))), /*#__PURE__*/react.createElement(Flex, {
    item: true,
    xs: 10
  }, /*#__PURE__*/react.createElement(Text, {
    content: props.message,
    fontWeight: "bold"
  })))));
});
Snackbar.propTypes = SnackbarPropTypes;
Snackbar.defaultProps = SnackbarDefaultProps;

var DotsSpinnerPropTypes = _extends({
  size: PropTypes.number
}, COLOR_PROP_TYPES, DISPLAY_PROP_TYPES, DIMENSION_PROP_TYPES, SPACER_PROP_TYPES);
var DotsSpinnerDefaultProps = {
  size: 60
};

var StyledDotsSpinner = styled.div.withConfig({
  displayName: "Dots__StyledDotsSpinner",
  componentId: "sc-ru0t4d-0"
})(["width:", "px;display:flex;align-items:center;justify-content:center;> div{width:", "px;height:", "px;background-color:", ";border-radius:100%;display:inline-block;-webkit-animation:sk-bouncedelay 1.4s infinite ease-in-out both;animation:sk-bouncedelay 1.4s infinite ease-in-out both;}.bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}.bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}@-webkit-keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1.0)}}@keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1.0);transform:scale(1.0);}}", " ", " ", " ", ""], function (_ref) {
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
  return /*#__PURE__*/react.createElement(StyledDotsSpinner, props, /*#__PURE__*/react.createElement("div", {
    className: "bounce1"
  }), /*#__PURE__*/react.createElement("div", {
    className: "bounce2"
  }), /*#__PURE__*/react.createElement("div", {
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

var StyledRocksSpinner = styled.div.withConfig({
  displayName: "Rocks__StyledRocksSpinner",
  componentId: "sc-1llro9h-0"
})(["width:", "px;height:", "px;position:relative;.dot{width:", "px;height:", "px;background-color:", ";border-radius:100%;position:absolute;bottom:5px;left:0;-webkit-animation:bounce 2.0s infinite ease-in-out;animation:bounce 2.0s infinite ease-in-out;}.circle{width:", "px;height:", "px;border:", "px solid ", ";border-radius:100%;position:absolute;top:5px;right:0;-webkit-animation:bounce 2.0s infinite ease-in-out;animation:bounce 2.0s infinite ease-in-out;-webkit-animation-delay:-1.0s;animation-delay:-1.0s;}@-webkit-keyframes bounce{0%,100%{-webkit-transform:scale(0.0)}50%{-webkit-transform:scale(1.0)}}@keyframes bounce{0%,100%{transform:scale(0.0);-webkit-transform:scale(0.0);}50%{transform:scale(1.0);-webkit-transform:scale(1.0);}}", " ", " ", " ", ""], function (_ref) {
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
  return /*#__PURE__*/react.createElement(StyledRocksSpinner, props, /*#__PURE__*/react.createElement("div", {
    className: "dot"
  }), /*#__PURE__*/react.createElement("div", {
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

var _excluded$6 = ["tabs", "currentTab", "onChange"];
var Wrapper$1 = styled.div.withConfig({
  displayName: "Tab__Wrapper",
  componentId: "sc-q8ovtf-0"
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
  componentId: "sc-q8ovtf-1"
})(["&&{min-height:fit-content;.MuiTab-root{min-height:24px;}}.MuiTabs-indicator{display:none;}button{min-width:fit-content;margin-right:", ";padding:0;font-weight:normal;font-size:14px;line-height:120%;&.Mui-selected{font-weight:600;}}.Mui-selected{&::after{content:\"\";position:absolute;width:100%;left:0;bottom:0;height:2px;background-color:", ";border-radius:2px 2px 0 0;}}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing(5);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.primary.main;
});
var StyledTab = styled(MuiTab).withConfig({
  displayName: "Tab__StyledTab",
  componentId: "sc-q8ovtf-2"
})(["&&{text-transform:initial;}"]);
var Tab = function Tab(_ref4) {
  var tabs = _ref4.tabs,
      currentTab = _ref4.currentTab,
      _onChange = _ref4.onChange,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded$6);

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Wrapper$1, props, /*#__PURE__*/react.createElement(StyledTabs, {
    value: currentTab,
    onChange: function onChange(e, newTab) {
      return _onChange(newTab);
    },
    indicatorColor: "primary",
    variant: "scrollable"
  }, tabs.filter(function (t) {
    return typeof t.showTab === "boolean" ? t.showTab : true;
  }).map(function (t) {
    return /*#__PURE__*/react.createElement(StyledTab, {
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
  columns: PropTypes.array.isRequired,
  noDataProps: PropTypes.shape(),
  rows: PropTypes.array.isRequired,
  rowsBottomBorderSm: PropTypes.bool,
  rowsSize: PropTypes.string
}, SPACER_PROP_TYPES, DISPLAY_PROP_TYPES);
var TableDefaultProps = {
  columns: [],
  rows: [],
  rowsBottomBorderSm: false,
  rowsSize: "lg"
};

var Row = styled.tr.withConfig({
  displayName: "Row",
  componentId: "sc-1ciagy6-0"
})(["height:", "px;border-bottom:1px solid ", ";background-color:", ";", ""], function (_ref) {
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
  return hasData && css(["", "{height:unset;display:block;border-bottom:0;margin-bottom:", ";padding:", ";border-radius:8px;}"], theme.breakpoints.down("sm"), theme.spacing(2), theme.spacing(4));
});

var StyledTd = styled.td.withConfig({
  displayName: "Rows__StyledTd",
  componentId: "sc-12wcsgk-0"
})(["", ""], function (_ref) {
  var align = _ref.align,
      displaySm = _ref.displaySm,
      hiddenLabelSm = _ref.hiddenLabelSm,
      flexSm = _ref.flexSm,
      rowsBottomBorderSm = _ref.rowsBottomBorderSm,
      theme = _ref.theme;
  return css(["", " ", "{display:", ";margin-bottom:", ";", " ", " ", " ", " ", ":last-child{border-bottom:0;margin-bottom:0;}}"], align && "text-align: " + align + ";", theme.breakpoints.down("sm"), function (_ref2) {
    var hiddenSm = _ref2.hiddenSm;
    return hiddenSm ? "none" : "block";
  }, theme.spacing(4), rowsBottomBorderSm && css(["border-bottom:1px solid ", ";"], theme.palette.gray.semiLight), displaySm === "inline" && "text-align: right;", hiddenLabelSm && "text-align: left;", !hiddenLabelSm && css(["::before{content:attr(data-label);", " color:", ";padding-bottom:", ";display:block;font-weight:normal;font-size:12px;line-height:120%;}"], displaySm === "inline" && "float: left;", theme.palette.text.secondary, theme.spacing(2)), flexSm && css(["display:flex;align-items:center;justify-content:space-around;"]));
});

var getContentByColType = function getContentByColType(content, col) {
  switch (col == null ? void 0 : col.type) {
    case "text":
      return /*#__PURE__*/react.createElement(Text, {
        color: "textSecondary",
        content: content,
        fontWeight: "bold"
      });

    case "action":
      return content.map(function (act) {
        return /*#__PURE__*/react.createElement(Icon, _extends({
          icon: act.icon,
          color: "secondary",
          mx: 4
        }, act));
      });

    case "icon":
      return /*#__PURE__*/react.createElement(Icon, _extends({
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
    return /*#__PURE__*/react.createElement(Row, {
      hasData: rows.length > 0,
      size: rowsSize
    }, Object.keys(row).map(function (td) {
      var col = columns.find(function (c) {
        return c.key === td;
      });
      var content = row[td];
      return /*#__PURE__*/react.createElement(StyledTd, {
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

var StyledThead = styled.thead.withConfig({
  displayName: "Heading__StyledThead",
  componentId: "sc-17hzzec-0"
})(["", ""], function (_ref) {
  var hasData = _ref.hasData,
      theme = _ref.theme;
  return hasData && css(["", "{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;}"], theme.breakpoints.down("sm"));
});
var Heading = function Heading(_ref2) {
  var columns = _ref2.columns,
      hasData = _ref2.hasData;
  return columns.length > 0 && /*#__PURE__*/react.createElement(StyledThead, {
    hasData: hasData
  }, /*#__PURE__*/react.createElement(Row, {
    size: "sm",
    hasData: hasData
  }, columns.map(function (_ref3) {
    var _ref3$label = _ref3.label,
        label = _ref3$label === void 0 ? "" : _ref3$label,
        _ref3$render = _ref3.render,
        render = _ref3$render === void 0 ? function () {} : _ref3$render;
    return /*#__PURE__*/react.createElement("th", null, render() || label && /*#__PURE__*/react.createElement(Text, {
      align: "left",
      color: "textSecondary",
      content: label,
      fontSize: "sm",
      fontStyle: "italic",
      fontWeight: "normal"
    }));
  })));
};
Heading.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  hasData: PropTypes.bool.isRequired
};

var _excluded$5 = ["columnsCount"];
var StyledTr = styled.tr.withConfig({
  displayName: "NoData__StyledTr",
  componentId: "sc-1si669t-0"
})(["background-color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.common.white;
});
var NoData = function NoData(_ref2) {
  var columnsCount = _ref2.columnsCount,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded$5);

  return /*#__PURE__*/react.createElement(StyledTr, null, /*#__PURE__*/react.createElement("td", {
    colSpan: columnsCount
  }, /*#__PURE__*/react.createElement(NoItem, _extends({
    my: 4
  }, props))));
};
NoData.propTypes = {
  columnsCount: PropTypes.number.isRequired
};

var _excluded$4 = ["columns", "rows", "noDataProps", "rowsBottomBorderSm", "rowsSize"];
var StyledTable = styled.table.withConfig({
  displayName: "Table__StyledTable",
  componentId: "sc-1dprpyf-0"
})(["width:100%;border-collapse:collapse;border-spacing:0;border-radius:8px;overflow:hidden;", ""], function (_ref) {
  var hasData = _ref.hasData,
      theme = _ref.theme;
  return hasData && css(["", "{display:block;}"], theme.breakpoints.down("sm"));
});
var StyledTbody = styled.tbody.withConfig({
  displayName: "Table__StyledTbody",
  componentId: "sc-1dprpyf-1"
})(["", ""], function (_ref2) {
  var hasData = _ref2.hasData,
      theme = _ref2.theme;
  return hasData && css(["", "{display:block;}"], theme.breakpoints.down("sm"));
});
var Table = function Table(_ref3) {
  var columns = _ref3.columns,
      rows = _ref3.rows,
      noDataProps = _ref3.noDataProps,
      rowsBottomBorderSm = _ref3.rowsBottomBorderSm,
      rowsSize = _ref3.rowsSize,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$4);

  var hasData = rows.length > 0;
  return /*#__PURE__*/react.createElement(StyledTable, _extends({
    hasData: hasData
  }, props), /*#__PURE__*/react.createElement(Heading, {
    columns: columns,
    hasData: hasData
  }), /*#__PURE__*/react.createElement(StyledTbody, {
    hasData: hasData
  }, rows.length > 0 ? /*#__PURE__*/react.createElement(Rows, {
    columns: columns,
    rows: rows,
    rowsBottomBorderSm: rowsBottomBorderSm,
    rowsSize: rowsSize
  }) : /*#__PURE__*/react.createElement(NoData, _extends({
    columnsCount: columns.length
  }, noDataProps))));
};
Table.propTypes = TablePropTypes;
Table.defaultProps = TableDefaultProps;

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

var img$1 = "data:image/svg+xml,%3csvg width='754' height='278' viewBox='0 0 754 278' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='362.6' y='0.6' width='148.8' height='262.8' rx='7.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 18H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 35H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 130H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 246H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 113H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M362.5 229H511.5' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='374.5' cy='9.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='374.5' cy='26.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='374.5' cy='121.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='374.5' cy='237.5' r='2.9' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='384.5' cy='9.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='384.5' cy='26.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='384.5' cy='121.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='384.5' cy='237.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='394.5' cy='9.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='394.5' cy='26.5' r='2.9' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='394.5' cy='121.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='394.5' cy='237.5' r='2.9' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='42.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='55.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='68.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='81.6' width='25.8' height='6.8' rx='1.4' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='94.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='138.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='151.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='164.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='177.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='190.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='203.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='216.6' width='25.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='371.6' y='251.6' width='25.8' height='6.8' rx='1.4' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='42.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='55.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='68.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='81.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='94.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='138.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='151.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='164.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='177.6' width='93.8' height='6.8' rx='1.4' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='190.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='203.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='216.6' width='93.8' height='6.8' rx='1.4' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3crect x='408.6' y='251.6' width='93.8' height='6.8' rx='1.4' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M481 263.5H753' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M1 263.5H125' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M362.5 88L359.555 90.5946C348.028 100.749 341.175 115.184 340.668 130.538C339.78 157.441 338.5 200.408 338.5 224.5C338.5 272.5 221.5 279.5 216.5 259C211.667 239.186 278.643 243.548 261.5 232.5C239 218 165.5 270.5 165.5 270.5' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M362 67.5C362 67.5 336.736 73.9914 324.5 103.5C310.29 137.77 313 122 307.5 175.5C303.437 215.024 192.792 166.527 206 204C215.998 232.366 272 197 276.5 235' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M100.333 119.992L100.822 108.763H136.951V91.3081H83.2449L81.7802 136.47H109.854C113.272 136.47 116.079 137.447 118.276 139.278C120.473 141.109 121.572 143.55 121.572 146.601C121.572 150.019 120.473 152.704 118.276 154.779C116.079 156.854 113.272 157.831 109.854 157.831C106.192 157.831 103.141 156.61 100.699 154.169C98.2583 151.728 96.9156 148.066 96.9156 143.062L77.8743 146.845C78.1184 155.756 81.1699 162.713 87.1508 167.596C93.1318 172.478 100.577 174.919 109.488 174.919C118.764 174.919 126.332 172.356 131.947 166.985C137.562 161.737 140.491 154.901 140.491 146.357C140.491 138.301 137.928 131.954 132.801 127.194C127.675 122.433 120.595 119.992 111.685 119.992H100.333Z' fill='%23292839'/%3e%3cpath d='M184.311 89.4771C173.447 89.4771 164.781 93.505 158.19 101.317C151.599 109.129 148.303 119.504 148.303 132.198C148.303 145.014 151.599 155.389 158.19 163.201C164.781 171.013 173.447 174.919 184.311 174.919C195.052 174.919 203.84 171.013 210.431 163.201C217.023 155.389 220.44 145.014 220.44 132.198C220.44 119.504 217.023 109.129 210.431 101.317C203.84 93.505 195.052 89.4771 184.311 89.4771ZM184.311 157.22C179.428 157.22 175.644 155.023 172.837 150.507C169.908 145.991 168.565 139.888 168.565 132.198C168.565 124.63 169.908 118.527 172.837 114.011C175.644 109.495 179.428 107.176 184.311 107.176C189.071 107.176 192.855 109.495 195.784 114.011C198.714 118.527 200.178 124.63 200.178 132.198C200.178 139.888 198.714 145.991 195.784 150.507C192.855 155.023 189.071 157.22 184.311 157.22Z' fill='%23292839'/%3e%3cpath d='M264.87 89.4771C254.007 89.4771 245.341 93.505 238.749 101.317C232.158 109.129 228.863 119.504 228.863 132.198C228.863 145.014 232.158 155.389 238.749 163.201C245.341 171.013 254.007 174.919 264.87 174.919C275.612 174.919 284.4 171.013 290.991 163.201C297.582 155.389 301 145.014 301 132.198C301 119.504 297.582 109.129 290.991 101.317C284.4 93.505 275.612 89.4771 264.87 89.4771ZM264.87 157.22C259.988 157.22 256.204 155.023 253.397 150.507C250.467 145.991 249.125 139.888 249.125 132.198C249.125 124.63 250.467 118.527 253.397 114.011C256.204 109.495 259.988 107.176 264.87 107.176C269.631 107.176 273.414 109.495 276.344 114.011C279.273 118.527 280.738 124.63 280.738 132.198C280.738 139.888 279.273 145.991 276.344 150.507C273.414 155.023 269.631 157.22 264.87 157.22Z' fill='%23292839'/%3e%3cpath d='M583.315 257.926C581.583 251.511 579.526 243.568 579.526 242.289H567.099L529.885 259.387C529.213 259.695 528.783 260.367 528.783 261.107C528.783 262.152 529.63 263 530.676 263H579.441C582.086 263 584.004 260.479 583.315 257.926Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M568.135 242.289V226.5H582.633L579.526 242.289H568.135Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M722.2 224.328L706.901 225.719L709.674 248.83C709.874 250.497 709.006 252.109 707.505 252.86L694.5 259.363C693.85 259.688 693.439 260.353 693.439 261.08C693.439 262.14 694.298 263 695.359 263H713.569C715.764 263 717.706 261.577 718.368 259.483L727.421 230.814C728.497 227.408 725.757 224.005 722.2 224.328Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M707 225.5L696.545 224V237.111L708.5 238L707 225.5Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M565 142.5C582.118 142.253 603.5 126 603.5 126L585.895 107.36L571.241 122.162C571.241 122.162 527.015 108.5 523 103C518.986 97.4996 514.98 70.5301 513 73.4999C510 77.9998 512 102 512 102C512 102 505.612 97.5001 503.5 97.5001C500.5 97.5001 510 114 517 115.5C533.898 119.121 551.472 142.695 565 142.5Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M638.553 46.4229L645 66.5L638.553 78.5257L626 70.5L628.198 50.5652C628.198 50.5652 616.902 55.7267 615 50.5652C612.265 43.1423 624.5 19.5 624.5 19.5L646.838 29.8538L638.553 46.4229Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M673.098 68.0838C677.803 79.4239 688.459 104.185 697.5 118.5C700.974 124 667.156 131.018 663 127C650.413 114.832 621.984 123.198 621.984 123.198C621.984 123.198 597 134 597 127C597 113.767 575.288 110.043 585 104C591.924 99.6918 602.704 82.6073 609.683 70.647C612.585 65.6747 622.021 65.1518 627.741 65.8043C629.563 66.0122 631.642 65.9536 634 65.5001C643 62.0989 643 58.5 643 58.5L664.239 61.2638C668.2 61.7793 671.567 64.3944 673.098 68.0838Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='581' y='57' width='118' height='73'%3e%3cpath d='M673.098 68.0838C677.803 79.4239 688.459 104.185 697.5 118.5C700.974 124 667.156 131.018 663 127C650.413 114.832 621.984 123.198 621.984 123.198C621.984 123.198 597 134 597 127C597 113.767 575.288 110.043 585 104C591.924 99.6918 602.704 82.6073 609.683 70.647C612.585 65.6747 622.021 65.1518 627.741 65.8043C629.563 66.0122 631.642 65.9536 634 65.5001C643 62.0989 643 58.5 643 58.5L664.239 61.2638C668.2 61.7793 671.567 64.3944 673.098 68.0838Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3c/mask%3e%3cg mask='url(%23mask0)'%3e%3cpath d='M682.5 112.5C680 95.9999 667.5 80.6989 667.5 60.4999C667.5 45.5 706 125.5 706 125.5L667.5 130.5C667.5 130.5 683.774 120.911 682.5 112.5Z' fill='%23FFE94E'/%3e%3c/g%3e%3cpath d='M673.098 68.0838C677.803 79.4239 688.459 104.185 697.5 118.5C700.974 124 667.156 131.018 663 127C650.413 114.832 621.984 123.198 621.984 123.198C621.984 123.198 597 134 597 127C597 113.767 575.288 110.043 585 104C591.924 99.6918 602.704 82.6073 609.683 70.647C612.585 65.6747 622.021 65.1518 627.741 65.8043C629.563 66.0122 631.642 65.9536 634 65.5001C643 62.0989 643 58.5 643 58.5L664.239 61.2638C668.2 61.7793 671.567 64.3944 673.098 68.0838Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M558 140.5C575 128.855 627.162 143.909 627.162 143.909L613.5 67.5C613.5 67.5 615.885 66.4615 617.5 66C621.984 64.7188 623.484 65.5 623.484 65.5L626.052 85.5398C626.687 90.4921 630.902 94.2017 635.895 94.2017C640.489 94.2017 644.483 91.0479 645.548 86.5786L652 59.5L660.5 61L652.437 89.1218C651.491 92.4208 651.631 95.9364 652.836 99.1497L669.621 143.909L690 148C690 148 700.512 168.848 698.617 182.5C695.91 202 647.874 222.613 647.874 222.613C647.874 222.613 690 218 698.617 218C702.12 218 698.48 222.534 698.617 228C698.748 233.262 702.802 239.447 698.617 240.217C683.5 243 603 270.5 592.5 240.217C587.289 225.189 627.162 187.403 627.162 187.403L588.846 167.727C588.846 167.727 591.142 212 587 228.826C586.145 232.298 580.565 227.624 575.5 228C569.68 228.432 562.352 232.542 563 228C566.472 203.674 544.393 149.82 558 140.5Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cmask id='mask1' mask-type='alpha' maskUnits='userSpaceOnUse' x='552' y='58' width='150' height='197'%3e%3cpath d='M558 140.5C575 128.855 627.162 143.909 627.162 143.909L613.5 67.5C613.5 67.5 615.885 66.4615 617.5 66C621.984 64.7188 623.484 65.5 623.484 65.5L626.052 85.5398C626.687 90.4921 630.902 94.2017 635.895 94.2017C640.489 94.2017 644.483 91.0479 645.548 86.5786L652 59.5L660.5 61L652.437 89.1218C651.491 92.4208 651.631 95.9364 652.836 99.1497L669.621 143.909L690 148C690 148 700.512 168.848 698.617 182.5C695.91 202 647.874 222.613 647.874 222.613C647.874 222.613 690 218 698.617 218C702.12 218 698.48 222.534 698.617 228C698.748 233.262 702.802 239.447 698.617 240.217C683.5 243 603 270.5 592.5 240.217C587.289 225.189 627.162 187.403 627.162 187.403L588.846 167.727C588.846 167.727 591.142 212 587 228.826C586.145 232.298 580.565 227.624 575.5 228C569.68 228.432 562.352 232.542 563 228C566.472 203.674 544.393 149.82 558 140.5Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3c/mask%3e%3cg mask='url(%23mask1)'%3e%3cpath d='M560.5 148C565.444 141.078 579 136.5 579 136.5L545.5 139L557.5 232C557.5 232 571.818 237.58 577 232C583.5 225 550.5 162 560.5 148Z' fill='%23FFE94E'/%3e%3c/g%3e%3cpath d='M558 140.5C575 128.855 627.162 143.909 627.162 143.909L613.5 67.5C613.5 67.5 615.885 66.4615 617.5 66C621.984 64.7188 623.484 65.5 623.484 65.5L626.052 85.5398C626.687 90.4921 630.902 94.2017 635.895 94.2017C640.489 94.2017 644.483 91.0479 645.548 86.5786L652 59.5L660.5 61L652.437 89.1218C651.491 92.4208 651.631 95.9364 652.836 99.1497L669.621 143.909L690 148C690 148 700.512 168.848 698.617 182.5C695.91 202 647.874 222.613 647.874 222.613C647.874 222.613 690 218 698.617 218C702.12 218 698.48 222.534 698.617 228C698.748 233.262 702.802 239.447 698.617 240.217C683.5 243 603 270.5 592.5 240.217C587.289 225.189 627.162 187.403 627.162 187.403L588.846 167.727C588.846 167.727 591.142 212 587 228.826C586.145 232.298 580.565 227.624 575.5 228C569.68 228.432 562.352 232.542 563 228C566.472 203.674 544.393 149.82 558 140.5Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M617.49 176.842L600.673 144.526C600.673 144.526 603.99 141.022 604.001 138.247C604.017 134.041 596.44 130.576 596.44 130.576L598.349 138.994L593.278 141.124L588.603 133.868C588.603 133.868 585.75 141.729 588.788 144.637C590.904 146.662 596.063 146.462 596.063 146.462L606.953 181.196C607.962 184.414 611.521 186.066 614.63 184.76C617.715 183.464 619.035 179.81 617.49 176.842Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle cx='612.116' cy='178.224' r='2.4' transform='rotate(-22.7849 612.116 178.224)' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M688.5 150C695.5 141 694.5 123 694.5 123C694.5 123 686.477 126.026 680.5 127C675.682 127.785 667.5 128.5 667.5 128.5C667.5 128.5 672.571 139.977 667.5 142C653.308 147.662 615.771 154.265 615.771 154.265L609.123 152.271C606.816 151.578 604.315 152.121 602.502 153.707L599.082 156.699C597.895 157.738 597.429 159.378 597.893 160.886L600.404 169.046C600.92 170.724 602.471 171.87 604.227 171.87H607.963C609.658 171.87 611.296 171.254 612.572 170.138L618.878 164.621C618.878 164.621 673.745 168.971 688.5 150Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M646 36C656.532 29.4174 647.873 18.4624 647.873 18.4624L636.536 21.6798L635.5 31C635.5 31 637.527 29.1519 639.589 29.8537C642.746 30.9284 638 36 638 36L638.5 46.5C638.5 46.5 642 38.5 646 36Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M628.198 25.7115C635.773 25.2999 645.544 21.5959 648.567 20.3827C649.085 20.175 649.314 19.5886 649.07 19.0872C647.491 15.8504 641.779 5.10812 635.447 5.00003C628.49 4.88127 620.949 15.3558 620.949 15.3558L605.328 17.0914C604.369 17.1979 604.122 18.4229 604.98 18.8626C609.831 21.3459 620.312 26.1399 628.198 25.7115Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M627 187.5C627 187.5 641.5 175.5 651.5 170.5' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M627 143.5C627 143.5 628.219 148.681 629 152' stroke='%23292839' stroke-width='1.2'/%3e%3ccircle r='18.4782' transform='matrix(-1 0 0 1 32.5218 188.609)' fill='%23AC00FC'/%3e%3ccircle r='7.06521' transform='matrix(-1 0 0 1 12.1087 211.717)' fill='%23AC00FC'/%3e%3cpath d='M77.4958 212.052L73.6516 215.96L78.8837 214.325C79.8437 214.025 80.1656 212.828 79.4856 212.087C78.9545 211.508 78.0468 211.492 77.4958 212.052Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M70.9662 199.06L73.6414 203.845L69.0272 200.885C68.1806 200.342 68.1863 199.103 69.038 198.568C69.7032 198.15 70.5828 198.374 70.9662 199.06Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M73.8248 208.507L74.2248 215.399L77.1198 209.132C77.6509 207.982 76.8056 206.67 75.5388 206.678C74.5494 206.685 73.7674 207.519 73.8248 208.507Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M75.443 196.611L73.2363 203.153L72.1001 196.343C71.8916 195.093 73.0535 194.051 74.273 194.394C75.2255 194.662 75.7593 195.673 75.443 196.611Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M68.9865 210.981L74.0283 215.697L71.8038 209.161C71.3956 207.962 69.8788 207.595 68.9671 208.474C68.2551 209.161 68.2639 210.305 68.9865 210.981Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M79.4563 200.275L73.3476 203.491L77.2198 197.776C77.9303 196.727 79.4902 196.773 80.1371 197.862C80.6424 198.713 80.3318 199.813 79.4563 200.275Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M67.0023 214.265L73.702 215.932L68.5783 211.305C67.6382 210.456 66.1343 210.873 65.7659 212.085C65.4781 213.031 66.0422 214.026 67.0023 214.265Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M80.5022 203.967L73.6001 203.805L79.7643 200.695C80.8953 200.125 82.2356 200.924 82.2707 202.191C82.2982 203.18 81.4914 203.99 80.5022 203.967Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M83.7305 191.275L74.6702 191.062L82.7619 186.98C84.2466 186.231 86.0059 187.281 86.0521 188.943C86.0881 190.242 85.029 191.305 83.7305 191.275Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M87.472 183.047L79.6183 181.984L87.0136 179.134C88.2285 178.666 89.5643 179.445 89.7561 180.732C89.9557 182.072 88.8143 183.229 87.472 183.047Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M92.4057 172.154L83.1148 177.484L88.7227 168.358C89.7099 166.752 91.9897 166.607 93.1727 168.075C94.2254 169.381 93.861 171.319 92.4057 172.154Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M75.0625 176.089L80.1558 182.161L78.6152 174.387C78.3621 173.11 76.9907 172.396 75.7996 172.922C74.5603 173.468 74.1919 175.051 75.0625 176.089Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M69.1468 186.852L74.0091 191.143L71.7423 185.067C71.3264 183.952 69.8922 183.649 69.0603 184.499C68.4105 185.164 68.45 186.237 69.1468 186.852Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M66.7748 249.77C62.1128 240.027 71.2202 224.914 72.7014 219.56C75.8325 208.241 70.0764 200.287 74.8714 189.566C77.341 184.045 83.5825 176.76 83.5825 176.76' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M32.7615 148.545C33.056 149.332 31.3225 150.616 31.3225 150.616C31.3225 150.616 29.8335 148.812 29.8736 147.451C29.9166 145.99 31.7505 144.072 31.7505 144.072C31.7505 144.072 32.0202 146.563 32.7615 148.545Z' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M37.61 148.498C37.1166 151.159 39.4303 155.185 39.4303 155.185C39.4303 155.185 42.3814 154.115 43.1426 152.494C43.9486 150.778 42.5406 149.555 42.6679 147.663C42.8196 145.407 44.182 142.075 44.182 142.075C44.182 142.075 38.2642 144.969 37.61 148.498Z' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M28.3674 163.858C31.1105 163.945 34.421 167.428 34.421 167.428C34.421 167.428 31.1248 167.864 28.1886 168.528C25.6298 169.107 20.769 170.909 19.5621 171.362C19.4784 171.394 19.4039 171.302 19.4569 171.23C20.4085 169.935 25.1202 163.756 28.3674 163.858Z' fill='%23292839' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M45.1446 173.28C39.441 167.162 28.3695 166.327 28.3695 166.327' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M51.4429 163.271C50.7271 166.177 47.3526 169.751 47.3526 169.751C47.3526 169.751 45.1083 165.841 45.2387 163.13C45.4159 159.447 50.1129 155.167 50.4466 154.867C50.4562 154.859 50.4689 154.862 50.473 154.874C50.5989 155.252 52.204 160.182 51.4429 163.271Z' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M48.1089 178.887C48.1089 178.887 45.846 168.549 48.6291 161.747' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M39.1011 163.284C39.1011 163.284 38.417 154.797 41.2002 147.995' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.5544 227.538C60.0576 215.51 60.1207 208.246 55.5807 196.593C51.1276 185.163 48.3216 178.819 42.3507 168.104C38.3513 160.927 34.9697 158.662 31.2167 150.252' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.998 231.001C63.7872 215.761 58.9938 207.826 57.1333 192.538C55.3368 177.777 57.3175 171.51 56.2431 154.47' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.6575 228.881C61.7154 222.365 56.9491 209.554 54.8751 206.151C47.136 193.453 41.6946 189.766 31.974 175.729' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M60.8658 183.843C58.8859 189.558 56.9396 188.649 56.9396 188.649C56.9396 188.649 56.4615 187.39 57.4633 185.907C58.2838 184.692 60.0947 183.931 60.7231 183.695C60.8138 183.661 60.8975 183.752 60.8658 183.843Z' fill='%23292839' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M46.5555 201.643C51.6517 204.899 52.6155 202.98 52.6155 202.98C52.6155 202.98 52.2101 201.695 50.5048 201.153C49.1079 200.708 47.2151 201.234 46.5759 201.438C46.4836 201.468 46.4739 201.59 46.5555 201.643Z' fill='%23292839' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M60.4308 173.536C58.7275 181.119 56.5246 179.733 56.5246 179.733C56.5246 179.733 56.5242 178.329 57.4987 176.407C58.2735 174.88 59.7076 173.793 60.2631 173.412C60.3484 173.353 60.4535 173.435 60.4308 173.536Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M40.5068 193.285C46.5443 198.179 47.4135 195.726 47.4135 195.726C47.4135 195.726 46.5435 194.624 44.5878 193.721C43.033 193.003 41.2339 193.039 40.5615 193.084C40.4583 193.091 40.4264 193.22 40.5068 193.285Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M59.5935 165.378C59.8612 170.928 56.448 171.418 56.448 171.418C56.448 171.418 56.4476 170.014 57.4221 168.093C58.1716 166.615 59.0443 165.661 59.4075 165.3C59.4767 165.231 59.5888 165.28 59.5935 165.378Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M36.1058 186.365C39.3362 190.886 42.3182 189.154 42.3182 189.154C42.3182 189.154 41.4482 188.053 39.4925 187.149C37.9884 186.455 36.7124 186.247 36.2032 186.189C36.1062 186.177 36.049 186.286 36.1058 186.365Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M61.1354 155.991C60.1071 159.796 56.4691 161.537 56.4691 161.537C56.4691 161.537 56.7106 160.23 57.4432 158.212C58.0715 156.481 60.3696 155.963 61.0111 155.85C61.0924 155.836 61.1569 155.911 61.1354 155.991Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M29.0771 179.955C32.2432 182.304 36.177 181.415 36.177 181.415C36.177 181.415 35.1771 180.539 33.3513 179.41C31.7854 178.441 29.6607 179.459 29.0876 179.768C29.0149 179.807 29.0108 179.906 29.0771 179.955Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M60.4417 148.79C59.7487 152.645 56.3124 154.697 56.3124 154.697C56.3124 154.697 57.3492 153.647 57.8934 151.57C58.3354 149.883 59.7641 148.961 60.2849 148.674C60.3666 148.629 60.4582 148.698 60.4417 148.79Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M25.1574 173.875C28.0913 176.471 32.0596 175.95 32.0596 175.95C32.0596 175.95 30.5951 175.769 28.8808 174.477C27.4882 173.428 25.7953 173.59 25.2088 173.687C25.1168 173.703 25.0875 173.813 25.1574 173.875Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M54.1191 150.845C54.4501 153.528 56.6517 154.999 56.6517 154.999C56.6517 154.999 55.9959 154.245 55.7158 152.778C55.4997 151.645 54.6534 150.985 54.2781 150.742C54.2007 150.692 54.1078 150.754 54.1191 150.845Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M31.392 171.569C32.7954 173.879 31.9796 176.398 31.9796 176.398C31.9796 176.398 32.0274 175.4 31.3372 174.075C30.8047 173.053 31.0592 172.009 31.2032 171.586C31.2329 171.499 31.3441 171.49 31.392 171.569Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.834 184.176C54.7874 189.9 56.7378 189 56.7378 189C56.7378 189 57.2218 187.744 56.2269 186.256C55.4121 185.037 53.6047 184.268 52.9774 184.029C52.8868 183.995 52.8027 184.085 52.834 184.176Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M53.0644 196.925C55.08 202.627 52.9918 203.13 52.9918 203.13C52.9918 203.13 51.8329 202.444 51.6913 200.66C51.5754 199.199 52.5164 197.474 52.8607 196.898C52.9104 196.815 53.0321 196.833 53.0644 196.925Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.9888 173.107C53.185 177.253 56.3412 180.15 56.3412 180.15C56.3412 180.15 56.9593 177.933 55.9644 176.446C55.164 175.249 53.7194 173.617 53.1855 173.026C53.1131 172.945 52.9837 172.999 52.9888 173.107Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M46.0811 188.335C48.4977 191.71 47.8173 195.94 47.8173 195.94C47.8173 195.94 45.9577 194.583 45.8161 192.799C45.7022 191.364 45.8244 189.188 45.8765 188.393C45.8836 188.285 46.0183 188.247 46.0811 188.335Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.9125 164.791C53.1139 168.918 56.3702 171.416 56.3702 171.416C56.3702 171.416 56.8827 169.618 55.8878 168.13C55.0874 166.933 53.6428 165.302 53.1089 164.71C53.0365 164.63 52.9072 164.684 52.9125 164.791Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M40.9852 181.764C43.3855 185.127 42.3788 189.105 42.3788 189.105C42.3788 189.105 40.8619 188.012 40.7203 186.228C40.6063 184.793 40.7286 182.617 40.7807 181.822C40.7877 181.714 40.9225 181.676 40.9852 181.764Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.3887 155.297C53.275 162.843 56.3913 161.535 56.3913 161.535C56.3913 161.535 56.9038 159.737 55.9089 158.249C55.0857 157.018 53.1945 155.627 52.5666 155.183C52.4847 155.125 52.377 155.198 52.3887 155.297Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M35.511 173.989C39.4935 180.46 36.2375 181.365 36.2375 181.365C36.2375 181.365 34.7205 180.272 34.5789 178.488C34.4618 177.012 35.0829 174.747 35.3007 174.01C35.3291 173.914 35.4584 173.904 35.511 173.989Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M64.9741 220.394C64.9741 220.394 65.6176 217.779 68.61 214.634' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.9751 208.44C65.9751 208.44 66.6186 205.825 69.611 202.68' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M67.1085 197.073C67.1085 197.073 71.8626 193.529 75.6874 185.875' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M70.4279 176.262C70.4279 176.262 75.011 170.597 80.7123 167.147' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M65.1953 212.691C65.1953 212.691 63.4852 207.869 63.0184 203.553' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M69.802 252.405C67.0322 236.057 62.7503 228.527 65.4639 211.642C67.7035 197.705 66.7438 177.712 76.3824 161.645' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3ccircle cx='70.3712' cy='214.236' r='0.602053' transform='rotate(-12.7384 70.3712 214.236)' fill='%23292839'/%3e%3ccircle cx='71.3718' cy='202.282' r='0.602053' transform='rotate(-12.7384 71.3718 202.282)' fill='%23292839'/%3e%3ccircle cx='76.8621' cy='185.61' r='0.602053' transform='rotate(-12.7384 76.8621 185.61)' fill='%23292839'/%3e%3ccircle cx='81.6317' cy='168.483' r='0.602053' transform='rotate(-12.7384 81.6317 168.483)' fill='%23292839'/%3e%3ccircle cx='75.7639' cy='188.944' r='0.602053' transform='rotate(-12.7384 75.7639 188.944)' fill='%23292839'/%3e%3ccircle cx='79.5482' cy='170.188' r='0.602053' transform='rotate(-12.7384 79.5482 170.188)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 61.5762 202.309)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 61.9308 200.35)' fill='%23292839'/%3e%3ccircle cx='71.6959' cy='210.541' r='0.90308' transform='rotate(-12.7384 71.6959 210.541)' fill='%23292839'/%3e%3ccircle cx='69.5747' cy='210.712' r='0.602053' transform='rotate(-12.7384 69.5747 210.712)' fill='%23292839'/%3e%3ccircle cx='71.8672' cy='212.663' r='0.602053' transform='rotate(-12.7384 71.8672 212.663)' fill='%23292839'/%3e%3ccircle cx='71.5612' cy='200.387' r='0.602053' transform='rotate(-12.7384 71.5612 200.387)' fill='%23292839'/%3e%3ccircle cx='77.2782' cy='183.355' r='0.90308' transform='rotate(-12.7384 77.2782 183.355)' fill='%23292839'/%3e%3ccircle cx='82.5022' cy='165.508' r='0.90308' transform='rotate(-12.7384 82.5022 165.508)' fill='%23292839'/%3e%3ccircle r='0.923111' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 61.355 198.476)' fill='%23292839'/%3e%3ccircle cx='68.799' cy='212.74' r='0.602053' transform='rotate(-12.7384 68.799 212.74)' fill='%23292839'/%3e%3ccircle cx='69.7995' cy='200.785' r='0.602053' transform='rotate(-12.7384 69.7995 200.785)' fill='%23292839'/%3e%3ccircle cx='75.2892' cy='184.113' r='0.602053' transform='rotate(-12.7384 75.2892 184.113)' fill='%23292839'/%3e%3ccircle cx='80.2477' cy='165.092' r='0.602053' transform='rotate(-12.7384 80.2477 165.092)' fill='%23292839'/%3e%3ccircle cx='72.4296' cy='187.846' r='0.602053' transform='rotate(-12.7384 72.4296 187.846)' fill='%23292839'/%3e%3ccircle cx='78.1648' cy='166.798' r='0.602053' transform='rotate(-12.7384 78.1648 166.798)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 63.6043 201.534)' fill='%23292839'/%3e%3cpath d='M67.596 190.544C67.596 190.544 65.8859 185.723 65.419 181.407' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M71.7813 171.327C71.7813 171.327 72.0603 167.662 71.5935 163.345' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 63.9774 180.162)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 70.2195 163.293)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.169376 -0.985551 -0.985551 0.169376 75.2809 159.892)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 64.3317 178.204)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 70.5063 160.142)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.169376 -0.985551 -0.985551 0.169376 77.3679 158.032)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 66.0049 179.388)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 72.1794 161.327)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.814992 -0.579472 -0.579472 0.814992 72.8338 163.936)' fill='%23292839'/%3e%3ccircle r='0.602053' transform='matrix(-0.169376 -0.985551 -0.985551 0.169376 77.9856 161.227)' fill='%23292839'/%3e%3cpath d='M93.7851 269.759C91.339 268.229 88.6876 268.363 88.6876 268.363C88.6876 268.363 41.9135 265.557 53.6962 272.55C57.5411 274.832 60.3812 275.595 64.7552 276.475C73.2447 278.185 73.3087 275.167 83.6765 275.167C88.219 275.167 97.6464 272.175 93.7851 269.759Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M77.5852 239.047L75.1459 232.774C74.6305 231.449 73.3544 230.576 71.9325 230.576H61.2102C59.8764 230.576 58.6621 231.345 58.0926 232.551L54.924 239.261C54.1579 240.883 52.7795 242.135 51.2235 243.028C47.3851 245.231 40.3588 250.592 39.0872 260.795C37.3205 274.97 50.8299 273.336 65.0714 274.446C78.805 275.517 92.4131 271.382 92.9828 266.714C94.6311 253.207 85.8078 245.967 81.247 243.172C79.6437 242.189 78.2668 240.8 77.5852 239.047Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M81.2607 243.087C81.2607 243.087 66.5086 248.174 50.739 243.087' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M85.2173 245.87C85.2173 245.87 67.3316 252.66 47.913 245.348' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M619 115C618.057 112.643 618 96.5 618 96.5L623.5 123C623.5 123 617.684 125.449 618 124.5C619 121.5 621 120 619 115Z' fill='%23292839'/%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg width='881' height='421' viewBox='0 0 881 421' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='33.5' cy='301.5' r='23.5' fill='%23FFE94E'/%3e%3ccircle cx='7' cy='326' r='7' fill='%23FFE94E'/%3e%3cpath d='M29 385.5H229' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M95.1285 392.315C93.2079 391.114 91.1262 391.219 91.1262 391.219C91.1262 391.219 54.4023 389.016 63.6534 394.507C66.6721 396.298 68.902 396.897 72.3362 397.588C79.0015 398.931 79.0518 396.561 87.1919 396.561C90.7583 396.561 98.1601 394.212 95.1285 392.315Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M66.0752 394.391H81.6397C84.4768 394.391 87.1176 392.898 88.3377 390.337C89.7743 387.321 91.4741 383.127 91.8314 379.555C92.3141 374.728 91.2101 368.443 90.7858 366.286C90.7017 365.859 90.2916 365.586 89.8634 365.665C87.3704 366.125 79.3233 367.526 73.7873 367.526C68.2473 367.526 60.1924 366.123 57.7058 365.664C57.2799 365.586 56.8716 365.853 56.7846 366.277C56.3309 368.488 55.119 375.069 55.7433 379.555C56.2256 383.021 57.869 387.15 59.254 390.172C60.4675 392.819 63.1631 394.391 66.0752 394.391Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M75.3913 281.717C78.8713 297.3 79.401 316.602 69.7775 320.612C53.8001 327.269 48.5256 281.717 48.5256 281.717C48.5256 281.717 45.3179 240.416 54.1393 242.421C58.8828 243.499 58.8254 248.473 60.956 252.846C68.5746 268.484 72.7653 269.958 75.3913 281.717Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M53.3375 246.029C53.3375 246.029 74.1883 307.379 72.5844 367.526' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M100.653 303.369C89.8313 311.717 78.5991 332.641 88.6234 337.452C91.8314 338.992 101.71 321.819 110.677 312.191C120.426 301.723 141.954 293.827 136.741 286.528C134.736 283.721 114.687 292.543 100.653 303.369Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M79.802 366.723C79.802 366.723 83.0098 322.616 134.736 289.335' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M90.6281 279.311C90.164 291.147 88.6232 306.978 78.1978 306.978C64.1636 306.978 64.1635 291.949 64.1636 280.112C64.1637 263.672 72.9854 234 79.8017 234C87.8215 234 91.4301 258.861 90.6281 279.311Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M79.401 240.416C79.401 240.416 76.9952 327.027 72.9854 367.526' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M102.658 299.761C101.455 313.661 93.4356 329.625 83.4112 327.027C71.7915 324.015 78.1553 302.166 80.2033 297.756C85.4167 286.528 95.4405 259.662 105.465 262.469C115.489 265.276 103.861 285.86 102.658 299.761Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M81.7528 310.046C82.2744 308.008 82.7297 307.631 84.0129 307.632C85.2961 307.633 82.8127 315.96 81.7915 315.317C80.7704 314.674 81.2624 311.963 81.7528 310.046Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M74.2842 282.549C74.8353 283.909 74.6358 284.342 73.5564 284.987C72.477 285.633 70.5218 279.899 71.6923 279.731C72.8629 279.562 73.7659 281.27 74.2842 282.549Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M104.663 265.677C104.663 265.677 78.1981 329.032 75.7923 367.125' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M68.1736 295.751C69.953 307.098 74.8563 319.625 64.1637 323.819C52.0045 328.588 48.8104 309.38 43.7138 297.355C37.1007 281.751 31.6848 255.653 40.1052 255.653C44.405 255.653 44.9367 258.491 47.3227 262.068C51.8696 268.885 65.5955 279.31 68.1736 295.751Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M52.7675 301.084C53.3187 302.444 53.1191 302.877 52.0398 303.522C50.9604 304.168 49.0052 298.434 50.1757 298.266C51.3462 298.097 52.2493 299.805 52.7675 301.084Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M40.5062 259.262C40.5062 259.262 65.3668 311.389 73.7874 367.526' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M58.9512 323.418C67.3947 339.039 60.1547 342.264 57.3475 341.462C54.5404 340.66 48.9347 328.735 42.5114 321.413C34.1061 311.832 16.2075 304.973 18.4527 299.359C20.0563 295.349 50.9316 308.582 58.9512 323.418Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M20.4573 302.166C20.4573 302.166 58.5502 318.606 67.3717 367.125' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M90.6284 365.521C90.6284 365.521 73.7873 360.308 56.9463 365.521' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3ccircle cx='727' cy='114' r='90' fill='%23AC00FC'/%3e%3ccircle cx='815.5' cy='217.5' r='23.5' fill='%23AC00FC'/%3e%3cpath d='M698.52 181.119C698.52 181.119 664.348 203.198 643.292 188.807C631.046 180.439 621.548 177.008 619.006 162.395C616.764 149.513 628.208 132.707 628.208 132.707L634.527 156.209C635.44 159.607 639.902 160.397 641.927 157.52C642.636 156.513 642.861 155.244 642.541 154.054L638.043 137.323C636.29 130.806 638.658 123.877 644.032 119.795L667.258 102.156L667.504 135.032C667.504 135.032 671.787 109.442 684.009 100.516C695.558 92.0818 717.14 95.905 717.14 95.905C717.14 95.905 728.968 115.318 721.037 126.367C713.793 136.46 691.39 138.636 691.39 138.636C691.39 138.636 698.024 143.109 702.898 144.135C708.807 145.379 718.306 142.857 718.306 142.857L711.83 159.914C709.209 166.819 702.342 171.161 694.981 170.568L666.415 168.267C666.415 168.267 661.257 170.38 662.512 175.046C663.948 180.389 698.52 181.119 698.52 181.119Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M622 210C622 210 661.925 138.68 713.153 100.054' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M657.425 158.53C657.425 158.53 649.371 142.056 653.591 126.942' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M664.875 147.725C664.875 147.725 674.88 157.978 695.067 154.104' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M347.065 165.829C347.065 165.829 340.452 192.96 323.165 195.725C313.111 197.332 306.758 200.104 298.594 194.02C291.397 188.657 289.171 174.88 289.171 174.88L303.412 183.612C305.47 184.875 308.067 183.163 307.719 180.774C307.597 179.937 307.11 179.198 306.389 178.756L296.251 172.539C292.302 170.118 290.212 165.546 290.965 160.976L294.217 141.222L309.855 157.493C309.855 157.493 299.913 142.717 301.793 132.5C303.569 122.845 316.131 114.566 316.131 114.566C316.131 114.566 331.189 118.66 332.45 127.911C333.602 136.36 323.462 148.017 323.462 148.017C323.462 148.017 328.88 147.116 331.794 145.327C335.326 143.159 338.871 137.419 338.871 137.419L343.693 148.977C345.645 153.656 344.271 159.061 340.322 162.24L324.997 174.574C324.997 174.574 323.423 178.061 326.251 179.795C329.488 181.78 347.065 165.829 347.065 165.829Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M322.553 216.337C322.553 216.337 308.796 161.945 316.102 118.516' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M315.92 173.963C315.92 173.963 304.131 169.552 299.102 160.027' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M314.535 165.061C314.535 165.061 324.361 165.45 332.595 153.993' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M713.681 108.382C704.114 134.908 711.569 181.455 711.569 181.455C711.569 181.455 751.039 155.099 761.381 126.58C770.871 100.411 762.887 55 762.887 55C762.887 55 724.085 79.5329 713.681 108.382Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M763.035 55.3499C763.035 55.3499 765.62 126.851 711.717 181.805' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M763.035 55.3499C763.035 55.3499 711.354 104.828 711.717 181.805' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M762.887 55L711.919 181.308' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M420 269.117C429.313 288.84 458.889 310.166 458.889 310.166C458.889 310.166 465.994 274.148 456.012 252.913C446.852 233.427 417.61 213.012 417.61 213.012C417.61 213.012 409.871 247.667 420 269.117Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M417.882 213.122C417.882 213.122 458.474 250.738 459.162 310.276' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M417.882 213.122C417.882 213.122 416.782 268.453 459.162 310.276' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M417.61 213.012L458.999 309.894' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M549.555 97.5645C555.604 108.276 566.737 108.601 571.902 119.765C583.236 144.262 542.763 182.44 542.763 182.44C542.763 182.44 508.209 181.372 502.047 165.249C497.581 153.563 510.966 145.906 507.954 133.764C504.194 118.602 482.325 120.95 479.578 105.572C476.925 90.7227 494.814 85.2492 495.018 70.166C495.182 58.0263 483.333 52.4 485.728 40.4978C487.504 31.6737 493.525 28.7997 498.039 21.0119C502.128 13.9568 507.878 2.59478 507.878 2.59478C507.878 2.59478 514.436 24.8129 525.303 33.297C532.963 39.2774 541.064 36.2967 548.315 42.7675C564.285 57.02 539.03 78.9258 549.555 97.5645Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M507.523 2.24229C501.332 37.044 523.27 121.251 543.02 186.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M511.256 62.3345C511.256 62.3345 496.398 59.5548 485.742 44.7404' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M517.727 94.8402C517.727 94.8402 502.17 94.8912 489.408 84.3264' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M527.39 130.518C527.39 130.518 515.385 135.507 505.462 128.468' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M538.835 170.786C538.835 170.786 517.986 174.036 502.047 165.249' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M508.589 45.1928C508.589 45.1928 517.193 40.0409 521.756 29.7727' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M514.845 78.5861C514.845 78.5861 543.771 58.6921 546.542 41.0052' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M522.027 112.504C522.027 112.504 539.698 110.324 548.13 94.0332' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M533.257 151.147C533.257 151.147 552.196 148.114 572.619 122.591' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M584.578 115.586C580.088 123.537 571.825 123.778 567.991 132.065C559.578 150.248 589.62 178.586 589.62 178.586C589.62 178.586 615.268 177.793 619.841 165.826C623.156 157.152 613.221 151.468 615.457 142.455C618.248 131.201 634.481 132.944 636.52 121.53C638.489 110.508 625.211 106.445 625.059 95.2493C624.937 86.2385 633.733 82.0623 631.954 73.2278C630.636 66.6779 626.167 64.5447 622.817 58.7642C619.782 53.5274 615.514 45.0938 615.514 45.0938C615.514 45.0938 610.646 61.5855 602.58 67.8829C596.894 72.3219 590.88 70.1094 585.499 74.9125C573.645 85.4916 592.39 101.751 584.578 115.586Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M615.777 44.8323C620.843 73.3132 600.53 146.372 584.994 196' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M613.006 89.4366C613.006 89.4366 624.035 87.3733 631.944 76.3772' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M608.203 113.564C608.203 113.564 619.75 113.602 629.223 105.76' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M601.031 140.046C601.031 140.046 609.941 143.75 617.306 138.525' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M592.535 169.936C592.535 169.936 608.01 172.348 619.841 165.826' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M614.986 76.7129C614.986 76.7129 608.599 72.8888 605.212 65.2672' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M610.342 101.499C610.342 101.499 588.871 86.7329 586.815 73.6046' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M605.011 126.675C605.011 126.675 591.895 125.058 585.636 112.965' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M596.676 155.359C596.676 155.359 582.618 153.108 567.459 134.163' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M612.759 248.799C607.602 254.452 600.808 253.1 596.124 259.15C585.847 272.424 605.073 301.196 605.073 301.196C605.073 301.196 626.168 305.353 632.145 296.437C636.478 289.974 629.429 283.471 632.943 276.529C637.331 267.861 650.262 272.325 654.065 263.385C657.739 254.752 647.656 248.947 649.629 239.775C651.218 232.393 659.184 230.63 659.387 223.082C659.537 217.486 656.287 214.906 654.634 209.557C653.136 204.712 651.231 197.025 651.231 197.025C651.231 197.025 644.165 209.581 636.398 213.213C630.923 215.773 626.426 212.84 621.131 215.754C609.468 222.173 621.731 238.964 612.759 248.799Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M575.437 351.867C575.437 351.867 649.606 235.028 651.494 196.86' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M640.875 232.769C640.875 232.769 650.269 233.15 658.788 225.652' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M632.432 251.574C632.432 251.574 641.855 253.768 651.061 249.139' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M621.613 271.858C621.613 271.858 628.196 276.552 635.19 273.665' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M609.074 294.677C609.074 294.677 621.261 299.547 632.145 296.437' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M644.876 222.749C644.876 222.749 640.376 218.429 639.038 211.57' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M636.439 242.122C636.439 242.122 621.671 226.039 622.451 214.932' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M627.369 261.684C627.369 261.684 616.96 257.905 614.114 246.857' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M615.187 283.548C615.187 283.548 604.128 279.076 595.297 260.763' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M417.435 199.867C433.924 200.072 455.047 179.655 455.047 179.655C455.047 179.655 464.972 177.188 469.913 173.243C476.938 167.633 478.53 161.766 481.209 153.185C487.039 134.508 472.777 103.799 472.777 103.799C472.777 103.799 460.74 115.65 457.42 125.481C455.434 131.358 455.441 139.842 455.712 145.262C455.854 148.111 453.714 150.637 450.866 150.804C448.348 150.951 446.126 149.19 445.802 146.688C445.194 141.992 444.47 134.466 445.154 128.969C446.012 122.072 450.486 113.105 454.976 105.553C460.207 96.7547 459.003 85.2044 451.228 78.5471L425.684 56.676L420.238 93.8202C419.949 95.7906 418.316 97.2872 416.328 97.4036C413.764 97.5536 411.636 95.3916 411.683 92.8236C411.84 84.1856 411.016 66.3045 402.21 58.0492C389.575 46.2049 361.925 56.2499 361.925 56.2499C361.925 56.2499 356.056 82.8551 364.267 96.293C373.083 110.719 386.434 117.003 393.24 119.395C395.546 120.205 397.024 122.663 396.388 125.022C395.778 127.283 393.451 128.622 391.19 128.013L361.498 120.009L375.296 156.34C377.807 162.951 384.317 167.167 391.377 166.754L422.231 164.949C423.156 164.895 424.053 165.279 424.651 165.987C426.162 167.774 425.086 170.524 422.763 170.811L385.523 175.41C385.523 175.41 399.85 199.649 417.435 199.867Z' fill='white' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M482.5 233.5C482.5 233.5 420.5 103.5 373.834 65.469' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M425.108 128.582C425.108 128.582 440.382 107.153 436.044 84.3677' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M435.115 145.526C435.115 145.526 402.081 154.471 384.496 144.982' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M451.342 174.628C451.342 174.628 422.299 191.854 406.299 183.775' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M449.054 169.753C449.054 169.753 473.251 155.315 471.499 125.367' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3e%3cpath d='M432.09 306.936V306.336H431.49H407.461V159.328V158.728H406.861H350.78H350.446L350.27 159.012L253.252 315.606L253.162 315.752V315.922V350.203V350.803H253.762H350.18V401.625V402.225H350.78H406.861H407.461V401.625V350.803H431.49H432.09V350.203V306.936ZM350.18 234.496V306.336H308.224L347.796 238.357L347.8 238.35L350.18 234.496Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M494.952 172.941L494.95 172.943C477.349 188.056 465.783 211.826 460.184 244.154L452.631 287.77C447.069 319.882 450.033 346.111 461.616 366.39C473.211 386.69 492.408 399.136 519.116 403.761C545.605 408.349 567.696 403.11 585.314 387.983C603.025 372.888 614.645 349.128 620.244 316.799L627.77 273.347C633.35 241.126 630.396 214.843 618.812 194.563C607.218 174.264 588.076 161.827 561.476 157.22C534.879 152.614 512.678 157.834 494.952 172.941ZM572.521 217.11L572.522 217.113C575.5 226.166 575.545 239.226 572.578 256.357L562.356 315.383C559.279 332.497 554.819 344.602 549.034 351.796C546.16 355.326 542.872 357.752 539.171 359.104C535.469 360.456 531.32 360.745 526.704 359.946C521.924 359.118 517.996 357.401 514.893 354.815C511.791 352.231 509.485 348.753 507.984 344.357C504.99 335.418 504.989 322.089 508.071 304.297L518.634 243.305C521.72 227.438 526.055 216.036 531.591 209.018C534.398 205.537 537.649 203.148 541.343 201.824C545.04 200.498 549.216 200.226 553.888 201.035C558.664 201.863 562.583 203.618 565.671 206.283C568.758 208.947 571.046 212.546 572.521 217.11Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M805.85 385.409L794.678 335.83L818.119 330.548L818.705 330.416L818.573 329.831L809.061 287.622L808.929 287.037L808.344 287.168L784.903 292.451L752.586 149.039L752.454 148.454L751.869 148.585L697.16 160.914L696.834 160.987L696.725 161.303L636.503 335.394L636.448 335.555L636.485 335.722L644.021 369.164L644.153 369.75L644.738 369.618L738.809 348.42L747.917 385.683L748.029 386.14L748.5 386.14L805.265 386.14L806.015 386.14L805.85 385.409ZM713.231 234.96L729.023 305.043L688.093 314.266L711.753 239.25L711.756 239.243L713.231 234.96Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M292 385.5H880' stroke='%23292839' stroke-width='1.2' stroke-linecap='round'/%3e%3crect x='285' y='386' width='587' height='24' fill='white'/%3e%3cpath d='M195.095 101.784V99.0328C195.095 98.558 194.71 98.1731 194.235 98.1731C193.76 98.1731 193.375 98.558 193.375 99.0328V101.784C193.375 102.259 193.76 102.644 194.235 102.644C194.71 102.644 195.095 102.259 195.095 101.784Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M291.005 95.7656L197.126 97.8289V102.987L291.005 104.706C291.005 104.706 292.042 101.878 292 100C291.962 98.3018 291.005 95.7656 291.005 95.7656Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M225.014 99.0395L225.614 96.0355C225.835 94.9315 225.131 93.857 224.023 93.6597C222.424 93.3749 220.168 93.0341 218.447 93.0148C216.241 92.9902 212.432 93.4748 210.215 93.7883C209.21 93.9304 208.474 94.7933 208.474 95.8079V98.128C208.474 99.2849 209.425 100.216 210.582 100.201C212.613 100.175 215.633 100.155 217.415 100.236C219.048 100.311 221.2 100.528 222.729 100.699C223.806 100.819 224.801 100.101 225.014 99.0395Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M221.886 107.114C220.247 110.348 221.886 115.711 221.886 115.711L212.945 117.086C212.945 117.086 216.384 108.145 212.945 107.114C209.887 106.196 206.755 103.331 206.755 103.331L224.293 103.675C224.293 103.675 222.578 105.748 221.886 107.114Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M252.835 96.4534H249.052C249.052 96.4534 251.142 100.587 250.772 103.331C250.426 105.891 248.714 106.811 247.677 109.177C244.863 115.594 243.894 126.715 243.894 126.715L237.36 121.557C237.36 121.557 241.569 113.356 241.143 107.801C240.792 103.225 236.51 101.359 237.016 96.7973C237.36 93.7024 247.677 90.9513 250.772 92.6707C252.243 93.4879 252.835 96.4534 252.835 96.4534Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M222.23 147.692C226.012 140.126 226.356 123.276 225.325 115.367C224.921 112.272 221.725 115.515 218.447 115.367C214.731 115.199 212.601 111.24 211.225 115.367C209.562 120.357 209.85 147.692 209.85 147.692L175.118 135.312L178.557 147.692C178.557 147.692 214.294 163.563 222.23 147.692Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M195.483 378.817L192.5 366.5H185.5L184.785 376.333L189.649 380.482L195.483 378.817Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M162.815 378.817L159.5 366.5L153.196 367.532L152.116 376.333L156.98 380.482L162.815 378.817Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M183.343 384.265L184.785 376.333C184.785 376.333 188.434 377.624 190.753 378.091C192.627 378.468 194.312 378.189 196.047 377.66C197.169 377.317 198.39 377.445 199.364 378.098L209.14 384.653C209.744 385.058 209.457 386 208.731 386H184.79C183.872 386 183.179 385.168 183.343 384.265Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M150.674 384.265L152.116 376.333C152.116 376.333 155.765 377.624 158.084 378.091C159.958 378.468 161.644 378.189 163.379 377.66C164.501 377.317 165.721 377.445 166.696 378.098L176.472 384.653C177.076 385.058 176.789 386 176.062 386H152.122C151.204 386 150.51 385.168 150.674 384.265Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M207.443 301.062C207.443 285.201 192.312 218.531 192.312 218.531L161.019 214.06C161.019 214.06 162.319 236.936 168.241 256.701C174.677 278.186 185.778 296.931 185.778 303.125C185.778 310.304 178.816 350.131 183 367.5C183.649 370.193 186.575 367.564 190 367.5C193.441 367.435 197.38 369.923 198 367.5C201.036 355.631 207.443 313.743 207.443 301.062Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cmask id='mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='160' y='213' width='49' height='157'%3e%3cpath d='M207.443 301.062C207.443 285.201 192.312 218.531 192.312 218.531L161.019 214.06C161.019 214.06 162.319 236.936 168.241 256.701C174.677 278.186 185.778 296.931 185.778 303.125C185.778 310.304 178.816 350.131 183 367.5C183.649 370.193 186.575 367.564 190 367.5C193.441 367.435 197.38 369.923 198 367.5C201.036 355.631 207.443 313.743 207.443 301.062Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3c/mask%3e%3cg mask='url(%23mask0)'%3e%3cpath d='M196 359C196 342 207.5 297 207.5 297C207.5 297 214 360.5 202 371.5C195.465 377.49 179.5 371.5 179.5 368.5C179.5 363.56 196 365.206 196 359Z' fill='%23FFE94E'/%3e%3c/g%3e%3cpath d='M207.443 301.062C207.443 285.201 192.312 218.531 192.312 218.531L161.019 214.06C161.019 214.06 162.319 236.936 168.241 256.701C174.677 278.186 185.778 296.931 185.778 303.125C185.778 310.304 178.816 350.131 183 367.5C183.649 370.193 186.575 367.564 190 367.5C193.441 367.435 197.38 369.923 198 367.5C201.036 355.631 207.443 313.743 207.443 301.062Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M176.5 273.5L187 221L181.5 220L174.5 275.5L176.5 273.5Z' fill='%23292839'/%3e%3cpath d='M177.181 264.61C178.54 243.124 183.371 214.404 183.371 214.404H155.22C155.22 214.404 149.13 227.985 146.92 237.196C140.261 264.956 153.454 294.528 153.454 305.188C153.454 310.003 145.5 356 150.5 368C151.609 370.661 154.544 367.852 157.5 368C160.839 368.167 164.205 370.951 165 368C169.058 352.943 176.023 319.975 177.181 308.627C177.989 300.718 176.107 281.594 177.181 264.61Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M171.679 118.118L172.711 130.498L165.489 134.968L160.331 130.498L165.489 115.711L160.331 91.9832L186.81 94.3903C186.81 94.3903 189.905 113.304 179.245 121.901C175.497 124.923 171.679 118.118 171.679 118.118Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M148.639 180.016C148.511 159.631 158.956 126.715 158.956 126.715C158.956 126.715 161.466 130.097 164.458 131.185C168.241 132.561 172.711 130.498 172.711 130.498C172.711 130.498 183.549 141.297 186.466 150.786C190.294 163.238 185.226 171.175 186.466 184.143C188.023 200.426 197.377 216.67 194.719 218.531C184.747 225.511 164.802 213.372 156.893 216.467C143.752 221.609 148.728 194.127 148.639 180.016Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3cmask id='mask1' mask-type='alpha' maskUnits='userSpaceOnUse' x='147' y='125' width='49' height='97'%3e%3cpath d='M148.639 180.016C148.511 159.631 158.956 126.715 158.956 126.715C158.956 126.715 161.466 130.097 164.458 131.185C168.241 132.561 172.711 130.498 172.711 130.498C172.711 130.498 183.549 141.297 186.466 150.786C190.294 163.238 185.226 171.175 186.466 184.143C188.023 200.426 197.377 216.67 194.719 218.531C184.747 225.511 164.802 213.372 156.893 216.467C143.752 221.609 148.728 194.127 148.639 180.016Z' fill='white' stroke='%23292839' stroke-width='1.2'/%3e%3c/mask%3e%3cg mask='url(%23mask1)'%3e%3cpath d='M161.5 170C165.112 153.39 162.5 129.5 162.5 129.5L141.5 157L147 209C147 209 158.196 185.192 161.5 170Z' fill='%23FFE94E'/%3e%3c/g%3e%3cpath d='M148.639 180.016C148.511 159.631 158.956 126.715 158.956 126.715C158.956 126.715 161.466 130.097 164.458 131.185C168.241 132.561 172.711 130.498 172.711 130.498C172.711 130.498 183.549 141.297 186.466 150.786C190.294 163.238 185.226 171.175 186.466 184.143C188.023 200.426 197.377 216.67 194.719 218.531C184.747 225.511 164.802 213.372 156.893 216.467C143.752 221.609 148.728 194.127 148.639 180.016Z' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M177.525 80.979C184.372 83.561 190.812 86.4 191.28 93.7025C191.892 103.244 169.96 105.738 169.96 105.738C169.96 105.738 165.855 102.21 163.77 103.675C161.215 105.471 167.209 110.896 167.209 110.896C167.209 110.896 164.873 119.542 162.738 125.683C159.658 134.547 161.047 138.316 160.675 147.692C160.16 160.677 157.157 168.253 150.359 179.328C141.031 194.525 124.912 214.116 115.283 208.558C107.03 203.794 118.583 184.275 117.69 166.949C116.915 151.908 103.565 141.093 112.188 128.778C118.345 119.985 128.504 120.428 138.667 112.96C153.507 102.054 160.294 74.4809 177.525 80.979Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M217.071 162.822C206.325 171.419 163.082 162.822 163.082 162.822L169.616 138.407C169.616 138.407 199.877 149.28 211.569 144.597C217.071 142.393 229.107 124.996 235.641 118.118C237.347 116.322 238.522 119.728 241.143 121.557C244.093 123.615 248.708 122.588 246.645 126.715C243.999 132.007 234.265 149.067 217.071 162.822Z' fill='white' stroke='white' stroke-width='1.2'/%3e%3cpath d='M175 164.5C175 164.5 206.325 171.419 217.071 162.822C234.265 149.067 243.999 132.007 246.645 126.715C248.708 122.588 244.093 123.615 241.143 121.557C238.522 119.728 237.347 116.322 235.641 118.118C229.107 124.996 217.071 142.393 211.569 144.597C199.877 149.28 169.616 138.407 169.616 138.407' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M265 96.5V104' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M268 96.5V104' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M290.5 96C290.5 96 287.5 100 290.5 104.5' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M169.5 114.5L172 118.5L172.5 130.5L169.5 114.5Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3cpath d='M185 171C184.643 167.428 176.5 165 176.5 165L187 167L186 175.5L186.5 184C186.5 184 185.5 176 185 171Z' fill='%23292839' stroke='%23292839' stroke-width='1.2'/%3e%3c/svg%3e";

var ErrorWrapper = styled.div.withConfig({
  displayName: "Error__ErrorWrapper",
  componentId: "sc-1dyj76o-0"
})(["text-align:center;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
});
var StyledImage = styled(Image).withConfig({
  displayName: "Error__StyledImage",
  componentId: "sc-1dyj76o-1"
})(["max-width:750px;width:100%;"]);

var getImg = function getImg(image, statusCode) {
  switch (statusCode) {
    case 500:
      return img$1;

    case 404:
      return img;

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
  return /*#__PURE__*/react.createElement(ErrorWrapper, null, imgSrc && /*#__PURE__*/react.createElement(StyledImage, {
    src: imgSrc,
    alt: title,
    mb: 12
  }), /*#__PURE__*/react.createElement(H1, {
    content: title,
    mb: 2
  }), subTitle && /*#__PURE__*/react.createElement(Text, {
    content: subTitle,
    color: "textSecondary",
    mb: 6
  }), action);
};
ErrorTemplate.propTypes = ErrorTemplatePropTypes;
ErrorTemplate.defaultProps = ErrorTemplateDefaultProps;

var CloseModalIcon = styled(Icon).attrs(function () {
  return {
    size: "lg"
  };
}).withConfig({
  displayName: "ImageModal__CloseModalIcon",
  componentId: "sc-1een0u3-0"
})(["position:absolute;top:0;right:0;border-radius:100%;&&{margin:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
});
var StyledImg = styled(Image).withConfig({
  displayName: "ImageModal__StyledImg",
  componentId: "sc-1een0u3-1"
})(["width:100%;max-width:100%;user-select:none;object-fit:cover;"]);
var ImageModal = function ImageModal(_ref2) {
  var isOpen = _ref2.isOpen,
      onClose = _ref2.onClose,
      imgSrc = _ref2.imgSrc;
  return /*#__PURE__*/react.createElement(Modal, {
    onClose: onClose,
    isOpen: isOpen,
    maxWidth: "sm"
  }, /*#__PURE__*/react.createElement(CloseModalIcon, {
    color: "secondary",
    icon: "times",
    onClick: onClose
  }), /*#__PURE__*/react.createElement(StyledImg, {
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

var _excluded$3 = ["hasPreview", "imgSrc", "onClick"];
var Container = styled.div.withConfig({
  displayName: "Thumbnail__Container",
  componentId: "sc-142uf10-0"
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
  componentId: "sc-142uf10-1"
})(["position:absolute;top:0;left:0;width:100%;height:100%;transition:all 0.1s ease-in-out;display:flex;align-items:center;justify-content:center;cursor:pointer;:hover{background-color:rgba(0,0,0,0.2);}"]);
var StyledIcon = styled(Icon).withConfig({
  displayName: "Thumbnail__StyledIcon",
  componentId: "sc-142uf10-2"
})(["color:", ";"], function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return !color && theme.palette.common.white;
});
var Thumbnail = function Thumbnail(_ref3) {
  var hasPreview = _ref3.hasPreview,
      imgSrc = _ref3.imgSrc,
      onClick = _ref3.onClick,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded$3);

  var _useState = react.useState(false),
      loadError = _useState[0],
      setLoadError = _useState[1];

  var _useState2 = react.useState(false),
      previewOpen = _useState2[0],
      setPreviewOpen = _useState2[1];

  var handleClick = function handleClick() {
    if (hasPreview) setPreviewOpen(true);else onClick();
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Container, _extends({
    onClick: handleClick
  }, props), loadError ? /*#__PURE__*/react.createElement(StyledIcon, {
    color: "secondary",
    icon: "file",
    size: "lg"
  }) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(IconWrapper, null, /*#__PURE__*/react.createElement(StyledIcon, {
    icon: "search-plus"
  })), /*#__PURE__*/react.createElement(Image, {
    cover: true,
    src: imgSrc,
    alt: "Thumbnail",
    onError: function onError() {
      return setLoadError(true);
    },
    width: "48px"
  }))), hasPreview && /*#__PURE__*/react.createElement(ImageModal, {
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
  arrow: PropTypes.bool,
  children: PropTypes.node.isRequired,
  content: PropTypes.node,
  contentProps: PropTypes.shape({}),
  interactive: PropTypes.bool,
  placement: PropTypes.string,
  renderContent: PropTypes.func
};
var TooltipDefaultProps = {
  arrow: true,
  interactive: true,
  placement: "top",
  renderContent: function renderContent() {}
};

var _excluded$2 = ["children", "content", "contentProps", "renderContent"];
var StyledTooltip = styled(function (props) {
  return /*#__PURE__*/react.createElement(MuiTooltip, _extends({
    classes: {
      popper: props.className,
      tooltip: "tooltip"
    }
  }, props));
}).withConfig({
  displayName: "Tooltip__StyledTooltip",
  componentId: "sc-1qj0z7d-0"
})(["& .MuiTooltip-tooltip{background-color:", ";color:", ";}& .MuiTooltip-arrow{color:", ";}"], function (_ref) {
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
      props = _objectWithoutPropertiesLoose(_ref4, _excluded$2);

  return /*#__PURE__*/react.createElement(StyledTooltip, _extends({
    title: renderContent() || /*#__PURE__*/react.createElement(Text, _extends({
      fontStyle: "italic",
      size: "sm"
    }, contentProps), content)
  }, props), /*#__PURE__*/react.createElement("span", null, children));
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

var _excluded$1 = ["children", "content", "currentStep", "handleNext", "handlePrev", "isFirstStep", "isLastStep", "isHorizontal", "nextStepMethod", "renderActionButtons", "stepCount", "submitButtonDisabled", "onFinishDisabled", "submitButtonLoading", "showNavigationButtons"];
var StyledContent = styled.div.withConfig({
  displayName: "Content__StyledContent",
  componentId: "sc-196inky-0"
})(["width:100%;height:100%;flex:1;padding:", ";}", "{padding:", ";}"], function (_ref) {
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
var ActionWrapper = styled.div.withConfig({
  displayName: "Content__ActionWrapper",
  componentId: "sc-196inky-1"
})(["display:flex;justify-content:space-between;align-items:center;padding:16px 16px;background-color:", ";"], function (_ref4) {
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
      props = _objectWithoutPropertiesLoose(_ref5, _excluded$1);

  return /*#__PURE__*/react.createElement(StyledContent, _extends({
    isHorizontal: isHorizontal
  }, props), children || content, showNavigationButtons && /*#__PURE__*/react.createElement(ActionWrapper, null, isHorizontal && /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(OutlineButton, {
    color: "secondary",
    disabled: isFirstStep,
    icon: "arrow-left",
    iconProps: {
      color: "secondary"
    },
    noPadding: true,
    onClick: handlePrev
  }), /*#__PURE__*/react.createElement(Text, {
    color: "textSecondary",
    dInline: true,
    fontStyle: "italic",
    ml: 2
  }, currentStep + " of " + stepCount + " steps")), /*#__PURE__*/react.createElement("div", null, isLastStep && renderActionButtons(), !onFinishDisabled && /*#__PURE__*/react.createElement(Button$1, {
    content: isLastStep ? "Finish" : "Next",
    disabled: submitButtonDisabled,
    loading: submitButtonLoading,
    onClick: nextStepMethod === "button" ? handleNext : undefined,
    type: nextStepMethod
  }), !isLastStep && onFinishDisabled && /*#__PURE__*/react.createElement(Button$1, {
    content: isLastStep ? "Finish" : "Next",
    disabled: submitButtonDisabled,
    loading: submitButtonLoading,
    onClick: nextStepMethod === "button" ? handleNext : undefined,
    type: nextStepMethod
  }))));
};
WizardStepContent.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  currentStep: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isHorizontal: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
  nextStepMethod: PropTypes.string.isRequired,
  renderActionButtons: PropTypes.func,
  stepCount: PropTypes.number.isRequired,
  submitButtonDisabled: PropTypes.bool,
  submitButtonLoading: PropTypes.bool,
  onFinishDisabled: PropTypes.bool,
  showNavigationButtons: PropTypes.bool
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

var StyledTitle = styled.div.withConfig({
  displayName: "Title__StyledTitle",
  componentId: "sc-8gl7u5-0"
})(["display:flex;align-items:center;text-overflow:ellipsis;overflow:hidden;white-space:normal;", " ", " ", ""], function (_ref) {
  var isPassed = _ref.isPassed;
  return isPassed && css(["cursor:pointer;"]);
}, function (_ref2) {
  var isHorizontal = _ref2.isHorizontal;
  return isHorizontal && css(["flex-direction:column;align-items:flex-start;"]);
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled && css(["cursor:not-allowed;"]);
});
var Flag = styled.div.withConfig({
  displayName: "Title__Flag",
  componentId: "sc-8gl7u5-1"
})(["width:32px;height:32px;display:flex;align-items:center;justify-content:center;border:2px solid ", ";background-color:", ";color:", ";border-radius:100%;font-weight:600;font-size:14px;line-height:120%;z-index:1;transition:all ", " ease-in-out;"], function (props) {
  return stepBorderAndTitleColor(props);
}, function (props) {
  return stepFlagBackgroundColor(props);
}, function (props) {
  return stepFlagColor(props);
}, function (_ref4) {
  var transitionDuration = _ref4.transitionDuration;
  return transitionDuration + "ms";
});
var Label = styled.span.withConfig({
  displayName: "Title__Label",
  componentId: "sc-8gl7u5-2"
})(["font-weight:600;font-size:16px;line-height:120%;color:", ";padding-left:8px;transition:all ", " ease-in-out;", ""], function (props) {
  return stepBorderAndTitleColor(props);
}, function (_ref5) {
  var transitionDuration = _ref5.transitionDuration;
  return transitionDuration + "ms";
}, function (_ref6) {
  var isHorizontal = _ref6.isHorizontal;
  return isHorizontal && css(["font-size:12px;padding:4px 4px 0 0;"]);
});
var RightTitle = styled.div.withConfig({
  displayName: "Title__RightTitle",
  componentId: "sc-8gl7u5-3"
})(["flex:1;text-align:right;"]);
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
  return /*#__PURE__*/react.createElement(StyledTitle, {
    disabled: disabled,
    onClick: onClick,
    isHorizontal: isHorizontal,
    isPassed: isPassed
  }, /*#__PURE__*/react.createElement(Flag, {
    isActive: isActive,
    isPassed: isPassed,
    transitionDuration: transitionDuration
  }, flag), /*#__PURE__*/react.createElement(Label, {
    isActive: isActive,
    isHorizontal: isHorizontal,
    isPassed: isPassed,
    transitionDuration: transitionDuration
  }, label), rightTitle && !isHorizontal && /*#__PURE__*/react.createElement(RightTitle, null, rightTitle));
};
WizardStepTitle.propTypes = {
  disabled: PropTypes.bool.isRequired,
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

var _excluded = ["currentStepContent", "currentStepIndex", "headerFadeColor", "nextStepMethod", "orientation", "onFinishDisabled", "renderActionButtons", "setCurrentStepIndex", "steps", "submitButtonDisabled", "submitButtonLoading", "showNavigationButtons", "transitionDuration", "backgroundStyle"];
var Wrapper = styled.div.withConfig({
  displayName: "Wizard__Wrapper",
  componentId: "sc-3fjyf3-0"
})(["", " ", ""], function (theme) {
  return SPACER(theme);
}, function (theme) {
  return DISPLAY(theme);
});
var StepsWrapper = styled.div.withConfig({
  displayName: "Wizard__StepsWrapper",
  componentId: "sc-3fjyf3-1"
})(["padding:", ";", " &&{", "}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing(4);
}, function (_ref2) {
  var headerFadeColor = _ref2.headerFadeColor,
      isHorizontal = _ref2.isHorizontal,
      theme = _ref2.theme;
  return isHorizontal && css(["position:relative;::before{content:\"\";display:inline-block;width:64px;height:100%;background:linear-gradient( 90deg,", " 0%,rgba(255,255,255,0) 100% );position:absolute;top:0;left:0;z-index:2;}::after{content:\"\";display:inline-block;width:64px;height:100%;background:linear-gradient( 270deg,", " 0%,rgba(255,255,255,0) 100% );position:absolute;top:0;right:0;z-index:2;}", "{::before{width:32px;}::after{content:\"\";width:32px;}}"], headerFadeColor, headerFadeColor, theme.breakpoints.down("sm"));
}, function (_ref3) {
  var backgroundStyle = _ref3.backgroundStyle;
  return backgroundStyle === "primary" && css(["background-color:", ";position:relative;::before{content:none;}::after{content:none;}"], function (_ref4) {
    var theme = _ref4.theme;
    return theme.palette.common.white;
  });
});
var Steps = styled.div.withConfig({
  displayName: "Wizard__Steps",
  componentId: "sc-3fjyf3-2"
})(["", ""], function (_ref5) {
  var isHorizontal = _ref5.isHorizontal,
      theme = _ref5.theme;
  return isHorizontal && css(["display:flex;align-items:center;justify-content:flex-start;white-space:nowrap;overflow-y:hidden;overflow-x:scroll;padding:0 64px;user-select:none;-ms-overflow-style:none;&&::-webkit-scrollbar{display:none;}&.active{cursor:grabbing;cursor:-webkit-grabbing;}", "{padding:0 32px;}"], theme.breakpoints.down("sm"));
});
var StepConnector = styled.div.withConfig({
  displayName: "Wizard__StepConnector",
  componentId: "sc-3fjyf3-3"
})(["border-width:0;border-style:dashed;border-color:", ";border-left-width:2px;transition:all ", " ease-in-out;position:absolute;top:0;left:15px;bottom:0;::before{content:\"\";width:2px;height:100%;display:inline-block;}", ""], function (props) {
  return stepConnectorColor(props);
}, function (_ref6) {
  var transitionDuration = _ref6.transitionDuration;
  return transitionDuration + "ms";
}, function (_ref7) {
  var isHorizontal = _ref7.isHorizontal;
  return isHorizontal && css(["width:100%;border-left-width:0;border-top-width:2px;top:15px;left:8px;::before{content:\"\";width:100%;height:2px;display:inline-block;}"]);
});
var Step = styled.div.withConfig({
  displayName: "Wizard__Step",
  componentId: "sc-3fjyf3-4"
})(["box-sizing:border-box;position:relative;min-height:60px;:last-child{", "{", ";}}", ""], StepConnector, function (_ref8) {
  var isActive = _ref8.isActive,
      isHorizontal = _ref8.isHorizontal;
  return (!isActive || isHorizontal) && "border: none";
}, function (_ref9) {
  var isHorizontal = _ref9.isHorizontal;
  return isHorizontal && css(["width:100px;min-width:100px;"]);
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
      props = _objectWithoutPropertiesLoose(_ref10, _excluded);

  var stepRef = react.useRef(null);
  var wrapperRef = /*#__PURE__*/react.createRef();
  var isHorizontal = orientation === "horizontal";
  var stepCount = steps.length;
  var isLastStep = currentStepIndex === stepCount - 1;
  var isFirstStep = currentStepIndex === 0;
  react.useEffect(function () {
    if (isHorizontal) {
      handleScroll(wrapperRef.current);
    }
  }, []);
  react.useEffect(function () {
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

  var content = /*#__PURE__*/react.createElement(WizardStepContent, {
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
  return /*#__PURE__*/react.createElement(Wrapper, props, /*#__PURE__*/react.createElement(StepsWrapper, {
    headerFadeColor: headerFadeColor,
    isHorizontal: isHorizontal,
    backgroundStyle: backgroundStyle
  }, /*#__PURE__*/react.createElement(Steps, {
    isHorizontal: isHorizontal,
    ref: wrapperRef
  }, steps.map(function (step, idx) {
    var isActive = idx === currentStepIndex;
    var isPassed = idx < currentStepIndex;
    var stepKey = "step-" + idx;
    return /*#__PURE__*/react.createElement(Step, {
      isActive: isActive,
      isHorizontal: isHorizontal,
      isPassed: isPassed,
      key: stepKey,
      ref: isActive ? stepRef : null
    }, /*#__PURE__*/react.createElement(WizardStepTitle, {
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
    }), !isHorizontal && isActive && content, /*#__PURE__*/react.createElement(StepConnector, {
      isActive: isActive,
      isHorizontal: isHorizontal,
      isPassed: isPassed,
      transitionDuration: transitionDuration
    }));
  }))), isHorizontal && content);
};
Wizard.propTypes = WizardPropTypes;
Wizard.defaultProps = WizardDefaultProps;

export { AdvancedLineItem, Alert, AppContainer, AppContext, AppContextProvider, AuthLayout, BorderedRadio, Box$1 as Box, BoxBase, Button$1 as Button, ButtonBase, COLOR, COLOR_PROP_TYPES, CartButton, CategoryItem, CategoryItemContentLoader, Checkbox, ChipBadge, Collapse, CollapseButton, CollectionItem, CreatorsHubAuthLayout, CreatorsHubMainLayout, CropModal, DIMENSION, DIMENSION_PROP_TYPES, DISPLAY, DISPLAY_PROP_TYPES, DashboardLayout, Datepicker, DetailsTable, Divider, DotsSpinner, DownloadModule, Dropdown, ErrorTemplate, ExplorerLayout, FieldBase, FieldWrapper, Fieldset, FileManager, FilePond, FileUpload, Flex, Form, FormDatepicker, FormError, FormLabel, FormRow, FreeBrandIconSet, FreeSolidIconSet, GlobalStyle, H1, H2, H3, H4, H5, H6, HeadingBase, Hidden, HideOnScroll, History, HistoryTree, Icon, Image, ImageModal, Indicator, Input, Inspector, InspectorDefaultProps, InspectorItem, InspectorPropTypes, ItemSelect, KIT_COLORS, KIT_FONTS, KIT_ICON_SIZES, KIT_TYPOGRAPHY, Language, Link, MINI_SHARE_MODULE_SHARE_OPTIONS, MarketPlaceItem, MiniShareModule, Modal, NoItem, OutlineButton, PageFigure, PageLoading, PageMeta, PageProgressBar, PageTransition, Pagination, Paragraph, PriceField, Profile, Radio, RadioBase, RadioEnhanced, RangeSlider, ReactSelect, RocksKitIcons, RocksKitTheme, RocksSpinner, SPACER, SPACER_FORMULA, SPACER_POSTFIX, SPACER_PROP_TYPES, SearchBar, Select, ShareModule, ShareModuleDefaultProps$1 as ShareModuleDefaultProps, ShareModulePropTypes$1 as ShareModulePropTypes, Snackbar, Stepper, THEME_COLORS, Tab, Table, TabsSwitch, TabsToggle, Text, TextArea, TextBase, TextButton, Thumbnail, TinyBadge, Toggle, ToggleSwitch, Tooltip, Wizard, convertHexToRGBA, formatDateAndTime, formatPrice, getFormInputError, getFormRowErrors, handleScroll, useAppContext, useMediaQuery };
//# sourceMappingURL=rockskit.es.js.map
