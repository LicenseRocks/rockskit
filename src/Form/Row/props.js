import PropTypes from "prop-types";

export const FormRowPropTypes = {
  children: PropTypes.node.isRequired,
  errors: PropTypes.arrayOf(PropTypes.node).isRequired,
  label: PropTypes.node,
  show: PropTypes.bool.isRequired,
};

export const FormRowDefaultProps = {
  label: "",
};
