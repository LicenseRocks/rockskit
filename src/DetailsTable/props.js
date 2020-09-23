import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const DetailsTablePropTypes = {
  expandButtonTitle: PropTypes.string,
  justifyBetween: PropTypes.bool,
  labelFontSize: PropTypes.string,
  labelTextTransform: PropTypes.string,
  labelWidth: PropTypes.number,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      iconProps: PropTypes.shape({}),
      label: PropTypes.string,
      renderLabel: PropTypes.func,
      value: PropTypes.node,
      expanded: PropTypes.bool,
    })
  ),
  size: PropTypes.oneOf(["sm", "md"]),
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const DetailsTableDefaultProps = {
  expandButtonTitle: "Expandable items",
  labelFontSize: "md",
  labelTextTransform: "initial",
  labelWidth: 140,
  size: "md",
};
