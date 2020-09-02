import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const DetailsTablePropTypes = {
  justifyBetween: PropTypes.bool,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.node,
      expanded: PropTypes.bool,
    })
  ),
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const DetailsTableDefaultProps = {};
