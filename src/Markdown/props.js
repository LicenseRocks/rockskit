import PropTypes from "prop-types";

export const MarkdownPropTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export const MarkdownDefaultProps = { value: "" };
