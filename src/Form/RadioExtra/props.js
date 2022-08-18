import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";

export const RadioExtraPropTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
      iconPrefix: PropTypes.string,
    })
  ).isRequired,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const RadioExtraDefaultProps = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: "value",
      title: "Title",
      description: "Description",
      icon: "tv",
      iconPrefix: "far"
    })
  ),
};
