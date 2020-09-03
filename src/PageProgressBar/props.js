import PropTypes from "prop-types";

export const PageProgressBarPropTypes = {
  isAnimating: PropTypes.bool,
  instanceKey: PropTypes.string,
  listener: PropTypes.func,
};

export const PageProgressBarDefaultProps = {
  isAnimating: false,
  instanceKey: null,
};
