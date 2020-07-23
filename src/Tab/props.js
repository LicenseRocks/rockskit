import PropTypes from "prop-types";

export const TabPropTypes = {
  currentTab: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      showTab: PropTypes.bbol,
    })
  ).isRequired,
};
