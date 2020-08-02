import PropTypes from "prop-types";

export const RadioBasePropTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  hasError: PropTypes.bool,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.string,
    })
  ),
  register: PropTypes.func.isRequired,
  stacked: PropTypes.bool,
};

export const RadioBaseDefaultProps = {
  defaultValue: "",
  hasError: false,
  name: "radio",
  stacked: true,
};
