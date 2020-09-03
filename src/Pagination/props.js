import PropTypes from "prop-types";

export const PaginationPropTypes = {
  currentPage: PropTypes.number,
  itemProps: PropTypes.shape({}),
  nextText: PropTypes.string,
  pageCount: PropTypes.number,
  prevText: PropTypes.string,
};

export const PaginationDefaultProps = {
  nextText: "Next",
  prevText: "Prev",
};
