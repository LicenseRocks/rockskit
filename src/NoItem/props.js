import PropTypes from "prop-types";

import {
  COLOR_PROP_TYPES,
  DISPLAY_PROP_TYPES,
  SPACER_PROP_TYPES,
} from "../theme";

export const NoItemPropTypes = {
  buttonAction: PropTypes.func,
  buttonHref: PropTypes.string,
  buttonText: PropTypes.string,
  dataCy: PropTypes.string,
  text: PropTypes.string,
  ...COLOR_PROP_TYPES,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const NoItemDefaultProps = {
  buttonAction: null,
  buttonHref: null,
  buttonText: "",
  dataCy: "noItem",
  text: "Nothing yet...",
};
