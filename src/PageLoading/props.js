import PropTypes from "prop-types";

export const PageLoadingPropTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(["page", "box"]),
};

export const PageLoadingDefaultProps = {
  type: "page",
};
