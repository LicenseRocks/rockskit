import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const DropdownPropTypes = {
  children: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
    })
  ),
  onClose: PropTypes.func,
  disableOutsideClickClose: PropTypes.bool,
  render: PropTypes.func,
  responsive: PropTypes.bool,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const DropdownDefaultProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center",
  },
  disableOutsideClickClose: false,
  getContentAnchorEl: null,
  transformOrigin: {
    vertical: "top",
    horizontal: "center",
  },
};
