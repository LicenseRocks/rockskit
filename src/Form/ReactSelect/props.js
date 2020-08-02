import PropTypes from "prop-types";

export const ReactSelectPropTypes = {
  async: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  endpoint: PropTypes.string,
  endpointQueryFlag: PropTypes.string,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

export const ReactSelectDefaultProps = {
  defaultValue: undefined,
  endpointQueryFlag: "q",
};
