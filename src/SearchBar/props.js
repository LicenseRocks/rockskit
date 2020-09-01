import PropTypes from "prop-types";

export const SearchBarPropTypes = {
  filterButtonText: PropTypes.string,
  filterItems: PropTypes.array,
  noBorderRadius: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  showFilter: PropTypes.nool,
  value: PropTypes.string,
};

export const SearchBarDefaultProps = {
  filterButtonText: "Filter",
  filterItems: [],
  placeholder: "Type and press Enter",
};
