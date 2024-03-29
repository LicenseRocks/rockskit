import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";

export const RadioEnhancedPropTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const RadioEnhancedDefaultProps = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: "value",
      title: "Title",
      description: "Description",
      price: "Free",
      icon: "tv",
    })
  ),
};
