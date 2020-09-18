import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const SearchBarPropTypes = {
  filterButtonText: PropTypes.string,
  filterItems: PropTypes.array,
  noBorderRadius: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  showFilter: PropTypes.nool,
  value: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const SearchBarDefaultProps = {
  filterButtonText: "Filter",
  filterItems: [],
  placeholder: "Type and press Enter",
};
