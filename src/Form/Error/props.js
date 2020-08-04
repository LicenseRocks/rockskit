import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../../theme";

export const FormErrorPropTypes = {
  message: PropTypes.node.isRequired,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const FormErrorDefaultProps = {};
