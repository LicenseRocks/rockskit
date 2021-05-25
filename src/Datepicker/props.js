import PropTypes from "prop-types";

export const DatepickerPropTypes = {
  from: PropTypes.string,
  selectRange: PropTypes.bool,
  to: PropTypes.string,
};

export const DatepickerDefaultProps = {
  from: null,
  selectRange: false,
  to: null,
};
