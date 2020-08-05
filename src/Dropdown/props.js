import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const DropdownPropTypes = {
  anchorEl: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
    })
  ),
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const DropdownDefaultProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center",
  },
  getContentAnchorEl: null,
  transformOrigin: {
    vertical: "top",
    horizontal: "center",
  },
};