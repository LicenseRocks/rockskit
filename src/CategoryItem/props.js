import PropTypes from "prop-types";

export const CategoryItemPropTypes = {
  checked: PropTypes.bool.isRequired,
  dataCy: PropTypes.string,
  description: PropTypes.string,
  iconName: PropTypes.string,
  iconImage: PropTypes.string,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  subCategory: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export const CategoryItemDefaultProps = {
  dataCy: "categoryItem",
  iconName: null,
  iconImage: null,
  description: "",
  subCategory: false,
};
