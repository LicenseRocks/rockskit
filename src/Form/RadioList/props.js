import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";

export const RadioListPropTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      title: PropTypes.string,
      info: PropTypes.string,
      icon: PropTypes.string,
      iconPrefix: PropTypes.string,
    })
  ).isRequired,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const RadioListDefaultProps = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: "value",
      title: "Title",
      info: "Description",
      icon: "photo-film-music",
      iconPrefix: "far",
    })
  ),
};
