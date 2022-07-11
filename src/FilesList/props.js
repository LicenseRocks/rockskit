import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const FilesListPropTypes = {
  anchorEl: PropTypes.object,
  children: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
    })
  ),
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  responsive: PropTypes.bool,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const FilesListDefaultProps = {
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
