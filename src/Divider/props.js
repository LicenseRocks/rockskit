import PropTypes from "prop-types";

import { SPACER_PROP_TYPES } from "..";

export const DividerPropTypes = {
  className: PropTypes.any,
  thickness: PropTypes.number,
  ...SPACER_PROP_TYPES,
};

export const DividerDefaultProps = {
  thickness: 1,
};
