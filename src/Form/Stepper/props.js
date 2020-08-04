import PropTypes from "prop-types";

export const StepperPropTypes = {
  control: PropTypes.object,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["sm", "normal"]),
  value: PropTypes.number,
};

export const StepperDefaultProps = {
  label: "Days",
  min: 1,
  max: 100,
  name: "stepper",
  size: "normal",
  value: 1,
};
