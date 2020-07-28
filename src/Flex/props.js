import PropTypes from "prop-types";

import { SPACER_PROP_TYPES } from "../theme";

export const FlexPropTypes = {
  alignItems: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "stretch",
    "baseline",
  ]),
  container: PropTypes.bool,
  item: PropTypes.bool,
  justify: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  ...SPACER_PROP_TYPES,
};

export const FlexDefaultProps = {
  alignItems: "center",
  justify: "flex-start",
};
