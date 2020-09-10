import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const DetailsTablePropTypes = {
  justifyBetween: PropTypes.bool,
  labelFontSize: PropTypes.string,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.node,
      expanded: PropTypes.bool,
    })
  ),
  size: PropTypes.oneOf(["sm", "md"]),
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const DetailsTableDefaultProps = {
  labelFontSize: "md",
  size: "md",
};
