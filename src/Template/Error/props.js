import PropTypes from "prop-types";

export const ErrorTemplatePropTypes = {
  action: PropTypes.node,
  image: PropTypes.string,
  statusCode: PropTypes.number,
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

export const ErrorTemplateDefaultProps = {
  title: "oops!",
};
