import PropTypes from "prop-types";

import { DISPLAY_PROP_TYPES, SPACER_PROP_TYPES } from "../theme";

export const HistoryTreePropTypes = {
  activeNodeId: PropTypes.number,
  data: PropTypes.array.isRequired,
  onNodeClick: PropTypes.func,
  ...SPACER_PROP_TYPES,
  ...DISPLAY_PROP_TYPES,
};

export const HistoryTreeDefaultProps = {
  activeNodeId: null,
  onNodeClick: () => {},
};
