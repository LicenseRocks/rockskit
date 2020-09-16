import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const TablePropTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  noDataProps: PropTypes.shape(),
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};
export const TableDefaultProps = {
  columns: [],
  rows: [],
};
