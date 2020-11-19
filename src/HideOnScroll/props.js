import PropTypes from "prop-types";

export const HideOnScrollPropTypes = {
  children: PropTypes.element.isRequired,
  threshold: PropTypes.number,
};

export const HideOnScrollDefaultProps = {
  threshold: 100,
};
