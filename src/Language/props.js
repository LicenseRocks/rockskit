import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const LanguagePropTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const LanguageDefaultProps = {
  languages: [
    { value: "en", label: "English" },
    { value: "de", label: "Deutsch" },
  ],
  size: "sm",
};
