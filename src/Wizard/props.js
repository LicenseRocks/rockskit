import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const WizardPropTypes = {
  currentStepContent: PropTypes.node.isRequired,
  currentStepIndex: PropTypes.number.isRequired,
  headerFadeColor: PropTypes.string,
  nextStepMethod: PropTypes.oneOf(["submit", "button"]),
  orientation: PropTypes.string,
  setCurrentStepIndex: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  submitButtonDisabled: PropTypes.bool,
  submitButtonLoading: PropTypes.bool,
  transitionDuration: PropTypes.number,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const WizardDefaultProps = {
  headerFadeColor: "#ffffff",
  nextStepMethod: "submit",
  orientation: "horizontal",
  transitionDuration: 250,
};
