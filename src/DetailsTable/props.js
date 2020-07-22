import PropTypes from "prop-types";

export const DetailsTablePropTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.node,
      expanded: PropTypes.bool,
    })
  ),
};

export const DetailsTableDefaultProps = {};
