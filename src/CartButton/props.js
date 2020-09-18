import PropTypes from "prop-types";

export const CartButtonPropTypes = {
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const CartButtonDefaultProps = {
  count: "0",
};
