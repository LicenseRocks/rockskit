import PropTypes from "prop-types";
import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const ProgressBarPropTypes = {
  value: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  progressColor: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const ProgressBarDefaultProps = {};
