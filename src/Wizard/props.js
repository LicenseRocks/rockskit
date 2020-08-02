import PropTypes from "prop-types";

export const WizardPropTypes = {
  currentStepContent: PropTypes.node.isRequired,
  currentStepIndex: PropTypes.number.isRequired,
  nextStepMethod: PropTypes.oneOf(["submit", "button"]),
  orientation: PropTypes.string,
  setCurrentStepIndex: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  transitionDuration: PropTypes.number,
};

export const WizardDefaultProps = {
  nextStepMethod: "submit",
  orientation: "horizontal",
  transitionDuration: 250,
};
