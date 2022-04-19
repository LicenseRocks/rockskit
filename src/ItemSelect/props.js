import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const ItemSelectPropTypes = {
  async: PropTypes.bool,
  endpoint: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const ItemSelectDefaultProps = {};
