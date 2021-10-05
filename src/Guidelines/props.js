import PropTypes from "prop-types";
import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const GuidelinesPropTypes = {
  children: PropTypes.node,
  data: PropTypes.array,
  buttonFunction: PropTypes.func,
  animation: PropTypes.bool,
  buttonText: PropTypes.node,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const GuidelinesDefaultProps = {
  children: null,
  data: null,
  buttonFunction: null,
  buttonText: null,
  animation: false,
};
