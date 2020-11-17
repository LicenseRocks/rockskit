import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const TablePropTypes = {
  columns: PropTypes.array.isRequired,
  noDataProps: PropTypes.shape(),
  rows: PropTypes.array.isRequired,
  rowsBottomBorderSm: PropTypes.bool,
  rowsSize: PropTypes.string,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};
export const TableDefaultProps = {
  columns: [],
  rows: [],
  rowsBottomBorderSm: false,
  rowsSize: "lg",
};
